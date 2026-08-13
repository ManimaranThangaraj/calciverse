import { useState, useMemo } from 'react'
import { ResultStat } from '../../components/ui/Field.jsx'

export default function SleepCalculator() {
  const [wakeTime, setWakeTime] = useState('07:00')

  const sleepTimes = useMemo(() => {
    if (!wakeTime) return []
    const [h, m] = wakeTime.split(':').map(Number)
    const target = new Date()
    target.setHours(h, m, 0, 0)

    // Average time to fall asleep: 15 mins. Sleep cycles: 90 mins (1.5 hrs)
    // 6 cycles = 9 hrs, 5 cycles = 7.5 hrs, 4 cycles = 6 hrs, 3 cycles = 4.5 hrs
    const cycles = [6, 5, 4, 3]

    return cycles.map((c) => {
      const minutesToSubtract = c * 90 + 15
      const bedtime = new Date(target.getTime() - minutesToSubtract * 60000)
      const timeStr = bedtime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
      return {
        cycles: c,
        hours: (c * 1.5).toFixed(1),
        bedtime: timeStr,
      }
    })
  }, [wakeTime])

  return (
    <div>
      <div className="max-w-xs">
        <label className="block">
          <span className="text-sm font-medium text-ink-soft">Target Wake-Up Time</span>
          <input
            type="time"
            value={wakeTime}
            onChange={(e) => setWakeTime(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 text-base outline-none focus:border-saffron transition-colors"
          />
        </label>
      </div>
      <div className="mt-6">
        <span className="text-sm font-medium text-ink-soft">Ideal Times to Go to Sleep (90-min Sleep Cycles)</span>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sleepTimes.map((item, idx) => (
            <ResultStat key={item.cycles} label={`${item.cycles} Cycles (${item.hours} hrs)`} value={item.bedtime} emphasis={idx === 1} />
          ))}
        </div>
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Includes an average 15 minutes falling asleep time. Waking up at the end of a 90-minute sleep cycle helps you feel refreshed rather than groggy.
      </p>
    </div>
  )
}
