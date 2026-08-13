import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => n.toLocaleString('en-IN', { maximumFractionDigits: 0 })

export default function FDCalculator() {
  const [principal, setPrincipal] = useState(100000)
  const [rate, setRate] = useState(7)
  const [years, setYears] = useState(5)
  const [freq, setFreq] = useState(4)

  const { maturity, interest } = useMemo(() => {
    const P = Number(principal) || 0
    const r = (Number(rate) || 0) / 100
    const t = Number(years) || 0
    const n = Number(freq)
    const m = P * Math.pow(1 + r / n, n * t)
    return { maturity: m, interest: m - P }
  }, [principal, rate, years, freq])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Deposit amount" value={principal} onChange={setPrincipal} suffix="₹" />
        <NumberField label="Interest rate (p.a.)" value={rate} onChange={setRate} suffix="%" step="0.01" />
        <NumberField label="Tenure" value={years} onChange={setYears} suffix="years" />
        <SelectField
          label="Compounding frequency"
          value={freq}
          onChange={(v) => setFreq(Number(v))}
          options={[
            { value: 1, label: 'Annually' }, { value: 2, label: 'Half-yearly' },
            { value: 4, label: 'Quarterly' }, { value: 12, label: 'Monthly' },
          ]}
        />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Maturity value" value={`₹${inr(maturity)}`} emphasis />
        <ResultStat label="Interest earned" value={`₹${inr(interest)}`} />
      </div>
    </div>
  )
}
