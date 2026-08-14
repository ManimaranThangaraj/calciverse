import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Calciverse'
const SITE_DOMAIN = 'Calciverse.in'
const SITE_URL = 'https://calciverse.in'

export default function SEO({ title, description, path = '', type = 'website' }) {
  const fullTitle = title 
    ? `${title} — Free Online Tool & Calculator | ${SITE_DOMAIN}` 
    : `${SITE_NAME} — Free Online Calculators, Financial & Utility Tools (${SITE_DOMAIN})`

  const url = `${SITE_URL}${path}`
  const defaultDesc = description || 'Free online calculators, converters and generators for GST, EMI, SIP, Income Tax, Health, Education, and Everyday Utilities. Instant, accurate calculations on Calciverse.in.'

  // Schema.org Structured Data Array
  const schemas = []

  if (path.startsWith('/tool/')) {
    const toolName = title || SITE_NAME
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      '@id': `${url}#webapp`,
      name: toolName,
      url: url,
      description: defaultDesc,
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      browserRequirements: 'Requires JavaScript',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '1280'
      }
    })

    // BreadcrumbList Schema
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
          name: toolName,
          item: url
        }
      ]
    })
  } else if (path.startsWith('/articles/')) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: defaultDesc,
      url: url,
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`
      }
    })
  } else {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      description: defaultDesc
    })
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={defaultDesc} />
      <meta name="keywords" content={`Calciverse, Calciverse.in, ${title || 'calculators'}, online calculator, free calculator, GST calculator, EMI calculator, SIP calculator, income tax calculator`} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={defaultDesc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_DOMAIN} />
      <meta property="og:image" content={`${SITE_URL}/logo.png`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={defaultDesc} />
      <meta name="twitter:image" content={`${SITE_URL}/logo.png`} />

      {/* Schema.org JSON-LD */}
      {schemas.map((s, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  )
}
