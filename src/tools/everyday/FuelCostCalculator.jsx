import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function FuelCostCalculator() {
  const [distanceKm, setDistanceKm] = useState(350)
  const [mileageKmpl, setMileageKmpl] = useState(15)
  const [fuelPricePerLiter, setFuelPricePerLiter] = useState(102)

  const { fuelNeededLiters, totalFuelCost, costPerKm } = useMemo(() => {
    const dist = Number(distanceKm) || 0
    const mileage = Number(mileageKmpl) || 1
    const price = Number(fuelPricePerLiter) || 0

    if (!dist || !mileage) return { fuelNeededLiters: 0, totalFuelCost: 0, costPerKm: 0 }

    const fuelLiters = dist / mileage
    const cost = fuelLiters * price

    return {
      fuelNeededLiters: fuelLiters,
      totalFuelCost: cost,
      costPerKm: dist > 0 ? cost / dist : 0,
    }
  }, [distanceKm, mileageKmpl, fuelPricePerLiter])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Trip Distance" value={distanceKm} onChange={setDistanceKm} suffix="km" step={10} />
        <NumberField label="Vehicle Mileage" value={mileageKmpl} onChange={setMileageKmpl} suffix="km/l" step="0.5" />
        <NumberField label="Fuel Price per Liter" value={fuelPricePerLiter} onChange={setFuelPricePerLiter} suffix="₹/L" step="0.5" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Fuel Consumption" value={`${fuelNeededLiters.toFixed(2)} Liters`} />
        <ResultStat label="Total Trip Fuel Cost" value={`₹${inr(totalFuelCost)}`} emphasis />
        <ResultStat label="Driving Cost per KM" value={`₹${costPerKm.toFixed(2)}/km`} />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Formula: Fuel Needed = Distance / Mileage. Total Cost = Fuel Needed × Price per Liter.
      </p>
    </div>
  )
}
