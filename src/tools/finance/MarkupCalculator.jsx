import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function MarkupCalculator() {
  const [costPrice, setCostPrice] = useState(1500)
  const [markupPercent, setMarkupPercent] = useState(35)

  const { sellingPrice, profitAmount, marginPercent } = useMemo(() => {
    const cost = Number(costPrice) || 0
    const markup = Number(markupPercent) || 0
    const profit = (cost * markup) / 100
    const sell = cost + profit
    const margin = sell > 0 ? (profit / sell) * 100 : 0

    return { sellingPrice: sell, profitAmount: profit, marginPercent: margin }
  }, [costPrice, markupPercent])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Cost Price per Unit" value={costPrice} onChange={setCostPrice} suffix="₹" step={100} />
        <NumberField label="Desired Markup Percentage" value={markupPercent} onChange={setMarkupPercent} suffix="%" step="1" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Profit Amount" value={`₹${inr(profitAmount)}`} />
        <ResultStat label="Calculated Selling Price" value={`₹${inr(sellingPrice)}`} emphasis />
        <ResultStat label="Equivalent Profit Margin" value={`${marginPercent.toFixed(2)}%`} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Formula: Selling Price = Cost + (Cost × Markup%).
      </p>
    </div>
  )
}
