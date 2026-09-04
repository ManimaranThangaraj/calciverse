import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import AmortizationSchedule from '../../components/ui/AmortizationSchedule.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

const inr = (n) => n.toLocaleString('en-IN', { maximumFractionDigits: 0 })

export default function EMICalculator() {
  const [principal, setPrincipal] = useState(2500000)
  const [rate, setRate] = useState(8.5)
  const [years, setYears] = useState(20)

  const { emi, totalInterest, totalPayment, pdfRows } = useMemo(() => {
    const P = Number(principal) || 0
    const r = (Number(rate) || 0) / 12 / 100
    const n = (Number(years) || 0) * 12
    if (!P || !n) return { emi: 0, totalInterest: 0, totalPayment: 0, pdfRows: [] }
    const emiVal = r === 0 ? P / n : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const total = emiVal * n

    let balance = P
    const yMap = {}
    for (let m = 1; m <= n; m++) {
      const intM = balance * r
      const prinM = Math.min(emiVal - intM, balance)
      balance = Math.max(0, balance - prinM)
      const yr = Math.ceil(m / 12)
      if (!yMap[yr]) yMap[yr] = { Year: `Year ${yr}`, 'Principal Paid': 0, 'Interest Paid': 0, 'Total Paid': 0, Balance: 0 }
      yMap[yr]['Principal Paid'] += prinM
      yMap[yr]['Interest Paid'] += intM
      yMap[yr]['Total Paid'] += emiVal
      yMap[yr]['Balance'] = balance
    }

    const rows = Object.values(yMap).map((r) => ({
      Year: r.Year,
      'Principal Paid': `₹${inr(r['Principal Paid'])}`,
      'Interest Paid': `₹${inr(r['Interest Paid'])}`,
      'Total Payment': `₹${inr(r['Total Paid'])}`,
      'Remaining Balance': `₹${inr(r['Balance'])}`
    }))

    return { emi: emiVal, totalInterest: total - P, totalPayment: total, pdfRows: rows }
  }, [principal, rate, years])

  const summaryText = `Loan Amount: ₹${inr(principal)}\nInterest Rate: ${rate}% p.a.\nTenure: ${years} years\nMonthly EMI: ₹${inr(emi)}\nTotal Interest: ₹${inr(totalInterest)}\nTotal Payment: ₹${inr(totalPayment)}`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Loan amount" value={principal} onChange={setPrincipal} suffix="₹" />
        <NumberField label="Interest rate (p.a.)" value={rate} onChange={setRate} suffix="%" step="0.01" />
        <NumberField label="Tenure" value={years} onChange={setYears} suffix="years" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Monthly EMI" value={`₹${inr(emi)}`} emphasis />
        <ResultStat label="Total interest" value={`₹${inr(totalInterest)}`} />
        <ResultStat label="Total payment" value={`₹${inr(totalPayment)}`} />
      </div>

      <ToolActions
        toolName="Home Loan EMI Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/emi-calculator"
        pdfTitle="Home Loan EMI Amortization Report"
        pdfRows={pdfRows}
      />

      <AmortizationSchedule
        principal={Number(principal)}
        rate={Number(rate)}
        years={Number(years)}
        emi={emi}
      />

      <p className="mt-5 text-xs text-ink-soft/60">
        Uses the standard reducing-balance formula: EMI = P × r × (1+r)ⁿ / ((1+r)ⁿ − 1). Estimate only — actual EMI may include processing fees and rounding by your lender.
      </p>
    </div>
  )
}
