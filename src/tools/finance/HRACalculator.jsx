import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function HRACalculator() {
  const [basicSalary, setBasicSalary] = useState(500000)
  const [hraReceived, setHraReceived] = useState(250000)
  const [rentPaid, setRentPaid] = useState(240000)
  const [isMetro, setIsMetro] = useState('yes')

  const { exemptedHra, taxableHra } = useMemo(() => {
    const basic = Number(basicSalary) || 0
    const hra = Number(hraReceived) || 0
    const rent = Number(rentPaid) || 0
    const metroFactor = isMetro === 'yes' ? 0.50 : 0.40

    // Minimum of:
    // 1. Actual HRA received
    // 2. Rent paid minus 10% of basic salary
    // 3. 50% basic (metro) or 40% basic (non-metro)
    const rule1 = hra
    const rule2 = Math.max(0, rent - 0.10 * basic)
    const rule3 = metroFactor * basic

    const exemption = Math.min(rule1, rule2, rule3)
    const taxable = Math.max(0, hra - exemption)

    return { exemptedHra: exemption, taxableHra: taxable }
  }, [basicSalary, hraReceived, rentPaid, isMetro])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="Annual Basic Salary" value={basicSalary} onChange={setBasicSalary} suffix="₹" step={25000} />
        <NumberField label="HRA Received (Annual)" value={hraReceived} onChange={setHraReceived} suffix="₹" step={10000} />
        <NumberField label="Total Rent Paid (Annual)" value={rentPaid} onChange={setRentPaid} suffix="₹" step={10000} />
        <SelectField
          label="City of Residence"
          value={isMetro}
          onChange={setIsMetro}
          options={[
            { label: 'Metro City (Delhi, Mumbai, Kolkata, Chennai)', value: 'yes' },
            { label: 'Non-Metro City', value: 'no' },
          ]}
        />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Tax-Exempt HRA Amount" value={`₹${inr(exemptedHra)}`} emphasis />
        <ResultStat label="Taxable HRA Amount" value={`₹${inr(taxableHra)}`} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        HRA Exemption under Section 10(13A) of Income Tax Act is the minimum of (1) Actual HRA received, (2) Rent paid - 10% of Basic, (3) 50% of Basic for metros or 40% for non-metros. Applies under Old Tax Regime.
      </p>
    </div>
  )
}
