import { useEffect, useState } from 'react'

const FRAMES = [
  { label: 'EMI on ₹25,00,000 @ 8.5% for 20yr', value: '₹21,696 / mo' },
  { label: 'BMI at 72kg, 175cm', value: '23.5 · Normal' },
  { label: 'GST @ 18% on ₹4,500', value: '₹810' },
  { label: 'SIP of ₹5,000/mo for 15yr @ 12%', value: '₹25.2L' },
  { label: '82 of 90 marks', value: '91.1%' },
]

export default function LiveTicker() {
  const [i, setI] = useState(0)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setI((v) => (v + 1) % FRAMES.length)
      setTick((t) => t + 1)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  const frame = FRAMES[i]

  return (
    <div className="rounded-2xl border border-line bg-slate-900 px-6 py-5 text-white shadow-[0_6px_0_0_theme(colors.saffron)] dark:bg-slate-900/90 dark:border-line">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/50">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
        </span>
        Calculating right now
      </div>
      <div key={tick} className="mt-3 animate-[fadein_0.4s_ease]">
        <div className="text-sm text-white/70">{frame.label}</div>
        <div className="mt-1 font-mono tabular-num text-3xl font-semibold text-saffron">{frame.value}</div>
      </div>
      <style>{`@keyframes fadein { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  )
}
