import { useState, useId } from 'react'

export default function WaterFastingCalculator() {
  const [currentWeightKg, setCurrentWeightKg] = useState(80)
  const [fastingDays, setFastingDays] = useState(3)
  const [activityLevel, setActivityLevel] = useState('sedentary')

  const weightId = useId()
  const daysId = useId()
  const activityId = useId()

  const calculateFastingWeightLoss = () => {
    const W = Number(currentWeightKg) || 0
    const D = Number(fastingDays) || 0

    let bmrEst = 10 * W + 6.25 * 170 - 5 * 30 + 5
    let mult = 1.2
    if (activityLevel === 'light') mult = 1.375
    if (activityLevel === 'moderate') mult = 1.55

    const dailyBurn = bmrEst * mult
    // 1 kg body fat = ~7,700 kcal
    const totalBurnedKcal = dailyBurn * D
    const estimatedFatLossKg = totalBurnedKcal / 7700
    // Water loss in initial 1-3 days: ~0.5 - 1.5 kg per day
    const estimatedWaterLossKg = Math.min(D * 0.4, 2.5)
    const totalProjectedWeightLossKg = estimatedFatLossKg + estimatedWaterLossKg
    const projectedNewWeightKg = Math.max(30, W - totalProjectedWeightLossKg)

    return {
      totalBurnedKcal: Math.round(totalBurnedKcal),
      estimatedFatLossKg: estimatedFatLossKg.toFixed(2),
      estimatedWaterLossKg: estimatedWaterLossKg.toFixed(2),
      totalProjectedWeightLossKg: totalProjectedWeightLossKg.toFixed(2),
      projectedNewWeightKg: projectedNewWeightKg.toFixed(1)
    }
  }

  const result = calculateFastingWeightLoss()

  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor={weightId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Current Body Weight (kg)
          </label>
          <input
            id={weightId}
            type="number"
            value={currentWeightKg}
            onChange={(e) => setCurrentWeightKg(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          />
        </div>

        <div>
          <label htmlFor={daysId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Fasting Duration (Days)
          </label>
          <input
            id={daysId}
            type="number"
            value={fastingDays}
            onChange={(e) => setFastingDays(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          />
        </div>

        <div>
          <label htmlFor={activityId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Daily Activity Level
          </label>
          <select
            id={activityId}
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          >
            <option value="sedentary">Sedentary (Desk job)</option>
            <option value="light">Light Activity (30m walking)</option>
            <option value="moderate">Moderate Exercise</option>
          </select>
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-paper p-6 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-ink border-b border-line pb-2">
          Projected Fasting Weight Loss Summary
        </h3>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Total Calories Consumed Burned</span>
            <strong className="text-xl font-bold text-ink">{result.totalBurnedKcal} kcal</strong>
          </div>

          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Estimated Fat Loss</span>
            <strong className="text-xl font-bold text-saffron">{result.estimatedFatLossKg} kg</strong>
          </div>

          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Projected Body Weight</span>
            <strong className="text-xl font-bold text-signal">{result.projectedNewWeightKg} kg</strong>
          </div>
        </div>

        <p className="text-xs text-ink-soft">
          Includes ~{result.estimatedFatLossKg} kg pure fat loss plus ~{result.estimatedWaterLossKg} kg initial glycogen/water weight reduction.
        </p>
      </div>
    </div>
  )
}
