import { useState, useMemo } from 'react'
import CopyButton from '../../components/ui/CopyButton.jsx'

export default function JWTDecoder() {
  const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE5MTYyMzkwMjJ9.4z9x7_SAMPLE_SIG')

  const { header, payload, error, isExpired, expDate } = useMemo(() => {
    if (!token.trim()) return { header: null, payload: null, error: null, isExpired: false, expDate: '' }

    const parts = token.trim().split('.')
    if (parts.length < 2) {
      return { header: null, payload: null, error: 'Invalid JWT structure (must contain dots . separating header and payload)', isExpired: false, expDate: '' }
    }

    const base64UrlDecode = (str) => {
      let base64 = str.replace(/-/g, '+').replace(/_/g, '/')
      while (base64.length % 4) base64 += '='
      return decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      )
    }

    try {
      const headerObj = JSON.parse(base64UrlDecode(parts[0]))
      const payloadObj = JSON.parse(base64UrlDecode(parts[1]))

      let expired = false
      let expirationStr = 'No expiration claim (exp)'

      if (payloadObj.exp) {
        const expTime = payloadObj.exp * 1000
        expired = Date.now() > expTime
        expirationStr = new Date(expTime).toLocaleString()
      }

      return {
        header: JSON.stringify(headerObj, null, 2),
        payload: JSON.stringify(payloadObj, null, 2),
        error: null,
        isExpired: expired,
        expDate: expirationStr,
      }
    } catch (e) {
      return { header: null, payload: null, error: 'Failed to decode JWT Base64 payload: ' + e.message, isExpired: false, expDate: '' }
    }
  }, [token])

  return (
    <div>
      <span className="text-sm font-medium text-ink-soft">Encoded JWT Token</span>
      <textarea
        rows={4}
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Paste eyJ... token here"
        className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 font-mono text-sm outline-none focus:border-saffron transition-colors"
      />

      {error ? (
        <div className="mt-4 rounded-xl border border-alert bg-alert/10 p-4 text-alert font-mono text-xs">
          {error}
        </div>
      ) : (
        header && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-line bg-paper p-3">
              <span className="text-xs font-semibold text-ink-soft">Token Expiration Status:</span>
              <span className={`text-xs font-bold ${isExpired ? 'text-alert' : 'text-signal'}`}>
                {isExpired ? `Expired on ${expDate}` : `Valid (Expires: ${expDate})`}
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-saffron">Header</span>
                  <CopyButton getText={() => header} />
                </div>
                <pre className="mt-1.5 rounded-lg border border-line bg-paper-raised p-4 font-mono text-xs text-ink overflow-x-auto">
                  {header}
                </pre>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-signal">Payload</span>
                  <CopyButton getText={() => payload} />
                </div>
                <pre className="mt-1.5 rounded-lg border border-line bg-paper-raised p-4 font-mono text-xs text-ink overflow-x-auto">
                  {payload}
                </pre>
              </div>
            </div>
          </div>
        )
      )}
      <p className="mt-5 text-xs text-ink-soft/60">
        Decodes JWT tokens purely client-side. Tokens are never uploaded to any external server.
      </p>
    </div>
  )
}
