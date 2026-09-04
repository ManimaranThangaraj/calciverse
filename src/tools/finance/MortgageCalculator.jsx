import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import AmortizationSchedule from '../../components/ui/AmortizationSchedule.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

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
      return { emi: '₹0', interest: '₹0', total: '₹0', principal: '₹0', emiRaw: 0, principalRaw: 0, csvString: '' }
    }

    const r = rate / 12 / 100
    const n = years * 12
    const emiVal = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const totalPay = emiVal * n
    const totalInterest = totalPay - principal

    let csv = 'Month,Year,Principal Paid (INR),Interest Paid (INR),Total Payment (INR),Remaining Balance (INR)\n'
    let balance = principal
    for (let m = 1; m <= n; m++) {
      const intM = balance * r
      const prinM = Math.min(emiVal - intM, balance)
      balance = Math.max(0, balance - prinM)
      const yr = Math.ceil(m / 12)
      csv += `${m},${yr},${prinM.toFixed(0)},${intM.toFixed(0)},${emiVal.toFixed(0)},${balance.toFixed(0)}\n`
    }

    return {
      principalRaw: principal,
      emiRaw: emiVal,
      principal: `₹${principal.toLocaleString('en-IN')}`,
      emi: `₹${Math.round(emiVal).toLocaleString('en-IN')}`,
      interest: `₹${Math.round(totalInterest).toLocaleString('en-IN')}`,
      total: `₹${Math.round(totalPay).toLocaleString('en-IN')}`,
      csvString: csv
    }
  }, [homePrice, downPayment, interestRate, tenureYears])

  const summaryText = `Property Price: ₹${Number(homePrice).toLocaleString('en-IN')} (Down Payment: ₹${Number(downPayment).toLocaleString('en-IN')})\nLoan Amount: ${stats.principal} @ ${interestRate}% for ${tenureYears} yrs\nMonthly EMI: ${stats.emi}\nTotal Interest: ${stats.interest}`

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

      <ToolActions
        toolName="Home Mortgage Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/mortgage-calculator"
        csvFilename="mortgage_amortization_schedule.csv"
        csvData={stats.csvString}
      />

      <AmortizationSchedule
        principal={stats.principalRaw}
        rate={Number(interestRate)}
        years={Number(tenureYears)}
        emi={stats.emiRaw}
      />
    </div>
  )
}
