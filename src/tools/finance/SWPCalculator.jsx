import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

const inr = (n) => n.toLocaleString('en-IN', { maximumFractionDigits: 0 })

export default function SWPCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(1000000)
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(8000)
  const [expectedReturn, setExpectedReturn] = useState(8)
  const [tenureYears, setTenureYears] = useState(10)

  const { totalInvestment, totalPayout, finalCorpus, yearlyData } = useMemo(() => {
    const P = Number(initialInvestment) || 0
    const W = Number(monthlyWithdrawal) || 0
    const annualRate = Number(expectedReturn) || 0
    const r = annualRate / 12 / 100
    const totalMonths = (Number(tenureYears) || 0) * 12

    let balance = P
    let totalWithdrawn = 0
    const yData = []

    for (let m = 1; m <= totalMonths; m++) {
      balance = balance * (1 + r) - W
      totalWithdrawn += W
      if (balance <= 0) {
        balance = 0
      }
      if (m % 12 === 0 || m === totalMonths) {
        yData.push({
          year: Math.ceil(m / 12),
          withdrawn: totalWithdrawn,
          balance: Math.max(0, balance)
        })
      }
    }

    return {
      totalInvestment: P,
      totalPayout: totalWithdrawn,
      finalCorpus: Math.max(0, balance),
      yearlyData: yData
    }
  }, [initialInvestment, monthlyWithdrawal, expectedReturn, tenureYears])

  const summaryText = `Initial Capital: ₹${inr(totalInvestment)}\nMonthly Withdrawal: ₹${inr(monthlyWithdrawal)} @ ${expectedReturn}% return for ${tenureYears} years\nTotal Withdrawn: ₹${inr(totalPayout)}\nRemaining Corpus: ₹${inr(finalCorpus)}`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="Initial Investment" value={initialInvestment} onChange={setInitialInvestment} suffix="₹" />
        <NumberField label="Monthly Withdrawal" value={monthlyWithdrawal} onChange={setMonthlyWithdrawal} suffix="₹" />
        <NumberField label="Expected Return (p.a.)" value={expectedReturn} onChange={setExpectedReturn} suffix="%" step="0.1" />
        <NumberField label="Tenure" value={tenureYears} onChange={setTenureYears} suffix="years" />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Final Remaining Corpus" value={`₹${inr(finalCorpus)}`} emphasis />
        <ResultStat label="Total Withdrawn Amount" value={`₹${inr(totalPayout)}`} />
        <ResultStat label="Initial Investment" value={`₹${inr(totalInvestment)}`} />
      </div>

      <ToolActions
        toolName="Systematic Withdrawal Plan (SWP) Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/swp-calculator"
      />

      {yearlyData.length > 0 && (
        <div className="mt-6 rounded-xl border border-line bg-paper-raised p-5 shadow-sm">
          <h4 className="font-display text-sm font-semibold text-ink mb-3">Year-by-Year SWP Schedule</h4>
          <div className="max-h-64 overflow-y-auto rounded-lg border border-line bg-paper">
            <table className="w-full text-left text-xs">
              <thead className="sticky top-0 bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-100 font-bold border-b border-line shadow-sm">
                <tr>
                  <th className="px-3 py-2.5">Year</th>
                  <th className="px-3 py-2.5">Cumulative Withdrawn</th>
                  <th className="px-3 py-2.5 text-right">Remaining Corpus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line/40 text-ink-soft font-mono tabular-nums">
                {yearlyData.map((r) => (
                  <tr key={r.year} className="hover:bg-line/20 transition-colors">
                    <td className="px-3 py-2 font-sans font-semibold text-ink">Year {r.year}</td>
                    <td className="px-3 py-2 text-saffron font-medium">₹{inr(r.withdrawn)}</td>
                    <td className="px-3 py-2 text-right font-semibold text-ink">₹{inr(r.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
