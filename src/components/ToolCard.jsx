import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock } from 'lucide-react'

export default function ToolCard({ tool }) {
  if (tool.status !== 'live') {
    return (
      <div className="rounded-xl border border-dashed border-line bg-paper-raised/50 p-4 opacity-70">
        <div className="flex items-center gap-1.5 text-xs font-medium text-ink-soft/60">
          <Clock size={13} /> Coming soon
        </div>
        <div className="mt-1.5 font-display font-semibold text-ink-soft">{tool.name}</div>
        <p className="mt-1 text-sm text-ink-soft/70">{tool.description}</p>
      </div>
    )
  }

  return (
    <Link
      to={`/tool/${tool.slug}`}
      className="group rounded-xl border border-line bg-paper-raised p-4 transition-all hover:-translate-y-0.5 hover:border-saffron hover:shadow-[0_4px_0_0_theme(colors.saffron)]"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="font-display font-semibold text-ink">{tool.name}</div>
        <ArrowUpRight size={16} className="mt-0.5 shrink-0 text-ink-soft/40 group-hover:text-saffron transition-colors" />
      </div>
      <p className="mt-1.5 text-sm text-ink-soft">{tool.description}</p>
    </Link>
  )
}
