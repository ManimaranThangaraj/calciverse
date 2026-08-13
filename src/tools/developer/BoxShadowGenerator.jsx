import { useState, useMemo } from 'react'
import { NumberField, TextField } from '../../components/ui/Field.jsx'
import CopyButton from '../../components/ui/CopyButton.jsx'

export default function BoxShadowGenerator() {
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(8)
  const [blur, setBlur] = useState(24)
  const [spread, setSpread] = useState(-4)
  const [color, setColor] = useState('#000000')
  const [opacity, setOpacity] = useState(15)
  const [inset, setInset] = useState(false)

  const hexToRgba = (hex, alphaPercent) => {
    let cleanHex = hex.replace('#', '')
    if (cleanHex.length === 3) {
      cleanHex = cleanHex.split('').map((c) => c + c).join('')
    }
    const r = parseInt(cleanHex.substring(0, 2) || '0', 16)
    const g = parseInt(cleanHex.substring(2, 4) || '0', 16)
    const b = parseInt(cleanHex.substring(4, 6) || '0', 16)
    const a = (alphaPercent / 100).toFixed(2)
    return `rgba(${r}, ${g}, ${b}, ${a})`
  }

  const shadowValue = useMemo(() => {
    const rgba = hexToRgba(color, opacity)
    const insetText = inset ? 'inset ' : ''
    return `${insetText}${offsetX}px ${offsetY}px ${blur}px ${spread}px ${rgba}`
  }, [offsetX, offsetY, blur, spread, color, opacity, inset])

  const cssString = `box-shadow: ${shadowValue};`

  return (
    <div className="space-y-6">
      {/* Live Preview */}
      <div className="flex items-center justify-center rounded-xl border border-line bg-paper p-10 min-h-[220px]">
        <div
          className="h-32 w-48 sm:w-64 rounded-2xl bg-paper-raised border border-line flex items-center justify-center p-4 font-mono text-xs font-semibold text-ink-soft text-center transition-all"
          style={{ boxShadow: shadowValue }}
        >
          Box Shadow Preview
        </div>
      </div>

      {/* Controls Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <NumberField label="Horizontal Offset (X)" value={offsetX} onChange={(v) => setOffsetX(Number(v) || 0)} min={-50} max={50} suffix="px" />
          <input type="range" min={-50} max={50} value={offsetX} onChange={(e) => setOffsetX(Number(e.target.value))} className="mt-2 w-full accent-saffron" />
        </div>

        <div>
          <NumberField label="Vertical Offset (Y)" value={offsetY} onChange={(v) => setOffsetY(Number(v) || 0)} min={-50} max={50} suffix="px" />
          <input type="range" min={-50} max={50} value={offsetY} onChange={(e) => setOffsetY(Number(e.target.value))} className="mt-2 w-full accent-saffron" />
        </div>

        <div>
          <NumberField label="Blur Radius" value={blur} onChange={(v) => setBlur(Math.max(0, Number(v) || 0))} min={0} max={100} suffix="px" />
          <input type="range" min={0} max={100} value={blur} onChange={(e) => setBlur(Number(e.target.value))} className="mt-2 w-full accent-saffron" />
        </div>

        <div>
          <NumberField label="Spread Radius" value={spread} onChange={(v) => setSpread(Number(v) || 0)} min={-50} max={50} suffix="px" />
          <input type="range" min={-50} max={50} value={spread} onChange={(e) => setSpread(Number(e.target.value))} className="mt-2 w-full accent-saffron" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 items-center rounded-xl border border-line bg-paper p-4">
        <div>
          <label className="text-xs font-medium text-ink-soft">Shadow Color</label>
          <div className="mt-1 flex items-center gap-2">
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="h-9 w-12 cursor-pointer rounded-md border border-line bg-paper-raised p-0.5"
            />
            <TextField value={color} onChange={setColor} />
          </div>
        </div>

        <div>
          <NumberField label="Opacity (%)" value={opacity} onChange={(v) => setOpacity(Math.min(100, Math.max(0, Number(v) || 0)))} min={0} max={100} suffix="%" />
          <input type="range" min={0} max={100} value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="mt-2 w-full accent-saffron" />
        </div>

        <div className="flex items-center gap-2 sm:pt-5">
          <input
            type="checkbox"
            id="inset-check"
            checked={inset}
            onChange={(e) => setInset(e.target.checked)}
            className="h-4 w-4 rounded border-line text-saffron focus:ring-saffron"
          />
          <label htmlFor="inset-check" className="text-sm font-medium text-ink cursor-pointer">
            Inset Shadow (Inner)
          </label>
        </div>
      </div>

      {/* CSS Output */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-ink">Generated CSS Code</label>
          <CopyButton getText={() => cssString} />
        </div>
        <pre className="rounded-xl border border-line bg-paper p-4 font-mono text-sm text-ink overflow-x-auto select-all">
          {cssString}
        </pre>
      </div>
    </div>
  )
}
