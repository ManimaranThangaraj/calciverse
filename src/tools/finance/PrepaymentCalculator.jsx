import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function PrepaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState(3000000)
  const [rate, setRate] = useState(8.5)
  const [tenureYears, setTenureYears] = useState(20)
  const [prepayment, setPrepayment] = useState(300000)

  const { originalInterest, newInterest, interestSaved, tenureReducedMonths } = useMemo(() => {
    const P = Number(loanAmount) || 0
    const r = (Number(rate) || 0) / 12 / 100
    const n = (Number(tenureYears) || 0) * 12
    const prepay = Number(prepayment) || 0

    if (!P || !n || r <= 0) return { originalInterest: 0, newInterest: 0, interestSaved: 0, tenureReducedMonths: 0 }

    const originalEmi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const origTotalInterest = originalEmi * n - P

    const newP = Math.max(0, P - prepay)
    if (newP <= 0) {
      return { originalInterest: origTotalInterest, newInterest: 0, interestSaved: origTotalInterest, tenureReducedMonths: n }
    }

    // New tenure with same EMI
    const newN = Math.log(originalEmi / (originalEmi - newP * r)) / Math.log(1 + r)
    const newTotalInterest = originalEmi * newN - newP

    return {
      originalInterest: origTotalInterest,
      newInterest: newTotalInterest,
      interestSaved: Math.max(0, origTotalInterest - newTotalInterest),
      tenureReducedMonths: Math.round(n - newN),
    }
  }, [loanAmount, rate, tenureYears, prepayment])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="Outstanding Loan Amount" value={loanAmount} onChange={setLoanAmount} suffix="₹" step={50000} />
        <NumberField label="Interest Rate" value={rate} onChange={setRate} suffix="%" step="0.1" />
        <NumberField label="Remaining Tenure" value={tenureYears} onChange={setTenureYears} suffix="years" />
        <NumberField label="One-Time Prepayment Amount" value={prepayment} onChange={setPrepayment} suffix="₹" step={25000} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Original Interest Payable" value={`₹${inr(originalInterest)}`} />
        <ResultStat label="Total Interest Saved" value={`₹${inr(interestSaved)}`} emphasis />
        <ResultStat label="Tenure Cut By" value={`${tenureReducedMonths} months (${(tenureReducedMonths / 12).toFixed(1)} yrs)`} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Calculates interest savings when keeping monthly EMI unchanged while reducing loan principal through lump-sum prepayment.
      </p>
    </div>
  )
}
