import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function FreelanceRateCalculator() {
  const [targetNetIncome, setTargetNetIncome] = useState(1500000)
  const [annualExpenses, setAnnualExpenses] = useState(300000)
  const [billableHoursPerWeek, setBillableHoursPerWeek] = useState(25)
  const [vacationWeeks, setVacationWeeks] = useState(4)

  const { hourlyRate, dayRate, totalBillableHours } = useMemo(() => {
    const income = Number(targetNetIncome) || 0
    const expenses = Number(annualExpenses) || 0
    const weeklyHours = Number(billableHoursPerWeek) || 25
    const weeksOff = Number(vacationWeeks) || 4

    const workingWeeks = Math.max(1, 52 - weeksOff)
    const annualBillableHours = workingWeeks * weeklyHours

    const requiredGrossRevenue = income + expenses
    const hourly = annualBillableHours > 0 ? requiredGrossRevenue / annualBillableHours : 0
    const daily = hourly * 8

    return { hourlyRate: hourly, dayRate: daily, totalBillableHours: annualBillableHours }
  }, [targetNetIncome, annualExpenses, billableHoursPerWeek, vacationWeeks])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="Target Annual Net Income" value={targetNetIncome} onChange={setTargetNetIncome} suffix="₹" step={50000} />
        <NumberField label="Annual Business Expenses (Software, Tax, Health)" value={annualExpenses} onChange={setAnnualExpenses} suffix="₹" step={10000} />
        <NumberField label="Billable Hours / Week" value={billableHoursPerWeek} onChange={setBillableHoursPerWeek} suffix="hrs" max={60} />
        <NumberField label="Vacation Weeks / Year" value={vacationWeeks} onChange={setVacationWeeks} suffix="weeks" max={20} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Minimum Hourly Rate" value={`₹${inr(hourlyRate)}/hr`} emphasis />
        <ResultStat label="Estimated Day Rate (8 hrs)" value={`₹${inr(dayRate)}/day`} />
        <ResultStat label="Annual Billable Hours" value={`${inr(totalBillableHours)} hrs`} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Accounts for non-billable admin time, software costs, taxes, and paid time off.
      </p>
    </div>
  )
}
