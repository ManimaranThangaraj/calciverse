import { useState, useId } from 'react'

export default function SIPLumpsumCombinedCalculator() {
  const [lumpsumAmount, setLumpsumAmount] = useState(100000)
  const [monthlySIP, setMonthlySIP] = useState(5000)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [investmentTenure, setInvestmentTenure] = useState(10)

  const lumpsumId = useId()
  const sipId = useId()
  const returnId = useId()
  const tenureId = useId()

  const calculateCombined = () => {
    const L = Number(lumpsumAmount) || 0
    const P = Number(monthlySIP) || 0
    const annualRate = (Number(expectedReturn) || 0) / 100
    const years = Number(investmentTenure) || 0
    const r = annualRate / 12
    const n = years * 12

    // Lumpsum future value: L * (1 + annualRate)^years
    const lumpsumFV = L * Math.pow(1 + annualRate, years)

    // SIP future value: P * [ ((1+r)^n - 1) / r ] * (1+r)
    let sipFV = 0
    if (r > 0 && n > 0) {
      sipFV = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
    }

    const totalInvested = L + P * n
    const totalMaturity = lumpsumFV + sipFV
    const totalReturns = Math.max(0, totalMaturity - totalInvested)

    return {
      totalInvested,
      lumpsumFV,
      sipFV,
      totalMaturity,
      totalReturns
    }
  }

  const result = calculateCombined()

  const fmt = (v) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(v)

  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={lumpsumId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Initial Lumpsum Investment (₹)
          </label>
          <input
            id={lumpsumId}
            type="number"
            value={lumpsumAmount}
            onChange={(e) => setLumpsumAmount(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          />
        </div>

        <div>
          <label htmlFor={sipId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Monthly SIP Amount (₹)
          </label>
          <input
            id={sipId}
            type="number"
            value={monthlySIP}
            onChange={(e) => setMonthlySIP(e.target.value)}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron"
          />
        </div>

        <div>
          <label htmlFor={returnId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
            Expected Annual Return (% p.a.)
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
          Combined Wealth Projection Summary
        </h3>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Total Invested Amount</span>
            <strong className="text-base font-bold text-ink">{fmt(result.totalInvested)}</strong>
          </div>

          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Estimated Wealth Growth</span>
            <strong className="text-base font-bold text-saffron">{fmt(result.totalReturns)}</strong>
          </div>

          <div className="rounded-xl border border-line bg-paper-raised p-4">
            <span className="block text-xs text-ink-soft">Total Expected Maturity</span>
            <strong className="text-base font-bold text-signal">{fmt(result.totalMaturity)}</strong>
          </div>
        </div>

        <div className="pt-2 text-xs text-ink-soft flex justify-between border-t border-line/60">
          <span>Lumpsum Share Growth: <strong>{fmt(result.lumpsumFV)}</strong></span>
          <span>SIP Share Growth: <strong>{fmt(result.sipFV)}</strong></span>
        </div>
      </div>
    </div>
  )
}
