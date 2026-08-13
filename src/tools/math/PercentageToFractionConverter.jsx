import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}

export default function PercentageToFractionConverter() {
  const [percentInput, setPercentInput] = useState(75)

  const { fractionStr, decimalVal, ratioStr } = useMemo(() => {
    const pct = Number(percentInput) || 0
    // Fraction = pct / 100
    const numerator = Math.round(pct * 100)
    const denominator = 10000

    const g = gcd(Math.abs(numerator), denominator)
    const simpleNum = numerator / g
    const simpleDen = denominator / g

    return {
      fractionStr: `${simpleNum} / ${simpleDen}`,
      decimalVal: (pct / 100).toFixed(4),
      ratioStr: `${simpleNum} : ${simpleDen}`,
    }
  }, [percentInput])

  return (
    <div>
      <div className="max-w-xs">
        <NumberField label="Percentage Value" value={percentInput} onChange={setPercentInput} suffix="%" step="any" />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Reduced Fraction" value={fractionStr} emphasis />
        <ResultStat label="Decimal Form" value={decimalVal} />
        <ResultStat label="Ratio Form" value={ratioStr} />
      </div>
    </div>
  )
}
