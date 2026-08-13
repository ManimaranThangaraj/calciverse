import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

export default function SalesTaxCalculator() {
  const [amount, setAmount] = useState(1000)
  const [taxRate, setTaxRate] = useState(18)
  const [mode, setMode] = useState('add') // 'add' or 'remove'

  const stats = useMemo(() => {
    const val = Number(amount) || 0
    const rate = Number(taxRate) || 0

    if (val <= 0) {
      return { base: '₹0', tax: '₹0', final: '₹0' }
    }

    if (mode === 'add') {
      const tax = (val * rate) / 100
      const total = val + tax
      return {
        base: `₹${val.toLocaleString('en-IN')}`,
        tax: `₹${tax.toLocaleString('en-IN')}`,
        final: `₹${total.toLocaleString('en-IN')}`,
      }
    } else {
      const base = val / (1 + rate / 100)
      const tax = val - base
      return {
        base: `₹${Math.round(base).toLocaleString('en-IN')}`,
        tax: `₹${Math.round(tax).toLocaleString('en-IN')}`,
        final: `₹${val.toLocaleString('en-IN')}`,
      }
    }
  }, [amount, taxRate, mode])

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Amount" value={amount} onChange={setAmount} suffix="₹" />
        <NumberField label="Tax Rate (%)" value={taxRate} onChange={setTaxRate} suffix="%" />
        <SelectField
          label="Calculation Mode"
          value={mode}
          onChange={setMode}
          options={[
            { value: 'add', label: 'Add Tax to Base Amount' },
            { value: 'remove', label: 'Extract Tax from Gross Amount' },
          ]}
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <ResultStat label="Pre-Tax Base Amount" value={stats.base} />
        <ResultStat label="Sales Tax Amount" value={stats.tax} />
        <ResultStat label="Total Final Amount" value={stats.final} emphasis />
      </div>
    </div>
  )
}
