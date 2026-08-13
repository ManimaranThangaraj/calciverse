import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState(1850)
  const [tipPercent, setTipPercent] = useState(10)
  const [peopleCount, setPeopleCount] = useState(3)

  const { totalTip, totalBill, tipPerPerson, billPerPerson } = useMemo(() => {
    const bill = Number(billAmount) || 0
    const tipPct = Number(tipPercent) || 0
    const people = Math.max(1, Number(peopleCount) || 1)

    const tip = (bill * tipPct) / 100
    const total = bill + tip

    return {
      totalTip: tip,
      totalBill: total,
      tipPerPerson: tip / people,
      billPerPerson: total / people,
    }
  }, [billAmount, tipPercent, peopleCount])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Total Bill Amount" value={billAmount} onChange={setBillAmount} suffix="₹" step={50} />
        <NumberField label="Tip Percentage" value={tipPercent} onChange={setTipPercent} suffix="%" step="1" />
        <NumberField label="Split Among People" value={peopleCount} onChange={setPeopleCount} suffix="people" min={1} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <ResultStat label="Total Tip Amount" value={`₹${inr(totalTip)}`} />
        <ResultStat label="Total Payable" value={`₹${inr(totalBill)}`} />
        <ResultStat label="Tip Per Person" value={`₹${inr(tipPerPerson)}`} />
        <ResultStat label="Payable Per Person" value={`₹${inr(billPerPerson)}`} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Easily calculate tips and split restaurant or group bills evenly among friends.
      </p>
    </div>
  )
}
