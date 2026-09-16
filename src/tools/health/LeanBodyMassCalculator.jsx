import { useState, useId } from 'react'

export default function LeanBodyMassCalculator() {
  const [gender, setGender] = useState('male')
  const [weightKg, setWeightKg] = useState(70)
  const [heightCm, setHeightCm] = useState(175)

  const genderId = useId()
  const weightId = useId()
  const heightId = useId()

  const calculateLBM = () => {
    const W = Number(weightKg) || 0
    const H = Number(heightCm) || 0

    if (W <= 0 || H <= 0) {
      return { boer: 0, james: 0, hume: 0, fatMass: 0, bodyFatPct: 0 }
    }

    let boer = 0
    let james = 0
    let hume = 0

    if (gender === 'male') {
      boer = 0.407 * W + 0.267 * H - 19.2
      james = 1.1 * W - 128 * Math.pow(W / H, 2)
      hume = 0.3281 * W + 0.33929 * H - 29.5336
    } else {
      boer = 0.252 * W + 0.473 * H - 48.3
      james = 1.07 * W - 148 * Math.pow(W / H, 2)
      hume = 0.29569 * W + 0.41813 * H - 43.2933
    }

    boer = Math.max(0, boer)
    james = Math.max(0, james)
    hume = Math.max(0, hume)

    const avgLBM = (boer + james + hume) / 3
    const fatMass = Math.max(0, W - avgLBM)
    const bodyFatPct = W > 0 ? (fatMass / W) * 100 : 0

    return {
      boer: boer.toFixed(1),
      james: james.toFixed(1),
      hume: hume.toFixed(1),
      avgLBM: avgLBM.toFixed(1),
      fatMass: fatMass.toFixed(1),
      bodyFatPct: bodyFatPct.toFixed(1)
    }
  }

  const result = calculateLBM()

  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor={genderId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Gender
          </label>
          <select
            id={genderId}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label htmlFor={weightId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Body Weight (kg)
          </label>
          <input
            id={weightId}
            type="number"
            value={weightKg}
            onChange={(e) => setWeightKg(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          />
        </div>

        <div>
          <label htmlFor={heightId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Height (cm)
          </label>
          <input
            id={heightId}
            type="number"
            value={heightCm}
            onChange={(e) => setHeightCm(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-paper p-6 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-ink border-b border-line pb-2">
          Lean Body Mass Breakdown
        </h3>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Average Lean Mass (LBM)</span>
            <strong className="text-xl font-bold text-signal">{result.avgLBM} kg</strong>
          </div>

          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Estimated Fat Mass</span>
            <strong className="text-xl font-bold text-saffron">{result.fatMass} kg</strong>
          </div>

          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Estimated Body Fat %</span>
            <strong className="text-xl font-bold text-ink">{result.bodyFatPct}%</strong>
          </div>
        </div>

        <div className="pt-2 text-xs text-ink-soft space-y-1">
          <p><strong>Boer Formula:</strong> {result.boer} kg</p>
          <p><strong>James Formula:</strong> {result.james} kg</p>
          <p><strong>Hume Formula:</strong> {result.hume} kg</p>
        </div>
      </div>
    </div>
  )
}
