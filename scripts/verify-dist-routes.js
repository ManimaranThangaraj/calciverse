import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, '../dist');
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

console.log('=== VERIFYING DIST PRE-RENDERED STATIC ROUTE FILES ===\n');

if (!fs.existsSync(distDir)) {
  console.error('❌ dist directory does not exist! Run npm run build first.');
  process.exit(1);
}

const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
const urls = [...sitemapXml.matchAll(/<loc>https:\/\/calciverse\.in([^<]*)<\/loc>/g)].map(m => m[1]);

console.log(`Checking ${urls.length} routes from sitemap.xml against dist directory...\n`);

let missing = 0;
urls.forEach(urlPath => {
  let targetFile;
  if (urlPath === '/' || urlPath === '') {
    targetFile = path.join(distDir, 'index.html');
  } else {
    targetFile = path.join(distDir, urlPath.replace(/^\//, ''), 'index.html');
  }

  if (!fs.existsSync(targetFile)) {
    console.error(`❌ MISSING PRE-RENDERED ROUTE FILE: ${targetFile} (URL: ${urlPath})`);
    missing++;
  }
});

if (missing === 0) {
  console.log(`✅ ALL ${urls.length} ROUTES ARE FULLY PRE-RENDERED IN DIST WITH INDEX.HTML FILES!`);
} else {
  console.error(`❌ TOTAL MISSING ROUTE FILES: ${missing}`);
  process.exit(1);
}
