import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

export default function PxToVwCalculator() {
  const [pixelSize, setPixelSize] = useState(32)
  const [viewportWidth, setViewportWidth] = useState(1440)
  const [viewportHeight, setViewportHeight] = useState(900)

  const { vwVal, vhVal } = useMemo(() => {
    const px = Number(pixelSize) || 0
    const w = Number(viewportWidth) || 0
    const h = Number(viewportHeight) || 0

    if (!px || !w || !h) return { vwVal: '0.00', vhVal: '0.00' }

    const vw = (px / w) * 100
    const vh = (px / h) * 100

    return { vwVal: vw.toFixed(3), vhVal: vh.toFixed(3) }
  }, [pixelSize, viewportWidth, viewportHeight])

  const summaryText = `Pixel Size: ${pixelSize}px\nViewport Width (${viewportWidth}px): ${vwVal}vw\nViewport Height (${viewportHeight}px): ${vhVal}vh`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Pixel Size (px)" value={pixelSize} onChange={setPixelSize} suffix="px" />
        <NumberField label="Viewport Width" value={viewportWidth} onChange={setViewportWidth} suffix="px" />
        <NumberField label="Viewport Height" value={viewportHeight} onChange={setViewportHeight} suffix="px" />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label={`Viewport Width (${viewportWidth}px)`} value={`${vwVal}vw`} emphasis />
        <ResultStat label={`Viewport Height (${viewportHeight}px)`} value={`${vhVal}vh`} />
      </div>

      <div className="mt-6 rounded-xl border border-line bg-paper-raised p-4 font-mono text-xs text-ink-soft space-y-1">
        <span className="block font-sans text-[11px] text-ink-soft/70">CSS Output</span>
        <code>font-size: {vwVal}vw; /* {pixelSize}px at {viewportWidth}px screen */</code>
      </div>

      <ToolActions
        toolName="PX to VW / VH Converter"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/css-px-to-vw-calculator"
      />
    </div>
  )
}
