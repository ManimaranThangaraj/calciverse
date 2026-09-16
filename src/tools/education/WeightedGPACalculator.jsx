import { useState, useId } from 'react'

export default function WeightedGPACalculator() {
  const [courses, setCourses] = useState([
    { name: 'AP Calculus', grade: 'A', credits: 4, type: 'AP' },
    { name: 'Honors Chemistry', grade: 'B', credits: 3, type: 'Honors' },
    { name: 'English Literature', grade: 'A', credits: 3, type: 'Regular' }
  ])

  const nameId = useId()

  const gradePoints = { A: 4.0, B: 3.0, C: 2.0, D: 1.0, F: 0.0 }
  const weightBonus = { Regular: 0.0, Honors: 0.5, AP: 1.0, IB: 1.0 }

  const calculateGPA = () => {
    let totalCredits = 0
    let unweightedPoints = 0
    let weightedPoints = 0

    courses.forEach((c) => {
      const cr = Number(c.credits) || 0
      const base = gradePoints[c.grade] !== undefined ? gradePoints[c.grade] : 0
      const bonus = weightBonus[c.type] || 0

      totalCredits += cr
      unweightedPoints += base * cr
      weightedPoints += (base + bonus) * cr
    })

    const unweightedGPA = totalCredits > 0 ? (unweightedPoints / totalCredits).toFixed(2) : '0.00'
    const weightedGPA = totalCredits > 0 ? (weightedPoints / totalCredits).toFixed(2) : '0.00'

    return { totalCredits, unweightedGPA, weightedGPA }
  }

  const result = calculateGPA()

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

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <label htmlFor={nameId} className="block text-xs font-semibold text-ink uppercase tracking-wider">
          Course Grades & Weighting
        </label>
        {courses.map((course, idx) => (
          <div key={idx} className="flex flex-wrap items-center gap-3 rounded-xl border border-line bg-paper p-3">
            <input
              id={idx === 0 ? nameId : undefined}
              type="text"
              value={course.name}
              onChange={(e) => updateCourse(idx, 'name', e.target.value)}
              placeholder="Course Name"
              className="flex-1 min-w-[140px] rounded-lg border border-line bg-paper-raised px-3 py-1.5 text-xs font-semibold text-ink outline-none"
            />
            <select
              value={course.grade}
              onChange={(e) => updateCourse(idx, 'grade', e.target.value)}
              className="rounded-lg border border-line bg-paper-raised px-3 py-1.5 text-xs font-semibold text-ink outline-none"
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
              className="rounded-lg border border-line bg-paper-raised px-3 py-1.5 text-xs font-semibold text-ink outline-none"
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
              className="w-16 rounded-lg border border-line bg-paper-raised px-2 py-1.5 text-xs font-semibold text-ink outline-none"
            />
            <button
              onClick={() => removeCourse(idx)}
              className="px-2 py-1 text-xs text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors"
            >
              ✕
            </button>
          </div>
        ))}

        <button
          onClick={addCourse}
          className="inline-flex items-center gap-1 text-xs font-semibold text-saffron hover:underline pt-1"
        >
          + Add Another Course
        </button>
      </div>

      <div className="rounded-2xl border border-line bg-paper p-6 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-ink border-b border-line pb-2">
          GPA Summary Results
        </h3>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Unweighted GPA (4.0 Scale)</span>
            <strong className="text-2xl font-bold text-ink">{result.unweightedGPA}</strong>
          </div>

          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Weighted GPA (5.0 Scale)</span>
            <strong className="text-2xl font-bold text-signal">{result.weightedGPA}</strong>
          </div>

          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Total Completed Credits</span>
            <strong className="text-2xl font-bold text-saffron">{result.totalCredits}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
