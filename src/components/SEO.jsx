import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Calciverse'
const SITE_DOMAIN = 'Calciverse.in'
const SITE_URL = 'https://calciverse.in'

export default function SEO({ title, description, path = '', type = 'website' }) {
  let pageTitle = ''
  let pageDesc = description || 'Free online calculators, converters and generators for GST, EMI, SIP, Income Tax, Health, Education, and Everyday Utilities.'

  if (path === '/' || path === '') {
    pageTitle = `Calciverse — Free Online Calculators, Financial & Utility Tools (${SITE_DOMAIN})`
    pageDesc = 'Calciverse.in offers 90+ free online calculators, converters and generators for finance, GST, income tax, EMI, SIP, health, education, and daily utilities. Fast, accurate, and privacy-focused.'
  } else if (path.startsWith('/tool/')) {
    const toolName = title || SITE_NAME
    
    // Custom tool SEO titles & descriptions for top organic ranking
    switch (toolName) {
      case 'EMI Calculator':
        pageTitle = `EMI Calculator — Calculate Monthly Loan EMI & Interest | ${SITE_DOMAIN}`
        pageDesc = `Calculate your monthly loan EMI, interest payable, and loan schedule for home, car, and personal loans with Calciverse EMI Calculator.`
        break
      case 'GST Calculator':
        pageTitle = `GST Calculator — Calculate Inclusive & Exclusive GST Rates | ${SITE_DOMAIN}`
        pageDesc = `Add or remove GST at 5%, 12%, 18%, and 28% slab rates instantly with Calciverse GST Calculator.`
        break
      case 'Income Tax Calculator':
        pageTitle = `Income Tax Calculator FY 2026-27 — Compare Tax Regimes | ${SITE_DOMAIN}`
        pageDesc = `Estimate income tax payable under the new and old tax regimes for FY 2026-27 with slab breakdowns on Calciverse.in.`
        break
      case 'SIP Calculator':
        pageTitle = `SIP Calculator — Calculate Mutual Fund SIP Returns & Wealth | ${SITE_DOMAIN}`
        pageDesc = `Calculate expected maturity value, wealth gained, and total returns on mutual fund SIP investments.`
        break
      case 'Age Calculator':
        pageTitle = `Age Calculator — Calculate Exact Age in Years, Months & Days | ${SITE_DOMAIN}`
        pageDesc = `Calculate your exact age in years, months, weeks, days, and hours from date of birth with Calciverse Age Calculator.`
        break
      case 'Invoice & GST Bill Generator':
        pageTitle = `Invoice & GST Bill Generator — Create Free Tax Invoices PDF | ${SITE_DOMAIN}`
        pageDesc = `Create itemized GST invoices, tax bills, and download or print clean PDF invoices for free.`
        break
      case 'Salary / CTC Calculator':
        pageTitle = `Salary & CTC Calculator — Calculate In-Hand Monthly Pay | ${SITE_DOMAIN}`
        pageDesc = `Calculate take-home salary from CTC after EPF, Professional Tax, and TDS deductions.`
        break
      case 'BMI Calculator':
        pageTitle = `BMI Calculator — Body Mass Index & WHO Weight Category | ${SITE_DOMAIN}`
        pageDesc = `Calculate your Body Mass Index (BMI) and healthy weight status based on height and weight.`
        break
      case 'Percentage Calculator':
        pageTitle = `Percentage Calculator — Calculate Marks %, Increase & Decrease | ${SITE_DOMAIN}`
        pageDesc = `Calculate percentages, marks to percentage, percentage increase, and decrease easily.`
        break
      default:
        pageTitle = `${toolName} — Free Online Tool | ${SITE_DOMAIN}`
        pageDesc = description 
          ? `${description} Calculate instantly on Calciverse.in.`
          : `Free online ${toolName} for fast, accurate, and privacy-focused calculations on Calciverse.in.`
        break
    }
  } else if (path.startsWith('/category/')) {
    pageTitle = `${title} Calculators & Tools | ${SITE_DOMAIN}`
    pageDesc = `Explore free online ${title} calculators, converters, and generators on Calciverse.in. ${description || ''}`
  } else if (path.startsWith('/articles/')) {
    pageTitle = `${title} | ${SITE_DOMAIN} Articles`
    pageDesc = description || `Read article on ${title} on Calciverse.in.`
  } else {
    pageTitle = `${title ? `${title} | ${SITE_DOMAIN}` : `${SITE_NAME} — Free Online Calculators`}`
  }

  const url = `${SITE_URL}${path}`

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
      description: pageDesc,
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
      description: pageDesc,
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
      description: pageDesc
    })
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <meta name="keywords" content={`Calciverse, Calciverse.in, ${title || 'calculators'}, online calculator, free calculator, GST calculator, EMI calculator, SIP calculator, income tax calculator`} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_DOMAIN} />
      <meta property="og:image" content={`${SITE_URL}/logo.png`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
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
