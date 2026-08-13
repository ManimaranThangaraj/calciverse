import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function HomeAffordabilityCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(120000)
  const [downPayment, setDownPayment] = useState(1000000)
  const [existingEmi, setExistingEmi] = useState(10000)
  const [interestRate, setInterestRate] = useState(8.5)
  const [tenureYears, setTenureYears] = useState(20)

  const { maxHomePrice, maxEmi, maxLoan } = useMemo(() => {
    const income = Number(monthlyIncome) || 0
    const down = Number(downPayment) || 0
    const currentEmi = Number(existingEmi) || 0
    const r = (Number(interestRate) || 8.5) / 12 / 100
    const n = (Number(tenureYears) || 20) * 12

    const allowedEmi = Math.max(0, income * 0.40 - currentEmi) // 40% income rule for home loan
    if (allowedEmi <= 0 || r <= 0 || n <= 0) return { maxHomePrice: down, maxEmi: 0, maxLoan: 0 }

    const loanVal = (allowedEmi * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n))
    const homeVal = loanVal + down

    return { maxHomePrice: homeVal, maxEmi: allowedEmi, maxLoan: loanVal }
  }, [monthlyIncome, downPayment, existingEmi, interestRate, tenureYears])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Monthly In-Hand Income" value={monthlyIncome} onChange={setMonthlyIncome} suffix="₹" step={5000} />
        <NumberField label="Available Down Payment" value={downPayment} onChange={setDownPayment} suffix="₹" step={50000} />
        <NumberField label="Existing Monthly Debts/EMIs" value={existingEmi} onChange={setExistingEmi} suffix="₹" step={2000} />
        <NumberField label="Home Loan Interest Rate" value={interestRate} onChange={setInterestRate} suffix="%" step="0.1" />
        <NumberField label="Loan Tenure" value={tenureYears} onChange={setTenureYears} suffix="years" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Max Affordable Home Price" value={`₹${inr(maxHomePrice)}`} emphasis />
        <ResultStat label="Max Loan Principal" value={`₹${inr(maxLoan)}`} />
        <ResultStat label="Max Monthly Home EMI (40% Rule)" value={`₹${inr(maxEmi)}`} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Based on the prudent 40% monthly debt-to-income rule and your available cash down payment.
      </p>
    </div>
  )
}
