import { useState } from 'react'

export default function ToolActions({
  summaryText = '',
  toolName = 'Calciverse Calculator',
  shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://calciverse.in',
  pdfTitle = '',
  pdfRows = null
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

  const handleDownloadPDF = () => {
    const title = pdfTitle || toolName

    // Remove existing print iframe if present
    let iframe = document.getElementById('calciverse-pdf-iframe')
    if (iframe && iframe.parentNode) {
      iframe.parentNode.removeChild(iframe)
    }

    iframe = document.createElement('iframe')
    iframe.id = 'calciverse-pdf-iframe'
    iframe.style.position = 'fixed'
    iframe.style.right = '0'
    iframe.style.bottom = '0'
    iframe.style.width = '0px'
    iframe.style.height = '0px'
    iframe.style.border = '0px'
    document.body.appendChild(iframe)

    const summaryHtml = summaryText
      .split('\n')
      .map((line) => `<p style="margin: 4px 0; font-size: 14px; color: #334155;">${line}</p>`)
      .join('')

    let tableHtml = ''
    if (pdfRows && pdfRows.length > 0) {
      const headers = Object.keys(pdfRows[0])
      tableHtml = `
        <h3 style="margin-top: 24px; color: #0f172a; font-size: 16px;">Detailed Breakdown (${pdfRows.length} items)</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 12px;">
          <thead>
            <tr style="background-color: #f1f5f9; color: #0f172a; font-weight: bold; text-align: left;">
              ${headers.map((h) => `<th style="padding: 8px; border: 1px solid #cbd5e1; font-weight: bold;">${h}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${pdfRows
              .map(
                (row) => `
              <tr style="border: 1px solid #e2e8f0;">
                ${headers.map((h) => `<td style="padding: 6px 8px;">${row[h]}</td>`).join('')}
              </tr>
            `
              )
              .join('')}
          </tbody>
        </table>
      `
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title} - Calciverse PDF Report</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; padding: 24px; color: #1e293b; }
            .header { border-bottom: 2px solid #ea580c; padding-bottom: 12px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; }
            .logo { font-size: 22px; font-weight: bold; color: #ea580c; }
            .badge { background: #ffedd5; color: #c2410c; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 600; }
            .summary-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 20px; }
            .footer { margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 12px; font-size: 11px; color: #64748b; text-align: center; }
            @media print {
              body { padding: 0; }
              @page { margin: 1.5cm; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">Calciverse.in</div>
            <div class="badge">${title}</div>
          </div>
          <div class="summary-box">
            <h2 style="margin: 0 0 12px 0; font-size: 18px; color: #0f172a;">Calculation Summary Report</h2>
            ${summaryHtml}
          </div>
          ${tableHtml}
          <div class="footer">
            Generated on ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} via Calciverse (https://calciverse.in) • Free Calculators & Tools
          </div>
        </body>
      </html>
    `

    const doc = iframe.contentWindow.document
    doc.open()
    doc.write(htmlContent)
    doc.close()

    setTimeout(() => {
      iframe.contentWindow.focus()
      iframe.contentWindow.print()
    }, 300)
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

      <button
        type="button"
        onClick={handleDownloadPDF}
        className="inline-flex items-center gap-1.5 rounded-lg border border-saffron bg-saffron-soft/30 px-3.5 py-1.5 text-xs font-semibold text-saffron hover:bg-saffron hover:text-slate-950 transition-colors shadow-sm ml-auto"
      >
        <span>📄</span> Download PDF
      </button>
    </div>
  )
}
