import { writeFileSync, readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const SITE_URL = 'https://www.calciverse.in'

// Read categories, tools, and articles
const toolsJs = readFileSync(resolve(__dirname, '../src/data/tools.js'), 'utf8')
const articlesJs = readFileSync(resolve(__dirname, '../src/data/articles.js'), 'utf8')
const categoriesJs = readFileSync(resolve(__dirname, '../src/data/categories.js'), 'utf8')

// Extract slugs using regex
const toolSlugs = [...toolsJs.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])
const articleSlugs = [...articlesJs.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])
const categorySlugs = [...categoriesJs.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])

const staticPages = [
  '/',
  '/articles',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/disclaimer',
]

const categoryPages = categorySlugs.map((slug) => `/category/${slug}`)
const toolPages = toolSlugs.map((slug) => `/tool/${slug}`)
const articlePages = articleSlugs.map((slug) => `/articles/${slug}`)

const allUrls = [...new Set([...staticPages, ...categoryPages, ...toolPages, ...articlePages])]

const now = new Date().toISOString().split('T')[0]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${u === '/' ? 'daily' : u.startsWith('/tool/') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${u === '/' ? '1.0' : u.startsWith('/tool/') ? '0.8' : '0.6'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

writeFileSync(resolve(__dirname, '../public/sitemap.xml'), xml)
console.log(`Successfully generated public/sitemap.xml with ${allUrls.length} total URLs!`)
