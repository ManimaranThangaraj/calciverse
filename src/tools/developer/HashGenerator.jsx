import { useState, useEffect } from 'react'
import { ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

export default function HashGenerator() {
  const [inputText, setInputText] = useState('Calciverse Privacy First Tools')
  const [hashes, setHashes] = useState({ sha1: '', sha256: '', sha512: '' })

  useEffect(() => {
    async function generateHashes() {
      if (!inputText) {
        setHashes({ sha1: '', sha256: '', sha512: '' })
        return
      }
      const encoder = new TextEncoder()
      const data = encoder.encode(inputText)

      const hashBufferSHA1 = await crypto.subtle.digest('SHA-1', data)
      const hashBufferSHA256 = await crypto.subtle.digest('SHA-256', data)
      const hashBufferSHA512 = await crypto.subtle.digest('SHA-512', data)

      const toHex = (buf) =>
        Array.from(new Uint8Array(buf))
          .map((b) => b.toString(16).padStart(2, '0'))
          .join('')

      setHashes({
        sha1: toHex(hashBufferSHA1),
        sha256: toHex(hashBufferSHA256),
        sha512: toHex(hashBufferSHA512)
      })
    }

    generateHashes()
  }, [inputText])

  const summaryText = `Input String: "${inputText}"\nSHA-256: ${hashes.sha256}\nSHA-512: ${hashes.sha512}\nSHA-1: ${hashes.sha1}`

  return (
    <div>
      <label className="block mb-4">
        <span className="text-sm font-medium text-ink-soft">Input Text String</span>
        <textarea
          rows={3}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter plain text to generate cryptographic hashes..."
          className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 text-sm font-mono text-ink outline-none transition-all focus:border-saffron focus:ring-1 focus:ring-saffron"
        />
      </label>

      <div className="space-y-4 mt-6">
        <ResultStat label="SHA-256 Hash" value={hashes.sha256 || '...'} emphasis />
        <ResultStat label="SHA-512 Hash" value={hashes.sha512 || '...'} />
        <ResultStat label="SHA-1 Hash" value={hashes.sha1 || '...'} />
      </div>

      <ToolActions
        toolName="Crypto Hash Generator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/hash-generator"
      />
    </div>
  )
}
