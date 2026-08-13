import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => n.toLocaleString('en-IN', { maximumFractionDigits: 0 })

function emiFor(P, r, n) {
  if (!P || !n) return 0
  return r === 0 ? P / n : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
}

export default function LoanCalculator() {
  const [principal, setPrincipal] = useState(800000)
  const [rate, setRate] = useState(10.5)
  const [years, setYears] = useState(5)

  const rows = useMemo(() => {
    const P = Number(principal) || 0
    const r = (Number(rate) || 0) / 12 / 100
    return [-1, 0, 1].map((delta) => {
      const y = Math.max(1, Number(years) + delta)
      const n = y * 12
      const emi = emiFor(P, r, n)
      const total = emi * n
      return { years: y, emi, totalInterest: total - P, isBase: delta === 0 }
    })
  }, [principal, rate, years])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Loan amount" value={principal} onChange={setPrincipal} suffix="₹" />
        <NumberField label="Interest rate (p.a.)" value={rate} onChange={setRate} suffix="%" step="0.01" />
        <NumberField label="Tenure" value={years} onChange={setYears} suffix="years" min={1} />
      </div>

      <div className="mt-6 overflow-hidden rounded-lg border border-line">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-paper text-left text-xs uppercase tracking-wide text-ink-soft/70">
              <th className="px-4 py-2.5">Tenure</th>
              <th className="px-4 py-2.5">Monthly EMI</th>
              <th className="px-4 py-2.5">Total interest</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.years} className={`border-t border-line ${row.isBase ? 'bg-saffron-soft/50' : ''}`}>
                <td className="px-4 py-2.5 font-medium">{row.years} yr</td>
                <td className="px-4 py-2.5 font-mono tabular-num">₹{inr(row.emi)}</td>
                <td className="px-4 py-2.5 font-mono tabular-num">₹{inr(row.totalInterest)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-ink-soft/60">Compares your chosen tenure against one year shorter and one year longer, so you can see the interest trade-off at a glance.</p>
    </div>
  )
}
