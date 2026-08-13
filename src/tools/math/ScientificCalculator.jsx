import { useState } from 'react'

export default function ScientificCalculator() {
  const [display, setDisplay] = useState('0')
  const [memory, setMemory] = useState(0)

  const handleBtn = (val) => {
    if (display === '0' || display === 'Error') {
      setDisplay(val)
    } else {
      setDisplay(display + val)
    }
  }

  const clearDisplay = () => setDisplay('0')
  const backspace = () => setDisplay(display.length > 1 ? display.slice(0, -1) : '0')

  const evaluateExpression = () => {
    try {
      // Replace scientific functions with JS Math equivalents
      let expr = display
        .replace(/sin\(/g, 'Math.sin(')
        .replace(/cos\(/g, 'Math.cos(')
        .replace(/tan\(/g, 'Math.tan(')
        .replace(/log\(/g, 'Math.log10(')
        .replace(/ln\(/g, 'Math.log(')
        .replace(/√\(/g, 'Math.sqrt(')
        .replace(/π/g, 'Math.PI')
        .replace(/e/g, 'Math.E')
        .replace(/\^/g, '**')

      // Safe evaluation using Function
      const res = new Function(`return ${expr}`)()
      if (typeof res === 'number' && !isNaN(res)) {
        setDisplay(res.toString())
      } else {
        setDisplay('Error')
      }
    } catch {
      setDisplay('Error')
    }
  }

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-line bg-paper-raised p-5 shadow-lg">
      <div className="mb-4 rounded-xl border border-line bg-paper p-4 text-right">
        <div className="font-mono text-xs text-ink-soft/60 h-4">{memory !== 0 ? `Mem: ${memory}` : ''}</div>
        <div className="font-mono text-3xl font-bold text-ink truncate tabular-num mt-1">{display}</div>
      </div>

      <div className="grid grid-cols-5 gap-2 font-mono text-sm">
        <button onClick={clearDisplay} className="rounded-lg bg-alert/20 text-alert font-bold p-3 hover:bg-alert/30">C</button>
        <button onClick={backspace} className="rounded-lg bg-paper border border-line p-3 font-semibold hover:border-saffron">⌫</button>
        <button onClick={() => handleBtn('(')} className="rounded-lg bg-paper border border-line p-3 hover:border-saffron">(</button>
        <button onClick={() => handleBtn(')')} className="rounded-lg bg-paper border border-line p-3 hover:border-saffron">)</button>
        <button onClick={() => handleBtn('/')} className="rounded-lg bg-saffron-soft text-saffron font-bold p-3 hover:bg-saffron/20">÷</button>

        <button onClick={() => handleBtn('sin(')} className="rounded-lg bg-paper border border-line p-2 text-xs font-semibold hover:border-saffron">sin</button>
        <button onClick={() => handleBtn('cos(')} className="rounded-lg bg-paper border border-line p-2 text-xs font-semibold hover:border-saffron">cos</button>
        <button onClick={() => handleBtn('tan(')} className="rounded-lg bg-paper border border-line p-2 text-xs font-semibold hover:border-saffron">tan</button>
        <button onClick={() => handleBtn('^')} className="rounded-lg bg-paper border border-line p-3 hover:border-saffron">x^y</button>
        <button onClick={() => handleBtn('*')} className="rounded-lg bg-saffron-soft text-saffron font-bold p-3 hover:bg-saffron/20">×</button>

        <button onClick={() => handleBtn('log(')} className="rounded-lg bg-paper border border-line p-2 text-xs font-semibold hover:border-saffron">log</button>
        <button onClick={() => handleBtn('7')} className="rounded-lg bg-paper border border-line p-3 font-bold hover:border-saffron">7</button>
        <button onClick={() => handleBtn('8')} className="rounded-lg bg-paper border border-line p-3 font-bold hover:border-saffron">8</button>
        <button onClick={() => handleBtn('9')} className="rounded-lg bg-paper border border-line p-3 font-bold hover:border-saffron">9</button>
        <button onClick={() => handleBtn('-')} className="rounded-lg bg-saffron-soft text-saffron font-bold p-3 hover:bg-saffron/20">−</button>

        <button onClick={() => handleBtn('ln(')} className="rounded-lg bg-paper border border-line p-2 text-xs font-semibold hover:border-saffron">ln</button>
        <button onClick={() => handleBtn('4')} className="rounded-lg bg-paper border border-line p-3 font-bold hover:border-saffron">4</button>
        <button onClick={() => handleBtn('5')} className="rounded-lg bg-paper border border-line p-3 font-bold hover:border-saffron">5</button>
        <button onClick={() => handleBtn('6')} className="rounded-lg bg-paper border border-line p-3 font-bold hover:border-saffron">6</button>
        <button onClick={() => handleBtn('+')} className="rounded-lg bg-saffron-soft text-saffron font-bold p-3 hover:bg-saffron/20">+</button>

        <button onClick={() => handleBtn('√(')} className="rounded-lg bg-paper border border-line p-2 text-xs font-semibold hover:border-saffron">√</button>
        <button onClick={() => handleBtn('1')} className="rounded-lg bg-paper border border-line p-3 font-bold hover:border-saffron">1</button>
        <button onClick={() => handleBtn('2')} className="rounded-lg bg-paper border border-line p-3 font-bold hover:border-saffron">2</button>
        <button onClick={() => handleBtn('3')} className="rounded-lg bg-paper border border-line p-3 font-bold hover:border-saffron">3</button>
        <button onClick={evaluateExpression} rowSpan={2} className="rounded-lg bg-saffron text-slate-950 font-bold p-3 row-span-2 flex items-center justify-center text-xl hover:bg-saffron/90 transition-colors">=</button>

        <button onClick={() => handleBtn('π')} className="rounded-lg bg-paper border border-line p-2 font-semibold hover:border-saffron">π</button>
        <button onClick={() => handleBtn('0')} className="rounded-lg bg-paper border border-line p-3 font-bold hover:border-saffron">0</button>
        <button onClick={() => handleBtn('.')} className="rounded-lg bg-paper border border-line p-3 font-bold hover:border-saffron">.</button>
        <button onClick={() => handleBtn('e')} className="rounded-lg bg-paper border border-line p-2 font-semibold hover:border-saffron">e</button>
      </div>
    </div>
  )
}
