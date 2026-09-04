import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

const inr = (n) => n.toLocaleString('en-IN', { maximumFractionDigits: 2 })

export default function GSTCalculator() {
  const [amount, setAmount] = useState(4500)
  const [rate, setRate] = useState(18)
  const [mode, setMode] = useState('add')

  const { base, gst, total, cgst, sgst } = useMemo(() => {
    const A = Number(amount) || 0
    const r = Number(rate) || 0
    if (mode === 'add') {
      const g = (A * r) / 100
      return { base: A, gst: g, total: A + g, cgst: g / 2, sgst: g / 2 }
    }
    const b = A / (1 + r / 100)
    const g = A - b
    return { base: b, gst: g, total: A, cgst: g / 2, sgst: g / 2 }
  }, [amount, rate, mode])

  const summaryText = `GST Rate: ${rate}%\nTaxable Amount: ₹${inr(base)}\nGST Amount: ₹${inr(gst)} (CGST: ₹${inr(cgst)} | SGST: ₹${inr(sgst)})\nTotal Amount: ₹${inr(total)}`

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
        <ResultStat label="Total GST amount" value={`₹${inr(gst)}`} />
        <ResultStat label="Total amount" value={`₹${inr(total)}`} emphasis />
      </div>

      {/* Tax Split Card */}
      <div className="mt-4 rounded-xl border border-line bg-paper-raised p-4 flex flex-wrap justify-between text-xs text-ink-soft">
        <div>
          <span className="font-semibold text-ink">CGST ({(rate / 2).toFixed(1)}%):</span> ₹{inr(cgst)}
        </div>
        <div>
          <span className="font-semibold text-ink">SGST ({(rate / 2).toFixed(1)}%):</span> ₹{inr(sgst)}
        </div>
        <div>
          <span className="font-semibold text-ink">IGST (Inter-state):</span> ₹{inr(gst)}
        </div>
      </div>

      <ToolActions
        toolName="GST Tax Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/gst-calculator"
      />
    </div>
  )
}
