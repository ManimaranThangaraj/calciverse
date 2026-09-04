import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

const inr = (n) => Math.max(0, Math.round(n)).toLocaleString('en-IN')

function calcNewRegimeTax(income) {
  // New Regime Slabs (FY 2025-26 / 2026-27):
  // Std Deduction: ₹75,000
  // Up to 4L: 0%
  // 4L - 8L: 5%
  // 8L - 12L: 10%
  // 12L - 16L: 15%
  // 16L - 20L: 20%
  // 20L - 24L: 25%
  // Above 24L: 30%
  // Section 87A Rebate up to 12L taxable income (tax free up to 12L)
  const stdDeduction = 75000
  const taxable = Math.max(0, income - stdDeduction)
  if (taxable <= 1200000) return { tax: 0, cess: 0, total: 0, taxable }

  let tax = 0
  if (taxable > 2400000) tax += (taxable - 2400000) * 0.30
  if (taxable > 2000000) tax += (Math.min(taxable, 2400000) - 2000000) * 0.25
  if (taxable > 1600000) tax += (Math.min(taxable, 2000000) - 1600000) * 0.20
  if (taxable > 1200000) tax += (Math.min(taxable, 1600000) - 1200000) * 0.15
  if (taxable > 800000) tax += (Math.min(taxable, 1200000) - 800000) * 0.10
  if (taxable > 400000) tax += (Math.min(taxable, 800000) - 400000) * 0.05

  const cess = tax * 0.04
  return { tax, cess, total: tax + cess, taxable }
}

function calcOldRegimeTax(income, deductions) {
  const stdDeduction = 50000
  const taxable = Math.max(0, income - stdDeduction - deductions)
  if (taxable <= 500000) return { tax: 0, cess: 0, total: 0, taxable }

  let tax = 0
  if (taxable > 1000000) tax += (taxable - 1000000) * 0.30 + 112500
  else if (taxable > 500000) tax += (taxable - 500000) * 0.20 + 12500
  else if (taxable > 250000) tax += (taxable - 250000) * 0.05

  const cess = tax * 0.04
  return { tax, cess, total: tax + cess, taxable }
}

export default function IncomeTaxCalculator() {
  const [grossIncome, setGrossIncome] = useState(1200000)
  const [deductions, setDeductions] = useState(150000)

  const newRegime = useMemo(() => calcNewRegimeTax(Number(grossIncome) || 0), [grossIncome])
  const oldRegime = useMemo(() => calcOldRegimeTax(Number(grossIncome) || 0, Number(deductions) || 0), [grossIncome, deductions])

  const recommended = newRegime.total < oldRegime.total ? 'New Regime' : 'Old Regime'
  const savings = Math.abs(newRegime.total - oldRegime.total)

  const getTextSummary = () =>
    `Income Tax Comparison (FY 2025-26):\n` +
    `• Gross Annual Income: ₹${inr(grossIncome)}\n` +
    `• New Tax Regime Payable: ₹${inr(newRegime.total)}\n` +
    `• Old Tax Regime Payable: ₹${inr(oldRegime.total)}\n` +
    `• Recommendation: Save with ${recommended} (Save ₹${inr(savings)})\n\n` +
    `Calculated on Calciverse: ${window.location.href}`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Gross Annual Income" value={grossIncome} onChange={setGrossIncome} suffix="₹" step={10000} />
        <NumberField label="Old Regime Deductions (80C, 80D, HRA)" value={deductions} onChange={setDeductions} suffix="₹" step={5000} hint="Applies to Old Regime only" />
      </div>

      <ToolActions
        title="Income Tax Summary"
        getTextSummary={getTextSummary}
        onDownloadPDF={getTextSummary}
      />


      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-paper p-4">
          <div className="flex items-center justify-between">
            <span className="font-display font-semibold text-ink">New Tax Regime</span>
            <span className="rounded bg-signal-soft px-2 py-0.5 text-xs font-semibold text-signal">Std. Deduction ₹75k</span>
          </div>
          <div className="mt-3 text-xs text-ink-soft">Taxable Income: ₹{inr(newRegime.taxable)}</div>
          <div className="mt-1 font-mono text-2xl font-bold text-ink">₹{inr(newRegime.total)}</div>
          <div className="mt-1 text-xs text-ink-soft/70">Includes 4% Health & Ed Cess (₹{inr(newRegime.cess)})</div>
        </div>

        <div className="rounded-xl border border-line bg-paper p-4">
          <div className="flex items-center justify-between">
            <span className="font-display font-semibold text-ink">Old Tax Regime</span>
            <span className="rounded bg-saffron-soft px-2 py-0.5 text-xs font-semibold text-saffron">Std. Deduction ₹50k</span>
          </div>
          <div className="mt-3 text-xs text-ink-soft">Taxable Income: ₹{inr(oldRegime.taxable)}</div>
          <div className="mt-1 font-mono text-2xl font-bold text-ink">₹{inr(oldRegime.total)}</div>
          <div className="mt-1 text-xs text-ink-soft/70">Includes 4% Health & Ed Cess (₹{inr(oldRegime.cess)})</div>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-signal bg-signal-soft/40 p-4 flex items-center justify-between">
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-signal">Recommendation</span>
          <div className="font-display text-lg font-bold text-ink">Save with {recommended}</div>
        </div>
        <div className="text-right">
          <span className="text-xs text-ink-soft">You save</span>
          <div className="font-mono text-xl font-bold text-signal">₹{inr(savings)}</div>
        </div>
      </div>

      <p className="mt-5 text-xs text-ink-soft/60">
        Based on Union Budget FY 2025-26 / FY 2026-27 revised income tax slabs. Consult a certified CA for official tax filing advice.
      </p>
    </div>
  )
}
