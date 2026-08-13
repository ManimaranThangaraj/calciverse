import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import CopyButton from '../../components/ui/CopyButton.jsx'

export default function PXtoREMConverter() {
  const [pixels, setPixels] = useState(16)
  const [baseSize, setBaseSize] = useState(16)

  const stats = useMemo(() => {
    const px = Number(pixels) || 0
    const base = Math.max(1, Number(baseSize) || 16)
    const rem = px / base

    return {
      rem: `${rem.toFixed(4).replace(/\.?0+$/, '')}rem`,
      px: `${px}px`,
    }
  }, [pixels, baseSize])

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Pixels (px)" value={pixels} onChange={setPixels} min={0} step={1} />
        <NumberField label="Base Font Size (px)" value={baseSize} onChange={setBaseSize} min={1} step={1} hint="Default browser root size is 16px" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <ResultStat label="Converted REM Value" value={stats.rem} emphasis />
        <ResultStat label="PX Value" value={stats.px} />
      </div>

      <div className="flex items-center justify-between rounded-xl border border-line bg-paper p-4">
        <span className="font-mono text-sm text-ink">{stats.rem}</span>
        <CopyButton getText={() => stats.rem} label="Copy REM" />
      </div>
    </div>
  )
}
