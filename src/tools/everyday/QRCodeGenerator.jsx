import { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'
import { Download } from 'lucide-react'
import { TextField } from '../../components/ui/Field.jsx'

export default function QRCodeGenerator() {
  const [text, setText] = useState('https://calciverse.in')
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return
    QRCode.toCanvas(canvasRef.current, text || ' ', { width: 240, margin: 1, color: { dark: '#12213A', light: '#FFFFFF' } }).catch(() => {})
  }, [text])

  const download = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const link = document.createElement('a')
    link.download = 'qrcode.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  return (
    <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
      <div>
        <TextField label="Text, link or contact info" value={text} onChange={setText} placeholder="https://example.com" />
        <p className="mt-2 text-xs text-ink-soft/60">Generated entirely in your browser — nothing is sent to a server.</p>
      </div>
      <div className="flex flex-col items-center gap-3 rounded-xl border border-line bg-paper-raised p-4">
        <canvas ref={canvasRef} />
        <button onClick={download} className="flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-1.5 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-saffron dark:text-slate-950 dark:hover:bg-saffron/90 transition-colors">
          <Download size={15} /> Download PNG
        </button>
      </div>
    </div>
  )
}
