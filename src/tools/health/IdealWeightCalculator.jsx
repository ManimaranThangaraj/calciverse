import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

export default function IdealWeightCalculator() {
  const [gender, setGender] = useState('male')
  const [heightCm, setHeightCm] = useState(175)

  const { devine, robinson, miller, bmiRange } = useMemo(() => {
    const h = Number(heightCm) || 0
    if (h < 130) return { devine: 0, robinson: 0, miller: 0, bmiRange: '0 - 0' }

    const inchesOver5ft = (h - 152.4) / 2.54

    let devineVal = 0, robinsonVal = 0, millerVal = 0

    if (gender === 'male') {
      devineVal = 50 + 2.3 * inchesOver5ft
      robinsonVal = 52 + 1.9 * inchesOver5ft
      millerVal = 56.2 + 1.41 * inchesOver5ft
    } else {
      devineVal = 45.5 + 2.3 * inchesOver5ft
      robinsonVal = 49 + 1.7 * inchesOver5ft
      millerVal = 53.1 + 1.36 * inchesOver5ft
    }

    // WHO BMI normal weight bounds (18.5 to 24.9)
    const heightM = h / 100
    const minBmiWeight = 18.5 * heightM * heightM
    const maxBmiWeight = 24.9 * heightM * heightM

    return {
      devine: Math.max(0, devineVal),
      robinson: Math.max(0, robinsonVal),
      miller: Math.max(0, millerVal),
      bmiRange: `${minBmiWeight.toFixed(1)} kg – ${maxBmiWeight.toFixed(1)} kg`,
    }
  }, [gender, heightCm])

  const getTextSummary = () =>
    `Ideal Body Weight Summary:\n` +
    `• Gender: ${gender === 'male' ? 'Male' : 'Female'}\n` +
    `• Height: ${heightCm} cm\n` +
    `• WHO Healthy BMI Weight Range: ${bmiRange}\n` +
    `• Devine Formula Target: ${devine.toFixed(1)} kg\n` +
    `• Robinson Formula Target: ${robinson.toFixed(1)} kg\n` +
    `• Miller Formula Target: ${miller.toFixed(1)} kg\n\n` +
    `Calculated on Calciverse: ${window.location.href}`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField label="Gender" value={gender} onChange={setGender} options={[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]} />
        <NumberField label="Height" value={heightCm} onChange={setHeightCm} suffix="cm" />
      </div>

      <ToolActions
        title="Ideal Weight Summary"
        getTextSummary={getTextSummary}
        onDownloadPDF={getTextSummary}
      />

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <ResultStat label="WHO Healthy BMI Range" value={bmiRange} emphasis />
        <ResultStat label="Devine Formula" value={`${devine.toFixed(1)} kg`} />
        <ResultStat label="Robinson Formula" value={`${robinson.toFixed(1)} kg`} />
        <ResultStat label="Miller Formula" value={`${miller.toFixed(1)} kg`} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Estimates healthy body weight based on medical algorithms established by Dr. Devine, Dr. Robinson, and Dr. Miller.
      </p>
    </div>
  )
}

