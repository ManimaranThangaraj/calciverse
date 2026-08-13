import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function CreditCardInterestCalculator() {
  const [balance, setBalance] = useState(50000)
  const [monthlyInterestRate, setMonthlyInterestRate] = useState(3.5) // ~42% p.a.
  const [monthlyPayment, setMonthlyPayment] = useState(3000)

  const { monthsToPayoff, totalInterest, totalPaid } = useMemo(() => {
    let bal = Number(balance) || 0
    const r = (Number(monthlyInterestRate) || 0) / 100
    const pmt = Number(monthlyPayment) || 0

    if (bal <= 0 || pmt <= bal * r) {
      return { monthsToPayoff: Infinity, totalInterest: Infinity, totalPaid: Infinity }
    }

    let months = 0
    let interestSum = 0

    while (bal > 0 && months < 360) {
      const interestForMonth = bal * r
      interestSum += interestForMonth
      bal = bal + interestForMonth - pmt
      months++
    }

    return {
      monthsToPayoff: months,
      totalInterest: interestSum,
      totalPaid: Number(balance) + interestSum,
    }
  }, [balance, monthlyInterestRate, monthlyPayment])

  const isNever = !isFinite(monthsToPayoff)

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Outstanding Balance" value={balance} onChange={setBalance} suffix="₹" step={5000} />
        <NumberField label="Monthly Interest Rate" value={monthlyInterestRate} onChange={setMonthlyInterestRate} suffix="%" step="0.1" hint="3.5% mo = 42% annual APR" />
        <NumberField label="Planned Monthly Payment" value={monthlyPayment} onChange={setMonthlyPayment} suffix="₹" step={500} />
      </div>
      {isNever ? (
        <div className="mt-6 rounded-xl border border-alert bg-alert/10 p-4 text-alert">
          <strong>Warning:</strong> Your monthly payment is too low to cover the monthly interest. The credit card debt will grow indefinitely!
        </div>
      ) : (
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <ResultStat label="Time to Pay Off" value={`${monthsToPayoff} months`} />
          <ResultStat label="Total Interest Charged" value={`₹${inr(totalInterest)}`} emphasis />
          <ResultStat label="Total Amount Paid" value={`₹${inr(totalPaid)}`} />
        </div>
      )}
      <p className="mt-5 text-xs text-ink-soft/60">
        Revolving credit card interest compounds monthly on unpaid balances. High interest rates significantly amplify payoff timeline.
      </p>
    </div>
  )
}
