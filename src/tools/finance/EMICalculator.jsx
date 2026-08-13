import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => n.toLocaleString('en-IN', { maximumFractionDigits: 0 })

export default function EMICalculator() {
  const [principal, setPrincipal] = useState(2500000)
  const [rate, setRate] = useState(8.5)
  const [years, setYears] = useState(20)

  const { emi, totalInterest, totalPayment } = useMemo(() => {
    const P = Number(principal) || 0
    const r = (Number(rate) || 0) / 12 / 100
    const n = (Number(years) || 0) * 12
    if (!P || !n) return { emi: 0, totalInterest: 0, totalPayment: 0 }
    const emiVal = r === 0 ? P / n : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const total = emiVal * n
    return { emi: emiVal, totalInterest: total - P, totalPayment: total }
  }, [principal, rate, years])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Loan amount" value={principal} onChange={setPrincipal} suffix="₹" />
        <NumberField label="Interest rate (p.a.)" value={rate} onChange={setRate} suffix="%" step="0.01" />
        <NumberField label="Tenure" value={years} onChange={setYears} suffix="years" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Monthly EMI" value={`₹${inr(emi)}`} emphasis />
        <ResultStat label="Total interest" value={`₹${inr(totalInterest)}`} />
        <ResultStat label="Total payment" value={`₹${inr(totalPayment)}`} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Uses the standard reducing-balance formula: EMI = P × r × (1+r)ⁿ / ((1+r)ⁿ − 1). Estimate only — actual EMI may include processing fees and rounding by your lender.
      </p>
    </div>
  )
}
