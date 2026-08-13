import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function InflationCalculator() {
  const [currentAmount, setCurrentAmount] = useState(100000)
  const [rate, setRate] = useState(6)
  const [years, setYears] = useState(10)

  const { futureCost, purchasingPower } = useMemo(() => {
    const P = Number(currentAmount) || 0
    const r = (Number(rate) || 0) / 100
    const t = Number(years) || 0
    const future = P * Math.pow(1 + r, t)
    const power = P / Math.pow(1 + r, t)
    return { futureCost: future, purchasingPower: power }
  }, [currentAmount, rate, years])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Current Amount / Cost" value={currentAmount} onChange={setCurrentAmount} suffix="₹" step={10000} />
        <NumberField label="Average annual inflation rate" value={rate} onChange={setRate} suffix="%" step="0.5" />
        <NumberField label="Time horizon" value={years} onChange={setYears} suffix="years" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label={`Equivalent Cost in ${years} Years`} value={`₹${inr(futureCost)}`} emphasis />
        <ResultStat label={`Purchasing Power of ₹${inr(currentAmount)} in ${years} Years`} value={`₹${inr(purchasingPower)}`} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Shows how inflation reduces the purchasing power of your money and increases future cost of living.
      </p>
    </div>
  )
}
