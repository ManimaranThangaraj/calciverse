import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

export default function CommissionCalculator() {
  const [salesAmount, setSalesAmount] = useState(250000)
  const [baseRate, setBaseRate] = useState(5)
  const [targetBonusThreshold, setTargetBonusThreshold] = useState(200000)
  const [bonusRate, setBonusRate] = useState(2.5)

  const stats = useMemo(() => {
    const sales = Number(salesAmount) || 0
    const base = Number(baseRate) || 0
    const threshold = Number(targetBonusThreshold) || 0
    const bonus = Number(bonusRate) || 0

    const baseCommission = (sales * base) / 100
    let bonusCommission = 0
    if (sales > threshold) {
      bonusCommission = ((sales - threshold) * bonus) / 100
    }
    const totalCommission = baseCommission + bonusCommission
    const effectiveRate = sales > 0 ? (totalCommission / sales) * 100 : 0

    return {
      baseComm: `₹${baseCommission.toLocaleString('en-IN')}`,
      bonusComm: `₹${bonusCommission.toLocaleString('en-IN')}`,
      totalComm: `₹${totalCommission.toLocaleString('en-IN')}`,
      effectiveRate: `${effectiveRate.toFixed(2)}%`,
    }
  }, [salesAmount, baseRate, targetBonusThreshold, bonusRate])

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Total Sales Revenue" value={salesAmount} onChange={setSalesAmount} suffix="₹" />
        <NumberField label="Base Commission Rate (%)" value={baseRate} onChange={setBaseRate} suffix="%" />
        <NumberField label="Bonus Target Threshold" value={targetBonusThreshold} onChange={setTargetBonusThreshold} suffix="₹" />
        <NumberField label="Over-Target Bonus Rate (%)" value={bonusRate} onChange={setBonusRate} suffix="%" />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <ResultStat label="Total Commission Earned" value={stats.totalComm} emphasis />
        <ResultStat label="Base Commission" value={stats.baseComm} />
        <ResultStat label="Effective Commission Rate" value={stats.effectiveRate} />
      </div>
    </div>
  )
}
