import { Suspense } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import AdSlot from '../components/AdSlot.jsx'
import ToolCard from '../components/ToolCard.jsx'
import { toolBySlug, toolsByCategory } from '../data/tools.js'
import { categoryBySlug } from '../data/categories.js'

export default function ToolPage() {
  const { slug } = useParams()
  const tool = toolBySlug(slug)

  if (!tool || tool.status !== 'live') return <Navigate to="/" replace />

  const category = categoryBySlug(tool.category)
  const related = toolsByCategory(tool.category).filter((t) => t.slug !== tool.slug && t.status === 'live').slice(0, 3)
  const Component = tool.component

  return (
    <>
      <SEO title={tool.name} description={tool.description} path={`/tool/${tool.slug}`} />
      <div className="mx-auto max-w-4xl px-5 py-10">
        <nav className="text-xs text-ink-soft/60">
          <Link to="/" className="hover:text-saffron">Home</Link> / <Link to={`/category/${tool.category}`} className="hover:text-saffron">{category?.name}</Link> / {tool.name}
        </nav>
        <h1 className="mt-2 font-display text-3xl font-bold text-ink">{tool.name}</h1>
        <p className="mt-1.5 text-ink-soft">{tool.description}</p>

        <AdSlot slot="0000000003" className="my-6" />

        <div className="rounded-2xl border border-line bg-paper-raised p-5 sm:p-7">
          <Suspense fallback={<div className="py-10 text-center text-sm text-ink-soft/60">Loading tool…</div>}>
            <Component />
          </Suspense>
        </div>

        <AdSlot slot="0000000004" className="my-10" />

        {related.length > 0 && (
          <div className="mt-4">
            <h2 className="font-display text-lg font-semibold text-ink">Related tools</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {related.map((t) => <ToolCard key={t.slug} tool={t} />)}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
