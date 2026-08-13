import { useState, useEffect, useRef } from 'react'
import { ResultStat } from '../../components/ui/Field.jsx'

const PASSAGE = "Technology empowers people to create, calculate, and innovate with speed and precision. Every small step towards learning builds a foundation for long term mastery."

export default function TypingSpeedTest() {
  const [userInput, setUserInput] = useState('')
  const [timeLeft, setTimeLeft] = useState(60)
  const [isActive, setIsActive] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  const timerRef = useRef(null)

  const startTest = () => {
    setUserInput('')
    setTimeLeft(60)
    setIsActive(true)
    setIsFinished(false)
  }

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => t - 1)
      }, 1000)
    } else if (timeLeft === 0 && isActive) {
      clearInterval(timerRef.current)
      setIsActive(false)
      setIsFinished(true)
    }
    return () => clearInterval(timerRef.current)
  }, [isActive, timeLeft])

  const handleInput = (e) => {
    const val = e.target.value
    if (!isActive && !isFinished) {
      setIsActive(true)
    }
    setUserInput(val)
    if (val.length >= PASSAGE.length) {
      clearInterval(timerRef.current)
      setIsActive(false)
      setIsFinished(true)
    }
  }

  // Calculate WPM & Accuracy
  const timeElapsed = 60 - timeLeft
  const wordsTyped = userInput.trim().split(/\s+/).filter(Boolean).length
  const minutes = timeElapsed / 60
  const wpm = minutes > 0 ? Math.round(wordsTyped / minutes) : 0

  let correctChars = 0
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === PASSAGE[i]) correctChars++
  }
  const accuracy = userInput.length > 0 ? Math.round((correctChars / userInput.length) * 100) : 100

  return (
    <div>
      <div className="rounded-xl border border-line bg-paper p-4 font-mono text-base text-ink-soft select-none leading-relaxed">
        {PASSAGE.split('').map((char, index) => {
          let color = 'text-ink-soft/60'
          if (index < userInput.length) {
            color = userInput[index] === char ? 'text-signal font-bold bg-signal-soft/50' : 'text-alert font-bold bg-alert/20'
          }
          return (
            <span key={index} className={color}>
              {char}
            </span>
          )
        })}
      </div>

      <div className="mt-4">
        <textarea
          rows={3}
          value={userInput}
          onChange={handleInput}
          disabled={isFinished}
          placeholder="Start typing the passage above to begin the speed test..."
          className="w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 font-mono text-base outline-none focus:border-saffron transition-colors"
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={startTest}
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-saffron dark:text-slate-950 dark:hover:bg-saffron/90 transition-colors"
        >
          {isActive ? 'Restart Test' : 'Start / Reset Test'}
        </button>
        <span className="font-mono text-sm font-semibold text-saffron">Time Remaining: {timeLeft}s</span>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultStat label="Typing Speed (WPM)" value={`${wpm} WPM`} emphasis />
        <ResultStat label="Accuracy" value={`${accuracy}%`} />
        <ResultStat label="Test Status" value={isFinished ? 'Completed' : isActive ? 'In Progress' : 'Ready'} />
      </div>
    </div>
  )
}
