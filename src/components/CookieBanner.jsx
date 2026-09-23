import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Cookie, X } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accepted = localStorage.getItem('calciverse_cookie_accepted')
      if (!accepted) {
        // Show after 1 second delay for smooth appearance
        const timer = setTimeout(() => setVisible(true), 1000)
        return () => clearTimeout(timer)
      }
    }
  }, [])

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('calciverse_cookie_accepted', 'true')
      setVisible(false)
    }
  }

  if (!visible) return null

  return (
    <aside aria-label="Cookie and Privacy Consent Banner" className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-2xl rounded-2xl border border-line bg-paper/95 p-4 shadow-xl backdrop-blur-md print:hidden no-print">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-start gap-2.5">
          <Cookie className="h-5 w-5 shrink-0 text-saffron mt-0.5" />
          <p className="text-ink-soft leading-relaxed">
            We use cookies & local storage to remember your preferences, deliver secure client-side tools, and serve non-intrusive ads. Read our{' '}
            <Link to="/privacy-policy" className="text-saffron font-semibold underline hover:opacity-80">
              Privacy Policy
            </Link>.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
          <button
            onClick={handleAccept}
            className="rounded-lg bg-saffron px-4 py-1.5 font-bold text-slate-950 hover:bg-saffron/90 transition-all text-xs"
          >
            Accept & Continue
          </button>
          <button
            onClick={() => setVisible(false)}
            className="p-1 text-ink-soft/70 hover:text-ink transition-colors"
            aria-label="Dismiss cookie notice"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </aside>
  )
}
