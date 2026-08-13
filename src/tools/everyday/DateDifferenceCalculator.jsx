import { useState, useMemo } from 'react'
import { ResultStat } from '../../components/ui/Field.jsx'

export default function DateDifferenceCalculator() {
  const [start, setStart] = useState(new Date().toISOString().slice(0, 10))
  const [end, setEnd] = useState(new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10))

  const result = useMemo(() => {
    const a = new Date(start), b = new Date(end)
    if (isNaN(a) || isNaN(b)) return null
    const ms = Math.abs(b - a)
    const days = Math.round(ms / 86400000)
    return { days, weeks: (days / 7).toFixed(1), months: (days / 30.44).toFixed(1) }
  }, [start, end])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-ink-soft">Start date</span>
          <input type="date" value={start} onChange={(e) => setStart(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 outline-none focus:border-saffron" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink-soft">End date</span>
          <input type="date" value={end} onChange={(e) => setEnd(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 outline-none focus:border-saffron" />
        </label>
      </div>
      {result && (
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <ResultStat label="Days" value={result.days} emphasis />
          <ResultStat label="Weeks" value={result.weeks} />
          <ResultStat label="Months (approx.)" value={result.months} />
        </div>
      )}
    </div>
  )
}
