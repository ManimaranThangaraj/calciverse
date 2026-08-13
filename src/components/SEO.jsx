import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Calciverse'
const SITE_URL = 'https://www.calciverse.in'

export default function SEO({ title, description, path = '', type = 'website' }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Free Online Calculators, Converters & Tools`
  const url = `${SITE_URL}${path}`

  // Schema.org Structured Data
  let schema = null
  if (path.startsWith('/tool/')) {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: title || SITE_NAME,
      url: url,
      description: description,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      browserRequirements: 'Requires JavaScript',
    }
  } else if (path.startsWith('/articles/')) {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: description,
      url: url,
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
      },
    }
  } else {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      description: description,
    }
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Schema.org JSON-LD */}
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  )
}
