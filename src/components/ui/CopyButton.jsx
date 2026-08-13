import { useState } from 'react'

export default function CopyButton({ getText, label = 'Copy' }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(getText())
          setCopied(true)
          setTimeout(() => setCopied(false), 1500)
        } catch {
          /* clipboard unavailable - silently ignore */
        }
      }}
      className="rounded-lg border border-line bg-paper-raised px-3 py-1.5 text-sm font-medium text-ink-soft hover:border-saffron hover:text-saffron transition-colors"
    >
      {copied ? 'Copied' : label}
    </button>
  )
}
