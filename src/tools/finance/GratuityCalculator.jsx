import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function GratuityCalculator() {
  const [lastBasic, setLastBasic] = useState(60000)
  const [yearsServed, setYearsServed] = useState(7)

  const { gratuity, isEligible } = useMemo(() => {
    const basic = Number(lastBasic) || 0
    const years = Number(yearsServed) || 0
    // Standard Gratuity Act formula: (15 * last basic * years) / 26
    const eligible = years >= 5
    const amt = eligible ? (15 * basic * years) / 26 : 0
    return { gratuity: amt, isEligible: eligible }
  }, [lastBasic, yearsServed])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Last Drawn Monthly Basic + DA" value={lastBasic} onChange={setLastBasic} suffix="₹" step={5000} />
        <NumberField label="Years of Continuous Service" value={yearsServed} onChange={setYearsServed} suffix="years" step={1} hint="Min 5 years required by law" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Eligibility Status" value={isEligible ? 'Eligible (≥ 5 Years)' : 'Ineligible (< 5 Years)'} />
        <ResultStat label="Estimated Gratuity Amount" value={`₹${inr(gratuity)}`} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Calculated as per Payment of Gratuity Act 1972 formula: (15 × Last Basic Salary × Completed Years) / 26. Max tax-free limit is ₹20 Lakhs.
      </p>
    </div>
  )
}
