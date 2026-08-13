import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(5000000)
  const [downPayment, setDownPayment] = useState(1000000)
  const [interestRate, setInterestRate] = useState(8.5)
  const [tenureYears, setTenureYears] = useState(20)

  const stats = useMemo(() => {
    const price = Number(homePrice) || 0
    const down = Number(downPayment) || 0
    const principal = Math.max(0, price - down)
    const rate = Number(interestRate) || 0
    const years = Number(tenureYears) || 0

    if (principal <= 0 || rate <= 0 || years <= 0) {
      return { emi: '₹0', interest: '₹0', total: '₹0', principal: '₹0' }
    }

    const r = rate / 12 / 100
    const n = years * 12
    const emiVal = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const totalPay = emiVal * n
    const totalInterest = totalPay - principal

    return {
      principal: `₹${principal.toLocaleString('en-IN')}`,
      emi: `₹${Math.round(emiVal).toLocaleString('en-IN')}`,
      interest: `₹${Math.round(totalInterest).toLocaleString('en-IN')}`,
      total: `₹${Math.round(totalPay).toLocaleString('en-IN')}`,
    }
  }, [homePrice, downPayment, interestRate, tenureYears])

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Home Property Price" value={homePrice} onChange={setHomePrice} suffix="₹" />
        <NumberField label="Down Payment" value={downPayment} onChange={setDownPayment} suffix="₹" />
        <NumberField label="Annual Interest Rate (%)" value={interestRate} onChange={setInterestRate} step="0.1" suffix="%" />
        <NumberField label="Loan Tenure (Years)" value={tenureYears} onChange={setTenureYears} min={1} max={30} suffix="yrs" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <ResultStat label="Loan Amount" value={stats.principal} />
        <ResultStat label="Monthly Mortgage EMI" value={stats.emi} emphasis />
        <ResultStat label="Total Interest Owed" value={stats.interest} />
        <ResultStat label="Total Payment" value={stats.total} />
      </div>
    </div>
  )
}
