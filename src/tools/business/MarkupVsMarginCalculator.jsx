import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

export default function MarkupVsMarginCalculator() {
  const [costPrice, setCostPrice] = useState(1000)
  const [sellingPrice, setSellingPrice] = useState(1500)

  const stats = useMemo(() => {
    const cost = Number(costPrice) || 0
    const sell = Number(sellingPrice) || 0

    const profit = sell - cost
    const markupPct = cost > 0 ? (profit / cost) * 100 : 0
    const marginPct = sell > 0 ? (profit / sell) * 100 : 0

    return {
      profit: `₹${profit.toLocaleString('en-IN')}`,
      markup: `${markupPct.toFixed(2)}%`,
      margin: `${marginPct.toFixed(2)}%`,
    }
  }, [costPrice, sellingPrice])

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Cost Price (COGS)" value={costPrice} onChange={setCostPrice} suffix="₹" />
        <NumberField label="Selling Price" value={sellingPrice} onChange={setSellingPrice} suffix="₹" />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <ResultStat label="Gross Profit" value={stats.profit} emphasis />
        <ResultStat label="Markup Percentage" value={stats.markup} />
        <ResultStat label="Profit Margin Percentage" value={stats.margin} emphasis />
      </div>
      <p className="text-xs text-ink-soft/60">
        Markup is profit as a percentage of cost price. Margin is profit as a percentage of selling price.
      </p>
    </div>
  )
}
