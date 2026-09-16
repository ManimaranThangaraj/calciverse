import { Suspense, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Share2, Printer, Check, Copy, Sparkles, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import AdSlot from '../components/AdSlot.jsx'
import ToolCard from '../components/ToolCard.jsx'
import ToolGuide from '../components/ToolGuide.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import { toolBySlug, toolsByCategory, tools } from '../data/tools.js'
import { categoryBySlug, categories } from '../data/categories.js'

export default function ToolPage() {
  const { slug } = useParams()
  const tool = toolBySlug(slug)
  const [copied, setCopied] = useState(false)

  if (!tool || tool.status !== 'live') return <NotFoundPage />

  const category = categoryBySlug(tool.category)
  const related = toolsByCategory(tool.category).filter((t) => t.slug !== tool.slug && t.status === 'live').slice(0, 6)
  const popularTools = tools.filter((t) => t.status === 'live' && t.slug !== tool.slug && t.category !== tool.category).slice(0, 6)
  const Component = tool.component

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleWhatsAppShare = () => {
    if (typeof window !== 'undefined') {
      const text = `Check out the free ${tool.name} on Calciverse:\n${window.location.href}`
      const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <>
      <SEO title={tool.name} description={tool.description} path={`/tool/${tool.slug}`} kind={tool.kind} />
      <div className="mx-auto max-w-4xl px-5 py-10">
        <div className="print:hidden no-print">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <nav className="text-xs text-ink-soft/70">
              <Link to="/" className="hover:text-saffron">Home</Link> / <Link to={`/category/${tool.category}`} className="hover:text-saffron">{category?.name}</Link> / <span className="text-ink font-medium">{tool.name}</span>
            </nav>

            {/* Quick Action Toolbar */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleWhatsAppShare}
                className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-all"
                title="Share Calculator on WhatsApp"
              >
                <Share2 size={14} />
                <span>Share on WhatsApp</span>
              </button>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-paper-raised px-3 py-1.5 text-xs font-medium text-ink-soft hover:border-saffron hover:text-saffron transition-all"
                title="Copy Direct URL Link"
              >
                {copied ? <Check size={14} className="text-signal" /> : <Copy size={14} />}
                <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>

          <h1 className="mt-3 font-display text-3xl font-bold text-ink">{tool.name}</h1>
          <p className="mt-1.5 text-ink-soft">{tool.description}</p>
        </div>

        <AdSlot slot="0000000003" className="my-6 print:hidden no-print" />

        <div className="rounded-2xl border border-line bg-paper-raised p-5 sm:p-7 printable-invoice-wrapper shadow-sm">
          <Suspense fallback={<div className="py-10 text-center text-sm text-ink-soft/60">Loading tool…</div>}>
            <Component />
          </Suspense>
        </div>

        <AdSlot slot="0000000004" className="my-10 print:hidden no-print" />

        {/* Detailed SEO Guide & FAQ Section below calculator */}
        <ToolGuide tool={tool} category={category} />

        {/* Related Category Tools */}
        {related.length > 0 && (
          <div className="mt-12 border-t border-line pt-8 print:hidden no-print space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold text-ink">
                More {category?.name || ''} Calculators
              </h2>
              <Link to={`/category/${tool.category}`} className="text-xs font-semibold text-saffron hover:underline inline-flex items-center gap-1">
                View All <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((t) => <ToolCard key={t.slug} tool={t} />)}
            </div>
          </div>
        )}

        {/* Popular Tools across categories */}
        {popularTools.length > 0 && (
          <div className="mt-10 border-t border-line/60 pt-8 print:hidden no-print space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold text-ink flex items-center gap-2">
                <Sparkles size={18} className="text-saffron" />
                Popular Calculators across Calciverse
              </h2>
              <Link to="/" className="text-xs font-semibold text-saffron hover:underline inline-flex items-center gap-1">
                Explore All {tools.length}+ Tools <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {popularTools.map((t) => <ToolCard key={t.slug} tool={t} />)}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

