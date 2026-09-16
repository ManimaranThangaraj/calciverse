import { useState, useMemo } from 'react'
import { ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

export default function ChmodCalculator() {
  const [perms, setPerms] = useState({
    uRead: true, uWrite: true, uExec: true,
    gRead: true, gWrite: false, gExec: true,
    oRead: true, oWrite: false, oExec: true
  })

  const toggle = (key) => {
    setPerms((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const { octal, symbolic } = useMemo(() => {
    const u = (perms.uRead ? 4 : 0) + (perms.uWrite ? 2 : 0) + (perms.uExec ? 1 : 0)
    const g = (perms.gRead ? 4 : 0) + (perms.gWrite ? 2 : 0) + (perms.gExec ? 1 : 0)
    const o = (perms.oRead ? 4 : 0) + (perms.oWrite ? 2 : 0) + (perms.oExec ? 1 : 0)

    const r = (b) => (b ? 'r' : '-')
    const w = (b) => (b ? 'w' : '-')
    const x = (b) => (b ? 'x' : '-')
    const sym = `${r(perms.uRead)}${w(perms.uWrite)}${x(perms.uExec)}${r(perms.gRead)}${w(perms.gWrite)}${x(perms.gExec)}${r(perms.oRead)}${w(perms.oWrite)}${x(perms.oExec)}`

    return { octal: `${u}${g}${o}`, symbolic: sym }
  }, [perms])

  const summaryText = `Linux Chmod Octal: ${octal}\nSymbolic: ${symbolic}\nCommand: chmod ${octal} filename`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        {/* Owner */}
        <div className="rounded-xl border border-line bg-paper-raised p-4 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-saffron">Owner (User)</h4>
          <div className="space-y-2 text-xs font-medium text-ink">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={perms.uRead} onChange={() => toggle('uRead')} className="rounded border-line text-saffron focus:ring-saffron" />
              <span>Read (4)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={perms.uWrite} onChange={() => toggle('uWrite')} className="rounded border-line text-saffron focus:ring-saffron" />
              <span>Write (2)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={perms.uExec} onChange={() => toggle('uExec')} className="rounded border-line text-saffron focus:ring-saffron" />
              <span>Execute (1)</span>
            </label>
          </div>
        </div>

        {/* Group */}
        <div className="rounded-xl border border-line bg-paper-raised p-4 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-signal">Group</h4>
          <div className="space-y-2 text-xs font-medium text-ink">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={perms.gRead} onChange={() => toggle('gRead')} className="rounded border-line text-signal focus:ring-signal" />
              <span>Read (4)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={perms.gWrite} onChange={() => toggle('gWrite')} className="rounded border-line text-signal focus:ring-signal" />
              <span>Write (2)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={perms.gExec} onChange={() => toggle('gExec')} className="rounded border-line text-signal focus:ring-signal" />
              <span>Execute (1)</span>
            </label>
          </div>
        </div>

        {/* Others */}
        <div className="rounded-xl border border-line bg-paper-raised p-4 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-ink-soft">Others (Public)</h4>
          <div className="space-y-2 text-xs font-medium text-ink">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={perms.oRead} onChange={() => toggle('oRead')} className="rounded border-line text-ink focus:ring-ink" />
              <span>Read (4)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={perms.oWrite} onChange={() => toggle('oWrite')} className="rounded border-line text-ink focus:ring-ink" />
              <span>Write (2)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={perms.oExec} onChange={() => toggle('oExec')} className="rounded border-line text-ink focus:ring-ink" />
              <span>Execute (1)</span>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Octal Notation" value={octal} emphasis />
        <ResultStat label="Symbolic Notation" value={symbolic} />
      </div>

      <div className="mt-6 rounded-xl border border-line bg-paper-raised p-4 text-xs font-mono text-ink-soft">
        <span className="text-ink-soft/70 block text-[11px] font-sans">Linux Terminal Command</span>
        <code className="text-saffron font-bold text-sm select-all">chmod {octal} filename</code>
      </div>

      <ToolActions
        toolName="Linux Chmod Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/chmod-calculator"
      />
    </div>
  )
}
