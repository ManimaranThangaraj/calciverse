import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

function fact(n) {
  let res = BigInt(1)
  for (let i = 2; i <= n; i++) res *= BigInt(i)
  return res
}

export default function PermutationCombinationCalculator() {
  const [totalN, setTotalN] = useState(10)
  const [sampleR, setSampleR] = useState(3)

  const { nPr, nCr } = useMemo(() => {
    const n = Math.floor(Number(totalN)) || 0
    const r = Math.floor(Number(sampleR)) || 0

    if (r < 0 || r > n || n > 60) return { nPr: 'Invalid (0 ≤ r ≤ n ≤ 60)', nCr: 'Invalid' }

    const factN = fact(n)
    const factR = fact(r)
    const factNR = fact(n - r)

    const nprVal = factN / factNR
    const ncrVal = factN / (factR * factNR)

    return { nPr: nprVal.toString(), nCr: ncrVal.toString() }
  }, [totalN, sampleR])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 max-w-md">
        <NumberField label="Total Items (n)" value={totalN} onChange={setTotalN} min={0} max={60} />
        <NumberField label="Items to Choose (r)" value={sampleR} onChange={setSampleR} min={0} max={totalN} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Permutations nPr (Order Matters)" value={nPr} emphasis />
        <ResultStat label="Combinations nCr (Order Irrelevant)" value={nCr} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Formulas: nPr = n! / (n − r)!, nCr = n! / (r! × (n − r)!).
      </p>
    </div>
  )
}
