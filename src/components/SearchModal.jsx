import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, X, Calculator, BookOpen, ArrowRight } from 'lucide-react'
import { tools } from '../data/tools.js'
import { articles } from '../data/articles.js'

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery('')
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) onClose()
        else {
          // Trigger open handled by parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const trimmed = query.trim().toLowerCase()

  const matchingTools = trimmed
    ? tools
        .filter(
          (t) =>
            t.status === 'live' &&
            (t.name.toLowerCase().includes(trimmed) ||
              t.description.toLowerCase().includes(trimmed) ||
              t.category.toLowerCase().includes(trimmed) ||
              t.slug.toLowerCase().includes(trimmed))
        )
        .slice(0, 6)
    : tools.filter((t) => t.status === 'live').slice(0, 4)

  const matchingArticles = trimmed
    ? articles
        .filter(
          (a) =>
            a.status === 'live' &&
            (a.title.toLowerCase().includes(trimmed) ||
              a.excerpt.toLowerCase().includes(trimmed) ||
              a.category.toLowerCase().includes(trimmed))
        )
        .slice(0, 4)
    : articles.filter((a) => a.status === 'live').slice(0, 3)

  const handleSelect = (path) => {
    onClose()
    navigate(path)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-950/60 backdrop-blur-sm print:hidden no-print">
      <div className="w-full max-w-2xl rounded-2xl border border-line bg-paper-raised shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-line px-4 py-3">
          <Search className="text-ink-soft shrink-0" size={20} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search 120+ calculators, tools, and guides... (e.g. EMI, GST, BMI, Salary)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent px-3 py-1 text-base text-ink placeholder:text-ink-soft/60 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-ink-soft hover:text-ink rounded-lg transition-colors mr-1"
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={onClose}
            className="rounded-lg bg-paper border border-line px-2 py-1 text-xs font-semibold text-ink-soft hover:text-ink"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          {/* Tools Section */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-ink-soft mb-2.5">
              <span className="flex items-center gap-1.5">
                <Calculator size={14} className="text-saffron" />
                {trimmed ? 'Matching Calculators & Tools' : 'Popular Calculators'}
              </span>
              <span className="text-[11px] font-normal text-ink-soft/60">{matchingTools.length} tools</span>
            </div>

            {matchingTools.length === 0 ? (
              <p className="text-xs text-ink-soft italic py-2">No matching tools found for "{query}".</p>
            ) : (
              <div className="grid gap-2 sm:grid-cols-2">
                {matchingTools.map((t) => (
                  <button
                    key={t.slug}
                    onClick={() => handleSelect(`/tool/${t.slug}`)}
                    className="flex items-start justify-between text-left rounded-xl border border-line bg-paper p-3 hover:border-saffron hover:bg-paper-raised transition-all group"
                  >
                    <div>
                      <div className="font-semibold text-xs text-ink group-hover:text-saffron transition-colors">
                        {t.name}
                      </div>
                      <div className="text-[11px] text-ink-soft line-clamp-1 mt-0.5">{t.description}</div>
                    </div>
                    <ArrowRight size={14} className="text-ink-soft/40 group-hover:text-saffron shrink-0 mt-0.5 ml-2 transition-transform group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Articles Section */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-ink-soft mb-2.5">
              <span className="flex items-center gap-1.5">
                <BookOpen size={14} className="text-signal" />
                {trimmed ? 'Matching Articles & Guides' : 'Featured Guides'}
              </span>
              <span className="text-[11px] font-normal text-ink-soft/60">{matchingArticles.length} guides</span>
            </div>

            {matchingArticles.length === 0 ? (
              <p className="text-xs text-ink-soft italic py-2">No matching articles found for "{query}".</p>
            ) : (
              <div className="space-y-2">
                {matchingArticles.map((a) => (
                  <button
                    key={a.slug}
                    onClick={() => handleSelect(`/articles/${a.slug}`)}
                    className="w-full flex items-center justify-between text-left rounded-xl border border-line bg-paper p-3 hover:border-saffron hover:bg-paper-raised transition-all group"
                  >
                    <div>
                      <div className="font-semibold text-xs text-ink group-hover:text-saffron transition-colors">
                        {a.title}
                      </div>
                      <div className="text-[11px] text-ink-soft line-clamp-1 mt-0.5">{a.excerpt}</div>
                    </div>
                    <ArrowRight size={14} className="text-ink-soft/40 group-hover:text-saffron shrink-0 ml-2 transition-transform group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-line bg-paper px-4 py-2.5 flex items-center justify-between text-[11px] text-ink-soft/70">
          <span>Tip: Press <kbd className="rounded border border-line bg-paper-raised px-1 py-0.5 font-mono text-[10px]">Ctrl</kbd> + <kbd className="rounded border border-line bg-paper-raised px-1 py-0.5 font-mono text-[10px]">K</kbd> anywhere to search</span>
          <span>100% Client-Side Search</span>
        </div>
      </div>
    </div>
  )
}
