import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

export default function LeanBodyMassCalculator() {
  const [gender, setGender] = useState('male')
  const [weightKg, setWeightKg] = useState(70)
  const [heightCm, setHeightCm] = useState(175)

  const { boer, james, hume, avgLBM, fatMass, bodyFatPct } = useMemo(() => {
    const W = Number(weightKg) || 0
    const H = Number(heightCm) || 0

    if (W <= 0 || H <= 0) {
      return { boer: '0', james: '0', hume: '0', avgLBM: '0', fatMass: '0', bodyFatPct: '0' }
    }

    let b = 0
    let j = 0
    let hu = 0

    if (gender === 'male') {
      b = 0.407 * W + 0.267 * H - 19.2
      j = 1.1 * W - 128 * Math.pow(W / H, 2)
      hu = 0.3281 * W + 0.33929 * H - 29.5336
    } else {
      b = 0.252 * W + 0.473 * H - 48.3
      j = 1.07 * W - 148 * Math.pow(W / H, 2)
      hu = 0.29569 * W + 0.41813 * H - 43.2933
    }

    b = Math.max(0, b)
    j = Math.max(0, j)
    hu = Math.max(0, hu)

    const avg = (b + j + hu) / 3
    const fat = Math.max(0, W - avg)
    const fatPct = W > 0 ? (fat / W) * 100 : 0

    return {
      boer: b.toFixed(1),
      james: j.toFixed(1),
      hume: hu.toFixed(1),
      avgLBM: avg.toFixed(1),
      fatMass: fat.toFixed(1),
      bodyFatPct: fatPct.toFixed(1)
    }
  }, [gender, weightKg, heightCm])

  const summaryText = `Gender: ${gender === 'male' ? 'Male' : 'Female'}, Weight: ${weightKg} kg, Height: ${heightCm} cm\nAverage Lean Body Mass: ${avgLBM} kg\nEstimated Fat Mass: ${fatMass} kg (${bodyFatPct}% Body Fat)`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <SelectField
          label="Gender"
          value={gender}
          onChange={setGender}
          options={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' }
          ]}
        />
        <NumberField label="Body Weight" value={weightKg} onChange={setWeightKg} suffix="kg" />
        <NumberField label="Height" value={heightCm} onChange={setHeightCm} suffix="cm" />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Average Lean Mass" value={`${avgLBM} kg`} emphasis />
        <ResultStat label="Estimated Fat Mass" value={`${fatMass} kg`} />
        <ResultStat label="Body Fat Percentage" value={`${bodyFatPct}%`} />
      </div>

      <div className="mt-6 rounded-xl border border-line bg-paper-raised p-5 shadow-sm space-y-2">
        <h4 className="font-display text-sm font-semibold text-ink mb-2">Clinical Formula Breakdown</h4>
        <div className="grid grid-cols-3 gap-2 text-xs font-mono text-ink-soft">
          <div className="rounded-lg bg-paper border border-line p-2.5">
            <span className="block text-ink-soft/70 font-sans text-[11px]">Boer Formula</span>
            <strong className="text-ink text-sm">{boer} kg</strong>
          </div>
          <div className="rounded-lg bg-paper border border-line p-2.5">
            <span className="block text-ink-soft/70 font-sans text-[11px]">James Formula</span>
            <strong className="text-ink text-sm">{james} kg</strong>
          </div>
          <div className="rounded-lg bg-paper border border-line p-2.5">
            <span className="block text-ink-soft/70 font-sans text-[11px]">Hume Formula</span>
            <strong className="text-ink text-sm">{hume} kg</strong>
          </div>
        </div>
      </div>

      <ToolActions
        toolName="Lean Body Mass (LBM) Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/lean-body-mass-calculator"
      />
    </div>
  )
}
