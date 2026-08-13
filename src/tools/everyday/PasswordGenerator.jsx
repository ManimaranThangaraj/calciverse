import { useState, useMemo, useCallback } from 'react'
import CopyButton from '../../components/ui/CopyButton.jsx'
import { RefreshCw } from 'lucide-react'

const SETS = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  digits: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}',
}

function randomPassword(length, opts) {
  const pool = Object.entries(opts).filter(([, on]) => on).map(([k]) => SETS[k]).join('')
  if (!pool) return ''
  const bytes = new Uint32Array(length)
  crypto.getRandomValues(bytes)
  return Array.from(bytes, (b) => pool[b % pool.length]).join('')
}

export default function PasswordGenerator() {
  const [length, setLength] = useState(16)
  const [opts, setOpts] = useState({ lower: true, upper: true, digits: true, symbols: true })
  const [password, setPassword] = useState(() => randomPassword(16, { lower: true, upper: true, digits: true, symbols: true }))

  const regenerate = useCallback(() => setPassword(randomPassword(length, opts)), [length, opts])

  const strength = useMemo(() => {
    const setSize = Object.entries(opts).filter(([, on]) => on).length * 20 + 6
    const bits = length * Math.log2(setSize || 2)
    if (bits < 40) return { label: 'Weak', color: 'text-alert' }
    if (bits < 70) return { label: 'Okay', color: 'text-saffron' }
    return { label: 'Strong', color: 'text-signal' }
  }, [length, opts])

  const toggle = (key) => setOpts((o) => {
    const next = { ...o, [key]: !o[key] }
    if (!Object.values(next).some(Boolean)) return o // keep at least one set on
    setPassword(randomPassword(length, next))
    return next
  })

  return (
    <div>
      <div className="flex items-center gap-2 rounded-lg border border-line bg-paper-raised p-3">
        <div className="flex-1 overflow-x-auto whitespace-nowrap font-mono text-lg tracking-wide">{password}</div>
        <button onClick={regenerate} className="rounded-lg p-2 text-ink-soft hover:bg-paper hover:text-saffron" aria-label="Regenerate">
          <RefreshCw size={17} />
        </button>
        <CopyButton getText={() => password} />
      </div>

      <div className={`mt-2 text-xs font-semibold ${strength.color}`}>{strength.label}</div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-sm font-medium text-ink-soft">
          <span>Length</span><span className="font-mono">{length}</span>
        </div>
        <input type="range" min={6} max={32} value={length}
          onChange={(e) => { const v = Number(e.target.value); setLength(v); setPassword(randomPassword(v, opts)) }}
          className="mt-1.5 w-full accent-[#E0631B]" />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {Object.keys(SETS).map((key) => (
          <label key={key} className="flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm capitalize">
            <input type="checkbox" checked={opts[key]} onChange={() => toggle(key)} className="accent-[#E0631B]" />
            {key}
          </label>
        ))}
      </div>
      <p className="mt-4 text-xs text-ink-soft/60">Generated locally using your browser's cryptographic random number generator — never sent anywhere.</p>
    </div>
  )
}
