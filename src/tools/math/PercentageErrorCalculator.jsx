import { useState, useMemo } from 'react'
import { NumberField, ResultStat } from '../../components/ui/Field.jsx'
import ToolActions from '../../components/ui/ToolActions.jsx'

export default function PercentageErrorCalculator() {
  const [experimentalValue, setExperimentalValue] = useState(9.6)
  const [acceptedValue, setAcceptedValue] = useState(9.8)

  const { percentError, absoluteError } = useMemo(() => {
    const exp = Number(experimentalValue) || 0
    const acc = Number(acceptedValue) || 0

    if (acc === 0) return { percentError: '0.00', absoluteError: '0.00' }

    const absErr = Math.abs(exp - acc)
    const pctErr = (absErr / Math.abs(acc)) * 100

    return { percentError: pctErr.toFixed(2), absoluteError: absErr.toFixed(4) }
  }, [experimentalValue, acceptedValue])

  const summaryText = `Experimental Value: ${experimentalValue}\nAccepted True Value: ${acceptedValue}\nAbsolute Error: ${absoluteError}\nPercentage Error: ${percentError}%`

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Experimental / Measured Value" value={experimentalValue} onChange={setExperimentalValue} step="any" />
        <NumberField label="Theoretical / Accepted True Value" value={acceptedValue} onChange={setAcceptedValue} step="any" />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultStat label="Percentage Error" value={`${percentError}%`} emphasis />
        <ResultStat label="Absolute Error |Exp - True|" value={absoluteError} />
      </div>

      <ToolActions
        toolName="Percentage Error Calculator"
        summaryText={summaryText}
        shareUrl="https://calciverse.in/tool/percentage-error-calculator"
      />
    </div>
  )
}
