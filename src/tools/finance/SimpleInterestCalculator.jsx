import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function SimpleInterestCalculator() {
  const [principal, setPrincipal] = useState(100000)
  const [rate, setRate] = useState(7.5)
  const [years, setYears] = useState(5)

  const { interest, total } = useMemo(() => {
    const P = Number(principal) || 0
    const R = Number(rate) || 0
    const T = Number(years) || 0
    const SI = (P * R * T) / 100
    return { interest: SI, total: P + SI }
  }, [principal, rate, years])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Principal amount" value={principal} onChange={setPrincipal} suffix="₹" />
        <NumberField label="Annual interest rate" value={rate} onChange={setRate} suffix="%" step="0.1" />
        <NumberField label="Time period" value={years} onChange={setYears} suffix="years" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Principal Amount" value={`₹${inr(principal)}`} />
        <ResultStat label="Total Interest" value={`₹${inr(interest)}`} emphasis />
        <ResultStat label="Total Amount" value={`₹${inr(total)}`} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Formula: Simple Interest (SI) = (P × R × T) / 100
      </p>
    </div>
  )
}
