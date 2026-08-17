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
      { question: 'Is the Calciverse EMI Calculator accurate for all Indian banks?', answer: 'Yes, our formula uses the standard mathematical reducing-balance model mandated by RBI and utilized by HDFC, SBI, ICICI, Axis Bank, and leading NBFCs.' }
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
      { question: 'What is a Systematic Investment Plan (SIP)?', answer: 'A SIP allows you to invest a fixed dollar or rupee amount regularly into mutual funds, dollar-cost averaging market volatility over time.' },
      { question: 'What rate of return should I assume for equity SIPs in India?', answer: 'Historically, broad Indian equity indices (Nifty 50, BSE Sensex) have delivered 12% to 14% CAGR over long 10+ year horizons.' },
      { question: 'Are mutual fund SIP returns guaranteed?', answer: 'No, mutual fund investments are subject to market risks. SIP projections are mathematical estimates based on your chosen expected annual return.' },
      { question: 'Can I step up my SIP amount every year?', answer: 'Yes, stepping up your SIP by 10% annually can boost your final retirement corpus by over 50% compared to a fixed SIP.' }
    ]
  },
  'gst-calculator': {
    formula: 'GST Amount = (Base Price × Rate) / 100 | Inclusive Base = Total Price / (1 + Rate / 100)',
    explanation: 'Calculates both tax addition (exclusive price) and tax extraction (inclusive price) at standard slab rates (5%, 12%, 18%, 28%).',
    example: {
      title: 'Worked Example: Extracting GST from Inclusive Price',
      inputs: 'Total Invoice Price = ₹5,900 | Applicable GST Slab Rate = 18%',
      steps: [
        'Base Price before GST = 5,900 / (1 + 0.18) = 5,900 / 1.18 = ₹5,000',
        'GST Amount = 5,900 - 5,000 = ₹900',
        'Intrastate Split: CGST (9%) = ₹450 | SGST (9%) = ₹450'
      ],
      summary: 'Pre-tax Base Price = ₹5,000 | CGST = ₹450 | SGST = ₹450 | Invoice Total = ₹5,900'
    },
    metricsText: 'Always check whether a quoted price is GST-inclusive or GST-exclusive to avoid miscalculating base product margins.',
    faqs: [
      { question: 'What is the difference between CGST, SGST, and IGST?', answer: 'CGST and SGST split tax equally for transactions within the same state. IGST applies fully to interstate transactions.' },
      { question: 'How do I extract GST from a bill total?', answer: 'To extract GST from an inclusive price, divide the total price by (1 + GST rate / 100). For 18% GST, divide the total by 1.18.' },
      { question: 'What are the current GST tax slabs in India?', answer: 'Goods and services in India are taxed under four primary slabs: 5% (essential goods), 12% (processed items), 18% (standard services), and 28% (luxury items).' }
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
        'Slab ₹3L - ₹7L: 5% of ₹4,00,000 = ₹20,00,000',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <div className="mt-12 space-y-10 print:hidden no-print text-ink border-t border-line pt-10">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

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
