import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

export default function WaistHipRatioCalculator() {
  const [gender, setGender] = useState('male')
  const [waistCm, setWaistCm] = useState(82)
  const [hipCm, setHipCm] = useState(96)

  const { ratio, riskLevel } = useMemo(() => {
    const w = Number(waistCm) || 0
    const h = Number(hipCm) || 0
    if (!w || !h) return { ratio: 0, riskLevel: 'Invalid' }

    const whr = w / h

    let risk = 'Low Risk'
    if (gender === 'male') {
      if (whr > 1.0) risk = 'High Risk'
      else if (whr > 0.90) risk = 'Moderate Risk'
    } else {
      if (whr > 0.85) risk = 'High Risk'
      else if (whr > 0.80) risk = 'Moderate Risk'
    }

    return { ratio: whr, riskLevel: risk }
  }, [gender, waistCm, hipCm])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <SelectField label="Gender" value={gender} onChange={setGender} options={[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]} />
        <NumberField label="Waist Circumference" value={waistCm} onChange={setWaistCm} suffix="cm" step="0.5" />
        <NumberField label="Hip Circumference" value={hipCm} onChange={setHipCm} suffix="cm" step="0.5" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Waist-to-Hip Ratio (WHR)" value={ratio.toFixed(2)} emphasis />
        <ResultStat label="Health Risk Category (WHO)" value={riskLevel} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        According to WHO guidelines, WHR above 0.90 for men and 0.85 for women indicates abdominal obesity and higher cardiovascular risk.
      </p>
    </div>
  )
}
