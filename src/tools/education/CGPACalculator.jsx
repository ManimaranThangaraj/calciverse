import { useState, useMemo } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { ResultStat } from '../../components/ui/Field.jsx'

let idc = 0
const newRow = () => ({ id: ++idc, credit: 4, grade: 8 })

export default function CGPACalculator() {
  const [rows, setRows] = useState([newRow(), newRow(), newRow()])

  const update = (id, key, value) => setRows((rs) => rs.map((r) => (r.id === id ? { ...r, [key]: value } : r)))
  const remove = (id) => setRows((rs) => rs.filter((r) => r.id !== id))

  const { cgpa, percentage } = useMemo(() => {
    const totalCredits = rows.reduce((s, r) => s + (Number(r.credit) || 0), 0)
    const totalPoints = rows.reduce((s, r) => s + (Number(r.credit) || 0) * (Number(r.grade) || 0), 0)
    const c = totalCredits ? totalPoints / totalCredits : 0
    return { cgpa: c, percentage: c * 9.5 }
  }, [rows])

  return (
    <div>
      <div className="grid grid-cols-[1fr_1fr_auto] gap-3 text-xs font-semibold uppercase tracking-wide text-ink-soft/60">
        <div>Credits</div><div>Grade point (0-10)</div><div />
      </div>
      <div className="mt-2 space-y-2">
        {rows.map((r) => (
          <div key={r.id} className="grid grid-cols-[1fr_1fr_auto] items-center gap-3">
            <input type="number" value={r.credit} onChange={(e) => update(r.id, 'credit', e.target.value)}
              className="rounded-lg border border-line bg-paper-raised px-3 py-2 font-mono outline-none focus:border-saffron" />
            <input type="number" min={0} max={10} value={r.grade} onChange={(e) => update(r.id, 'grade', e.target.value)}
              className="rounded-lg border border-line bg-paper-raised px-3 py-2 font-mono outline-none focus:border-saffron" />
            <button onClick={() => remove(r.id)} className="rounded-lg p-2 text-ink-soft/50 hover:bg-alert/10 hover:text-alert" aria-label="Remove subject">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => setRows((rs) => [...rs, newRow()])}
        className="mt-3 flex items-center gap-1.5 rounded-lg border border-dashed border-line px-3 py-1.5 text-sm font-medium text-ink-soft hover:border-saffron hover:text-saffron"
      >
        <Plus size={15} /> Add subject
      </button>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="CGPA" value={cgpa.toFixed(2)} emphasis />
        <ResultStat label="Approx. percentage" value={`${percentage.toFixed(1)}%`} />
      </div>
      <p className="mt-4 text-xs text-ink-soft/60">Percentage uses the common CGPA × 9.5 approximation (used by CBSE) — your university may use a different conversion formula.</p>
    </div>
  )
}
