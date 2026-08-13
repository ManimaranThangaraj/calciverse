import { useState, useMemo } from 'react'
import { NumberField, SelectField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function RentSplitCalculator() {
  const [totalRent, setTotalRent] = useState(30000)
  const [splitMethod, setSplitMethod] = useState('even') // even vs area
  const [room1Area, setRoom1Area] = useState(150)
  const [room2Area, setRoom2Area] = useState(100)

  const { person1Rent, person2Rent } = useMemo(() => {
    const rent = Number(totalRent) || 0
    const a1 = Number(room1Area) || 1
    const a2 = Number(room2Area) || 1

    if (splitMethod === 'even') {
      return { person1Rent: rent / 2, person2Rent: rent / 2 }
    } else {
      const totalArea = a1 + a2
      const p1 = (rent * a1) / totalArea
      const p2 = (rent * a2) / totalArea
      return { person1Rent: p1, person2Rent: p2 }
    }
  }, [totalRent, splitMethod, room1Area, room2Area])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="Total Apartment Rent" value={totalRent} onChange={setTotalRent} suffix="₹" step={1000} />
        <SelectField
          label="Split Strategy"
          value={splitMethod}
          onChange={setSplitMethod}
          options={[
            { label: '50/50 Equal Split', value: 'even' },
            { label: 'Proportional to Room Area (sq ft)', value: 'area' },
          ]}
        />
        {splitMethod === 'area' && (
          <>
            <NumberField label="Room 1 Size" value={room1Area} onChange={setRoom1Area} suffix="sq ft" step={10} />
            <NumberField label="Room 2 Size" value={room2Area} onChange={setRoom2Area} suffix="sq ft" step={10} />
          </>
        )}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Roommate 1 Share" value={`₹${inr(person1Rent)}`} emphasis />
        <ResultStat label="Roommate 2 Share" value={`₹${inr(person2Rent)}`} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Fairly splits monthly rent based on equal share or relative room square footage.
      </p>
    </div>
  )
}
