import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sun, Moon, Search } from 'lucide-react'
import { categories } from '../data/categories.js'
import QuickSearch from './QuickSearch.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur transition-colors print:hidden no-print">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-1">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Calciverse Logo" className="h-14 sm:h-16 w-auto object-contain" />
          </Link>

          <nav className="hidden items-center gap-5 text-sm font-medium text-ink-soft md:flex">
            <NavLink to="/" className={({ isActive }) => `hover:text-saffron transition-colors ${isActive ? 'text-saffron font-semibold' : ''}`}>
              All Tools
            </NavLink>
            {categories.map((c) => (
              <NavLink
                key={c.slug}
                to={`/category/${c.slug}`}
                className={({ isActive }) => `hover:text-saffron transition-colors ${isActive ? 'text-saffron font-semibold' : ''}`}
              >
                {c.name}
              </NavLink>
            ))}
            <NavLink to="/articles" className={({ isActive }) => `hover:text-saffron transition-colors ${isActive ? 'text-saffron font-semibold' : ''}`}>
              Articles
            </NavLink>

            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 rounded-lg border border-line bg-paper-raised px-3 py-1.5 text-xs text-ink-soft hover:border-saffron hover:text-saffron transition-colors"
              title="Search Calculators (Ctrl+K)"
            >
              <Search size={14} className="text-saffron" />
              <span>Search...</span>
              <kbd className="hidden lg:inline-block px-1 py-0.5 rounded bg-paper border border-line text-[10px] font-mono">⌘K</kbd>
            </button>

            <button
              onClick={toggleTheme}
              className="flex items-center justify-center rounded-lg border border-line bg-paper-raised p-2 text-ink-soft hover:border-saffron hover:text-saffron transition-colors"
              aria-label="Toggle Theme"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun size={18} className="text-saffron" /> : <Moon size={18} />}
            </button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center justify-center rounded-lg border border-line bg-paper-raised p-2 text-ink-soft hover:border-saffron hover:text-saffron transition-colors"
              aria-label="Search"
              title="Search Tools"
            >
              <Search size={18} className="text-saffron" />
            </button>
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

      <QuickSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}



