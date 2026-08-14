import { useState } from 'react'
import { NumberField } from '../../components/ui/Field.jsx'
import CopyButton from '../../components/ui/CopyButton.jsx'
import { Calculator, Briefcase, Percent } from 'lucide-react'

export default function FreelanceTaxHourlyRateCalculator() {
  const [targetAnnualIncome, setTargetAnnualIncome] = useState(1200000) // ₹12 Lakhs
  const [workingWeeksPerYear, setWorkingWeeksPerYear] = useState(46)
  const [billableHoursPerWeek, setBillableHoursPerWeek] = useState(25) // Paid hours out of 40h
  const [monthlySoftwareExpenses, setMonthlySoftwareExpenses] = useState(5000)
  const [taxEstPercent, setTaxEstPercent] = useState(15) // Estimated effective tax & GST

  const totalBillableHours = workingWeeksPerYear * billableHoursPerWeek
  const annualSoftwareExpenses = monthlySoftwareExpenses * 12
  const grossNeededPreTax = targetAnnualIncome + annualSoftwareExpenses
  const totalRevenueRequired = grossNeededPreTax / (1 - (taxEstPercent / 100))

  const minHourlyRate = totalBillableHours > 0 ? totalRevenueRequired / totalBillableHours : 0
  const minDailyRate = minHourlyRate * (billableHoursPerWeek / 5)

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          label="Desired Net Annual Take-Home Income (₹)"
          value={targetAnnualIncome}
          onChange={(v) => setTargetAnnualIncome(Number(v) || 0)}
          min={100000}
          suffix="₹"
        />
        <NumberField
          label="Estimated Tax & GST Rate (%)"
          value={taxEstPercent}
          onChange={(v) => setTaxEstPercent(Number(v) || 0)}
          min={0}
          max={50}
          suffix="%"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField
          label="Working Weeks per Year"
          value={workingWeeksPerYear}
          onChange={(v) => setWorkingWeeksPerYear(Number(v) || 1)}
          min={1}
          max={52}
          suffix="weeks"
        />
        <NumberField
          label="Paid / Billable Hours per Week"
          value={billableHoursPerWeek}
          onChange={(v) => setBillableHoursPerWeek(Number(v) || 1)}
          min={1}
          max={80}
          suffix="hrs"
        />
        <NumberField
          label="Monthly Business & Software Expenses (₹)"
          value={monthlySoftwareExpenses}
          onChange={(v) => setMonthlySoftwareExpenses(Number(v) || 0)}
          min={0}
          suffix="₹"
        />
      </div>

      <div className="rounded-xl border border-line bg-paper-raised p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-line pb-3">
          <div className="flex items-center gap-2 font-display text-lg font-bold text-ink">
            <Briefcase className="text-saffron" size={20} /> Recommended Minimum Freelance Rates
          </div>
          <CopyButton
            getText={() => `Freelance Rate Target:\nMinimum Hourly Rate: ₹${Math.ceil(minHourlyRate)}/hr\nMinimum Daily Rate: ₹${Math.ceil(minDailyRate)}/day\nTotal Annual Billing Needed: ₹${Math.round(totalRevenueRequired).toLocaleString('en-IN')}`}
            label="Copy Rates"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-3 font-mono">
          <div className="rounded-lg bg-signal-soft/30 p-4 border border-signal/20">
            <div className="text-xs text-signal font-semibold uppercase tracking-wider">Min Hourly Rate</div>
            <div className="text-2xl font-bold text-ink mt-1">₹{Math.ceil(minHourlyRate)} <span className="text-xs font-normal text-ink-soft">/ hr</span></div>
          </div>
          <div className="rounded-lg bg-paper p-4 border border-line">
            <div className="text-xs text-ink-soft font-semibold uppercase tracking-wider">Min Daily Rate (5h billable)</div>
            <div className="text-2xl font-bold text-saffron mt-1">₹{Math.ceil(minDailyRate)} <span className="text-xs font-normal text-ink-soft">/ day</span></div>
          </div>
          <div className="rounded-lg bg-paper p-4 border border-line">
            <div className="text-xs text-ink-soft font-semibold uppercase tracking-wider">Gross Annual Billing Needed</div>
            <div className="text-2xl font-bold text-ink mt-1">₹{Math.round(totalRevenueRequired).toLocaleString('en-IN')}</div>
          </div>
        </div>

        <div className="text-xs text-ink-soft/70 space-y-1">
          <p>• Total annual billable hours: <strong className="text-ink">{totalBillableHours} hrs</strong> ({billableHoursPerWeek} billable hrs/week across {workingWeeksPerYear} working weeks).</p>
          <p>• Takes into account unpaid client meetings, proposal writing, taxes, and operational expenses.</p>
        </div>
      </div>
    </div>
  )
}
