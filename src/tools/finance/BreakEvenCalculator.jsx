import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function BreakEvenCalculator() {
  const [fixedCosts, setFixedCosts] = useState(150000)
  const [pricePerUnit, setPricePerUnit] = useState(500)
  const [costPerUnit, setCostPerUnit] = useState(200)

  const { breakEvenUnits, breakEvenRevenue, marginPerUnit } = useMemo(() => {
    const fixed = Number(fixedCosts) || 0
    const price = Number(pricePerUnit) || 0
    const cost = Number(costPerUnit) || 0
    const margin = price - cost

    if (margin <= 0) return { breakEvenUnits: 0, breakEvenRevenue: 0, marginPerUnit: 0 }

    const units = Math.ceil(fixed / margin)
    const revenue = units * price

    return { breakEvenUnits: units, breakEvenRevenue: revenue, marginPerUnit: margin }
  }, [fixedCosts, pricePerUnit, costPerUnit])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Total Fixed Costs (Rent, Salaries, etc.)" value={fixedCosts} onChange={setFixedCosts} suffix="₹" step={10000} />
        <NumberField label="Selling Price per Unit" value={pricePerUnit} onChange={setPricePerUnit} suffix="₹" step={10} />
        <NumberField label="Variable Cost per Unit" value={costPerUnit} onChange={setCostPerUnit} suffix="₹" step={10} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Contribution Margin / Unit" value={`₹${inr(marginPerUnit)}`} />
        <ResultStat label="Break-Even Units to Sell" value={`${inr(breakEvenUnits)} units`} emphasis />
        <ResultStat label="Break-Even Revenue" value={`₹${inr(breakEvenRevenue)}`} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Formula: Break-Even Volume = Fixed Costs / (Price per Unit - Variable Cost per Unit).
      </p>
    </div>
  )
}
