import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

export default function PercentageChangeCalculator() {
  const [initialValue, setInitialValue] = useState(500)
  const [finalValue, setFinalValue] = useState(650)

  const { difference, percentageChange, changeType } = useMemo(() => {
    const v1 = Number(initialValue) || 0
    const v2 = Number(finalValue) || 0
    const diff = v2 - v1
    const pct = v1 !== 0 ? (diff / Math.abs(v1)) * 100 : 0
    const type = diff >= 0 ? 'Increase' : 'Decrease'

    return { difference: diff, percentageChange: Math.abs(pct), changeType: type }
  }, [initialValue, finalValue])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Initial Value (V1)" value={initialValue} onChange={setInitialValue} />
        <NumberField label="Final Value (V2)" value={finalValue} onChange={setFinalValue} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Absolute Difference" value={difference > 0 ? `+${difference}` : `${difference}`} />
        <ResultStat label="Percentage Change" value={`${percentageChange.toFixed(2)}%`} emphasis />
        <ResultStat label="Direction" value={changeType} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Formula: Percentage Change = ((V2 − V1) / |V1|) × 100.
      </p>
    </div>
  )
}
