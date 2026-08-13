import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

const ACTIVITY = [
  { value: 0, label: 'Low activity' },
  { value: 350, label: 'Moderate exercise' },
  { value: 700, label: 'Intense / long exercise' },
]

export default function WaterIntakeCalculator() {
  const [weight, setWeight] = useState(68)
  const [activity, setActivity] = useState(350)
  const [climate, setClimate] = useState(300)

  const ml = useMemo(() => (Number(weight) || 0) * 35 + Number(activity) + Number(climate), [weight, activity, climate])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Body weight" value={weight} onChange={setWeight} suffix="kg" />
        <SelectField label="Exercise" value={activity} onChange={(v) => setActivity(Number(v))} options={ACTIVITY} />
        <SelectField
          label="Climate"
          value={climate}
          onChange={(v) => setClimate(Number(v))}
          options={[{ value: 0, label: 'Mild / cool' }, { value: 300, label: 'Warm' }, { value: 600, label: 'Hot / humid' }]}
        />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Daily target" value={`${(ml / 1000).toFixed(1)} L`} emphasis />
        <ResultStat label="≈ Glasses (250ml)" value={Math.round(ml / 250)} />
      </div>
      <p className="mt-4 text-xs text-ink-soft/60">A general planning estimate (weight × 35ml, plus exercise and climate adjustments) — individual needs vary, especially with medical conditions.</p>
    </div>
  )
}
