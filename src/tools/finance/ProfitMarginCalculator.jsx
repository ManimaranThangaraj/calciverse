import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function ProfitMarginCalculator() {
  const [costPrice, setCostPrice] = useState(800)
  const [sellingPrice, setSellingPrice] = useState(1200)

  const { grossProfit, marginPercent, markupPercent } = useMemo(() => {
    const cost = Number(costPrice) || 0
    const sell = Number(sellingPrice) || 0
    const profit = sell - cost
    const margin = sell > 0 ? (profit / sell) * 100 : 0
    const markup = cost > 0 ? (profit / cost) * 100 : 0

    return { grossProfit: profit, marginPercent: margin, markupPercent: markup }
  }, [costPrice, sellingPrice])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Cost Price per Unit" value={costPrice} onChange={setCostPrice} suffix="₹" step={50} />
        <NumberField label="Selling Price per Unit" value={sellingPrice} onChange={setSellingPrice} suffix="₹" step={50} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Gross Profit per Unit" value={`₹${inr(grossProfit)}`} />
        <ResultStat label="Profit Margin %" value={`${marginPercent.toFixed(2)}%`} emphasis />
        <ResultStat label="Markup %" value={`${markupPercent.toFixed(2)}%`} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Profit Margin = (Profit / Revenue) × 100. Markup = (Profit / Cost) × 100.
      </p>
    </div>
  )
}
