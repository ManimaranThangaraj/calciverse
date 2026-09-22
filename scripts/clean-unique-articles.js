import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { articles } from '../src/data/articles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const articlesFilePath = path.join(__dirname, '../src/data/articles.js');

console.log(`Cleaning all ${articles.length} articles to remove shared template sections...`);

const cleanArticles = articles.map((art) => {
  const content = art.content || [];

  // Filter out any boilerplate paragraphs containing generic template text
  const cleanContent = content.filter((paragraph) => {
    const text = String(paragraph);
    if (text.includes('Navigating ') && text.includes('requires a thorough understanding')) return false;
    if (text.includes("In today's digital environment, many consumers rely on oversimplified estimates")) return false;
    if (text.includes('## Mathematical Foundations & Statutory Standards')) return false;
    if (text.includes('ISO specifications, IEEE floating-point arithmetic standards')) return false;
    if (text.includes('## Worked Real-World Example & Numerical Analysis')) return false;
    if (text.includes('To illustrate how ') && text.includes('operates in practice')) return false;
    if (text.includes('Step 1: Enter your specific parameters')) return false;
    if (text.includes('Summary Result: Instant, high-precision calculation')) return false;
    if (text.includes('## Key Variables & Sensitivity Analysis')) return false;
    if (text.includes('When evaluating ') && text.includes('understanding how changes in individual inputs')) return false;
    if (text.includes('Primary Baseline Parameter: Initial inputs establish')) return false;
    if (text.includes('Rate or Multiplier Factor: Higher percentages')) return false;
    if (text.includes('Duration & Compounding Frequencies: Time horizon')) return false;
    if (text.includes('Processing Fees & Inflation Adjustments: Real-world')) return false;
    if (text.includes('## Common Pitfalls & Mistakes to Avoid')) return false;
    if (text.includes('Entering parameters in mismatched measurement units')) return false;
    if (text.includes('Ignoring statutory taxes, processing fees')) return false;
    if (text.includes('Relying on unverified rules of thumb')) return false;
    if (text.includes('## Frequently Asked Questions')) return false;
    if (text.includes('calculates results instantly based on standard formulas')) return false;
    if (text.includes('All calculators, converters, and generators on Calciverse.in are 100% free')) return false;
    if (text.includes('You can copy output metrics directly to your clipboard')) return false;
    if (text.includes('Calciverse operates strictly on local client-side execution')) return false;
    if (text.includes('## Strategic Summary & Practical Recommendation')) return false;
    if (text.includes('Mastering ') && text.includes('provides the clarity needed to make confident')) return false;
    if (text.includes('Comprehensive Guide & Theoretical Foundation:')) return false;
    if (text.includes('Key Variables & Parameter Breakdown:')) return false;
    if (text.includes('Step-by-Step Practical Application & Scenario Modeling:')) return false;
    if (text.includes('Common Pitfalls & Mistakes to Avoid:')) return false;
    if (text.includes('Expert Summary & Actionable Recommendations:')) return false;
    return true;
  });

  const wordCount = cleanContent.join(' ').split(/\s+/).length;

  return {
    ...art,
    readMinutes: Math.max(4, Math.ceil(wordCount / 150)),
    content: cleanContent
  };
});

const newJsContent = `// Master dataset containing clean, 100% unique articles for all ${cleanArticles.length} topics.
// Zero template boilerplate (required for Google AdSense Publisher Compliance).
export const articles = ${JSON.stringify(cleanArticles, null, 2)};

export const liveArticles = articles.filter((a) => a.status === 'live');
export const articleBySlug = (slug) => articles.find((a) => a.slug === slug);
export const articlesByCategory = (cat) => articles.filter((a) => a.category === cat);
`;

fs.writeFileSync(articlesFilePath, newJsContent, 'utf8');
console.log(`✅ Successfully cleaned all ${cleanArticles.length} articles!`);
