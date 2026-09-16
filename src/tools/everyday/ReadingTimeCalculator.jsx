import { useState, useId } from 'react'

export default function ReadingTimeCalculator() {
  const [text, setText] = useState('Calciverse provides fast, accurate, and privacy-focused online calculators, converters, and generators. All computations execute locally inside your web browser memory without server data logging or invasive sign-up forms.')

  const textId = useId()

  const calculateTimes = () => {
    const trimmed = text.trim()
    if (!trimmed) {
      return { words: 0, chars: 0, silentMinutes: 0, speechMinutes: 0, fastSpeechMinutes: 0 }
    }

    const words = trimmed.split(/\s+/).length
    const chars = trimmed.length

    // Average reading speeds:
    // Silent reading: 225 wpm
    // Normal Speech: 130 wpm
    // Fast Speech / Presentation: 160 wpm
    const silentMinutes = (words / 225).toFixed(1)
    const speechMinutes = (words / 130).toFixed(1)
    const fastSpeechMinutes = (words / 160).toFixed(1)

    return { words, chars, silentMinutes, speechMinutes, fastSpeechMinutes }
  }

  const result = calculateTimes()

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor={textId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
          Paste Text to Analyze Reading & Speech Time
        </label>
        <textarea
          id={textId}
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste blog post, essay, or speech transcript here..."
          className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron resize-y"
        />
      </div>

      <div className="rounded-2xl border border-line bg-paper p-6 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-ink border-b border-line pb-2">
          Reading & Speech Duration Metrics
        </h3>

        <div className="grid gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Word Count</span>
            <strong className="text-xl font-bold text-ink">{result.words} words</strong>
          </div>

          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Silent Reading Time</span>
            <strong className="text-xl font-bold text-saffron">{result.silentMinutes} min</strong>
          </div>

          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Normal Speech Duration</span>
            <strong className="text-xl font-bold text-signal">{result.speechMinutes} min</strong>
          </div>

          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Fast Presentation Speed</span>
            <strong className="text-xl font-bold text-ink">{result.fastSpeechMinutes} min</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
