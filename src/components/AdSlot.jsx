import { useEffect, useRef, useState } from 'react'

const ADSENSE_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT || ''

export default function AdSlot({ slot, format = 'auto', className = '', label = 'Advertisement' }) {
  const insRef = useRef(null)
  const pushed = useRef(false)
  const [isFilled, setIsFilled] = useState(false)

  const isRealSlot = slot && !slot.startsWith('000000')

  useEffect(() => {
    if (!ADSENSE_CLIENT || !isRealSlot) return

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
  }, [isRealSlot])

  if (!ADSENSE_CLIENT || !isRealSlot) {
    return null
  }

  return (
    <div className={`ad-slot-wrapper print:hidden no-print ${isFilled ? className : 'hidden'}`}>
      <ins
        ref={insRef}
        className="adsbygoogle block"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
