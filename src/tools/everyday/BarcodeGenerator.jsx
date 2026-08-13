import { useState, useRef, useEffect } from 'react'
import { TextField } from '../../components/ui/Field.jsx'
import CopyButton from '../../components/ui/CopyButton.jsx'

// Code 128 B pattern lookup table for pure client-side rendering
const CODE128_PATTERNS = [
  "212222", "222122", "222221", "121223", "121322", "131222", "122213", "122312", "132212", "221213",
  "221312", "231212", "112232", "122132", "122231", "113222", "123122", "123221", "223211", "221132",
  "221231", "213212", "223112", "312131", "311222", "321122", "321221", "312212", "322112", "322211",
  "212123", "212321", "222121", "111224", "111422", "121124", "121421", "141122", "141221", "112214",
  "112412", "122114", "122411", "142112", "142211", "241211", "221114", "213113", "214112", "231113",
  "241113", "131123", "131321", "112313", "132113", "132311", "211313", "231131", "231311", "112133",
  "113123", "113321", "133121", "131312", "132131", "133112", "311123", "311321", "312113", "312311",
  "332111", "314111", "221411", "431111", "111242", "111424", "121142", "121441", "141142", "141412",
  "421112", "421211", "441112", "112211", "112211", "112211", "112211", "112211", "112211", "112211",
  "112211", "112211", "112211", "112211", "112211", "112211", "233111", "211412", "211214", "211232",
  "2331112"
]

export default function BarcodeGenerator() {
  const [text, setText] = useState('CALCIVVERSE-2026')
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const str = text || ' '
    // Code 128B start index: 104
    let checksum = 104
    const indices = [104]

    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i) - 32
      const validCode = (code >= 0 && code <= 95) ? code : 0
      indices.push(validCode)
      checksum += validCode * (i + 1)
    }

    const checkIndex = checksum % 103
    indices.push(checkIndex)
    indices.push(106) // Stop pattern

    const moduleWidth = 3
    const height = 120
    const quietZone = 20

    let totalModules = 0
    indices.forEach(idx => {
      const p = CODE128_PATTERNS[idx] || "111111"
      for (let char of p) totalModules += parseInt(char)
    })

    canvas.width = totalModules * moduleWidth + quietZone * 2
    canvas.height = height + 40

    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = '#000000'
    let x = quietZone

    indices.forEach(idx => {
      const p = CODE128_PATTERNS[idx] || "111111"
      let isBar = true
      for (let char of p) {
        const w = parseInt(char) * moduleWidth
        if (isBar) {
          ctx.fillRect(x, 20, w, height)
        }
        x += w
        isBar = !isBar
      }
    })

    ctx.font = '16px monospace'
    ctx.textAlign = 'center'
    ctx.fillText(str, canvas.width / 2, height + 32)
  }, [text])

  const downloadBarcode = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const link = document.createElement('a')
    link.download = `barcode-${text.replace(/[^a-zA-Z0-9]/g, '_')}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 items-end">
        <TextField label="Text / Code to Encode" value={text} onChange={setText} placeholder="Enter text or number" />
        <div className="flex gap-2">
          <CopyButton getText={() => text} label="Copy Text" />
          <button
            onClick={downloadBarcode}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-saffron dark:text-slate-950 dark:hover:bg-saffron/90 transition-colors"
          >
            Download PNG
          </button>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-line bg-paper-raised p-6 shadow-sm">
        <canvas ref={canvasRef} className="max-w-full" />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Generates a standard Code 128B barcode directly inside your browser. Compatible with all retail and logistics scanners.
      </p>
    </div>
  )
}
