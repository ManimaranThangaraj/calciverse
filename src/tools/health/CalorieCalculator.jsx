import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

const ACTIVITY = [
  { value: 1.2, label: 'Sedentary (little/no exercise)' },
  { value: 1.375, label: 'Light (1-3 days/week)' },
  { value: 1.55, label: 'Moderate (3-5 days/week)' },
  { value: 1.725, label: 'Active (6-7 days/week)' },
  { value: 1.9, label: 'Very active (physical job/training)' },
]

export default function CalorieCalculator() {
  const [sex, setSex] = useState('male')
  const [age, setAge] = useState(28)
  const [height, setHeight] = useState(170)
  const [weight, setWeight] = useState(68)
  const [activity, setActivity] = useState(1.55)

  const { bmr, maintain } = useMemo(() => {
    const A = Number(age) || 0, H = Number(height) || 0, W = Number(weight) || 0
    const base = 10 * W + 6.25 * H - 5 * A
    const b = sex === 'male' ? base + 5 : base - 161
    return { bmr: b, maintain: b * Number(activity) }
  }, [sex, age, height, weight, activity])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField label="Sex" value={sex} onChange={setSex} options={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }]} />
        <NumberField label="Age" value={age} onChange={setAge} suffix="years" />
        <NumberField label="Height" value={height} onChange={setHeight} suffix="cm" />
        <NumberField label="Weight" value={weight} onChange={setWeight} suffix="kg" />
      </div>
      <div className="mt-4">
        <SelectField label="Activity level" value={activity} onChange={(v) => setActivity(Number(v))} options={ACTIVITY} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="BMR" value={Math.round(bmr)} />
        <ResultStat label="Maintenance calories" value={`${Math.round(maintain)} kcal`} emphasis />
        <ResultStat label="For mild fat loss" value={`${Math.round(maintain - 500)} kcal`} />
      </div>
      <p className="mt-4 text-xs text-ink-soft/60">Uses the Mifflin-St Jeor equation. A ~500 kcal daily deficit is a commonly used starting point for gradual weight loss — check with a doctor before large or sustained changes.</p>
    </div>
  )
}
