import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

export default function NoticePeriodCalculator() {
  const [resignationDate, setResignationDate] = useState(() => new Date().toISOString().split('T')[0])
  const [noticeDays, setNoticeDays] = useState(90) // Standard 90 days / 3 months in IT

  const { lastWorkingDay, calendarWeeks } = useMemo(() => {
    if (!resignationDate) return { lastWorkingDay: 'N/A', calendarWeeks: '0' }
    const start = new Date(resignationDate)
    if (isNaN(start.getTime())) return { lastWorkingDay: 'Invalid Date', calendarWeeks: '0' }

    const days = Number(noticeDays) || 0
    const lwd = new Date(start.getTime() + days * 86400000)

    const dateStr = lwd.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

    return {
      lastWorkingDay: dateStr,
      calendarWeeks: `${(days / 7).toFixed(1)} weeks`,
    }
  }, [resignationDate, noticeDays])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-ink-soft">Resignation Date</span>
          <input
            type="date"
            value={resignationDate}
            onChange={(e) => setResignationDate(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 text-base outline-none focus:border-saffron transition-colors"
          />
        </label>
        <NumberField label="Notice Period Duration" value={noticeDays} onChange={setNoticeDays} suffix="days" min={1} max={180} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Calculated Last Working Day (LWD)" value={lastWorkingDay} emphasis />
        <ResultStat label="Notice Duration in Weeks" value={calendarWeeks} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Calculates exact official exit date based on calendar days served after resignation submission.
      </p>
    </div>
  )
}
