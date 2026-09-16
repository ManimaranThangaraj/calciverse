import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

export default function RatioToPercentageCalculator() {
  const [partA, setPartA] = useState(3)
  const [partB, setPartB] = useState(5)

  const { pctA, pctB, total } = useMemo(() => {
    const a = Number(partA) || 0
    const b = Number(partB) || 0
    const tot = a + b

    if (tot <= 0) return { pctA: '0.00', pctB: '0.00', total: 0 }

    const pA = ((a / tot) * 100).toFixed(2)
    const pB = ((b / tot) * 100).toFixed(2)

    return { pctA: pA, pctB: pB, total: tot }
  }, [partA, partB])

  const summaryText = `Ratio ${partA} : ${partB} (Total Parts: ${total})\nPart A: ${pctA}%\nPart B: ${pctB}%`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="First Ratio Part (A)" value={partA} onChange={setPartA} />
        <NumberField label="Second Ratio Part (B)" value={partB} onChange={setPartB} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label={`Part A Share (${partA}/${total})`} value={`${pctA}%`} emphasis />
        <ResultStat label={`Part B Share (${partB}/${total})`} value={`${pctB}%`} />
      </div>

      <div className="mt-6 rounded-xl border border-line bg-paper-raised p-5 shadow-sm space-y-2">
        <div className="flex justify-between text-xs font-semibold mb-1">
          <span className="text-saffron">Part A ({pctA}%)</span>
          <span className="text-signal">Part B ({pctB}%)</span>
        </div>
        <div className="flex h-3.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div style={{ width: `${pctA}%` }} className="bg-saffron transition-all duration-500" title="Part A" />
          <div style={{ width: `${pctB}%` }} className="bg-signal transition-all duration-500" title="Part B" />
        </div>
      </div>

      <ToolActions
        toolName="Ratio to Percentage Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/ratio-to-percentage-calculator"
      />
    </div>
  )
}
