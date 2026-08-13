import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

export default function ExponentCalculator() {
  const [base, setBase] = useState(2)
  const [exponent, setExponent] = useState(10)

  const stats = useMemo(() => {
    const b = Number(base) || 0
    const e = Number(exponent) || 0

    const result = Math.pow(b, e)
    const formatted = Number.isFinite(result)
      ? result > 1e12 || (result < 1e-6 && result !== 0)
        ? result.toExponential(6)
        : result.toLocaleString('en-US', { maximumFractionDigits: 6 })
      : 'Overflow / Infinity'

    return {
      result: formatted,
    }
  }, [base, exponent])

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Base Number (x)" value={base} onChange={setBase} step="any" />
        <NumberField label="Exponent Power (n)" value={exponent} onChange={setExponent} step="any" />
      </div>

      <div className="grid gap-3 sm:grid-cols-1">
        <ResultStat label={`Result of (${base})^(${exponent})`} value={stats.result} emphasis />
      </div>
    </div>
  )
}
