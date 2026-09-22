import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { toolGuides } from '../src/data/toolGuides.js';
import { articles } from '../src/data/articles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('=== CALCIVERSE CONTENT UNIQUENESS & ADSENSE COMPLIANCE TEST ===\n');

// Extracts 5-word n-grams from text to detect exact copy-pasted sentence blocks
function get5GramSet(text) {
  const words = (text || '').toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter((w) => w.length > 0);
  const ngrams = new Set();
  for (let i = 0; i <= words.length - 5; i++) {
    ngrams.add(words.slice(i, i + 5).join(' '));
  }
  return ngrams;
}

function get5GramOverlap(textA, textB) {
  const setA = get5GramSet(textA);
  const setB = get5GramSet(textB);

  if (setA.size === 0 || setB.size === 0) return 0;

  let common = 0;
  setA.forEach((gram) => {
    if (setB.has(gram)) common++;
  });

  return common / Math.min(setA.size, setB.size);
}

let passCount = 0;
let failCount = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${testName}`);
    failCount++;
  }
}

// Test 1: Tool Guides 5-Gram Sentence Overlap Check
const guideKeys = Object.keys(toolGuides);
let maxGuideOverlap = 0;
let highestGuidePair = '';

for (let i = 0; i < guideKeys.length; i++) {
  for (let j = i + 1; j < guideKeys.length; j++) {
    const keyA = guideKeys[i];
    const keyB = guideKeys[j];
    const gA = toolGuides[keyA];
    const gB = toolGuides[keyB];

    const strA = `${gA.overview} ${gA.explanation} ${(gA.useCases || []).join(' ')} ${(gA.commonMistakes || []).join(' ')}`;
    const strB = `${gB.overview} ${gB.explanation} ${(gB.useCases || []).join(' ')} ${(gB.commonMistakes || []).join(' ')}`;

    const overlap = get5GramOverlap(strA, strB);
    if (overlap > maxGuideOverlap) {
      maxGuideOverlap = overlap;
      highestGuidePair = `${keyA} <-> ${keyB}`;
    }
  }
}

const maxGuideOverlapPct = (maxGuideOverlap * 100).toFixed(1);
assert(maxGuideOverlap < 0.50, `Maximum 5-gram phrase overlap between tool guides is < 50% (Max pair: ${highestGuidePair} @ ${maxGuideOverlapPct}%)`);

// Test 2: Articles 5-Gram Sentence Overlap Check
let maxArticleOverlap = 0;
let highestArticlePair = '';

for (let i = 0; i < articles.length; i++) {
  for (let j = i + 1; j < articles.length; j++) {
    const artA = articles[i];
    const artB = articles[j];

    const strA = (artA.content || []).join(' ');
    const strB = (artB.content || []).join(' ');

    const overlap = get5GramOverlap(strA, strB);
    if (overlap > maxArticleOverlap) {
      maxArticleOverlap = overlap;
      highestArticlePair = `${artA.slug} <-> ${artB.slug}`;
    }
  }
}

const maxArticleOverlapPct = (maxArticleOverlap * 100).toFixed(1);
assert(maxArticleOverlap < 0.50, `Maximum 5-gram phrase overlap between articles is < 50% (Max pair: ${highestArticlePair} @ ${maxArticleOverlapPct}%)`);

// Test 3: Zero Templated Boilerplate Sentences
let boilerplateCount = 0;
guideKeys.forEach((key) => {
  const g = toolGuides[key];
  const fullText = JSON.stringify(g);
  if (fullText.includes('Standard parameters for')) boilerplateCount++;
  if (fullText.includes('Evaluate quantitative decisions before making commitments')) boilerplateCount++;
  if (fullText.includes('Comprehensive Guide & Theoretical Foundation')) boilerplateCount++;
});

assert(boilerplateCount === 0, `0 tools contain auto-generated template boilerplate phrases (Actual: ${boilerplateCount})`);

console.log(`\n=== UNIQUENESS TEST RESULTS: ${passCount} PASSED, ${failCount} FAILED ===`);
if (failCount > 0) process.exit(1);
