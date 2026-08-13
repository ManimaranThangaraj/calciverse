import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

export default function AttendanceCalculator() {
  const [held, setHeld] = useState(60)
  const [attended, setAttended] = useState(48)
  const [target, setTarget] = useState(75)

  const { current, message, value } = useMemo(() => {
    const H = Number(held) || 0
    const A = Number(attended) || 0
    const T = (Number(target) || 0) / 100
    const cur = H ? (A / H) * 100 : 0

    if (!H) return { current: 0, message: 'Classes you can skip', value: '—' }

    if (cur >= target) {
      // how many more can be missed and still stay at/above target:
      // (A) / (H + x) >= T  =>  x <= A/T - H
      const skip = Math.floor(A / T - H)
      return { current: cur, message: 'Classes you can still skip', value: Math.max(0, skip) }
    }
    // how many more must be attended: (A + x) / (H + x) >= T => x >= (T*H - A) / (1 - T)
    const need = Math.ceil((T * H - A) / (1 - T))
    return { current: cur, message: 'Classes you must attend in a row', value: Math.max(0, need) }
  }, [held, attended, target])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Classes held so far" value={held} onChange={setHeld} min={0} />
        <NumberField label="Classes attended" value={attended} onChange={setAttended} min={0} />
        <NumberField label="Required attendance" value={target} onChange={setTarget} suffix="%" min={0} max={100} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Current attendance" value={`${current.toFixed(1)}%`} />
        <ResultStat label={message} value={value} emphasis />
      </div>
    </div>
  )
}
