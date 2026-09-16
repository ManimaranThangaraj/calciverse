import { useState, useMemo } from 'react'
import { TextField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

function hexToLuminance(hex) {
  let c = hex.replace('#', '')
  if (c.length === 3) c = c.split('').map((x) => x + x).join('')
  if (c.length !== 6) return 0.5

  const r = parseInt(c.substring(0, 2), 16) / 255
  const g = parseInt(c.substring(2, 4), 16) / 255
  const b = parseInt(c.substring(4, 6), 16) / 255

  const sRGB = [r, g, b].map((val) => (val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)))
  return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2]
}

export default function ColorContrastChecker() {
  const [textColor, setTextColor] = useState('#12213A')
  const [bgColor, setBgColor] = useState('#FFFFFF')

  const { contrastRatio, passAA, passAAA } = useMemo(() => {
    const l1 = hexToLuminance(textColor)
    const l2 = hexToLuminance(bgColor)

    const maxL = Math.max(l1, l2)
    const minL = Math.min(l1, l2)

    const ratio = (maxL + 0.05) / (minL + 0.05)
    return {
      contrastRatio: ratio.toFixed(2),
      passAA: ratio >= 4.5,
      passAAA: ratio >= 7.0
    }
  }, [textColor, bgColor])

  const summaryText = `Text Color: ${textColor} vs Background: ${bgColor}\nContrast Ratio: ${contrastRatio}:1\nWCAG AA (4.5:1): ${passAA ? 'PASS' : 'FAIL'}\nWCAG AAA (7.0:1): ${passAAA ? 'PASS' : 'FAIL'}`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField label="Text Color (HEX)" value={textColor} onChange={setTextColor} placeholder="#12213A" />
        <TextField label="Background Color (HEX)" value={bgColor} onChange={setBgColor} placeholder="#FFFFFF" />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Contrast Ratio" value={`${contrastRatio} : 1`} emphasis />
        <ResultStat label="WCAG AA (4.5:1)" value={passAA ? 'PASS ✓' : 'FAIL ✕'} />
        <ResultStat label="WCAG AAA (7.0:1)" value={passAAA ? 'PASS ✓' : 'FAIL ✕'} />
      </div>

      <div
        className="mt-6 rounded-xl p-6 text-center border border-line shadow-sm transition-colors"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <span className="text-xl font-bold font-display block">Sample Preview Heading</span>
        <span className="text-xs font-medium mt-1 block">The quick brown fox jumps over the lazy dog.</span>
      </div>

      <ToolActions
        toolName="WCAG Color Contrast Ratio Checker"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/color-contrast-checker"
      />
    </div>
  )
}
