import { useState } from 'react'
import { NumberField } from '../../components/ui/Field.jsx'
import CopyButton from '../../components/ui/CopyButton.jsx'
import { Dices } from 'lucide-react'

function secureInt(min, max) {
  const range = max - min + 1
  const bytes = new Uint32Array(1)
  crypto.getRandomValues(bytes)
  return min + (bytes[0] % range)
}

export default function RandomNumberGenerator() {
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(100)
  const [count, setCount] = useState(5)
  const [unique, setUnique] = useState(true)
  const [result, setResult] = useState([])

  const generate = () => {
    const lo = Math.min(Number(min), Number(max))
    const hi = Math.max(Number(min), Number(max))
    const n = Math.max(1, Math.min(1000, Number(count)))
    if (unique && n > hi - lo + 1) {
      setResult([`Range too small for ${n} unique numbers`])
      return
    }
    const out = []
    const seen = new Set()
    while (out.length < n) {
      const v = secureInt(lo, hi)
      if (unique) { if (seen.has(v)) continue; seen.add(v) }
      out.push(v)
    }
    setResult(out)
  }

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Minimum" value={min} onChange={setMin} />
        <NumberField label="Maximum" value={max} onChange={setMax} />
        <NumberField label="How many" value={count} onChange={setCount} min={1} max={1000} />
      </div>
      <label className="mt-3 flex w-fit items-center gap-2 text-sm text-ink-soft">
        <input type="checkbox" checked={unique} onChange={(e) => setUnique(e.target.checked)} className="accent-[#E0631B]" />
        No repeated numbers
      </label>
      <div className="mt-4 flex items-center gap-3">
        <button onClick={generate} className="flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-saffron dark:text-slate-950 dark:hover:bg-saffron/90 transition-colors">
          <Dices size={16} /> Generate
        </button>
        {result.length > 0 && <CopyButton getText={() => result.join(', ')} label="Copy all" />}
      </div>
      {result.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {result.map((n, i) => (
            <span key={i} className="rounded-lg bg-signal-soft px-3 py-1.5 font-mono tabular-num text-sm font-semibold text-signal">{n}</span>
          ))}
        </div>
      )}
    </div>
  )
}
