import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-US')

export default function BMRCalculator() {
  const [gender, setGender] = useState('male')
  const [weightKg, setWeightKg] = useState(70)
  const [heightCm, setHeightCm] = useState(175)
  const [ageYears, setAgeYears] = useState(28)

  const { bmrMifflin, bmrHarris } = useMemo(() => {
    const w = Number(weightKg) || 0
    const h = Number(heightCm) || 0
    const a = Number(ageYears) || 0

    if (!w || !h || !a) return { bmrMifflin: 0, bmrHarris: 0 }

    // Mifflin-St Jeor Equation
    let mifflin = 10 * w + 6.25 * h - 5 * a
    if (gender === 'male') mifflin += 5
    else mifflin -= 161

    // Revised Harris-Benedict Equation
    let harris = 0
    if (gender === 'male') {
      harris = 13.397 * w + 4.799 * h - 5.677 * a + 88.362
    } else {
      harris = 9.247 * w + 3.098 * h - 4.330 * a + 447.593
    }

    return { bmrMifflin: mifflin, bmrHarris: harris }
  }, [gender, weightKg, heightCm, ageYears])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SelectField label="Gender" value={gender} onChange={setGender} options={[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]} />
        <NumberField label="Weight" value={weightKg} onChange={setWeightKg} suffix="kg" step="0.5" />
        <NumberField label="Height" value={heightCm} onChange={setHeightCm} suffix="cm" />
        <NumberField label="Age" value={ageYears} onChange={setAgeYears} suffix="years" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="BMR (Mifflin-St Jeor Formula)" value={`${inr(bmrMifflin)} kcal/day`} emphasis />
        <ResultStat label="BMR (Harris-Benedict Formula)" value={`${inr(bmrHarris)} kcal/day`} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Basal Metabolic Rate (BMR) represents the calories your body burns at complete rest in a 24-hour period.
      </p>
    </div>
  )
}
