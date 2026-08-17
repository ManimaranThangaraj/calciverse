import { useState } from 'react'
import SEO from '../components/SEO.jsx'
import { Mail, CheckCircle2, ShieldCheck, UserCheck, Send, Clock, MapPin, AlertCircle } from 'lucide-react'

function StaticShell({ title, description, path, children }) {
  return (
    <>
      <SEO title={title} description={description} path={path} />
      <div className="mx-auto max-w-4xl px-5 py-12">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">{title}</h1>
        <div className="prose-content mt-8 space-y-6 text-[15px] leading-relaxed text-ink-soft">{children}</div>
      </div>
    </>
  )
}

export function About() {
  return (
    <StaticShell
      title="About Calciverse"
      description="Learn about Calciverse.in, our mission, creator Manimaran Thangaraj, data privacy standards, and formula verification methods."
      path="/about"
    >
      <div className="rounded-2xl border border-line bg-paper-raised p-6 space-y-4">
        <h2 className="font-display text-xl font-bold text-ink flex items-center gap-2">
          <UserCheck className="text-saffron" size={24} />
          Welcome to Calciverse.in
        </h2>
        <p>
          <strong>Calciverse.in</strong> is a premium, free web utility platform designed to deliver fast, accurate, and transparent calculation tools across finance, health, education, everyday utilities, and developer tools. Created and engineered by <strong>Manimaran Thangaraj</strong>, Calciverse was built to eliminate bloated, ad-cluttered calculator websites that hide formulas, slow down devices, or harvest user data.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 mt-6">
        <div className="rounded-xl border border-line bg-paper-raised p-5 space-y-2">
          <ShieldCheck className="text-signal" size={24} />
          <h3 className="font-display text-base font-bold text-ink">100% Client-Side Privacy</h3>
          <p className="text-sm text-ink-soft">
            Every calculation executed on Calciverse runs entirely in your local browser memory using modern JavaScript. Your financial inputs, income figures, personal metrics, and health data are <strong>never stored, saved, or transmitted to any external server</strong>.
          </p>
        </div>

        <div className="rounded-xl border border-line bg-paper-raised p-5 space-y-2">
          <CheckCircle2 className="text-saffron" size={24} />
          <h3 className="font-display text-base font-bold text-ink">Verified Accuracy & Standards</h3>
          <p className="text-sm text-ink-soft">
            Our financial formulas align strictly with standard banking algorithms, Reserve Bank of India (RBI) reducing-balance loan models, and Income Tax Department of India tax slabs (FY 2026-27). Health calculators adhere to World Health Organization (WHO) and clinical physiological guidelines.
          </p>
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <h2 className="font-display text-2xl font-bold text-ink">Our Core Mission & Values</h2>
        <p>
          In a world overwhelmed by complex financial jargon, hidden fees, and cumbersome mobile apps, Calciverse provides clean, instant clarity. Whether you are computing loan EMIs before visiting a bank, projecting mutual fund wealth via SIPs, calculating your tax liability under the new tax regime, or measuring health benchmarks like BMI and BMR, our tools give you instant results with zero barriers.
        </p>

        <div className="rounded-xl border border-line bg-paper p-6 space-y-3">
          <h3 className="font-display text-lg font-semibold text-ink">Why Millions Choose Calciverse</h3>
          <ul className="space-y-2 text-sm text-ink-soft list-disc list-inside">
            <li><strong>Zero Mandatory Registration:</strong> Instant access to all calculators without creating an account or logging in.</li>
            <li><strong>No Backend Data Storage:</strong> Pure client-side calculations guarantee maximum data privacy.</li>
            <li><strong>Cross-Platform Responsiveness:</strong> Fully optimized for desktop, tablet, and mobile browsers.</li>
            <li><strong>Educational Context:</strong> Each calculator includes explicit mathematical formulas, step-by-step guides, worked real-world examples, and FAQs.</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line pt-6 mt-8">
        <h2 className="font-display text-xl font-bold text-ink">About the Developer</h2>
        <p>
          Calciverse is independently developed and maintained by <strong>Manimaran Thangaraj</strong>, a passionate web engineer dedicated to creating high-performance, accessible, and user-centric digital utilities. For feedback, feature requests, or partnership inquiries, feel free to reach out directly through our <a href="/contact" className="text-saffron underline font-medium">Contact Page</a> or email <a href="mailto:calciverse.in@gmail.com" className="text-saffron underline font-medium">calciverse.in@gmail.com</a>.
        </p>
      </div>
    </StaticShell>
  )
}

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Query', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
  }

  return (
    <StaticShell
      title="Contact Us"
      description="Get in touch with the Calciverse team for feedback, bug reports, tool requests, or support."
      path="/contact"
    >
      <p>
        Have a question, suggestion, wrong formula report, or feature request? We value your input and respond to every message within 24 to 48 business hours.
      </p>

      <div className="grid gap-8 md:grid-cols-5 mt-6">
        {/* Contact Form */}
        <div className="md:col-span-3 rounded-2xl border border-line bg-paper-raised p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="mx-auto text-signal h-12 w-12" />
              <h3 className="font-display text-xl font-bold text-ink">Thank You for Your Message!</h3>
              <p className="text-sm text-ink-soft max-w-sm mx-auto">
                We have received your message and will review your inquiry shortly. If a response is required, we will contact you at <strong>{formData.email}</strong>.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: 'General Query', message: '' }) }}
                className="mt-4 rounded-lg bg-saffron px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-saffron/90"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="font-display text-lg font-bold text-ink flex items-center gap-2">
                <Send className="text-saffron" size={20} />
                Send Us a Message
              </h2>

              <div>
                <label className="block text-xs font-medium text-ink-soft mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-saffron focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-ink-soft mb-1">Your Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. rahul@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-saffron focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-ink-soft mb-1">Inquiry Category</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-saffron focus:outline-none"
                >
                  <option value="General Query">General Query</option>
                  <option value="Bug Report">Bug / Calculation Error Report</option>
                  <option value="Tool Request">Request a New Calculator</option>
                  <option value="Advertising">Advertising & Sponsorship</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-ink-soft mb-1">Your Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your message or detailed feedback here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-saffron focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-saffron py-2.5 text-sm font-bold text-slate-950 hover:bg-saffron/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Direct Contact Details */}
        <div className="md:col-span-2 space-y-4">
          <div className="rounded-2xl border border-line bg-paper-raised p-5 space-y-3">
            <h3 className="font-display text-base font-bold text-ink flex items-center gap-2">
              <Mail className="text-saffron" size={18} />
              Direct Email
            </h3>
            <p className="text-xs text-ink-soft">
              For direct communication, media inquiries, or official business correspondence:
            </p>
            <a
              href="mailto:calciverse.in@gmail.com"
              className="block font-mono text-sm font-semibold text-saffron underline hover:opacity-80"
            >
              calciverse.in@gmail.com
            </a>
          </div>

          <div className="rounded-2xl border border-line bg-paper-raised p-5 space-y-3">
            <h3 className="font-display text-base font-bold text-ink flex items-center gap-2">
              <Clock className="text-signal" size={18} />
              Response Time SLA
            </h3>
            <p className="text-xs text-ink-soft">
              We monitor messages daily. You can expect a response within <strong>24 to 48 hours</strong> (Monday through Saturday).
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-paper-raised p-5 space-y-3">
            <h3 className="font-display text-base font-bold text-ink flex items-center gap-2">
              <MapPin className="text-saffron" size={18} />
              Location
            </h3>
            <p className="text-xs text-ink-soft">
              Operated & Managed from Tamil Nadu, India. Serving users globally.
            </p>
          </div>
        </div>
      </div>
    </StaticShell>
  )
}

export function Privacy() {
  return (
    <StaticShell
      title="Privacy Policy"
      description="Comprehensive privacy policy for Calciverse.in detailing cookie usage, Google AdSense, analytics, and data protection."
      path="/privacy-policy"
    >
      <div className="text-xs text-ink-soft/70">Last Updated: August 17, 2026</div>

      <div className="space-y-6">
        <section className="space-y-2">
          <h2 className="font-display text-xl font-bold text-ink">1. Introduction</h2>
          <p>
            At <strong>Calciverse.in</strong> (referred to as "we", "our", or "us"), we prioritize the privacy and security of our visitors. This Privacy Policy document outlines the types of information that is collected and recorded by Calciverse.in and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <a href="mailto:calciverse.in@gmail.com" className="text-saffron underline">calciverse.in@gmail.com</a>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-xl font-bold text-ink">2. Zero Client-Side Data Collection</h2>
          <p>
            The fundamental design principle of Calciverse.in is privacy by design. All calculator tools—including financial EMI, SIP, Income Tax, GST, health BMI, BMR, and developer generators—execute <strong>100% locally within your browser client memory</strong>.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-ink-soft">
            <li>We do NOT transmit your input numerical values to any server.</li>
            <li>We do NOT store financial numbers, salary data, loan details, or personal metrics in database storage.</li>
            <li>No user accounts, password credentials, or sensitive identification data are required to use Calciverse.in.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-xl font-bold text-ink">3. Google AdSense & Third-Party Advertising</h2>
          <p>
            Calciverse.in displays advertisements served by <strong>Google AdSense</strong> to support our free digital tools platform.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-ink-soft">
            <li>Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to Calciverse.in or other websites.</li>
            <li>Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to our site and/or other sites on the Internet.</li>
            <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" className="text-saffron underline">Google Ads Settings</a>.</li>
            <li>Alternatively, users can opt out of third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info" target="_blank" rel="noreferrer" className="text-saffron underline">www.aboutads.info</a>.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-xl font-bold text-ink">4. Log Files and Web Analytics</h2>
          <p>
            Like almost all standard web server hosting environments, Calciverse.in utilizes standard log files and anonymized web analytics (such as Google Analytics). The information inside the log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks. This information is used strictly to analyze trends, administer the site, track user movement on the website in aggregate, and gather broad demographic information. IP addresses and log data are not linked to any personally identifiable information.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-xl font-bold text-ink">5. Cookies and Local Storage</h2>
          <p>
            Calciverse.in uses standard browser cookies and `localStorage` mechanisms exclusively for:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-ink-soft">
            <li>Remembering your active theme preference (Dark Mode / Light Mode).</li>
            <li>Basic performance optimization and page caching.</li>
            <li>Serving contextually relevant, non-intrusive advertisements.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-xl font-bold text-ink">6. California Consumer Privacy Act (CCPA) Rights</h2>
          <p>
            Under the CCPA, among other rights, California consumers have the right to request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data collected, or request deletion of any personal data. Because Calciverse.in does not store personal identifiable data or sell personal information, no user data commercialization occurs.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-xl font-bold text-ink">7. General Data Protection Regulation (GDPR) Rights</h2>
          <p>
            We ensure you are fully aware of all of your data protection rights. Every user is entitled to the right to access, rectification, erasure, restrict processing, object to processing, and data portability. To exercise any of these rights, contact us at <a href="mailto:calciverse.in@gmail.com" className="text-saffron underline">calciverse.in@gmail.com</a>.
          </p>
        </section>
      </div>
    </StaticShell>
  )
}

export function Terms() {
  return (
    <StaticShell
      title="Terms of Use"
      description="Terms and conditions governing the access and usage of Calciverse.in tools, calculators, and content."
      path="/terms"
    >
      <div className="text-xs text-ink-soft/70">Last Updated: August 17, 2026</div>

      <div className="space-y-6">
        <section className="space-y-2">
          <h2 className="font-display text-xl font-bold text-ink">1. Acceptance of Terms</h2>
          <p>
            By accessing, browsing, or using <strong>Calciverse.in</strong>, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree with any part of these terms, you must discontinue use of the website immediately.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-xl font-bold text-ink">2. Informational & Educational Purpose Only</h2>
          <p>
            All mathematical tools, financial calculators, health calculators, tax estimators, converters, and articles hosted on Calciverse.in are provided strictly for <strong>informational and educational purposes</strong>.
          </p>
          <div className="rounded-xl border border-line bg-paper p-4 text-xs text-ink-soft space-y-2">
            <p>
              <strong>Financial Disclaimer:</strong> Calculation outputs do not constitute formal financial, investment, or credit advice. Always consult a certified financial planner, chartered accountant, or banking advisor before entering into loan or investment agreements.
            </p>
            <p>
              <strong>Medical Disclaimer:</strong> Health calculators (BMI, BMR, Body Fat, Calories) provide general physiological estimates based on standard clinical populations and WHO categories. They do not substitute medical diagnoses, clinical evaluations, or professional advice from licensed healthcare providers.
            </p>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-xl font-bold text-ink">3. Accuracy of Calculations</h2>
          <p>
            While we take rigorous measures to maintain mathematical accuracy and align formulas with official regulatory updates (e.g. Income Tax Slabs FY 2026-27, Reserve Bank of India reducing-balance EMI models), Calciverse.in does not guarantee that formulas are error-free or suited to individual specific circumstances. Actual bank loan schedules, tax assessments, or health diagnoses may vary due to compounding frequencies, rounding rules, processing fees, or specialized tax exemptions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-xl font-bold text-ink">4. Intellectual Property & Permitted Use</h2>
          <p>
            All original branding, website design, UI components, custom mathematical script integration, and articles on Calciverse.in are protected by copyright and intellectual property laws. You are granted a limited, non-exclusive, revocable license to access and use Calciverse.in for personal, non-commercial purposes.
          </p>
          <p>
            You agree not to copy, scrape, automate extraction, modify, reverse-engineer, frame, or redistribute any content, scripts, or codebase from Calciverse.in without prior written consent from the site administration.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-xl font-bold text-ink">5. Limitation of Liability</h2>
          <p>
            In no event shall Calciverse.in, its creator Manimaran Thangaraj, or its affiliates be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, use of, or inability to use this website, or any errors or omissions in calculation outputs.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-xl font-bold text-ink">6. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts located in Tamil Nadu, India.
          </p>
        </section>
      </div>
    </StaticShell>
  )
}

export function Disclaimer() {
  return (
    <StaticShell
      title="Accuracy & Legal Disclaimer"
      description="Formal disclaimers regarding the estimation nature of Calciverse.in calculations across finance, health, tax, and legal domains."
      path="/disclaimer"
    >
      <div className="space-y-6">
        <div className="rounded-2xl border border-line bg-paper-raised p-6 space-y-3">
          <h2 className="font-display text-xl font-bold text-ink flex items-center gap-2">
            <AlertCircle className="text-saffron" size={24} />
            General Estimation Notice
          </h2>
          <p>
            Calculators, converters, generators, and informational content provided on <strong>Calciverse.in</strong> are mathematical estimates designed to assist users in planning and preliminary decision-making. Outputs generated by this website should be treated as illustrative reference points, not as definitive legal, financial, tax, or medical conclusions.
          </p>
        </div>

        <section className="space-y-3">
          <h3 className="font-display text-lg font-bold text-ink">1. Financial & Investment Calculators</h3>
          <p className="text-sm text-ink-soft leading-relaxed">
            Financial calculations (including EMI, SIP, FD, RD, Loan Eligibility, CAGR, and Prepayment calculators) rely on simplified mathematical assumptions such as constant annual interest rates, uniform compounding intervals, and uninterrupted monthly contributions. Actual results from commercial banks, non-banking financial companies (NBFCs), or mutual fund houses may vary due to processing fees, benchmark rate changes, daily interest compounding, or market volatility.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-display text-lg font-bold text-ink">2. Income Tax & GST Calculators</h3>
          <p className="text-sm text-ink-soft leading-relaxed">
            Income Tax and GST tools reflect statutory rates and tax slab thresholds applicable under Indian tax legislation (such as Section 115BAC for the New Tax Regime FY 2026-27). However, individual tax liabilities depend on individual deduction eligibility (Section 80C, 80D, 24b, HRA exemptions), employer structuring, and tax officer assessments. Always consult a qualified Chartered Accountant (CA) or certified tax professional before filing official returns.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-display text-lg font-bold text-ink">3. Health & Fitness Calculators</h3>
          <p className="text-sm text-ink-soft leading-relaxed">
            Health tools (BMI, BMR, Body Fat %, Calorie, Ovulation, and Heart Rate Zone calculators) use standard physiological formulas (such as Mifflin-St Jeor, Harris-Benedict, or WHO adult BMI cutoffs). These formulas provide population-level estimations and do not account for individual medical histories, muscular density, metabolic conditions, or pregnancy nuances. They are not intended to diagnose, treat, or replace professional advice from registered physicians or dietitians.
          </p>
        </section>

        <section className="space-y-3 border-t border-line pt-4">
          <h3 className="font-display text-base font-bold text-ink">Questions or Feedback?</h3>
          <p className="text-sm text-ink-soft">
            If you notice any formula discrepancy or outdated regulatory rate on Calciverse.in, please notify us immediately at <a href="mailto:calciverse.in@gmail.com" className="text-saffron underline font-medium">calciverse.in@gmail.com</a> so we can review and update our algorithms.
          </p>
        </section>
      </div>
    </StaticShell>
  )
}
