import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function PPFCalculator() {
  const [yearlyDeposit, setYearlyDeposit] = useState(150000)
  const [rate, setRate] = useState(7.1)
  const [years, setYears] = useState(15)

  const { invested, interest, total } = useMemo(() => {
    const P = Math.min(150000, Number(yearlyDeposit) || 0)
    const r = (Number(rate) || 0) / 100
    const n = Math.max(15, Number(years) || 15)
    
    let currentBalance = 0
    let totalInterest = 0

    for (let i = 1; i <= n; i++) {
      currentBalance += P
      const yearInterest = currentBalance * r
      totalInterest += yearInterest
      currentBalance += yearInterest
    }

    return { invested: P * n, interest: totalInterest, total: currentBalance }
  }, [yearlyDeposit, rate, years])

  const getTextSummary = () =>
    `Public Provident Fund (PPF) Summary:\n` +
    `• Yearly Investment: ₹${inr(yearlyDeposit)}\n` +
    `• Interest Rate: ${rate}%\n` +
    `• Tenure: ${years} Years\n` +
    `• Total Amount Invested: ₹${inr(invested)}\n` +
    `• Total Interest Gained: ₹${inr(interest)}\n` +
    `• PPF Maturity Corpus: ₹${inr(total)}\n\n` +
    `Calculated on Calciverse: ${window.location.href}`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Yearly investment (Max ₹1.5L)" value={yearlyDeposit} onChange={setYearlyDeposit} suffix="₹" max={150000} step={5000} />
        <NumberField label="Interest rate (p.a.)" value={rate} onChange={setRate} suffix="%" step="0.1" />
        <NumberField label="Tenure (Min 15 yrs)" value={years} onChange={setYears} suffix="years" min={15} max={50} />
      </div>

      <ToolActions
        title="Public Provident Fund Summary"
        getTextSummary={getTextSummary}
        onDownloadPDF={getTextSummary}
      />

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Total Invested" value={`₹${inr(invested)}`} />
        <ResultStat label="Total Interest" value={`₹${inr(interest)}`} />
        <ResultStat label="PPF Maturity Corpus" value={`₹${inr(total)}`} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        PPF has a mandatory 15-year lock-in period with EEE tax benefit (exempt-exempt-exempt). Max limit per financial year is ₹1,50,000.
      </p>
    </div>
  )
}

