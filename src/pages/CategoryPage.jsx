import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import ToolCard from '../components/ToolCard.jsx'
import CategoryIcon from '../components/CategoryIcon.jsx'
import AdSlot from '../components/AdSlot.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import { categoryBySlug } from '../data/categories.js'
import { toolsByCategory } from '../data/tools.js'
import { articlesByCategory } from '../data/articles.js'
import { BookOpen, Calculator, ArrowRight } from 'lucide-react'

export default function CategoryPage() {
  const { slug } = useParams()
  const category = categoryBySlug(slug)
  const toolList = toolsByCategory(slug).filter(t => t.status === 'live')
  const articleList = articlesByCategory(slug).filter(a => a.status === 'live')

  if (!category) return <NotFoundPage />

  return (
    <>
      <SEO title={`${category.name} Calculators & Guides`} description={`Free online ${category.name.toLowerCase()} calculators, converters, and in-depth guides on Calciverse.`} path={`/category/${category.slug}`} />
      <div className="mx-auto max-w-6xl px-5 py-10">
        <nav className="text-xs text-ink-soft/60"><Link to="/" className="hover:text-saffron">Home</Link> / {category.name}</nav>
        
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-signal-soft text-signal">
              <CategoryIcon slug={category.slug} size={24} />
            </span>
            <div>
              <h1 className="font-display text-3xl font-bold text-ink">{category.name} Tools & Guides</h1>
              <p className="mt-0.5 text-sm text-ink-soft">{category.tagline}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold text-ink-soft">
            <span className="rounded-full bg-paper-raised border border-line px-3 py-1.5 flex items-center gap-1.5">
              <Calculator size={14} className="text-saffron" />
              {toolList.length} Tools
            </span>
            <span className="rounded-full bg-paper-raised border border-line px-3 py-1.5 flex items-center gap-1.5">
              <BookOpen size={14} className="text-signal" />
              {articleList.length} Articles
            </span>
          </div>
        </div>

        {/* Section 1: Tools Grid */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-2 text-lg font-bold font-display text-ink">
            <Calculator className="text-saffron" size={20} />
            <h2>Interactive {category.name} Calculators & Tools</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {toolList.map((t) => <ToolCard key={t.slug} tool={t} />)}
          </div>
        </div>

        <AdSlot slot="0000000002" className="my-10" />

        {/* Section 2: Educational Articles & Topic Guides */}
        {articleList.length > 0 && (
          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-2 text-lg font-bold font-display text-ink">
              <BookOpen className="text-signal" size={20} />
              <h2>{category.name} Guides & Articles</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {articleList.map((a) => (
                <Link
                  key={a.slug}
                  to={`/articles/${a.slug}`}
                  className="group flex flex-col justify-between rounded-xl border border-line bg-paper-raised p-5 transition-all hover:border-saffron hover:-translate-y-0.5"
                >
                  <div>
                    <h3 className="font-display font-semibold text-ink group-hover:text-saffron transition-colors flex items-center justify-between">
                      {a.title}
                      <ArrowRight size={16} className="text-ink-soft/40 group-hover:text-saffron transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
                    </h3>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed">{a.excerpt}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-3 text-xs text-ink-soft/70">
                    <span>{a.readMinutes} min read</span>
                    {a.relatedTool && <span className="text-saffron font-medium">• Interactive Tool Available</span>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
