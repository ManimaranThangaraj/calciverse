import { useState, useMemo } from 'react'
import { ResultStat } from '../../components/ui/Field.jsx'

export default function StandardDeviationCalculator() {
  const [inputText, setInputText] = useState('10, 12, 23, 23, 16, 23, 21, 16')

  const { count, mean, sampleSd, popSd, sampleVar, popVar } = useMemo(() => {
    const nums = inputText
      .split(/[,;\s]+/)
      .map(Number)
      .filter((n) => !isNaN(n))

    if (nums.length < 2) return { count: nums.length, mean: 0, sampleSd: 0, popSd: 0, sampleVar: 0, popVar: 0 }

    const n = nums.length
    const avg = nums.reduce((a, b) => a + b, 0) / n

    const sumSqDiff = nums.reduce((a, b) => a + Math.pow(b - avg, 2), 0)

    const pVar = sumSqDiff / n
    const sVar = sumSqDiff / (n - 1)

    return {
      count: n,
      mean: avg,
      sampleSd: Math.sqrt(sVar),
      popSd: Math.sqrt(pVar),
      sampleVar: sVar,
      popVar: pVar,
    }
  }, [inputText])

  return (
    <div>
      <label className="block">
        <span className="text-sm font-medium text-ink-soft">Enter Sample Data Set (separated by commas or spaces)</span>
        <textarea
          rows={3}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="e.g. 10, 15, 20, 25"
          className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 font-mono text-base outline-none focus:border-saffron transition-colors"
        />
      </label>

      <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <ResultStat label="Count (N)" value={count} />
        <ResultStat label="Mean (x̄)" value={mean.toFixed(2)} />
        <ResultStat label="Sample SD (s)" value={sampleSd.toFixed(4)} emphasis />
        <ResultStat label="Population SD (σ)" value={popSd.toFixed(4)} emphasis />
        <ResultStat label="Sample Variance (s²)" value={sampleVar.toFixed(4)} />
        <ResultStat label="Pop. Variance (σ²)" value={popVar.toFixed(4)} />
      </div>
    </div>
  )
}
