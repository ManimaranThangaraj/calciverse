import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

export default function HeartRateZoneCalculator() {
  const [ageYears, setAgeYears] = useState(30)
  const [restingHr, setRestingHr] = useState(65)

  const { maxHr, zone1, zone2, zone3, zone4, zone5 } = useMemo(() => {
    const age = Number(ageYears) || 30
    const rhr = Number(restingHr) || 60
    const mhr = 220 - age

    // Karvonen Formula: Target HR = ((Max HR - Resting HR) * %Intensity) + Resting HR
    const hrr = mhr - rhr

    const calcZone = (minPct, maxPct) => {
      const min = Math.round(hrr * minPct + rhr)
      const max = Math.round(hrr * maxPct + rhr)
      return `${min} – ${max} bpm`
    }

    return {
      maxHr: `${mhr} bpm`,
      zone1: calcZone(0.50, 0.60), // Warm Up
      zone2: calcZone(0.60, 0.70), // Fat Burn
      zone3: calcZone(0.70, 0.80), // Aerobic / Endurance
      zone4: calcZone(0.80, 0.90), // Anaerobic / Threshold
      zone5: calcZone(0.90, 1.00), // Maximum Effort
    }
  }, [ageYears, restingHr])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Age" value={ageYears} onChange={setAgeYears} suffix="years" max={100} />
        <NumberField label="Resting Heart Rate (RHR)" value={restingHr} onChange={setRestingHr} suffix="bpm" hint="Measure upon waking up" />
      </div>
      <div className="mt-6">
        <span className="text-sm font-medium text-ink-soft">Target Heart Rate Zones (Karvonen Formula)</span>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <ResultStat label="Estimated Max HR" value={maxHr} />
          <ResultStat label="Zone 1: Very Light (50-60%)" value={zone1} />
          <ResultStat label="Zone 2: Fat Burn (60-70%)" value={zone2} emphasis />
          <ResultStat label="Zone 3: Aerobic (70-80%)" value={zone3} />
          <ResultStat label="Zone 4: Anaerobic (80-90%)" value={zone4} />
          <ResultStat label="Zone 5: Peak (90-100%)" value={zone5} />
        </div>
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Uses the Karvonen method incorporating Heart Rate Reserve (HRR) for personalized training zones.
      </p>
    </div>
  )
}
