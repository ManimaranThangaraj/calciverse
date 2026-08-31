import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import AdSlot from '../components/AdSlot.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import { articleBySlug } from '../data/articles.js'
import { toolBySlug } from '../data/tools.js'

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

  const relatedTool = article.relatedTool ? toolBySlug(article.relatedTool) : null
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
        <nav className="text-xs text-ink-soft/60"><Link to="/articles" className="hover:text-saffron">Articles</Link> / {article.title}</nav>
        <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-ink">{article.title}</h1>
        <div className="mt-2 text-sm text-ink-soft/70">{article.readMinutes} min read</div>

        {relatedTool && relatedTool.status === 'live' && (
          <Link to={`/tool/${relatedTool.slug}`} className="mt-5 inline-block rounded-lg bg-saffron-soft px-4 py-2 text-sm font-semibold text-saffron hover:brightness-95 transition">
            Try the {relatedTool.name} →
          </Link>
        )}

        <div className="prose-content mt-6 space-y-4 text-[15px] leading-relaxed text-ink-soft">
          {article.content.slice(0, mid).map((p, i) => renderBlock(p, i))}
        </div>

        <AdSlot slot="0000000006" className="my-8" />

        <div className="prose-content space-y-4 text-[15px] leading-relaxed text-ink-soft">
          {article.content.slice(mid).map((p, i) => renderBlock(p, i + mid))}
        </div>
      </article>
    </>
  )
}
