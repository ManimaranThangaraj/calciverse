import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

export default function PaceCalculator() {
  const [distance, setDistance] = useState(5)
  const [unit, setUnit] = useState('km')
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)

  const stats = useMemo(() => {
    const dist = Number(distance) || 0
    const totalSec = (Number(hours) || 0) * 3600 + (Number(minutes) || 0) * 60 + (Number(seconds) || 0)

    if (dist <= 0 || totalSec <= 0) {
      return { pace: '0:00 / km', speed: '0 km/h', finish10k: '0:00:00' }
    }

    const secPerUnit = totalSec / dist
    const paceMin = Math.floor(secPerUnit / 60)
    const paceSec = Math.floor(secPerUnit % 60)
    const formattedPace = `${paceMin}:${paceSec < 10 ? '0' : ''}${paceSec} / ${unit}`

    const totalHours = totalSec / 3600
    const speedVal = dist / totalHours
    const formattedSpeed = `${speedVal.toFixed(2)} ${unit === 'km' ? 'km/h' : 'mph'}`

    // 10K projected time
    const distKm = unit === 'km' ? dist : dist * 1.60934
    const secPerKm = totalSec / distKm
    const total10kSec = secPerKm * 10
    const h10 = Math.floor(total10kSec / 3600)
    const m10 = Math.floor((total10kSec % 3600) / 60)
    const s10 = Math.floor(total10kSec % 60)
    const formatted10k = `${h10 > 0 ? h10 + ':' : ''}${m10 < 10 ? '0' : ''}${m10}:${s10 < 10 ? '0' : ''}${s10}`

    return {
      pace: formattedPace,
      speed: formattedSpeed,
      finish10k: formatted10k,
    }
  }, [distance, unit, hours, minutes, seconds])

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Distance" value={distance} onChange={setDistance} min={0.1} step={0.1} />
        <SelectField
          label="Unit"
          value={unit}
          onChange={setUnit}
          options={[
            { value: 'km', label: 'Kilometers (km)' },
            { value: 'mi', label: 'Miles (mi)' },
          ]}
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <NumberField label="Hours" value={hours} onChange={setHours} min={0} max={99} />
        <NumberField label="Minutes" value={minutes} onChange={setMinutes} min={0} max={59} />
        <NumberField label="Seconds" value={seconds} onChange={setSeconds} min={0} max={59} />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <ResultStat label="Pace" value={stats.pace} emphasis />
        <ResultStat label="Average Speed" value={stats.speed} />
        <ResultStat label="Projected 10K Time" value={stats.finish10k} />
      </div>
    </div>
  )
}
