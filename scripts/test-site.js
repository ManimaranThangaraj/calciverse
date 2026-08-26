import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { tools } from '../src/data/tools.js';
import { articles } from '../src/data/articles.js';
import { categories } from '../src/data/categories.js';
import { toolGuides } from '../src/data/toolGuides.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('=== CALCIVERSE FULL SITE AUTOMATED TEST SUITE ===\n');

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

// Test 1: Tools Count & Status
assert(tools.length === 121, `Total tools count is 121 (Actual: ${tools.length})`);
const liveTools = tools.filter(t => t.status === 'live');
assert(liveTools.length === 121, `All 121 tools are marked status: 'live' (Actual: ${liveTools.length})`);

// Test 2: Unique Tool Guides Coverage
const guideKeys = Object.keys(toolGuides);
assert(guideKeys.length === 121, `toolGuides.js contains 121 guide objects (Actual: ${guideKeys.length})`);

let missingGuides = 0;
let emptyFormulas = 0;
let emptyExamples = 0;
let emptyFaqs = 0;

tools.forEach(t => {
  const g = toolGuides[t.slug];
  if (!g) {
    missingGuides++;
  } else {
    if (!g.formula || g.formula.includes('Optimized_Function')) emptyFormulas++;
    if (!g.example || !g.example.steps || g.example.steps.length === 0) emptyExamples++;
    if (!g.faqs || g.faqs.length === 0) emptyFaqs++;
  }
});

assert(missingGuides === 0, `0 tools are missing from toolGuides.js (Actual missing: ${missingGuides})`);
assert(emptyFormulas === 0, `0 tools use generic placeholder formulas (Actual: ${emptyFormulas})`);
assert(emptyExamples === 0, `0 tools lack worked examples (Actual: ${emptyExamples})`);
assert(emptyFaqs === 0, `0 tools lack tool-specific FAQs (Actual: ${emptyFaqs})`);

// Test 3: Articles Word Count & Depth
assert(articles.length === 60, `Total articles count is 60 (Actual: ${articles.length})`);

let shortArticles = 0;
let totalWords = 0;

articles.forEach(a => {
  const words = a.content.join(' ').split(/\s+/).length;
  totalWords += words;
  if (words < 500) shortArticles++;
});

const avgWords = Math.round(totalWords / articles.length);
assert(shortArticles === 0, `0 articles have word count < 500 (Actual short articles: ${shortArticles})`);
assert(avgWords >= 600, `Average article length is >= 600 words (Actual average: ${avgWords} words)`);

// Test 4: Categories & Sitemap
assert(categories.length === 7, `Total categories count is 7 (Actual: ${categories.length})`);

const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
assert(fs.existsSync(sitemapPath), `public/sitemap.xml exists`);
if (fs.existsSync(sitemapPath)) {
  const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
  const urlCount = (sitemapXml.match(/<loc>/g) || []).length;
  assert(urlCount === 195, `sitemap.xml contains 195 URLs (Actual URLs: ${urlCount})`);
}

// Test 5: Ads.txt & Robots.txt
const adsTxtPath = path.join(__dirname, '../public/ads.txt');
assert(fs.existsSync(adsTxtPath), `public/ads.txt exists`);
if (fs.existsSync(adsTxtPath)) {
  const adsContent = fs.readFileSync(adsTxtPath, 'utf8');
  assert(adsContent.includes('pub-3328643502138366'), `ads.txt contains valid AdSense publisher ID`);
}

const robotsTxtPath = path.join(__dirname, '../public/robots.txt');
assert(fs.existsSync(robotsTxtPath), `public/robots.txt exists`);

console.log(`\n=== TEST RESULTS: ${passCount} PASSED, ${failCount} FAILED ===`);
if (failCount > 0) process.exit(1);
