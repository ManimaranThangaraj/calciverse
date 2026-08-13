import SEO from '../components/SEO.jsx'

function StaticShell({ title, description, path, children }) {
  return (
    <>
      <SEO title={title} description={description} path={path} />
      <div className="mx-auto max-w-2xl px-5 py-12">
        <h1 className="font-display text-3xl font-bold text-ink">{title}</h1>
        <div className="prose-content mt-6 space-y-4 text-[15px] leading-relaxed text-ink-soft">{children}</div>
      </div>
    </>
  )
}

export function About() {
  return (
    <StaticShell title="About Calciverse" description="What Calciverse is and who built it." path="/about">
      <p>Calciverse is a free collection of calculators, converters and generators built for everyday use — EMIs, GST, BMI, exam percentages, and the small utilities that come up constantly but never deserve a whole app of their own.</p>
      <p>Every tool runs entirely in your browser. Nothing you type into a calculator is sent to a server or stored — the maths happens on your device.</p>
      <p><em>Replace this paragraph with a couple of real sentences about who's behind the site — AdSense reviewers and users both want to know there's a real person or team responsible for the content.</em></p>
    </StaticShell>
  )
}

export function Contact() {
  return (
    <StaticShell title="Contact" description="How to reach Calciverse." path="/contact">
      <p>Found a bug, a wrong formula, or want a tool added? Write to <a className="text-saffron underline" href="mailto:calciverse.in@gmail.com">calciverse.in@gmail.com</a> (replace with your real inbox before launch).</p>
    </StaticShell>
  )
}

export function Privacy() {
  return (
    <StaticShell title="Privacy Policy" description="How Calciverse handles data and cookies." path="/privacy-policy">
      <p><em>This is a starting template, not legal advice — have it reviewed before you publish, and fill in your actual entity name and contact details.</em></p>
      <p><strong>What we collect:</strong> Calciverse's calculators run client-side; the numbers you enter are not transmitted to our servers. We do use standard analytics to understand aggregate traffic (pages visited, approximate location, device type).</p>
      <p><strong>Advertising:</strong> This site uses Google AdSense to display ads. Google and its partners may use cookies to serve ads based on a visitor's prior visits to this and other websites. Visitors can opt out of personalized advertising through <a className="text-saffron underline" href="https://adssettings.google.com" target="_blank" rel="noreferrer">Google Ads Settings</a>.</p>
      <p><strong>Cookies:</strong> We use cookies for basic site functionality and, where enabled, advertising and analytics purposes as described above.</p>
      <p><strong>Your rights:</strong> You may contact us at any time to ask what data we hold about you or to request its removal, subject to applicable law.</p>
    </StaticShell>
  )
}

export function Terms() {
  return (
    <StaticShell title="Terms of Use" description="Terms for using Calciverse." path="/terms">
      <p><em>Starting template — have this reviewed before launch.</em></p>
      <p>Calciverse's tools are provided for informational and educational purposes only. They are not a substitute for professional financial, medical, tax or legal advice. Always verify important calculations (loan terms, tax filings, medical decisions) with a qualified professional or official source.</p>
      <p>We make a reasonable effort to keep formulas accurate and up to date but do not guarantee the outputs are error-free or current with the latest regulations (e.g. tax slabs, GST rates).</p>
      <p>By using this site you agree not to misuse it — including attempting to scrape, disrupt, or reverse-engineer the service beyond normal browser use.</p>
    </StaticShell>
  )
}

export function Disclaimer() {
  return (
    <StaticShell title="Disclaimer" description="Accuracy and liability disclaimer for Calciverse's calculators." path="/disclaimer">
      <p>Every calculator on this site is an estimate based on the inputs you provide and standard public formulas. Actual figures from your bank, employer, school or doctor may differ due to rounding, fees, current rates, or rules specific to your situation.</p>
      <p>Nothing on this site constitutes financial, medical, legal or tax advice. Use these tools as a starting point for your own research, not as a final answer.</p>
    </StaticShell>
  )
}
