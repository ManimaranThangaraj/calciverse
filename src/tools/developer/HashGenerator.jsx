import { useState, useEffect, useId } from 'react'

export default function HashGenerator() {
  const [inputText, setInputText] = useState('Calciverse Privacy First Tools')
  const [hashes, setHashes] = useState({ sha1: '', sha256: '', sha512: '' })
  const [copiedKey, setCopiedKey] = useState('')

  const textId = useId()

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

  const handleCopy = (key, text) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(''), 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor={textId} className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
          Input Text String
        </label>
        <textarea
          id={textId}
          rows={3}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter plain text to generate cryptographic hashes..."
          className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-saffron resize-none"
        />
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-line bg-paper p-5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-saffron">SHA-256 Hash</span>
            <button
              onClick={() => handleCopy('sha256', hashes.sha256)}
              className="rounded-lg border border-line bg-paper-raised px-2.5 py-1 text-xs font-semibold text-ink hover:border-saffron transition-colors"
            >
              {copiedKey === 'sha256' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="font-mono text-xs text-ink break-all select-all bg-paper-raised p-3 rounded-lg border border-line">
            {hashes.sha256 || '...'}
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-paper p-5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-signal">SHA-512 Hash</span>
            <button
              onClick={() => handleCopy('sha512', hashes.sha512)}
              className="rounded-lg border border-line bg-paper-raised px-2.5 py-1 text-xs font-semibold text-ink hover:border-saffron transition-colors"
            >
              {copiedKey === 'sha512' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="font-mono text-xs text-ink break-all select-all bg-paper-raised p-3 rounded-lg border border-line">
            {hashes.sha512 || '...'}
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-paper p-5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-ink-soft">SHA-1 Hash</span>
            <button
              onClick={() => handleCopy('sha1', hashes.sha1)}
              className="rounded-lg border border-line bg-paper-raised px-2.5 py-1 text-xs font-semibold text-ink hover:border-saffron transition-colors"
            >
              {copiedKey === 'sha1' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="font-mono text-xs text-ink break-all select-all bg-paper-raised p-3 rounded-lg border border-line">
            {hashes.sha1 || '...'}
          </div>
        </div>
      </div>
    </div>
  )
}
