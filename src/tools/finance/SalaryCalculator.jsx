import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function SalaryCalculator() {
  const [ctc, setCtc] = useState(1200000)
  const [bonus, setBonus] = useState(100000)
  const [pfContribution, setPfContribution] = useState(21600) // ₹1800/mo std PF
  const [professionalTax, setProfessionalTax] = useState(2400)

  const { monthlyGross, monthlyNet, annualNet } = useMemo(() => {
    const totalCtc = Number(ctc) || 0
    const variableBonus = Number(bonus) || 0
    const fixedAnnual = Math.max(0, totalCtc - variableBonus)
    const grossMonthly = fixedAnnual / 12

    // Estimated standard tax under New Tax Regime FY26
    const taxableAnnual = Math.max(0, fixedAnnual - 75000) // std deduction 75k
    let taxAnnual = 0
    if (taxableAnnual > 2400000) taxAnnual += (taxableAnnual - 2400000) * 0.30 + 260000
    else if (taxableAnnual > 2000000) taxAnnual += (taxableAnnual - 2000000) * 0.25 + 160000
    else if (taxableAnnual > 1600000) taxAnnual += (taxableAnnual - 1600000) * 0.20 + 80000
    else if (taxableAnnual > 1200000) taxAnnual += (taxableAnnual - 1200000) * 0.15 + 20000
    else if (taxableAnnual > 800000) taxAnnual += (taxableAnnual - 800000) * 0.10 + 20000
    else if (taxableAnnual > 400000) taxAnnual += (taxableAnnual - 400000) * 0.05
    if (taxableAnnual <= 1200000) taxAnnual = 0 // section 87A rebate
    taxAnnual = taxAnnual * 1.04 // cess

    const annualDeductions = Number(pfContribution) + Number(professionalTax) + taxAnnual
    const netAnnual = Math.max(0, fixedAnnual - annualDeductions)

    return {
      monthlyGross: grossMonthly,
      monthlyNet: netAnnual / 12,
      annualNet: netAnnual,
    }
  }, [ctc, bonus, pfContribution, professionalTax])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="Annual CTC" value={ctc} onChange={setCtc} suffix="₹" step={50000} />
        <NumberField label="Annual Variable / Bonus" value={bonus} onChange={setBonus} suffix="₹" step={10000} />
        <NumberField label="Annual PF Contribution" value={pfContribution} onChange={setPfContribution} suffix="₹" step={2400} />
        <NumberField label="Professional Tax (Annual)" value={professionalTax} onChange={setProfessionalTax} suffix="₹" step={200} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Gross Monthly Salary" value={`₹${inr(monthlyGross)}`} />
        <ResultStat label="Est. In-Hand Monthly Salary" value={`₹${inr(monthlyNet)}`} emphasis />
        <ResultStat label="Est. Net Annual Take-Home" value={`₹${inr(annualNet)}`} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Estimates monthly in-hand salary based on fixed CTC component after PF, Professional Tax, and New Tax Regime deductions.
      </p>
    </div>
  )
}
