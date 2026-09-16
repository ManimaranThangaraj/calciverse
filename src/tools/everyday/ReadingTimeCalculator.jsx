import { useState, useMemo } from 'react'
import { ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

export default function ReadingTimeCalculator() {
  const [text, setText] = useState('Calciverse provides fast, accurate, and privacy-focused online calculators, converters, and generators. All computations execute locally inside your web browser memory without server data logging or invasive sign-up forms.')

  const { words, chars, silentMinutes, speechMinutes, fastSpeechMinutes } = useMemo(() => {
    const trimmed = text.trim()
    if (!trimmed) {
      return { words: 0, chars: 0, silentMinutes: '0', speechMinutes: '0', fastSpeechMinutes: '0' }
    }

    const w = trimmed.split(/\s+/).length
    const c = trimmed.length

    const silent = (w / 225).toFixed(1)
    const speech = (w / 130).toFixed(1)
    const fast = (w / 160).toFixed(1)

    return { words: w, chars: c, silentMinutes: silent, speechMinutes: speech, fastSpeechMinutes: fast }
  }, [text])

  const summaryText = `Total Words: ${words} words (${chars} characters)\nSilent Reading Time: ~${silentMinutes} mins (225 wpm)\nNormal Speech Duration: ~${speechMinutes} mins (130 wpm)\nFast Speech Duration: ~${fastSpeechMinutes} mins (160 wpm)`

  return (
    <div>
      <label className="block mb-4">
        <span className="text-sm font-medium text-ink-soft">Paste Text to Analyze Reading & Speech Time</span>
        <textarea
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste blog post, essay, or speech transcript here..."
          className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 text-sm text-ink outline-none transition-all focus:border-saffron focus:ring-1 focus:ring-saffron"
        />
      </label>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <ResultStat label="Silent Reading Time" value={`~${silentMinutes} min`} emphasis />
        <ResultStat label="Word Count" value={`${words} words`} />
        <ResultStat label="Speech Duration" value={`~${speechMinutes} min`} />
        <ResultStat label="Fast Presentation" value={`~${fastSpeechMinutes} min`} />
      </div>

      <ToolActions
        toolName="Reading Time & Speech Duration Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/reading-time-calculator"
      />
    </div>
  )
}
