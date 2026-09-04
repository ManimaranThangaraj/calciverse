import { useState, useMemo } from 'react'

const inr = (n) => n.toLocaleString('en-IN', { maximumFractionDigits: 0 })

export default function AmortizationSchedule({
  principal = 0,
  rate = 0,
  years = 0,
  emi = 0
}) {
  const [showMonthly, setShowMonthly] = useState(false)

  const { yearlyData, monthlyData, totalInterest, totalPayment, csvString } = useMemo(() => {
    const P = Number(principal) || 0
    const r = (Number(rate) || 0) / 12 / 100
    const totalMonths = (Number(years) || 0) * 12

    if (!P || !totalMonths || !emi) {
      return { yearlyData: [], monthlyData: [], totalInterest: 0, totalPayment: 0, csvString: '' }
    }

    let balance = P
    const mData = []
    const yMap = {}

    let csv = 'Month,Year,Principal Paid (INR),Interest Paid (INR),Total Payment (INR),Remaining Balance (INR)\n'

    for (let m = 1; m <= totalMonths; m++) {
      const interestForMonth = balance * r
      const principalForMonth = Math.min(emi - interestForMonth, balance)
      balance = Math.max(0, balance - principalForMonth)

      const yr = Math.ceil(m / 12)

      mData.push({
        month: m,
        year: yr,
        principalPaid: principalForMonth,
        interestPaid: interestForMonth,
        totalPaid: emi,
        balance
      })

      csv += `${m},${yr},${principalForMonth.toFixed(0)},${interestForMonth.toFixed(0)},${emi.toFixed(0)},${balance.toFixed(0)}\n`

      if (!yMap[yr]) {
        yMap[yr] = { year: yr, principalPaid: 0, interestPaid: 0, totalPaid: 0, balance: 0 }
      }
      yMap[yr].principalPaid += principalForMonth
      yMap[yr].interestPaid += interestForMonth
      yMap[yr].totalPaid += emi
      yMap[yr].balance = balance
    }

    const yData = Object.values(yMap)
    const totInt = mData.reduce((acc, cur) => acc + cur.interestPaid, 0)
    const totPay = P + totInt

    return {
      yearlyData: yData,
      monthlyData: mData,
      totalInterest: totInt,
      totalPayment: totPay,
      csvString: csv
    }
  }, [principal, rate, years, emi])

  if (!principal || !years || yearlyData.length === 0) return null

  const principalPct = totalPayment > 0 ? ((principal / totalPayment) * 100).toFixed(1) : 50
  const interestPct = totalPayment > 0 ? ((totalInterest / totalPayment) * 100).toFixed(1) : 50

  return (
    <div className="mt-8 rounded-xl border border-line bg-paper-raised p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">Loan Amortization Breakdown</h3>
          <p className="text-xs text-ink-soft">Visual breakdown of principal vs interest paid over {years} years</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowMonthly(!showMonthly)}
            className="rounded-lg border border-line bg-paper px-3 py-1.5 text-xs font-semibold text-ink hover:border-saffron transition-colors"
          >
            {showMonthly ? 'Show Yearly Breakdown' : 'Show Monthly Breakdown'}
          </button>
        </div>
      </div>

      {/* Visual Principal vs Interest Progress Ratio Bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-emerald-700 dark:text-emerald-400">Principal: ₹{inr(principal)} ({principalPct}%)</span>
          <span className="text-amber-700 dark:text-amber-400">Interest: ₹{inr(totalInterest)} ({interestPct}%)</span>
        </div>
        <div className="mt-2 flex h-3.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div style={{ width: `${principalPct}%` }} className="bg-emerald-500 transition-all duration-500" title="Principal Portion" />
          <div style={{ width: `${interestPct}%` }} className="bg-amber-500 transition-all duration-500" title="Interest Portion" />
        </div>
      </div>

      {/* Schedule Table */}
      <div className="mt-5 max-h-80 overflow-y-auto rounded-lg border border-line bg-paper">
        <table className="w-full text-left text-xs">
          <thead className="sticky top-0 bg-slate-100 dark:bg-slate-900 font-semibold text-ink border-b border-line">
            <tr>
              <th className="px-3 py-2.5">{showMonthly ? 'Month' : 'Year'}</th>
              <th className="px-3 py-2.5">Principal Paid</th>
              <th className="px-3 py-2.5">Interest Paid</th>
              <th className="px-3 py-2.5">Total Payment</th>
              <th className="px-3 py-2.5 text-right">Balance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line/40 text-ink-soft font-mono tabular-nums">
            {(showMonthly ? monthlyData : yearlyData).map((row) => (
              <tr key={showMonthly ? `m-${row.month}` : `y-${row.year}`} className="hover:bg-line/20 transition-colors">
                <td className="px-3 py-2 font-sans font-semibold text-ink">{showMonthly ? `M${row.month}` : `Year ${row.year}`}</td>
                <td className="px-3 py-2 text-emerald-700 dark:text-emerald-400">₹{inr(row.principalPaid)}</td>
                <td className="px-3 py-2 text-amber-700 dark:text-amber-400">₹{inr(row.interestPaid)}</td>
                <td className="px-3 py-2">₹{inr(row.totalPaid)}</td>
                <td className="px-3 py-2 text-right font-semibold text-ink">₹{inr(row.balance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
