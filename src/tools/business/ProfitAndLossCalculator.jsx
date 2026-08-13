import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

export default function ProfitAndLossCalculator() {
  const [revenue, setRevenue] = useState(500000)
  const [cogs, setCogs] = useState(200000)
  const [opex, setOpex] = useState(120000)
  const [taxRate, setTaxRate] = useState(25)

  const stats = useMemo(() => {
    const rev = Number(revenue) || 0
    const cost = Number(cogs) || 0
    const op = Number(opex) || 0
    const tax = Number(taxRate) || 0

    const grossProfit = rev - cost
    const grossMargin = rev > 0 ? (grossProfit / rev) * 100 : 0
    const operatingProfit = grossProfit - op
    const operatingMargin = rev > 0 ? (operatingProfit / rev) * 100 : 0
    const estimatedTax = operatingProfit > 0 ? (operatingProfit * tax) / 100 : 0
    const netProfit = operatingProfit - estimatedTax
    const netMargin = rev > 0 ? (netProfit / rev) * 100 : 0

    return {
      grossProfit: `₹${grossProfit.toLocaleString('en-IN')}`,
      grossMargin: `${grossMargin.toFixed(1)}%`,
      operatingProfit: `₹${operatingProfit.toLocaleString('en-IN')}`,
      netProfit: `₹${netProfit.toLocaleString('en-IN')}`,
      netMargin: `${netMargin.toFixed(1)}%`,
    }
  }, [revenue, cogs, opex, taxRate])

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Total Revenue (Sales)" value={revenue} onChange={setRevenue} suffix="₹" />
        <NumberField label="Cost of Goods Sold (COGS)" value={cogs} onChange={setCogs} suffix="₹" />
        <NumberField label="Operating Expenses (OPEX)" value={opex} onChange={setOpex} suffix="₹" />
        <NumberField label="Estimated Tax Rate (%)" value={taxRate} onChange={setTaxRate} suffix="%" />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <ResultStat label="Gross Profit" value={stats.grossProfit} />
        <ResultStat label="Gross Margin" value={stats.grossMargin} />
        <ResultStat label="Operating Profit (EBIT)" value={stats.operatingProfit} />
        <ResultStat label="Net Profit (After Tax)" value={stats.netProfit} emphasis />
        <ResultStat label="Net Profit Margin" value={stats.netMargin} emphasis />
      </div>
    </div>
  )
}
