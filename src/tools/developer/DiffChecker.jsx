import { useState, useMemo } from 'react'

export default function DiffChecker() {
  const [text1, setText1] = useState('const name = "Calciverse";\nconst version = "1.0.0";\nconsole.log(name);')
  const [text2, setText2] = useState('const name = "Calciverse";\nconst version = "2.0.0";\nconst author = "Team";\nconsole.log(name, version);')

  const diffLines = useMemo(() => {
    const lines1 = text1.split('\n')
    const lines2 = text2.split('\n')

    const maxLines = Math.max(lines1.length, lines2.length)
    const diffs = []

    for (let i = 0; i < maxLines; i++) {
      const l1 = lines1[i]
      const l2 = lines2[i]

      if (l1 === l2) {
        diffs.push({ type: 'same', text1: l1, text2: l2, lineNum: i + 1 })
      } else {
        diffs.push({ type: 'diff', text1: l1 !== undefined ? l1 : '', text2: l2 !== undefined ? l2 : '', lineNum: i + 1 })
      }
    }

    return diffs
  }, [text1, text2])

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <span className="text-sm font-medium text-ink-soft">Original Text / Code</span>
          <textarea
            rows={6}
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 font-mono text-sm outline-none focus:border-saffron transition-colors"
          />
        </div>

        <div>
          <span className="text-sm font-medium text-ink-soft">Modified Text / Code</span>
          <textarea
            rows={6}
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 font-mono text-sm outline-none focus:border-saffron transition-colors"
          />
        </div>
      </div>

      <div className="mt-6">
        <span className="text-sm font-medium text-ink-soft">Line-by-Line Difference Analysis</span>
        <div className="mt-2 rounded-xl border border-line bg-paper-raised p-4 font-mono text-xs overflow-x-auto space-y-1">
          {diffLines.map((d) => (
            <div key={d.lineNum} className={`flex items-center gap-3 p-1 rounded ${d.type === 'diff' ? 'bg-saffron-soft/60 text-ink font-semibold' : 'text-ink-soft/70'}`}>
              <span className="w-6 text-right opacity-50 select-none">{d.lineNum}</span>
              <div className="flex-1 grid grid-cols-2 gap-4">
                <span className={d.type === 'diff' ? 'bg-alert/10 text-alert px-1 rounded' : ''}>
                  {d.text1 || '—'}
                </span>
                <span className={d.type === 'diff' ? 'bg-signal-soft text-signal px-1 rounded' : ''}>
                  {d.text2 || '—'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
