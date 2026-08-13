import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => n.toLocaleString('en-IN', { maximumFractionDigits: 2 })

export default function GSTCalculator() {
  const [amount, setAmount] = useState(4500)
  const [rate, setRate] = useState(18)
  const [mode, setMode] = useState('add')

  const { base, gst, total } = useMemo(() => {
    const A = Number(amount) || 0
    const r = Number(rate) || 0
    if (mode === 'add') {
      const g = (A * r) / 100
      return { base: A, gst: g, total: A + g }
    }
    const b = A / (1 + r / 100)
    return { base: b, gst: A - b, total: A }
  }, [amount, rate, mode])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label={mode === 'add' ? 'Amount (excl. GST)' : 'Amount (incl. GST)'} value={amount} onChange={setAmount} suffix="₹" />
        <SelectField
          label="GST slab"
          value={rate}
          onChange={(v) => setRate(Number(v))}
          options={[
            { value: 5, label: '5%' }, { value: 12, label: '12%' },
            { value: 18, label: '18%' }, { value: 28, label: '28%' },
          ]}
        />
        <SelectField
          label="Direction"
          value={mode}
          onChange={setMode}
          options={[
            { value: 'add', label: 'Add GST to amount' },
            { value: 'remove', label: 'Remove GST from amount' },
          ]}
        />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Taxable amount" value={`₹${inr(base)}`} />
        <ResultStat label="GST amount" value={`₹${inr(gst)}`} />
        <ResultStat label="Total" value={`₹${inr(total)}`} emphasis />
      </div>
    </div>
  )
}
