import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

const inr = (n) => n.toLocaleString('en-IN', { maximumFractionDigits: 0 })

export default function COGSCalculator() {
  const [beginningInventory, setBeginningInventory] = useState(50000)
  const [purchases, setPurchases] = useState(120000)
  const [directLabor, setDirectLabor] = useState(30000)
  const [endingInventory, setEndingInventory] = useState(40000)

  const { totalGoodsAvailable, cogs } = useMemo(() => {
    const beg = Number(beginningInventory) || 0
    const pur = Number(purchases) || 0
    const lab = Number(directLabor) || 0
    const end = Number(endingInventory) || 0

    const totAvailable = beg + pur + lab
    const cogsVal = Math.max(0, totAvailable - end)

    return { totalGoodsAvailable: totAvailable, cogs: cogsVal }
  }, [beginningInventory, purchases, directLabor, endingInventory])

  const summaryText = `Beginning Inventory: ₹${inr(beginningInventory)}\nPurchases: ₹${inr(purchases)}\nDirect Labor/Freight: ₹${inr(directLabor)}\nEnding Inventory: ₹${inr(endingInventory)}\nCost of Goods Sold (COGS): ₹${inr(cogs)}`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="Beginning Inventory" value={beginningInventory} onChange={setBeginningInventory} suffix="₹" />
        <NumberField label="Inventory Purchases" value={purchases} onChange={setPurchases} suffix="₹" />
        <NumberField label="Direct Labor & Freight" value={directLabor} onChange={setDirectLabor} suffix="₹" />
        <NumberField label="Ending Inventory" value={endingInventory} onChange={setEndingInventory} suffix="₹" />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Cost of Goods Sold (COGS)" value={`₹${inr(cogs)}`} emphasis />
        <ResultStat label="Total Goods Available for Sale" value={`₹${inr(totalGoodsAvailable)}`} />
      </div>

      <ToolActions
        toolName="Cost of Goods Sold (COGS) Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/cogs-calculator"
      />
    </div>
  )
}
