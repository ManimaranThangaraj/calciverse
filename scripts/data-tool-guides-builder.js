// Merges all 7 bespoke category modules for all 143 tools
import { financeToolGuides } from './tools-data-finance.js';
import { healthToolGuides } from './tools-data-health.js';
import { educationToolGuides } from './tools-data-education.js';
import { businessToolGuides } from './tools-data-business.js';
import { developerToolGuides } from './tools-data-developer.js';
import { mathToolGuides } from './tools-data-math.js';
import { everydayToolGuides } from './tools-data-everyday.js';

export function generateAllGuides(tools) {
  const merged = {
    ...financeToolGuides,
    ...healthToolGuides,
    ...educationToolGuides,
    ...businessToolGuides,
    ...developerToolGuides,
    ...mathToolGuides,
    ...everydayToolGuides
  };

  const guides = {};
  for (const tool of tools) {
    const bespoke = merged[tool.slug];
    if (bespoke) {
      guides[tool.slug] = {
        title: `${tool.name} — ${tool.category.toUpperCase()} Guide & Formula`,
        ...bespoke
      };
    } else {
      console.warn(`Missing bespoke guide for ${tool.slug}`);
    }
  }

  return guides;
}
