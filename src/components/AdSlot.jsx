import { useEffect, useRef, useState } from 'react'

const ADSENSE_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT || 'ca-pub-3328643502138366'

export default function AdSlot({ slot, format = 'auto', className = '', label = 'Advertisement' }) {
  const insRef = useRef(null)
  const pushed = useRef(false)
  const [isFilled, setIsFilled] = useState(true) // Render container by default for crawler visibility

  useEffect(() => {
    if (!ADSENSE_CLIENT) return

    if (!pushed.current) {
      try {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        pushed.current = true
      } catch {
        /* ignore script load timing error */
      }
    }

    // Observer to detect when AdSense actually serves and renders an ad
    const observer = new MutationObserver(() => {
      if (insRef.current) {
        const hasIframe = insRef.current.querySelector('iframe') !== null
        const isUnfilled = insRef.current.getAttribute('data-ad-status') === 'unfilled'
        if (hasIframe && !isUnfilled) {
          setIsFilled(true)
        } else if (isUnfilled) {
          setIsFilled(false)
        }
      }
    })

    if (insRef.current) {
      observer.observe(insRef.current, { childList: true, attributes: true, attributeFilter: ['data-ad-status'] })
    }

    return () => observer.disconnect()
  }, [slot])

  if (!ADSENSE_CLIENT) {
    return null
  }

  return (
    <div className={`ad-slot-wrapper print:hidden no-print overflow-hidden text-center my-4 ${isFilled ? className : 'hidden'}`}>
      <ins
        ref={insRef}
        className="adsbygoogle block min-h-[90px]"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        {...(slot ? { 'data-ad-slot': slot } : {})}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}

