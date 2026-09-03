import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import AdSlot from '../components/AdSlot.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import { articleBySlug, articlesByCategory } from '../data/articles.js'
import { toolBySlug } from '../data/tools.js'
import { categoryBySlug } from '../data/categories.js'
import { ArrowRight, BookOpen, Calculator } from 'lucide-react'

function renderBlock(p, i) {
  if (typeof p !== 'string') return null
  if (p.startsWith('## ')) {
    return <h2 key={i} className="mt-8 font-display text-2xl font-bold leading-tight text-ink">{p.replace('## ', '')}</h2>
  }
  if (p.startsWith('### ')) {
    return <h3 key={i} className="mt-6 font-display text-xl font-semibold leading-tight text-ink">{p.replace('### ', '')}</h3>
  }
  if (p.startsWith('- ')) {
    const items = p.split('\n- ').map(item => item.replace(/^- /, ''))
    return (
      <ul key={i} className="my-4 list-disc space-y-2 pl-6 text-[15px] leading-relaxed text-ink-soft">
        {items.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    )
  }
  return <p key={i}>{p}</p>
}

export default function ArticlePage() {
  const { slug } = useParams()
  const article = articleBySlug(slug)
  if (!article || article.status !== 'live') return <NotFoundPage />

  const category = categoryBySlug(article.category)
  const relatedTool = article.relatedTool ? toolBySlug(article.relatedTool) : null
  const siblingArticles = articlesByCategory(article.category)
    .filter(a => a.slug !== article.slug && a.status === 'live')
    .slice(0, 4)

  const mid = Math.ceil(article.content.length / 2)

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        path={`/articles/${article.slug}`}
        type="article"
        publishedAt={article.publishedAt}
        updatedAt={article.updatedAt}
      />
      <article className="mx-auto max-w-2xl px-5 py-10">
        <nav className="text-xs text-ink-soft/60">
          <Link to="/articles" className="hover:text-saffron">Articles</Link> / <Link to={`/category/${article.category}`} className="hover:text-saffron">{category?.name}</Link> / {article.title}
        </nav>
        <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-ink">{article.title}</h1>
        <div className="mt-2 flex items-center gap-3 text-xs text-ink-soft/70">
          <span>{article.readMinutes} min read</span>
          <span>•</span>
          <Link to={`/category/${article.category}`} className="text-saffron font-medium hover:underline">
            {category?.name}
          </Link>
        </div>

        {relatedTool && relatedTool.status === 'live' && (
          <Link to={`/tool/${relatedTool.slug}`} className="mt-5 flex items-center justify-between rounded-xl border border-saffron/30 bg-saffron-soft/30 p-4 transition-all hover:bg-saffron-soft/50">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-saffron text-slate-950 font-bold">
                <Calculator size={20} />
              </span>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-saffron">Interactive Tool</span>
                <span className="text-sm font-semibold text-ink">Use the {relatedTool.name} →</span>
              </div>
            </div>
            <ArrowRight size={18} className="text-saffron" />
          </Link>
        )}

        <div className="prose-content mt-6 space-y-4 text-[15px] leading-relaxed text-ink-soft">
          {article.content.slice(0, mid).map((p, i) => renderBlock(p, i))}
        </div>

        <AdSlot slot="0000000006" className="my-8" />

        <div className="prose-content space-y-4 text-[15px] leading-relaxed text-ink-soft">
          {article.content.slice(mid).map((p, i) => renderBlock(p, i + mid))}
        </div>

        {/* Section: Sibling Articles & Topic Cluster Links */}
        {siblingArticles.length > 0 && (
          <div className="mt-14 border-t border-line pt-8 space-y-4">
            <div className="flex items-center gap-2 text-base font-bold font-display text-ink">
              <BookOpen className="text-saffron" size={20} />
              <h3>More Guides in {category?.name}</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {siblingArticles.map((sa) => (
                <Link
                  key={sa.slug}
                  to={`/articles/${sa.slug}`}
                  className="group rounded-lg border border-line bg-paper-raised p-3.5 transition-colors hover:border-saffron"
                >
                  <h4 className="font-semibold text-xs text-ink group-hover:text-saffron flex items-center justify-between">
                    {sa.title}
                    <ArrowRight size={14} className="text-ink-soft/40 group-hover:text-saffron transition-transform group-hover:translate-x-0.5 shrink-0 ml-1" />
                  </h4>
                  <p className="mt-1 text-[11px] text-ink-soft line-clamp-2">{sa.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  )
}
