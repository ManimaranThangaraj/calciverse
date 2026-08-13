import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

const UNITS = {
  length: {
    label: 'Length',
    units: [
      { label: 'Meters (m)', value: 'm', factor: 1 },
      { label: 'Kilometers (km)', value: 'km', factor: 1000 },
      { label: 'Centimeters (cm)', value: 'cm', factor: 0.01 },
      { label: 'Millimeters (mm)', value: 'mm', factor: 0.001 },
      { label: 'Feet (ft)', value: 'ft', factor: 0.3048 },
      { label: 'Inches (in)', value: 'in', factor: 0.0254 },
      { label: 'Miles (mi)', value: 'mi', factor: 1609.344 },
    ],
  },
  weight: {
    label: 'Weight / Mass',
    units: [
      { label: 'Kilograms (kg)', value: 'kg', factor: 1 },
      { label: 'Grams (g)', value: 'g', factor: 0.001 },
      { label: 'Milligrams (mg)', value: 'mg', factor: 0.000001 },
      { label: 'Pounds (lbs)', value: 'lbs', factor: 0.453592 },
      { label: 'Ounces (oz)', value: 'oz', factor: 0.0283495 },
      { label: 'Tonnes (t)', value: 't', factor: 1000 },
    ],
  },
  area: {
    label: 'Area',
    units: [
      { label: 'Square Meters (sq m)', value: 'sq_m', factor: 1 },
      { label: 'Square Feet (sq ft)', value: 'sq_ft', factor: 0.092903 },
      { label: 'Acres', value: 'acre', factor: 4046.86 },
      { label: 'Hectares', value: 'ha', factor: 10000 },
    ],
  },
  volume: {
    label: 'Volume',
    units: [
      { label: 'Liters (L)', value: 'l', factor: 1 },
      { label: 'Milliliters (mL)', value: 'ml', factor: 0.001 },
      { label: 'Gallons (US)', value: 'gal', factor: 3.78541 },
      { label: 'Cubic Meters (m³)', value: 'cum', factor: 1000 },
    ],
  },
}

export default function UnitConverter() {
  const [category, setCategory] = useState('length')
  const [value, setValue] = useState(10)
  const [fromUnit, setFromUnit] = useState('m')
  const [toUnit, setToUnit] = useState('ft')

  const convertedValue = useMemo(() => {
    const v = Number(value) || 0
    const catObj = UNITS[category]
    if (!catObj) return 0

    const fromObj = catObj.units.find((u) => u.value === fromUnit) || catObj.units[0]
    const toObj = catObj.units.find((u) => u.value === toUnit) || catObj.units[1]

    const baseValue = v * fromObj.factor
    return baseValue / toObj.factor
  }, [category, value, fromUnit, toUnit])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SelectField
          label="Category"
          value={category}
          onChange={(cat) => {
            setCategory(cat)
            setFromUnit(UNITS[cat].units[0].value)
            setToUnit(UNITS[cat].units[1].value)
          }}
          options={[
            { label: 'Length & Distance', value: 'length' },
            { label: 'Weight & Mass', value: 'weight' },
            { label: 'Area', value: 'area' },
            { label: 'Volume', value: 'volume' },
          ]}
        />
        <NumberField label="Value to Convert" value={value} onChange={setValue} />
        <SelectField label="From Unit" value={fromUnit} onChange={setFromUnit} options={UNITS[category].units} />
        <SelectField label="To Unit" value={toUnit} onChange={setToUnit} options={UNITS[category].units} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Input" value={`${value} ${fromUnit}`} />
        <ResultStat label="Converted Result" value={`${convertedValue.toFixed(4)} ${toUnit}`} emphasis />
      </div>
    </div>
  )
}
