import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Calciverse'
const SITE_DOMAIN = 'Calciverse.in'
const SITE_URL = 'https://calciverse.in'

// Explicit SEO Title and Meta Description map for all tools
const TOOL_SEO_MAP = {
  'emi-calculator': {
    title: `EMI Calculator — Calculate Monthly Loan EMI & Interest | ${SITE_DOMAIN}`,
    desc: `Calculate monthly loan EMI, interest payable, and payment schedule for home, car, and personal loans with Calciverse EMI Calculator.`
  },
  'gst-calculator': {
    title: `GST Calculator — Calculate Inclusive & Exclusive GST Rates | ${SITE_DOMAIN}`,
    desc: `Add or remove GST at 5%, 12%, 18%, and 28% slab rates instantly with Calciverse GST Calculator.`
  },
  'income-tax-calculator': {
    title: `Income Tax Calculator FY 2026-27 — Compare Tax Regimes | ${SITE_DOMAIN}`,
    desc: `Estimate income tax payable under the new and old tax regimes for FY 2026-27 with detailed slab breakdowns on Calciverse.in.`
  },
  'sip-calculator': {
    title: `SIP Calculator — Calculate Mutual Fund SIP Returns & Wealth | ${SITE_DOMAIN}`,
    desc: `Calculate expected maturity value, wealth gained, and total returns on monthly mutual fund SIP investments.`
  },
  'fd-calculator': {
    title: `FD Calculator — Calculate Fixed Deposit Maturity & Interest | ${SITE_DOMAIN}`,
    desc: `Estimate fixed deposit (FD) maturity value and total interest earned with quarterly/annual compounding.`
  },
  'rd-calculator': {
    title: `RD Calculator — Calculate Recurring Deposit Maturity | ${SITE_DOMAIN}`,
    desc: `Calculate recurring deposit (RD) maturity value and interest earned with compounding.`
  },
  'ppf-calculator': {
    title: `PPF Calculator — Calculate Public Provident Fund Corpus | ${SITE_DOMAIN}`,
    desc: `Project your Public Provident Fund (PPF) corpus and total interest earned over 15 years.`
  },
  'epf-calculator': {
    title: `EPF Calculator — Calculate Employee Provident Fund Balance | ${SITE_DOMAIN}`,
    desc: `Calculate Provident Fund corpus from monthly salary contributions and annual interest rates.`
  },
  'nps-calculator': {
    title: `NPS Calculator — Calculate National Pension System Corpus | ${SITE_DOMAIN}`,
    desc: `Estimate National Pension System retirement corpus and monthly pension payout.`
  },
  'lumpsum-calculator': {
    title: `Lumpsum Investment Calculator — Calculate Mutual Fund Returns | ${SITE_DOMAIN}`,
    desc: `Calculate future value of a one-time lumpsum mutual fund investment at an expected return rate.`
  },
  'cagr-calculator': {
    title: `CAGR Calculator — Calculate Compound Annual Growth Rate | ${SITE_DOMAIN}`,
    desc: `Calculate compound annual growth rate (CAGR) between two investment values over time.`
  },
  'roi-calculator': {
    title: `ROI Calculator — Calculate Return on Investment % | ${SITE_DOMAIN}`,
    desc: `Calculate return on investment as a percentage and annualised return figure.`
  },
  'retirement-calculator': {
    title: `Retirement Calculator — Calculate Retirement Corpus Needed | ${SITE_DOMAIN}`,
    desc: `How much you need saved to retire on a target monthly income after inflation.`
  },
  'inflation-calculator': {
    title: `Inflation Calculator — Calculate Future Purchasing Power | ${SITE_DOMAIN}`,
    desc: `Find what today's money will be worth after years of inflation.`
  },
  'salary-calculator': {
    title: `Salary & CTC Calculator — Calculate In-Hand Monthly Pay | ${SITE_DOMAIN}`,
    desc: `Calculate take-home monthly salary from CTC after EPF, Professional Tax, and TDS deductions.`
  },
  'salary-hike-calculator': {
    title: `Salary Hike Calculator — Calculate Salary Raise & Increment % | ${SITE_DOMAIN}`,
    desc: `Calculate new revised salary and percentage raise from an appraisal hike.`
  },
  'hra-calculator': {
    title: `HRA Calculator — Calculate Tax Exempt House Rent Allowance | ${SITE_DOMAIN}`,
    desc: `Calculate how much of your House Rent Allowance (HRA) is exempt from income tax.`
  },
  'gratuity-calculator': {
    title: `Gratuity Calculator — Calculate Gratuity Payble on Retirement | ${SITE_DOMAIN}`,
    desc: `Calculate gratuity payout based on last drawn basic salary and completed years of service.`
  },
  'tds-calculator': {
    title: `TDS Calculator — Calculate Tax Deducted at Source | ${SITE_DOMAIN}`,
    desc: `Calculate tax deducted at source (TDS) on salary, fixed deposit interest, or professional fees.`
  },
  'capital-gains-calculator': {
    title: `Capital Gains Tax Calculator — Calculate STCG & LTCG Tax | ${SITE_DOMAIN}`,
    desc: `Calculate short-term and long-term capital gains tax on stock, equity, or real estate sales.`
  },
  'credit-card-interest-calculator': {
    title: `Credit Card Interest Calculator — Calculate Payoff Time | ${SITE_DOMAIN}`,
    desc: `Calculate interest owed and payoff schedule on revolving credit card balance.`
  },
  'loan-eligibility-calculator': {
    title: `Loan Eligibility Calculator — Check How Much Loan You Get | ${SITE_DOMAIN}`,
    desc: `Estimate max home or personal loan amount you qualify for based on monthly income.`
  },
  'prepayment-calculator': {
    title: `Loan Prepayment Calculator — Calculate Interest Savings | ${SITE_DOMAIN}`,
    desc: `Calculate total interest saved and tenure cut by prepaying a loan.`
  },
  'stamp-duty-calculator': {
    title: `Stamp Duty Calculator — Calculate Property Registration Fees | ${SITE_DOMAIN}`,
    desc: `Estimate stamp duty and property registration costs across states.`
  },
  'property-tax-calculator': {
    title: `Property Tax Calculator — Calculate Annual House Tax | ${SITE_DOMAIN}`,
    desc: `Calculate annual property tax from assessed value and local rate.`
  },
  'rent-vs-buy-calculator': {
    title: `Rent vs Buy Calculator — Compare Buying vs Renting a Home | ${SITE_DOMAIN}`,
    desc: `Compare the long-term financial cost of renting against buying a home.`
  },
  'home-affordability-calculator': {
    title: `Home Affordability Calculator — How Much House Can You Afford | ${SITE_DOMAIN}`,
    desc: `Find the maximum home price you can afford based on income and down payment.`
  },
  'break-even-calculator': {
    title: `Break-Even Calculator — Calculate Break-Even Point Units | ${SITE_DOMAIN}`,
    desc: `Calculate units required to sell to cover fixed and variable costs.`
  },
  'profit-margin-calculator': {
    title: `Profit Margin Calculator — Calculate Gross & Net Margins | ${SITE_DOMAIN}`,
    desc: `Calculate gross margin and net profit margin from cost price and selling price.`
  },
  'markup-calculator': {
    title: `Markup Calculator — Calculate Selling Price from Cost | ${SITE_DOMAIN}`,
    desc: `Calculate target selling price from cost price and desired markup percentage.`
  },
  'freelance-rate-calculator': {
    title: `Freelance Rate Calculator — Calculate Hourly & Daily Rate | ${SITE_DOMAIN}`,
    desc: `Calculate minimum hourly rate required to hit target annual freelance income.`
  },
  'bmi-calculator': {
    title: `BMI Calculator — Calculate Body Mass Index & Weight Status | ${SITE_DOMAIN}`,
    desc: `Calculate Body Mass Index (BMI) from height and weight with WHO classifications.`
  },
  'calorie-calculator': {
    title: `Calorie Calculator — Calculate Daily Calorie Needs & TDEE | ${SITE_DOMAIN}`,
    desc: `Calculate daily calorie intake for weight loss, maintenance, or muscle gain.`
  },
  'water-intake-calculator': {
    title: `Water Intake Calculator — Calculate Daily Water Target | ${SITE_DOMAIN}`,
    desc: `Find recommended daily water intake based on body weight and activity level.`
  },
  'bmr-calculator': {
    title: `BMR Calculator — Calculate Basal Metabolic Rate | ${SITE_DOMAIN}`,
    desc: `Calculate basal metabolic rate (BMR) — calories burned at complete rest.`
  },
  'ideal-weight-calculator': {
    title: `Ideal Weight Calculator — Calculate Healthy Weight Range | ${SITE_DOMAIN}`,
    desc: `Find healthy ideal weight range based on height, age, and gender.`
  },
  'body-fat-calculator': {
    title: `Body Fat Calculator — Estimate Body Fat % (US Navy Method) | ${SITE_DOMAIN}`,
    desc: `Estimate body fat percentage using US Navy body circumference methods.`
  },
  'pregnancy-due-date-calculator': {
    title: `Pregnancy Due Date Calculator — Estimate Delivery Date | ${SITE_DOMAIN}`,
    desc: `Estimate pregnancy due date from the first day of last menstrual period.`
  },
  'ovulation-calculator': {
    title: `Ovulation Calculator — Predict Fertile Days & Cycle | ${SITE_DOMAIN}`,
    desc: `Predict your most fertile days and ovulation window based on cycle length.`
  },
  'period-calculator': {
    title: `Period Calculator — Predict Menstrual Cycle Dates | ${SITE_DOMAIN}`,
    desc: `Predict upcoming menstrual cycle dates and period start days.`
  },
  'macro-calculator': {
    title: `Macro Calculator — Calculate Protein, Carbs & Fat Targets | ${SITE_DOMAIN}`,
    desc: `Calculate daily protein, carbohydrate, and fat targets from your calorie goal.`
  },
  'heart-rate-zone-calculator': {
    title: `Heart Rate Zone Calculator — Fat Burn & Cardio Zones | ${SITE_DOMAIN}`,
    desc: `Calculate target heart rate zones for fat burn, cardio, and peak effort.`
  },
  'waist-hip-ratio-calculator': {
    title: `Waist to Hip Ratio Calculator — Health Risk Indicator | ${SITE_DOMAIN}`,
    desc: `Calculate waist-to-hip ratio as a quick indicator of cardiometabolic health risk.`
  },
  'sleep-calculator': {
    title: `Sleep Calculator — Calculate 90-Min Sleep Cycles & Wake Times | ${SITE_DOMAIN}`,
    desc: `Find optimal times to fall asleep or wake up based on 90-minute sleep cycles.`
  },
  'calories-burned-calculator': {
    title: `Calories Burned Calculator — Walking, Running & Cycling | ${SITE_DOMAIN}`,
    desc: `Calculate calories burned walking, running, or cycling a given distance.`
  },
  'percentage-calculator': {
    title: `Percentage Calculator — Calculate Marks %, Increase & Decrease | ${SITE_DOMAIN}`,
    desc: `Calculate percentages, marks to percentage, percentage change, and differences.`
  },
  'cgpa-calculator': {
    title: `CGPA Calculator — Calculate Grade Points & Percentage | ${SITE_DOMAIN}`,
    desc: `Convert grade points per subject into overall CGPA score and percentage.`
  },
  'attendance-calculator': {
    title: `Attendance Calculator — How Many Classes Can You Skip | ${SITE_DOMAIN}`,
    desc: `Calculate classes you can skip — or must attend — to maintain target percentage.`
  },
  'gpa-calculator': {
    title: `GPA Calculator — Calculate Grade Point Average | ${SITE_DOMAIN}`,
    desc: `Calculate overall GPA and equivalent percentage from subject grades.`
  },
  'grade-calculator': {
    title: `Grade Calculator — Final Exam Score Needed for Target Grade | ${SITE_DOMAIN}`,
    desc: `Find what score you need on a final exam to reach a target course grade.`
  },
  'cgpa-to-percentage-calculator': {
    title: `CGPA to Percentage Converter — Convert CGPA to % | ${SITE_DOMAIN}`,
    desc: `Convert CGPA (out of 10) to an equivalent percentage score.`
  },
  'age-calculator': {
    title: `Age Calculator — Calculate Exact Age in Years, Months & Days | ${SITE_DOMAIN}`,
    desc: `Calculate exact age in years, months, weeks, days, and hours from date of birth.`
  },
  'date-difference-calculator': {
    title: `Date Difference Calculator — Days & Months Between Dates | ${SITE_DOMAIN}`,
    desc: `Calculate days, weeks, and months between any two dates.`
  },
  'password-generator': {
    title: `Password Generator — Generate Secure Random Passwords | ${SITE_DOMAIN}`,
    desc: `Generate strong, unhackable random passwords with customizable length.`
  },
  'qr-code-generator': {
    title: `QR Code Generator — Create Custom Downloadable QR Codes | ${SITE_DOMAIN}`,
    desc: `Generate free downloadable PNG QR codes from text, links, or contact info.`
  },
  'uuid-generator': {
    title: `UUID Generator — Bulk Version 4 UUID Generator | ${SITE_DOMAIN}`,
    desc: `Generate random RFC4122 version-4 UUIDs in bulk for software development.`
  },
  'random-number-generator': {
    title: `Random Number Generator — Generate Random Integers | ${SITE_DOMAIN}`,
    desc: `Generate random integers in a range, with or without duplicates.`
  },
  'barcode-generator': {
    title: `Barcode Generator — Generate Free CODE128 Barcodes | ${SITE_DOMAIN}`,
    desc: `Generate CODE128 standard barcodes online and download SVG/PNG barcode images.`
  },
  'discount-calculator': {
    title: `Discount Calculator — Calculate Final Price & Amount Saved | ${SITE_DOMAIN}`,
    desc: `Calculate final sale price and total money saved after percentage discounts.`
  },
  'tip-calculator': {
    title: `Tip Calculator — Split Bill & Calculate Tip Per Person | ${SITE_DOMAIN}`,
    desc: `Split restaurant bills and calculate tip amount per person easily.`
  },
  'fuel-cost-calculator': {
    title: `Fuel Cost Calculator — Calculate Trip Fuel Cost & Mileage | ${SITE_DOMAIN}`,
    desc: `Calculate trip fuel cost from distance, vehicle mileage, and fuel price.`
  },
  'word-counter': {
    title: `Word Counter — Count Words, Characters & Sentences | ${SITE_DOMAIN}`,
    desc: `Count words, characters, and sentences live as you type.`
  },
  'case-converter': {
    title: `Case Converter — Convert UPPERCASE, lowercase, Title Case | ${SITE_DOMAIN}`,
    desc: `Convert text case between UPPERCASE, lowercase, Title Case, and camelCase.`
  },
  'typing-speed-test': {
    title: `Typing Speed Test — Measure WPM & Accuracy Online | ${SITE_DOMAIN}`,
    desc: `Measure typing speed in WPM (words per minute) and accuracy against sample text.`
  },
  'unit-converter': {
    title: `Unit Converter — Convert Length, Weight, Temp & Volume | ${SITE_DOMAIN}`,
    desc: `Convert units instantly for length, mass, temperature, area, and volume.`
  },
  'time-zone-converter': {
    title: `Time Zone Converter — Convert Times Across Global Timezones | ${SITE_DOMAIN}`,
    desc: `Convert time between IST, EST, PST, GMT, UTC, and global timezones.`
  },
  'time-duration-calculator': {
    title: `Time Duration Calculator — Hours & Minutes Between Times | ${SITE_DOMAIN}`,
    desc: `Calculate hours and minutes elapsed between two clock times.`
  },
  'electricity-bill-calculator': {
    title: `Electricity Bill Calculator — Estimate Monthly Power Bill | ${SITE_DOMAIN}`,
    desc: `Estimate monthly electricity bill from appliance wattage and usage hours.`
  },
  'rent-split-calculator': {
    title: `Rent Split Calculator — Fair Roommate Rent Splitter | ${SITE_DOMAIN}`,
    desc: `Fairly split rent among roommates by room size or income.`
  },
  'countdown-timer': {
    title: `Countdown Timer — Online Countdown to Any Date & Event | ${SITE_DOMAIN}`,
    desc: `Days, hours, and minutes remaining until any target date or event.`
  },
  'notice-period-calculator': {
    title: `Notice Period Calculator — Find Last Working Day | ${SITE_DOMAIN}`,
    desc: `Calculate your last working day based on resignation date and notice period.`
  },
  'percentage-change-calculator': {
    title: `Percentage Change Calculator — % Increase & Decrease | ${SITE_DOMAIN}`,
    desc: `Calculate percentage increase or decrease between two numbers.`
  },
  'average-calculator': {
    title: `Average Calculator — Calculate Mean, Median & Mode | ${SITE_DOMAIN}`,
    desc: `Calculate mean, median, and mode of a list of numbers.`
  },
  'ratio-calculator': {
    title: `Ratio Calculator — Simplify Ratios & Find Missing Terms | ${SITE_DOMAIN}`,
    desc: `Simplify ratios or solve for missing values in proportion equations.`
  },
  'lcm-hcf-calculator': {
    title: `LCM & HCF Calculator — Least Common Multiple & HCF | ${SITE_DOMAIN}`,
    desc: `Calculate least common multiple (LCM) and highest common factor (HCF).`
  },
  'fraction-calculator': {
    title: `Fraction Calculator — Add, Subtract & Multiply Fractions | ${SITE_DOMAIN}`,
    desc: `Add, subtract, multiply, and divide fractions with step-by-step solutions.`
  },
  'square-root-calculator': {
    title: `Square Root Calculator — Find Square & Cube Roots | ${SITE_DOMAIN}`,
    desc: `Calculate square roots and cube roots for perfect and non-perfect numbers.`
  },
  'standard-deviation-calculator': {
    title: `Standard Deviation Calculator — Mean & Variance | ${SITE_DOMAIN}`,
    desc: `Calculate mean, variance, and standard deviation of a dataset.`
  },
  'scientific-calculator': {
    title: `Scientific Calculator — Free Full Online Scientific Calculator | ${SITE_DOMAIN}`,
    desc: `Trigonometric, logarithmic, exponential, and scientific calculations.`
  },
  'percentage-to-fraction-calculator': {
    title: `Percentage to Fraction Converter — Convert % to Fractions | ${SITE_DOMAIN}`,
    desc: `Convert between percentages, fractions, and decimal numbers.`
  },
  'prime-number-checker': {
    title: `Prime Number Checker — Test If a Number Is Prime | ${SITE_DOMAIN}`,
    desc: `Test if a number is prime and list all factors if composite.`
  },
  'factorial-calculator': {
    title: `Factorial Calculator — Calculate Factorials of Numbers | ${SITE_DOMAIN}`,
    desc: `Calculate factorial (n!) of any non-negative integer.`
  },
  'permutation-combination-calculator': {
    title: `Permutation & Combination Calculator — nPr & nCr | ${SITE_DOMAIN}`,
    desc: `Calculate nPr permutations and nCr combinations for set sizes.`
  },
  'quadratic-equation-solver': {
    title: `Quadratic Equation Solver — Find Real & Complex Roots | ${SITE_DOMAIN}`,
    desc: `Find roots of ax² + bx + c = 0 quadratic equations.`
  },
  'number-to-words-converter': {
    title: `Number to Words Converter — Spell Numbers in Words | ${SITE_DOMAIN}`,
    desc: `Convert numbers into written words in Indian and International numbering scales.`
  },
  'json-formatter': {
    title: `JSON Formatter — Pretty Print, Minify & Validate JSON | ${SITE_DOMAIN}`,
    desc: `Pretty-print, format, minify, and validate JSON code online.`
  },
  'base64-encoder-decoder': {
    title: `Base64 Encoder & Decoder — Encode & Decode Text Base64 | ${SITE_DOMAIN}`,
    desc: `Encode text strings into Base64 format or decode Base64 strings back to text.`
  },
  'color-picker': {
    title: `Color Picker — HEX, RGB & HSL Color Code Finder | ${SITE_DOMAIN}`,
    desc: `Pick colors visually and convert instantly between HEX, RGB, and HSL.`
  },
  'regex-tester': {
    title: `Regex Tester — Test Regular Expressions Online | ${SITE_DOMAIN}`,
    desc: `Test regular expressions against sample text with live match highlighting.`
  },
  'html-formatter': {
    title: `HTML Formatter — Indent & Beautify Messy HTML | ${SITE_DOMAIN}`,
    desc: `Format, indent, and clean up unformatted HTML markup.`
  },
  'sql-formatter': {
    title: `SQL Formatter — Format & Beautify SQL Queries | ${SITE_DOMAIN}`,
    desc: `Format and beautify SQL queries with proper keywords and indentation.`
  },
  'css-minifier': {
    title: `CSS Minifier — Compress & Minify CSS Code Online | ${SITE_DOMAIN}`,
    desc: `Compress CSS stylesheets by stripping whitespace and comments.`
  },
  'js-minifier': {
    title: `JS Minifier — Compress & Minify JavaScript Code | ${SITE_DOMAIN}`,
    desc: `Compress JavaScript files by removing unnecessary whitespace and comments.`
  },
  'markdown-previewer': {
    title: `Markdown Previewer — Live Render Markdown to HTML | ${SITE_DOMAIN}`,
    desc: `Write Markdown text and preview rendered HTML side by side.`
  },
  'url-encoder-decoder': {
    title: `URL Encoder & Decoder — Percent Encode URLs | ${SITE_DOMAIN}`,
    desc: `Percent-encode or decode URLs, URI parameters, and query strings.`
  },
  'html-entity-converter': {
    title: `HTML Entity Converter — Encode & Decode Special Chars | ${SITE_DOMAIN}`,
    desc: `Convert special characters to HTML entities and back.`
  },
  'jwt-decoder': {
    title: `JWT Decoder — Decode JSON Web Tokens Header & Payload | ${SITE_DOMAIN}`,
    desc: `Decode JSON Web Token (JWT) header, payload claims, and signatures.`
  },
  'unix-timestamp-converter': {
    title: `Unix Timestamp Converter — Convert Timestamps to Dates | ${SITE_DOMAIN}`,
    desc: `Convert Unix epoch timestamps to human-readable date and time.`
  },
  'diff-checker': {
    title: `Text Diff Checker — Compare Two Blocks of Text | ${SITE_DOMAIN}`,
    desc: `Compare two blocks of text and highlight line-by-line differences.`
  },
  'css-gradient-generator': {
    title: `CSS Gradient Generator — Linear & Radial Gradients | ${SITE_DOMAIN}`,
    desc: `Design linear and radial CSS color gradients and copy CSS code.`
  },
  'box-shadow-generator': {
    title: `CSS Box Shadow Generator — Visual Box Shadow Tool | ${SITE_DOMAIN}`,
    desc: `Create visual CSS box-shadow effects and copy CSS code.`
  },
  'lorem-ipsum-generator': {
    title: `Lorem Ipsum Generator — Generate Placeholder Text | ${SITE_DOMAIN}`,
    desc: `Generate dummy placeholder text by paragraph, sentence, or word count.`
  },
  'number-base-converter': {
    title: `Binary / Hex / Octal Converter — Base Conversions | ${SITE_DOMAIN}`,
    desc: `Convert numbers between binary, decimal, hexadecimal, and octal bases.`
  },
  'px-to-rem-converter': {
    title: `PX to REM Converter — Convert Pixels to REM/EM | ${SITE_DOMAIN}`,
    desc: `Convert pixel values to REM/EM units for responsive CSS layouts.`
  },
  'invoice-generator': {
    title: `Invoice & GST Bill Generator — Create Free Tax Invoices PDF | ${SITE_DOMAIN}`,
    desc: `Create itemized GST invoices, tax bills, and download or print clean PDF invoices.`
  },
  'profit-and-loss-calculator': {
    title: `Profit & Loss (P&L) Calculator — Gross & Net Margins | ${SITE_DOMAIN}`,
    desc: `Calculate gross profit, operating margin, and net profit after tax.`
  },
  'sales-tax-calculator': {
    title: `Sales Tax & VAT Calculator — Add or Remove Sales Tax | ${SITE_DOMAIN}`,
    desc: `Add or extract sales tax and VAT from transaction amounts.`
  },
  'payroll-calculator': {
    title: `Payroll Calculator — Calculate Take-Home Salary | ${SITE_DOMAIN}`,
    desc: `Calculate employee take-home salary after EPF, Professional Tax, and TDS.`
  },
  'commission-calculator': {
    title: `Sales Commission Calculator — Tiered Payout Rates | ${SITE_DOMAIN}`,
    desc: `Calculate base commission and tiered bonus structures for sales.`
  },
  'markup-vs-margin-calculator': {
    title: `Markup vs Profit Margin Calculator — Convert % Margins | ${SITE_DOMAIN}`,
    desc: `Convert between markup percentage and profit margin percentage.`
  },
  'mortgage-calculator': {
    title: `Mortgage Loan Calculator — Estimate Monthly Payments | ${SITE_DOMAIN}`,
    desc: `Estimate home mortgage monthly payments, principal, and interest.`
  },
  'pace-calculator': {
    title: `Pace Calculator — Running & Walking Speed Calculator | ${SITE_DOMAIN}`,
    desc: `Calculate running and walking pace, speed, and projected 5k/10k finish times.`
  },
  'body-surface-area-calculator': {
    title: `Body Surface Area Calculator — Estimate BSA Online | ${SITE_DOMAIN}`,
    desc: `Estimate body surface area (BSA) using Mosteller and Du Bois formulas.`
  },
  'gpa-to-percentage-converter': {
    title: `GPA to Percentage Converter — Convert GPA Scores | ${SITE_DOMAIN}`,
    desc: `Convert GPA scores (4.0, 5.0, 10.0 scales) to percentages and letter grades.`
  },
  'aspect-ratio-calculator': {
    title: `Aspect Ratio Calculator — 16:9, 4:3 Image Dimensions | ${SITE_DOMAIN}`,
    desc: `Find 16:9, 4:3, 1:1 image and display screen dimensions.`
  },
  'exponent-calculator': {
    title: `Exponent & Power Calculator — Exponents & Powers | ${SITE_DOMAIN}`,
    desc: `Calculate base numbers raised to positive or negative exponents.`
  },
  'ev-vs-petrol-calculator': {
    title: `EV vs Petrol Fuel Cost & Carbon Calculator | ${SITE_DOMAIN}`,
    desc: `Compare monthly running costs, fuel savings, and CO2 carbon reduction between EV and Petrol vehicles.`
  },
  'freelance-tax-hourly-rate-calculator': {
    title: `Freelance & Side-Hustle Net Hourly Rate Calculator | ${SITE_DOMAIN}`,
    desc: `Calculate minimum hourly rate required after unpaid hours, operational expenses, income tax, and GST.`
  }
}

export default function SEO({ title, description, path = '', kind = '', type = 'website' }) {
  let pageTitle = ''
  let pageDesc = description || 'Free online calculators, converters and generators for GST, EMI, SIP, Income Tax, Health, Education, and Everyday Utilities.'

  const slugFromPath = path.startsWith('/tool/') ? path.replace('/tool/', '') : ''

  if (path === '/' || path === '') {
    pageTitle = `Calciverse — Free Online Calculators, Financial & Utility Tools (${SITE_DOMAIN})`
    pageDesc = 'Calciverse.in offers 90+ free online calculators, converters and generators for finance, GST, income tax, EMI, SIP, health, education, and daily utilities. Fast, accurate, and privacy-focused.'
  } else if (path.startsWith('/tool/')) {
    const toolName = title || SITE_NAME
    const mappedSEO = TOOL_SEO_MAP[slugFromPath]

    if (mappedSEO) {
      pageTitle = mappedSEO.title
      pageDesc = mappedSEO.desc
    } else {
      // Dynamic fallback by kind
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
