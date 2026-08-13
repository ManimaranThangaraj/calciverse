import { useEffect, useRef } from 'react'

const ADSENSE_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT || ''
const IS_DEV = import.meta.env.DEV

export default function AdSlot({ slot, format = 'auto', className = '', label = 'Advertisement' }) {
  const insRef = useRef(null)
  const pushed = useRef(false)

  useEffect(() => {
    if (!ADSENSE_CLIENT) return

    // Automatically inject AdSense script into head if not already present
    const scriptId = 'google-adsense-script'
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.id = scriptId
      script.async = true
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`
      script.crossOrigin = 'anonymous'
      document.head.appendChild(script)
    }

    if (!pushed.current) {
      try {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        pushed.current = true
      } catch {
        /* ignore script load timing error */
      }
    }
  }, [])

  // If no AdSense ID set:
  // Show placeholder box only in local Development mode.
  // In Production, hide empty slots cleanly until real AdSense ID is provided.
  if (!ADSENSE_CLIENT) {
    if (!IS_DEV) return null

    return (
      <div
        className={`flex min-h-[90px] items-center justify-center rounded-lg border border-dashed border-line bg-paper-raised/60 text-xs font-medium uppercase tracking-wide text-ink-soft/50 ${className}`}
        aria-hidden="true"
      >
        {label} slot ({slot})
      </div>
    )
  }

  return (
    <ins
      ref={insRef}
      className={`adsbygoogle block ${className}`}
      style={{ display: 'block' }}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  )
}
