import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

export default function QuadraticSolver() {
  const [coeffA, setCoeffA] = useState(1)
  const [coeffB, setCoeffB] = useState(-5)
  const [coeffC, setCoeffC] = useState(6)

  const { discriminant, root1, root2, rootType } = useMemo(() => {
    const a = Number(coeffA) || 0
    const b = Number(coeffB) || 0
    const c = Number(coeffC) || 0

    if (a === 0) return { discriminant: 0, root1: 'Not quadratic (a=0)', root2: 'N/A', rootType: 'Linear Equation' }

    const d = b * b - 4 * a * c

    if (d > 0) {
      const r1 = (-b + Math.sqrt(d)) / (2 * a)
      const r2 = (-b - Math.sqrt(d)) / (2 * a)
      return { discriminant: d, root1: r1.toFixed(4), root2: r2.toFixed(4), rootType: 'Two Real & Distinct Roots' }
    } else if (d === 0) {
      const r = -b / (2 * a)
      return { discriminant: 0, root1: r.toFixed(4), root2: r.toFixed(4), rootType: 'Two Equal Real Roots' }
    } else {
      const realPart = (-b / (2 * a)).toFixed(4)
      const imagPart = (Math.sqrt(-d) / (2 * a)).toFixed(4)
      return {
        discriminant: d,
        root1: `${realPart} + ${imagPart}i`,
        root2: `${realPart} − ${imagPart}i`,
        rootType: 'Two Complex Conjugate Roots',
      }
    }
  }, [coeffA, coeffB, coeffC])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Coefficient a (x²)" value={coeffA} onChange={setCoeffA} step="any" />
        <NumberField label="Coefficient b (x)" value={coeffB} onChange={setCoeffB} step="any" />
        <NumberField label="Constant c" value={coeffC} onChange={setCoeffC} step="any" />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Discriminant (b² − 4ac)" value={discriminant} />
        <ResultStat label="Root 1 (x₁)" value={root1} emphasis />
        <ResultStat label="Root 2 (x₂)" value={root2} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Solves equation of form ax² + bx + c = 0 using quadratic formula x = (−b ± √(b² − 4ac)) / (2a).
      </p>
    </div>
  )
}
