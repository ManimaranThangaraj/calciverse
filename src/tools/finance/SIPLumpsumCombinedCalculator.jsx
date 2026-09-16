import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

const inr = (n) => n.toLocaleString('en-IN', { maximumFractionDigits: 0 })

export default function SIPLumpsumCombinedCalculator() {
  const [lumpsumAmount, setLumpsumAmount] = useState(100000)
  const [monthlySIP, setMonthlySIP] = useState(5000)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [investmentTenure, setInvestmentTenure] = useState(10)

  const { totalInvested, lumpsumFV, sipFV, totalMaturity, totalReturns } = useMemo(() => {
    const L = Number(lumpsumAmount) || 0
    const P = Number(monthlySIP) || 0
    const annualRate = (Number(expectedReturn) || 0) / 100
    const years = Number(investmentTenure) || 0
    const r = annualRate / 12
    const n = years * 12

    const lFV = L * Math.pow(1 + annualRate, years)
    let sFV = 0
    if (r > 0 && n > 0) {
      sFV = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
    }

    const inv = L + P * n
    const mat = lFV + sFV
    const ret = Math.max(0, mat - inv)

    return {
      totalInvested: inv,
      lumpsumFV: lFV,
      sipFV: sFV,
      totalMaturity: mat,
      totalReturns: ret
    }
  }, [lumpsumAmount, monthlySIP, expectedReturn, investmentTenure])

  const invPct = totalMaturity > 0 ? ((totalInvested / totalMaturity) * 100).toFixed(1) : 50
  const gainPct = totalMaturity > 0 ? ((totalReturns / totalMaturity) * 100).toFixed(1) : 50

  const summaryText = `Initial Lumpsum: ₹${inr(lumpsumAmount)} + Monthly SIP: ₹${inr(monthlySIP)} @ ${expectedReturn}% for ${investmentTenure} years\nTotal Invested: ₹${inr(totalInvested)}\nWealth Gained: ₹${inr(totalReturns)}\nTotal Maturity Value: ₹${inr(totalMaturity)}`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="Initial Lumpsum" value={lumpsumAmount} onChange={setLumpsumAmount} suffix="₹" />
        <NumberField label="Monthly SIP" value={monthlySIP} onChange={setMonthlySIP} suffix="₹" />
        <NumberField label="Expected Return (p.a.)" value={expectedReturn} onChange={setExpectedReturn} suffix="%" step="0.1" />
        <NumberField label="Tenure" value={investmentTenure} onChange={setInvestmentTenure} suffix="years" />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Est. Total Maturity" value={`₹${inr(totalMaturity)}`} emphasis />
        <ResultStat label="Total Invested Amount" value={`₹${inr(totalInvested)}`} />
        <ResultStat label="Wealth Gained" value={`₹${inr(totalReturns)}`} />
      </div>

      <div className="mt-6 rounded-xl border border-line bg-paper-raised p-5 shadow-sm">
        <div className="flex items-center justify-between text-xs font-semibold mb-2">
          <span className="text-sky-700 dark:text-sky-400">Invested: ₹{inr(totalInvested)} ({invPct}%)</span>
          <span className="text-emerald-700 dark:text-emerald-400">Wealth Gained: ₹{inr(totalReturns)} ({gainPct}%)</span>
        </div>
        <div className="flex h-3.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800 mb-3">
          <div style={{ width: `${invPct}%` }} className="bg-sky-500 transition-all duration-500" title="Invested" />
          <div style={{ width: `${gainPct}%` }} className="bg-emerald-500 transition-all duration-500" title="Wealth Gained" />
        </div>
        <div className="pt-2 text-xs text-ink-soft flex flex-wrap justify-between gap-2 border-t border-line/60">
          <span>Lumpsum Share Growth: <strong className="text-ink font-mono">₹{inr(lumpsumFV)}</strong></span>
          <span>SIP Share Growth: <strong className="text-ink font-mono">₹{inr(sipFV)}</strong></span>
        </div>
      </div>

      <ToolActions
        toolName="SIP + Lumpsum Combined Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/sip-lumpsum-combined-calculator"
      />
    </div>
  )
}
