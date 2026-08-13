import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

export default function OvulationCalculator() {
  const [lastPeriodDate, setLastPeriodDate] = useState(() => new Date().toISOString().split('T')[0])
  const [cycleLengthDays, setCycleLengthDays] = useState(28)

  const { ovulationDay, fertileWindow, nextPeriod } = useMemo(() => {
    if (!lastPeriodDate) return { ovulationDay: 'N/A', fertileWindow: 'N/A', nextPeriod: 'N/A' }
    const start = new Date(lastPeriodDate)
    if (isNaN(start.getTime())) return { ovulationDay: 'Invalid', fertileWindow: 'Invalid', nextPeriod: 'Invalid' }

    const cycle = Number(cycleLengthDays) || 28
    // Ovulation occurs approximately 14 days before the next period starts
    const ovulationOffset = cycle - 14
    const ovuDate = new Date(start.getTime() + ovulationOffset * 86400000)

    const fertileStart = new Date(ovuDate.getTime() - 4 * 86400000)
    const fertileEnd = new Date(ovuDate.getTime() + 1 * 86400000)

    const nextP = new Date(start.getTime() + cycle * 86400000)

    const formatDate = (d) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

    return {
      ovulationDay: formatDate(ovuDate),
      fertileWindow: `${formatDate(fertileStart)} – ${formatDate(fertileEnd)}`,
      nextPeriod: formatDate(nextP),
    }
  }, [lastPeriodDate, cycleLengthDays])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-ink-soft">First Day of Last Period</span>
          <input
            type="date"
            value={lastPeriodDate}
            onChange={(e) => setLastPeriodDate(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 text-base outline-none focus:border-saffron transition-colors"
          />
        </label>
        <NumberField label="Average Cycle Length (Days)" value={cycleLengthDays} onChange={setCycleLengthDays} suffix="days" min={20} max={45} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Estimated Ovulation Date" value={ovulationDay} emphasis />
        <ResultStat label="Most Fertile Window" value={fertileWindow} />
        <ResultStat label="Next Expected Period" value={nextPeriod} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Estimates fertile days based on standard luteal phase length of 14 days. Individual cycle timing can vary.
      </p>
    </div>
  )
}
