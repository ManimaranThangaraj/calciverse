import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { tools } from '../src/data/tools.js'
import { articles } from '../src/data/articles.js'
import { categories } from '../src/data/categories.js'
import { toolGuides } from '../src/data/toolGuides.js'
import { TOOL_SEO, CATEGORY_SEO, ARTICLE_SEO, STATIC_SEO } from '../src/data/seo.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const ROOT = resolve(__dirname, '..')
const DIST = resolve(ROOT, 'dist')

const SITE_URL = 'https://calciverse.in'
const SITE_NAME = 'Calciverse'
const LOGO_URL = `${SITE_URL}/logo.png`

const esc = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

/*
 * SEO titles/descriptions for important pages.
 * Add/update entries here as you optimize more pages.
 */

function getToolSEO(tool) {
  const mapped = TOOL_SEO[tool.slug]
  if (mapped) return mapped
  return {
    title: `${tool.name} – Calciverse`,
    description:
      tool.description ||
      `Use the free ${tool.name} online from Calciverse for fast and accurate calculations.`
  }
}

function getArticleSEO(article) {
  const mapped = ARTICLE_SEO[article.slug]
  if (mapped) return mapped
  const description =
    article.metaDescription ||
    article.description ||
    article.excerpt ||
    `Learn ${article.title.toLowerCase()} with clear explanations, examples, formulas, and practical guidance from Calciverse.`

  return {
    title: `${article.title} | Calciverse`,
    description: description.length > 160
      ? `${description.substring(0, 157).trim()}...`
      : description
  }
}

function createHtml(template, {
  path,
  title,
  description,
  type = 'website',
  article = null
}) {
  const canonical =
    path === '/'
      ? `${SITE_URL}/`
      : `${SITE_URL}${path}`

  const articleMeta = article
    ? `
    <meta property="article:published_time" content="${esc(article.publishedAt || '')}" />
    <meta property="article:modified_time" content="${esc(article.updatedAt || article.publishedAt || '')}" />
    `
    : ''

  const schema = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        url: canonical,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonical
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: `${SITE_URL}/`,
          logo: {
            '@type': 'ImageObject',
            url: LOGO_URL
          }
        },
        datePublished: article.publishedAt || undefined,
        dateModified: article.updatedAt || article.publishedAt || undefined
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        description,
        url: canonical,
        isPartOf: {
          '@type': 'WebSite',
          name: SITE_NAME,
          url: `${SITE_URL}/`
        }
      }

  const cleanSchema = JSON.stringify(schema, (_, value) =>
    value === undefined ? undefined : value
  )

  let html = template

  html = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${esc(title)}</title>`
  )

  html = html.replace(
    /<meta name="description"[^>]*>/i,
    `<meta name="description" content="${esc(description)}" />`
  )

  html = html.replace(
    /<link rel="canonical"[^>]*>/gi,
    ''
  )

  html = html.replace(
    /<meta property="og:title"[^>]*>/i,
    `<meta property="og:title" content="${esc(title)}" />`
  )

  html = html.replace(
    /<meta property="og:description"[^>]*>/i,
    `<meta property="og:description" content="${esc(description)}" />`
  )

  html = html.replace(
    /<meta property="og:url"[^>]*>/i,
    `<meta property="og:url" content="${canonical}" />`
  )

  html = html.replace(
    /<meta name="twitter:title"[^>]*>/i,
    `<meta name="twitter:title" content="${esc(title)}" />`
  )

  html = html.replace(
    /<meta name="twitter:description"[^>]*>/i,
    `<meta name="twitter:description" content="${esc(description)}" />`
  )

  html = html.replace(
    /<meta name="robots"[^>]*>/i,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`
  )

  if (path !== '/') {
    html = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/gi,
      ''
    )
  }

  let faqSchemaTag = ''
  if (path.startsWith('/tool/')) {
    const toolSlug = path.replace('/tool/', '')
    const guide = toolGuides[toolSlug]
    if (guide && guide.faqs && guide.faqs.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: guide.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer
          }
        }))
      }
      faqSchemaTag = `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`
    }
  }

  html = html.replace(
    '</head>',
    `
    <link rel="canonical" href="${canonical}" />
    ${articleMeta}
    <script type="application/ld+json">${cleanSchema}</script>
    ${faqSchemaTag}
    </head>
    `
  )

  return html
}

function writeRoute(template, path, seo, article = null) {
  const routeDir =
    path === '/'
      ? DIST
      : resolve(DIST, path.replace(/^\/|\/$/g, ''))

  mkdirSync(routeDir, { recursive: true })

  const output = resolve(routeDir, 'index.html')

  writeFileSync(
    output,
    createHtml(template, {
      path,
      title: seo.title,
      description: seo.description,
      type: article ? 'article' : 'website',
      article
    }),
    'utf8'
  )

  console.log(`Generated ${path}`)
}

const templatePath = resolve(DIST, 'index.html')

if (!existsSync(templatePath)) {
  throw new Error('dist/index.html not found. Run vite build first.')
}

const template = readFileSync(templatePath, 'utf8')

// Static pages
for (const [path, seo] of Object.entries(STATIC_SEO)) {
  writeRoute(template, path, seo)
}

// Categories
for (const category of categories) {
  const path = `/category/${category.slug}`

  writeRoute(template, path, {
    title: `${category.name} Calculators & Tools | Calciverse.in`,
    description:
      `Free ${category.name.toLowerCase()} calculators and online tools from Calciverse.in.`
  })
}

// Tools
for (const tool of tools.filter((t) => t.status === 'live')) {
  const path = `/tool/${tool.slug}`

  writeRoute(
    template,
    path,
    getToolSEO(tool)
  )
}

// Articles
for (const article of articles.filter((a) => a.status === 'live')) {
  const path = `/articles/${article.slug}`

  writeRoute(
    template,
    path,
    getArticleSEO(article),
    article
  )
}

console.log('Route-specific SEO HTML generation complete.')
