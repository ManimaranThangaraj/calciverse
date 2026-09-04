import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function RDCalculator() {
  const [monthlyDeposit, setMonthlyDeposit] = useState(5000)
  const [rate, setRate] = useState(7.0)
  const [months, setMonths] = useState(36)

  const { invested, interest, total } = useMemo(() => {
    const P = Number(monthlyDeposit) || 0
    const R = Number(rate) || 0
    const N = Number(months) || 0
    if (!P || !N) return { invested: 0, interest: 0, total: 0 }
    
    // RD quarterly compounding formula used by banks in India:
    // Maturity A = P * sum( (1 + R/400)^(4*i/12) ) for i = 1 to N
    let A = 0
    for (let i = 1; i <= N; i++) {
      const quarters = (N - i + 1) / 3
      A += P * Math.pow(1 + R / 400, quarters)
    }
    const investedVal = P * N
    return { invested: investedVal, interest: A - investedVal, total: A }
  }, [monthlyDeposit, rate, months])

  const getTextSummary = () =>
    `Recurring Deposit (RD) Summary:\n` +
    `• Monthly Deposit: ₹${inr(monthlyDeposit)}\n` +
    `• Interest Rate: ${rate}%\n` +
    `• Tenure: ${months} Months\n` +
    `• Total Amount Deposited: ₹${inr(invested)}\n` +
    `• Total Interest Earned: ₹${inr(interest)}\n` +
    `• Maturity Amount: ₹${inr(total)}\n\n` +
    `Calculated on Calciverse: ${window.location.href}`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Monthly deposit" value={monthlyDeposit} onChange={setMonthlyDeposit} suffix="₹" step={500} />
        <NumberField label="Interest rate (p.a.)" value={rate} onChange={setRate} suffix="%" step="0.1" />
        <NumberField label="Tenure (months)" value={months} onChange={setMonths} suffix="months" />
      </div>

      <ToolActions
        title="Recurring Deposit Summary"
        getTextSummary={getTextSummary}
        onDownloadPDF={getTextSummary}
      />

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Total Deposited" value={`₹${inr(invested)}`} />
        <ResultStat label="Interest Earned" value={`₹${inr(interest)}`} />
        <ResultStat label="Maturity Value" value={`₹${inr(total)}`} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Calculates quarterly compounding maturity value as standard for Recurring Deposits in Indian banks.
      </p>
    </div>
  )
}

