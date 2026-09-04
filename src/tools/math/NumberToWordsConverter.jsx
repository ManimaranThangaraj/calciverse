import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import CopyButton from '../../components/ui/CopyButton.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

const ONES = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
const TENS = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']

function convertBelowThousand(n) {
  let str = ''
  if (n >= 100) {
    str += ONES[Math.floor(n / 100)] + ' Hundred '
    n %= 100
  }
  if (n >= 20) {
    str += TENS[Math.floor(n / 10)] + ' '
    n %= 10
  }
  if (n > 0) {
    str += ONES[n] + ' '
  }
  return str.trim()
}

function numberToIndianWords(num) {
  if (num === 0) return 'Zero Rupees Only'
  let n = Math.floor(Math.abs(num))
  let str = ''

  if (Math.floor(n / 10000000) > 0) {
    str += convertBelowThousand(Math.floor(n / 10000000)) + ' Crore '
    n %= 10000000
  }
  if (Math.floor(n / 100000) > 0) {
    str += convertBelowThousand(Math.floor(n / 100000)) + ' Lakh '
    n %= 100000
  }
  if (Math.floor(n / 1000) > 0) {
    str += convertBelowThousand(Math.floor(n / 1000)) + ' Thousand '
    n %= 1000
  }
  if (n > 0) {
    str += convertBelowThousand(n) + ' '
  }
  return (str.trim() + ' Rupees Only').replace(/\s+/g, ' ')
}

function numberToInternationalWords(num) {
  if (num === 0) return 'Zero'
  let n = Math.floor(Math.abs(num))
  let str = ''

  if (Math.floor(n / 1000000000) > 0) {
    str += convertBelowThousand(Math.floor(n / 1000000000)) + ' Billion '
    n %= 1000000000
  }
  if (Math.floor(n / 1000000) > 0) {
    str += convertBelowThousand(Math.floor(n / 1000000)) + ' Million '
    n %= 1000000
  }
  if (Math.floor(n / 1000) > 0) {
    str += convertBelowThousand(Math.floor(n / 1000)) + ' Thousand '
    n %= 1000
  }
  if (n > 0) {
    str += convertBelowThousand(n) + ' '
  }
  return str.trim().replace(/\s+/g, ' ')
}

export default function NumberToWordsConverter() {
  const [amount, setAmount] = useState(1250500)

  const { indianWords, intlWords } = useMemo(() => {
    const val = Number(amount) || 0
    return {
      indianWords: numberToIndianWords(val),
      intlWords: numberToInternationalWords(val),
    }
  }, [amount])

  const getTextSummary = () =>
    `Number to Words Conversion Summary:\n` +
    `• Number: ${amount}\n` +
    `• Indian Format: ${indianWords}\n` +
    `• International Format: ${intlWords}\n\n` +
    `Calculated on Calciverse: ${window.location.href}`

  return (
    <div>
      <div className="max-w-md">
        <NumberField label="Enter Number" value={amount} onChange={setAmount} suffix="₹" step={1000} />
      </div>

      <ToolActions
        title="Number to Words Summary"
        getTextSummary={getTextSummary}
        onDownloadPDF={getTextSummary}
      />

      <div className="mt-6 space-y-4">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-ink-soft">Indian Numbering Format (Lakhs / Crores)</span>
            <CopyButton getText={() => indianWords} />
          </div>
          <div className="mt-1.5 rounded-lg border border-line bg-paper-raised p-4 font-display font-semibold text-lg text-saffron">
            {indianWords}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-ink-soft">International Format (Millions / Billions)</span>
            <CopyButton getText={() => intlWords} />
          </div>
          <div className="mt-1.5 rounded-lg border border-line bg-paper-raised p-4 font-display font-semibold text-lg text-ink">
            {intlWords}
          </div>
        </div>
      </div>

      {/* Reference Conversion Table */}
      <div className="mt-8 border-t border-line pt-6">
        <h3 className="text-lg font-semibold text-ink mb-3">Number to Words Quick Examples</h3>
        <div className="overflow-x-auto rounded-lg border border-line bg-paper">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-line bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-100 text-xs font-bold uppercase">
              <tr>
                <th className="px-4 py-3 text-slate-900 dark:text-slate-100 font-bold">Number</th>
                <th className="px-4 py-3 text-slate-900 dark:text-slate-100 font-bold">Indian System (Rupees)</th>
                <th className="px-4 py-3 text-slate-900 dark:text-slate-100 font-bold">International System</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-line text-ink">
              <tr>
                <td className="px-4 py-2.5 font-mono">1</td>
                <td className="px-4 py-2.5">One Rupee Only</td>
                <td className="px-4 py-2.5">One</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-mono">100</td>
                <td className="px-4 py-2.5">One Hundred Rupees Only</td>
                <td className="px-4 py-2.5">One Hundred</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-mono">1,000</td>
                <td className="px-4 py-2.5">One Thousand Rupees Only</td>
                <td className="px-4 py-2.5">One Thousand</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-mono">1,00,000</td>
                <td className="px-4 py-2.5">One Lakh Rupees Only</td>
                <td className="px-4 py-2.5">One Hundred Thousand</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-mono">10,00,000</td>
                <td className="px-4 py-2.5">Ten Lakh Rupees Only</td>
                <td className="px-4 py-2.5">One Million</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-mono">1,00,00,000</td>
                <td className="px-4 py-2.5">One Crore Rupees Only</td>
                <td className="px-4 py-2.5">Ten Million</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
