import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

export default function GradePointAverageConverter() {
  const [gpa, setGpa] = useState(3.6)
  const [scale, setScale] = useState('4.0')

  const stats = useMemo(() => {
    const val = Number(gpa) || 0
    const maxScale = Number(scale) || 4.0

    if (val < 0) return { pct: '0%', grade: 'F' }

    const percentage = Math.min(100, (val / maxScale) * 100)
    let letterGrade = 'F'
    if (percentage >= 90) letterGrade = 'A+ (Excellent)'
    else if (percentage >= 80) letterGrade = 'A (Very Good)'
    else if (percentage >= 70) letterGrade = 'B (Good)'
    else if (percentage >= 60) letterGrade = 'C (Average)'
    else if (percentage >= 50) letterGrade = 'D (Pass)'

    return {
      pct: `${percentage.toFixed(1)}%`,
      grade: letterGrade,
    }
  }, [gpa, scale])

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="GPA Score" value={gpa} onChange={setGpa} step="0.01" min={0} max={10} />
        <SelectField
          label="GPA Scale System"
          value={scale}
          onChange={setScale}
          options={[
            { value: '4.0', label: '4.0 Scale (US / Standard)' },
            { value: '5.0', label: '5.0 Scale' },
            { value: '10.0', label: '10.0 Scale (India / CGPA)' },
          ]}
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <ResultStat label="Equivalent Percentage" value={stats.pct} emphasis />
        <ResultStat label="Letter Grade Category" value={stats.grade} />
      </div>
    </div>
  )
}
