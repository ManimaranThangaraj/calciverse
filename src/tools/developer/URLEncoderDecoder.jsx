import { useState } from 'react'
import CopyButton from '../../components/ui/CopyButton.jsx'

export default function URLEncoderDecoder() {
  const [input, setInput] = useState('https://calciverse.com/search?q=calculator & converter')
  const [output, setOutput] = useState('')

  const encode = () => {
    try {
      setOutput(encodeURIComponent(input))
    } catch {
      setOutput('Error encoding URI')
    }
  }

  const decode = () => {
    try {
      setOutput(decodeURIComponent(input))
    } catch {
      setOutput('Error decoding URI')
    }
  }

  return (
    <div>
      <span className="text-sm font-medium text-ink-soft">URL / String Input</span>
      <textarea
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 font-mono text-sm outline-none focus:border-saffron transition-colors"
      />
      <div className="mt-3 flex gap-2">
        <button onClick={encode} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-saffron dark:text-slate-950 dark:hover:bg-saffron/90 transition-colors">Encode URI</button>
        <button onClick={decode} className="rounded-lg border border-line bg-paper-raised px-4 py-2 text-sm font-semibold text-ink hover:border-saffron transition-colors">Decode URI</button>
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
