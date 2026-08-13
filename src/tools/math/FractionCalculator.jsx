import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

function gcd(a, b) {
  return b === 0 ? Math.abs(a) : gcd(b, a % b)
}

export default function FractionCalculator() {
  const [num1, setNum1] = useState(3)
  const [den1, setDen1] = useState(4)
  const [operator, setOperator] = useState('+')
  const [num2, setNum2] = useState(2)
  const [den2, setDen2] = useState(5)

  const { resultStr, decimalVal, mixedStr } = useMemo(() => {
    const n1 = Number(num1) || 0
    const d1 = Number(den1) || 1
    const n2 = Number(num2) || 0
    const d2 = Number(den2) || 1

    if (d1 === 0 || d2 === 0) return { resultStr: 'Undefined', decimalVal: 'N/A', mixedStr: 'N/A' }

    let resNum = 0
    let resDen = d1 * d2

    if (operator === '+') {
      resNum = n1 * d2 + n2 * d1
    } else if (operator === '-') {
      resNum = n1 * d2 - n2 * d1
    } else if (operator === '*') {
      resNum = n1 * n2
      resDen = d1 * d2
    } else if (operator === '/') {
      if (n2 === 0) return { resultStr: 'Division by Zero', decimalVal: 'N/A', mixedStr: 'N/A' }
      resNum = n1 * d2
      resDen = d1 * n2
    }

    const g = gcd(resNum, resDen)
    const simpleNum = resNum / g
    const simpleDen = resDen / g

    const dec = simpleNum / simpleDen

    let mixed = `${simpleNum}/${simpleDen}`
    if (Math.abs(simpleNum) >= Math.abs(simpleDen) && simpleDen !== 1) {
      const whole = Math.floor(Math.abs(simpleNum) / simpleDen) * (simpleNum < 0 ? -1 : 1)
      const rem = Math.abs(simpleNum) % simpleDen
      mixed = `${whole} (${rem}/${simpleDen})`
    }

    return {
      resultStr: simpleDen === 1 ? `${simpleNum}` : `${simpleNum} / ${simpleDen}`,
      decimalVal: dec.toFixed(4),
      mixedStr: mixed,
    }
  }, [num1, den1, operator, num2, den2])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-5 items-center">
        <div className="grid gap-2">
          <NumberField label="Numerator 1" value={num1} onChange={setNum1} />
          <NumberField label="Denominator 1" value={den1} onChange={setDen1} />
        </div>
        <SelectField
          label="Operation"
          value={operator}
          onChange={setOperator}
          options={[
            { label: '+ Add', value: '+' },
            { label: '− Subtract', value: '-' },
            { label: '× Multiply', value: '*' },
            { label: '÷ Divide', value: '/' },
          ]}
        />
        <div className="grid gap-2">
          <NumberField label="Numerator 2" value={num2} onChange={setNum2} />
          <NumberField label="Denominator 2" value={den2} onChange={setDen2} />
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Reduced Fraction" value={resultStr} emphasis />
        <ResultStat label="Decimal Equivalent" value={decimalVal} />
        <ResultStat label="Mixed Number" value={mixedStr} />
      </div>
    </div>
  )
}
