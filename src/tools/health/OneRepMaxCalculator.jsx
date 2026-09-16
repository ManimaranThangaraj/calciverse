import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

export default function OneRepMaxCalculator() {
  const [liftWeight, setLiftWeight] = useState(100)
  const [repsCompleted, setRepsCompleted] = useState(5)

  const { epley1RM, brzycki1RM, avg1RM } = useMemo(() => {
    const w = Number(liftWeight) || 0
    const r = Number(repsCompleted) || 0

    if (w <= 0 || r <= 0) return { epley1RM: '0', brzycki1RM: '0', avg1RM: '0' }

    if (r === 1) {
      return { epley1RM: w.toFixed(1), brzycki1RM: w.toFixed(1), avg1RM: w.toFixed(1) }
    }

    const epley = w * (1 + r / 30)
    const brzycki = w * (36 / (37 - r))
    const avg = (epley + brzycki) / 2

    return {
      epley1RM: epley.toFixed(1),
      brzycki1RM: brzycki.toFixed(1),
      avg1RM: avg.toFixed(1)
    }
  }, [liftWeight, repsCompleted])

  const summaryText = `Lift Weight: ${liftWeight} kg x ${repsCompleted} reps\nEstimated 1RM (Max): ${avg1RM} kg (Epley: ${epley1RM} kg, Brzycki: ${brzycki1RM} kg)`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Weight Lifted" value={liftWeight} onChange={setLiftWeight} suffix="kg" />
        <NumberField label="Reps Performed" value={repsCompleted} onChange={setRepsCompleted} suffix="reps" min={1} max={30} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Estimated 1 Rep Max (1RM)" value={`${avg1RM} kg`} emphasis />
        <ResultStat label="Epley Formula" value={`${epley1RM} kg`} />
        <ResultStat label="Brzycki Formula" value={`${brzycki1RM} kg`} />
      </div>

      <ToolActions
        toolName="One Rep Max (1RM) Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/one-rep-max-calculator"
      />
    </div>
  )
}
