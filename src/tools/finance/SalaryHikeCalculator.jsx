import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function SalaryHikeCalculator() {
  const [currentSalary, setCurrentSalary] = useState(800000)
  const [hikePercent, setHikePercent] = useState(15)

  const { hikeAmount, newSalary, monthlyDifference } = useMemo(() => {
    const curr = Number(currentSalary) || 0
    const pct = Number(hikePercent) || 0
    const hike = (curr * pct) / 100
    const newSal = curr + hike
    return {
      hikeAmount: hike,
      newSalary: newSal,
      monthlyDifference: hike / 12,
    }
  }, [currentSalary, hikePercent])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Current Annual Salary / CTC" value={currentSalary} onChange={setCurrentSalary} suffix="₹" step={25000} />
        <NumberField label="Hike Percentage" value={hikePercent} onChange={setHikePercent} suffix="%" step="0.5" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Annual Hike Amount" value={`₹${inr(hikeAmount)}`} />
        <ResultStat label="Monthly Salary Gain" value={`₹${inr(monthlyDifference)}`} />
        <ResultStat label="New Annual Salary" value={`₹${inr(newSalary)}`} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Formula: New Salary = Current Salary × (1 + Hike% / 100)
      </p>
    </div>
  )
}
