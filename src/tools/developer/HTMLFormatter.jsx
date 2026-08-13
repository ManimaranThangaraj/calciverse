import { useState } from 'react'
import CopyButton from '../../components/ui/CopyButton.jsx'

export default function HTMLFormatter() {
  const [code, setCode] = useState('<div class="card"><h1>Calciverse</h1><p>Fast free online tools</p></div>')
  const [formattedCode, setFormattedCode] = useState('')

  const formatHtml = () => {
    let indent = ''
    let result = ''
    const tokens = code.replace(/>\s*</g, '><').split(/(?=<)/)

    tokens.forEach((token) => {
      if (token.match(/^<\/\w/)) {
        indent = indent.substring(2)
      }
      result += indent + token + '\n'
      if (token.match(/^<\w[^>]*[^\/]>$/) && !token.match(/^<(img|hr|br|input|link|meta)/i)) {
        indent += '  '
      }
    })
    setFormattedCode(result.trim())
  }

  const minifyHtml = () => {
    setFormattedCode(code.replace(/>\s+</g, '><').replace(/\s+/g, ' ').trim())
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-ink-soft">Raw HTML Input</span>
      </div>
      <textarea
        rows={4}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 font-mono text-sm outline-none focus:border-saffron transition-colors"
      />
      <div className="mt-3 flex gap-2">
        <button onClick={formatHtml} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-saffron dark:text-slate-950 dark:hover:bg-saffron/90 transition-colors">Format / Prettify</button>
        <button onClick={minifyHtml} className="rounded-lg border border-line bg-paper-raised px-4 py-2 text-sm font-semibold text-ink hover:border-saffron transition-colors">Minify</button>
      </div>

      {formattedCode && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-ink-soft">Output</span>
            <CopyButton getText={() => formattedCode} />
          </div>
          <pre className="mt-1.5 rounded-lg border border-line bg-paper-raised p-4 font-mono text-sm text-ink overflow-x-auto whitespace-pre-wrap">
            {formattedCode}
          </pre>
        </div>
      )}
    </div>
  )
}
