import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { tools } from '../src/data/tools.js'
import { articles } from '../src/data/articles.js'
import { categories } from '../src/data/categories.js'
import { toolGuides } from '../src/data/toolGuides.js'

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
const TOOL_SEO = {
  'emi-calculator': {
    title: 'EMI Calculator – Monthly Loan Payment | Calciverse.in',
    description:
      'Calculate your monthly EMI, total interest, and total repayment for home, car, and personal loans. Free EMI calculator with instant results.'
  },

  'gst-calculator': {
    title: 'GST Calculator India – Add, Remove GST, CGST & SGST | Calciverse',
    description:
      'Calculate GST online in India. Add or remove 5%, 12%, 18% or 28% GST and calculate CGST, SGST and IGST instantly with our free GST calculator.'
  },

  'income-tax-calculator': {
    title: 'Income Tax Calculator FY 2026-27 – Old vs New Regime | Calciverse.in',
    description:
      'Calculate your income tax for FY 2026-27 under the New and Old Tax Regimes. Compare tax liability, deductions, rebates, and applicable tax slabs.'
  },

  'sip-calculator': {
    title: 'SIP Calculator – Mutual Fund Returns & Wealth Growth | Calciverse.in',
    description:
      'Calculate SIP maturity value, total investment, estimated returns, and wealth gained from monthly mutual fund investments.'
  },

  'fd-calculator': {
    title: 'FD Calculator – Fixed Deposit Maturity & Interest | Calciverse.in',
    description:
      'Calculate fixed deposit maturity value and total interest earned using different compounding frequencies.'
  },

  'rd-calculator': {
    title: 'RD Calculator – Recurring Deposit Maturity Amount | Calciverse.in',
    description:
      'Calculate recurring deposit maturity value and total interest earned from monthly RD investments.'
  },

  'ppf-calculator': {
    title: 'PPF Calculator – Public Provident Fund Maturity | Calciverse.in',
    description:
      'Calculate PPF maturity corpus, total investment, and interest earned over the investment period.'
  },

  'bmi-calculator': {
    title: 'BMI Calculator – Body Mass Index & Healthy Weight | Calciverse.in',
    description:
      'Calculate your Body Mass Index from height and weight and understand the standard BMI categories.'
  },

  'ideal-weight-calculator': {
    title: 'Ideal Weight Calculator – Healthy Weight Range by Height | Calciverse',
    description:
      'Calculate an estimated ideal and healthy weight range based on your height, biological sex, and clinical formulas.'
  },

  'calorie-calculator': {
    title: 'Calorie Calculator – Daily Calories & TDEE | Calciverse.in',
    description:
      'Calculate your estimated daily calorie needs, BMR, and TDEE based on your age, height, weight, and activity level.'
  },

  'prime-number-checker': {
    title: 'Prime Number Checker – Is This Number Prime? | Calciverse',
    description:
      'Check whether a number is prime or composite instantly using trial division up to the square root.'
  },

  'number-to-words-converter': {
    title: 'Number to Words Converter – Indian & International | Calciverse',
    description:
      'Convert numbers to words online using Indian and International numbering systems. Convert amounts such as ₹1,25,000 into words instantly.'
  },

  'credit-card-interest-calculator': {
    title: 'Credit Card Interest Calculator – Finance Charges | Calciverse.in',
    description:
      'Calculate credit card interest, finance charges, repayment time, and total interest on outstanding balances.'
  },

  'mortgage-calculator': {
    title: 'Home Loan EMI & Mortgage Calculator India | Calciverse',
    description:
      'Calculate home loan EMI, monthly payment, total interest and repayment amount. Compare loan amounts, interest rates and repayment periods with Calciverse.'
  },

  'tds-calculator': {
    title: 'TDS Calculator Online – Tax Deducted at Source | Calciverse.in',
    description:
      'Calculate Tax Deducted at Source for salary, interest, professional payments, and other applicable income.'
  },

  'percentage-calculator': {
    title: 'Percentage Calculator – Calculate Percentages Easily | Calciverse.in',
    description:
      'Calculate percentages, percentage increase and decrease, and find what percentage one number is of another.'
  },

  'exponent-calculator': {
    title: 'Exponent Calculator – Calculate x^y Powers | Calciverse.in',
    description:
      'Calculate base numbers raised to positive or negative exponents instantly with step-by-step math rules.'
  },

  'average-calculator': {
    title: 'Average Calculator – Mean, Median, Mode & Range | Calciverse.in',
    description:
      'Calculate the mean, median, mode, range, and other statistics from a list of numbers.'
  },

  'fraction-calculator': {
    title: 'Fraction Calculator – Add, Subtract, Multiply & Divide | Calciverse.in',
    description:
      'Calculate addition, subtraction, multiplication, and division of fractions with clear results.'
  },

  'square-root-calculator': {
    title: 'Square Root Calculator – Calculate Square & Cube Roots | Calciverse.in',
    description:
      'Calculate square roots and cube roots of numbers quickly and accurately.'
  },

  'json-formatter': {
    title: 'JSON Formatter & Validator – Format JSON Online | Calciverse.in',
    description:
      'Format, validate, beautify, and minify JSON data online with an easy-to-use JSON formatter.'
  },

  'html-entity-converter': {
    title: 'HTML Entity Converter – Encode & Decode HTML | Calciverse.in',
    description:
      'Convert special characters to HTML entities and decode HTML entities back into readable characters.'
  },

  'url-encoder-decoder': {
    title: 'URL Encoder & Decoder – Encode URLs Online | Calciverse.in',
    description:
      'Encode and decode URLs, URI components, query parameters, and special characters online.'
  },

  'gpa-calculator': {
    title: 'GPA Calculator – Calculate Grade Point Average | Calciverse.in',
    description:
      'Calculate cumulative GPA from course grades and credit hours with support for 4.0, 5.0, and custom grading scales.'
  },

  'cgpa-calculator': {
    title: 'CGPA Calculator – Calculate Cumulative Grade Point Average | Calciverse.in',
    description:
      'Calculate semester and cumulative CGPA across multiple terms with instant percentage conversion.'
  },

  'gpa-to-percentage-converter': {
    title: 'GPA to Percentage Converter – Convert GPA to % | Calciverse.in',
    description:
      'Convert GPA scores on 4.0, 5.0, and 10.0 scales to equivalent percentages and letter grades.'
  },

  'cgpa-to-percentage-calculator': {
    title: 'CGPA to Percentage Converter – Convert 10-Point CGPA to % | Calciverse.in',
    description:
      'Convert CGPA scores out of 10 to percentage using standard university formulas (including CBSE 9.5 multiplier).'
  },

  'grade-calculator': {
    title: 'Grade Calculator – Final Exam Target Score | Calciverse.in',
    description:
      'Calculate what score you need on your final exam to achieve your target overall course grade.'
  }
}

const STATIC_SEO = {
  '/': {
    title: 'Free Online Calculators & Tools | Calciverse.in',
    description:
      'Calciverse offers free online calculators, converters, and useful tools for finance, health, math, education, business, and everyday calculations.'
  },

  '/articles': {
    title: 'Calculator Guides & Articles | Calciverse.in',
    description:
      'Helpful guides explaining calculator formulas, financial calculations, mathematics, health calculations, and everyday topics.'
  },

  '/about': {
    title: 'About Calciverse – Free Online Calculators',
    description:
      'Learn about Calciverse and our collection of free online calculators, converters, and practical digital tools.'
  },

  '/contact': {
    title: 'Contact Calciverse',
    description:
      'Contact the Calciverse team with questions, suggestions, corrections, or feedback about our calculators and tools.'
  },

  '/privacy-policy': {
    title: 'Privacy Policy | Calciverse.in',
    description:
      'Read the Calciverse privacy policy and learn how information is handled when you use our website.'
  },

  '/terms': {
    title: 'Terms of Use | Calciverse.in',
    description:
      'Read the terms and conditions governing the use of Calciverse calculators and website services.'
  },

  '/disclaimer': {
    title: 'Disclaimer | Calciverse.in',
    description:
      'Read the Calciverse disclaimer regarding calculator results, financial information, health information, and general content.'
  }
}

function getToolSEO(tool) {
  return TOOL_SEO[tool.slug] || {
    title: `${tool.name} – Calciverse.in`,
    description:
      tool.description ||
      `Use the free ${tool.name} online from Calciverse.in for fast and accurate calculations.`
  }
}

function getArticleSEO(article) {
  const description =
    article.metaDescription ||
    article.description ||
    article.excerpt ||
    `Learn ${article.title.toLowerCase()} with clear explanations, examples, formulas, and practical guidance from Calciverse.`

  return {
    title: `${article.title} | Calciverse.in`,
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
