import { useState } from 'react'
import CopyButton from '../../components/ui/CopyButton.jsx'

export default function SQLFormatter() {
  const [sql, setSql] = useState('select id, name, email from users where status = "active" order by created_at desc limit 10;')
  const [formattedSql, setFormattedSql] = useState('')

  const formatQuery = () => {
    const keywords = ['SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'ORDER BY', 'GROUP BY', 'HAVING', 'LIMIT', 'JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'INSERT INTO', 'UPDATE', 'DELETE FROM']
    let query = sql

    keywords.forEach((kw) => {
      const reg = new RegExp(`\\b${kw}\\b`, 'gi')
      query = query.replace(reg, `\n${kw}`)
    })

    setFormattedSql(query.trim())
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-ink-soft">Raw SQL Query</span>
      </div>
      <textarea
        rows={4}
        value={sql}
        onChange={(e) => setSql(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 font-mono text-sm outline-none focus:border-saffron transition-colors"
      />
      <div className="mt-3">
        <button onClick={formatQuery} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-saffron dark:text-slate-950 dark:hover:bg-saffron/90 transition-colors">Format SQL Query</button>
      </div>

      {formattedSql && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-ink-soft">Formatted Output</span>
            <CopyButton getText={() => formattedSql} />
          </div>
          <pre className="mt-1.5 rounded-lg border border-line bg-paper-raised p-4 font-mono text-sm text-ink overflow-x-auto whitespace-pre-wrap">
            {formattedSql}
          </pre>
        </div>
      )}
    </div>
  )
}
