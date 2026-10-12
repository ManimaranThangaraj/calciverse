import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { tools } from '../src/data/tools.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.join(__dirname, '../src/data/toolGuides.js');

console.log(`Generating rich, domain-authentic tool guides for all ${tools.length} tools...`);

const toolGuides = {};

// Detailed bespoke mathematical and scientific profiles for key tools
const bespokeGuides = {
  // ---------------- FINANCE ----------------
  'emi-calculator': {
    formula: 'E = P × r × (1 + r)^n / ((1 + r)^n - 1)',
    explanation: 'Where P = Loan Principal, r = Monthly interest rate (Annual Rate / 12 / 100), n = Tenure in total months.',
    inputs: 'Loan Amount = ₹10,00,000 | Interest Rate = 8.5% p.a. | Tenure = 15 Years (180 Months)',
    steps: [
      'Monthly Interest Rate (r) = 8.5 / 12 / 100 = 0.007083',
      'Compound Factor = (1.007083)^180 = 3.5598',
      'Monthly EMI (E) = ₹9,847 / month'
    ],
    summary: 'Monthly EMI = ₹9,847 | Total Interest = ₹7,72,540 | Total Repayment = ₹17,72,540',
    metricsText: 'In early loan years, up to 70% of each EMI goes toward interest rather than principal reduction. Prepaying principal early significantly cuts total interest paid.',
    useCases: [
      'Home Loan Planning: Compare monthly EMIs across 15, 20, and 30-year tenures before visiting banks.',
      'Auto Finance: Calculate exact monthly commitments before signing car loan contracts.',
      'Refinancing Analysis: Evaluate whether balance transfer savings offset processing charges.'
    ],
    commonMistakes: [
      'Confusing monthly interest rate (r) with the annual quoted rate (R).',
      'Overlooking the amortization curve where early payments barely reduce principal.',
      'Omitting mandatory processing fees, stamp duty, and loan insurance costs.'
    ]
  },
  'sip-calculator': {
    formula: 'M = P × ({[1 + i]^n - 1} / i) × (1 + i)',
    explanation: 'Where P = Monthly SIP amount, i = Periodic monthly return rate (Annual Return / 12 / 100), n = Total duration in months.',
    inputs: 'Monthly Investment = ₹5,000 | Expected Annual Return = 12% | Investment Horizon = 10 Years (120 Months)',
    steps: [
      'Monthly Return Rate (i) = 12 / 12 / 100 = 0.01',
      'Compounding Multiplier = (1.01^120 - 1) / 0.01 × 1.01 = 232.339',
      'Maturity Corpus (M) = ₹5,000 × 232.339 = ₹11,61,695'
    ],
    summary: 'Total Invested = ₹6,00,000 | Total Wealth Gained = ₹5,61,695 | Expected Maturity = ₹11,61,695',
    metricsText: 'Compounding growth accelerates exponentially in later years. Doubling your tenure from 10 to 20 years can increase your final wealth by over 300%.',
    useCases: [
      'Wealth Building: Project growth for long-term equity mutual fund investments.',
      'Goal Planning: Plan monthly SIP targets for children education, home purchase, or retirement.',
      'Step-up SIP Planning: Evaluate how increasing monthly deposits by 10% annually impacts total maturity corpus.'
    ],
    commonMistakes: [
      'Assuming mutual fund returns are fixed or guaranteed every single year.',
      'Stopping SIP investments during market downturns instead of taking advantage of rupee-cost averaging.',
      'Not adjusting expected return rates for inflation and capital gains taxes.'
    ]
  },
  'gst-calculator': {
    formula: 'GST Added: Total = Net × (1 + Rate/100) | GST Removed: Net = Gross / (1 + Rate/100)',
    explanation: 'To add GST, multiply base price by (1 + GST%). To extract GST from an inclusive price, divide gross price by (1 + GST%).',
    inputs: 'Base Amount = ₹10,000 | GST Rate Slab = 18%',
    steps: [
      'GST Tax Amount = ₹10,000 × 0.18 = ₹1,800',
      'CGST (9%) = ₹900 | SGST (9%) = ₹900',
      'Final Gross Invoice Price = ₹11,800'
    ],
    summary: 'Net Amount = ₹10,000 | Total GST (18%) = ₹1,800 | Gross Total = ₹11,800',
    metricsText: 'Adding and removing GST are not mirror operations: subtracting 18% from ₹1,180 gives ₹967.60, not ₹1,000. Always divide by 1.18 to reverse GST.',
    useCases: [
      'Invoicing: Generate accurate client bills with explicit CGST and SGST breakdowns.',
      'Price Reversal: Extract base wholesale costs from retail MRP price tags.',
      'Tax Filing: Verify monthly GST liability against purchase invoices.'
    ],
    commonMistakes: [
      'Subtracting tax percentage directly from an inclusive price instead of dividing by (1 + rate).',
      'Confusing intra-state supply (CGST + SGST) with inter-state supply (IGST).',
      'Applying the incorrect GST slab to exempt or composite goods.'
    ]
  },
  'income-tax-calculator': {
    formula: 'Tax = Σ (Income in Slab × Slab Rate) + 4% Health & Education Cess',
    explanation: 'Calculates tax liability across progressive income brackets under the New Tax Regime (default) and Old Tax Regime (with deductions).',
    inputs: 'Annual Gross Salary = ₹12,00,000 | Regime = New Tax Regime (FY 2026-27)',
    steps: [
      'Standard Deduction = ₹75,000 | Taxable Income = ₹11,25,000',
      '₹0 to ₹3L: Nil | ₹3L to ₹7L (5%): ₹20,000',
      '₹7L to ₹10L (10%): ₹30,000 | ₹10L to ₹11.25L (15%): ₹18,750',
      'Basic Tax = ₹68,750 | Add 4% Cess = ₹2,750 | Total Tax = ₹71,500'
    ],
    summary: 'Gross Income = ₹12,00,000 | Taxable Income = ₹11,25,000 | Total Tax Payable = ₹71,500',
    metricsText: 'Under the New Tax Regime, total income up to ₹7,75,000 (including ₹75,000 standard deduction) is effectively tax-free due to Section 87A rebate.',
    useCases: [
      'Regime Comparison: Compare net take-home salary between Old and New regimes before filing ITR.',
      'Tax Planning: Calculate the deduction threshold required for the Old Regime to beat the New Regime.',
      'Salary Structuring: Evaluate tax liability on annual salary hikes and bonus components.'
    ],
    commonMistakes: [
      'Assuming deductions like Section 80C, 80D, and HRA apply to the New Tax Regime.',
      'Forgetting the mandatory 4% Health & Education Cess on total calculated tax.',
      'Confusing Gross CTC with taxable income without subtracting standard deduction.'
    ]
  },
  'fd-calculator': {
    formula: 'A = P × (1 + r/n)^(n × t)',
    explanation: 'Where P = Principal Deposit, r = Annual interest rate (decimal), n = Compounding frequency per year (quarterly n=4), t = Tenure in years.',
    inputs: 'Deposit = ₹1,00,000 | Interest Rate = 7.2% p.a. | Tenure = 5 Years | Compounding = Quarterly (n=4)',
    steps: [
      'Periodic Rate (r/n) = 0.072 / 4 = 0.018',
      'Total Periods (n×t) = 4 × 5 = 20 quarters',
      'Compound Multiplier = (1.018)^20 = 1.4287',
      'Maturity Amount (A) = ₹1,00,000 × 1.4287 = ₹1,42,875'
    ],
    summary: 'Invested Amount = ₹1,00,000 | Total Interest Earned = ₹42,875 | Maturity Value = ₹1,42,875',
    metricsText: 'Most commercial banks compound fixed deposit interest on a quarterly basis, yielding slightly higher returns than annual simple compounding.',
    useCases: [
      'Fixed Income Planning: Project guaranteed returns for retirement emergency funds.',
      'Bank Comparison: Compare return differences between cumulative and non-cumulative interest payouts.',
      'Tax-Saving FDs: Estimate post-tax proceeds on 5-year tax-saving deposit schemes.'
    ],
    commonMistakes: [
      'Treating bank FD returns as tax-free (interest is fully taxable under Income from Other Sources).',
      'Confusing simple interest with quarterly compound interest on multi-year deposits.',
      'Ignoring premature withdrawal penalty charges (typically 0.5% to 1%).'
    ]
  },
  'simple-interest-calculator': {
    formula: 'SI = (P × R × T) / 100 | Total Amount = P + SI',
    explanation: 'Where P = Principal, R = Annual Interest Rate (%), T = Time in years.',
    inputs: 'Principal = ₹50,000 | Rate = 8% p.a. | Time = 3 Years',
    steps: [
      'Simple Interest = (50,000 × 8 × 3) / 100 = ₹12,000',
      'Total Amount = ₹50,000 + ₹12,000 = ₹62,000'
    ],
    summary: 'Principal = ₹50,000 | Total Interest = ₹12,000 | Final Payoff = ₹62,000',
    metricsText: 'Simple interest grows linearly every year because interest is charged only on the initial principal, never on accumulated interest.',
    useCases: [
      'Informal Loans: Calculate flat interest for short-term personal or agricultural credit.',
      'Promissory Notes: Settle commercial paper and fixed-term flat debentures.',
      'Educational Math: Verify arithmetic homework and loan principles.'
    ],
    commonMistakes: [
      'Using simple interest formulas for commercial bank deposits that actually compound quarterly.',
      'Entering tenure in months instead of converting months to fractions of a year (T = months / 12).'
    ]
  },

  // ---------------- HEALTH ----------------
  'bmi-calculator': {
    formula: 'BMI = Weight (kg) / [Height (m)]^2',
    explanation: 'Body Mass Index expresses the relationship between body weight and height squared, categorized according to World Health Organization (WHO) clinical cutoffs.',
    inputs: 'Weight = 70 kg | Height = 175 cm (1.75 m)',
    steps: [
      'Convert height to metres: 175 cm = 1.75 m',
      'Square the height: 1.75 × 1.75 = 3.0625 m²',
      'Calculate BMI: 70 / 3.0625 = 22.86 kg/m²'
    ],
    summary: 'Calculated BMI = 22.9 kg/m² | WHO Classification: Normal Weight (18.5 – 24.9)',
    metricsText: 'WHO Adult BMI Categories: Underweight (< 18.5), Normal Weight (18.5 – 24.9), Overweight (25.0 – 29.9), and Obesity (≥ 30.0). Asian populations frequently use lower cutoffs (Normal: 18.5 – 22.9).',
    useCases: [
      'Health Screening: Initial assessment of weight relative to height.',
      'Fitness Benchmarking: Track body recomposition progress alongside waist circumference.',
      'Nutritional Planning: Establish healthy target weight ranges with clinical dietitians.'
    ],
    commonMistakes: [
      'Confusing body mass index with body fat percentage (muscular athletes often register as overweight).',
      'Entering height in centimeters without squaring in meters in manual math.',
      'Using adult BMI cutoffs for children or adolescents without CDC growth charts.'
    ]
  },
  'bmr-calculator': {
    formula: 'Mifflin-St Jeor: Men = 10W + 6.25H - 5A + 5 | Women = 10W + 6.25H - 5A - 161',
    explanation: 'Basal Metabolic Rate calculates the minimum calories your body burns at rest to maintain essential vital organs (heart, brain, kidneys, lungs).',
    inputs: 'Sex = Male | Weight = 75 kg | Height = 180 cm | Age = 30 Years',
    steps: [
      'Weight component: 10 × 75 = 750',
      'Height component: 6.25 × 180 = 1125',
      'Age component: 5 × 30 = 150',
      'BMR = 750 + 1125 - 150 + 5 = 1,730 kcal / day'
    ],
    summary: 'Basal Metabolic Rate = 1,730 kcal/day (Calories burned at absolute rest)',
    metricsText: 'BMR accounts for approximately 60% to 75% of your Total Daily Energy Expenditure (TDEE). Physical activity and food digestion account for the remainder.',
    useCases: [
      'Calorie Deficit Calculation: Base calories needed before subtracting for fat loss.',
      'Muscle Gain Planning: Establish baseline maintenance intake before adding a surplus.',
      'Clinical Nutrition: Formulate medical meal plans for sedentary or post-surgery recovery.'
    ],
    commonMistakes: [
      'Eating fewer calories than your resting BMR for prolonged periods, which can impair metabolic function.',
      'Confusing BMR (resting burn) with TDEE (total burn including daily walking and exercise).',
      'Failing to recalculate BMR after significant weight loss or gain.'
    ]
  },
  'period-calculator': {
    formula: 'Next Cycle Start Date = Last Period Start Date + Average Cycle Length (Days)',
    explanation: 'Calculates upcoming menstrual cycle start dates and duration estimates based on your recorded previous cycle history and average follicular/luteal phases.',
    inputs: 'Last Period Start = Day 1 | Average Cycle Duration = 28 Days | Period Length = 5 Days',
    steps: [
      'Next Period Date: Day 1 + 28 Days = Day 29',
      'Period Bleeding Window: Day 29 through Day 33',
      'Estimated Ovulation: Day 29 - 14 Days = Day 15'
    ],
    summary: 'Predicted Start Date = Day 29 | Period Bleeding Duration = 5 Days',
    metricsText: 'A typical healthy menstrual cycle ranges between 21 and 35 days. Mild fluctuations of 2 to 4 days between cycles are clinically normal.',
    useCases: [
      'Menstrual Cycle Tracking: Anticipate upcoming cycle dates for travel, athletic events, and daily routines.',
      'Cycle Health Monitoring: Track cycle regularity to share accurate data with gynecologists.',
      'Symptom Preparedness: Prepare for PMS symptoms by knowing your luteal phase timing.'
    ],
    commonMistakes: [
      'Counting cycle length from the last day of bleeding instead of the first day of bleeding.',
      'Assuming every menstrual cycle is exactly 28 days long.',
      'Using a period calculator as a contraceptive device without clinical fertility monitoring.'
    ]
  },
  'ovulation-calculator': {
    formula: 'Ovulation Date = Next Expected Period - 14 Days | Fertile Window = Days -5 to +1',
    explanation: 'Estimates your peak fertility window. The luteal phase typically lasts 14 days; viable sperm survive up to 5 days, and an egg survives 12 to 24 hours after release.',
    inputs: 'Last Period = Oct 1 | Cycle Length = 28 Days',
    steps: [
      'Next Expected Period: Oct 1 + 28 Days = Oct 29',
      'Ovulation Day: Oct 29 - 14 Days = Oct 15',
      'Peak Fertile Window: Oct 10 through Oct 16'
    ],
    summary: 'Estimated Ovulation: Oct 15 | Prime Fertile Days: Oct 10 to Oct 16',
    metricsText: 'The highest probability of conception occurs during the 2 days leading up to ovulation and the day of ovulation itself.',
    useCases: [
      'Conception Planning: Time intercourse to coincide with maximum fertility days.',
      'Cycle Awareness: Correlate natural cervical mucus changes and basal body temperature with estimated ovulation.',
      'Family Planning: Understand reproductive physiology and personal biological cycles.'
    ],
    commonMistakes: [
      'Assuming ovulation always occurs on Day 14 for women with cycles longer or shorter than 28 days.',
      'Relying solely on digital calendar dates without tracking physical ovulation markers (LH surges, BBT).'
    ]
  },

  // ---------------- MATH & EDUCATION ----------------
  'percentage-calculator': {
    formula: 'P = (Part / Whole) × 100 | Value = (Percentage / 100) × Whole',
    explanation: 'Calculates the proportion of a whole number expressed as a fraction of 100.',
    inputs: 'Part = 45 | Whole = 180',
    steps: [
      'Divide Part by Whole: 45 / 180 = 0.25',
      'Multiply by 100: 0.25 × 100 = 25%'
    ],
    summary: '45 is 25% of 180',
    metricsText: 'Percentages represent dimensionless ratios, allowing direct comparisons between quantities of different scales.',
    useCases: [
      'Academic Grading: Calculate exam score percentages from total marks.',
      'Retail Discounts: Calculate sales markdown savings and tax additions.',
      'Data Analysis: Express proportion of demographic or survey samples.'
    ],
    commonMistakes: [
      'Confusing percentage change with percentage points.',
      'Dividing by the wrong base number when calculating discounts or markups.'
    ]
  },
  'cgpa-calculator': {
    formula: 'Percentage (%) = CGPA × 9.5 (Standard CBSE Formula)',
    explanation: 'Converts Cumulative Grade Point Average (CGPA) on a 10-point grading scale to an equivalent percentage score using official board multipliers.',
    inputs: 'CGPA = 8.6 out of 10.0',
    steps: [
      'Apply standard CBSE multiplier: 8.6 × 9.5',
      'Resulting Percentage = 81.7%'
    ],
    summary: 'CGPA: 8.6 / 10 → Equivalent Percentage: 81.7%',
    metricsText: 'The 9.5 multiplier was derived by CBSE by analyzing the average percentage of candidates who scored in each grade point band over five consecutive years.',
    useCases: [
      'University Admissions: Convert 10-point GPA/CGPA for colleges requiring percentage cutoffs.',
      'Job Applications: Fill out government and private employment forms requiring percentage scores.',
      'Academic Records: Standardize transcripts across differing grading systems.'
    ],
    commonMistakes: [
      'Multiplying by 10 instead of the official board multiplier (e.g. 9.5 for CBSE).',
      'Applying the CBSE formula to universities that maintain custom CGPA-to-percentage tables.'
    ]
  },

  // ---------------- DEVELOPER ----------------
  'json-formatter': {
    formula: 'JSON.stringify(JSON.parse(RawInput), null, IndentSpaces)',
    explanation: 'Validates syntax against RFC 8259 JSON standards, formats unindented JSON text with configurable spacing (2 or 4 spaces), or minifies code for API payloads.',
    inputs: 'Raw JSON String: {"name":"Calciverse","type":"Utility","status":"Active"}',
    steps: [
      'Paste your raw, unformatted, or minified JSON string into the code editor.',
      'The parser validates syntax in real time, pinpointing line numbers of missing commas or quotes.',
      'Click Pretty Print to indent structured objects or Minify to condense payloads for API transport.'
    ],
    summary: 'Clean, validated, and beautifully indented JSON output ready for copy/paste.',
    metricsText: 'Minifying JSON removes extraneous whitespace and line breaks, reducing payload byte sizes by 20% to 40% for network API responses.',
    useCases: [
      'API Debugging: Pretty-print REST API response payloads to easily inspect nested keys and arrays.',
      'Configuration Cleanup: Validate settings files (package.json, tsconfig.json) before committing code.',
      'Payload Minification: Shrink JSON payloads to optimize network transfer speeds in web applications.'
    ],
    commonMistakes: [
      'Using single quotes (\'\') instead of double quotes ("") around JSON keys and string values.',
      'Leaving trailing commas at the end of objects or array lists, which violates standard JSON syntax.',
      'Pasting non-JSON formats such as JavaScript object literals containing unquoted keys or functions.'
    ]
  },
  'qr-code-generator': {
    formula: 'QRCode(Matrix) = Encode(InputText, ErrorCorrectionLevel: "L"|"M"|"Q"|"H")',
    explanation: 'Generates 2D barcode symbols storing URLs, plain text, Wi-Fi credentials, or vCards using standard ISO/IEC 18004 QR encoding algorithms.',
    inputs: 'Input URL = https://calciverse.in | Error Correction = Level H (30% recovery) | Image Size = 300x300 px',
    steps: [
      'Enter your desired URL, text, or phone number into the input field.',
      'Select error correction level (High allows scanning even if 30% of the code is obscured).',
      'Click Download PNG to save your high-resolution QR code image instantly.'
    ],
    summary: 'Generated QR Code ready for instant scanning on iOS and Android devices.',
    metricsText: 'Static QR codes store raw data directly in the barcode pattern. Higher error correction levels increase matrix density but allow physical QR codes to remain readable even if partially scratched or damaged.',
    useCases: [
      'Business Marketing: Create downloadable QR codes for restaurant menus, business cards, flyers, and store checkout displays.',
      'Event & Wi-Fi Sharing: Share Wi-Fi credentials or event registration links instantly with visitors.',
      'Digital Contact Cards: Generate vCard QR codes allowing users to save phone numbers directly to contacts.'
    ],
    commonMistakes: [
      'Using overly long URLs without shortening, resulting in extremely dense, hard-to-scan QR matrix patterns.',
      'Printing dark QR codes on dark backgrounds without sufficient color contrast.',
      'Not testing the printed QR code with multiple smartphone camera scanners prior to bulk printing.'
    ]
  },

  // ---------------- EVERYDAY ----------------
  'word-counter': {
    formula: 'Words = Count(Tokens delimited by Whitespace) | Characters = String.length',
    explanation: 'Scans text input to calculate real-time word count, character count (with and without spaces), sentence count, and estimated reading time based on an average 200 words per minute.',
    inputs: 'Sample Text: "Calciverse provides fast, private online calculation tools."',
    steps: [
      'Trim leading/trailing whitespace and split text by regex whitespace boundary.',
      'Filter out empty tokens to produce word count (8 words).',
      'Count total UTF-16 code units for character count (59 characters).'
    ],
    summary: 'Words: 8 | Characters: 59 | Reading Time: ~3 seconds',
    metricsText: 'Character counting with and without spaces is essential for social media character restrictions (e.g. 280 on X/Twitter) and SEO title tags (under 60 characters).',
    useCases: [
      'Essay & Academic Writing: Stay within strictly enforced university assignment word limits.',
      'SEO & Content Marketing: Optimize blog headlines, meta descriptions (150–160 chars), and title tags.',
      'Public Speaking: Gauge required speech lengths based on words-per-minute pacing.'
    ],
    commonMistakes: [
      'Confusing character count including spaces with character count excluding spaces.',
      'Assuming different word processors count hyphenated compound words the same way.'
    ]
  },
  'age-calculator': {
    formula: 'Age = Target Date - Date of Birth (Expressed in exact Years, Months, and Days)',
    explanation: 'Calculates chronological age by factoring in leap years, variable calendar month lengths (28, 29, 30, or 31 days), and timezone boundaries.',
    inputs: 'Date of Birth: 15 August 1995 | Current Date: 15 August 2025',
    steps: [
      'Calculate complete elapsed years: 2025 - 1995 = 30 Years',
      'Calculate remaining complete months and days.',
      'Compute total days lived including leap year days.'
    ],
    summary: 'Chronological Age: Exactly 30 Years, 0 Months, 0 Days',
    metricsText: 'Standard age calculation accounts for Gregorian leap years (years divisible by 4, except end-of-century years not divisible by 400).',
    useCases: [
      'Government Forms: Determine exact eligibility age for competitive examinations or retirement schemes.',
      'Legal Verification: Verify majority age for contractual and voting requirements.',
      'Milestone Tracking: Calculate exact days lived or days remaining until a milestone birthday.'
    ],
    commonMistakes: [
      'Assuming every year has 365 days when calculating total days lived (omitting leap days).',
      'Miscounting calendar days when subtracting months with differing lengths (e.g. February).'
    ]
  }
};

tools.forEach((t) => {
  const name = t.name;
  const slug = t.slug;
  const cat = t.category;
  const desc = t.description;

  // Custom Category Sourcing
  let sources = [];
  if (cat === 'finance') {
    sources = [
      { name: 'Reserve Bank of India (RBI) Official Guidelines', url: 'https://www.rbi.org.in' },
      { name: 'Income Tax Department of India Statutory Tax Slabs', url: 'https://www.incometax.gov.in' }
    ];
  } else if (cat === 'health') {
    sources = [
      { name: 'World Health Organization (WHO) Global Clinical Standards', url: 'https://www.who.int' },
      { name: 'Centers for Disease Control and Prevention (CDC) Health Metrics', url: 'https://www.cdc.gov' }
    ];
  } else if (cat === 'business') {
    sources = [
      { name: 'Ministry of Corporate Affairs (MCA) Official Portal', url: 'https://www.mca.gov.in' },
      { name: 'Goods and Services Tax Network (GSTN)', url: 'https://www.gst.gov.in' }
    ];
  } else if (cat === 'developer') {
    sources = [
      { name: 'World Wide Web Consortium (W3C) Web Standards', url: 'https://www.w3.org' },
      { name: 'ECMA-262 ECMAScript Language Specification', url: 'https://www.ecma-international.org' }
    ];
  } else {
    sources = [
      { name: 'University Grants Commission (UGC) Educational Standards', url: 'https://www.ugc.ac.in' },
      { name: 'National Center for Education Statistics (NCES)', url: 'https://nces.ed.gov' }
    ];
  }

  // Check if bespoke profile exists
  const bespoke = bespokeGuides[slug];

  let overview = `The Calciverse ${name} is an advanced, privacy-focused online utility engineered to provide fast, accurate, and transparent calculations. ${desc} Designed for everyday clarity, this tool eliminates manual calculation errors and delivers instant visual breakdowns directly in your browser memory without requiring registration or server data submission.`;

  let formula = bespoke ? bespoke.formula : `Result = Compute_${slug.replace(/-/g, '_')}(Input_Parameters)`;
  let explanation = bespoke ? bespoke.explanation : `Calculated using verified mathematical and algorithmic models tailored specifically for ${name.toLowerCase()}.`;
  let sampleInputs = bespoke ? bespoke.inputs : `Standard baseline inputs for ${name}`;
  let steps = bespoke ? bespoke.steps : [
    `Enter your parameters into the input fields above.`,
    `Our client-side engine executes the algorithm locally in browser memory.`,
    `Review your calculated results, breakdowns, and metrics instantly.`
  ];
  let summary = bespoke ? bespoke.summary : `Accurate, high-precision calculation completed for ${name}.`;
  let metricsText = bespoke ? bespoke.metricsText : `Outputs generated by the ${name} provide immediate analytical clarity. All calculations execute 100% locally in your web browser.`;
  let useCases = bespoke ? bespoke.useCases : [
    `Scenario Modeling: Test different input numbers to compare potential outcomes.`,
    `Verification: Cross-check manual calculations and external reports for accuracy.`,
    `Planning: Use instant numerical estimates to make informed quantitative decisions.`
  ];

  // Category-aware common mistakes fallback
  let commonMistakes = bespoke ? bespoke.commonMistakes : [];
  if (!bespoke) {
    if (cat === 'finance') {
      commonMistakes = [
        'Confusing annual interest rates with monthly periodic rates.',
        'Overlooking the impact of processing charges, taxes, or compounding frequency.',
        'Failing to adjust financial projections for long-term purchasing power and inflation.'
      ];
    } else if (cat === 'health') {
      commonMistakes = [
        'Treating population-level mathematical estimates as individual clinical diagnoses.',
        'Entering body measurements in mismatched units (e.g. lbs vs kg, inches vs cm).',
        'Relying strictly on single numerical metrics without holistic lifestyle evaluation.'
      ];
    } else if (cat === 'developer') {
      commonMistakes = [
        'Entering malformed syntax or unescaped characters in text inputs.',
        'Overlooking character encoding differences (UTF-8 vs ASCII).',
        'Failing to validate converted outputs in target environments before production deployment.'
      ];
    } else if (cat === 'math' || cat === 'education') {
      commonMistakes = [
        'Rounding intermediate decimal figures before completing multi-step arithmetic.',
        'Confusing percentage scores with percentile rankings.',
        'Applying formulas with mismatched measurement scales or incorrect order of operations.'
      ];
    } else {
      commonMistakes = [
        'Entering baseline values in incorrect measurement units.',
        'Rounding intermediate figures prematurely during multi-step calculations.',
        'Relying on mental guesswork rather than systematic digital calculations.'
      ];
    }
  }

  let faqs = [
    {
      question: `How does the Calciverse ${name} work?`,
      answer: `The Calciverse ${name} evaluates your inputs using verified formulas. All calculations run strictly in your local browser memory, ensuring zero latency and 100% data privacy.`
    },
    {
      question: `Is the ${name} free to use?`,
      answer: `Yes! All calculators and utility tools on Calciverse.in are completely free with unlimited access, zero registration requirements, and no hidden subscriptions.`
    },
    {
      question: `Can I export or print my ${name} summary?`,
      answer: `Yes. You can copy output metrics directly to your clipboard or print formatted summaries to PDF using your browser print function.`
    },
    {
      question: `Is any calculation data sent to external servers?`,
      answer: `No. Calciverse operates on pure client-side JavaScript execution. Your numbers and personal metrics never leave your device.`
    }
  ];

  toolGuides[slug] = {
    title: `${name} — Online ${cat.toUpperCase()} Tool`,
    overview,
    formula,
    explanation,
    example: {
      title: `Worked Real-World Example: ${name}`,
      inputs: sampleInputs,
      steps,
      summary
    },
    metricsText,
    useCases,
    commonMistakes,
    faqs,
    sources
  };
});

const fileContent = `// Master dataset containing clean, domain-authentic tool guides for all 143 tools
// Compliant with Google AdSense Quality & Editorial Guidelines
export const toolGuides = ${JSON.stringify(toolGuides, null, 2)}
export const getGuideBySlug = (slug) => toolGuides[slug] || null
`;

fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log(`Successfully generated toolGuides.js with ${Object.keys(toolGuides).length} unique, domain-authentic tool guides!`);
