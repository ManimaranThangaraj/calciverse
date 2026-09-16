import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

export default function WaterFastingCalculator() {
  const [currentWeightKg, setCurrentWeightKg] = useState(80)
  const [fastingDays, setFastingDays] = useState(3)
  const [activityLevel, setActivityLevel] = useState('sedentary')

  const { totalBurnedKcal, estimatedFatLossKg, estimatedWaterLossKg, projectedNewWeightKg } = useMemo(() => {
    const W = Number(currentWeightKg) || 0
    const D = Number(fastingDays) || 0

    const bmrEst = 10 * W + 6.25 * 170 - 5 * 30 + 5
    let mult = 1.2
    if (activityLevel === 'light') mult = 1.375
    if (activityLevel === 'moderate') mult = 1.55

    const dailyBurn = bmrEst * mult
    const totalBurned = dailyBurn * D
    const fatLoss = totalBurned / 7700
    const waterLoss = Math.min(D * 0.4, 2.5)
    const totalLoss = fatLoss + waterLoss
    const newWeight = Math.max(30, W - totalLoss)

    return {
      totalBurnedKcal: Math.round(totalBurned),
      estimatedFatLossKg: fatLoss.toFixed(2),
      estimatedWaterLossKg: waterLoss.toFixed(2),
      projectedNewWeightKg: newWeight.toFixed(1)
    }
  }, [currentWeightKg, fastingDays, activityLevel])

  const summaryText = `Initial Weight: ${currentWeightKg} kg, Fasting Duration: ${fastingDays} days (${activityLevel})\nTotal Energy Deficit: ${totalBurnedKcal} kcal\nEstimated Pure Fat Loss: ${estimatedFatLossKg} kg\nProjected Post-Fast Weight: ${projectedNewWeightKg} kg`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Current Weight" value={currentWeightKg} onChange={setCurrentWeightKg} suffix="kg" />
        <NumberField label="Fasting Duration" value={fastingDays} onChange={setFastingDays} suffix="days" />
        <SelectField
          label="Activity Level"
          value={activityLevel}
          onChange={setActivityLevel}
          options={[
            { label: 'Sedentary (Desk Job)', value: 'sedentary' },
            { label: 'Light Activity (Walking)', value: 'light' },
            { label: 'Moderate Exercise', value: 'moderate' }
          ]}
        />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Projected Body Weight" value={`${projectedNewWeightKg} kg`} emphasis />
        <ResultStat label="Estimated Pure Fat Loss" value={`${estimatedFatLossKg} kg`} />
        <ResultStat label="Total Caloric Deficit" value={`${totalBurnedKcal} kcal`} />
      </div>

      <div className="mt-6 rounded-xl border border-line bg-paper-raised p-5 shadow-sm space-y-2">
        <h4 className="font-display text-sm font-semibold text-ink mb-1">Weight Loss Breakdown</h4>
        <p className="text-xs text-ink-soft leading-relaxed">
          Includes <strong className="text-saffron font-mono">{estimatedFatLossKg} kg</strong> pure body fat reduction plus ~<strong className="text-ink font-mono">{estimatedWaterLossKg} kg</strong> initial glycogen and water weight drop.
        </p>
      </div>

      <ToolActions
        toolName="Water Fasting Weight Loss Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/water-fasting-calculator"
      />
    </div>
  )
}
