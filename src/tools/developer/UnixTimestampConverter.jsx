import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'

export default function UnixTimestampConverter() {
  const [timestamp, setTimestamp] = useState(() => Math.floor(Date.now() / 1000))
  const [customDate, setCustomDate] = useState(() => new Date().toISOString().slice(0, 16))

  const { utcDate, localDate, relativeTime } = useMemo(() => {
    const ts = Number(timestamp) || 0
    // Check if seconds or milliseconds (ms timestamps have > 11 digits)
    const isMs = ts > 100000000000
    const d = new Date(isMs ? ts : ts * 1000)

    if (isNaN(d.getTime())) return { utcDate: 'Invalid Timestamp', localDate: 'Invalid', relativeTime: 'N/A' }

    const utc = d.toUTCString()
    const local = d.toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'long' })

    const now = Date.now()
    const diffSec = Math.floor((d.getTime() - now) / 1000)
    let rel = ''
    if (Math.abs(diffSec) < 60) rel = `${diffSec} seconds`
    else if (Math.abs(diffSec) < 3600) rel = `${Math.floor(diffSec / 60)} minutes`
    else if (Math.abs(diffSec) < 86400) rel = `${Math.floor(diffSec / 3600)} hours`
    else rel = `${Math.floor(diffSec / 86400)} days`

    rel = diffSec >= 0 ? `in ${rel}` : `${rel.replace('-', '')} ago`

    return { utcDate: utc, localDate: local, relativeTime: rel }
  }, [timestamp])

  const convertDateToTimestamp = (dateStr) => {
    setCustomDate(dateStr)
    const d = new Date(dateStr)
    if (!isNaN(d.getTime())) {
      setTimestamp(Math.floor(d.getTime() / 1000))
    }
  }

  const setNow = () => {
    const nowTs = Math.floor(Date.now() / 1000)
    setTimestamp(nowTs)
    setCustomDate(new Date().toISOString().slice(0, 16))
  }

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 items-end">
        <NumberField label="Unix Timestamp (Seconds or Milliseconds)" value={timestamp} onChange={setTimestamp} />
        <div className="flex gap-2 items-center">
          <button onClick={setNow} className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-saffron dark:text-slate-950 dark:hover:bg-saffron/90 transition-colors">Set to Now</button>
        </div>
      </div>

      <div className="mt-4">
        <label className="block max-w-md">
          <span className="text-sm font-medium text-ink-soft">Or Pick Date & Time</span>
          <input
            type="datetime-local"
            value={customDate}
            onChange={(e) => convertDateToTimestamp(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 text-base outline-none focus:border-saffron transition-colors"
          />
        </label>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Local Time" value={localDate} emphasis />
        <ResultStat label="UTC / GMT Time" value={utcDate} />
        <ResultStat label="Relative Time" value={relativeTime} />
      </div>
    </div>
  )
}
