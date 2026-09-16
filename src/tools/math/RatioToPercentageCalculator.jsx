import { useState, useId } from 'react'

export default function RatioToPercentageCalculator() {
  const [partA, setPartA] = useState(3)
  const [partB, setPartB] = useState(5)

  const aId = useId()
  const bId = useId()

  const calculateRatioPercentage = () => {
    const a = Number(partA) || 0
    const b = Number(partB) || 0
    const total = a + b

    if (total <= 0) return { pctA: '0.00', pctB: '0.00', total: 0 }

    const pctA = ((a / total) * 100).toFixed(2)
    const pctB = ((b / total) * 100).toFixed(2)

    return { pctA, pctB, total }
  }

  const result = calculateRatioPercentage()

  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={aId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            First Ratio Part (A)
          </label>
          <input
            id={aId}
            type="number"
            value={partA}
            onChange={(e) => setPartA(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          />
        </div>

        <div>
          <label htmlFor={bId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Second Ratio Part (B)
          </label>
          <input
            id={bId}
            type="number"
            value={partB}
            onChange={(e) => setPartB(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-paper p-6 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-ink border-b border-line pb-2">
          Ratio {partA} : {partB} Percentage Breakdown
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Part A Percentage ({partA} out of {result.total})</span>
            <strong className="text-2xl font-bold text-saffron">{result.pctA}%</strong>
          </div>

          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Part B Percentage ({partB} out of {result.total})</span>
            <strong className="text-2xl font-bold text-signal">{result.pctB}%</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
