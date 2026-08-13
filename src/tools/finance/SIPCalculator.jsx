import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => n.toLocaleString('en-IN', { maximumFractionDigits: 0 })

export default function SIPCalculator() {
  const [monthly, setMonthly] = useState(5000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(15)

  const { maturity, invested, gains } = useMemo(() => {
    const M = Number(monthly) || 0
    const r = (Number(rate) || 0) / 12 / 100
    const n = (Number(years) || 0) * 12
    if (!M || !n) return { maturity: 0, invested: 0, gains: 0 }
    const fv = r === 0 ? M * n : M * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
    const inv = M * n
    return { maturity: fv, invested: inv, gains: fv - inv }
  }, [monthly, rate, years])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Monthly investment" value={monthly} onChange={setMonthly} suffix="₹" />
        <NumberField label="Expected return (p.a.)" value={rate} onChange={setRate} suffix="%" step="0.1" />
        <NumberField label="Duration" value={years} onChange={setYears} suffix="years" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Maturity value" value={`₹${inr(maturity)}`} emphasis />
        <ResultStat label="Amount invested" value={`₹${inr(invested)}`} />
        <ResultStat label="Wealth gained" value={`₹${inr(gains)}`} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Assumes a constant monthly return compounded monthly — real mutual fund returns vary year to year and are not guaranteed.
      </p>
    </div>
  )
}
