import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { categories } from '../data/categories.js'

export default function Header() {
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

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur transition-colors">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Calciverse Logo" className="h-20 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-ink-soft md:flex">
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

