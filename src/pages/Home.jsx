import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import LiveTicker from '../components/LiveTicker.jsx'
import CategoryIcon from '../components/CategoryIcon.jsx'
import ToolCard from '../components/ToolCard.jsx'
import AdSlot from '../components/AdSlot.jsx'
import { categories } from '../data/categories.js'
import { tools, liveTools, counts } from '../data/tools.js'
import { liveArticles } from '../data/articles.js'

const STATS = [
  { label: 'Calculators', live: tools.filter(t => t.kind === 'calculator' && t.status === 'live').length },
  { label: 'Converters', live: tools.filter(t => t.kind === 'converter' && t.status === 'live').length },
  { label: 'Generators', live: tools.filter(t => t.kind === 'generator' && t.status === 'live').length },
  { label: 'Articles', live: liveArticles.length },
]

export default function Home() {
  return (
    <>
      <SEO
        title={null}
        description="Free, fast calculators, converters and generators for finance, education, health, development and everyday life in India."
        path="/"
      />

      <section className="mx-auto max-w-6xl px-5 pt-12 pb-10 grid gap-10 md:grid-cols-2 md:items-center md:pt-16">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-saffron-soft px-3 py-1 text-xs font-semibold text-saffron">
            Calciverse
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-ink sm:text-5xl">
            One tool for the number you need <span className="text-saffron">right now.</span>
          </h1>
          <p className="mt-4 max-w-md text-base text-ink-soft">
            No sign-up, no clutter. Calculators, converters and generators for money, marks, health and code — plus articles that explain the number behind the number.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/category/finance" className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-saffron dark:text-slate-950 dark:hover:bg-saffron/90 transition-colors">
              Browse Finance tools
            </Link>
            <Link to="/articles" className="rounded-lg border border-line bg-paper-raised px-5 py-2.5 text-sm font-semibold text-ink hover:border-saffron transition-colors">
              Read the articles
            </Link>
          </div>
          <div className="mt-6 pt-4 border-t border-line/50">
            <div className="text-xs font-semibold text-ink-soft/80 uppercase tracking-wider mb-2">Popular Quick Calculators:</div>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link to="/tool/emi-calculator" className="rounded-full bg-paper-raised border border-line px-3 py-1 text-ink-soft hover:border-saffron hover:text-saffron transition-colors">Home Loan EMI</Link>
              <Link to="/tool/gst-calculator" className="rounded-full bg-paper-raised border border-line px-3 py-1 text-ink-soft hover:border-saffron hover:text-saffron transition-colors">GST Tax Calculator</Link>
              <Link to="/tool/income-tax-calculator" className="rounded-full bg-paper-raised border border-line px-3 py-1 text-ink-soft hover:border-saffron hover:text-saffron transition-colors">Income Tax FY 2026</Link>
              <Link to="/tool/case-converter" className="rounded-full bg-paper-raised border border-line px-3 py-1 text-ink-soft hover:border-saffron hover:text-saffron transition-colors">Text Case Converter</Link>
              <Link to="/tool/lcm-hcf-calculator" className="rounded-full bg-paper-raised border border-line px-3 py-1 text-ink-soft hover:border-saffron hover:text-saffron transition-colors">LCM & HCF Calculator</Link>
              <Link to="/tool/ideal-weight-calculator" className="rounded-full bg-paper-raised border border-line px-3 py-1 text-ink-soft hover:border-saffron hover:text-saffron transition-colors">Ideal Body Weight</Link>
              <Link to="/tool/cgpa-calculator" className="rounded-full bg-paper-raised border border-line px-3 py-1 text-ink-soft hover:border-saffron hover:text-saffron transition-colors">CGPA to % Converter</Link>
              <Link to="/tool/sip-calculator" className="rounded-full bg-paper-raised border border-line px-3 py-1 text-ink-soft hover:border-saffron hover:text-saffron transition-colors">SIP Return Calculator</Link>
            </div>
          </div>
        </div>
        <LiveTicker />
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-3 rounded-2xl border border-line bg-paper-raised p-5 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-mono tabular-num text-2xl font-bold text-ink">{s.live}</div>
              <div className="text-xs text-ink-soft/70">active & verified</div>
              <div className="mt-1 text-sm font-semibold text-saffron">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="font-display text-2xl font-semibold text-ink">Browse by category</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={`/category/${c.slug}`}
              className="group rounded-xl border border-line bg-paper-raised p-5 transition-all hover:-translate-y-0.5 hover:border-saffron"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-signal-soft text-signal group-hover:bg-saffron-soft group-hover:text-saffron transition-colors">
                <CategoryIcon slug={c.slug} />
              </span>
              <div className="mt-3 font-display font-semibold text-ink">{c.name}</div>
              <p className="mt-1 text-sm text-ink-soft">{c.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <AdSlot slot="0000000001" className="mx-auto max-w-6xl px-5" />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl font-semibold text-ink">Popular Calculators & Text Tools</h2>
          <Link to="/category/everyday" className="text-xs font-semibold text-saffron hover:underline">View All →</Link>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {['case-converter', 'lcm-hcf-calculator', 'tip-calculator', 'emi-calculator', 'gst-calculator', 'income-tax-calculator', 'sip-calculator', 'bmi-calculator', 'age-calculator']
            .map((slug) => tools.find((t) => t.slug === slug && t.status === 'live'))
            .filter(Boolean)
            .map((t) => (
              <ToolCard key={t.slug} tool={t} />
            ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="font-display text-2xl font-semibold text-ink">From the blog</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {liveArticles.slice(0, 4).map((a) => (
            <Link key={a.slug} to={`/articles/${a.slug}`} className="rounded-xl border border-line bg-paper-raised p-5 hover:border-saffron transition-colors">
              <div className="font-display font-semibold text-ink">{a.title}</div>
              <p className="mt-1.5 text-sm text-ink-soft">{a.excerpt}</p>
              <div className="mt-2 text-xs text-ink-soft/60">{a.readMinutes} min read</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
