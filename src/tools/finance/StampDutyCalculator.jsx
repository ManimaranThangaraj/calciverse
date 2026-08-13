import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function StampDutyCalculator() {
  const [propertyValue, setPropertyValue] = useState(5000000)
  const [gender, setGender] = useState('male')
  const [stampRatePercent, setStampRatePercent] = useState(6)
  const [regFeePercent, setRegFeePercent] = useState(1)

  const { stampDuty, registrationFee, totalCost } = useMemo(() => {
    const val = Number(propertyValue) || 0
    let stampRate = Number(stampRatePercent) || 6
    // Discount for female buyers in many Indian states (~1%)
    if (gender === 'female') stampRate = Math.max(1, stampRate - 1)
    
    const regRate = Number(regFeePercent) || 1
    const stamp = (val * stampRate) / 100
    const reg = (val * regRate) / 100
    return { stampDuty: stamp, registrationFee: reg, totalCost: stamp + reg }
  }, [propertyValue, gender, stampRatePercent, regFeePercent])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="Property Market / Agreement Value" value={propertyValue} onChange={setPropertyValue} suffix="₹" step={100000} />
        <SelectField
          label="Primary Buyer Gender"
          value={gender}
          onChange={setGender}
          options={[
            { label: 'Male', value: 'male' },
            { label: 'Female (Concession rate)', value: 'female' },
            { label: 'Joint (Male + Female)', value: 'joint' },
          ]}
        />
        <NumberField label="State Stamp Duty Rate" value={stampRatePercent} onChange={setStampRatePercent} suffix="%" step="0.5" hint="Varies by state (5-7%)" />
        <NumberField label="Registration Fee Rate" value={regFeePercent} onChange={setRegFeePercent} suffix="%" step="0.5" hint="Usually 1%" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Stamp Duty Charges" value={`₹${inr(stampDuty)}`} />
        <ResultStat label="Registration Fee" value={`₹${inr(registrationFee)}`} />
        <ResultStat label="Total Additional Expense" value={`₹${inr(totalCost)}`} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Stamp duty rates vary by state municipality and owner gender. Women buyers often get 1% concession in many Indian states.
      </p>
    </div>
  )
}
