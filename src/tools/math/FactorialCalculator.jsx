import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import CopyButton from '../../components/ui/CopyButton.jsx'

export default function FactorialCalculator() {
  const [nVal, setNVal] = useState(15)

  const { factorialResult, digitCount } = useMemo(() => {
    const n = Math.min(100, Math.max(0, Math.floor(Number(nVal)) || 0))

    let result = BigInt(1)
    for (let i = 2; i <= n; i++) {
      result *= BigInt(i)
    }

    const str = result.toString()
    return { factorialResult: str, digitCount: str.length }
  }, [nVal])

  return (
    <div>
      <div className="max-w-xs">
        <NumberField label="Integer (n ≤ 100)" value={nVal} onChange={setNVal} min={0} max={100} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Number of Digits" value={`${digitCount} digits`} />
        <ResultStat label="Factorial Formula" value={`${nVal}!`} emphasis />
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-ink-soft">Exact Result ({nVal}!)</span>
          <CopyButton getText={() => factorialResult} />
        </div>
        <div className="mt-1.5 break-all rounded-lg border border-line bg-paper-raised p-4 font-mono text-sm text-ink max-h-48 overflow-y-auto">
          {factorialResult}
        </div>
      </div>
    </div>
  )
}
