import { useState } from 'react'
import CopyButton from '../../components/ui/CopyButton.jsx'

export default function CaseConverter() {
  const [text, setText] = useState('Hello World! Welcome to Calciverse online tool suite.')

  const toUpper = () => setText(text.toUpperCase())
  const toLower = () => setText(text.toLowerCase())
  const toTitle = () => {
    setText(text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()))
  }
  const toSentence = () => {
    setText(text.toLowerCase().replace(/(^\s*|\.\s*)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase()))
  }
  const toCamel = () => {
    const words = text.replace(/[^a-zA-Z0-9 ]/g, '').split(/\s+/)
    if (!words.length) return
    const camel = words.map((w, i) => i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('')
    setText(camel)
  }
  const toSnake = () => {
    setText(text.trim().toLowerCase().replace(/[^a-zA-Z0-9]+/g, '_'))
  }
  const toKebab = () => {
    setText(text.trim().toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-'))
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-ink-soft">Input Text</span>
        <CopyButton getText={() => text} />
      </div>
      <textarea
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 font-mono text-sm outline-none focus:border-saffron transition-colors"
      />
      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={toUpper} className="rounded-lg border border-line bg-paper-raised px-3 py-1.5 text-xs font-semibold text-ink hover:border-saffron hover:text-saffron transition-colors">UPPERCASE</button>
        <button onClick={toLower} className="rounded-lg border border-line bg-paper-raised px-3 py-1.5 text-xs font-semibold text-ink hover:border-saffron hover:text-saffron transition-colors">lowercase</button>
        <button onClick={toTitle} className="rounded-lg border border-line bg-paper-raised px-3 py-1.5 text-xs font-semibold text-ink hover:border-saffron hover:text-saffron transition-colors">Title Case</button>
        <button onClick={toSentence} className="rounded-lg border border-line bg-paper-raised px-3 py-1.5 text-xs font-semibold text-ink hover:border-saffron hover:text-saffron transition-colors">Sentence case</button>
        <button onClick={toCamel} className="rounded-lg border border-line bg-paper-raised px-3 py-1.5 text-xs font-semibold text-ink hover:border-saffron hover:text-saffron transition-colors">camelCase</button>
        <button onClick={toSnake} className="rounded-lg border border-line bg-paper-raised px-3 py-1.5 text-xs font-semibold text-ink hover:border-saffron hover:text-saffron transition-colors">snake_case</button>
        <button onClick={toKebab} className="rounded-lg border border-line bg-paper-raised px-3 py-1.5 text-xs font-semibold text-ink hover:border-saffron hover:text-saffron transition-colors">kebab-case</button>
      </div>
    </div>
  )
}
