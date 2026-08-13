import { useState, useMemo } from 'react'
import { SelectField, NumberField, TextField } from '../../components/ui/Field.jsx'
import CopyButton from '../../components/ui/CopyButton.jsx'

export default function CSSGradientGenerator() {
  const [type, setType] = useState('linear')
  const [angle, setAngle] = useState(135)
  const [radialPos, setRadialPos] = useState('circle at center')
  const [color1, setColor1] = useState('#4f46e5')
  const [stop1, setStop1] = useState(0)
  const [color2, setColor2] = useState('#ec4899')
  const [stop2, setStop2] = useState(100)
  const [useStop3, setUseStop3] = useState(false)
  const [color3, setColor3] = useState('#f59e0b')
  const [stop3, setStop3] = useState(50)

  const gradientCss = useMemo(() => {
    let stops = `${color1} ${stop1}%`
    if (useStop3) {
      // Sort or list stops
      stops += `, ${color3} ${stop3}%`
    }
    stops += `, ${color2} ${stop2}%`

    if (type === 'linear') {
      return `background: linear-gradient(${angle}deg, ${stops});`
    } else {
      return `background: radial-gradient(${radialPos}, ${stops});`
    }
  }, [type, angle, radialPos, color1, stop1, color2, stop2, useStop3, color3, stop3])

  const styleObj = useMemo(() => {
    let stops = `${color1} ${stop1}%`
    if (useStop3) {
      stops += `, ${color3} ${stop3}%`
    }
    stops += `, ${color2} ${stop2}%`

    if (type === 'linear') {
      return { background: `linear-gradient(${angle}deg, ${stops})` }
    } else {
      return { background: `radial-gradient(${radialPos}, ${stops})` }
    }
  }, [type, angle, radialPos, color1, stop1, color2, stop2, useStop3, color3, stop3])

  return (
    <div className="space-y-6">
      {/* Live Preview */}
      <div>
        <label className="block text-sm font-medium text-ink-soft mb-2">Live Preview</label>
        <div
          className="h-44 w-full rounded-xl border border-line shadow-inner transition-all flex items-center justify-center p-4 text-white font-mono text-sm font-semibold drop-shadow-md text-center"
          style={styleObj}
        >
          {type === 'linear' ? `${angle}° Linear` : 'Radial'} Gradient
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          label="Gradient Type"
          value={type}
          onChange={setType}
          options={[
            { value: 'linear', label: 'Linear Gradient' },
            { value: 'radial', label: 'Radial Gradient' },
          ]}
        />

        {type === 'linear' ? (
          <div>
            <NumberField label="Angle (Degrees)" value={angle} onChange={(v) => setAngle(Number(v) || 0)} min={0} max={360} suffix="°" />
            <input
              type="range"
              min={0}
              max={360}
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="mt-2 w-full accent-saffron"
            />
          </div>
        ) : (
          <SelectField
            label="Radial Shape & Position"
            value={radialPos}
            onChange={setRadialPos}
            options={[
              { value: 'circle at center', label: 'Circle at Center' },
              { value: 'circle at top left', label: 'Circle at Top Left' },
              { value: 'circle at top right', label: 'Circle at Top Right' },
              { value: 'circle at bottom left', label: 'Circle at Bottom Left' },
              { value: 'circle at bottom right', label: 'Circle at Bottom Right' },
              { value: 'ellipse at center', label: 'Ellipse at Center' },
            ]}
          />
        )}
      </div>

      {/* Color Stops */}
      <div className="space-y-4 rounded-xl border border-line bg-paper p-4">
        <h3 className="text-sm font-semibold text-ink">Color Stops</h3>

        {/* Stop 1 */}
        <div className="grid gap-3 sm:grid-cols-3 items-center">
          <div>
            <label className="text-xs font-medium text-ink-soft">Color 1</label>
            <div className="mt-1 flex items-center gap-2">
              <input
                type="color"
                value={color1}
                onChange={(e) => setColor1(e.target.value)}
                className="h-9 w-12 cursor-pointer rounded-md border border-line bg-paper-raised p-0.5"
              />
              <TextField value={color1} onChange={setColor1} />
            </div>
          </div>
          <div className="sm:col-span-2">
            <NumberField label="Position 1 (%)" value={stop1} onChange={(v) => setStop1(Number(v) || 0)} min={0} max={100} suffix="%" />
          </div>
        </div>

        {/* Stop 3 (Optional) */}
        {useStop3 ? (
          <div className="grid gap-3 sm:grid-cols-3 items-center pt-2 border-t border-line">
            <div>
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-ink-soft">Color 3 (Middle)</label>
                <button
                  type="button"
                  onClick={() => setUseStop3(false)}
                  className="text-xs text-alert hover:underline"
                >
                  Remove
                </button>
              </div>
              <div className="mt-1 flex items-center gap-2">
                <input
                  type="color"
                  value={color3}
                  onChange={(e) => setColor3(e.target.value)}
                  className="h-9 w-12 cursor-pointer rounded-md border border-line bg-paper-raised p-0.5"
                />
                <TextField value={color3} onChange={setColor3} />
              </div>
            </div>
            <div className="sm:col-span-2">
              <NumberField label="Position 3 (%)" value={stop3} onChange={(v) => setStop3(Number(v) || 0)} min={0} max={100} suffix="%" />
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setUseStop3(true)}
            className="text-xs font-medium text-saffron hover:underline"
          >
            + Add Middle Color Stop
          </button>
        )}

        {/* Stop 2 */}
        <div className="grid gap-3 sm:grid-cols-3 items-center pt-2 border-t border-line">
          <div>
            <label className="text-xs font-medium text-ink-soft">Color 2</label>
            <div className="mt-1 flex items-center gap-2">
              <input
                type="color"
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
                className="h-9 w-12 cursor-pointer rounded-md border border-line bg-paper-raised p-0.5"
              />
              <TextField value={color2} onChange={setColor2} />
            </div>
          </div>
          <div className="sm:col-span-2">
            <NumberField label="Position 2 (%)" value={stop2} onChange={(v) => setStop2(Number(v) || 0)} min={0} max={100} suffix="%" />
          </div>
        </div>
      </div>

      {/* Generated Code */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-ink">Generated CSS Code</label>
          <CopyButton getText={() => gradientCss} />
        </div>
        <pre className="rounded-xl border border-line bg-paper p-4 font-mono text-sm text-ink overflow-x-auto select-all">
          {gradientCss}
        </pre>
      </div>
    </div>
  )
}
