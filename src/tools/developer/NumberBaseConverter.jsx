import { useState, useMemo } from 'react'
import CopyButton from '../../components/ui/CopyButton.jsx'

export default function NumberBaseConverter() {
  const [decVal, setDecVal] = useState('255')
  const [activeBase, setActiveBase] = useState('dec')

  const parsedNumber = useMemo(() => {
    try {
      if (!decVal.trim()) return 0n
      if (activeBase === 'dec') {
        const clean = decVal.trim()
        if (!/^-?\d+$/.test(clean)) return null
        return BigInt(clean)
      }
      if (activeBase === 'bin') {
        const clean = decVal.replace(/\s+/g, '')
        if (!/^[01]+$/.test(clean)) return null
        return BigInt('0b' + clean)
      }
      if (activeBase === 'hex') {
        const clean = decVal.replace(/^0x/i, '').replace(/\s+/g, '')
        if (!/^[0-9a-fA-F]+$/.test(clean)) return null
        return BigInt('0x' + clean)
      }
      if (activeBase === 'oct') {
        const clean = decVal.replace(/^0o/i, '').replace(/\s+/g, '')
        if (!/^[0-7]+$/.test(clean)) return null
        return BigInt('0o' + clean)
      }
    } catch {
      return null
    }
    return null
  }, [decVal, activeBase])

  const values = useMemo(() => {
    if (parsedNumber === null) {
      return { dec: 'Invalid', bin: 'Invalid', hex: 'Invalid', oct: 'Invalid', isValid: false }
    }
    const num = parsedNumber
    return {
      dec: num.toString(10),
      bin: num >= 0n ? num.toString(2) : '-' + (-num).toString(2),
      hex: num >= 0n ? num.toString(16).toUpperCase() : '-' + (-num).toString(16).toUpperCase(),
      oct: num >= 0n ? num.toString(8) : '-' + (-num).toString(8),
      isValid: true,
    }
  }, [parsedNumber])

  const handleChange = (val, base) => {
    setActiveBase(base)
    setDecVal(val)
  }

  // Format binary into 4-bit nibbles for readability
  const formattedBin = useMemo(() => {
    if (!values.isValid || values.bin === 'Invalid') return ''
    const str = values.bin.replace('-', '')
    const padded = str.padStart(Math.ceil(str.length / 4) * 4, '0')
    const chunks = padded.match(/.{1,4}/g) || []
    return (values.bin.startsWith('-') ? '-' : '') + chunks.join(' ')
  }, [values])

  return (
    <div className="space-y-6">
      {/* Bases Input Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Decimal */}
        <div className="rounded-xl border border-line bg-paper p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-ink">Decimal (Base 10)</span>
            <CopyButton getText={() => values.dec} />
          </div>
          <input
            type="text"
            value={activeBase === 'dec' ? decVal : values.dec}
            onChange={(e) => handleChange(e.target.value, 'dec')}
            placeholder="e.g. 255"
            className="w-full rounded-lg border border-line bg-paper-raised px-3 py-2 font-mono text-base text-ink outline-none focus:border-saffron"
          />
        </div>

        {/* Binary */}
        <div className="rounded-xl border border-line bg-paper p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-ink">Binary (Base 2)</span>
            <CopyButton getText={() => values.bin} />
          </div>
          <input
            type="text"
            value={activeBase === 'bin' ? decVal : values.bin}
            onChange={(e) => handleChange(e.target.value, 'bin')}
            placeholder="e.g. 11111111"
            className="w-full rounded-lg border border-line bg-paper-raised px-3 py-2 font-mono text-base text-ink outline-none focus:border-saffron"
          />
        </div>

        {/* Hexadecimal */}
        <div className="rounded-xl border border-line bg-paper p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-ink">Hexadecimal (Base 16)</span>
            <CopyButton getText={() => values.hex} />
          </div>
          <input
            type="text"
            value={activeBase === 'hex' ? decVal : values.hex}
            onChange={(e) => handleChange(e.target.value, 'hex')}
            placeholder="e.g. FF"
            className="w-full rounded-lg border border-line bg-paper-raised px-3 py-2 font-mono text-base text-ink outline-none focus:border-saffron"
          />
        </div>

        {/* Octal */}
        <div className="rounded-xl border border-line bg-paper p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-ink">Octal (Base 8)</span>
            <CopyButton getText={() => values.oct} />
          </div>
          <input
            type="text"
            value={activeBase === 'oct' ? decVal : values.oct}
            onChange={(e) => handleChange(e.target.value, 'oct')}
            placeholder="e.g. 377"
            className="w-full rounded-lg border border-line bg-paper-raised px-3 py-2 font-mono text-base text-ink outline-none focus:border-saffron"
          />
        </div>
      </div>

      {/* Formatting & Bit Info */}
      {values.isValid && (
        <div className="rounded-xl border border-line bg-paper-raised p-4 space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Binary Nibble Breakdown (4-Bit Blocks)</h3>
          <div className="font-mono text-sm text-saffron bg-paper p-3 rounded-lg border border-line overflow-x-auto select-all">
            {formattedBin}
          </div>
        </div>
      )}
    </div>
  )
}
