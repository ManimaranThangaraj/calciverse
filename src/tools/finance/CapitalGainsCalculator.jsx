import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function CapitalGainsCalculator() {
  const [assetType, setAssetType] = useState('equity')
  const [buyPrice, setBuyPrice] = useState(200000)
  const [sellPrice, setSellPrice] = useState(350000)
  const [holdingMonths, setHoldingMonths] = useState(18)

  const { isLtcg, capitalGain, taxAmount } = useMemo(() => {
    const buy = Number(buyPrice) || 0
    const sell = Number(sellPrice) || 0
    const months = Number(holdingMonths) || 0
    const gain = sell - buy

    let ltcgThresholdMonths = 12
    if (assetType === 'real_estate') ltcgThresholdMonths = 24
    else if (assetType === 'debt') ltcgThresholdMonths = 36

    const isLongTerm = months >= ltcgThresholdMonths
    let tax = 0

    if (gain > 0) {
      if (assetType === 'equity') {
        // Budget 2024 revised rates: LTCG 12.5% (above 1.25L exemption), STCG 20%
        if (isLongTerm) {
          const taxableGain = Math.max(0, gain - 125000)
          tax = taxableGain * 0.125
        } else {
          tax = gain * 0.20
        }
      } else if (assetType === 'real_estate') {
        // Real estate LTCG 12.5% without indexation / 20% with indexation (12.5% std)
        tax = isLongTerm ? gain * 0.125 : gain * 0.30
      } else {
        // Debt mutual funds taxed at slab rates (~30%)
        tax = gain * 0.30
      }
    }

    return { isLtcg: isLongTerm, capitalGain: gain, taxAmount: tax * 1.04 }
  }, [assetType, buyPrice, sellPrice, holdingMonths])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SelectField
          label="Asset Class"
          value={assetType}
          onChange={setAssetType}
          options={[
            { label: 'Equity / Stocks / Mutual Funds', value: 'equity' },
            { label: 'Real Estate / Property', value: 'real_estate' },
            { label: 'Debt Mutual Funds / Gold', value: 'debt' },
          ]}
        />
        <NumberField label="Purchase Value" value={buyPrice} onChange={setBuyPrice} suffix="₹" step={10000} />
        <NumberField label="Sale Value" value={sellPrice} onChange={setSellPrice} suffix="₹" step={10000} />
        <NumberField label="Holding Period" value={holdingMonths} onChange={setHoldingMonths} suffix="months" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Gain Type" value={isLtcg ? 'LTCG (Long-Term)' : 'STCG (Short-Term)'} />
        <ResultStat label="Total Capital Gain" value={`₹${inr(capitalGain)}`} />
        <ResultStat label="Estimated Tax Payable" value={`₹${inr(taxAmount)}`} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Based on Union Budget tax structure (Equity LTCG 12.5% above ₹1.25L exemption, STCG 20%, plus 4% cess).
      </p>
    </div>
  )
}
