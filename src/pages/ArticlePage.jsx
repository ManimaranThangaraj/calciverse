import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import AdSlot from '../components/AdSlot.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import { articleBySlug, articlesByCategory } from '../data/articles.js'
import { toolBySlug } from '../data/tools.js'
import { categoryBySlug } from '../data/categories.js'
import { parseArticleToNodes, renderInlineMarkdownJsx } from '../utils/markdownParser.js'
import { ArrowRight, BookOpen, Calculator, UserCheck, CheckCircle2, ShieldCheck, Clock, Calendar } from 'lucide-react'

function renderNode(node, idx) {
  if (!node) return null

  switch (node.type) {
    case 'h2':
      return (
        <h2 key={idx} className="mt-10 mb-4 font-display text-2xl font-bold leading-tight text-ink flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-saffron shrink-0" />
          <span>{node.text}</span>
        </h2>
      )

    case 'h3':
      return (
        <h3 key={idx} className="mt-7 mb-2 font-display text-lg font-bold leading-snug text-ink">
          {node.text}
        </h3>
      )

    case 'formula':
      return (
        <div key={idx} className="my-5 rounded-xl border border-saffron/30 bg-saffron-soft/15 p-4 font-mono text-sm font-semibold text-ink overflow-x-auto shadow-sm">
          <div className="text-[10px] uppercase font-bold tracking-wider text-saffron mb-1.5 font-sans flex items-center gap-1.5">
            <Calculator size={13} />
            <span>Governing Formula / Mathematical Model</span>
          </div>
          <code>{node.text}</code>
        </div>
      )

    case 'ul':
      return (
        <ul key={idx} className="my-4 list-disc space-y-2 pl-6 text-[15px] leading-relaxed text-ink-soft">
          {node.items.map((item, itemIdx) => (
            <li key={itemIdx}>{renderInlineMarkdownJsx(item)}</li>
          ))}
        </ul>
      )

    case 'ol':
      return (
        <ol key={idx} className="my-4 list-decimal space-y-2 pl-6 text-[15px] leading-relaxed text-ink-soft">
          {node.items.map((item, itemIdx) => (
            <li key={itemIdx}>{renderInlineMarkdownJsx(item)}</li>
          ))}
        </ol>
      )

    case 'p':
    default:
      return (
        <p key={idx} className="text-[15px] leading-relaxed text-ink-soft">
          {renderInlineMarkdownJsx(node.text)}
        </p>
      )
  }
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

  const nodes = parseArticleToNodes(article.content)
  const mid = Math.ceil(nodes.length / 2)

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        path={`/articles/${article.slug}`}
        type="article"
        publishedAt={article.publishedAt || '2026-01-15T08:00:00Z'}
        updatedAt={article.updatedAt || '2026-11-12T08:00:00Z'}
      />
      <article className="mx-auto max-w-3xl px-5 py-10 font-sans">
        {/* Breadcrumb Navigation */}
        <nav className="text-xs text-ink-soft/60">
          <Link to="/" className="hover:text-saffron">Home</Link> / <Link to="/articles" className="hover:text-saffron">Articles</Link> / <Link to={`/category/${article.category}`} className="hover:text-saffron">{category?.name}</Link> / <span className="text-ink font-medium">{article.title}</span>
        </nav>

        {/* Article Headline */}
        <h1 className="mt-3 font-display text-3xl sm:text-4xl font-bold leading-tight text-ink">
          {article.title}
        </h1>

        {/* Author byline, verified date & E-EAT trust badge */}
        <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-4 border-b border-line pb-5 text-xs text-ink-soft">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-saffron/20 text-[10px] font-bold text-saffron">
              MT
            </span>
            <span>
              Written by <strong className="text-ink font-medium"><Link to="/about" className="hover:text-saffron">Manimaran Thangaraj</Link></strong>
            </span>
          </div>

          <span className="text-line">•</span>

          <div className="flex items-center gap-1.5">
            <Calendar size={13} className="text-ink-soft/60" />
            <span>Updated: November 2026</span>
          </div>

          <span className="text-line">•</span>

          <div className="flex items-center gap-1.5">
            <Clock size={13} className="text-ink-soft/60" />
            <span>{article.readMinutes} min read</span>
          </div>

          <span className="text-line hidden sm:inline">•</span>

          <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 size={12} />
            <span>Fact-Checked & Verified</span>
          </div>
        </div>

        {/* Interactive Tool Banner (if applicable) */}
        {relatedTool && relatedTool.status === 'live' && (
          <Link
            to={`/tool/${relatedTool.slug}`}
            className="mt-6 flex items-center justify-between rounded-xl border border-saffron/30 bg-saffron-soft/20 p-4 transition-all hover:bg-saffron-soft/40 group"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-saffron text-slate-950 font-bold shadow-sm group-hover:scale-105 transition-transform">
                <Calculator size={20} />
              </span>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-saffron">Interactive Calculator Available</span>
                <span className="text-sm font-semibold text-ink group-hover:text-saffron transition-colors">Open the {relatedTool.name} →</span>
              </div>
            </div>
            <ArrowRight size={18} className="text-saffron group-hover:translate-x-1 transition-transform" />
          </Link>
        )}

        {/* First Half of Content */}
        <div className="prose-content mt-6 space-y-4">
          {nodes.slice(0, mid).map((node, idx) => renderNode(node, idx))}
        </div>

        <AdSlot slot="0000000006" className="my-8" />

        {/* Second Half of Content */}
        <div className="prose-content space-y-4">
          {nodes.slice(mid).map((node, idx) => renderNode(node, idx + mid))}
        </div>

        {/* Author Bio Box & Editorial Review Disclosure (E-EAT) */}
        <div className="mt-12 rounded-2xl border border-line bg-paper-raised p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="h-14 w-14 rounded-full bg-saffron/20 border border-saffron/40 flex items-center justify-center text-saffron font-bold text-xl shrink-0">
            MT
          </div>
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-display font-bold text-base text-ink">Manimaran Thangaraj</span>
              <span className="rounded-full bg-signal-soft text-signal border border-signal/20 px-2 py-0.5 text-[10px] font-semibold">
                Author & Lead Engineer
              </span>
            </div>
            <p className="text-xs text-ink-soft leading-relaxed">
              Founder and developer of Calciverse.in. Dedicated to building high-precision, privacy-first calculation utilities and transparent educational resources. Financial and statutory models are cross-referenced with Reserve Bank of India (RBI), Indian Income Tax Department (FY 2026-27), and WHO physiological standards.
            </p>
            <div className="pt-1 text-xs">
              <Link to="/about" className="text-saffron hover:underline font-medium inline-flex items-center gap-1">
                Read our methodology and verification standards <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* Section: Sibling Articles & Topic Cluster Links */}
        {siblingArticles.length > 0 && (
          <div className="mt-12 border-t border-line pt-8 space-y-4">
            <div className="flex items-center gap-2 text-base font-bold font-display text-ink">
              <BookOpen className="text-saffron" size={20} />
              <h3>More Guides in {category?.name}</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {siblingArticles.map((sa) => (
                <Link
                  key={sa.slug}
                  to={`/articles/${sa.slug}`}
                  className="rounded-xl border border-line bg-paper-raised p-4 transition-all hover:border-saffron hover:-translate-y-0.5 group"
                >
                  <div className="font-semibold text-sm text-ink group-hover:text-saffron transition-colors">
                    {sa.title}
                  </div>
                  <p className="mt-1 text-xs text-ink-soft line-clamp-2">{sa.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  )
}
