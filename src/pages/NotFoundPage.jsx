import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404 — Page Not Found | Calciverse.in" description="The page you are looking for does not exist or has been moved." noindex={true} />
      <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 py-16 text-center">
        <div className="rounded-full bg-signal-soft p-4 text-signal">
          <span className="font-display text-5xl font-black">404</span>
        </div>
        <h1 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">Page Not Found</h1>
        <p className="mt-3 max-w-md text-base text-ink-soft">
          The page you were looking for doesn't exist, was removed, or had its name changed.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="rounded-xl bg-saffron px-6 py-3 text-sm font-semibold text-paper shadow-sm hover:brightness-105 transition-all"
          >
            Back to Home
          </Link>
          <Link
            to="/articles"
            className="rounded-xl border border-line bg-paper-raised px-6 py-3 text-sm font-semibold text-ink hover:border-saffron transition-all"
          >
            Browse Articles
          </Link>
        </div>

        <div className="mt-12 border-t border-line pt-8 w-full">
          <p className="text-xs text-ink-soft/60">Popular Categories</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs">
            <Link to="/category/finance" className="rounded-lg bg-paper-raised border border-line px-3 py-1.5 text-ink-soft hover:text-saffron">Finance</Link>
            <Link to="/category/health" className="rounded-lg bg-paper-raised border border-line px-3 py-1.5 text-ink-soft hover:text-saffron">Health</Link>
            <Link to="/category/education" className="rounded-lg bg-paper-raised border border-line px-3 py-1.5 text-ink-soft hover:text-saffron">Education</Link>
            <Link to="/category/everyday" className="rounded-lg bg-paper-raised border border-line px-3 py-1.5 text-ink-soft hover:text-saffron">Everyday</Link>
            <Link to="/category/developer" className="rounded-lg bg-paper-raised border border-line px-3 py-1.5 text-ink-soft hover:text-saffron">Developer</Link>
          </div>
        </div>
      </div>
    </>
  )
}
