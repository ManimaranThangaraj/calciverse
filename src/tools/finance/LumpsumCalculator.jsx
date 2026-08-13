import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function LumpsumCalculator() {
  const [investment, setInvestment] = useState(100000)
  const [returnRate, setReturnRate] = useState(12)
  const [years, setYears] = useState(10)

  const { profit, total } = useMemo(() => {
    const P = Number(investment) || 0
    const r = (Number(returnRate) || 0) / 100
    const t = Number(years) || 0
    const A = P * Math.pow(1 + r, t)
    return { profit: A - P, total: A }
  }, [investment, returnRate, years])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Total investment" value={investment} onChange={setInvestment} suffix="₹" step={10000} />
        <NumberField label="Expected return (p.a.)" value={returnRate} onChange={setReturnRate} suffix="%" step="0.5" />
        <NumberField label="Time period" value={years} onChange={setYears} suffix="years" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Invested Amount" value={`₹${inr(investment)}`} />
        <ResultStat label="Estimated Gain" value={`₹${inr(profit)}`} />
        <ResultStat label="Total Future Value" value={`₹${inr(total)}`} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Formula: Future Value = Initial Investment × (1 + Rate)^Years.
      </p>
    </div>
  )
}
