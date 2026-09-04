import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

function category(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', color: 'text-signal' }
  if (bmi < 25) return { label: 'Normal Weight', color: 'text-emerald-600' }
  if (bmi < 30) return { label: 'Overweight', color: 'text-saffron' }
  return { label: 'Obese', color: 'text-alert' }
}

export default function BMICalculator() {
  const [height, setHeight] = useState(175)
  const [weight, setWeight] = useState(72)

  const { bmi, cat, minWeight, maxWeight } = useMemo(() => {
    const h = (Number(height) || 0) / 100
    const w = Number(weight) || 0
    const b = h ? w / (h * h) : 0
    const minW = h ? (18.5 * h * h).toFixed(1) : 0
    const maxW = h ? (24.9 * h * h).toFixed(1) : 0
    return { bmi: b, cat: category(b), minWeight: minW, maxWeight: maxW }
  }, [height, weight])

  const summaryText = `Height: ${height} cm | Weight: ${weight} kg\nBMI Score: ${bmi.toFixed(1)} (${cat.label})\nHealthy Weight Target Range: ${minWeight} kg - ${maxWeight} kg`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Height" value={height} onChange={setHeight} suffix="cm" />
        <NumberField label="Weight" value={weight} onChange={setWeight} suffix="kg" />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="BMI Score" value={bmi.toFixed(1)} emphasis />
        <div className="rounded-lg bg-paper-raised border border-line px-4 py-3">
          <div className="text-xs font-medium uppercase tracking-wide text-ink-soft">WHO Category</div>
          <div className={`mt-1 text-2xl font-semibold ${cat.color}`}>{cat.label}</div>
          <div className="mt-1 text-xs text-ink-soft">Healthy Range for {height}cm: {minWeight}kg – {maxWeight}kg</div>
        </div>
      </div>

      <ToolActions
        toolName="BMI & Healthy Weight Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/bmi-calculator"
      />

      <p className="mt-4 text-xs text-ink-soft/60">
        BMI is a general screening measure and doesn't account for muscle mass, bone density or fat distribution. Talk to a doctor for a full health assessment.
      </p>
    </div>
  )
}
