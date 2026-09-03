import { Link } from 'react-router-dom'
import { categories } from '../data/categories.js'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-paper-raised print:hidden no-print">
      <div className="mx-auto max-w-6xl px-5 py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-5 font-sans">
        <div className="md:col-span-1">
          <Link to="/" className="inline-block">
            <img src="/logo.png" alt="Calciverse Logo" className="h-16 w-auto object-contain" />
          </Link>
          <p className="mt-2 text-xs text-ink-soft leading-relaxed">
            Free, fast, privacy-first online calculators, converters and generators for finance, math, marks, health and code.
          </p>
          <div className="mt-4 text-xs font-semibold text-saffron">
            100% Client-Side Computation
          </div>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-ink">Finance Tools</div>
          <ul className="mt-3 space-y-1.5 text-xs">
            <li><Link to="/tool/emi-calculator" className="text-ink-soft hover:text-saffron transition-colors">Home Loan EMI Calculator</Link></li>
            <li><Link to="/tool/income-tax-calculator" className="text-ink-soft hover:text-saffron transition-colors">Income Tax Calculator (FY 2026)</Link></li>
            <li><Link to="/tool/sip-calculator" className="text-ink-soft hover:text-saffron transition-colors">SIP Return Calculator</Link></li>
            <li><Link to="/tool/gst-calculator" className="text-ink-soft hover:text-saffron transition-colors">GST Tax Calculator</Link></li>
            <li><Link to="/tool/fd-calculator" className="text-ink-soft hover:text-saffron transition-colors">Fixed Deposit (FD) Calculator</Link></li>
            <li><Link to="/tool/mortgage-calculator" className="text-ink-soft hover:text-saffron transition-colors">Mortgage Loan Calculator</Link></li>
            <li><Link to="/tool/ppf-calculator" className="text-ink-soft hover:text-saffron transition-colors">PPF Corpus Calculator</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-ink">Everyday & Text</div>
          <ul className="mt-3 space-y-1.5 text-xs">
            <li><Link to="/tool/case-converter" className="text-ink-soft hover:text-saffron transition-colors">Text Case Converter</Link></li>
            <li><Link to="/tool/tip-calculator" className="text-ink-soft hover:text-saffron transition-colors">Tip Calculator & Split Bill</Link></li>
            <li><Link to="/tool/word-counter" className="text-ink-soft hover:text-saffron transition-colors">Word & Character Counter</Link></li>
            <li><Link to="/tool/age-calculator" className="text-ink-soft hover:text-saffron transition-colors">Exact Age Calculator</Link></li>
            <li><Link to="/tool/password-generator" className="text-ink-soft hover:text-saffron transition-colors">Password Generator</Link></li>
            <li><Link to="/tool/qr-code-generator" className="text-ink-soft hover:text-saffron transition-colors">QR Code Generator</Link></li>
            <li><Link to="/tool/discount-calculator" className="text-ink-soft hover:text-saffron transition-colors">Discount Calculator</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-ink">Math & Health</div>
          <ul className="mt-3 space-y-1.5 text-xs">
            <li><Link to="/tool/lcm-hcf-calculator" className="text-ink-soft hover:text-saffron transition-colors">LCM & HCF Calculator</Link></li>
            <li><Link to="/tool/ideal-weight-calculator" className="text-ink-soft hover:text-saffron transition-colors">Ideal Weight Calculator</Link></li>
            <li><Link to="/tool/bmi-calculator" className="text-ink-soft hover:text-saffron transition-colors">BMI Health Calculator</Link></li>
            <li><Link to="/tool/percentage-calculator" className="text-ink-soft hover:text-saffron transition-colors">Percentage Calculator</Link></li>
            <li><Link to="/tool/cgpa-calculator" className="text-ink-soft hover:text-saffron transition-colors">CGPA to % Converter</Link></li>
            <li><Link to="/tool/fraction-calculator" className="text-ink-soft hover:text-saffron transition-colors">Fraction Calculator</Link></li>
            <li><Link to="/tool/gpa-calculator" className="text-ink-soft hover:text-saffron transition-colors">GPA Grade Calculator</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-ink">Explore & Legal</div>
          <ul className="mt-3 space-y-1.5 text-xs">
            <li><Link to="/articles" className="text-ink-soft hover:text-saffron transition-colors">All Articles & Guides</Link></li>
            <li><Link to="/articles/when-to-use-which-text-case" className="text-ink-soft hover:text-saffron transition-colors">Sentence Case vs Title Case</Link></li>
            <li><Link to="/articles/lcm-and-hcf-explained-with-examples" className="text-ink-soft hover:text-saffron transition-colors">What is LCM & HCF?</Link></li>
            <li><Link to="/about" className="text-ink-soft hover:text-saffron transition-colors">About Calciverse</Link></li>
            <li><Link to="/contact" className="text-ink-soft hover:text-saffron transition-colors">Contact & Support</Link></li>
            <li><Link to="/privacy-policy" className="text-ink-soft hover:text-saffron transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-ink-soft hover:text-saffron transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line px-5 py-4 text-center text-xs text-ink-soft/60 space-y-1">
        <div>© {new Date().getFullYear()} Calciverse.in. Developed by Manimaran Thangaraj</div>
        <div className="text-[11px] opacity-75">All calculations are performed locally in browser memory for informational purposes.</div>
      </div>
    </footer>
  )
}
