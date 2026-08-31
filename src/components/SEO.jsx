import { Helmet } from 'react-helmet-async'
import { getGuideBySlug } from '../data/toolGuides.js'
import { TOOL_SEO, CATEGORY_SEO, ARTICLE_SEO, STATIC_SEO } from '../data/seo.js'
import { toolBySlug } from '../data/tools.js'
import { categoryBySlug } from '../data/categories.js'

const SITE_NAME = 'Calciverse'
const SITE_DOMAIN = 'Calciverse.in'
const SITE_URL = 'https://calciverse.in'

export default function SEO({
  title,
  description,
  path = '',
  kind = '',
  type = 'website',
  keywords = '',
  noindex = false,
  publishedAt = '',
  updatedAt = ''
}) {
  let pageTitle = ''
  let pageDesc =
    description ||
    'Free online calculators, converters and generators for GST, EMI, SIP, Income Tax, Health, Education, and Everyday Utilities.'

  const hasPageQuery = path && path.includes('?page=')
  const cleanPath = path ? path.split('?')[0] : ''
  const normalizedPath = (cleanPath || path || '').replace(/\/+$/, '') || '/'
  const canonicalUrl = hasPageQuery
    ? `${SITE_URL}${path}`
    : normalizedPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`

  const slugFromPath = cleanPath.startsWith('/tool/')
    ? cleanPath.replace('/tool/', '')
    : cleanPath.startsWith('/category/')
    ? cleanPath.replace('/category/', '')
    : cleanPath.startsWith('/articles/')
    ? cleanPath.replace('/articles/', '')
    : ''

  const staticMatch = STATIC_SEO[cleanPath]

  if (cleanPath === '/' || cleanPath === '') {
    pageTitle = STATIC_SEO['/'].title
    pageDesc = STATIC_SEO['/'].description
  } else if (cleanPath.startsWith('/tool/')) {
    const toolName = title || SITE_NAME
    const mappedSEO = TOOL_SEO[slugFromPath]

    if (mappedSEO) {
      pageTitle = mappedSEO.title
      pageDesc = mappedSEO.description || mappedSEO.desc
    } else {
      if (kind === 'converter' || toolName.toLowerCase().includes('converter')) {
        pageTitle = `${toolName} — Free Online Converter | ${SITE_DOMAIN}`
        pageDesc = description
          ? `${description} Convert values instantly on Calciverse.in.`
          : `Free online ${toolName} for fast, accurate conversions on Calciverse.in.`
      } else if (kind === 'generator' || toolName.toLowerCase().includes('generator')) {
        pageTitle = `${toolName} — Free Online Generator | ${SITE_DOMAIN}`
        pageDesc = description
          ? `${description} Generate results instantly on Calciverse.in.`
          : `Free online ${toolName} for instant generation on Calciverse.in.`
      } else {
        pageTitle = `${toolName} — Free Online Calculator | ${SITE_DOMAIN}`
        pageDesc = description
          ? `${description} Calculate instantly on Calciverse.in.`
          : `Free online ${toolName} for fast, accurate, and privacy-focused calculations on Calciverse.in.`
      }
    }
  } else if (cleanPath.startsWith('/category/')) {
    const mappedCategory = CATEGORY_SEO[slugFromPath]
    if (mappedCategory) {
      pageTitle = mappedCategory.title
      pageDesc = mappedCategory.description || mappedCategory.desc
    } else {
      pageTitle = `${title || 'Tools'} Calculators & Utilities | ${SITE_DOMAIN}`
      pageDesc = `Explore free online ${title || ''} calculators, converters, and generators on Calciverse.in.`
    }
  } else if (cleanPath.startsWith('/articles/')) {
    const mappedArticle = ARTICLE_SEO[slugFromPath]
    if (mappedArticle) {
      pageTitle = mappedArticle.title
      pageDesc = mappedArticle.description || mappedArticle.desc
    } else {
      pageTitle = `${title || 'Article'} | ${SITE_DOMAIN} Articles`
      pageDesc = description || `Read guide on ${title || 'finance and calculations'} on Calciverse.in.`
    }
  } else if (staticMatch) {
    pageTitle = staticMatch.title
    pageDesc = staticMatch.description
  } else {
    pageTitle = title ? `${title} | ${SITE_DOMAIN}` : `${SITE_NAME} — Free Online Calculators`
  }

  const schemas = []

  if (cleanPath.startsWith('/tool/')) {
    const toolName = title || SITE_NAME
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: toolName,
      url: canonicalUrl,
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      browserRequirements: 'Requires JavaScript. Requires HTML5.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      },
      description: pageDesc
    })

    const tool = toolBySlug(slugFromPath)
    const category = tool ? categoryBySlug(tool.category) : null
    const categoryName = category ? category.name : 'Tools'
    const categoryUrl = category ? `${SITE_URL}/category/${category.slug}` : `${SITE_URL}/`

    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: categoryName,
          item: categoryUrl
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: toolName,
          item: canonicalUrl
        }
      ]
    })

    const guide = getGuideBySlug(slugFromPath)
    if (guide && Array.isArray(guide.faqs) && guide.faqs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: guide.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      })
    }
  } else if (cleanPath.startsWith('/articles/')) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title || 'Calciverse Guide',
      description: pageDesc,
      url: canonicalUrl,
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL
      },
      ...(publishedAt && { datePublished: publishedAt }),
      ...(updatedAt && { dateModified: updatedAt })
    })
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : <meta name="robots" content="index, follow" />}
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={cleanPath.startsWith('/articles/') ? 'article' : type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
