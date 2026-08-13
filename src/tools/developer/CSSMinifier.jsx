import { useState } from 'react'
import CopyButton from '../../components/ui/CopyButton.jsx'

export default function CSSMinifier() {
  const [cssText, setCssText] = useState('/* Navigation bar styles */\n.header {\n  background-color: #ffffff;\n  padding: 10px 20px;\n  margin: 0px;\n}')
  const [outputCss, setOutputCss] = useState('')

  const minifyCss = () => {
    const minified = cssText
      .replace(/\/\*[\s\S]*?\*\//g, '') // remove comments
      .replace(/\s+/g, ' ') // collapse whitespace
      .replace(/\s*([{}:;,])\s*/g, '$1') // remove spaces around punctuation
      .trim()
    setOutputCss(minified)
  }

  return (
    <div>
      <span className="text-sm font-medium text-ink-soft">Raw CSS Markup</span>
      <textarea
        rows={5}
        value={cssText}
        onChange={(e) => setCssText(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 font-mono text-sm outline-none focus:border-saffron transition-colors"
      />
      <div className="mt-3">
        <button onClick={minifyCss} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-saffron dark:text-slate-950 dark:hover:bg-saffron/90 transition-colors">Minify CSS</button>
      </div>

      {outputCss && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-ink-soft">Minified Output ({outputCss.length} bytes)</span>
            <CopyButton getText={() => outputCss} />
          </div>
          <pre className="mt-1.5 rounded-lg border border-line bg-paper-raised p-4 font-mono text-sm text-ink overflow-x-auto whitespace-pre-wrap">
            {outputCss}
          </pre>
        </div>
      )}
    </div>
  )
}
