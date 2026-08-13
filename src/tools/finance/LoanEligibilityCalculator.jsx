import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function LoanEligibilityCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(80000)
  const [existingEmi, setExistingEmi] = useState(10000)
  const [interestRate, setInterestRate] = useState(8.5)
  const [tenureYears, setTenureYears] = useState(20)

  const { maxEmi, eligibleLoanAmount } = useMemo(() => {
    const income = Number(monthlyIncome) || 0
    const currentEmi = Number(existingEmi) || 0
    const rate = (Number(interestRate) || 0) / 12 / 100
    const n = (Number(tenureYears) || 0) * 12

    // Banks generally cap total EMI to 50% FOIR (Fixed Obligation to Income Ratio)
    const allowedTotalEmi = income * 0.50
    const maxNewEmi = Math.max(0, allowedTotalEmi - currentEmi)

    if (maxNewEmi <= 0 || rate <= 0 || n <= 0) return { maxEmi: 0, eligibleLoanAmount: 0 }

    // Present value of maximum EMI
    const loanVal = (maxNewEmi * (Math.pow(1 + rate, n) - 1)) / (rate * Math.pow(1 + rate, n))

    return { maxEmi: maxNewEmi, eligibleLoanAmount: loanVal }
  }, [monthlyIncome, existingEmi, interestRate, tenureYears])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="Net Monthly In-Hand Income" value={monthlyIncome} onChange={setMonthlyIncome} suffix="₹" step={5000} />
        <NumberField label="Existing Monthly EMIs" value={existingEmi} onChange={setExistingEmi} suffix="₹" step={2000} />
        <NumberField label="Expected Interest Rate" value={interestRate} onChange={setInterestRate} suffix="%" step="0.1" />
        <NumberField label="Loan Tenure" value={tenureYears} onChange={setTenureYears} suffix="years" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Maximum Additional EMI Allowed (50% FOIR)" value={`₹${inr(maxEmi)}`} />
        <ResultStat label="Eligible Loan Amount" value={`₹${inr(eligibleLoanAmount)}`} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Uses standard bank 50% FOIR threshold (Fixed Obligation to Income Ratio). Final approval depends on credit score and lender policies.
      </p>
    </div>
  )
}
