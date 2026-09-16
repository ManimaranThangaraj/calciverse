import { useState, useId } from 'react'

export default function StepUpSIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000)
  const [annualStepUp, setAnnualStepUp] = useState(10)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [investmentTenure, setInvestmentTenure] = useState(10)

  const monthlyId = useId()
  const stepUpId = useId()
  const returnId = useId()
  const tenureId = useId()

  const calculateStepUpSIP = () => {
    const P0 = Number(monthlyInvestment) || 0
    const stepUp = (Number(annualStepUp) || 0) / 100
    const annualRate = (Number(expectedReturn) || 0) / 100
    const years = Number(investmentTenure) || 0
    const r = annualRate / 12

    let totalInvested = 0
    let totalValue = 0
    let currentMonthlyP = P0

    for (let y = 1; y <= years; y++) {
      for (let m = 1; m <= 12; m++) {
        totalInvested += currentMonthlyP
        totalValue = (totalValue + currentMonthlyP) * (1 + r)
      }
      currentMonthlyP = currentMonthlyP * (1 + stepUp)
    }

    const estimatedWealth = Math.max(0, totalValue - totalInvested)

    return {
      totalInvested,
      totalValue,
      estimatedWealth
    }
  }

  const result = calculateStepUpSIP()

  const fmt = (v) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(v)

  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={monthlyId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Initial Monthly Investment (₹)
          </label>
          <input
            id={monthlyId}
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          />
        </div>

        <div>
          <label htmlFor={stepUpId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Annual Step-Up Increment (%)
          </label>
          <input
            id={stepUpId}
            type="number"
            value={annualStepUp}
            onChange={(e) => setAnnualStepUp(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          />
        </div>

        <div>
          <label htmlFor={returnId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Expected Annual Return Rate (%)
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
            value={investmentTenure}
            onChange={(e) => setInvestmentTenure(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-paper p-6 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-ink border-b border-line pb-2">
          Step-Up SIP Projection Summary
        </h3>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Total Invested Amount</span>
            <strong className="text-base font-bold text-ink">{fmt(result.totalInvested)}</strong>
          </div>

          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Estimated Wealth Gain</span>
            <strong className="text-base font-bold text-saffron">{fmt(result.estimatedWealth)}</strong>
          </div>

          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Total Expected Maturity Value</span>
            <strong className="text-base font-bold text-signal">{fmt(result.totalValue)}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
