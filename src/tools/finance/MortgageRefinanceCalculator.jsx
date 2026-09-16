import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

const inr = (n) => n.toLocaleString('en-IN', { maximumFractionDigits: 0 })

export default function MortgageRefinanceCalculator() {
  const [currentBalance, setCurrentBalance] = useState(3000000)
  const [currentRate, setCurrentRate] = useState(9.5)
  const [newRate, setNewRate] = useState(8.2)
  const [remainingYears, setRemainingYears] = useState(15)

  const { oldEMI, newEMI, monthlySavings, totalSavings } = useMemo(() => {
    const P = Number(currentBalance) || 0
    const rOld = (Number(currentRate) || 0) / 12 / 100
    const rNew = (Number(newRate) || 0) / 12 / 100
    const n = (Number(remainingYears) || 0) * 12

    if (!P || !n) return { oldEMI: 0, newEMI: 0, monthlySavings: 0, totalSavings: 0 }

    const emi1 = rOld === 0 ? P / n : (P * rOld * Math.pow(1 + rOld, n)) / (Math.pow(1 + rOld, n) - 1)
    const emi2 = rNew === 0 ? P / n : (P * rNew * Math.pow(1 + rNew, n)) / (Math.pow(1 + rNew, n) - 1)
    const mSavings = Math.max(0, emi1 - emi2)
    const tSavings = mSavings * n

    return { oldEMI: emi1, newEMI: emi2, monthlySavings: mSavings, totalSavings: tSavings }
  }, [currentBalance, currentRate, newRate, remainingYears])

  const summaryText = `Current Loan Balance: ₹${inr(currentBalance)} (${remainingYears} yrs left)\nCurrent Rate: ${currentRate}% vs Refinance Rate: ${newRate}%\nMonthly EMI Savings: ₹${inr(monthlySavings)}\nTotal Savings: ₹${inr(totalSavings)}`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="Current Loan Balance" value={currentBalance} onChange={setCurrentBalance} suffix="₹" />
        <NumberField label="Current Interest Rate" value={currentRate} onChange={setCurrentRate} suffix="%" step="0.1" />
        <NumberField label="New Refinance Rate" value={newRate} onChange={setNewRate} suffix="%" step="0.1" />
        <NumberField label="Remaining Tenure" value={remainingYears} onChange={setRemainingYears} suffix="years" />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Total Interest Savings" value={`₹${inr(totalSavings)}`} emphasis />
        <ResultStat label="Monthly EMI Savings" value={`₹${inr(monthlySavings)}`} />
        <ResultStat label="New Reduced Monthly EMI" value={`₹${inr(newEMI)}`} />
      </div>

      <ToolActions
        toolName="Mortgage & Loan Refinance Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/mortgage-refinance-calculator"
      />
    </div>
  )
}
