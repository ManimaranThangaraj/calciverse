import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

export default function BodyFatCalculator() {
  const [gender, setGender] = useState('male')
  const [heightCm, setHeightCm] = useState(175)
  const [neckCm, setNeckCm] = useState(38)
  const [waistCm, setWaistCm] = useState(85)
  const [hipCm, setHipCm] = useState(95) // female

  const { bodyFatPct, category } = useMemo(() => {
    const h = Number(heightCm) || 0
    const n = Number(neckCm) || 0
    const w = Number(waistCm) || 0
    const hp = Number(hipCm) || 0

    if (!h || !n || !w) return { bodyFatPct: 0, category: 'Invalid' }

    let fatPct = 0
    if (gender === 'male') {
      // US Navy Male Formula: 495 / (1.0324 - 0.19077 * log10(waist - neck) + 0.15456 * log10(height)) - 450
      const diff = w - n
      if (diff <= 0) return { bodyFatPct: 0, category: 'Invalid measurements' }
      fatPct = 495 / (1.0324 - 0.19077 * Math.log10(diff) + 0.15456 * Math.log10(h)) - 450
    } else {
      // US Navy Female Formula: 495 / (1.29579 - 0.35004 * log10(waist + hip - neck) + 0.22100 * log10(height)) - 450
      const sum = w + hp - n
      if (sum <= 0) return { bodyFatPct: 0, category: 'Invalid measurements' }
      fatPct = 495 / (1.29579 - 0.35004 * Math.log10(sum) + 0.22100 * Math.log10(h)) - 450
    }

    fatPct = Math.max(2, Math.min(60, fatPct))

    let cat = 'Average'
    if (gender === 'male') {
      if (fatPct < 6) cat = 'Essential Fat'
      else if (fatPct <= 13) cat = 'Athletic'
      else if (fatPct <= 17) cat = 'Fitness'
      else if (fatPct <= 24) cat = 'Average'
      else cat = 'Obese'
    } else {
      if (fatPct < 14) cat = 'Essential Fat'
      else if (fatPct <= 20) cat = 'Athletic'
      else if (fatPct <= 24) cat = 'Fitness'
      else if (fatPct <= 31) cat = 'Average'
      else cat = 'Obese'
    }

    return { bodyFatPct: fatPct, category: cat }
  }, [gender, heightCm, neckCm, waistCm, hipCm])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SelectField label="Gender" value={gender} onChange={setGender} options={[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]} />
        <NumberField label="Height" value={heightCm} onChange={setHeightCm} suffix="cm" />
        <NumberField label="Neck Circumference" value={neckCm} onChange={setNeckCm} suffix="cm" step="0.5" />
        <NumberField label="Waist Circumference" value={waistCm} onChange={setWaistCm} suffix="cm" step="0.5" />
        {gender === 'female' && (
          <NumberField label="Hip Circumference" value={hipCm} onChange={setHipCm} suffix="cm" step="0.5" />
        )}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Estimated Body Fat %" value={`${bodyFatPct.toFixed(1)}%`} emphasis />
        <ResultStat label="Fitness Category" value={category} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Uses the US Navy Method based on body tape measurements.
      </p>
    </div>
  )
}
