import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

export default function MacroCalculator() {
  const [dailyCalories, setDailyCalories] = useState(2200)
  const [fitnessGoal, setFitnessGoal] = useState('maintenance') // loss, maintenance, muscle

  const { proteinGrams, carbGrams, fatGrams } = useMemo(() => {
    const cal = Number(dailyCalories) || 0
    if (!cal) return { proteinGrams: 0, carbGrams: 0, fatGrams: 0 }

    let pPct = 0.30, cPct = 0.40, fPct = 0.30

    if (fitnessGoal === 'loss') {
      pPct = 0.40; cPct = 0.30; fPct = 0.30 // High protein for satiety
    } else if (fitnessGoal === 'muscle') {
      pPct = 0.30; cPct = 0.50; fPct = 0.20 // Higher carbs for workout energy
    }

    const pGrams = (cal * pPct) / 4
    const cGrams = (cal * cPct) / 4
    const fGrams = (cal * fPct) / 9

    return { proteinGrams: pGrams, carbGrams: cGrams, fatGrams: fGrams }
  }, [dailyCalories, fitnessGoal])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Daily Calorie Target" value={dailyCalories} onChange={setDailyCalories} suffix="kcal" step={50} />
        <SelectField
          label="Primary Goal"
          value={fitnessGoal}
          onChange={setFitnessGoal}
          options={[
            { label: 'Weight Maintenance (40% Carb / 30% Protein / 30% Fat)', value: 'maintenance' },
            { label: 'Fat Loss & Lean Retain (30% Carb / 40% Protein / 30% Fat)', value: 'loss' },
            { label: 'Muscle Gain & Performance (50% Carb / 30% Protein / 20% Fat)', value: 'muscle' },
          ]}
        />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Protein (4 kcal/g)" value={`${proteinGrams.toFixed(0)}g / day`} emphasis />
        <ResultStat label="Carbohydrates (4 kcal/g)" value={`${carbGrams.toFixed(0)}g / day`} />
        <ResultStat label="Fats (9 kcal/g)" value={`${fatGrams.toFixed(0)}g / day`} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Standard macronutrient split based on sports nutrition guidelines.
      </p>
    </div>
  )
}
