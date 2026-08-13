import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function NPSCalculator() {
  const [monthlyContribution, setMonthlyContribution] = useState(10000)
  const [age, setAge] = useState(30)
  const [expectedReturn, setExpectedReturn] = useState(10)
  const [annuityRatio, setAnnuityRatio] = useState(40) // % converted to annuity at age 60

  const { invested, totalCorpus, lumpSum, annuityCorpus, monthlyPension } = useMemo(() => {
    const P = Number(monthlyContribution) || 0
    const currentAge = Number(age) || 30
    const years = Math.max(1, 60 - currentAge)
    const r = (Number(expectedReturn) || 0) / 12 / 100
    const n = years * 12
    
    if (!P || n <= 0) return { invested: 0, totalCorpus: 0, lumpSum: 0, annuityCorpus: 0, monthlyPension: 0 }

    // FV of monthly SIP
    const fv = (P * (Math.pow(1 + r, n) - 1) * (1 + r)) / r
    const totalInvested = P * n
    const annRatio = (Number(annuityRatio) || 40) / 100
    const annuityVal = fv * annRatio
    const lumpSumVal = fv * (1 - annRatio)
    
    // Assuming 6% return on annuity reinvestment
    const pension = (annuityVal * 0.06) / 12

    return {
      invested: totalInvested,
      totalCorpus: fv,
      lumpSum: lumpSumVal,
      annuityCorpus: annuityVal,
      monthlyPension: pension,
    }
  }, [monthlyContribution, age, expectedReturn, annuityRatio])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="Monthly contribution" value={monthlyContribution} onChange={setMonthlyContribution} suffix="₹" step={1000} />
        <NumberField label="Current age" value={age} onChange={setAge} suffix="yrs" max={59} />
        <NumberField label="Expected return (p.a.)" value={expectedReturn} onChange={setExpectedReturn} suffix="%" step="0.5" />
        <NumberField label="Annuity purchase %" value={annuityRatio} onChange={setAnnuityRatio} suffix="%" min={40} max={100} hint="Min 40% at age 60" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Total Invested" value={`₹${inr(invested)}`} />
        <ResultStat label="Total Retirement Corpus" value={`₹${inr(totalCorpus)}`} emphasis />
        <ResultStat label="Tax-Free Lump Sum (60%)" value={`₹${inr(lumpSum)}`} />
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Annuity Corpus (40%)" value={`₹${inr(annuityCorpus)}`} />
        <ResultStat label="Est. Monthly Pension (@6%)" value={`₹${inr(monthlyPension)}`} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        NPS matures at age 60. At least 40% of the corpus must be reinvested in an annuity to receive monthly pension.
      </p>
    </div>
  )
}
