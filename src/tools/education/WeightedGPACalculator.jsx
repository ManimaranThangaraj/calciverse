import { useState, useMemo } from 'react'
import { ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

export default function WeightedGPACalculator() {
  const [courses, setCourses] = useState([
    { name: 'AP Calculus', grade: 'A', credits: 4, type: 'AP' },
    { name: 'Honors Chemistry', grade: 'B', credits: 3, type: 'Honors' },
    { name: 'English Literature', grade: 'A', credits: 3, type: 'Regular' }
  ])

  const gradePoints = { A: 4.0, B: 3.0, C: 2.0, D: 1.0, F: 0.0 }
  const weightBonus = { Regular: 0.0, Honors: 0.5, AP: 1.0, IB: 1.0 }

  const { totalCredits, unweightedGPA, weightedGPA } = useMemo(() => {
    let totCredits = 0
    let unweightedPts = 0
    let weightedPts = 0

    courses.forEach((c) => {
      const cr = Number(c.credits) || 0
      const base = gradePoints[c.grade] !== undefined ? gradePoints[c.grade] : 0
      const bonus = weightBonus[c.type] || 0

      totCredits += cr
      unweightedPts += base * cr
      weightedPts += (base + bonus) * cr
    })

    const uGPA = totCredits > 0 ? (unweightedPts / totCredits).toFixed(2) : '0.00'
    const wGPA = totCredits > 0 ? (weightedPts / totCredits).toFixed(2) : '0.00'

    return { totalCredits: totCredits, unweightedGPA: uGPA, weightedGPA: wGPA }
  }, [courses])

  const updateCourse = (idx, field, val) => {
    const next = [...courses]
    next[idx][field] = val
    setCourses(next)
  }

  const addCourse = () => {
    setCourses([...courses, { name: `Course ${courses.length + 1}`, grade: 'A', credits: 3, type: 'Regular' }])
  }

  const removeCourse = (idx) => {
    if (courses.length <= 1) return
    setCourses(courses.filter((_, i) => i !== idx))
  }

  const summaryText = `Weighted GPA: ${weightedGPA} (5.0 Scale)\nUnweighted GPA: ${unweightedGPA} (4.0 Scale)\nTotal Credits: ${totalCredits}`

  return (
    <div>
      <div className="space-y-3">
        <span className="block text-sm font-medium text-ink-soft">Course Grades & Weighting</span>
        {courses.map((course, idx) => (
          <div key={idx} className="flex flex-wrap items-center gap-3 rounded-xl border border-line bg-paper-raised p-3">
            <input
              type="text"
              value={course.name}
              onChange={(e) => updateCourse(idx, 'name', e.target.value)}
              placeholder="Course Name"
              className="flex-1 min-w-[140px] rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-saffron"
            />
            <select
              value={course.grade}
              onChange={(e) => updateCourse(idx, 'grade', e.target.value)}
              className="rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink outline-none cursor-pointer"
            >
              <option value="A">Grade A (4.0)</option>
              <option value="B">Grade B (3.0)</option>
              <option value="C">Grade C (2.0)</option>
              <option value="D">Grade D (1.0)</option>
              <option value="F">Grade F (0.0)</option>
            </select>
            <select
              value={course.type}
              onChange={(e) => updateCourse(idx, 'type', e.target.value)}
              className="rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink outline-none cursor-pointer"
            >
              <option value="Regular">Regular (+0.0)</option>
              <option value="Honors">Honors (+0.5)</option>
              <option value="AP">AP (+1.0)</option>
              <option value="IB">IB (+1.0)</option>
            </select>
            <input
              type="number"
              value={course.credits}
              onChange={(e) => updateCourse(idx, 'credits', e.target.value)}
              placeholder="Credits"
              className="w-20 rounded-lg border border-line bg-paper px-3 py-2 text-sm font-mono text-ink outline-none"
            />
            {courses.length > 1 && (
              <button
                onClick={() => removeCourse(idx)}
                className="p-2 text-xs font-semibold text-alert hover:bg-alert/10 rounded-lg transition-colors"
                title="Remove Course"
              >
                ✕
              </button>
            )}
          </div>
        ))}

        <button
          onClick={addCourse}
          className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-paper-raised px-4 py-2 text-xs font-semibold text-saffron hover:border-saffron transition-all"
        >
          + Add Another Course
        </button>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Weighted GPA (5.0 Scale)" value={weightedGPA} emphasis />
        <ResultStat label="Unweighted GPA (4.0 Scale)" value={unweightedGPA} />
        <ResultStat label="Total Credits" value={totalCredits} />
      </div>

      <ToolActions
        toolName="Weighted GPA Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/weighted-gpa-calculator"
      />
    </div>
  )
}
