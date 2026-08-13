import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function ROICalculator() {
  const [invested, setInvested] = useState(500000)
  const [returned, setReturned] = useState(750000)

  const { netProfit, roi } = useMemo(() => {
    const inv = Number(invested) || 0
    const ret = Number(returned) || 0
    const profit = ret - inv
    const roiVal = inv > 0 ? (profit / inv) * 100 : 0
    return { netProfit: profit, roi: roiVal }
  }, [invested, returned])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Total Amount Invested" value={invested} onChange={setInvested} suffix="₹" step={10000} />
        <NumberField label="Total Amount Returned / Final Value" value={returned} onChange={setReturned} suffix="₹" step={10000} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Net Profit / Loss" value={`₹${inr(netProfit)}`} />
        <ResultStat label="Return on Investment (ROI)" value={`${roi.toFixed(2)}%`} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Formula: ROI = ((Total Return - Investment) / Investment) × 100
      </p>
    </div>
  )
}
