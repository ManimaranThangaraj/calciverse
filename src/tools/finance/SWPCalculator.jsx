import { useState, useId } from 'react'

export default function SWPCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(1000000)
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(8000)
  const [expectedReturn, setExpectedReturn] = useState(8)
  const [tenureYears, setTenureYears] = useState(10)

  const investmentId = useId()
  const withdrawalId = useId()
  const returnId = useId()
  const tenureId = useId()

  const calculateSWP = () => {
    const P = Number(initialInvestment) || 0
    const W = Number(monthlyWithdrawal) || 0
    const annualRate = Number(expectedReturn) || 0
    const r = annualRate / 12 / 100
    const totalMonths = (Number(tenureYears) || 0) * 12

    let balance = P
    let totalWithdrawn = 0

    for (let i = 1; i <= totalMonths; i++) {
      balance = balance * (1 + r) - W
      totalWithdrawn += W
      if (balance <= 0) {
        balance = 0
        break
      }
    }

    const totalPayout = totalWithdrawn
    const finalCorpus = Math.max(0, balance)
    const netProfit = finalCorpus + totalPayout - P

    return {
      totalPayout,
      finalCorpus,
      netProfit,
      totalInvestment: P
    }
  }

  const result = calculateSWP()

  const fmt = (v) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(v)

  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={investmentId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Total Investment Amount (₹)
          </label>
          <input
            id={investmentId}
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          />
        </div>

        <div>
          <label htmlFor={withdrawalId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Monthly Withdrawal Amount (₹)
          </label>
          <input
            id={withdrawalId}
            type="number"
            value={monthlyWithdrawal}
            onChange={(e) => setMonthlyWithdrawal(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          />
        </div>

        <div>
          <label htmlFor={returnId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Expected Return Rate (% p.a.)
          </label>
          <input
            id={returnId}
            type="number"
            step="0.1"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          />
        </div>

        <div>
          <label htmlFor={tenureId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Investment Tenure (Years)
          </label>
          <input
            id={tenureId}
            type="number"
            value={tenureYears}
            onChange={(e) => setTenureYears(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-paper p-6 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-ink border-b border-line pb-2">
          Systematic Withdrawal Summary
        </h3>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Total Initial Capital</span>
            <strong className="text-base font-bold text-ink">{fmt(result.totalInvestment)}</strong>
          </div>

          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Total Withdrawn Amount</span>
            <strong className="text-base font-bold text-saffron">{fmt(result.totalPayout)}</strong>
          </div>

          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Final Remaining Corpus</span>
            <strong className="text-base font-bold text-signal">{fmt(result.finalCorpus)}</strong>
          </div>
        </div>

        <div className="rounded-xl border border-saffron/30 bg-saffron-soft/20 p-4 text-xs font-medium text-ink">
          Over {tenureYears} years, you withdraw <strong className="text-saffron">{fmt(result.totalPayout)}</strong> while leaving a residual balance of <strong className="text-signal">{fmt(result.finalCorpus)}</strong>.
        </div>
      </div>
    </div>
  )
}
