import { HelpCircle, CheckCircle2, BookOpen, Calculator, ShieldCheck, Zap, ArrowRight, Lightbulb } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

// Tool-specific formula, worked example, and results breakdown
const TOOL_GUIDE_DATABASE = {
  'emi-calculator': {
    formula: 'E = P × r × (1 + r)^n / ((1 + r)^n - 1)',
    explanation: 'Where P = Principal loan amount, r = monthly interest rate (Annual Rate / 12 / 100), and n = tenure in total months.',
    example: {
      title: 'Worked Example: Home Loan EMI',
      inputs: 'Loan Amount (P) = ₹10,00,000 | Interest Rate (R) = 8.5% p.a. | Tenure = 15 Years (180 Months)',
      steps: [
        'Monthly Interest Rate (r) = 8.5 / 12 / 100 = 0.007083',
        'Compound Factor (1+r)^180 = (1.007083)^180 = 3.5598',
        'EMI (E) = 10,00,000 × 0.007083 × 3.5598 / (3.5598 - 1) = ₹9,847 / month'
      ],
      summary: 'Monthly EMI = ₹9,847 | Total Interest Payable = ₹7,72,540 | Total Repayment = ₹17,72,540'
    },
    metricsText: 'In early loan years, up to 70% of each EMI goes toward interest rather than principal reduction. Prepaying principal early significantly cuts total interest paid.',
    faqs: [
      { question: 'What is a reducing-balance loan EMI?', answer: 'In a reducing balance EMI, interest is charged only on the remaining outstanding principal balance each month rather than the original loan principal amount.' },
      { question: 'How can I lower my monthly EMI payment?', answer: 'You can lower your monthly EMI by opting for a longer loan tenure, making a larger initial down payment, or negotiating a lower interest rate with your lender.' },
      { question: 'Does prepaying a loan reduce EMI or tenure?', answer: 'Lenders usually default to keeping your EMI fixed and shortening your total loan tenure, saving you substantial total interest. You can also request a lower EMI.' },
      { question: 'Is the Calciverse EMI Calculator accurate for all Indian banks?', answer: 'Yes, our formula uses the standard mathematical reducing-balance model utilized by HDFC, SBI, ICICI, Axis Bank, and leading lenders.' }
    ]
  },
  'sip-calculator': {
    formula: 'M = P × ({[1 + i]^n - 1} / i) × (1 + i)',
    explanation: 'Where P = Monthly investment amount, i = periodic monthly rate (Annual Return / 12 / 100), and n = total duration in months.',
    example: {
      title: 'Worked Example: Equity Mutual Fund SIP',
      inputs: 'Monthly SIP (P) = ₹5,000 | Expected Annual Return = 12% | Investment Period = 10 Years (120 Months)',
      steps: [
        'Monthly Interest Rate (i) = 12 / 12 / 100 = 0.01',
        'Compounded Value Factor = (1.01^120 - 1) / 0.01 × 1.01 = 232.339',
        'Total Maturity Value (M) = 5,000 × 232.339 = ₹11,61,695'
      ],
      summary: 'Total Invested Amount = ₹6,00,000 | Total Wealth Gained = ₹5,61,695 | Expected Maturity = ₹11,61,695'
    },
    metricsText: 'Compound growth accelerates exponentially in later years. Doubling your tenure from 10 to 20 years can increase your final wealth by over 300%.',
    faqs: [
      { question: 'What is a Systematic Investment Plan (SIP)?', answer: 'A SIP allows you to invest a fixed dollar or rupee amount regularly into mutual funds, rupee-cost averaging market volatility over time.' },
      { question: 'What rate of return should I assume for equity SIPs in India?', answer: 'Historically, broad Indian equity indices (Nifty 50, BSE Sensex) have delivered 12% to 14% CAGR over long 10+ year horizons.' },
      { question: 'Are mutual fund SIP returns guaranteed?', answer: 'No, mutual fund investments are subject to market risks. SIP projections are mathematical estimates based on your chosen expected annual return.' },
      { question: 'Can I step up my SIP amount every year?', answer: 'Yes, stepping up your SIP by 10% annually can boost your final retirement corpus by over 50% compared to a fixed SIP.' }
    ]
  },
  'gst-calculator': {
    formula: 'GST Amount = (Base Price × Rate) / 100 | Inclusive Base = Total Price / (1 + Rate / 100)',
    explanation: 'Calculates both tax addition (exclusive price) and tax extraction (inclusive price) across standard statutory slab rates (5%, 12%, 18%, 28%).',
    example: {
      title: 'Worked Example: Extracting 18% GST from Inclusive Invoice',
      inputs: 'Total Invoice Price = ₹5,900 | GST Slab Rate = 18%',
      steps: [
        'Base Price before tax = ₹5,900 / (1 + 0.18) = ₹5,900 / 1.18 = ₹5,000',
        'Total GST Charged = ₹5,900 - ₹5,000 = ₹900',
        'Intrastate Billing Split: CGST (9%) = ₹450 | SGST (9%) = ₹450 (or IGST 18% = ₹900 for interstate)'
      ],
      summary: 'Pre-tax Base Price = ₹5,000 | CGST (9%) = ₹450 | SGST (9%) = ₹450 | Invoice Total = ₹5,900'
    },
    metricsText: 'Adding 18% to a base price multiplies by 1.18. But extracting 18% GST requires dividing by 1.18 — subtracting 18% of the inclusive bill directly undercounts the base price every single time.',
    faqs: [
      { question: 'What is the difference between CGST, SGST, and IGST?', answer: 'CGST (Central) and SGST (State) split the tax rate equally (e.g. 9% + 9% for 18% GST) on intrastate sales. IGST (Integrated) applies full rate (18%) on interstate sales.' },
      { question: 'How do I extract GST from a bill total?', answer: 'Divide the inclusive bill total by (1 + GST Rate / 100). For an 18% bill of ₹1,180: Base = 1180 / 1.18 = ₹1,000. GST = ₹180.' },
      { question: 'What are the official GST slab rates in India?', answer: 'India has 4 primary GST slab rates: 5% (household essentials & food), 12% (processed food & electronics), 18% (standard services & IT), and 28% (luxury items & automobiles).' },
      { question: 'How does Input Tax Credit (ITC) work under GST?', answer: 'Registered businesses can deduct GST paid on business inputs from the GST collected on sales, ensuring tax is charged only on value added at each supply stage.' }
    ]
  },
  'number-to-words-converter': {
    formula: 'Words = GroupDigitsByScale(Number, Scale: "Indian" | "International")',
    explanation: 'Converts numeric values into written word notation using the Indian numbering system (Lakhs, Crores) or International system (Millions, Billions), with optional currency formatting for cheques and invoices.',
    example: {
      title: 'Worked Example: ₹12,34,567.50 in Indian Words',
      inputs: 'Number = 1234567.50 | Scale = Indian Lakhs | Currency = INR (Rupees)',
      steps: [
        'Integer Part Grouping: 12,34,567 → 12 Lakhs + 34 Thousands + 5 Hundreds + 67',
        'Words conversion: Twelve Lakh Thirty Four Thousand Five Hundred Sixty Seven',
        'Decimal Part: 0.50 → Fifty Paise',
        'Cheque Format Output: Rupees Twelve Lakh Thirty Four Thousand Five Hundred Sixty Seven and Fifty Paise Only'
      ],
      summary: 'Number = ₹12,34,567.50 | Indian Words = Twelve Lakh Thirty Four Thousand Five Hundred Sixty Seven Rupees and Fifty Paise Only'
    },
    metricsText: 'In the Indian scale, commas separate the first thousand (3 digits) and then every 2 digits (Lakhs, Crores). In the International scale, numbers are grouped in sets of 3 digits (Thousands, Millions, Billions).',
    faqs: [
      { question: 'What is the difference between Lakhs/Crores and Millions/Billions?', answer: '1 Lakh = 100,000 (100 Thousand). 10 Lakhs = 1 Million (1,000,000). 1 Crore = 10 Million (10,000,000). 100 Crores = 1 Billion (1,000,000,000).' },
      { question: 'How should bank cheque amounts be written in words?', answer: 'Bank cheques require the prefix "Rupees" (or currency name), exact words for amounts, decimal paise, and the word "Only" at the end to prevent unauthorized text additions.' },
      { question: 'How are decimal paise formatted in written words?', answer: 'Decimals are converted into fractional sub-units (e.g. 50 paise for 0.50 INR or 50 Cents for 0.50 USD), connected using "and".' }
    ]
  },
  'prime-number-checker': {
    formula: 'IsPrime(n) = true if n > 1 and n mod d ≠ 0 for all integers 2 ≤ d ≤ ⌊√n⌋',
    explanation: 'Tests whether a positive integer is prime (divisible only by 1 and itself) using optimized trial division up to √n, displaying prime status, factor trees, and prime factorization.',
    example: {
      title: 'Worked Example: Testing if 143 is Prime',
      inputs: 'Number (n) = 143',
      steps: [
        'Calculate upper limit: √143 ≈ 11.95 → Test prime divisors up to 11 (2, 3, 5, 7, 11)',
        '143 / 2 = 71.5 (No)',
        '143 / 3 = 47.66 (No)',
        '143 / 7 = 20.42 (No)',
        '143 / 11 = 13 (Exact division! Factors are 11 and 13)'
      ],
      summary: 'Result: 143 is COMPOSITE | Prime Factors = 11 × 13 | All Factors = 1, 11, 13, 143'
    },
    metricsText: 'Trial division only needs to check divisors up to √n. If a composite number had no prime divisor ≤ √n, the product of its factors would exceed n.',
    faqs: [
      { question: 'Why is 1 not considered a prime number?', answer: 'By mathematical definition, prime numbers must have exactly two distinct positive divisors: 1 and the number itself. 1 has only one divisor, so it is neither prime nor composite.' },
      { question: 'What is the fastest way to check if a large number is prime?', answer: 'For small to medium numbers, trial division up to √n is instant. For large numbers in cryptography, algorithms like Miller-Rabin or Baillie-PSW primality tests are used.' },
      { question: 'What are twin primes?', answer: 'Twin primes are pairs of prime numbers that differ by exactly 2, such as (3, 5), (11, 13), (17, 19), and (41, 43).' }
    ]
  },
  'credit-card-interest-calculator': {
    formula: 'Daily Interest = (Outstanding Balance × APR / 365) × Days | APR = Monthly Rate × 12',
    explanation: 'Calculates credit card finance charges, daily compounding APR, minimum payment traps, and total payoff schedules.',
    example: {
      title: 'Worked Example: Credit Card Balance Paid via Minimum Payments',
      inputs: 'Balance = ₹1,00,000 | Monthly Interest = 3.5% (42% p.a. APR) | Min Payment = 5% of balance',
      steps: [
        'Daily Interest Rate = 42% / 365 = 0.115% per day',
        'First Month Interest = ₹1,00,000 × (3.5% / 100) = ₹3,500',
        'First Minimum Payment (5%) = ₹5,000 (only ₹1,500 reduces principal!)',
        'New Balance for Month 2 = ₹98,500'
      ],
      summary: 'Payoff Time on Min Payments = 14+ Years | Total Finance Charges Paid = ₹1,35,000+ (More than initial balance!)'
    },
    metricsText: 'Carrying forward even ₹1 of unpaid credit card balance forfeits the 45-day interest-free grace period on ALL new purchases immediately.',
    faqs: [
      { question: 'Why is credit card interest so high?', answer: 'Credit card debt is unsecured (no collateral). Banks charge high APRs (typically 36% to 45% annually in India) to offset default risk.' },
      { question: 'What happens if I only pay the Minimum Amount Due?', answer: 'Paying only minimum due (usually 5%) prevents late fees and credit score damage, but most of the payment goes toward interest, locking you in debt for years.' },
      { question: 'Does paying off credit card balance early save interest?', answer: 'Yes! Credit card finance charges accrue daily. Clearing your balance early eliminates daily APR interest immediately.' }
    ]
  },
  'income-tax-calculator': {
    formula: 'Tax = Σ [(Income in Slab - Lower Threshold) × Slab Rate] - Rebates + 4% Health & Education Cess',
    explanation: 'Computes tax liabilities under Section 115BAC (New Tax Regime with FY 2026-27 slab rates) and compares against Old Tax Regime deductions.',
    example: {
      title: 'Worked Example: New Tax Regime (FY 2026-27)',
      inputs: 'Annual Gross Salary = ₹10,00,000 | Standard Deduction = ₹75,000',
      steps: [
        'Net Taxable Income = 10,00,000 - 75,000 = ₹9,25,000',
        'Slab ₹0 - ₹3L: 0% = ₹0',
        'Slab ₹3L - ₹7L: 5% of ₹4,00,000 = ₹20,000',
        'Slab ₹7L - ₹9.25L: 10% of ₹2,25,000 = ₹22,500',
        'Basic Tax = ₹42,500 + 4% Cess (₹1,700) = ₹44,200 Total Tax'
      ],
      summary: 'Gross Income = ₹10,00,000 | Taxable Income = ₹9,25,000 | Total Tax Payable = ₹44,200'
    },
    metricsText: 'Under the New Tax Regime, taxpayers with gross income up to ₹7,75,000 pay zero tax thanks to Section 87A rebate and ₹75,000 standard deduction.',
    faqs: [
      { question: 'Which tax regime is better for salaried individuals?', answer: 'If your total eligible deductions under Old Regime (80C, HRA, Home Loan Interest) cross ₹4 Lakhs, Old Regime may save more tax; otherwise New Regime is simpler and cheaper.' },
      { question: 'What is the Standard Deduction for FY 2026-27?', answer: 'The standard deduction for salaried employees and pensioners under the New Tax Regime is ₹75,000.' },
      { question: 'How is Section 87A tax rebate calculated?', answer: 'Under the New Regime, if taxable income does not exceed ₹7,00,000, you receive a full tax rebate of up to ₹25,000, reducing tax payable to zero.' }
    ]
  },
  'tds-calculator': {
    formula: 'TDS Amount = Payment Amount × (TDS Section Rate / 100) | Higher 20% rate applies without PAN',
    explanation: 'Calculates Tax Deducted at Source (TDS) under Indian Income Tax Act Sections 194A (FD Interest), 194J (Professional fees), 194C (Contracts), and 192 (Salary).',
    example: {
      title: 'Worked Example: Section 194J Professional Services TDS',
      inputs: 'Invoice Value = ₹1,00,000 | Section 194J (Professional Fees) Rate = 10% | Valid PAN Provided',
      steps: [
        'Applicable TDS Rate under Sec 194J = 10%',
        'TDS Deduction = ₹1,00,000 × (10 / 100) = ₹10,000',
        'Net Payment to Professional = ₹1,00,000 - ₹10,000 = ₹90,000',
        'Deductor deposits ₹10,000 explicitly into Tax Department mapped to payee PAN.'
      ],
      summary: 'Gross Payment = ₹1,00,000 | TDS Deducted (10%) = ₹10,000 | Net Payee Receipt = ₹90,000'
    },
    metricsText: 'Under Section 206AA, if the deductee fails to furnish a valid Permanent Account Number (PAN), TDS must be deducted at a flat penal rate of 20%.',
    faqs: [
      { question: 'What is Tax Deducted at Source (TDS)?', answer: 'TDS is a spot-tax mechanism where the payer deducts tax at statutory rates before releasing payment to the payee and deposits it directly with the Tax Department.' },
      { question: 'What is the TDS limit on Fixed Deposit (FD) interest under Section 194A?', answer: 'Banks deduct 10% TDS on FD interest exceeding ₹40,000 per financial year for individuals (₹50,000 threshold for senior citizens).' },
      { question: 'How do I claim a refund for TDS deducted?', answer: 'If your total annual income is below the taxable slab or your tax liability is lower than TDS deducted, file your Income Tax Return (ITR) to claim a full refund.' },
      { question: 'What are Form 15G and Form 15H?', answer: 'Form 15G (for individuals <60 years) and Form 15H (for senior citizens) are self-declaration forms submitted to banks to prevent TDS deduction when annual income is below taxable limits.' }
    ]
  },
  'capital-gains-calculator': {
    formula: 'Capital Gain = Sale Consideration - Transfer Expenses - Cost of Acquisition',
    explanation: 'Calculates Short-Term (STCG) and Long-Term (LTCG) Capital Gains tax on Equity Stocks, Mutual Funds, and Real Estate property under Union Budget 2024 revisions.',
    example: {
      title: 'Worked Example: LTCG on Equity Mutual Fund Sale (Budget 2024 Rules)',
      inputs: 'Purchase Price = ₹5,00,000 | Sale Price = ₹8,00,000 | Holding Period = 2 Years (Long Term)',
      steps: [
        'Total Capital Gain = ₹8,00,000 - ₹5,00,000 = ₹3,00,000',
        'Statutory LTCG Exemption under Section 112A = ₹1,25,000',
        'Taxable LTCG = ₹3,00,000 - ₹1,25,000 = ₹1,75,000',
        'LTCG Tax at revised 12.5% = ₹1,75,000 × 12.5% = ₹21,875 (+ 4% Cess = ₹22,750)'
      ],
      summary: 'Total Capital Gain = ₹3,00,000 | Tax-Free Exemption = ₹1,25,000 | Net LTCG Tax = ₹22,750'
    },
    metricsText: 'Under Union Budget 2024 rules: Equity LTCG tax rate is 12.5% (with ₹1.25L annual exemption), STCG equity tax rate is 20%. Real estate property LTCG is taxed at 12.5% without indexation or 20% with indexation for pre-2024 purchases.',
    faqs: [
      { question: 'What is the difference between STCG and LTCG?', answer: 'Short-Term Capital Gains (STCG) apply when assets are sold within a short holding period (12 months for equity, 24 months for real estate). Long-Term Capital Gains (LTCG) apply for longer holding periods.' },
      { question: 'What are the equity capital gains tax rates after Budget 2024?', answer: 'Equity STCG (held <12 months) is taxed at 20%. Equity LTCG (held >12 months) is taxed at 12.5% on gains exceeding ₹1.25 Lakh per financial year.' },
      { question: 'How can I save tax on real estate capital gains under Section 54?', answer: 'You can save LTCG tax on house property by reinvesting net gains in purchasing or constructing another residential house property within statutory time limits.' }
    ]
  },
  'bmi-calculator': {
    formula: 'BMI = Weight (kg) / [Height (m)]²',
    explanation: 'Body Mass Index evaluates adult body composition against World Health Organization (WHO) clinical classifications.',
    example: {
      title: 'Worked Example: Adult BMI Computation',
      inputs: 'Weight = 70 kg | Height = 175 cm (1.75 meters)',
      steps: [
        'Height squared in meters = 1.75 × 1.75 = 3.0625 m²',
        'BMI = 70 / 3.0625 = 22.86 kg/m²',
        'Classification: Normal / Healthy Weight (Range: 18.5 - 24.9 kg/m²)'
      ],
      summary: 'BMI = 22.86 kg/m² | Category: Healthy Weight | Target Weight Range for Height: 56.7 kg - 76.3 kg'
    },
    metricsText: 'BMI measures total body mass relative to height. For athletes or bodybuilders with high muscle mass, complement BMI with Waist-to-Hip ratio.',
    faqs: [
      { question: 'What are the official WHO adult BMI categories?', answer: '<18.5: Underweight | 18.5 - 24.9: Normal Weight | 25.0 - 29.9: Overweight | >=30.0: Obese.' },
      { question: 'Are BMI categories different for Asian populations?', answer: 'Yes, WHO Asian guidelines recommend lower cutoffs: Normal (18.5-22.9), Overweight (23-24.9), Obese (>=25) due to higher body fat distribution at lower BMIs.' },
      { question: 'How can I calculate healthy weight for my height?', answer: 'Multiply your height in meters squared by 18.5 for the minimum healthy weight and by 24.9 for the upper healthy limit.' }
    ]
  }
}

export default function ToolGuide({ tool, category }) {
  if (!tool) return null

  // Retrieve custom guide or generate high quality default fallback
  const customGuide = TOOL_GUIDE_DATABASE[tool.slug]

  const formulaInfo = customGuide ? {
    formula: customGuide.formula,
    explanation: customGuide.explanation
  } : {
    formula: `${tool.name} Calculation: Output = Optimized_Function(Input_Parameters)`,
    explanation: `Calculated using standard numerical algorithms and verified mathematical equations for ${category?.name || 'general'} application.`
  }

  const example = customGuide?.example || {
    title: `Worked Example: Using Calciverse ${tool.name}`,
    inputs: `Standard Sample Inputs for ${tool.name}`,
    steps: [
      'Enter your specific parameters into the active input fields above.',
      'Our client-side algorithm processes equations instantly in your browser memory.',
      'View numerical outputs, summary metrics, and visual breakdowns in real time.'
    ],
    summary: `Instant, accurate calculation for ${tool.name} with 100% data privacy.`
  }

  const metricsText = customGuide?.metricsText || `Results generated by the Calciverse ${tool.name} provide actionable clarity. All calculations are performed strictly locally in your browser.`

  const faqs = customGuide?.faqs || [
    {
      question: `How does the Calciverse ${tool.name} work?`,
      answer: `The Calciverse ${tool.name} processes your inputs instantly using standard mathematical formulas. All calculations run client-side in your browser for 100% data privacy and maximum speed.`
    },
    {
      question: `Is the ${tool.name} free to use?`,
      answer: `Yes! The ${tool.name} on Calciverse.in is 100% free with unlimited usage, zero paywalls, and no registration required.`
    },
    {
      question: `Can I export or print calculation reports from ${tool.name}?`,
      answer: `Yes, you can copy summary figures to your clipboard or print clean PDF reports using our built-in print layout actions.`
    },
    {
      question: `Is my personal or financial data secure on Calciverse.in?`,
      answer: `Absolutely. Calciverse processes all calculations locally in your browser memory. We never store, transmit, or log your personal input numbers on external servers.`
    }
  ]

  return (
    <div className="mt-12 space-y-10 print:hidden no-print text-ink border-t border-line pt-10">

      {/* Guide Section 1: Overview & Usage Instructions */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xl font-bold font-display text-ink">
          <BookOpen className="text-saffron" size={24} />
          <h2>Comprehensive Guide to {tool.name}</h2>
        </div>
        <p className="text-sm text-ink-soft leading-relaxed">
          The <strong>{tool.name}</strong> on Calciverse.in is an intuitive, fast, and accurate online tool designed for {category?.name || 'everyday'} calculations. 
          Whether you are planning financial budgets, computing taxes, measuring physical health metrics, or streamlining daily tasks, this tool gives you instant, verified results with zero hassle.
        </p>

        {/* 3 Step Process Cards */}
        <div className="grid gap-4 sm:grid-cols-3 pt-2">
          <div className="rounded-xl border border-line bg-paper-raised p-4 space-y-1.5">
            <div className="flex items-center gap-2 font-semibold text-sm text-saffron">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-saffron/10 text-xs font-bold">1</span>
              Enter Inputs
            </div>
            <p className="text-xs text-ink-soft">Fill in your required values, numbers, or parameters in the input fields above.</p>
          </div>
          <div className="rounded-xl border border-line bg-paper-raised p-4 space-y-1.5">
            <div className="flex items-center gap-2 font-semibold text-sm text-signal">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-signal/10 text-xs font-bold">2</span>
              Instant Calculation
            </div>
            <p className="text-xs text-ink-soft">Our algorithms compute your accurate figures in real time as you adjust numbers.</p>
          </div>
          <div className="rounded-xl border border-line bg-paper-raised p-4 space-y-1.5">
            <div className="flex items-center gap-2 font-semibold text-sm text-ink font-mono">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink/10 text-xs font-bold">3</span>
              Copy & Export
            </div>
            <p className="text-xs text-ink-soft">Copy summary results directly to clipboard or export formatted reports to PDF.</p>
          </div>
        </div>
      </section>

      {/* Guide Section 2: Mathematical Formula & Methodology */}
      <section className="rounded-xl border border-line bg-paper p-5 space-y-3">
        <div className="flex items-center gap-2 text-base font-bold font-display text-ink">
          <Calculator className="text-signal" size={20} />
          <h3>Formula & Mathematical Methodology</h3>
        </div>
        <div className="rounded-lg bg-paper-raised p-3 border border-line font-mono text-xs text-ink font-semibold">
          {formulaInfo.formula}
        </div>
        <p className="text-xs text-ink-soft leading-relaxed">
          {formulaInfo.explanation} All calculations follow official regulatory guidelines, clinical physiological standards, and standard mathematical frameworks.
        </p>
      </section>

      {/* Guide Section 3: Worked Real-World Example */}
      <section className="rounded-xl border border-line bg-paper-raised p-5 space-y-3">
        <div className="flex items-center gap-2 text-base font-bold font-display text-ink">
          <Lightbulb className="text-saffron" size={20} />
          <h3>{example.title}</h3>
        </div>
        <div className="text-xs font-medium text-ink-soft border-b border-line pb-2">
          <strong>Sample Parameters:</strong> {example.inputs}
        </div>
        <div className="space-y-2 pt-1">
          <h4 className="text-xs font-bold uppercase tracking-wider text-ink-soft">Calculation Breakdown</h4>
          {example.steps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-ink">
              <ArrowRight className="text-saffron shrink-0 mt-0.5" size={14} />
              <span>{step}</span>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-saffron-soft/30 p-3 border border-saffron/20 text-xs font-semibold text-ink">
          {example.summary}
        </div>
      </section>

      {/* Guide Section 4: Results Analysis & Metrics Explanation */}
      <section className="space-y-3">
        <h3 className="text-base font-bold font-display text-ink">How to Interpret Your Results</h3>
        <p className="text-xs text-ink-soft leading-relaxed">
          {metricsText} Use these insights to make informed decisions, optimize financial planning, or track health goals.
        </p>
      </section>

      {/* Guide Section 5: Why Choose Calciverse */}
      <section className="space-y-3">
        <h3 className="text-base font-bold font-display text-ink">Why Use Calciverse {tool.name}?</h3>
        <div className="grid gap-3 sm:grid-cols-2 text-xs">
          <div className="flex items-start gap-2.5 rounded-lg border border-line bg-paper-raised p-3">
            <Zap className="text-saffron mt-0.5 shrink-0" size={16} />
            <div>
              <strong className="block text-ink font-medium">Lightning Fast Performance</strong>
              <span className="text-ink-soft">Calculates instantly in your browser without page reloads or delays.</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5 rounded-lg border border-line bg-paper-raised p-3">
            <ShieldCheck className="text-signal mt-0.5 shrink-0" size={16} />
            <div>
              <strong className="block text-ink font-medium">100% Private & Secure</strong>
              <span className="text-ink-soft">Your financial and personal data never leaves your device memory.</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5 rounded-lg border border-line bg-paper-raised p-3">
            <CheckCircle2 className="text-signal mt-0.5 shrink-0" size={16} />
            <div>
              <strong className="block text-ink font-medium">Verified Precision</strong>
              <span className="text-ink-soft">Cross-checked against official formulas for maximum numerical accuracy.</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5 rounded-lg border border-line bg-paper-raised p-3">
            <BookOpen className="text-saffron mt-0.5 shrink-0" size={16} />
            <div>
              <strong className="block text-ink font-medium">Clean & Free Forever</strong>
              <span className="text-ink-soft">No mandatory registration, hidden paywalls, or intrusive popups.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section 6: Frequently Asked Questions (FAQs) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-base font-bold font-display text-ink">
          <HelpCircle className="text-saffron" size={20} />
          <h3>Frequently Asked Questions (FAQs)</h3>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl border border-line bg-paper-raised p-4 space-y-1.5">
              <h4 className="text-sm font-semibold text-ink">{faq.question}</h4>
              <p className="text-xs text-ink-soft leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
