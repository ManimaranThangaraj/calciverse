import { useState, useMemo } from 'react'
import { TextField, SelectField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

export default function SlugGenerator() {
  const [inputText, setInputText] = useState('Free Online Calculators & Financial Tools 2026!')
  const [separator, setSeparator] = useState('-')
  const [lowercase, setLowercase] = useState(true)
  const [removeSpecial, setRemoveSpecial] = useState(true)

  const slug = useMemo(() => {
    let str = inputText.trim()
    if (!str) return ''
    if (lowercase) str = str.toLowerCase()
    if (removeSpecial) {
      str = str.replace(/[^\w\s-]/g, '')
    }
    str = str.replace(/[\s_]+/g, separator)
    if (separator === '-') {
      str = str.replace(/-+/g, '-')
    }
    return str.replace(new RegExp(`^\\${separator}+|\\${separator}+$`, 'g'), '')
  }, [inputText, separator, lowercase, removeSpecial])

  const summaryText = `Original Text: "${inputText}"\nGenerated URL Slug: "${slug}"`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          label="Enter Text / Headline to Convert"
          value={inputText}
          onChange={setInputText}
          placeholder="e.g. How to Calculate Home Loan EMI Easily!"
        />
        <SelectField
          label="Separator Character"
          value={separator}
          onChange={setSeparator}
          options={[
            { label: 'Hyphen (-)', value: '-' },
            { label: 'Underscore (_)', value: '_' },
            { label: 'Dot (.)', value: '.' }
          ]}
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-6 text-xs font-medium text-ink">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
            className="rounded border-line text-saffron focus:ring-saffron"
          />
          <span>Force Lowercase</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={removeSpecial}
            onChange={(e) => setRemoveSpecial(e.target.checked)}
            className="rounded border-line text-saffron focus:ring-saffron"
          />
          <span>Strip Special Characters</span>
        </label>
      </div>

      <div className="mt-6">
        <ResultStat label="Generated URL Slug" value={slug || 'your-generated-slug'} emphasis />
      </div>

      <ToolActions
        toolName="URL Slug Generator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/slug-generator"
      />
    </div>
  )
}
