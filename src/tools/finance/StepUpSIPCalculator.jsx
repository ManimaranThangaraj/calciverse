import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

const inr = (n) => n.toLocaleString('en-IN', { maximumFractionDigits: 0 })

export default function StepUpSIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000)
  const [annualStepUp, setAnnualStepUp] = useState(10)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [investmentTenure, setInvestmentTenure] = useState(10)

  const { totalInvested, totalValue, estimatedWealth, yearlyData } = useMemo(() => {
    const P0 = Number(monthlyInvestment) || 0
    const stepUp = (Number(annualStepUp) || 0) / 100
    const annualRate = (Number(expectedReturn) || 0) / 100
    const years = Number(investmentTenure) || 0
    const r = annualRate / 12

    let cumInvested = 0
    let cumValue = 0
    let currentP = P0
    const yData = []

    for (let y = 1; y <= years; y++) {
      for (let m = 1; m <= 12; m++) {
        cumInvested += currentP
        cumValue = (cumValue + currentP) * (1 + r)
      }
      yData.push({
        year: y,
        monthlyP: currentP,
        invested: cumInvested,
        value: cumValue,
        gains: cumValue - cumInvested
      })
      currentP = currentP * (1 + stepUp)
    }

    return {
      totalInvested: cumInvested,
      totalValue: cumValue,
      estimatedWealth: Math.max(0, cumValue - cumInvested),
      yearlyData: yData
    }
  }, [monthlyInvestment, annualStepUp, expectedReturn, investmentTenure])

  const invPct = totalValue > 0 ? ((totalInvested / totalValue) * 100).toFixed(1) : 50
  const gainPct = totalValue > 0 ? ((estimatedWealth / totalValue) * 100).toFixed(1) : 50

  const summaryText = `Initial Monthly SIP: ₹${inr(monthlyInvestment)} (Step-Up: ${annualStepUp}% p.a.)\nTenure: ${investmentTenure} years @ ${expectedReturn}%\nTotal Invested: ₹${inr(totalInvested)}\nWealth Gained: ₹${inr(estimatedWealth)}\nTotal Maturity Value: ₹${inr(totalValue)}`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="Initial Monthly SIP" value={monthlyInvestment} onChange={setMonthlyInvestment} suffix="₹" />
        <NumberField label="Annual Step-Up" value={annualStepUp} onChange={setAnnualStepUp} suffix="%" />
        <NumberField label="Expected Return (p.a.)" value={expectedReturn} onChange={setExpectedReturn} suffix="%" step="0.1" />
        <NumberField label="Tenure" value={investmentTenure} onChange={setInvestmentTenure} suffix="years" />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Est. Maturity Value" value={`₹${inr(totalValue)}`} emphasis />
        <ResultStat label="Total Invested Amount" value={`₹${inr(totalInvested)}`} />
        <ResultStat label="Wealth Gained" value={`₹${inr(estimatedWealth)}`} />
      </div>

      <div className="mt-6 rounded-xl border border-line bg-paper-raised p-5 shadow-sm">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-sky-700 dark:text-sky-400">Invested: ₹{inr(totalInvested)} ({invPct}%)</span>
          <span className="text-emerald-700 dark:text-emerald-400">Wealth Gained: ₹{inr(estimatedWealth)} ({gainPct}%)</span>
        </div>
        <div className="mt-2 flex h-3.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div style={{ width: `${invPct}%` }} className="bg-sky-500 transition-all duration-500" title="Invested Amount" />
          <div style={{ width: `${gainPct}%` }} className="bg-emerald-500 transition-all duration-500" title="Wealth Gained" />
        </div>
      </div>

      <ToolActions
        toolName="Step-Up SIP Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/step-up-sip-calculator"
      />

      {yearlyData.length > 0 && (
        <div className="mt-6 rounded-xl border border-line bg-paper-raised p-5 shadow-sm">
          <h4 className="font-display text-sm font-semibold text-ink mb-3">Year-by-Year Step-Up Breakdown</h4>
          <div className="max-h-64 overflow-y-auto rounded-lg border border-line bg-paper">
            <table className="w-full text-left text-xs">
              <thead className="sticky top-0 bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-100 font-bold border-b border-line shadow-sm">
                <tr>
                  <th className="px-3 py-2.5">Year</th>
                  <th className="px-3 py-2.5">Monthly SIP</th>
                  <th className="px-3 py-2.5">Total Invested</th>
                  <th className="px-3 py-2.5">Wealth Gained</th>
                  <th className="px-3 py-2.5 text-right">Est. Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line/40 text-ink-soft font-mono tabular-nums">
                {yearlyData.map((r) => (
                  <tr key={r.year} className="hover:bg-line/20 transition-colors">
                    <td className="px-3 py-2 font-sans font-semibold text-ink">Year {r.year}</td>
                    <td className="px-3 py-2 text-ink">₹{inr(r.monthlyP)}</td>
                    <td className="px-3 py-2 text-sky-700 dark:text-sky-400">₹{inr(r.invested)}</td>
                    <td className="px-3 py-2 text-emerald-700 dark:text-emerald-400">₹{inr(r.gains)}</td>
                    <td className="px-3 py-2 text-right font-semibold text-ink">₹{inr(r.value)}</td>
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
