import { useState, useMemo } from 'react'
import { ResultStat } from '../../components/ui/Field.jsx'

function diff(from, to) {
  let years = to.getFullYear() - from.getFullYear()
  let months = to.getMonth() - from.getMonth()
  let days = to.getDate() - from.getDate()
  if (days < 0) {
    months -= 1
    const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0)
    days += prevMonth.getDate()
  }
  if (months < 0) { years -= 1; months += 12 }
  return { years, months, days }
}

export default function AgeCalculator() {
  const [dob, setDob] = useState('2000-01-01')
  const [asOf, setAsOf] = useState(new Date().toISOString().slice(0, 10))

  const result = useMemo(() => {
    const from = new Date(dob)
    const to = new Date(asOf)
    if (isNaN(from) || isNaN(to) || from > to) return null
    const totalDays = Math.floor((to - from) / 86400000)
    return { ...diff(from, to), totalDays }
  }, [dob, asOf])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-ink-soft">Date of birth</span>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 outline-none focus:border-saffron" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink-soft">Age as of</span>
          <input type="date" value={asOf} onChange={(e) => setAsOf(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 outline-none focus:border-saffron" />
        </label>
      </div>

      {result ? (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <ResultStat label="Age" value={`${result.years}y ${result.months}m ${result.days}d`} emphasis />
          <ResultStat label="Total days lived" value={result.totalDays.toLocaleString('en-IN')} />
        </div>
      ) : (
        <p className="mt-6 text-sm text-alert">Enter a valid date of birth on or before the target date.</p>
      )}
    </div>
  )
}
