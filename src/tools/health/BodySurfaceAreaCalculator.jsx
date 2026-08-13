import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

export default function BodySurfaceAreaCalculator() {
  const [height, setHeight] = useState(170)
  const [weight, setWeight] = useState(70)

  const stats = useMemo(() => {
    const h = Number(height) || 0
    const w = Number(weight) || 0

    if (h <= 0 || w <= 0) {
      return { mosteller: '0.00 m²', duBois: '0.00 m²' }
    }

    // Mosteller formula: sqrt((height_cm * weight_kg) / 3600)
    const bsaMosteller = Math.sqrt((h * w) / 3600)
    // Du Bois formula: 0.007184 * weight^0.425 * height^0.725
    const bsaDuBois = 0.007184 * Math.pow(w, 0.425) * Math.pow(h, 0.725)

    return {
      mosteller: `${bsaMosteller.toFixed(2)} m²`,
      duBois: `${bsaDuBois.toFixed(2)} m²`,
    }
  }, [height, weight])

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Height (cm)" value={height} onChange={setHeight} suffix="cm" min={50} max={250} />
        <NumberField label="Weight (kg)" value={weight} onChange={setWeight} suffix="kg" min={20} max={300} />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <ResultStat label="BSA (Mosteller Formula)" value={stats.mosteller} emphasis />
        <ResultStat label="BSA (Du Bois Formula)" value={stats.duBois} />
      </div>
      <p className="text-xs text-ink-soft/60">
        Body Surface Area (BSA) is widely used in medicine to calculate precise clinical dosages and metabolic rates.
      </p>
    </div>
  )
}
