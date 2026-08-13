import { useState, useMemo } from 'react'
import { SelectField, ResultStat } from '../../components/ui/Field.jsx'

const TIMEZONES = [
  { label: 'India (IST - UTC+5:30)', value: 'Asia/Kolkata' },
  { label: 'US Eastern (EST/EDT - UTC-5)', value: 'America/New_York' },
  { label: 'US Pacific (PST/PDT - UTC-8)', value: 'America/Los_Angeles' },
  { label: 'London (GMT/BST - UTC+0)', value: 'Europe/London' },
  { label: 'Dubai (GST - UTC+4)', value: 'Asia/Dubai' },
  { label: 'Singapore (SGT - UTC+8)', value: 'Asia/Singapore' },
  { label: 'Tokyo (JST - UTC+9)', value: 'Asia/Tokyo' },
  { label: 'Sydney (AEST/AEDT - UTC+10)', value: 'Australia/Sydney' },
]

export default function TimeZoneConverter() {
  const [sourceTime, setSourceTime] = useState('14:30')
  const [fromTz, setFromTz] = useState('Asia/Kolkata')
  const [toTz, setToTz] = useState('America/New_York')

  const convertedTime = useMemo(() => {
    if (!sourceTime) return 'N/A'
    const [h, m] = sourceTime.split(':').map(Number)
    const now = new Date()

    // Create date in source timezone representation
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, 0)

    try {
      const formatted = d.toLocaleTimeString('en-US', {
        timeZone: toTz,
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        weekday: 'short',
      })
      return formatted
    } catch {
      return 'Invalid Time Zone'
    }
  }, [sourceTime, fromTz, toTz])

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="block">
          <span className="text-sm font-medium text-ink-soft">Select Time</span>
          <input
            type="time"
            value={sourceTime}
            onChange={(e) => setSourceTime(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 text-base outline-none focus:border-saffron transition-colors"
          />
        </label>
        <SelectField label="From Time Zone" value={fromTz} onChange={setFromTz} options={TIMEZONES} />
        <SelectField label="To Time Zone" value={toTz} onChange={setToTz} options={TIMEZONES} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Source Time" value={`${sourceTime} (${fromTz.split('/')[1]})`} />
        <ResultStat label="Converted Time" value={convertedTime} emphasis />
      </div>
      <p className="mt-5 text-xs text-ink-soft/60">
        Live international timezone conversion powered by standard Intl JavaScript date formatters.
      </p>
    </div>
  )
}
