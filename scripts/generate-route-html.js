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

function formatTitle(title) {
  if (!title) return 'Free Online Calculators & Tools | Calciverse'
  const str = String(title).replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim()
  if (str.length <= 55) return str

  const parts = str.split(/\s+[\|\—\–\-]\s+/)
  const core = parts[0].trim()
  const suffix = ' | Calciverse'

  if (core.length + suffix.length <= 55) {
    return `${core}${suffix}`
  }

  const maxCore = 55 - suffix.length // 42 chars
  return `${core.substring(0, maxCore - 3).trim()}...${suffix}`
}

function getToolSEO(tool) {
  const mapped = TOOL_SEO[tool.slug]
  if (mapped) return { ...mapped, title: formatTitle(mapped.title) }
  return {
    title: formatTitle(`${tool.name} | Calciverse`),
    description:
      tool.description ||
      `Use the free ${tool.name} online from Calciverse for fast and accurate calculations.`
  }
}

function getArticleSEO(article) {
  const mapped = ARTICLE_SEO[article.slug]
  if (mapped) return { ...mapped, title: formatTitle(mapped.title) }
  const description =
    article.metaDescription ||
    article.description ||
    article.excerpt ||
    `Learn ${article.title.toLowerCase()} with clear explanations, examples, formulas, and practical guidance from Calciverse.`

  return {
    title: formatTitle(`${article.title} | Calciverse`),
    description: description.length > 160
      ? `${description.substring(0, 157).trim()}...`
      : description
  }
}

function renderBodyHtml(path, seo, article = null) {
  if (path.startsWith('/tool/')) {
    const slug = path.replace('/tool/', '')
    const tool = tools.find((t) => t.slug === slug) || { name: 'Tool', description: seo.description }
    const guide = toolGuides[slug]
    const relatedTools = tools
      .filter((t) => t.category === tool.category && t.slug !== slug && t.status === 'live')
      .slice(0, 6)

    let content = `
      <div class="mx-auto max-w-4xl px-5 py-8">
        <h1>${esc(tool.name)}</h1>
        <p>${esc(tool.description || seo.description)}</p>
    `

    if (guide) {
      if (guide.overview) {
        content += `<section><h2>Overview</h2><p>${esc(guide.overview)}</p></section>`
      }
      if (guide.formula) {
        content += `<section><h2>Formula & Calculation Method</h2><p><code>${esc(guide.formula)}</code></p><p>${esc(guide.explanation || '')}</p></section>`
      }
      if (guide.example) {
        content += `
          <section>
            <h2>${esc(guide.example.title || 'Worked Real-World Example')}</h2>
            <p><strong>Inputs:</strong> ${esc(guide.example.inputs || '')}</p>
            <ul>
              ${(guide.example.steps || []).map((step) => `<li>${esc(step)}</li>`).join('')}
            </ul>
            <p><strong>Summary:</strong> ${esc(guide.example.summary || '')}</p>
          </section>
        `
      }
      if (guide.useCases && guide.useCases.length) {
        content += `
          <section>
            <h2>Common Use Cases</h2>
            <ul>
              ${guide.useCases.map((uc) => `<li>${esc(uc)}</li>`).join('')}
            </ul>
          </section>
        `
      }
      if (guide.faqs && guide.faqs.length) {
        content += `
          <section>
            <h2>Frequently Asked Questions</h2>
            ${guide.faqs
              .map(
                (f) => `
              <article>
                <h3>${esc(f.question)}</h3>
                <p>${esc(f.answer)}</p>
              </article>
            `
              )
              .join('')}
          </section>
        `
      }
    }

    if (relatedTools.length) {
      content += `
        <section>
          <h2>Related Calculators & Tools</h2>
          <ul>
            ${relatedTools
              .map(
                (rt) => `
              <li>
                <a href="/tool/${rt.slug}">${esc(rt.name)}</a> - ${esc(rt.description)}
              </li>
            `
              )
              .join('')}
          </ul>
        </section>
      `
    }

    content += `</div>`
    return content
  }

  if (path.startsWith('/articles/')) {
    if (!article) return ''
    let content = `
      <article class="mx-auto max-w-2xl px-5 py-10">
        <nav><a href="/articles">Articles</a> / ${esc(article.title)}</nav>
        <h1>${esc(article.title)}</h1>
        <p><em>${esc(article.readMinutes || 5)} min read</em></p>
        <p>${esc(article.excerpt || '')}</p>
        <div class="prose">
    `

    for (const p of article.content) {
      if (typeof p !== 'string') continue
      if (p.startsWith('## ')) {
        content += `<h2>${esc(p.replace('## ', ''))}</h2>`
      } else if (p.startsWith('### ')) {
        content += `<h3>${esc(p.replace('### ', ''))}</h3>`
      } else if (p.startsWith('- ')) {
        const items = p.split('\n- ').map((i) => i.replace(/^- /, ''))
        content += `<ul>${items.map((it) => `<li>${esc(it)}</li>`).join('')}</ul>`
      } else {
        content += `<p>${esc(p)}</p>`
      }
    }

    content += `</div></article>`
    return content
  }

  if (path.startsWith('/category/')) {
    const slug = path.replace('/category/', '')
    const category = categories.find((c) => c.slug === slug)
    const categoryTools = tools.filter((t) => t.category === slug && t.status === 'live')

    let content = `
      <div class="mx-auto max-w-4xl px-5 py-8">
        <h1>${esc(category ? category.name : 'Category')} Calculators & Tools</h1>
        <p>${esc(seo.description)}</p>
        <section>
          <h2>Popular Tools in ${esc(category ? category.name : 'this category')}</h2>
          <ul>
            ${categoryTools
              .map(
                (t) => `
              <li>
                <a href="/tool/${t.slug}">${esc(t.name)}</a> - ${esc(t.description)}
              </li>
            `
              )
              .join('')}
          </ul>
        </section>
      </div>
    `
    return content
  }

  if (path === '/articles') {
    let content = `
      <div class="mx-auto max-w-4xl px-5 py-8">
        <h1>Calculators & Finance Articles</h1>
        <p>${esc(seo.description)}</p>
        <section>
          <h2>All Published Explainers & Guides</h2>
          <ul>
            ${articles
              .filter((a) => a.status === 'live')
              .map(
                (a) => `
              <li>
                <a href="/articles/${a.slug}">${esc(a.title)}</a> - ${esc(a.excerpt)}
              </li>
            `
              )
              .join('')}
          </ul>
        </section>
      </div>
    `
    return content
  }

  if (path === '/about') {
    return `
      <div class="mx-auto max-w-3xl px-5 py-10">
        <h1>About Calciverse</h1>
        <p>${esc(seo.description)}</p>
        <section>
          <h2>Our Mission</h2>
          <p>Calciverse provides fast, accurate, and privacy-focused online calculators, converters, and financial planning utilities. All computations execute locally in your browser memory without server data logging or invasive sign-up forms.</p>
        </section>
      </div>
    `
  }

  if (path === '/contact') {
    return `
      <div class="mx-auto max-w-3xl px-5 py-10">
        <h1>Contact Calciverse</h1>
        <p>${esc(seo.description)}</p>
        <section>
          <h2>Get in Touch</h2>
          <p>Have suggestions for new calculators, bug reports, or partnership inquiries? Reach out to our team at support@calciverse.in.</p>
        </section>
      </div>
    `
  }

  if (path === '/privacy-policy') {
    return `
      <div class="mx-auto max-w-3xl px-5 py-10">
        <h1>Privacy Policy</h1>
        <p>${esc(seo.description)}</p>
        <section>
          <h2>100% Client-Side Computation</h2>
          <p>At Calciverse, your data privacy is paramount. Numerical inputs, personal parameters, and financial figures entered into our tools are processed entirely within your web browser. We do not store, log, or transmit calculation data to external application servers.</p>
        </section>
      </div>
    `
  }

  if (path === '/terms') {
    return `
      <div class="mx-auto max-w-3xl px-5 py-10">
        <h1>Terms of Service</h1>
        <p>${esc(seo.description)}</p>
        <section>
          <h2>Terms of Use</h2>
          <p>Calciverse provides free digital tools for educational, informational, and general calculation purposes. Users are encouraged to verify critical financial, tax, or medical results with certified professionals.</p>
        </section>
      </div>
    `
  }

  if (path === '/disclaimer') {
    return `
      <div class="mx-auto max-w-3xl px-5 py-10">
        <h1>Financial & Medical Disclaimer</h1>
        <p>${esc(seo.description)}</p>
        <section>
          <h2>General Information Disclaimer</h2>
          <p>Calculators and guides on Calciverse are provided for informational and illustrative purposes only. They do not constitute formal financial advice, tax filing instructions, or clinical medical diagnosis.</p>
        </section>
      </div>
    `
  }

  if (path === '/') {
    const popularTools = tools.filter((t) => t.status === 'live' && t.featured).slice(0, 24)
    const featuredArticles = articles.filter((a) => a.status === 'live').slice(0, 10)

    let content = `
      <div class="mx-auto max-w-6xl px-5 py-8">
        <section class="py-4">
          <h1>One tool for the number you need right now.</h1>
          <p>No sign-up, no clutter. Free calculators, converters and generators for money, marks, health and code — plus articles that explain the math behind the numbers.</p>
        </section>

        <section class="py-6">
          <h2>Browse Calculator Categories</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${categories
              .map(
                (c) => `
              <div class="p-4 border border-gray-200 rounded-lg">
                <h3><a href="/category/${c.slug}">${esc(c.name)} Calculators</a></h3>
                <p>${esc(c.tagline || c.description || '')}</p>
              </div>
            `
              )
              .join('')}
          </div>
        </section>

        <section class="py-6">
          <h2>Popular Calculators & Tools</h2>
          <ul>
            ${popularTools
              .map(
                (t) => `
              <li>
                <a href="/tool/${t.slug}">${esc(t.name)}</a> - ${esc(t.description)}
              </li>
            `
              )
              .join('')}
          </ul>
        </section>

        <section class="py-6">
          <h2>Featured Educational Articles</h2>
          <ul>
            ${featuredArticles
              .map(
                (a) => `
              <li>
                <a href="/articles/${a.slug}">${esc(a.title)}</a> - ${esc(a.excerpt)}
              </li>
            `
              )
              .join('')}
          </ul>
        </section>
      </div>
    `
    return content
  }

  return ''
}

function createHtml(template, {
  path,
  title,
  description,
  type = 'website',
  article = null
}) {
  title = formatTitle(title)
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
    /<title[^>]*>[\s\S]*?<\/title>/i,
    `<title data-rh="true">${esc(title)}</title>`
  )

  html = html.replace(
    /<meta\s+(?:data-rh="true"\s+)?name="description"[^>]*>/i,
    `<meta data-rh="true" name="description" content="${esc(description)}" />`
  )

  html = html.replace(
    /<link\s+(?:data-rh="true"\s+)?rel="canonical"[^>]*>/gi,
    ''
  )

  html = html.replace(
    /<meta\s+(?:data-rh="true"\s+)?property="og:title"[^>]*>/i,
    `<meta data-rh="true" property="og:title" content="${esc(title)}" />`
  )

  html = html.replace(
    /<meta\s+(?:data-rh="true"\s+)?property="og:description"[^>]*>/i,
    `<meta data-rh="true" property="og:description" content="${esc(description)}" />`
  )

  html = html.replace(
    /<meta\s+(?:data-rh="true"\s+)?property="og:url"[^>]*>/i,
    `<meta data-rh="true" property="og:url" content="${canonical}" />`
  )

  html = html.replace(
    /<meta\s+(?:data-rh="true"\s+)?name="twitter:title"[^>]*>/i,
    `<meta data-rh="true" name="twitter:title" content="${esc(title)}" />`
  )

  html = html.replace(
    /<meta\s+(?:data-rh="true"\s+)?name="twitter:description"[^>]*>/i,
    `<meta data-rh="true" name="twitter:description" content="${esc(description)}" />`
  )

  html = html.replace(
    /<meta\s+(?:data-rh="true"\s+)?name="robots"[^>]*>/i,
    `<meta data-rh="true" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`
  )

  if (path !== '/') {
    html = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/gi,
      ''
    )
  }

  let extraSchemasTag = ''
  if (path.startsWith('/tool/')) {
    const toolSlug = path.replace('/tool/', '')
    const guide = toolGuides[toolSlug]
    const tool = tools.find(t => t.slug === toolSlug)
    const toolName = tool ? tool.name : title

    const softwareSchema = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: toolName,
      url: canonical,
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      browserRequirements: 'Requires JavaScript. Requires HTML5.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR'
      },
      description
    }

    let extraSchemas = [softwareSchema]

    if (guide && Array.isArray(guide.faqs) && guide.faqs.length > 0) {
      extraSchemas.push({
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
      })
    }

    extraSchemasTag = extraSchemas.map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')
  }

  html = html.replace(
    '</head>',
    `
    <link data-rh="true" rel="canonical" href="${canonical}" />
    ${articleMeta}
    <script type="application/ld+json">${cleanSchema}</script>
    ${extraSchemasTag}
    </head>
    `
  )

  // Inject pre-rendered initial static content inside <div id="root"></div>
  const bodyContent = renderBodyHtml(path, { title, description }, article)
  if (bodyContent) {
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${bodyContent}</div>`
    )
  }

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

// Categories - FIX: Use CATEGORY_SEO from src/data/seo.js
for (const category of categories) {
  const path = `/category/${category.slug}`
  const seo = CATEGORY_SEO[category.slug] || {
    title: `${category.name} Calculators & Tools | Calciverse`,
    description: `Free ${category.name.toLowerCase()} calculators and online tools from Calciverse.`
  }

  writeRoute(template, path, seo)
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

console.log('Route-specific SEO HTML generation complete with static body content.')
