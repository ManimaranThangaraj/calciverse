import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

export default function PercentageCalculator() {
  const [mode, setMode] = useState('marks')
  const [a, setA] = useState(82)
  const [b, setB] = useState(90)

  const result = useMemo(() => {
    const A = Number(a) || 0
    const B = Number(b) || 0
    if (mode === 'marks') return B ? (A / B) * 100 : 0
    if (mode === 'of') return (A / 100) * B
    if (mode === 'is-what-percent') return B ? (A / B) * 100 : 0
    if (mode === 'change') return A ? ((B - A) / A) * 100 : 0
    return 0
  }, [mode, a, b])

  const labels = {
    marks: ['Marks obtained', 'Total marks', `${result.toFixed(2)}%`, 'Percentage'],
    of: ['Percentage', 'Of value', result.toLocaleString('en-IN', { maximumFractionDigits: 2 }), 'Result'],
    'is-what-percent': ['Value', 'Is what % of this', `${result.toFixed(2)}%`, 'Result'],
    change: ['From value', 'To value', `${result.toFixed(2)}%`, result >= 0 ? 'Increase' : 'Decrease'],
  }[mode]

  return (
    <div>
      <SelectField
        label="Calculate"
        value={mode}
        onChange={setMode}
        options={[
          { value: 'marks', label: 'Marks → Percentage' },
          { value: 'of', label: 'X% of Y' },
          { value: 'is-what-percent', label: 'X is what % of Y' },
          { value: 'change', label: 'Percentage change (X → Y)' },
        ]}
      />
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <NumberField label={labels[0]} value={a} onChange={setA} />
        <NumberField label={labels[1]} value={b} onChange={setB} />
      </div>
      <div className="mt-6">
        <ResultStat label={labels[3]} value={labels[2]} emphasis />
      </div>
    </div>
  )
}
