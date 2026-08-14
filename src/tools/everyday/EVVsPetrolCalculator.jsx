import { useState } from 'react'
import { NumberField, SelectField } from '../../components/ui/Field.jsx'
import CopyButton from '../../components/ui/CopyButton.jsx'
import { Zap, Fuel, Sparkles } from 'lucide-react'

export default function EVVsPetrolCalculator() {
  const [monthlyKm, setMonthlyKm] = useState(1000)
  
  // Petrol stats
  const [petrolPrice, setPetrolPrice] = useState(102)
  const [petrolMileage, setPetrolMileage] = useState(15) // km/litre
  
  // EV stats
  const [electricityTariff, setElectricityTariff] = useState(8) // ₹ per kWh
  const [evRangePerCharge, setEvRangePerCharge] = useState(250) // km per full charge
  const [evBatteryCapacity, setEvBatteryCapacity] = useState(30) // kWh

  // Calculations
  const petrolLitres = petrolMileage > 0 ? monthlyKm / petrolMileage : 0
  const monthlyPetrolCost = petrolLitres * petrolPrice

  const evEfficiency = evRangePerCharge > 0 ? evBatteryCapacity / evRangePerCharge : 0 // kWh per km
  const monthlyEvUnits = monthlyKm * evEfficiency // total kWh units
  const monthlyEvCost = monthlyEvUnits * electricityTariff

  const monthlySavings = Math.max(0, monthlyPetrolCost - monthlyEvCost)
  const yearlySavings = monthlySavings * 12

  const costPerKmPetrol = petrolMileage > 0 ? petrolPrice / petrolMileage : 0
  const costPerKmEV = evRangePerCharge > 0 ? (evBatteryCapacity * electricityTariff) / evRangePerCharge : 0

  // CO2 savings (approx 2.31 kg CO2 per litre of petrol)
  const monthlyCo2SavedKg = petrolLitres * 2.31
  const yearlyTreesEquivalent = Math.round(monthlyCo2SavedKg * 12 / 21) // ~21kg CO2 absorbed per tree per year

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-line bg-paper p-4">
        <NumberField
          label="Monthly Distance Travelled (km)"
          value={monthlyKm}
          onChange={(v) => setMonthlyKm(Number(v) || 0)}
          min={100}
          max={10000}
          suffix="km"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Petrol Vehicle Specs */}
        <div className="rounded-xl border border-line bg-paper p-5 space-y-4">
          <div className="flex items-center gap-2 text-saffron font-semibold font-display">
            <Fuel size={20} /> Petrol / Diesel Vehicle
          </div>
          <NumberField
            label="Fuel Price (₹ / Litre)"
            value={petrolPrice}
            onChange={(v) => setPetrolPrice(Number(v) || 0)}
            min={1}
            suffix="₹/L"
          />
          <NumberField
            label="Vehicle Mileage (km / Litre)"
            value={petrolMileage}
            onChange={(v) => setPetrolMileage(Number(v) || 1)}
            min={1}
            suffix="km/L"
          />
          <div className="pt-2 border-t border-line text-sm space-y-1 font-mono">
            <div className="text-ink-soft">Cost per km: <span className="text-ink font-semibold">₹{costPerKmPetrol.toFixed(2)}</span></div>
            <div className="text-ink-soft">Monthly Fuel Bill: <span className="text-ink font-bold">₹{Math.round(monthlyPetrolCost).toLocaleString('en-IN')}</span></div>
          </div>
        </div>

        {/* EV Vehicle Specs */}
        <div className="rounded-xl border border-line bg-paper p-5 space-y-4">
          <div className="flex items-center gap-2 text-signal font-semibold font-display">
            <Zap size={20} /> Electric Vehicle (EV)
          </div>
          <NumberField
            label="Electricity Tariff (₹ / Unit or kWh)"
            value={electricityTariff}
            onChange={(v) => setElectricityTariff(Number(v) || 0)}
            min={1}
            suffix="₹/kWh"
          />
          <div className="grid grid-cols-2 gap-3">
            <NumberField
              label="Battery (kWh)"
              value={evBatteryCapacity}
              onChange={(v) => setEvBatteryCapacity(Number(v) || 1)}
              min={1}
              suffix="kWh"
            />
            <NumberField
              label="Full Range (km)"
              value={evRangePerCharge}
              onChange={(v) => setEvRangePerCharge(Number(v) || 1)}
              min={1}
              suffix="km"
            />
          </div>
          <div className="pt-2 border-t border-line text-sm space-y-1 font-mono">
            <div className="text-ink-soft">Cost per km: <span className="text-ink font-semibold">₹{costPerKmEV.toFixed(2)}</span></div>
            <div className="text-ink-soft">Monthly Charging Bill: <span className="text-ink font-bold">₹{Math.round(monthlyEvCost).toLocaleString('en-IN')}</span></div>
          </div>
        </div>
      </div>

      {/* Comparison Results Summary */}
      <div className="rounded-xl border border-signal/30 bg-signal-soft/30 p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-signal/20 pb-3">
          <div className="flex items-center gap-2 font-display text-lg font-bold text-signal">
            <Sparkles size={20} /> EV Cost Savings & Environmental Impact
          </div>
          <CopyButton
            getText={() => `EV vs Petrol Comparison:\nMonthly Petrol Bill: ₹${Math.round(monthlyPetrolCost)}\nMonthly EV Bill: ₹${Math.round(monthlyEvCost)}\nMonthly Savings: ₹${Math.round(monthlySavings)}\nYearly Savings: ₹${Math.round(yearlySavings)}`}
            label="Copy Summary"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-3 font-mono">
          <div className="rounded-lg bg-paper-raised p-3 border border-line">
            <div className="text-xs text-ink-soft">Monthly Fuel Savings</div>
            <div className="text-xl font-bold text-signal mt-1">₹{Math.round(monthlySavings).toLocaleString('en-IN')}</div>
          </div>
          <div className="rounded-lg bg-paper-raised p-3 border border-line">
            <div className="text-xs text-ink-soft">Yearly Fuel Savings</div>
            <div className="text-xl font-bold text-saffron mt-1">₹{Math.round(yearlySavings).toLocaleString('en-IN')}</div>
          </div>
          <div className="rounded-lg bg-paper-raised p-3 border border-line">
            <div className="text-xs text-ink-soft">CO2 Carbon Prevented</div>
            <div className="text-xl font-bold text-ink mt-1">{Math.round(monthlyCo2SavedKg)} kg / mo</div>
            <div className="text-xs text-ink-soft mt-0.5">~{yearlyTreesEquivalent} trees planted equivalent</div>
          </div>
        </div>
      </div>
    </div>
  )
}
