import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import ToolCard from '../components/ToolCard.jsx'
import CategoryIcon from '../components/CategoryIcon.jsx'
import AdSlot from '../components/AdSlot.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import { categoryBySlug } from '../data/categories.js'
import { toolsByCategory } from '../data/tools.js'
import { articlesByCategory } from '../data/articles.js'

export default function CategoryPage() {
  const { slug } = useParams()
  const category = categoryBySlug(slug)
  const toolList = toolsByCategory(slug)
  const articleList = articlesByCategory(slug)

  if (!category) return <NotFoundPage />

  return (
    <>
      <SEO title={category.name} description={`${category.name} tools: ${category.tagline}`} path={`/category/${category.slug}`} />
      <div className="mx-auto max-w-6xl px-5 py-10">
        <nav className="text-xs text-ink-soft/60"><Link to="/" className="hover:text-saffron">Home</Link> / {category.name}</nav>
        <div className="mt-3 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-soft text-signal">
            <CategoryIcon slug={category.slug} size={22} />
          </span>
          <div>
            <h1 className="font-display text-3xl font-bold text-ink">{category.name}</h1>
            <p className="text-sm text-ink-soft">{category.tagline}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {toolList.map((t) => <ToolCard key={t.slug} tool={t} />)}
        </div>

        {articleList.length > 0 && (
          <div className="mt-14">
            <h2 className="font-display text-xl font-semibold text-ink">Related articles</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {articleList.map((a) => (
                <Link key={a.slug} to={`/articles/${a.slug}`} className="rounded-xl border border-line bg-paper-raised p-4 hover:border-saffron transition-colors">
                  <div className="font-medium text-ink">{a.title}</div>
                  <p className="mt-1 text-sm text-ink-soft">{a.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <AdSlot slot="0000000002" className="mt-12" />
      </div>
    </>
  )
}
