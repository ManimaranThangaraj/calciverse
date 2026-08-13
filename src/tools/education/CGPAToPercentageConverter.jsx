import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

export default function CGPAToPercentageConverter() {
  const [cgpa, setCgpa] = useState(8.5)
  const [scaleFormula, setScaleFormula] = useState('cbse')

  const { percentage, formulaDescription } = useMemo(() => {
    const score = Number(cgpa) || 0

    let pct = 0
    let desc = ''

    if (scaleFormula === 'cbse') {
      // CBSE standard formula: CGPA * 9.5
      pct = Math.min(100, score * 9.5)
      desc = 'CBSE Standard Formula: Percentage = CGPA × 9.5'
    } else if (scaleFormula === 'direct10') {
      pct = Math.min(100, score * 10)
      desc = 'Direct Scale Formula: Percentage = CGPA × 10'
    } else if (scaleFormula === 'vtu') {
      // VTU / University formula: (CGPA - 0.75) * 10
      pct = Math.min(100, Math.max(0, (score - 0.75) * 10))
      desc = 'University Standard Formula: Percentage = (CGPA − 0.75) × 10'
    } else if (scaleFormula === 'mumbai_uni') {
      // Mumbai University formula: 7.1 * CGPA + 11
      pct = Math.min(100, Math.max(0, 7.1 * score + 11))
      desc = 'Mumbai University Formula: Percentage = 7.1 × CGPA + 11'
    }

    return { percentage: pct, formulaDescription: desc }
  }, [cgpa, scaleFormula])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="CGPA Score" value={cgpa} onChange={setCgpa} suffix="/ 10" step="0.01" max={10} />
        <SelectField
          label="Conversion Scale Formula"
          value={scaleFormula}
          onChange={setScaleFormula}
          options={[
            { label: 'CBSE Standard (CGPA × 9.5)', value: 'cbse' },
            { label: 'Direct 10-Point (CGPA × 10)', value: 'direct10' },
            { label: 'University Standard ((CGPA − 0.75) × 10)', value: 'vtu' },
            { label: 'Mumbai University (7.1 × CGPA + 11)', value: 'mumbai_uni' },
          ]}
        />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Equivalent Percentage" value={`${percentage.toFixed(2)}%`} emphasis />
        <ResultStat label="Applied Standard" value={scaleFormula.toUpperCase()} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        {formulaDescription}
      </p>
    </div>
  )
}
