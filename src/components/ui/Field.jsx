export function NumberField({ label, value, onChange, suffix, min, max, step = 'any', hint }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-soft">{label}</span>
      <div className="mt-1.5 flex items-center rounded-lg border border-line bg-paper-raised transition-all focus-within:border-saffron focus-within:ring-1 focus-within:ring-saffron">
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(e.target.value === '' ? '' : Number(e.target.value))}
          className="w-full bg-transparent px-3 py-2.5 font-mono tabular-num text-base text-ink border-none outline-none focus:outline-none focus:ring-0 focus:border-none shadow-none"
        />
        {suffix && <span className="pr-3 text-sm text-ink-soft/70 font-mono select-none">{suffix}</span>}
      </div>
      {hint && <span className="mt-1 block text-xs text-ink-soft/70">{hint}</span>}
    </label>
  )
}

export function SelectField({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-soft">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 text-base text-ink outline-none transition-all focus:border-saffron focus:ring-1 focus:ring-saffron cursor-pointer"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </label>
  )
}

export function TextField({ label, value, onChange, placeholder, hint }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-soft">{label}</span>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 text-base text-ink outline-none transition-all focus:border-saffron focus:ring-1 focus:ring-saffron"
      />
      {hint && <span className="mt-1 block text-xs text-ink-soft/70">{hint}</span>}
    </label>
  )
}

export function ResultStat({ label, value, emphasis }) {
  return (
    <div
      className={`rounded-xl px-4 py-3.5 border transition-all ${
        emphasis
          ? 'bg-slate-900 text-white border-slate-800 dark:bg-saffron dark:text-slate-950 dark:border-saffron'
          : 'bg-signal-soft border-signal/20 dark:bg-signal-soft/30 dark:border-signal/30'
      }`}
    >
      <div
        className={`text-xs font-semibold uppercase tracking-wider ${
          emphasis ? 'text-slate-300 dark:text-slate-950/80' : 'text-signal dark:text-signal'
        }`}
      >
        {label}
      </div>
      <div
        className={`mt-1 font-mono tabular-num text-2xl font-bold ${
          emphasis ? 'text-white dark:text-slate-950' : 'text-ink'
        }`}
      >
        {value}
      </div>
    </div>
  )
}
