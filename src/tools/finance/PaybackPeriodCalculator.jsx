import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

const inr = (n) => n.toLocaleString('en-IN', { maximumFractionDigits: 0 })

export default function PaybackPeriodCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(500000)
  const [annualCashFlow, setAnnualCashFlow] = useState(125000)

  const { paybackYears, paybackMonths, isViable } = useMemo(() => {
    const P = Number(initialInvestment) || 0
    const CF = Number(annualCashFlow) || 0

    if (P <= 0 || CF <= 0) {
      return { paybackYears: 0, paybackMonths: 0, isViable: false }
    }

    const totalYears = P / CF
    const years = Math.floor(totalYears)
    const months = Math.round((totalYears - years) * 12)

    return { paybackYears: years, paybackMonths: months, isViable: true }
  }, [initialInvestment, annualCashFlow])

  const summaryText = `Initial Investment: ₹${inr(initialInvestment)}\nAnnual Cash Inflow: ₹${inr(annualCashFlow)}\nPayback Period: ${paybackYears} Years, ${paybackMonths} Months`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Initial Investment Cost" value={initialInvestment} onChange={setInitialInvestment} suffix="₹" />
        <NumberField label="Expected Annual Cash Flow" value={annualCashFlow} onChange={setAnnualCashFlow} suffix="₹" />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat
          label="Payback Period (Years)"
          value={isViable ? `${paybackYears} yrs ${paybackMonths} mos` : 'N/A'}
          emphasis
        />
        <ResultStat
          label="Annual ROI Rate"
          value={isViable ? `${((annualCashFlow / initialInvestment) * 100).toFixed(1)}%` : '0%'}
        />
      </div>

      <ToolActions
        toolName="Investment Payback Period Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/payback-period-calculator"
      />
    </div>
  )
}
