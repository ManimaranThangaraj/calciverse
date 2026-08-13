import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function EPFCalculator() {
  const [basicSalary, setBasicSalary] = useState(40000)
  const [currentAge, setCurrentAge] = useState(25)
  const [epfRate, setEpfRate] = useState(8.25)
  const [annualIncrement, setAnnualIncrement] = useState(5)

  const { totalEmp, totalEmpr, totalInterest, totalCorpus } = useMemo(() => {
    const basic = Number(basicSalary) || 0
    const age = Number(currentAge) || 25
    const rate = (Number(epfRate) || 8.25) / 100
    const hike = (Number(annualIncrement) || 0) / 100
    const totalYears = Math.max(1, 58 - age)

    let currentBasic = basic
    let balance = 0
    let accumulatedEmp = 0
    let accumulatedEmpr = 0

    for (let yr = 1; yr <= totalYears; yr++) {
      // Employee: 12% of basic
      // Employer EPF: 3.67% of basic (8.33% goes to EPS capped at 15k basic)
      const empMonthly = currentBasic * 0.12
      const emprMonthly = currentBasic * 0.0367

      for (let m = 1; m <= 12; m++) {
        accumulatedEmp += empMonthly
        accumulatedEmpr += emprMonthly
        balance += empMonthly + emprMonthly
      }

      // EPF interest calculated annually on running balance
      const interest = balance * rate
      balance += interest
      currentBasic += currentBasic * hike
    }

    return {
      totalEmp: accumulatedEmp,
      totalEmpr: accumulatedEmpr,
      totalInterest: balance - (accumulatedEmp + accumulatedEmpr),
      totalCorpus: balance,
    }
  }, [basicSalary, currentAge, epfRate, annualIncrement])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="Monthly basic + DA" value={basicSalary} onChange={setBasicSalary} suffix="₹" step={2000} />
        <NumberField label="Current age" value={currentAge} onChange={setCurrentAge} suffix="yrs" max={57} />
        <NumberField label="EPF Interest Rate (p.a.)" value={epfRate} onChange={setEpfRate} suffix="%" step="0.05" />
        <NumberField label="Annual Salary Hike" value={annualIncrement} onChange={setAnnualIncrement} suffix="%" step="1" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-4">
        <ResultStat label="Employee Share" value={`₹${inr(totalEmp)}`} />
        <ResultStat label="Employer Share (EPF)" value={`₹${inr(totalEmpr)}`} />
        <ResultStat label="Total Interest" value={`₹${inr(totalInterest)}`} />
        <ResultStat label="Total EPF Corpus (@58)" value={`₹${inr(totalCorpus)}`} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Assumes retirement age of 58. Employee contributes 12% of basic salary, employer contributes 3.67% into EPF (with 8.33% routed to Pension Scheme EPS up to ₹1,250/mo cap).
      </p>
    </div>
  )
}
