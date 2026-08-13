import { useState } from 'react'
import CopyButton from '../../components/ui/CopyButton.jsx'

export default function Base64Tool() {
  const [text, setText] = useState('calciverse')
  const [mode, setMode] = useState('encode')

  let output = ''
  let error = ''
  try {
    output = mode === 'encode' ? btoa(unescape(encodeURIComponent(text))) : decodeURIComponent(escape(atob(text)))
  } catch {
    error = mode === 'encode' ? 'Could not encode this text.' : 'Not valid Base64.'
  }

  return (
    <div>
      <div className="flex gap-2">
        {['encode', 'decode'].map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`rounded-lg px-4 py-1.5 text-sm font-medium capitalize transition-colors ${mode === m ? 'bg-slate-900 text-white dark:bg-saffron dark:text-slate-950 font-semibold' : 'border border-line text-ink-soft hover:border-saffron'}`}
          >
            {m}
          </button>
        ))}
      </div>

      <label className="mt-4 block">
        <span className="text-sm font-medium text-ink-soft">{mode === 'encode' ? 'Plain text' : 'Base64'}</span>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          spellCheck={false}
          className="mt-1.5 w-full resize-none rounded-lg border border-line bg-paper-raised p-3 font-mono text-sm outline-none focus:border-saffron"
        />
      </label>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-ink-soft">Result</span>
          {!error && <CopyButton getText={() => output} />}
        </div>
        {error ? (
          <div className="mt-1.5 rounded-lg border border-alert/30 bg-alert/5 p-3 text-sm text-alert">{error}</div>
        ) : (
          <div className="mt-1.5 break-all rounded-lg border border-line bg-paper-raised p-3 font-mono text-sm text-ink-soft">{output}</div>
        )}
      </div>
    </div>
  )
}
