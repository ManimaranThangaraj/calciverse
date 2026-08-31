import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { tools } from '../src/data/tools.js'
import { articles } from '../src/data/articles.js'
import { categories } from '../src/data/categories.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const SITE_URL = 'https://calciverse.in'
const TODAY = '2026-08-31'

// Extract live slugs directly from data objects
const toolSlugs = tools.filter((t) => t.status === 'live').map((t) => t.slug)
const articleSlugs = articles.filter((a) => a.status === 'live').map((a) => a.slug)
const categorySlugs = categories.map((c) => c.slug)

// Map of route path to lastmod date string if available
const articleDateMap = new Map()
articles.forEach((a) => {
  if (a.slug) {
    const date = a.updatedAt || a.publishedAt
    if (date) {
      articleDateMap.set(`/articles/${a.slug}`, date)
    }
  }
})

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

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map((u) => {
    const lastmodDate = articleDateMap.get(u) || TODAY
    return `  <url>
    <loc>${SITE_URL}${u}</loc>
    <lastmod>${lastmodDate}</lastmod>
  </url>`
  })
  .join('\n')}
</urlset>
`

writeFileSync(resolve(__dirname, '../public/sitemap.xml'), xml)
console.log(`Successfully generated public/sitemap.xml with ${allUrls.length} total URLs!`)
