import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(30)
  const [retireAge, setRetireAge] = useState(60)
  const [monthlyExpense, setMonthlyExpense] = useState(50000)
  const [inflationRate, setInflationRate] = useState(6)
  const [postRetireReturn, setPostRetireReturn] = useState(7)
  const [lifeExpectancy, setLifeExpectancy] = useState(85)

  const { futureMonthlyExpense, requiredCorpus } = useMemo(() => {
    const age = Number(currentAge) || 30
    const rAge = Number(retireAge) || 60
    const exp = Number(monthlyExpense) || 0
    const inf = (Number(inflationRate) || 6) / 100
    const ret = (Number(postRetireReturn) || 7) / 100
    const life = Number(lifeExpectancy) || 85

    const yearsToRetire = Math.max(1, rAge - age)
    const postRetireYears = Math.max(1, life - rAge)

    // Monthly expense inflated to retirement age
    const futureMonthly = exp * Math.pow(1 + inf, yearsToRetire)
    const futureAnnual = futureMonthly * 12

    // Real rate of return post-retirement
    const realRate = (1 + ret) / (1 + inf) - 1
    
    // Present value of annuity needed at retirement
    let corpus = 0
    if (Math.abs(realRate) < 0.001) {
      corpus = futureAnnual * postRetireYears
    } else {
      corpus = (futureAnnual * (1 - Math.pow(1 + realRate, -postRetireYears))) / realRate
    }

    return { futureMonthlyExpense: futureMonthly, requiredCorpus: corpus }
  }, [currentAge, retireAge, monthlyExpense, inflationRate, postRetireReturn, lifeExpectancy])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Current age" value={currentAge} onChange={setCurrentAge} suffix="yrs" />
        <NumberField label="Target retirement age" value={retireAge} onChange={setRetireAge} suffix="yrs" />
        <NumberField label="Current monthly expense" value={monthlyExpense} onChange={setMonthlyExpense} suffix="₹" step={5000} />
        <NumberField label="Expected inflation rate" value={inflationRate} onChange={setInflationRate} suffix="%" step="0.5" />
        <NumberField label="Post-retirement return" value={postRetireReturn} onChange={setPostRetireReturn} suffix="%" step="0.5" />
        <NumberField label="Life expectancy" value={lifeExpectancy} onChange={setLifeExpectancy} suffix="yrs" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Monthly Expense at Retirement" value={`₹${inr(futureMonthlyExpense)}`} />
        <ResultStat label="Total Required Corpus" value={`₹${inr(requiredCorpus)}`} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Takes into account pre-retirement inflation and real rate of return post-retirement for inflation-protected monthly payouts.
      </p>
    </div>
  )
}
