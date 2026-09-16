import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

export default function GradePointConverter() {
  const [percentageMarks, setPercentageMarks] = useState(85)

  const { gpa10, letterGrade, cbseCGPA } = useMemo(() => {
    const pct = Number(percentageMarks) || 0

    const g10 = (pct / 10).toFixed(2)
    const cbse = (pct / 9.5).toFixed(2)

    let letter = 'F'
    if (pct >= 90) letter = 'A+'
    else if (pct >= 80) letter = 'A'
    else if (pct >= 70) letter = 'B'
    else if (pct >= 60) letter = 'C'
    else if (pct >= 50) letter = 'D'

    return { gpa10: g10, letterGrade: letter, cbseCGPA: cbse }
  }, [percentageMarks])

  const summaryText = `Percentage Marks: ${percentageMarks}%\n10-Point Grade Point (GPA): ${gpa10}\nCBSE Equivalent CGPA: ${cbseCGPA}\nLetter Grade: ${letterGrade}`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-1 max-w-md">
        <NumberField label="Percentage Marks (%)" value={percentageMarks} onChange={setPercentageMarks} suffix="%" min={0} max={100} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="10-Point Scale GPA" value={gpa10} emphasis />
        <ResultStat label="CBSE CGPA Equivalent" value={cbseCGPA} />
        <ResultStat label="Letter Grade" value={letterGrade} />
      </div>

      <ToolActions
        toolName="Marks to Grade Point (GPA) Converter"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/grade-point-converter"
      />
    </div>
  )
}
