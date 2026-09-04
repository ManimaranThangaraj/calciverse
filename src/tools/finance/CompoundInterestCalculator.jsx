import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(100000)
  const [rate, setRate] = useState(8.5)
  const [years, setYears] = useState(5)
  const [frequency, setFrequency] = useState('12') // default monthly

  const { interest, total } = useMemo(() => {
    const P = Number(principal) || 0
    const r = (Number(rate) || 0) / 100
    const t = Number(years) || 0
    const n = Number(frequency) || 1
    if (!P || !t) return { interest: 0, total: 0 }
    const A = P * Math.pow(1 + r / n, n * t)
    return { interest: A - P, total: A }
  }, [principal, rate, years, frequency])

  const getTextSummary = () =>
    `Compound Interest Summary:\n` +
    `• Principal Amount: ₹${inr(principal)}\n` +
    `• Interest Rate: ${rate}%\n` +
    `• Tenure: ${years} Years\n` +
    `• Interest Earned: ₹${inr(interest)}\n` +
    `• Total Maturity Amount: ₹${inr(total)}\n\n` +
    `Calculated on Calciverse: ${window.location.href}`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="Principal amount" value={principal} onChange={setPrincipal} suffix="₹" />
        <NumberField label="Annual interest rate" value={rate} onChange={setRate} suffix="%" step="0.1" />
        <NumberField label="Tenure" value={years} onChange={setYears} suffix="years" />
        <SelectField
          label="Compounding frequency"
          value={frequency}
          onChange={setFrequency}
          options={[
            { label: 'Monthly (n=12)', value: '12' },
            { label: 'Quarterly (n=4)', value: '4' },
            { label: 'Semi-Annually (n=2)', value: '2' },
            { label: 'Annually (n=1)', value: '1' },
          ]}
        />
      </div>

      <ToolActions
        title="Compound Interest Summary"
        getTextSummary={getTextSummary}
        onDownloadPDF={getTextSummary}
      />

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Principal Amount" value={`₹${inr(principal)}`} />
        <ResultStat label="Compound Interest" value={`₹${inr(interest)}`} emphasis />
        <ResultStat label="Maturity Amount" value={`₹${inr(total)}`} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Formula: A = P × (1 + r/n)^(n×t). Compound interest grows exponentially compared to simple interest.
      </p>
    </div>
  )
}

