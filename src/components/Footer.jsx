import { Link } from 'react-router-dom'
import { categories } from '../data/categories.js'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="mt-24 border-t border-line bg-paper-raised/80 backdrop-blur-sm print:hidden no-print">
      {/* Top Footer Main Section */}
      <div className="mx-auto max-w-7xl px-5 py-14 font-sans">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-4">
            <Link to="/" className="inline-block group">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Calciverse Logo" className="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
              Fast, accurate, privacy-first online calculators, converters and generators. Built for everyday financial, academic, and technical calculations.
            </p>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-saffron/10 border border-saffron/20 px-3 py-1 text-xs font-medium text-saffron">
              <span className="h-1.5 w-1.5 rounded-full bg-saffron animate-pulse" />
              100% Client-Side Private
            </div>
          </div>

          {/* Column 1: Finance */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink border-b border-line/70 pb-2.5 mb-3.5">
              Finance & Tax
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/tool/emi-calculator" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>Home Loan EMI</span>
                </Link>
              </li>
              <li>
                <Link to="/tool/income-tax-calculator" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>Income Tax FY 2026</span>
                </Link>
              </li>
              <li>
                <Link to="/tool/sip-calculator" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>SIP Return Calculator</span>
                </Link>
              </li>
              <li>
                <Link to="/tool/gst-calculator" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>GST Calculator India</span>
                </Link>
              </li>
              <li>
                <Link to="/tool/fd-calculator" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>Fixed Deposit (FD)</span>
                </Link>
              </li>
              <li>
                <Link to="/tool/mortgage-calculator" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>Mortgage Calculator</span>
                </Link>
              </li>
              <li>
                <Link to="/tool/ppf-calculator" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>PPF Corpus Calculator</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Everyday & Text */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink border-b border-line/70 pb-2.5 mb-3.5">
              Everyday & Text
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/tool/case-converter" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>Text Case Converter</span>
                </Link>
              </li>
              <li>
                <Link to="/tool/tip-calculator" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>Tip & Bill Splitter</span>
                </Link>
              </li>
              <li>
                <Link to="/tool/word-counter" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>Word & Character Counter</span>
                </Link>
              </li>
              <li>
                <Link to="/tool/age-calculator" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>Exact Age Calculator</span>
                </Link>
              </li>
              <li>
                <Link to="/tool/password-generator" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>Password Generator</span>
                </Link>
              </li>
              <li>
                <Link to="/tool/qr-code-generator" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>QR Code Generator</span>
                </Link>
              </li>
              <li>
                <Link to="/tool/discount-calculator" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>Discount Calculator</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Math & Health */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink border-b border-line/70 pb-2.5 mb-3.5">
              Math & Health
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/tool/lcm-hcf-calculator" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>LCM & HCF Calculator</span>
                </Link>
              </li>
              <li>
                <Link to="/tool/ideal-weight-calculator" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>Ideal Body Weight</span>
                </Link>
              </li>
              <li>
                <Link to="/tool/bmi-calculator" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>BMI Health Calculator</span>
                </Link>
              </li>
              <li>
                <Link to="/tool/percentage-calculator" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>Percentage Calculator</span>
                </Link>
              </li>
              <li>
                <Link to="/tool/cgpa-calculator" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>CGPA to % Converter</span>
                </Link>
              </li>
              <li>
                <Link to="/tool/fraction-calculator" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>Fraction Calculator</span>
                </Link>
              </li>
              <li>
                <Link to="/tool/gpa-calculator" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>GPA Grade Calculator</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Explore & Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink border-b border-line/70 pb-2.5 mb-3.5">
              Explore & Company
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/articles" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>All Articles & Guides</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>About Calciverse</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>Contact & Support</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>Terms of Service</span>
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-ink-soft hover:text-saffron hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  <span>Accuracy Disclaimer</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-line bg-paper/60 px-5 py-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-soft">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} <strong className="text-ink font-semibold">Calciverse.in</strong></span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Developed by <span className="text-ink font-medium">Manimaran Thangaraj</span></span>
          </div>

          <p className="text-[11px] text-center md:text-left text-ink-soft/75 max-w-xl">
            Calculations are performed locally in browser memory for informational reference only and do not constitute financial or medical advice.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-paper-raised px-3 py-1.5 text-xs font-medium text-ink hover:border-saffron hover:text-saffron transition-all"
            title="Back to Top"
          >
            <span>Back to Top</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
