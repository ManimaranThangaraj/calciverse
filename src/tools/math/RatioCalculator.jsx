import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}

export default function RatioCalculator() {
  const [valA, setValA] = useState(12)
  const [valB, setValB] = useState(16)
  const [valC, setValC] = useState(30)

  const { simplifiedRatio, missingX } = useMemo(() => {
    const a = Math.abs(Number(valA) || 0)
    const b = Math.abs(Number(valB) || 0)
    const c = Number(valC) || 0

    if (a === 0 || b === 0) return { simplifiedRatio: 'N/A', missingX: 0 }

    const divisor = gcd(a, b)
    const simpleA = a / divisor
    const simpleB = b / divisor

    // A / B = C / X => X = (B * C) / A
    const x = (b * c) / a

    return {
      simplifiedRatio: `${simpleA} : ${simpleB}`,
      missingX: x,
    }
  }, [valA, valB, valC])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Value A" value={valA} onChange={setValA} />
        <NumberField label="Value B" value={valB} onChange={setValB} />
        <NumberField label="Target Value C (Solve A:B = C:X)" value={valC} onChange={setValC} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Simplified Ratio (A : B)" value={simplifiedRatio} emphasis />
        <ResultStat label="Solved Missing Value (X)" value={missingX.toFixed(2)} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Simplifies ratio to lowest terms using Greatest Common Divisor (GCD) and solves proportional cross-multiplication.
      </p>
    </div>
  )
}
