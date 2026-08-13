import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function CAGRCalculator() {
  const [initialValue, setInitialValue] = useState(100000)
  const [finalValue, setFinalValue] = useState(250000)
  const [years, setYears] = useState(5)

  const { cagr, totalGrowth } = useMemo(() => {
    const start = Number(initialValue) || 0
    const end = Number(finalValue) || 0
    const t = Number(years) || 0
    if (start <= 0 || end <= 0 || t <= 0) return { cagr: 0, totalGrowth: 0 }
    const cagrVal = (Math.pow(end / start, 1 / t) - 1) * 100
    const growthVal = ((end - start) / start) * 100
    return { cagr: cagrVal, totalGrowth: growthVal }
  }, [initialValue, finalValue, years])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Initial investment value" value={initialValue} onChange={setInitialValue} suffix="₹" />
        <NumberField label="Final investment value" value={finalValue} onChange={setFinalValue} suffix="₹" />
        <NumberField label="Time duration" value={years} onChange={setYears} suffix="years" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Absolute Gain" value={`₹${inr(finalValue - initialValue)}`} />
        <ResultStat label="Total Return %" value={`${totalGrowth.toFixed(2)}%`} />
        <ResultStat label="CAGR (Annualized)" value={`${cagr.toFixed(2)}%`} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Compound Annual Growth Rate (CAGR) measures the geometric progression ratio that provides a constant rate of return over the time period.
      </p>
    </div>
  )
}
