import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState(2500)
  const [discountPercent, setDiscountPercent] = useState(20)

  const { savings, finalPrice } = useMemo(() => {
    const price = Number(originalPrice) || 0
    const pct = Number(discountPercent) || 0
    const save = (price * pct) / 100
    const finalP = price - save
    return { savings: save, finalPrice: finalP }
  }, [originalPrice, discountPercent])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Original Item Price" value={originalPrice} onChange={setOriginalPrice} suffix="₹" step={100} />
        <NumberField label="Discount Percentage" value={discountPercent} onChange={setDiscountPercent} suffix="%" step="1" max={100} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Amount Saved" value={`₹${inr(savings)}`} />
        <ResultStat label="Final Price After Discount" value={`₹${inr(finalPrice)}`} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Formula: Final Price = Original Price − (Original Price × Discount%).
      </p>
    </div>
  )
}
