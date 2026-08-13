import { useState, useMemo } from 'react'
import { ResultStat } from '../../components/ui/Field.jsx'

export default function TimeDurationCalculator() {
  const [startTime, setStartTime] = useState('09:00')
  const [endTime, setEndTime] = useState('17:30')

  const { durationHours, durationMinutes, totalMinutes } = useMemo(() => {
    if (!startTime || !endTime) return { durationHours: 0, durationMinutes: 0, totalMinutes: 0 }
    const [h1, m1] = startTime.split(':').map(Number)
    const [h2, m2] = endTime.split(':').map(Number)

    let t1 = h1 * 60 + m1
    let t2 = h2 * 60 + m2

    if (t2 < t1) t2 += 24 * 60 // Overnight duration

    const diff = t2 - t1
    const hrs = Math.floor(diff / 60)
    const mins = diff % 60

    return { durationHours: hrs, durationMinutes: mins, totalMinutes: diff }
  }, [startTime, endTime])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-ink-soft">Start Clock Time</span>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 text-base outline-none focus:border-saffron transition-colors"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink-soft">End Clock Time</span>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 text-base outline-none focus:border-saffron transition-colors"
          />
        </label>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Time Duration" value={`${durationHours} hrs ${durationMinutes} mins`} emphasis />
        <ResultStat label="Total Minutes" value={`${totalMinutes} mins`} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Automatically accounts for overnight shifts spanning past midnight.
      </p>
    </div>
  )
}
