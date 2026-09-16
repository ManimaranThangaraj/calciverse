import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sun, Moon, Search } from 'lucide-react'
import { categories } from '../data/categories.js'
import { tools } from '../data/tools.js'

export default function Header({ onOpenSearch }) {
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark')
    }
    return false
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('calciverse_theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('calciverse_theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  const liveToolsCount = tools.filter(t => t.status === 'live').length

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur transition-colors print:hidden no-print">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-2">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src="/logo.png" alt="Calciverse Logo" className="h-12 sm:h-14 w-auto object-contain" />
          </Link>

          {/* Quick Search Button in Header */}
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="hidden lg:flex items-center gap-2 rounded-full border border-line bg-paper-raised px-3.5 py-1.5 text-xs text-ink-soft hover:border-saffron hover:text-ink transition-colors shadow-sm"
              title="Search calculators (Ctrl+K)"
            >
              <Search size={14} className="text-saffron shrink-0" />
              <span>Search {liveToolsCount}+ tools...</span>
              <kbd className="ml-1 rounded border border-line bg-paper px-1.5 py-0.5 font-mono text-[10px] text-ink-soft/80">Ctrl K</kbd>
            </button>
          )}
        </div>

        <nav className="hidden items-center gap-3 lg:gap-5 text-xs lg:text-sm font-medium text-ink-soft md:flex">
          <NavLink to="/" className={({ isActive }) => `hover:text-saffron transition-colors ${isActive ? 'text-saffron font-semibold' : ''}`}>
            All Tools
          </NavLink>
          {categories.map((c) => (
            <NavLink
              key={c.slug}
              to={`/category/${c.slug}`}
              className={({ isActive }) => `hover:text-saffron transition-colors whitespace-nowrap ${isActive ? 'text-saffron font-semibold' : ''}`}
            >
              {c.name}
            </NavLink>
          ))}
          <NavLink to="/articles" className={({ isActive }) => `hover:text-saffron transition-colors ${isActive ? 'text-saffron font-semibold' : ''}`}>
            Articles
          </NavLink>

          <button
            onClick={toggleTheme}
            className="flex items-center justify-center rounded-lg border border-line bg-paper-raised p-2 text-ink-soft hover:border-saffron hover:text-saffron transition-colors ml-1"
            aria-label="Toggle Theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun size={18} className="text-saffron" /> : <Moon size={18} />}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="flex items-center justify-center rounded-lg border border-line bg-paper-raised p-2 text-ink-soft hover:border-saffron hover:text-saffron transition-colors"
              aria-label="Search"
            >
              <Search size={18} className="text-saffron" />
            </button>
          )}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center rounded-lg border border-line bg-paper-raised p-2 text-ink-soft hover:border-saffron hover:text-saffron transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} className="text-saffron" /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" className="p-2 text-ink">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-5 py-3 md:hidden">
          {onOpenSearch && (
            <button
              onClick={() => {
                setOpen(false)
                onOpenSearch()
              }}
              className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-saffron bg-saffron-soft/50 mb-1"
            >
              <Search size={16} />
              <span>Search {liveToolsCount}+ Calculators & Guides</span>
            </button>
          )}
          <Link to="/" onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 text-sm font-medium text-ink-soft hover:bg-paper-raised">
            All Tools
          </Link>
          {categories.map((c) => (
            <Link key={c.slug} to={`/category/${c.slug}`} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 text-sm font-medium text-ink-soft hover:bg-paper-raised">
              {c.name}
            </Link>
          ))}
          <Link to="/articles" onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 text-sm font-medium text-ink-soft hover:bg-paper-raised">
            Articles
          </Link>
        </nav>
      )}
    </header>
  )
}




