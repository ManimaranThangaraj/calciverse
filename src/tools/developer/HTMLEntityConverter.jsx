import { useState } from 'react'
import CopyButton from '../../components/ui/CopyButton.jsx'

export default function HTMLEntityConverter() {
  const [input, setInput] = useState('<div id="test">Tom & Jerry\'s "Special"</div>')
  const [output, setOutput] = useState('')

  const encodeEntities = () => {
    const encoded = input.replace(/[\u00A0-\u9999<>&"']/g, (i) => '&#' + i.charCodeAt(0) + ';')
    setOutput(encoded)
  }

  const decodeEntities = () => {
    const doc = new DOMParser().parseFromString(input, 'text/html')
    setOutput(doc.body.textContent || '')
  }

  return (
    <div>
      <span className="text-sm font-medium text-ink-soft">Text / Markup Input</span>
      <textarea
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 font-mono text-sm outline-none focus:border-saffron transition-colors"
      />
      <div className="mt-3 flex gap-2">
        <button onClick={encodeEntities} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-saffron dark:text-slate-950 dark:hover:bg-saffron/90 transition-colors">Encode HTML Entities</button>
        <button onClick={decodeEntities} className="rounded-lg border border-line bg-paper-raised px-4 py-2 text-sm font-semibold text-ink hover:border-saffron transition-colors">Decode HTML Entities</button>
      </div>

      {output && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-ink-soft">Result</span>
            <CopyButton getText={() => output} />
          </div>
          <pre className="mt-1.5 rounded-lg border border-line bg-paper-raised p-4 font-mono text-sm text-ink break-all whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}
    </div>
  )
}
