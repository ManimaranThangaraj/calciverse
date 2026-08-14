import { Link } from 'react-router-dom'
import { categories } from '../data/categories.js'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-paper-raised print:hidden no-print">
      <div className="mx-auto max-w-6xl px-5 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Link to="/" className="inline-block">
            <img src="/logo.png" alt="Calciverse Logo" className="h-20 w-auto object-contain" />
          </Link>
          <p className="mt-2 text-sm text-ink-soft">Free calculators, converters and generators, built for everyday use.</p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-ink-soft/70">Categories</div>
          <ul className="mt-3 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}><Link to={`/category/${c.slug}`} className="text-ink-soft hover:text-saffron">{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-ink-soft/70">Explore</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/articles" className="text-ink-soft hover:text-saffron">Articles</Link></li>
            <li><Link to="/about" className="text-ink-soft hover:text-saffron">About</Link></li>
            <li><Link to="/contact" className="text-ink-soft hover:text-saffron">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-ink-soft/70">Legal</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/privacy-policy" className="text-ink-soft hover:text-saffron">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-ink-soft hover:text-saffron">Terms of Use</Link></li>
            <li><Link to="/disclaimer" className="text-ink-soft hover:text-saffron">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line px-5 py-4 text-center text-xs text-ink-soft/60 space-y-1">
        <div>© {new Date().getFullYear()} Calciverse.in. Developed by Manimaran Thangaraj</div>
        <div className="text-[11px] opacity-75">Results are estimates for informational purposes only, not financial, medical or legal advice.</div>
      </div>
    </footer>
  )
}
