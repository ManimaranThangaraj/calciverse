import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

export default function PayrollCalculator() {
  const [grossSalary, setGrossSalary] = useState(75000)
  const [epfRate, setEpfRate] = useState(12)
  const [profTax, setProfTax] = useState(200)
  const [tds, setTds] = useState(3000)

  const stats = useMemo(() => {
    const gross = Number(grossSalary) || 0
    const epfPercent = Number(epfRate) || 0
    const pt = Number(profTax) || 0
    const tax = Number(tds) || 0

    // Basic salary estimated at 50% of gross for EPF calculation
    const basic = gross * 0.5
    const epfAmount = (basic * epfPercent) / 100
    const totalDeductions = epfAmount + pt + tax
    const netTakeHome = Math.max(0, gross - totalDeductions)

    return {
      gross: `₹${gross.toLocaleString('en-IN')}`,
      epf: `₹${Math.round(epfAmount).toLocaleString('en-IN')}`,
      pt: `₹${pt.toLocaleString('en-IN')}`,
      tds: `₹${tax.toLocaleString('en-IN')}`,
      totalDeductions: `₹${Math.round(totalDeductions).toLocaleString('en-IN')}`,
      netPay: `₹${Math.round(netTakeHome).toLocaleString('en-IN')}`,
    }
  }, [grossSalary, epfRate, profTax, tds])

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Gross Monthly Salary" value={grossSalary} onChange={setGrossSalary} suffix="₹" />
        <NumberField label="EPF Employee Rate (%)" value={epfRate} onChange={setEpfRate} suffix="%" />
        <NumberField label="Professional Tax (Monthly)" value={profTax} onChange={setProfTax} suffix="₹" />
        <NumberField label="TDS / Income Tax Deduction" value={tds} onChange={setTds} suffix="₹" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <ResultStat label="Monthly Take-Home Pay" value={stats.netPay} emphasis />
        <ResultStat label="Total Deductions" value={stats.totalDeductions} />
        <ResultStat label="EPF Contribution" value={stats.epf} />
      </div>
    </div>
  )
}
