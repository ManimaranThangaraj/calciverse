import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

export default function AspectRatioCalculator() {
  const [width, setWidth] = useState(1920)
  const [height, setHeight] = useState(1080)
  const [preset, setPreset] = useState('16:9')

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

  const stats = useMemo(() => {
    const w = Math.max(1, Number(width) || 1)
    const h = Math.max(1, Number(height) || 1)
    const divisor = gcd(w, h)
    const ratioW = w / divisor
    const ratioH = h / divisor

    return {
      ratio: `${ratioW}:${ratioH}`,
      decimal: (w / h).toFixed(3),
    }
  }, [width, height])

  const applyPreset = (val) => {
    setPreset(val)
    if (val === '16:9') { setWidth(1920); setHeight(1080); }
    else if (val === '4:3') { setWidth(1024); setHeight(768); }
    else if (val === '1:1') { setWidth(1080); setHeight(1080); }
    else if (val === '9:16') { setWidth(1080); setHeight(1920); }
    else if (val === '21:9') { setWidth(2560); setHeight(1080); }
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Width (px)" value={width} onChange={setWidth} min={1} />
        <NumberField label="Height (px)" value={height} onChange={setHeight} min={1} />
        <SelectField
          label="Common Presets"
          value={preset}
          onChange={applyPreset}
          options={[
            { value: '16:9', label: '16:9 (Widescreen 1080p)' },
            { value: '4:3', label: '4:3 (Standard Monitor / TV)' },
            { value: '1:1', label: '1:1 (Square / Instagram)' },
            { value: '9:16', label: '9:16 (Vertical / Mobile Shorts)' },
            { value: '21:9', label: '21:9 (Ultrawide Cinema)' },
          ]}
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <ResultStat label="Simplified Aspect Ratio" value={stats.ratio} emphasis />
        <ResultStat label="Decimal Aspect Ratio" value={stats.decimal} />
      </div>
    </div>
  )
}
