import fs from 'fs';
import { tools } from '../src/data/tools.js';
import { articles } from '../src/data/articles.js';
import { categories } from '../src/data/categories.js';

const validRoutes = new Set([
  '/', '/articles', '/about', '/contact', '/privacy-policy', '/terms', '/disclaimer'
]);

categories.forEach(c => validRoutes.add('/category/' + c.slug));
tools.forEach(t => validRoutes.add('/tool/' + t.slug));
articles.forEach(a => validRoutes.add('/articles/' + a.slug));

function checkFile(file) {
  const code = fs.readFileSync(file, 'utf8');
  const regex = /to=["']([^"']+)["']/g;
  let match;
  let broken = 0;
  while ((match = regex.exec(code)) !== null) {
    const link = match[1];
    if (!validRoutes.has(link) && !link.startsWith('http')) {
      console.log('BROKEN LINK in ' + file + ': ' + link);
      broken++;
    }
  }
  return broken;
}

let brokenCount = 0;
brokenCount += checkFile('./src/components/Footer.jsx');
brokenCount += checkFile('./src/components/Header.jsx');
brokenCount += checkFile('./src/pages/Home.jsx');
brokenCount += checkFile('./src/pages/StaticPages.jsx');

if (brokenCount === 0) {
  console.log('✅ ALL HEADER, FOOTER, HOME & STATIC PAGE LINKS ARE 100% VALID!');
} else {
  console.error('TOTAL BROKEN LINKS FOUND:', brokenCount);
}
