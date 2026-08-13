import { useState, useMemo } from 'react'
import CopyButton from '../../components/ui/CopyButton.jsx'

export default function JSONFormatter() {
  const [input, setInput] = useState('{"name":"Calciverse","tools":250,"live":true}')

  const { formatted, error } = useMemo(() => {
    try {
      const parsed = JSON.parse(input)
      return { formatted: JSON.stringify(parsed, null, 2), error: null }
    } catch (e) {
      return { formatted: '', error: e.message }
    }
  }, [input])

  const minify = () => {
    try { setInput(JSON.stringify(JSON.parse(input))) } catch { /* invalid JSON, ignore */ }
  }
  const prettify = () => {
    if (formatted) setInput(formatted)
  }

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-ink-soft">Input</span>
            <div className="flex gap-2">
              <button onClick={prettify} className="text-xs font-medium text-saffron hover:underline">Prettify</button>
              <button onClick={minify} className="text-xs font-medium text-saffron hover:underline">Minify</button>
            </div>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={14}
            spellCheck={false}
            className="mt-1.5 w-full resize-none rounded-lg border border-line bg-paper-raised p-3 font-mono text-sm outline-none focus:border-saffron"
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-ink-soft">{error ? 'Error' : 'Formatted'}</span>
            {!error && <CopyButton getText={() => formatted} />}
          </div>
          {error ? (
            <div className="mt-1.5 rounded-lg border border-alert/30 bg-alert/5 p-3 font-mono text-sm text-alert">{error}</div>
          ) : (
            <pre className="mt-1.5 h-[336px] overflow-auto rounded-lg border border-line bg-paper-raised p-3 font-mono text-sm text-ink-soft">{formatted}</pre>
          )}
        </div>
      </div>
    </div>
  )
}
