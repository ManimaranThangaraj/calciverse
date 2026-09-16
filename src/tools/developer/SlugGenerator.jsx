import { useState, useId } from 'react'

export default function SlugGenerator() {
  const [inputText, setInputText] = useState('Free Online Calculators & Financial Tools 2026!')
  const [separator, setSeparator] = useState('-')
  const [lowercase, setLowercase] = useState(true)
  const [removeSpecial, setRemoveSpecial] = useState(true)
  const [copied, setCopied] = useState(false)

  const textId = useId()
  const sepId = useId()

  const generateSlug = () => {
    let str = inputText.trim()
    if (lowercase) str = str.toLowerCase()
    if (removeSpecial) {
      str = str.replace(/[^\w\s-]/g, '')
    }
    str = str.replace(/[\s_]+/g, separator)
    if (separator === '-') {
      str = str.replace(/-+/g, '-')
    }
    return str.replace(new RegExp(`^\\${separator}+|\\${separator}+$`, 'g'), '')
  }

  const slug = generateSlug()

  const handleCopy = () => {
    navigator.clipboard.writeText(slug)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor={textId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
          Enter String / Title to Convert
        </label>
        <input
          id={textId}
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="e.g. How to Calculate Home Loan EMI Easily!"
          className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
        />
      </div>

      <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-ink">
        <div>
          <label htmlFor={sepId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1">
            Separator
          </label>
          <select
            id={sepId}
            value={separator}
            onChange={(e) => setSeparator(e.target.value)}
            className="rounded-lg border border-line bg-paper px-3 py-1.5 text-xs text-ink outline-none"
          >
            <option value="-">Hyphen (-)</option>
            <option value="_">Underscore (_)</option>
            <option value=".">Dot (.)</option>
          </select>
        </div>

        <label className="flex items-center gap-2 cursor-pointer mt-4">
          <input
            type="checkbox"
            checked={lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
            className="rounded border-line text-saffron focus:ring-saffron"
          />
          <span>Force Lowercase</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer mt-4">
          <input
            type="checkbox"
            checked={removeSpecial}
            onChange={(e) => setRemoveSpecial(e.target.checked)}
            className="rounded border-line text-saffron focus:ring-saffron"
          />
          <span>Strip Special Symbols</span>
        </label>
      </div>

      <div className="rounded-2xl border border-line bg-paper p-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-ink-soft">Generated URL Slug</span>
          <button
            onClick={handleCopy}
            className="rounded-lg bg-saffron px-3 py-1.5 text-xs font-semibold text-paper hover:bg-saffron/90 transition-colors"
          >
            {copied ? 'Copied!' : 'Copy Slug'}
          </button>
        </div>
        <div className="rounded-xl bg-paper-raised p-4 border border-line font-mono text-sm text-ink break-all select-all">
          {slug || 'your-generated-slug'}
        </div>
      </div>
    </div>
  )
}
