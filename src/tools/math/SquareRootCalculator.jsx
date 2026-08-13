import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

export default function SquareRootCalculator() {
  const [numberInput, setNumberInput] = useState(144)

  const { sqrtVal, cbrtVal, squareVal, cubeVal } = useMemo(() => {
    const val = Number(numberInput) || 0
    const sqrt = val >= 0 ? Math.sqrt(val) : NaN
    const cbrt = Math.cbrt(val)
    const sq = val * val
    const cb = val * val * val

    return {
      sqrtVal: isNaN(sqrt) ? 'Imaginary (i)' : sqrt.toFixed(4),
      cbrtVal: cbrt.toFixed(4),
      squareVal: sq,
      cubeVal: cb,
    }
  }, [numberInput])

  return (
    <div>
      <div className="max-w-xs">
        <NumberField label="Input Number" value={numberInput} onChange={setNumberInput} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <ResultStat label="Square Root (√x)" value={sqrtVal} emphasis />
        <ResultStat label="Cube Root (∛x)" value={cbrtVal} />
        <ResultStat label="Square (x²)" value={squareVal} />
        <ResultStat label="Cube (x³)" value={cubeVal} />
      </div>
    </div>
  )
}
