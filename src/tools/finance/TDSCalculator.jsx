import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function TDSCalculator() {
  const [amount, setAmount] = useState(100000)
  const [paymentType, setPaymentType] = useState('professional')
  const [hasPan, setHasPan] = useState('yes')

  const { rate, tdsAmount, netAmount } = useMemo(() => {
    const amt = Number(amount) || 0
    let baseRate = 10

    if (paymentType === 'professional') baseRate = 10
    else if (paymentType === 'technical') baseRate = 2
    else if (paymentType === 'contractor') baseRate = 1
    else if (paymentType === 'rent_property') baseRate = 10
    else if (paymentType === 'fd_interest') baseRate = 10
    else if (paymentType === 'commission') baseRate = 5

    // If PAN is not provided, 20% flat rate applies
    const effectiveRate = hasPan === 'no' ? 20 : baseRate
    const tds = (amt * effectiveRate) / 100
    return { rate: effectiveRate, tdsAmount: tds, netAmount: amt - tds }
  }, [amount, paymentType, hasPan])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Total Payment Amount" value={amount} onChange={setAmount} suffix="₹" step={10000} />
        <SelectField
          label="Nature of Payment"
          value={paymentType}
          onChange={setPaymentType}
          options={[
            { label: 'Professional Fees (Sec 194J - 10%)', value: 'professional' },
            { label: 'Technical Services (Sec 194J - 2%)', value: 'technical' },
            { label: 'Contractor Payment (Sec 194C - 1%)', value: 'contractor' },
            { label: 'Rent on Property (Sec 194I - 10%)', value: 'rent_property' },
            { label: 'FD Interest Income (Sec 194A - 10%)', value: 'fd_interest' },
            { label: 'Commission / Brokerage (Sec 194H - 5%)', value: 'commission' },
          ]}
        />
        <SelectField
          label="PAN Provided?"
          value={hasPan}
          onChange={setHasPan}
          options={[
            { label: 'Yes (Standard Rate)', value: 'yes' },
            { label: 'No (Higher 20% TDS Rate)', value: 'no' },
          ]}
        />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Applicable TDS Rate" value={`${rate}%`} />
        <ResultStat label="TDS Deducted" value={`₹${inr(tdsAmount)}`} emphasis />
        <ResultStat label="Net Amount Payable" value={`₹${inr(netAmount)}`} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        TDS provisions as per Income Tax Act. Higher rate of 20% applies under Section 206AA if valid PAN is not furnished.
      </p>
    </div>
  )
}
