import { useState } from 'react'
import { TextField, NumberField } from '../../components/ui/Field.jsx'
import CopyButton from '../../components/ui/CopyButton.jsx'
import { Plus, Trash2, Printer } from 'lucide-react'

export default function InvoiceGenerator() {
  const [invoiceNo, setInvoiceNo] = useState('INV-001')
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0])
  const [companyName, setCompanyName] = useState('Acme Technologies Ltd.')
  const [companyDetails, setCompanyDetails] = useState('123 Business Park, Mumbai, MH\nGSTIN: 27AAAAA0000A1Z5')
  const [clientName, setClientName] = useState('Client Enterprises')
  const [clientDetails, setClientDetails] = useState('456 Corporate Ave, Bengaluru, KA')
  const [taxRate, setTaxRate] = useState(18)
  const [items, setItems] = useState([
    { id: 1, desc: 'Web Design & Development', qty: 1, rate: 25000 },
    { id: 2, desc: 'Cloud Hosting (Annual)', qty: 1, rate: 5000 },
  ])

  const addItem = () => {
    setItems((prev) => [...prev, { id: Date.now(), desc: 'New Item / Service', qty: 1, rate: 1000 }])
  }

  const removeItem = (id) => {
    if (items.length <= 1) return
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateItem = (id, key, val) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [key]: val } : item))
    )
  }

  const subtotal = items.reduce((acc, item) => acc + (Number(item.qty) || 0) * (Number(item.rate) || 0), 0)
  const taxAmount = (subtotal * (Number(taxRate) || 0)) / 100
  const grandTotal = subtotal + taxAmount

  const handlePrint = () => {
    window.print()
  }

  return (
    <div id="printable-invoice" className="printable-invoice space-y-6">
      {/* Header Info */}
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField label="Invoice Number" value={invoiceNo} onChange={setInvoiceNo} />
        <div>
          <label className="block text-sm font-medium text-ink-soft mb-1.5">Invoice Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 text-base text-ink outline-none transition-all focus:border-saffron focus:ring-1 focus:ring-saffron"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <TextField label="Your Business Name" value={companyName} onChange={setCompanyName} />
          <textarea
            rows={2}
            value={companyDetails}
            onChange={(e) => setCompanyDetails(e.target.value)}
            placeholder="Address, GSTIN, Email, Phone..."
            className="mt-2 w-full rounded-lg border border-line bg-paper-raised px-3 py-2 text-sm text-ink outline-none focus:border-saffron"
          />
        </div>
        <div>
          <TextField label="Client / Billed To Name" value={clientName} onChange={setClientName} />
          <textarea
            rows={2}
            value={clientDetails}
            onChange={(e) => setClientDetails(e.target.value)}
            placeholder="Client address, Tax ID..."
            className="mt-2 w-full rounded-lg border border-line bg-paper-raised px-3 py-2 text-sm text-ink outline-none focus:border-saffron"
          />
        </div>
      </div>

      {/* Item Table */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-ink">Line Items</h3>
          <button
            type="button"
            onClick={addItem}
            className="flex items-center gap-1 text-xs font-semibold text-saffron hover:underline cursor-pointer print:hidden no-print"
          >
            <Plus size={14} /> Add Item
          </button>
        </div>

        <div className="space-y-2">
          {items.map((item) => (
            <div key={item.id} className="grid grid-cols-12 gap-2 items-center rounded-lg border border-line bg-paper p-2.5">
              <div className="col-span-5 sm:col-span-6 print:col-span-6">
                <input
                  type="text"
                  value={item.desc}
                  onChange={(e) => updateItem(item.id, 'desc', e.target.value)}
                  placeholder="Item description"
                  className="w-full rounded border border-line bg-paper-raised px-2 py-1.5 text-sm text-ink outline-none focus:border-saffron"
                />
              </div>
              <div className="col-span-2 sm:col-span-2 print:col-span-2">
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={(e) => updateItem(item.id, 'qty', Math.max(1, Number(e.target.value) || 1))}
                  className="w-full rounded border border-line bg-paper-raised px-2 py-1.5 font-mono text-sm text-ink outline-none focus:border-saffron"
                />
              </div>
              <div className="col-span-3 sm:col-span-3 print:col-span-4">
                <input
                  type="number"
                  min="0"
                  value={item.rate}
                  onChange={(e) => updateItem(item.id, 'rate', Math.max(0, Number(e.target.value) || 0))}
                  className="w-full rounded border border-line bg-paper-raised px-2 py-1.5 font-mono text-sm text-ink outline-none focus:border-saffron"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 text-right print:hidden no-print">
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  disabled={items.length <= 1}
                  className="text-ink-soft/60 hover:text-alert disabled:opacity-30 cursor-pointer"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tax & Total */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-line bg-paper-raised p-4">
        <div className="w-full sm:w-48">
          <NumberField label="Tax / GST Rate (%)" value={taxRate} onChange={(v) => setTaxRate(Number(v) || 0)} min={0} max={100} suffix="%" />
        </div>

        <div className="w-full sm:w-auto text-right space-y-1 font-mono text-sm">
          <div className="text-ink-soft">Subtotal: <span className="text-ink font-semibold">₹{subtotal.toLocaleString('en-IN')}</span></div>
          <div className="text-ink-soft">Tax ({taxRate}%): <span className="text-ink font-semibold">₹{taxAmount.toLocaleString('en-IN')}</span></div>
          <div className="text-lg font-bold text-saffron pt-1 border-t border-line">
            Total: ₹{grandTotal.toLocaleString('en-IN')}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 print:hidden no-print">
        <button
          type="button"
          onClick={handlePrint}
          className="flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-saffron dark:text-slate-950 dark:hover:bg-saffron/90 transition-colors cursor-pointer"
        >
          <Printer size={16} /> Print / Save as PDF
        </button>
        <CopyButton getText={() => `Invoice ${invoiceNo}\nTotal: ₹${grandTotal.toLocaleString('en-IN')}`} label="Copy Total Summary" />
      </div>
    </div>
  )
}
