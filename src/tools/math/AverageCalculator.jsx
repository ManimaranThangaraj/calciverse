import { useState, useMemo } from 'react'
import { ResultStat } from '../../components/ui/Field.jsx'

export default function AverageCalculator() {
  const [inputText, setInputText] = useState('12, 45, 67, 23, 89, 45, 90, 12, 45')

  const { count, sum, mean, median, mode, range } = useMemo(() => {
    const nums = inputText
      .split(/[,;\s]+/)
      .map(Number)
      .filter((n) => !isNaN(n))

    if (!nums.length) return { count: 0, sum: 0, mean: 0, median: 0, mode: 'N/A', range: 0 }

    const cnt = nums.length
    const total = nums.reduce((a, b) => a + b, 0)
    const avg = total / cnt

    const sorted = [...nums].sort((a, b) => a - b)
    const mid = Math.floor(cnt / 2)
    const med = cnt % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2

    // Mode
    const freq = {}
    nums.forEach((n) => (freq[n] = (freq[n] || 0) + 1))
    let maxFreq = 0
    let modes = []
    for (let k in freq) {
      if (freq[k] > maxFreq) {
        maxFreq = freq[k]
        modes = [k]
      } else if (freq[k] === maxFreq) {
        modes.push(k)
      }
    }

    const rng = sorted[cnt - 1] - sorted[0]

    return {
      count: cnt,
      sum: total,
      mean: avg,
      median: med,
      mode: modes.length === cnt ? 'No Mode' : modes.join(', '),
      range: rng,
    }
  }, [inputText])

  return (
    <div>
      <label className="block">
        <span className="text-sm font-medium text-ink-soft">Enter Numbers (separated by commas or spaces)</span>
        <textarea
          rows={3}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="e.g. 10, 20, 30, 40"
          className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 font-mono text-base outline-none focus:border-saffron transition-colors"
        />
      </label>

      <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <ResultStat label="Count (N)" value={count} />
        <ResultStat label="Sum" value={sum} />
        <ResultStat label="Mean (Average)" value={mean.toFixed(2)} emphasis />
        <ResultStat label="Median" value={median} />
        <ResultStat label="Mode" value={mode} />
        <ResultStat label="Range" value={range} />
      </div>
    </div>
  )
}
