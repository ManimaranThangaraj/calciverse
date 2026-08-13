import { useState, useMemo } from 'react'
import { ResultStat } from '../../components/ui/Field.jsx'

function gcdTwo(a, b) {
  return b === 0 ? a : gcdTwo(b, a % b)
}

function lcmTwo(a, b) {
  if (a === 0 || b === 0) return 0
  return Math.abs(a * b) / gcdTwo(a, b)
}

export default function LcmHcfCalculator() {
  const [inputText, setInputText] = useState('24, 36, 60')

  const { lcm, hcf, numCount } = useMemo(() => {
    const nums = inputText
      .split(/[,;\s]+/)
      .map(Number)
      .filter((n) => !isNaN(n) && n > 0)

    if (!nums.length) return { lcm: 0, hcf: 0, numCount: 0 }

    let currentGcd = nums[0]
    let currentLcm = nums[0]

    for (let i = 1; i < nums.length; i++) {
      currentGcd = gcdTwo(currentGcd, nums[i])
      currentLcm = lcmTwo(currentLcm, nums[i])
    }

    return { lcm: currentLcm, hcf: currentGcd, numCount: nums.length }
  }, [inputText])

  return (
    <div>
      <label className="block">
        <span className="text-sm font-medium text-ink-soft">Enter Positive Integers (separated by commas or spaces)</span>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="e.g. 12, 18, 24"
          className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 font-mono text-base outline-none focus:border-saffron transition-colors"
        />
      </label>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="HCF / GCD (Highest Common Factor)" value={hcf} emphasis />
        <ResultStat label="LCM (Least Common Multiple)" value={lcm} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Uses Euclidean algorithm for exact HCF and LCM calculations across arbitrary arrays of numbers.
      </p>
    </div>
  )
}
