import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

export default function CaloriesBurnedCalculator() {
  const [activity, setActivity] = useState('walking')
  const [weightKg, setWeightKg] = useState(70)
  const [durationMins, setDurationMins] = useState(45)

  const { caloriesBurned, metValue } = useMemo(() => {
    const w = Number(weightKg) || 0
    const mins = Number(durationMins) || 0

    const metMap = {
      walking: 3.8, // 3.5 mph brisk walk
      running: 9.8, // 6 mph run
      cycling: 7.5, // moderate cycling
      swimming: 8.0, // laps
      weightlifting: 5.0, // vigorous strength
      yoga: 3.3,
      jumping_rope: 11.8,
    }

    const met = metMap[activity] || 3.8
    // Formula: Calories = MET * weight (kg) * duration (hours)
    const cal = met * w * (mins / 60)

    return { caloriesBurned: cal, metValue: met }
  }, [activity, weightKg, durationMins])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <SelectField
          label="Physical Activity"
          value={activity}
          onChange={setActivity}
          options={[
            { label: 'Brisk Walking (3.5 mph)', value: 'walking' },
            { label: 'Jogging / Running (6 mph)', value: 'running' },
            { label: 'Bicycle Riding (Moderate)', value: 'cycling' },
            { label: 'Swimming (Laps)', value: 'swimming' },
            { label: 'Weight Training (Vigorous)', value: 'weightlifting' },
            { label: 'Yoga / Pilates', value: 'yoga' },
            { label: 'Jump Rope / Skipping', value: 'jumping_rope' },
          ]}
        />
        <NumberField label="Body Weight" value={weightKg} onChange={setWeightKg} suffix="kg" step="0.5" />
        <NumberField label="Duration" value={durationMins} onChange={setDurationMins} suffix="minutes" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Activity MET Value" value={`${metValue} METs`} />
        <ResultStat label="Total Calories Burned" value={`${caloriesBurned.toFixed(0)} kcal`} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Formula: Calories Burned = MET × Weight (kg) × Duration (hours).
      </p>
    </div>
  )
}
