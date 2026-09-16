import { useState, useId } from 'react'

export default function COGSCalculator() {
  const [beginningInventory, setBeginningInventory] = useState(50000)
  const [purchases, setPurchases] = useState(120000)
  const [directLabor, setDirectLabor] = useState(30000)
  const [endingInventory, setEndingInventory] = useState(40000)

  const begId = useId()
  const purId = useId()
  const labId = useId()
  const endId = useId()

  const calculateCOGS = () => {
    const beg = Number(beginningInventory) || 0
    const pur = Number(purchases) || 0
    const lab = Number(directLabor) || 0
    const end = Number(endingInventory) || 0

    const totalGoodsAvailable = beg + pur + lab
    const cogs = Math.max(0, totalGoodsAvailable - end)

    return { totalGoodsAvailable, cogs }
  }

  const result = calculateCOGS()

  const fmt = (v) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(v)

  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={begId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Beginning Inventory (₹)
          </label>
          <input
            id={begId}
            type="number"
            value={beginningInventory}
            onChange={(e) => setBeginningInventory(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          />
        </div>

        <div>
          <label htmlFor={purId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Inventory Purchases (₹)
          </label>
          <input
            id={purId}
            type="number"
            value={purchases}
            onChange={(e) => setPurchases(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          />
        </div>

        <div>
          <label htmlFor={labId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Direct Labor & Freight Costs (₹)
          </label>
          <input
            id={labId}
            type="number"
            value={directLabor}
            onChange={(e) => setDirectLabor(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          />
        </div>

        <div>
          <label htmlFor={endId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Ending Inventory (₹)
          </label>
          <input
            id={endId}
            type="number"
            value={endingInventory}
            onChange={(e) => setEndingInventory(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-paper p-6 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-ink border-b border-line pb-2">
          Cost of Goods Sold (COGS) Breakdown
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Total Goods Available for Sale</span>
            <strong className="text-xl font-bold text-ink">{fmt(result.totalGoodsAvailable)}</strong>
          </div>

          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Cost of Goods Sold (COGS)</span>
            <strong className="text-2xl font-bold text-signal">{fmt(result.cogs)}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
