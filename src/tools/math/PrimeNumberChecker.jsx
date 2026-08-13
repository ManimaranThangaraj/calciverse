import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

export default function PrimeNumberChecker() {
  const [numberVal, setNumberVal] = useState(29)

  const { isPrime, factors, nextPrime } = useMemo(() => {
    const num = Math.floor(Number(numberVal)) || 0

    if (num <= 1) return { isPrime: false, factors: 'None (Numbers ≤ 1 are not prime)', nextPrime: 2 }

    const factorList = []
    let primeFlag = true

    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        factorList.push(i)
        if (i !== num / i) factorList.push(num / i)
        if (i > 1) primeFlag = false
      }
    }

    factorList.sort((a, b) => a - b)

    // Find next prime
    let nextP = num + 1
    while (true) {
      let isP = true
      for (let i = 2; i <= Math.sqrt(nextP); i++) {
        if (nextP % i === 0) {
          isP = false
          break
        }
      }
      if (isP) break
      nextP++
    }

    return {
      isPrime: primeFlag,
      factors: factorList.join(', '),
      nextPrime: nextP,
    }
  }, [numberVal])

  return (
    <div>
      <div className="max-w-xs">
        <NumberField label="Integer to Check" value={numberVal} onChange={setNumberVal} min={0} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Is Prime Number?" value={isPrime ? 'Yes (Prime)' : 'No (Composite)'} emphasis />
        <ResultStat label="Next Prime Number" value={nextPrime} />
        <ResultStat label="All Factors" value={factors} />
      </div>
    </div>
  )
}
