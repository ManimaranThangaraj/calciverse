# Calciverse

Calculators, converters, generators and SEO articles, built as a React SPA
(Vite + React Router + Tailwind v4). 18 tools and 4 articles are fully live
right now; the architecture is built so growing to 250+/100+/50+/500+ is a
matter of adding entries to a registry, not rebuilding pages.

## Run it

```
npm install
npm run dev       # http://localhost:5173
npm run build      # outputs to dist/
```

## How it's structured

Everything routes through three data files - this is the part that makes
scaling manageable:

- `src/data/categories.js` - the 6 top-level categories
- `src/data/tools.js` - every calculator/converter/generator. Each entry has
  a `status` of `'live'` (routed, shown as a working card) or `'planned'`
  (shown as a "coming soon" card so the site never links to a dead page).
- `src/data/articles.js` - same `live`/`planned` pattern, for SEO articles.

Home, CategoryPage, ToolPage and ArticlePage all read from these files.
**To add tool #19:** write a component in `src/tools/<category>/`, add one
object to `tools.js` pointing at a `lazy()` import of it, set
`status: 'live'`. Nothing else changes.

### Why "planned" tools are shown at all

The brief asked for 250+ calculators, 100+ converters, 50+ generators and
500+ articles. Building all ~900 pieces of content in one pass isn't
realistic, and shipping fake/thin pages to hit a number would get the site
rejected by AdSense and penalized by Google Search - both cross-check for
duplicate or auto-generated filler. The registry pattern lets you see the
whole planned catalog and honestly show "18 live now, 250+ planned" on the
homepage, and grow toward the real number over time without re-architecting
anything.

## What's implemented right now

**Finance:** EMI, SIP, GST, FD, Loan calculators
**Education:** Percentage, CGPA, Attendance calculators
**Health:** BMI, Calorie, Water Intake calculators
**Everyday:** Age, Date Difference calculators, Password, QR Code, UUID,
Random Number generators
**Developer:** JSON Formatter, Base64, Color Picker, Regex Tester
**AI:** Bio Generator (template-based - see note below)

**Articles (4 live):** How EMI Is Calculated, Old vs New Tax Regime, BMI
Limitations, JSON vs YAML.

**Not yet built** (routed to "coming soon" cards): Income Tax Calculator,
Barcode Generator, HTML/SQL Formatters, Email Writer, Resume Builder, Cover
Letter Generator. Add these the same way as the live ones.

### Note on "AI Tools"
Bio Generator currently fills a template client-side - it does **not** call
an actual language model. If you want Email Writer / Resume Builder / Cover
Letter Generator to genuinely generate text (not just fill a template),
they need a backend: this is a static SPA with no server, so an AI Tools
category that calls a real model means adding an API route (e.g. a small
serverless function) that calls an LLM provider and keeps your API key off
the client. Happy to build that layer if you want these to be real - just
say the word.

## AdSense - what actually matters

A few things worth knowing before you apply, since a lot of advice online
is outdated or wrong:

1. **Approval requires real, substantial original content and genuine
   traffic** - not a page count. A site with 20 genuinely useful,
   well-written tools/articles and some organic visitors has a much better
   shot than one with 900 thin auto-generated pages and no visitors. Google
   has specifically cracked down on "thin affiliate/utility" sites.
2. **Required pages are already in place**: About, Contact, Privacy Policy,
   Terms, Disclaimer (`src/pages/StaticPages.jsx`). Fill in your real
   name/entity/email before applying - the placeholder text is marked with
   `<em>` and comments.
3. **`public/ads.txt`** has a placeholder `pub-0000000000000000` - replace
   it with your real publisher ID once you have one, or ads won't serve
   correctly even after approval.
4. **`AdSlot` component** (`src/components/AdSlot.jsx`) shows a dashed
   placeholder until you set `VITE_ADSENSE_CLIENT` in `.env` (copy from
   `.env.example`). It's already only mounted on pages with real live
   content (ToolPage, ArticlePage, Home, CategoryPage) - never on
   "planned"/empty pages, which is itself an AdSense policy requirement.
5. **I can't tell you how much this will earn.** Indian AdSense RPMs for
   utility-tool traffic are typically low (often well under $1-2 per 1,000
   pageviews) compared to US/UK traffic, and payout depends entirely on
   traffic volume and where visitors are located - there's no reliable way
   to predict revenue in advance. Treat any specific number you see online
   as a guess, not a guarantee.
6. This is general information, not financial advice - if monetization
   structure (ad networks vs. affiliate vs. subscription) is a real
   decision for you, it's worth researching current options rather than
   assuming AdSense is automatically the best fit.

## SEO

- Every route sets its own `<title>`/meta via `react-helmet-async`
  (`src/components/SEO.jsx`).
- `public/robots.txt` and `scripts/generate-sitemap.js` are in place.
  Run `node scripts/generate-sitemap.js` to regenerate `public/sitemap.xml`
  after adding pages - right now it covers static + category pages; extend
  it to loop over `tools.js`/`articles.js` once you're ready (noted in the
  script itself).
- **Important caveat:** this is a client-rendered SPA. Google can generally
  render JS-heavy pages now, but if organic search traffic really matters
  to you, consider migrating to a framework with server-side rendering or
  static generation (Next.js, Astro) before investing heavily in the 500
  articles - it'll index faster and more reliably than a pure SPA.

## Deploying

Static build (`npm run build` → `dist/`), so any static host works:
Vercel, Netlify, Cloudflare Pages, GitHub Pages. Since routing is
client-side (`react-router-dom`), configure your host to redirect all
paths to `index.html` (a `_redirects` or `vercel.json` rewrite rule) or
deep links like `/tool/emi-calculator` will 404 on refresh.

## Design

Palette: deep navy (`--color-ink #12213A`) + a saffron accent
(`--color-saffron #E0631B`), on a cool light background - deliberately not
the cream/terracotta look common in AI-generated sites. Display type is
Space Grotesk, body is Inter, and all calculator output uses JetBrains
Mono with tabular figures so numbers align - the site is instrument-like on
purpose, since calculators are the entire product.
