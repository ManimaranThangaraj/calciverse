import { useState, useMemo } from 'react'
import { TextField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

export default function WorkingDaysCalculator() {
  const [startDate, setStartDate] = useState('2026-10-01')
  const [endDate, setEndDate] = useState('2026-10-31')

  const { totalCalendarDays, workingDays, weekendDays } = useMemo(() => {
    const d1 = new Date(startDate)
    const d2 = new Date(endDate)

    if (isNaN(d1.getTime()) || isNaN(d2.getTime()) || d1 > d2) {
      return { totalCalendarDays: 0, workingDays: 0, weekendDays: 0 }
    }

    let workDays = 0
    let weekends = 0
    let total = 0

    const current = new Date(d1)

    while (current <= d2) {
      total++
      const dayOfWeek = current.getDay()
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        weekends++
      } else {
        workDays++
      }
      current.setDate(current.getDate() + 1)
    }

    return { totalCalendarDays: total, workingDays: workDays, weekendDays: weekends }
  }, [startDate, endDate])

  const summaryText = `Start Date: ${startDate} to End Date: ${endDate}\nTotal Calendar Days: ${totalCalendarDays}\nWorking Business Days (Mon-Fri): ${workingDays}\nWeekend Days (Sat-Sun): ${weekendDays}`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField label="Start Date (YYYY-MM-DD)" value={startDate} onChange={setStartDate} placeholder="2026-10-01" />
        <TextField label="End Date (YYYY-MM-DD)" value={endDate} onChange={setEndDate} placeholder="2026-10-31" />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Working Business Days (Mon-Fri)" value={`${workingDays} days`} emphasis />
        <ResultStat label="Total Calendar Days" value={`${totalCalendarDays} days`} />
        <ResultStat label="Weekend Days (Sat-Sun)" value={`${weekendDays} days`} />
      </div>

      <ToolActions
        toolName="Working Days & Business Hours Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/working-days-calculator"
      />
    </div>
  )
}
