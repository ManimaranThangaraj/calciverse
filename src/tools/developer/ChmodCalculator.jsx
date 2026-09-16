import { useState, useId } from 'react'

export default function ChmodCalculator() {
  const [perms, setPerms] = useState({
    uRead: true, uWrite: true, uExec: true, // 7
    gRead: true, gWrite: false, gExec: true, // 5
    oRead: true, oWrite: false, oExec: true  // 5
  })

  const inputId = useId()

  const toggle = (key) => {
    setPerms({ ...perms, [key]: !perms[key] })
  }

  const getOctal = () => {
    const u = (perms.uRead ? 4 : 0) + (perms.uWrite ? 2 : 0) + (perms.uExec ? 1 : 0)
    const g = (perms.gRead ? 4 : 0) + (perms.gWrite ? 2 : 0) + (perms.gExec ? 1 : 0)
    const o = (perms.oRead ? 4 : 0) + (perms.oWrite ? 2 : 0) + (perms.oExec ? 1 : 0)
    return `${u}${g}${o}`
  }

  const getSymbolic = () => {
    const r = (b) => (b ? 'r' : '-')
    const w = (b) => (b ? 'w' : '-')
    const x = (b) => (b ? 'x' : '-')
    return `${r(perms.uRead)}${w(perms.uWrite)}${x(perms.uExec)}${r(perms.gRead)}${w(perms.gWrite)}${x(perms.gExec)}${r(perms.oRead)}${w(perms.oWrite)}${x(perms.oExec)}`
  }

  const octal = getOctal()
  const symbolic = getSymbolic()

  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-3">
        {/* Owner */}
        <div className="rounded-xl border border-line bg-paper p-4 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-saffron">Owner / User Permissions</h4>
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
        <div className="rounded-xl border border-line bg-paper p-4 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-signal">Group Permissions</h4>
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
        <div className="rounded-xl border border-line bg-paper p-4 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-ink-soft">Public / Others Permissions</h4>
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

      <div className="rounded-2xl border border-line bg-paper p-6 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-ink border-b border-line pb-2">
          Linux Chmod Permission Values
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-paper-raised p-4 space-y-1">
            <span className="block text-xs text-ink-soft">Octal Notation</span>
            <strong className="text-2xl font-bold font-mono text-saffron">{octal}</strong>
            <span className="block text-[11px] text-ink-soft">Command: <code>chmod {octal} filename</code></span>
          </div>

          <div className="rounded-xl border border-line bg-paper-raised p-4 space-y-1">
            <span className="block text-xs text-ink-soft">Symbolic Notation</span>
            <strong className="text-2xl font-bold font-mono text-signal">{symbolic}</strong>
            <span className="block text-[11px] text-ink-soft">r=read, w=write, x=execute</span>
          </div>
        </div>
      </div>
    </div>
  )
}
