import { useState, useMemo } from 'react'
import CopyButton from '../../components/ui/CopyButton.jsx'

function hexToRgb(hex) {
  const m = hex.replace('#', '')
  const bigint = parseInt(m, 16)
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 }
}
function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h, s; const l = (max + min) / 2
  if (max === min) { h = s = 0 } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      default: h = (r - g) / d + 4
    }
    h /= 6
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) }
}

export default function ColorPicker() {
  const [hex, setHex] = useState('#E0631B')

  const { rgb, hsl } = useMemo(() => {
    const rgbVal = hexToRgb(hex)
    return { rgb: rgbVal, hsl: rgbToHsl(rgbVal.r, rgbVal.g, rgbVal.b) }
  }, [hex])

  const rows = [
    { label: 'HEX', value: hex.toUpperCase() },
    { label: 'RGB', value: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` },
    { label: 'HSL', value: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` },
  ]

  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
      <div className="flex flex-col items-center gap-2">
        <input type="color" value={hex} onChange={(e) => setHex(e.target.value)} className="h-24 w-24 cursor-pointer rounded-xl border border-line" />
        <span className="text-xs text-ink-soft/60">Click to pick</span>
      </div>
      <div className="flex-1 space-y-2">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between rounded-lg border border-line bg-paper-raised px-3 py-2">
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-ink-soft/60">{r.label}</div>
              <div className="font-mono text-sm">{r.value}</div>
            </div>
            <CopyButton getText={() => r.value} />
          </div>
        ))}
      </div>
    </div>
  )
}
