import { useState, useMemo } from 'react'
import { SelectField, NumberField } from '../../components/ui/Field.jsx'
import CopyButton from '../../components/ui/CopyButton.jsx'

const LOREM_WORDS = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do',
  'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'enim',
  'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut',
  'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit',
  'in', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla', 'pariatur',
  'excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'in', 'culpa', 'qui',
  'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'
]

function generateWord(index) {
  return LOREM_WORDS[index % LOREM_WORDS.length]
}

function generateSentence(wordCount = 10, isFirst = false) {
  const words = []
  for (let i = 0; i < wordCount; i++) {
    const idx = Math.floor(Math.random() * LOREM_WORDS.length)
    words.push(LOREM_WORDS[idx])
  }
  if (isFirst) {
    words[0] = 'lorem'
    words[1] = 'ipsum'
  }
  let sentence = words.join(' ')
  return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.'
}

export default function LoremIpsumGenerator() {
  const [count, setCount] = useState(3)
  const [unit, setUnit] = useState('paragraphs')
  const [startWithLorem, setStartWithLorem] = useState(true)

  const text = useMemo(() => {
    const qty = Math.max(1, Math.min(100, Number(count) || 1))

    if (unit === 'paragraphs') {
      const paras = []
      for (let p = 0; p < qty; p++) {
        const sentenceCount = 4 + Math.floor(Math.random() * 4)
        const sentences = []
        for (let s = 0; s < sentenceCount; s++) {
          const isFirstSentence = (p === 0 && s === 0 && startWithLorem)
          sentences.push(generateSentence(8 + Math.floor(Math.random() * 6), isFirstSentence))
        }
        paras.push(sentences.join(' '))
      }
      return paras.join('\n\n')
    }

    if (unit === 'sentences') {
      const sentences = []
      for (let s = 0; s < qty; s++) {
        const isFirst = (s === 0 && startWithLorem)
        sentences.push(generateSentence(8 + Math.floor(Math.random() * 6), isFirst))
      }
      return sentences.join(' ')
    }

    if (unit === 'words') {
      const words = []
      for (let w = 0; w < qty; w++) {
        if (w === 0 && startWithLorem) {
          words.push('lorem')
        } else if (w === 1 && startWithLorem && qty > 1) {
          words.push('ipsum')
        } else {
          words.push(generateWord(w + Math.floor(Math.random() * 10)))
        }
      }
      let res = words.join(' ')
      return res.charAt(0).toUpperCase() + res.slice(1)
    }

    return ''
  }, [count, unit, startWithLorem])

  const wordCount = useMemo(() => text.trim() ? text.trim().split(/\s+/).length : 0, [text])
  const charCount = text.length

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3 items-end">
        <NumberField
          label="Quantity"
          value={count}
          onChange={(v) => setCount(Math.max(1, Math.min(100, Number(v) || 1)))}
          min={1}
          max={100}
        />

        <SelectField
          label="Generate"
          value={unit}
          onChange={setUnit}
          options={[
            { value: 'paragraphs', label: 'Paragraphs' },
            { value: 'sentences', label: 'Sentences' },
            { value: 'words', label: 'Words' },
          ]}
        />

        <div className="flex items-center gap-2 pb-2.5">
          <input
            type="checkbox"
            id="start-lorem"
            checked={startWithLorem}
            onChange={(e) => setStartWithLorem(e.target.checked)}
            className="h-4 w-4 rounded border-line text-saffron focus:ring-saffron"
          />
          <label htmlFor="start-lorem" className="text-sm font-medium text-ink cursor-pointer">
            Start with "Lorem ipsum..."
          </label>
        </div>
      </div>

      {/* Result Container */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-xs text-ink-soft font-mono">
            {wordCount} words · {charCount} characters
          </div>
          <CopyButton getText={() => text} />
        </div>
        <textarea
          readOnly
          value={text}
          rows={10}
          className="w-full rounded-xl border border-line bg-paper px-4 py-3 font-body text-sm text-ink outline-none focus:border-saffron resize-y"
        />
      </div>
    </div>
  )
}
