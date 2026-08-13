import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function PropertyTaxCalculator() {
  const [builtUpArea, setBuiltUpArea] = useState(1200) // sq ft
  const [baseUnitRate, setBaseUnitRate] = useState(3.5) // per sq ft / month
  const [ageYears, setAgeYears] = useState(5)
  const [occupancy, setOccupancy] = useState('self') // self vs rented

  const { annualPropertyTax } = useMemo(() => {
    const area = Number(builtUpArea) || 0
    const rate = Number(baseUnitRate) || 0
    const age = Number(ageYears) || 0
    const mult = occupancy === 'rented' ? 2.0 : 1.0

    // Standard Unit Area Value (UAV) method:
    // Annual Value = Area * Monthly Rate * 12 * Occupancy Factor * Depreciation Factor
    let depFactor = 1.0
    if (age > 20) depFactor = 0.70
    else if (age > 10) depFactor = 0.80
    else if (age > 5) depFactor = 0.90

    const annualVal = area * rate * 12 * mult * depFactor
    // Municipal tax rate ~20% of annual value
    const tax = annualVal * 0.20
    return { annualPropertyTax: tax }
  }, [builtUpArea, baseUnitRate, ageYears, occupancy])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="Built-Up Area" value={builtUpArea} onChange={setBuiltUpArea} suffix="sq ft" step={50} />
        <NumberField label="Base Unit Rate per Sq Ft (Monthly)" value={baseUnitRate} onChange={setBaseUnitRate} suffix="₹" step="0.5" />
        <NumberField label="Building Age" value={ageYears} onChange={setAgeYears} suffix="years" />
        <SelectField
          label="Occupancy Type"
          value={occupancy}
          onChange={setOccupancy}
          options={[
            { label: 'Self Occupied', value: 'self' },
            { label: 'Rented / Tenanted (2x factor)', value: 'rented' },
          ]}
        />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-1">
        <ResultStat label="Estimated Annual Municipal Property Tax" value={`₹${inr(annualPropertyTax)}`} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Estimated using the Unit Area Value (UAV) system standard in major municipal corporations (BBMP, BMC, MCD, GHMC).
      </p>
    </div>
  )
}
