import { HelpCircle, CheckCircle2, BookOpen, Calculator, ShieldCheck, Zap, ArrowRight, Lightbulb, ExternalLink, FileText, AlertTriangle, Briefcase, Link2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getGuideBySlug } from '../data/toolGuides.js'

export default function ToolGuide({ tool, category }) {
  if (!tool) return null

  // Retrieve explicit, unique guide object for this specific tool slug
  const guide = getGuideBySlug(tool.slug)
  if (!guide) return null

  const { overview, formula, explanation, example, metricsText, useCases, commonMistakes, faqs, sources, relatedLinks } = guide

  return (
    <div className="mt-12 border-t border-line pt-10 space-y-10">
      {/* Category Disclaimer Banner */}
      {tool.category === 'finance' && (
        <div className="rounded-xl border border-saffron/30 bg-saffron-soft/20 p-4 flex items-start gap-3 text-xs text-ink-soft">
          <AlertTriangle className="text-saffron shrink-0 mt-0.5" size={18} />
          <div>
            <strong className="block text-ink font-semibold mb-0.5">Educational Financial Disclaimer</strong>
            <span>
              This calculator provides mathematical estimates for educational and planning purposes only. Actual bank loan EMIs, interest rates, tax liabilities, or mutual fund returns may vary depending on institution processing fees, compounding schedules, or statutory updates. Consult a certified financial advisor or Chartered Accountant before making official commitments.
            </span>
          </div>
        </div>
      )}

      {tool.category === 'health' && (
        <div className="rounded-xl border border-signal/30 bg-signal/10 p-4 flex items-start gap-3 text-xs text-ink-soft">
          <ShieldCheck className="text-signal shrink-0 mt-0.5" size={18} />
          <div>
            <strong className="block text-ink font-semibold mb-0.5">Informational Medical Disclaimer</strong>
            <span>
              This health tool provides population-level physiological estimations based on standard clinical guidelines (such as WHO adult cutoffs and Mifflin-St Jeor formulas). Results are intended for general health tracking and do not substitute professional medical diagnosis, clinical evaluation, or advice from a licensed healthcare provider.
            </span>
          </div>
        </div>
      )}

      {/* Section 1: Detailed Tool Overview & Purpose */}
      <section className="space-y-3">
        <div className="flex items-center gap-2 text-xl font-bold font-display text-ink">
          <BookOpen className="text-saffron" size={24} />
          <h2>Understanding the {tool.name}</h2>
        </div>
        <p className="text-sm text-ink-soft leading-relaxed">
          {overview}
        </p>
      </section>

      {/* Section 2: Mathematical Formula & Methodology */}
      <section className="rounded-xl border border-line bg-paper p-6 space-y-3">
        <div className="flex items-center gap-2 text-base font-bold font-display text-ink">
          <Calculator className="text-signal" size={20} />
          <h3>Formula & Calculation Methodology</h3>
        </div>
        <div className="rounded-lg bg-paper-raised p-3.5 border border-line font-mono text-xs text-ink font-semibold overflow-x-auto">
          {formula}
        </div>
        <p className="text-xs text-ink-soft leading-relaxed">
          {explanation}
        </p>
      </section>

      {/* Section 3: Worked Real-World Example */}
      {example && (
        <section className="rounded-xl border border-line bg-paper-raised p-6 space-y-4">
          <div className="flex items-center gap-2 text-base font-bold font-display text-ink">
            <Lightbulb className="text-saffron" size={20} />
            <h3>{example.title}</h3>
          </div>
          <div className="text-xs font-medium text-ink-soft border-b border-line pb-2.5">
            <strong>Sample Parameters:</strong> {example.inputs}
          </div>
          <div className="space-y-2 pt-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink-soft">Calculation Breakdown</h4>
            {example.steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-ink leading-relaxed">
                <ArrowRight className="text-saffron shrink-0 mt-0.5" size={14} />
                <span>{step}</span>
              </div>
            ))}
          </div>
          <div className="rounded-lg bg-saffron-soft/30 p-3.5 border border-saffron/20 text-xs font-semibold text-ink">
            {example.summary}
          </div>
        </section>
      )}

      {/* Section 4: Practical Applications & Use Cases */}
      {useCases && useCases.length > 0 && (
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-base font-bold font-display text-ink">
            <Briefcase className="text-saffron" size={20} />
            <h3>Real-World Applications & Use Cases</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {useCases.map((uc, idx) => (
              <div key={idx} className="rounded-xl border border-line bg-paper-raised p-4 text-xs text-ink-soft leading-relaxed">
                {uc}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section 5: Common Mistakes to Avoid */}
      {commonMistakes && commonMistakes.length > 0 && (
        <section className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 space-y-3">
          <div className="flex items-center gap-2 text-base font-bold font-display text-amber-600 dark:text-amber-400">
            <AlertTriangle size={20} />
            <h3>Common Calculation Pitfalls to Avoid</h3>
          </div>
          <ul className="space-y-2 text-xs text-ink-soft">
            {commonMistakes.map((cm, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span>{cm}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Section 6: Results Analysis & Metrics Explanation */}
      <section className="space-y-3">
        <h3 className="text-base font-bold font-display text-ink">How to Interpret Your Results</h3>
        <p className="text-xs text-ink-soft leading-relaxed">
          {metricsText}
        </p>
      </section>

      {/* Section 7: Authoritative Sources & Regulatory References */}
      {sources && sources.length > 0 && (
        <section className="rounded-xl border border-line bg-paper p-5 space-y-3">
          <div className="flex items-center gap-2 text-base font-bold font-display text-ink">
            <FileText className="text-signal" size={20} />
            <h3>Authoritative Sources & Regulatory References</h3>
          </div>
          <p className="text-xs text-ink-soft">
            All equations, regulatory slabs, and clinical standards on Calciverse align strictly with verified guidelines from official authorities:
          </p>
          <ul className="space-y-2 pt-1 text-xs">
            {sources.map((src, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <ExternalLink size={14} className="text-saffron shrink-0" />
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-saffron underline hover:text-saffron/80"
                >
                  {src.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Section 8: Why Choose Calciverse */}
      <section className="space-y-3">
        <h3 className="text-base font-bold font-display text-ink">Why Use Calciverse {tool.name}?</h3>
        <div className="grid gap-3 sm:grid-cols-2 text-xs">
          <div className="flex items-start gap-2.5 rounded-lg border border-line bg-paper-raised p-3">
            <Zap className="text-saffron mt-0.5 shrink-0" size={16} />
            <div>
              <strong className="block text-ink font-medium">Lightning Fast Performance</strong>
              <span className="text-ink-soft">Calculates instantly in your browser without page reloads or server delays.</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5 rounded-lg border border-line bg-paper-raised p-3">
            <ShieldCheck className="text-signal mt-0.5 shrink-0" size={16} />
            <div>
              <strong className="block text-ink font-medium">100% Client-Side Privacy</strong>
              <span className="text-ink-soft">Your parameters never leave your local device memory.</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5 rounded-lg border border-line bg-paper-raised p-3">
            <CheckCircle2 className="text-signal mt-0.5 shrink-0" size={16} />
            <div>
              <strong className="block text-ink font-medium">Clear & Consistent Calculations</strong>
              <span className="text-ink-soft">Results are calculated directly in your browser using the formulas shown above.</span>
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

      {/* Section 9: Frequently Asked Questions (FAQs) */}
      {faqs && faqs.length > 0 && (
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
      )}

      {/* Section 10: Contextual Related Calculators & Guides */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="space-y-4 rounded-xl border border-line bg-paper p-6">
          <div className="flex items-center gap-2 text-base font-bold font-display text-ink">
            <Link2 className="text-saffron" size={20} />
            <h3>Related Calculators & Resources</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {relatedLinks.map((rl, idx) => (
              <Link
                key={idx}
                to={rl.path || `/tool/${rl.slug}`}
                className="group flex flex-col justify-between rounded-lg border border-line bg-paper-raised p-3.5 transition-colors hover:border-saffron/50 hover:bg-paper"
              >
                <span className="font-semibold text-sm text-saffron group-hover:underline flex items-center gap-1.5">
                  {rl.name}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
                <span className="text-xs text-ink-soft mt-1 leading-relaxed">{rl.note}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
