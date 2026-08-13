import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function RentVsBuyCalculator() {
  const [homePrice, setHomePrice] = useState(6000000)
  const [monthlyRent, setMonthlyRent] = useState(25000)
  const [tenureYears, setTenureYears] = useState(15)
  const [investmentReturn, setInvestmentReturn] = useState(10)

  const { totalBuyCost, totalRentCost, recommendation } = useMemo(() => {
    const price = Number(homePrice) || 0
    const rent = Number(monthlyRent) || 0
    const yrs = Number(tenureYears) || 15
    const invReturn = (Number(investmentReturn) || 10) / 100

    // Simplified Rent vs Buy cost comparison over N years:
    // Buying: Downpayment (20%) + EMI payments + Maintenance (1%/yr) - Home Appreciation (6%/yr)
    const downpayment = price * 0.20
    const loanP = price * 0.80
    const r = 0.085 / 12 // 8.5% home loan
    const n = yrs * 12
    const emi = (loanP * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const totalEmiPaid = emi * n
    const maintenanceTotal = price * 0.01 * yrs
    const futureHomeVal = price * Math.pow(1 + 0.06, yrs)
    const buyNetCost = downpayment + totalEmiPaid + maintenanceTotal - (futureHomeVal - price)

    // Renting: Monthly rent inflated @ 5%/yr + investing difference (downpayment + (EMI - Rent))
    let rentTotal = 0
    let currentRent = rent
    for (let yr = 1; yr <= yrs; yr++) {
      rentTotal += currentRent * 12
      currentRent *= 1.05
    }

    // Opportunity value of downpayment invested in SIP/Equity
    const investedDownpaymentFV = downpayment * Math.pow(1 + invReturn, yrs)
    const rentNetCost = rentTotal - (investedDownpaymentFV - downpayment)

    const winner = buyNetCost < rentNetCost ? 'Buying Home' : 'Renting + Investing'

    return {
      totalBuyCost: buyNetCost,
      totalRentCost: rentNetCost,
      recommendation: winner,
    }
  }, [homePrice, monthlyRent, tenureYears, investmentReturn])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="Home Purchase Price" value={homePrice} onChange={setHomePrice} suffix="₹" step={100000} />
        <NumberField label="Current Monthly Rent" value={monthlyRent} onChange={setMonthlyRent} suffix="₹" step={1000} />
        <NumberField label="Time Horizon" value={tenureYears} onChange={setTenureYears} suffix="years" />
        <NumberField label="Investment Return Rate" value={investmentReturn} onChange={setInvestmentReturn} suffix="%" step="0.5" hint="Return if renting & investing difference" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Net Cost of Buying" value={`₹${inr(totalBuyCost)}`} />
        <ResultStat label="Net Cost of Renting" value={`₹${inr(totalRentCost)}`} />
        <ResultStat label="Financially Favorable Choice" value={recommendation} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Compares equity appreciation of buying against the opportunity gain of investing the downpayment and EMI savings when renting.
      </p>
    </div>
  )
}
