import { useState, useMemo } from 'react'
import { TextField, ResultStat } from '../../components/ui/Field.jsx'

export default function PregnancyDueDateCalculator() {
  const [lmpDate, setLmpDate] = useState(() => new Date().toISOString().split('T')[0])

  const { dueDate, weeksPreg, trimester } = useMemo(() => {
    if (!lmpDate) return { dueDate: 'N/A', weeksPreg: '0', trimester: 'N/A' }
    const lmp = new Date(lmpDate)
    if (isNaN(lmp.getTime())) return { dueDate: 'Invalid Date', weeksPreg: '0', trimester: 'N/A' }

    // Naegele's rule: LMP + 280 days (40 weeks)
    const due = new Date(lmp.getTime() + 280 * 86400000)

    const today = new Date()
    const diffTime = today.getTime() - lmp.getTime()
    const days = Math.floor(diffTime / (1000 * 3600 * 24))
    const weeks = Math.floor(days / 7)
    const remDays = days % 7

    let trim = '1st Trimester'
    if (weeks >= 28) trim = '3rd Trimester'
    else if (weeks >= 13) trim = '2nd Trimester'

    return {
      dueDate: due.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
      weeksPreg: `${weeks} weeks, ${remDays} days`,
      trimester: trim,
    }
  }, [lmpDate])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-1 max-w-md">
        <label className="block">
          <span className="text-sm font-medium text-ink-soft">First Day of Last Menstrual Period (LMP)</span>
          <input
            type="date"
            value={lmpDate}
            onChange={(e) => setLmpDate(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 text-base outline-none focus:border-saffron transition-colors"
          />
        </label>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Estimated Due Date" value={dueDate} emphasis />
        <ResultStat label="Current Gestational Age" value={weeksPreg} />
        <ResultStat label="Current Stage" value={trimester} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Estimated using Naegele's Rule (LMP + 280 days). Consult an obstetrician for medical ultrasound verification.
      </p>
    </div>
  )
}
