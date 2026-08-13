import { useState, useMemo } from 'react'
import { ResultStat } from '../../components/ui/Field.jsx'
import CopyButton from '../../components/ui/CopyButton.jsx'

export default function WordCounter() {
  const [text, setText] = useState('Calciverse offers powerful, fast, and free online calculators and tools. Built with pure client-side technology for privacy and speed.')

  const { words, chars, charsNoSpaces, sentences, paragraphs, readingTime } = useMemo(() => {
    const raw = text || ''
    const trimmed = raw.trim()
    const wordList = trimmed ? trimmed.split(/\s+/).filter(Boolean) : []
    const wordCount = wordList.length

    const charCount = raw.length
    const charNoSpaceCount = raw.replace(/\s/g, '').length

    const sentenceList = raw.split(/[.!?]+/).filter((s) => s.trim().length > 0)
    const sentenceCount = sentenceList.length

    const paragraphList = raw.split(/\n+/).filter((p) => p.trim().length > 0)
    const paragraphCount = paragraphList.length

    // Average reading speed: 200 words per minute
    const minutes = Math.ceil(wordCount / 200)

    return {
      words: wordCount,
      chars: charCount,
      charsNoSpaces: charNoSpaceCount,
      sentences: sentenceCount,
      paragraphs: paragraphCount,
      readingTime: `${minutes} min`,
    }
  }, [text])

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-ink-soft">Enter or Paste Text</span>
        <CopyButton getText={() => text} />
      </div>
      <textarea
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your content here..."
        className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 font-sans text-base outline-none focus:border-saffron transition-colors"
      />
      <div className="mt-6 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        <ResultStat label="Words" value={words} emphasis />
        <ResultStat label="Characters" value={chars} />
        <ResultStat label="No Spaces" value={charsNoSpaces} />
        <ResultStat label="Sentences" value={sentences} />
        <ResultStat label="Paragraphs" value={paragraphs} />
        <ResultStat label="Reading Time" value={readingTime} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Live text analysis performed instant client-side without sending text to any server.
      </p>
    </div>
  )
}
