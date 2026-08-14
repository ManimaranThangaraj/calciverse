import { HelpCircle, CheckCircle2, BookOpen, Calculator, ShieldCheck, Zap } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

export default function ToolGuide({ tool, category }) {
  if (!tool) return null

  // Tool specific formula and explanations
  const getFormulaInfo = (slug, categorySlug) => {
    switch (slug) {
      case 'gst-calculator':
        return {
          formula: 'GST Amount = (Original Cost × GST Rate) / 100 | Net Price = Original Cost + GST Amount',
          explanation: 'For GST-inclusive prices: Net Base Price = Total Amount / (1 + (GST Rate / 100)).'
        }
      case 'emi-calculator':
        return {
          formula: 'E = P × r × (1 + r)^n / ((1 + r)^n - 1)',
          explanation: 'Where P = Principal loan amount, r = monthly interest rate, and n = total number of monthly installments.'
        }
      case 'sip-calculator':
        return {
          formula: 'M = P × ({[1 + i]^n - 1} / i) × (1 + i)',
          explanation: 'Where P = monthly investment, i = periodic rate of return, and n = total number of months.'
        }
      case 'income-tax-calculator':
        return {
          formula: 'Tax = (Taxable Income - Slab Threshold) × Slab Rate',
          explanation: 'Calculated using FY 2026-27 tax slabs for both New Tax Regime (Section 115BAC) and Old Tax Regime.'
        }
      case 'bmi-calculator':
        return {
          formula: 'BMI = Weight (kg) / [Height (m)]²',
          explanation: 'Evaluated against World Health Organization (WHO) adult body mass index categories.'
        }
      case 'percentage-calculator':
        return {
          formula: 'Percentage = (Part / Whole) × 100',
          explanation: 'Used for computing percentages, percentage changes, increases, and decreases.'
        }
      default:
        if (categorySlug === 'finance') {
          return {
            formula: 'Future Value / Payment = Principal × (1 + Rate / Frequency)^(Frequency × Time)',
            explanation: 'Uses compound interest and standard financial mathematical models.'
          }
        }
        if (categorySlug === 'health') {
          return {
            formula: 'Metric Standard = Input Metrics × Health Formula Coefficients',
            explanation: 'Calculated based on standard clinical and physiological equations.'
          }
        }
        return {
          formula: 'Output = Function(Input Parameters)',
          explanation: 'Computes instant accurate results using verified client-side algorithms.'
        }
    }
  }

  const formulaInfo = getFormulaInfo(tool.slug, tool.category)

  // Structured FAQ data
  const faqs = [
    {
      question: `How does the Calciverse ${tool.name} work?`,
      answer: `The Calciverse ${tool.name} processes your inputs instantly using standard mathematical formulas. All calculations run client-side in your browser for 100% data privacy and maximum speed.`
    },
    {
      question: `Is the ${tool.name} free to use?`,
      answer: `Yes! The ${tool.name} on Calciverse.in is 100% free with unlimited usage and no registration required.`
    },
    {
      question: `Can I save or export calculations from the ${tool.name}?`,
      answer: `Yes, you can easily copy summary results to your clipboard or print/save as PDF using our built-in export actions.`
    },
    {
      question: `Is my financial or personal data secure on Calciverse.in?`,
      answer: `Absolutely. Calciverse.in processes all calculations locally in your browser memory. We never store, transmit, or log your personal input data on external servers.`
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
          Whether you are planning financial budgets, computing taxes, measuring physical metrics, or streamlining daily tasks, this tool gives you instant, verified results with zero hassle.
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
          <h3>Formula & Methodology Used</h3>
        </div>
        <div className="rounded-lg bg-paper-raised p-3 border border-line font-mono text-xs text-ink font-semibold">
          {formulaInfo.formula}
        </div>
        <p className="text-xs text-ink-soft leading-relaxed">
          {formulaInfo.explanation} All calculations follow official regulatory, clinical, and standard mathematical frameworks.
        </p>
      </section>

      {/* Guide Section 3: Why Choose Calciverse */}
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

      {/* Guide Section 4: Frequently Asked Questions (FAQs) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-base font-bold font-display text-ink">
          <HelpCircle className="text-saffron" size={20} />
          <h3>Frequently Asked Questions</h3>
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
