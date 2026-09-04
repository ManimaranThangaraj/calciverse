import { useState } from 'react'

export default function ToolActions({
  summaryText = '',
  toolName = 'Calciverse Calculator',
  shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://calciverse.in',
  csvFilename = 'schedule.csv',
  csvData = null
}) {
  const [copiedText, setCopiedText] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)

  const handleWhatsAppShare = () => {
    const text = `📊 *${toolName} Calculation Result*\n\n${summaryText}\n\nCalculate yours on Calciverse: ${shareUrl}`
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`
    window.open(waUrl, '_blank', 'noopener,noreferrer')
  }

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(`${toolName} Result:\n${summaryText}\nCalculated via Calciverse (${shareUrl})`)
      setCopiedText(true)
      setTimeout(() => setCopiedText(false), 2000)
    } catch {
      /* ignore */
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2000)
    } catch {
      /* ignore */
    }
  }

  const handleDownloadCSV = () => {
    if (!csvData) return
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', csvFilename)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-line/60 pt-4">
      <button
        type="button"
        onClick={handleWhatsAppShare}
        className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700 transition-colors shadow-sm"
      >
        <span>📱</span> Share on WhatsApp
      </button>

      <button
        type="button"
        onClick={handleCopySummary}
        className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-paper-raised px-3 py-1.5 text-xs font-semibold text-ink hover:border-saffron transition-colors"
      >
        <span>📋</span> {copiedText ? 'Copied Summary!' : 'Copy Summary'}
      </button>

      <button
        type="button"
        onClick={handleCopyLink}
        className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-paper-raised px-3 py-1.5 text-xs font-semibold text-ink hover:border-saffron transition-colors"
      >
        <span>🔗</span> {copiedLink ? 'Copied Link!' : 'Share Tool Link'}
      </button>

      {csvData && (
        <button
          type="button"
          onClick={handleDownloadCSV}
          className="inline-flex items-center gap-1.5 rounded-lg border border-saffron bg-saffron-soft/30 px-3 py-1.5 text-xs font-semibold text-saffron hover:bg-saffron hover:text-slate-950 transition-colors shadow-sm ml-auto"
        >
          <span>📥</span> Download Schedule (CSV)
        </button>
      )}
    </div>
  )
}
