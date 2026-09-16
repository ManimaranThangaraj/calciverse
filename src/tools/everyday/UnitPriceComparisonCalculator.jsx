import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

export default function UnitPriceComparisonCalculator() {
  const [priceA, setPriceA] = useState(250)
  const [qtyA, setQtyA] = useState(500)
  const [priceB, setPriceB] = useState(420)
  const [qtyB, setQtyB] = useState(1000)

  const { unitPriceA, unitPriceB, betterOption, savingsPct } = useMemo(() => {
    const p1 = Number(priceA) || 0
    const q1 = Number(qtyA) || 0
    const p2 = Number(priceB) || 0
    const q2 = Number(qtyB) || 0

    if (p1 <= 0 || q1 <= 0 || p2 <= 0 || q2 <= 0) {
      return { unitPriceA: '0.00', unitPriceB: '0.00', betterOption: 'N/A', savingsPct: '0.0' }
    }

    const uA = p1 / q1
    const uB = p2 / q2

    let option = 'Item A & B cost the same'
    let diffPct = 0

    if (uA < uB) {
      option = 'Item A is cheaper per unit'
      diffPct = ((uB - uA) / uB) * 100
    } else if (uB < uA) {
      option = 'Item B is cheaper per unit'
      diffPct = ((uA - uB) / uA) * 100
    }

    return {
      unitPriceA: uA.toFixed(4),
      unitPriceB: uB.toFixed(4),
      betterOption: option,
      savingsPct: diffPct.toFixed(1)
    }
  }, [priceA, qtyA, priceB, qtyB])

  const summaryText = `Item A (₹${priceA} / ${qtyA} units): ₹${unitPriceA}/unit\nItem B (₹${priceB} / ${qtyB} units): ₹${unitPriceB}/unit\nBest Value: ${betterOption} (${savingsPct}% savings)`

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-paper-raised p-4 space-y-3">
          <h4 className="font-display text-xs font-bold uppercase tracking-wider text-saffron">Item Option A</h4>
          <NumberField label="Price (₹)" value={priceA} onChange={setPriceA} suffix="₹" />
          <NumberField label="Quantity / Volume" value={qtyA} onChange={setQtyA} suffix="units" />
        </div>

        <div className="rounded-xl border border-line bg-paper-raised p-4 space-y-3">
          <h4 className="font-display text-xs font-bold uppercase tracking-wider text-signal">Item Option B</h4>
          <NumberField label="Price (₹)" value={priceB} onChange={setPriceB} suffix="₹" />
          <NumberField label="Quantity / Volume" value={qtyB} onChange={setQtyB} suffix="units" />
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Best Deal Verdict" value={betterOption} emphasis />
        <ResultStat label="Item A Unit Price" value={`₹${unitPriceA}`} />
        <ResultStat label="Item B Unit Price" value={`₹${unitPriceB}`} />
      </div>

      <ToolActions
        toolName="Unit Price Value Comparison Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/unit-price-comparison-calculator"
      />
    </div>
  )
}
