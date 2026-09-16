import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

export default function MacroRatioSplitCalculator() {
  const [dailyCalories, setDailyCalories] = useState(2000)
  const [dietType, setDietType] = useState('balanced')

  const { proteinGrams, carbsGrams, fatGrams, pPct, cPct, fPct } = useMemo(() => {
    const cal = Number(dailyCalories) || 0
    if (cal <= 0) return { proteinGrams: 0, carbsGrams: 0, fatGrams: 0, pPct: 0, cPct: 0, fPct: 0 }

    let pRatio = 0.3
    let cRatio = 0.4
    let fRatio = 0.3

    if (dietType === 'keto') {
      pRatio = 0.2
      cRatio = 0.05
      fRatio = 0.75
    } else if (dietType === 'lowcarb') {
      pRatio = 0.35
      cRatio = 0.2
      fRatio = 0.45
    } else if (dietType === 'highprotein') {
      pRatio = 0.4
      cRatio = 0.35
      fRatio = 0.25
    }

    // Protein: 4 kcal/g, Carbs: 4 kcal/g, Fat: 9 kcal/g
    const pGrams = Math.round((cal * pRatio) / 4)
    const cGrams = Math.round((cal * cRatio) / 4)
    const fGrams = Math.round((cal * fRatio) / 9)

    return {
      proteinGrams: pGrams,
      carbsGrams: cGrams,
      fatGrams: fGrams,
      pPct: Math.round(pRatio * 100),
      cPct: Math.round(cRatio * 100),
      fPct: Math.round(fRatio * 100)
    }
  }, [dailyCalories, dietType])

  const summaryText = `Daily Calories: ${dailyCalories} kcal (${dietType.toUpperCase()} Diet)\nProtein: ${proteinGrams}g (${pPct}%)\nCarbs: ${carbsGrams}g (${cPct}%)\nFat: ${fatGrams}g (${fPct}%)`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Daily Calorie Goal" value={dailyCalories} onChange={setDailyCalories} suffix="kcal" />
        <SelectField
          label="Diet Ratio Style"
          value={dietType}
          onChange={setDietType}
          options={[
            { label: 'Balanced (30P / 40C / 30F)', value: 'balanced' },
            { label: 'Ketogenic (20P / 5C / 75F)', value: 'keto' },
            { label: 'Low-Carb (35P / 20C / 45F)', value: 'lowcarb' },
            { label: 'High Protein / Muscle (40P / 35C / 25F)', value: 'highprotein' }
          ]}
        />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label={`Protein (${pPct}%)`} value={`${proteinGrams} g`} emphasis />
        <ResultStat label={`Carbohydrates (${cPct}%)`} value={`${carbsGrams} g`} />
        <ResultStat label={`Dietary Fats (${fPct}%)`} value={`${fatGrams} g`} />
      </div>

      <ToolActions
        toolName="Keto & Macro Ratio Split Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/macro-ratio-split-calculator"
      />
    </div>
  )
}
