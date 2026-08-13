import { useState } from 'react'
import CopyButton from '../../components/ui/CopyButton.jsx'
import { NumberField } from '../../components/ui/Field.jsx'
import { RefreshCw } from 'lucide-react'

function uuidv4() {
  return crypto.randomUUID ? crypto.randomUUID() : (
    [1e7] + -1e3 + -4e3 + -8e3 + -1e11
  ).replace(/[018]/g, (c) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  )
}

export default function UUIDGenerator() {
  const [count, setCount] = useState(5)
  const [ids, setIds] = useState(() => Array.from({ length: 5 }, uuidv4))

  const regenerate = () => setIds(Array.from({ length: Math.max(1, Math.min(100, count)) }, uuidv4))

  return (
    <div>
      <div className="flex items-end gap-3">
        <div className="w-40"><NumberField label="How many" value={count} onChange={setCount} min={1} max={100} /></div>
        <button onClick={regenerate} className="flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-saffron dark:text-slate-950 dark:hover:bg-saffron/90 transition-colors">
          <RefreshCw size={15} /> Generate
        </button>
        <CopyButton getText={() => ids.join('\n')} label="Copy all" />
      </div>
      <div className="mt-4 space-y-1.5 rounded-lg border border-line bg-paper-raised p-3 font-mono text-sm">
        {ids.map((id) => <div key={id} className="text-ink-soft">{id}</div>)}
      </div>
    </div>
  )
}
