import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

const inr = (n) => Math.round(n).toLocaleString('en-IN')

export default function ElectricityBillCalculator() {
  const [applianceWattage, setApplianceWattage] = useState(1500) // AC / Heater
  const [hoursPerDay, setHoursPerDay] = useState(8)
  const [ratePerKwh, setRatePerKwh] = useState(7.5) // ₹7.5 / kWh

  const { dailyUnits, monthlyUnits, monthlyCost } = useMemo(() => {
    const watts = Number(applianceWattage) || 0
    const hrs = Number(hoursPerDay) || 0
    const rate = Number(ratePerKwh) || 0

    const dailyKwh = (watts * hrs) / 1000
    const monthlyKwh = dailyKwh * 30
    const cost = monthlyKwh * rate

    return { dailyUnits: dailyKwh, monthlyUnits: monthlyKwh, monthlyCost: cost }
  }, [applianceWattage, hoursPerDay, ratePerKwh])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Appliance Power Rating" value={applianceWattage} onChange={setApplianceWattage} suffix="Watts" step={50} />
        <NumberField label="Usage Hours / Day" value={hoursPerDay} onChange={setHoursPerDay} suffix="hrs" max={24} step="0.5" />
        <NumberField label="Electricity Rate per Unit" value={ratePerKwh} onChange={setRatePerKwh} suffix="₹/kWh" step="0.5" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Daily Power Consumption" value={`${dailyUnits.toFixed(2)} kWh`} />
        <ResultStat label="Monthly Power Consumption" value={`${monthlyUnits.toFixed(1)} kWh`} />
        <ResultStat label="Est. Monthly Electricity Cost" value={`₹${inr(monthlyCost)}`} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Formula: Units (kWh) = (Watts × Hours) / 1000. Cost = Units × Rate per kWh.
      </p>
    </div>
  )
}
