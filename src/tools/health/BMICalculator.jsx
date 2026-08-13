import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

function category(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', color: 'text-signal' }
  if (bmi < 25) return { label: 'Normal', color: 'text-signal' }
  if (bmi < 30) return { label: 'Overweight', color: 'text-saffron' }
  return { label: 'Obese', color: 'text-alert' }
}

export default function BMICalculator() {
  const [height, setHeight] = useState(175)
  const [weight, setWeight] = useState(72)

  const { bmi, cat } = useMemo(() => {
    const h = (Number(height) || 0) / 100
    const w = Number(weight) || 0
    const b = h ? w / (h * h) : 0
    return { bmi: b, cat: category(b) }
  }, [height, weight])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Height" value={height} onChange={setHeight} suffix="cm" />
        <NumberField label="Weight" value={weight} onChange={setWeight} suffix="kg" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="BMI" value={bmi.toFixed(1)} emphasis />
        <div className="rounded-lg bg-signal-soft px-4 py-3">
          <div className="text-xs font-medium uppercase tracking-wide text-signal">Category</div>
          <div className={`mt-1 text-2xl font-semibold ${cat.color}`}>{cat.label}</div>
        </div>
      </div>
      <p className="mt-4 text-xs text-ink-soft/60">
        BMI is a general screening measure and doesn't account for muscle mass, bone density or fat distribution. Talk to a doctor for a full health assessment.
      </p>
    </div>
  )
}
