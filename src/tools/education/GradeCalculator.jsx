import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

export default function GradeCalculator() {
  const [currentGrade, setCurrentGrade] = useState(82)
  const [targetGrade, setTargetGrade] = useState(85)
  const [examWeight, setExamWeight] = useState(30)

  const { requiredExamScore, isPossible } = useMemo(() => {
    const curr = Number(currentGrade) || 0
    const target = Number(targetGrade) || 0
    const weight = (Number(examWeight) || 0) / 100

    if (weight <= 0 || weight >= 1) return { requiredExamScore: 0, isPossible: true }

    // Target = Current * (1 - Weight) + FinalExam * Weight
    // FinalExam = (Target - Current * (1 - Weight)) / Weight
    const score = (target - curr * (1 - weight)) / weight
    const possible = score <= 100

    return { requiredExamScore: score, isPossible: possible }
  }, [currentGrade, targetGrade, examWeight])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Current Grade So Far" value={currentGrade} onChange={setCurrentGrade} suffix="%" />
        <NumberField label="Target Overall Grade" value={targetGrade} onChange={setTargetGrade} suffix="%" />
        <NumberField label="Final Exam Weight" value={examWeight} onChange={setExamWeight} suffix="%" min={1} max={99} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat
          label="Required Final Exam Score"
          value={requiredExamScore < 0 ? '0% (Already Achieved)' : `${requiredExamScore.toFixed(1)}%`}
          emphasis
        />
        <ResultStat label="Achievable Status" value={isPossible ? 'Achievable' : 'Requires > 100%'} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Formula: Final Score Needed = (Target Grade − Current Grade × (1 − Exam Weight)) / Exam Weight.
      </p>
    </div>
  )
}
