import { useState, useMemo } from 'react'
import { TextField } from '../../components/ui/Field.jsx'

export default function RegexTester() {
  const [pattern, setPattern] = useState('\\b[A-Z][a-z]+\\b')
  const [flags, setFlags] = useState('g')
  const [text, setText] = useState('Calciverse helps you calculate EMI, GST and BMI in seconds.')

  const { html, error, count } = useMemo(() => {
    try {
      const re = new RegExp(pattern, flags.includes('g') ? flags : flags + 'g')
      let last = 0
      let out = ''
      let matches = 0
      let m
      while ((m = re.exec(text)) !== null) {
        matches++
        out += escapeHtml(text.slice(last, m.index))
        out += `<mark class="bg-saffron-soft text-ink rounded px-0.5">${escapeHtml(m[0])}</mark>`
        last = m.index + m[0].length
        if (m[0].length === 0) re.lastIndex++
      }
      out += escapeHtml(text.slice(last))
      return { html: out, error: null, count: matches }
    } catch (e) {
      return { html: escapeHtml(text), error: e.message, count: 0 }
    }
  }, [pattern, flags, text])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
        <TextField label="Pattern" value={pattern} onChange={setPattern} placeholder="\\d+" />
        <TextField label="Flags" value={flags} onChange={setFlags} placeholder="g" />
      </div>
      <label className="mt-4 block">
        <span className="text-sm font-medium text-ink-soft">Test text</span>
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={5}
          className="mt-1.5 w-full resize-none rounded-lg border border-line bg-paper-raised p-3 text-sm outline-none focus:border-saffron" />
      </label>
      <div className="mt-4">
        <div className="text-sm font-medium text-ink-soft">{error ? 'Invalid pattern' : `${count} match${count === 1 ? '' : 'es'}`}</div>
        {error ? (
          <div className="mt-1.5 rounded-lg border border-alert/30 bg-alert/5 p-3 text-sm text-alert">{error}</div>
        ) : (
          <div className="mt-1.5 whitespace-pre-wrap rounded-lg border border-line bg-paper-raised p-3 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: html }} />
        )}
      </div>
    </div>
  )
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}
