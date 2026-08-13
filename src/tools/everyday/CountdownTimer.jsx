import { useState, useEffect } from 'react'
import { ResultStat } from '../../components/ui/Field.jsx'

export default function CountdownTimer() {
  const [targetDate, setTargetDate] = useState(() => {
    const d = new Date()
    d.setDate(d.getDate() + 30)
    return d.toISOString().split('T')[0]
  })

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const updateCountdown = () => {
      if (!targetDate) return
      const target = new Date(targetDate).getTime()
      const now = new Date().getTime()
      const diff = target - now

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div>
      <div className="max-w-xs">
        <label className="block">
          <span className="text-sm font-medium text-ink-soft">Select Target Date</span>
          <input
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 text-base outline-none focus:border-saffron transition-colors"
          />
        </label>
      </div>
      <div className="mt-6 grid gap-3 grid-cols-2 sm:grid-cols-4">
        <ResultStat label="Days" value={timeLeft.days} emphasis />
        <ResultStat label="Hours" value={timeLeft.hours} />
        <ResultStat label="Minutes" value={timeLeft.minutes} />
        <ResultStat label="Seconds" value={timeLeft.seconds} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Live real-time countdown timer tracking remaining time to your target date.
      </p>
    </div>
  )
}
