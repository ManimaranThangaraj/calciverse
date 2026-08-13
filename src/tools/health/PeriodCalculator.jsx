import { useState, useMemo } from 'react'
import { NumberField } from '../../components/ui/Field.jsx'

export default function PeriodCalculator() {
  const [lastPeriodDate, setLastPeriodDate] = useState(() => new Date().toISOString().split('T')[0])
  const [cycleLengthDays, setCycleLengthDays] = useState(28)
  const [periodDurationDays, setPeriodDurationDays] = useState(5)

  const predictions = useMemo(() => {
    if (!lastPeriodDate) return []
    const start = new Date(lastPeriodDate)
    if (isNaN(start.getTime())) return []

    const cycle = Number(cycleLengthDays) || 28
    const dur = Number(periodDurationDays) || 5
    const list = []

    const formatDate = (d) => d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })

    for (let i = 1; i <= 3; i++) {
      const pStart = new Date(start.getTime() + i * cycle * 86400000)
      const pEnd = new Date(pStart.getTime() + (dur - 1) * 86400000)
      list.push({ cycleNumber: i, startDate: formatDate(pStart), endDate: formatDate(pEnd) })
    }

    return list
  }, [lastPeriodDate, cycleLengthDays, periodDurationDays])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="block">
          <span className="text-sm font-medium text-ink-soft">Start Date of Last Period</span>
          <input
            type="date"
            value={lastPeriodDate}
            onChange={(e) => setLastPeriodDate(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 text-base outline-none focus:border-saffron transition-colors"
          />
        </label>
        <NumberField label="Cycle Length (Days)" value={cycleLengthDays} onChange={setCycleLengthDays} suffix="days" min={20} max={45} />
        <NumberField label="Period Duration (Days)" value={periodDurationDays} onChange={setPeriodDurationDays} suffix="days" min={2} max={10} />
      </div>
      <div className="mt-6">
        <span className="text-sm font-medium text-ink-soft">Next 3 Predicted Cycles</span>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {predictions.map((p) => (
            <div key={p.cycleNumber} className="rounded-xl border border-line bg-paper p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-saffron">Cycle +{p.cycleNumber}</div>
              <div className="mt-2 font-display text-base font-bold text-ink">{p.startDate}</div>
              <div className="mt-1 text-xs text-ink-soft">Ends around: {p.endDate}</div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Provides predictions for upcoming periods based on your average cycle duration.
      </p>
    </div>
  )
}
