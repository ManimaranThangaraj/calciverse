import { Link, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import AdSlot from '../components/AdSlot.jsx'
import { liveArticles } from '../data/articles.js'

const PER_PAGE = 10

export default function ArticlesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const totalPages = Math.max(1, Math.ceil(liveArticles.length / PER_PAGE))

  const rawPage = parseInt(searchParams.get('page') || '1', 10)
  const page = Number.isNaN(rawPage) ? 1 : Math.min(Math.max(1, rawPage), totalPages)

  const start = (page - 1) * PER_PAGE
  const pageArticles = liveArticles.slice(start, start + PER_PAGE)

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  const goToPage = (p) => {
    const clamped = Math.min(Math.max(1, p), totalPages)
    if (clamped === 1) {
      searchParams.delete('page')
    } else {
      searchParams.set('page', String(clamped))
    }
    setSearchParams(searchParams)
  }

  return (
    <>
      <SEO
        title={page > 1 ? `Articles — Page ${page}` : 'Articles'}
        description="Plain-English explainers behind every calculator on Calciverse."
        path={page > 1 ? `/articles?page=${page}` : '/articles'}
      />
      <div className="mx-auto max-w-4xl px-5 py-10">
        <h1 className="font-display text-3xl font-bold text-ink">Articles</h1>
        <p className="mt-1.5 text-ink-soft">The reasoning behind the numbers, not just the numbers.</p>
        <p className="mt-1 text-xs text-ink-soft/60">
          Showing {start + 1}–{Math.min(start + PER_PAGE, liveArticles.length)} of {liveArticles.length}
        </p>

        <div className="mt-8 space-y-4">
          {pageArticles.map((a) => (
            <Link key={a.slug} to={`/articles/${a.slug}`} className="block rounded-xl border border-line bg-paper-raised p-5 hover:border-saffron transition-colors">
              <div className="font-display text-lg font-semibold text-ink">{a.title}</div>
              <p className="mt-1.5 text-sm text-ink-soft">{a.excerpt}</p>
              <div className="mt-2 text-xs text-ink-soft/60">{a.readMinutes} min read</div>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="mt-10 flex items-center justify-between" aria-label="Articles pagination">
            <button
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              className="flex items-center gap-1 rounded-lg border border-line px-3 py-2 text-sm font-medium text-ink-soft hover:border-saffron hover:text-saffron disabled:opacity-40 disabled:hover:border-line disabled:hover:text-ink-soft transition-colors"
            >
              <ChevronLeft size={16} /> Prev
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => goToPage(p)}
                  aria-current={p === page ? 'page' : undefined}
                  className={`h-8 w-8 rounded-lg text-sm font-medium transition-colors ${
                    p === page
                      ? 'bg-slate-900 text-white dark:bg-saffron dark:text-slate-950'
                      : 'text-ink-soft hover:bg-paper-raised hover:text-saffron'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <button
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
              className="flex items-center gap-1 rounded-lg border border-line px-3 py-2 text-sm font-medium text-ink-soft hover:border-saffron hover:text-saffron disabled:opacity-40 disabled:hover:border-line disabled:hover:text-ink-soft transition-colors"
            >
              Next <ChevronRight size={16} />
            </button>
          </nav>
        )}

        <AdSlot slot="0000000005" className="mt-10" />
      </div>
    </>
  )
}