import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

const inr = (n) => n.toLocaleString('en-IN', { maximumFractionDigits: 0 })

export default function SIPCalculator() {
  const [monthly, setMonthly] = useState(5000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(15)

  const { maturity, invested, gains, yearlyData, csvString } = useMemo(() => {
    const M = Number(monthly) || 0
    const r = (Number(rate) || 0) / 12 / 100
    const n = (Number(years) || 0) * 12
    if (!M || !n) return { maturity: 0, invested: 0, gains: 0, yearlyData: [], csvString: '' }
    const fv = r === 0 ? M * n : M * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
    const inv = M * n

    const yData = []
    let csv = 'Year,Invested Amount (INR),Est. Wealth Value (INR),Wealth Gained (INR)\n'

    for (let y = 1; y <= Number(years); y++) {
      const monthsCount = y * 12
      const val = r === 0 ? M * monthsCount : M * ((Math.pow(1 + r, monthsCount) - 1) / r) * (1 + r)
      const invY = M * monthsCount
      yData.push({ year: y, invested: invY, value: val, gains: val - invY })
    }

    const pdfRows = yData.map((r) => ({
      Year: `Year ${r.year}`,
      'Invested Amount': `₹${inr(r.invested)}`,
      'Wealth Gained': `₹${inr(r.gains)}`,
      'Est. Maturity Value': `₹${inr(r.value)}`
    }))

    return { maturity: fv, invested: inv, gains: fv - inv, yearlyData: yData, pdfRows }
  }, [monthly, rate, years])

  const invPct = maturity > 0 ? ((invested / maturity) * 100).toFixed(1) : 50
  const gainPct = maturity > 0 ? ((gains / maturity) * 100).toFixed(1) : 50

  const summaryText = `Monthly SIP: ₹${inr(monthly)} @ ${rate}% expected return for ${years} years\nTotal Invested: ₹${inr(invested)}\nEst. Wealth Gained: ₹${inr(gains)}\nTotal Maturity Value: ₹${inr(maturity)}`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Monthly investment" value={monthly} onChange={setMonthly} suffix="₹" />
        <NumberField label="Expected return (p.a.)" value={rate} onChange={setRate} suffix="%" step="0.1" />
        <NumberField label="Duration" value={years} onChange={setYears} suffix="years" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Maturity value" value={`₹${inr(maturity)}`} emphasis />
        <ResultStat label="Amount invested" value={`₹${inr(invested)}`} />
        <ResultStat label="Wealth gained" value={`₹${inr(gains)}`} />
      </div>

      {/* Visual Investment vs Gains ratio bar */}
      <div className="mt-6 rounded-xl border border-line bg-paper-raised p-5 shadow-sm">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-sky-700 dark:text-sky-400">Invested Amount: ₹{inr(invested)} ({invPct}%)</span>
          <span className="text-emerald-700 dark:text-emerald-400">Wealth Gained: ₹{inr(gains)} ({gainPct}%)</span>
        </div>
        <div className="mt-2 flex h-3.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div style={{ width: `${invPct}%` }} className="bg-sky-500 transition-all duration-500" title="Invested Amount" />
          <div style={{ width: `${gainPct}%` }} className="bg-emerald-500 transition-all duration-500" title="Wealth Gained" />
        </div>
      </div>

      <ToolActions
        toolName="SIP Return Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/sip-calculator"
        pdfTitle="SIP Wealth Projection Report"
        pdfRows={pdfRows}
      />

      {/* Year-by-Year Growth Table */}
      {yearlyData.length > 0 && (
        <div className="mt-6 rounded-xl border border-line bg-paper-raised p-5 shadow-sm">
          <h4 className="font-display text-sm font-semibold text-ink mb-3">Year-by-Year Wealth Growth</h4>
          <div className="max-h-64 overflow-y-auto rounded-lg border border-line bg-paper">
            <table className="w-full text-left text-xs">
              <thead className="sticky top-0 bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-100 font-bold border-b border-line shadow-sm">
                <tr>
                  <th className="px-3 py-2.5 text-slate-900 dark:text-slate-100 font-bold">Year</th>
                  <th className="px-3 py-2.5 text-slate-900 dark:text-slate-100 font-bold">Invested</th>
                  <th className="px-3 py-2.5 text-slate-900 dark:text-slate-100 font-bold">Wealth Gained</th>
                  <th className="px-3 py-2.5 text-right text-slate-900 dark:text-slate-100 font-bold">Est. Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line/40 text-ink-soft font-mono tabular-nums">
                {yearlyData.map((r) => (
                  <tr key={r.year} className="hover:bg-line/20 transition-colors">
                    <td className="px-3 py-2 font-sans font-semibold text-ink">Year {r.year}</td>
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

      <p className="mt-5 text-xs text-ink-soft/60">
        Assumes a constant monthly return compounded monthly — real mutual fund returns vary year to year and are not guaranteed.
      </p>
    </div>
  )
}
