import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X, Calculator, ArrowRight, Zap } from 'lucide-react'
import { tools } from '../data/tools.js'
import { categories } from '../data/categories.js'

export default function QuickSearch({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const liveTools = tools.filter((t) => t.status === 'live')

  const filteredTools = query.trim()
    ? liveTools.filter((t) => {
        const q = query.toLowerCase().trim()
        return (
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          (t.keywords && t.keywords.some((k) => k.toLowerCase().includes(q))) ||
          t.category.toLowerCase().includes(q)
        )
      }).slice(0, 8)
    : liveTools.slice(0, 6)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setQuery('')
      setSelectedIndex(0)
    }
  }, [isOpen])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const handleSelect = (tool) => {
    onClose()
    navigate(`/tool/${tool.slug}`)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredTools.length))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + filteredTools.length) % Math.max(1, filteredTools.length))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (filteredTools[selectedIndex]) {
        handleSelect(filteredTools[selectedIndex])
      }
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div
        className="w-full max-w-2xl rounded-2xl border border-line bg-paper shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-line px-4 py-3.5 bg-paper-raised/50">
          <Search className="text-saffron shrink-0 mr-3" size={20} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Search ${liveTools.length}+ free calculators (e.g., EMI, GST, BMI, CGPA, Tax)...`}
            className="w-full bg-transparent text-sm sm:text-base font-medium text-ink outline-none placeholder:text-ink-soft/60"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-ink-soft hover:text-ink transition-colors mr-1"
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={onClose}
            className="rounded-lg border border-line bg-paper px-2 py-1 text-xs text-ink-soft hover:text-ink transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-line/40">
          {filteredTools.length > 0 ? (
            filteredTools.map((t, idx) => {
              const categoryObj = categories.find((c) => c.slug === t.category)
              const isSelected = idx === selectedIndex
              return (
                <div
                  key={t.slug}
                  onClick={() => handleSelect(t)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-saffron/10 border border-saffron/30 text-ink'
                      : 'hover:bg-paper-raised text-ink-soft hover:text-ink'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-3">
                    <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-saffron text-paper' : 'bg-paper-raised text-saffron'}`}>
                      <Calculator size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-ink truncate">{t.name}</span>
                        {categoryObj && (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-paper-raised border border-line text-ink-soft">
                            {categoryObj.name}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-ink-soft/80 truncate mt-0.5">{t.description}</p>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className={`shrink-0 transition-transform ${isSelected ? 'text-saffron translate-x-1' : 'opacity-0'}`}
                  />
                </div>
              )
            })
          ) : (
            <div className="py-10 text-center text-sm text-ink-soft">
              <Zap className="mx-auto mb-2 text-saffron" size={24} />
              No calculators found matching &ldquo;<strong className="text-ink">{query}</strong>&rdquo;.
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-line bg-paper-raised/80 px-4 py-2.5 text-[11px] text-ink-soft">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1.5 py-0.5 rounded bg-paper border border-line font-mono text-[10px]">↑↓</kbd> Navigate</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-paper border border-line font-mono text-[10px]">↵</kbd> Select</span>
          </div>
          <span><strong>{liveTools.length}+</strong> Privacy-First Free Tools</span>
        </div>
      </div>
    </div>
  )
}
