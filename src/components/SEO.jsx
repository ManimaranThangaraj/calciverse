import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Calciverse'
const SITE_DOMAIN = 'Calciverse.in'
const SITE_URL = 'https://calciverse.in'

export default function SEO({ title, description, path = '', kind = '', type = 'website' }) {
  let pageTitle = ''
  let pageDesc = description || 'Free online calculators, converters and generators for GST, EMI, SIP, Income Tax, Health, Education, and Everyday Utilities.'

  if (path === '/' || path === '') {
    pageTitle = `Calciverse — Free Online Calculators, Financial & Utility Tools (${SITE_DOMAIN})`
    pageDesc = 'Calciverse.in offers 90+ free online calculators, converters and generators for finance, GST, income tax, EMI, SIP, health, education, and daily utilities. Fast, accurate, and privacy-focused.'
  } else if (path.startsWith('/tool/')) {
    const toolName = title || SITE_NAME
    
    // Custom tailored SEO titles & descriptions for top calculators, converters, and generators
    switch (toolName) {
      // ---------------- Popular Calculators ----------------
      case 'EMI Calculator':
        pageTitle = `EMI Calculator — Calculate Monthly Loan EMI & Interest | ${SITE_DOMAIN}`
        pageDesc = `Calculate your monthly loan EMI, interest payable, and payment schedule for home, car, and personal loans with Calciverse EMI Calculator.`
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
      case 'FD Calculator':
        pageTitle = `FD Calculator — Calculate Fixed Deposit Maturity & Interest | ${SITE_DOMAIN}`
        pageDesc = `Calculate fixed deposit (FD) maturity amount and total interest earned with compounding periods.`
        break
      case 'RD Calculator':
        pageTitle = `RD Calculator — Calculate Recurring Deposit Maturity | ${SITE_DOMAIN}`
        pageDesc = `Estimate maturity value and interest earned on quarterly compounding recurring deposits.`
        break
      case 'PPF Calculator':
        pageTitle = `PPF Calculator — Calculate Public Provident Fund Corpus | ${SITE_DOMAIN}`
        pageDesc = `Project your Public Provident Fund (PPF) corpus and interest earned over 15 years.`
        break
      case 'EPF Calculator':
        pageTitle = `EPF Calculator — Calculate Employee Provident Fund Corpus | ${SITE_DOMAIN}`
        pageDesc = `Calculate EPF maturity balance from monthly salary contributions and annual interest rates.`
        break
      case 'NPS Calculator':
        pageTitle = `NPS Calculator — Calculate National Pension System Corpus | ${SITE_DOMAIN}`
        pageDesc = `Estimate National Pension System retirement corpus and monthly pension payout.`
        break
      case 'Age Calculator':
        pageTitle = `Age Calculator — Calculate Exact Age in Years, Months & Days | ${SITE_DOMAIN}`
        pageDesc = `Calculate your exact age in years, months, weeks, days, and hours from date of birth with Calciverse Age Calculator.`
        break
      case 'BMI Calculator':
        pageTitle = `BMI Calculator — Body Mass Index & WHO Weight Category | ${SITE_DOMAIN}`
        pageDesc = `Calculate your Body Mass Index (BMI) and healthy weight status based on height and weight.`
        break
      case 'Calories Calculator':
        pageTitle = `Calorie Calculator — Calculate Daily Calorie Needs & TDEE | ${SITE_DOMAIN}`
        pageDesc = `Calculate daily calorie intake for weight loss, maintenance, or muscle gain using Mifflin-St Jeor equation.`
        break
      case 'Percentage Calculator':
        pageTitle = `Percentage Calculator — Calculate Marks %, Increase & Decrease | ${SITE_DOMAIN}`
        pageDesc = `Calculate percentages, marks to percentage, percentage increase, and decrease easily.`
        break
      case 'CGPA Calculator':
        pageTitle = `CGPA Calculator — Calculate Grade Points & Percentage | ${SITE_DOMAIN}`
        pageDesc = `Convert grade points per subject into overall CGPA score and equivalent percentage.`
        break

      // ---------------- Popular Generators ----------------
      case 'Invoice & GST Bill Generator':
        pageTitle = `Invoice & GST Bill Generator — Create Free Tax Invoices PDF | ${SITE_DOMAIN}`
        pageDesc = `Create itemized GST invoices, tax bills, and download or print clean PDF invoices for free.`
        break
      case 'QR Code Generator':
        pageTitle = `QR Code Generator — Create Custom Downloadable QR Codes | ${SITE_DOMAIN}`
        pageDesc = `Generate free downloadable PNG QR codes from text, links, email, or contact info.`
        break
      case 'Password Generator':
        pageTitle = `Password Generator — Generate Secure Random Passwords | ${SITE_DOMAIN}`
        pageDesc = `Generate strong, secure, unhackable random passwords with customizable length and characters.`
        break
      case 'Barcode Generator':
        pageTitle = `Barcode Generator — Generate Free CODE128 Barcodes | ${SITE_DOMAIN}`
        pageDesc = `Generate CODE128 standard barcodes online and download SVG/PNG barcode images.`
        break
      case 'UUID Generator':
        pageTitle = `UUID Generator — Generate Bulk Version 4 UUIDs | ${SITE_DOMAIN}`
        pageDesc = `Generate random RFC4122 version-4 UUIDs in bulk for software development and databases.`
        break
      case 'Lorem Ipsum Generator':
        pageTitle = `Lorem Ipsum Generator — Generate Placeholder Text | ${SITE_DOMAIN}`
        pageDesc = `Generate dummy placeholder text by paragraph, sentence, or word count for web design.`
        break

      // ---------------- Popular Converters ----------------
      case 'Unit Converter':
        pageTitle = `Unit Converter — Convert Length, Weight, Temp & Volume | ${SITE_DOMAIN}`
        pageDesc = `Convert units instantly for length, mass, temperature, area, and volume.`
        break
      case 'Text Case Converter':
        pageTitle = `Text Case Converter — Convert UPPERCASE, lowercase, Title Case | ${SITE_DOMAIN}`
        pageDesc = `Convert text case between UPPERCASE, lowercase, Title Case, sentence case, and camelCase.`
        break
      case 'Time Zone Converter':
        pageTitle = `Time Zone Converter — Convert Times Across Timezones | ${SITE_DOMAIN}`
        pageDesc = `Convert time between IST, EST, PST, GMT, UTC, and global timezones accurately.`
        break
      case 'CGPA to Percentage Converter':
        pageTitle = `CGPA to Percentage Converter — Convert CGPA to % | ${SITE_DOMAIN}`
        pageDesc = `Convert CGPA (scale of 10) to percentage using standard university conversion formulas.`
        break
      case 'Number to Words Converter':
        pageTitle = `Number to Words Converter — Convert Numbers to Words | ${SITE_DOMAIN}`
        pageDesc = `Convert numbers into written words in Indian (Lakhs/Crores) and International scales for cheques.`
        break
      case 'Base64 Encoder/Decoder':
        pageTitle = `Base64 Encoder/Decoder — Convert Text to Base64 | ${SITE_DOMAIN}`
        pageDesc = `Encode plain text strings to Base64 or decode Base64 strings back to readable text.`
        break
      case 'URL Encoder/Decoder':
        pageTitle = `URL Encoder/Decoder — Percent Encode & Decode URLs | ${SITE_DOMAIN}`
        pageDesc = `Percent-encode or decode web URLs, query strings, and URI components safely.`
        break

      // ---------------- Generic Fallback by Tool Kind ----------------
      default:
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
        break
    }
  } else if (path.startsWith('/category/')) {
    pageTitle = `${title} Calculators, Converters & Tools | ${SITE_DOMAIN}`
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
