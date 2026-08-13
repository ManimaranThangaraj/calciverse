import { useState, useMemo } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { ResultStat } from '../../components/ui/Field.jsx'

let idc = 0
const newRow = () => ({ id: ++idc, credit: 3, grade: 4.0 })

export default function GPACalculator() {
  const [rows, setRows] = useState([newRow(), newRow(), newRow()])

  const update = (id, key, value) =>
    setRows((rs) =>
      rs.map((r) =>
        r.id === id ? { ...r, [key]: value } : r
      )
    )

  const remove = (id) =>
    setRows((rs) => rs.filter((r) => r.id !== id))

  const { gpa, totalCredits } = useMemo(() => {
    const credits = rows.reduce(
      (sum, row) => sum + (Number(row.credit) || 0),
      0
    )

    const points = rows.reduce(
      (sum, row) =>
        sum +
        (Number(row.credit) || 0) *
          (Number(row.grade) || 0),
      0
    )

    return {
      totalCredits: credits,
      gpa: credits ? points / credits : 0,
    }
  }, [rows])

  return (
    <div>
      <div className="grid grid-cols-[1fr_1fr_auto] gap-3 text-xs font-semibold uppercase tracking-wide text-ink-soft/60">
        <div>Credits</div>
        <div>Grade Point (0–4)</div>
        <div />
      </div>

      <div className="mt-2 space-y-2">
        {rows.map((row) => (
          <div
            key={row.id}
            className="grid grid-cols-[1fr_1fr_auto] items-center gap-3"
          >
            <input
              type="number"
              min="0"
              value={row.credit}
              onChange={(e) =>
                update(row.id, 'credit', e.target.value)
              }
              className="rounded-lg border border-line bg-paper-raised px-3 py-2 font-mono outline-none focus:border-saffron"
            />

            <input
              type="number"
              min="0"
              max="4"
              step="0.01"
              value={row.grade}
              onChange={(e) =>
                update(row.id, 'grade', e.target.value)
              }
              className="rounded-lg border border-line bg-paper-raised px-3 py-2 font-mono outline-none focus:border-saffron"
            />

            <button
              onClick={() => remove(row.id)}
              className="rounded-lg p-2 text-ink-soft/50 hover:bg-alert/10 hover:text-alert"
              aria-label="Remove subject"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() =>
          setRows((rows) => [...rows, newRow()])
        }
        className="mt-3 flex items-center gap-1.5 rounded-lg border border-dashed border-line px-3 py-1.5 text-sm font-medium text-ink-soft hover:border-saffron hover:text-saffron"
      >
        <Plus size={15} />
        Add Subject
      </button>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat
          label="GPA"
          value={gpa.toFixed(2)}
          emphasis
        />
        <ResultStat
          label="Total Credits"
          value={totalCredits}
        />
      </div>

      <p className="mt-4 text-xs text-ink-soft/60">
        GPA is calculated as the weighted average of grade
        points based on course credits. This calculator uses
        the standard 4.0 GPA scale.
      </p>
    </div>
  )
}