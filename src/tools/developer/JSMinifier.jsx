import { useState } from 'react'
import CopyButton from '../../components/ui/CopyButton.jsx'

export default function JSMinifier() {
  const [jsText, setJsText] = useState('// Calculate total sum\nfunction calculateTotal(items) {\n  let total = 0;\n  for (let item of items) {\n    total += item.price;\n  }\n  return total;\n}')
  const [outputJs, setOutputJs] = useState('')

  const minifyJs = () => {
    const minified = jsText
      .replace(/\/\*[\s\S]*?\*\//g, '') // remove multi-line comments
      .replace(/\/\/.*/g, '') // remove single line comments
      .replace(/\s+/g, ' ') // collapse whitespace
      .replace(/\s*([{}();,=+\-*/<>:])\s*/g, '$1') // trim whitespace around operators
      .trim()
    setOutputJs(minified)
  }

  return (
    <div>
      <span className="text-sm font-medium text-ink-soft">Raw JavaScript Code</span>
      <textarea
        rows={6}
        value={jsText}
        onChange={(e) => setJsText(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 font-mono text-sm outline-none focus:border-saffron transition-colors"
      />
      <div className="mt-3">
        <button onClick={minifyJs} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-saffron dark:text-slate-950 dark:hover:bg-saffron/90 transition-colors">Minify JavaScript</button>
      </div>

      {outputJs && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-ink-soft">Minified JS Output</span>
            <CopyButton getText={() => outputJs} />
          </div>
          <pre className="mt-1.5 rounded-lg border border-line bg-paper-raised p-4 font-mono text-sm text-ink overflow-x-auto whitespace-pre-wrap">
            {outputJs}
          </pre>
        </div>
      )}
    </div>
  )
}
