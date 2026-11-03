// 8 Bespoke Business & Commercial Tool Guides
export const businessToolGuides = {
  "invoice-generator": {
    overview: "Generates professional, printable, and downloadable GST-compliant commercial tax invoices with itemized line items, tax breakdowns, and payment terms.",
    formula: "Line Item Total = Quantity × Unit Price | Subtotal = Sum(Line Items) | Grand Total = Subtotal + GST/Taxes - Discounts",
    explanation: "Includes mandatory statutory fields: Supplier GSTIN, Buyer GSTIN, HSN/SAC codes, reverse charge indicator, and CGST/SGST/IGST splits.",
    example: {
      title: "Worked Example: Consulting Invoice with 2 Billable Line Items",
      inputs: "Item 1: 10 Hours Web Dev at ₹1,500/hr | Item 2: UI Design ₹10,000 | GST Rate = 18% (Intra-State)",
      steps: [
        "Item 1 total = 10 × ₹1,500 = ₹15,000; Item 2 total = ₹10,000",
        "Taxable Subtotal = ₹15,000 + ₹10,000 = ₹25,000",
        "CGST (9%) = ₹2,250 | SGST (9%) = ₹2,250 | Total Tax = ₹4,500",
        "Grand Invoice Total = ₹25,000 + ₹4,500 = ₹29,500"
      ],
      summary: "Taxable Subtotal = ₹25,000 | GST (18%) = ₹4,500 | Total Invoice Value = ₹29,500"
    },
    metricsText: "Invoices generated on Calciverse are created 100% client-side in browser memory; client confidential billing details and customer pricing never leave your device.",
    useCases: [
      "Freelance & Agency Billing: Issue instant, branded PDF invoices to clients upon milestone completions.",
      "GST Return Reconciliation: Generate standardized tax invoices matching GSTR-1 outward supply reporting criteria.",
      "Small Business Billing: Provide customers with formal itemized receipts including bank payment details and UPI QR codes."
    ],
    commonMistakes: [
      "Omitting mandatory HSN (Harmonized System of Nomenclature) or SAC service codes from invoice items.",
      "Failing to display sequential invoice numbering without duplicate prefixes across financial years.",
      "Applying IGST instead of CGST/SGST on sales to buyers located within the same home state."
    ],
    faqs: [
      { question: "What are the mandatory elements of a valid GST tax invoice?", answer: "Supplier name/address/GSTIN, consecutive invoice number, date of issue, recipient GSTIN, HSN/SAC code, description, taxable value, tax rate, and signature." },
      { question: "Is e-Invoicing mandatory for small businesses?", answer: "Under current GST rules, e-Invoicing on the government portal is mandatory for registered businesses with aggregate annual turnover exceeding ₹5 Crores." },
      { question: "Can I save or download my invoice as a PDF?", answer: "Yes, use the browser print dialog ('Print to PDF') to export high-resolution, vector-clean invoice documents." }
    ],
    sources: [{ name: "Central Board of Indirect Taxes and Customs (CBIC) Invoice Rules", url: "https://cbic.gov.in" }]
  },

  "profit-and-loss-calculator": {
    overview: "Constructs comprehensive income statements evaluating gross revenue, cost of goods sold, operating expenses, and net profit margins.",
    formula: "Gross Profit = Net Sales - COGS | Operating Profit = Gross Profit - OPEX | Net Income = Operating Profit - Taxes & Interest",
    explanation: "Summarizes revenues, costs, and expenses incurred during specified financial quarters or annual fiscal periods.",
    example: {
      title: "Worked Example: Small E-Commerce Store Monthly P&L Statement",
      inputs: "Gross Sales = ₹5,00,000 | COGS = ₹2,50,000 | Operating Expenses = ₹1,20,000 | Taxes = ₹26,000",
      steps: [
        "Gross Profit = ₹5,00,000 - ₹2,50,000 = ₹2,50,000 (50.0% Gross Margin)",
        "Operating Profit (EBIT) = ₹2,50,000 - ₹1,20,000 = ₹1,30,000 (26.0% Operating Margin)",
        "Net Profit after Taxes = ₹1,30,000 - ₹26,000 = ₹1,04,000 (20.8% Net Margin)"
      ],
      summary: "Revenue = ₹5,00,000 | Gross Profit = ₹2,50,000 | Net Income = ₹1,04,000 | Net Profit Margin = 20.8%"
    },
    metricsText: "Positive cash flow does not always mean positive net profit; tracking P&L reveals whether your operational unit economics are truly sustainable.",
    useCases: [
      "Fiscal Performance Auditing: Track monthly revenue vs expenditure trends to identify runaway operational costs.",
      "Investor Pitch Decks: Prepare standardized financial statements for venture capital and angel funding presentations.",
      "Bank Loan Documentation: Demonstrate healthy debt service coverage ratios (DSCR) for commercial business credit."
    ],
    commonMistakes: [
      "Mixing personal non-business expenses into commercial operating expense statements.",
      "Recognizing revenue prematurely before services are delivered or goods are accepted (violating accrual rules).",
      "Treating capital equipment purchases (CAPEX) as immediate operational expenses (OPEX) instead of depreciating them."
    ],
    faqs: [
      { question: "What is the difference between Gross Profit and Net Profit?", answer: "Gross Profit is revenue minus direct production costs (COGS); Net Profit is what remains after deducting all operating expenses, interest, and taxes." },
      { question: "What is Operating Expense (OPEX)?", answer: "Ongoing indirect costs required to run a business, including office rent, staff salaries, marketing, insurance, and utilities." },
      { question: "Why is P&L different from a Cash Flow Statement?", answer: "P&L records revenues and expenses when earned or incurred (accrual accounting); Cash Flow tracks actual physical cash entering and leaving bank accounts." }
    ],
    sources: [{ name: "Institute of Chartered Accountants of India (ICAI)", url: "https://www.icai.org" }]
  },

  "sales-tax-calculator": {
    overview: "Computes state, county, and municipal sales taxes and Value Added Tax (VAT) on retail merchandise purchases.",
    formula: "Sales Tax Amount = Net Price × (Tax Rate / 100) | Total Amount = Net Price + Sales Tax Amount",
    explanation: "Calculates combined composite state and local sales tax rates across US, European VAT, and international retail jurisdictions.",
    example: {
      title: "Worked Example: $250 Electronics Purchase with Combined 8.25% Sales Tax",
      inputs: "Net Retail Price = $250.00 | Combined Tax Rate = 8.25%",
      steps: [
        "Sales tax calculation = $250.00 × 0.0825 = $20.63",
        "Total customer checkout price = $250.00 + $20.63 = $270.63"
      ],
      summary: "Retail Price = $250.00 | Sales Tax (8.25%) = $20.63 | Total Due = $270.63"
    },
    metricsText: "In the United States, sales tax rates vary by zip code because state, county, and city municipal tax rates combine additively.",
    useCases: [
      "E-Commerce Checkout: Calculate accurate destination-based sales tax on out-of-state customer orders.",
      "Travel Budgeting: Anticipate final checkout costs for retail purchases in foreign destination cities.",
      "Business Expense Auditing: Reconcile sales tax receipts against accounts payable general ledgers."
    ],
    commonMistakes: [
      "Assuming sales tax applies universally to all items (many states exempt groceries, prescription drugs, and clothing).",
      "Confusing origin-based sales tax rules with destination-based sales tax sourcing rules.",
      "Failing to collect economic nexus sales tax after crossing state turnover thresholds."
    ],
    faqs: [
      { question: "What is the difference between Sales Tax and VAT?", answer: "Sales tax is collected once at the final point of retail sale to consumers; VAT (Value Added Tax) is collected at every stage of the supply chain on added value." },
      { question: "What is Economic Nexus in the United States?", answer: "A legal requirement that out-of-state remote sellers collect sales tax if their sales in that state exceed a threshold (typically $100,000 or 200 transactions)." },
      { question: "Are services subject to sales tax?", answer: "In most jurisdictions, tangible goods are taxable by default, whereas services are taxable only if specifically enumerated by state statute." }
    ],
    sources: [{ name: "Federation of Tax Administrators", url: "https://www.taxadmin.org" }]
  },

  "payroll-calculator": {
    overview: "Calculates employee take-home pay, employer payroll overhead, statutory provident fund (EPF), ESI, professional tax, and monthly TDS withholdings.",
    formula: "Net Take-Home = Gross Salary - (Employee EPF 12% + ESI 0.75% + PT + TDS Withholding)",
    explanation: "Total employer cost equals gross salary plus employer statutory contributions (EPF 3.67%, EPS 8.33%, EDLI 0.5%, ESI 3.25%).",
    example: {
      title: "Worked Example: Monthly Salary of ₹45,000 (Basic ₹25,000)",
      inputs: "Gross Salary = ₹45,000 | Basic Pay = ₹25,000 | Professional Tax = ₹200 | Monthly TDS = ₹1,500",
      steps: [
        "Employee EPF deduction (12% of basic) = 0.12 × ₹25,000 = ₹3,000",
        "Professional tax = ₹200 | Monthly TDS = ₹1,500",
        "Total employee deductions = ₹3,000 + ₹200 + ₹1,500 = ₹4,700",
        "Net take-home salary disbursed = ₹45,000 - ₹4,700 = ₹40,300"
      ],
      summary: "Gross Salary = ₹45,000 | Statutory Deductions = ₹4,700 | Net Disbursed = ₹40,300"
    },
    metricsText: "Total cost to the employer (CTC) is typically 15% to 20% higher than the employee's gross monthly pay slip.",
    useCases: [
      "Corporate Payroll Processing: Generate accurate monthly employee pay slips with statutory compliance.",
      "Hiring Cost Budgeting: Calculate the true annual cost of adding new full-time corporate staff members.",
      "Statutory Remittance: Determine monthly remittance sums due to the EPFO, ESIC, and state revenue departments."
    ],
    commonMistakes: [
      "Deducting EPF from full gross salary instead of statutory Basic Pay + Dearness Allowance.",
      "Missing monthly ESIC contribution cutoffs (ESIC applies to employees earning gross wages up to ₹21,000/month).",
      "Applying incorrect state-specific professional tax slab structures."
    ],
    faqs: [
      { question: "What is the wage ceiling for mandatory EPF coverage?", answer: "Employees with a basic salary up to ₹15,000 per month are mandatorily covered; those above can opt out at the start of employment if not previously enrolled." },
      { question: "What is the ESI contribution rate?", answer: "Employee contribution is 0.75% of gross wages; employer contribution is 3.25% of gross wages (for employees earning up to ₹21,000/mo)." },
      { question: "How is monthly TDS on salary calculated?", answer: "Annual taxable salary is estimated after allowable exemptions, annual tax is computed, and divided by 12 equal monthly instalments." }
    ],
    sources: [{ name: "Employees' State Insurance Corporation (ESIC)", url: "https://www.esic.gov.in" }]
  },

  "commission-calculator": {
    overview: "Calculates variable sales commissions, base salary retainers, tiered incentive structures, and effective commission payout percentages.",
    formula: "Commission = Total Sales Volume × Commission Rate % | Total Earnings = Base Salary + Commission",
    explanation: "Models flat commissions, tiered performance thresholds (accelerators), and sliding scale quota attainment models.",
    example: {
      title: "Worked Example: ₹8,00,000 Sales with Tiered Commission Structure",
      inputs: "Base Pay = ₹30,000 | Sales = ₹8,00,000 | Tier 1 (up to 5L) = 5% | Tier 2 (above 5L) = 8%",
      steps: [
        "Tier 1 commission (5% on ₹5,00,000) = ₹25,000",
        "Tier 2 commission (8% on remaining ₹3,00,000) = ₹24,00,0? No, ₹24,000",
        "Total sales commission earned = ₹25,000 + ₹24,000 = ₹49,000",
        "Total monthly payout = ₹30,000 base + ₹49,000 commission = ₹79,000"
      ],
      summary: "Sales Volume = ₹8,00,000 | Total Commission = ₹49,000 | Total Payout = ₹79,000 | Effective Rate = 6.13%"
    },
    metricsText: "Tiered accelerator commission structures motivate sales representatives to push past 100% quota attainment by rewarding higher incremental rates.",
    useCases: [
      "Sales Compensation Modeling: Design incentive plans that align sales rep rewards with corporate profit margins.",
      "Monthly Commission Reconciliation: Verify quarterly incentive bonus calculations against CRM sales closures.",
      "Real Estate Brokerage Split: Calculate broker-agent commission splits on property transactions."
    ],
    commonMistakes: [
      "Calculating commission on gross order values that include refunded products or cancelled client orders.",
      "Failing to define whether commission triggers on contract signing or upon customer invoice payment collection.",
      "Ignoring withholding income tax (TDS) on commercial agent commission payouts under Section 194H."
    ],
    faqs: [
      { question: "What is an accelerator in sales commission?", answer: "An increased commission rate (e.g. jumping from 5% to 10%) that kicks in once an account executive surpasses 100% of their sales quota." },
      { question: "What is a commission clawback?", answer: "A contractual clause where previously paid commissions are deducted back if a client cancels or defaults within a specified period (e.g. 90 days)." },
      { question: "Is sales commission subject to TDS in India?", answer: "Yes, under Section 194H, commission or brokerage payments exceeding ₹15,000 in a year are subject to 5% TDS." }
    ],
    sources: [{ name: "Sales Management Association", url: "https://salesmanagement.org" }]
  },

  "markup-vs-margin-calculator": {
    overview: "Converts seamlessly between markup percentage and gross profit margin percentage to ensure product pricing guarantees healthy profitability.",
    formula: "Margin = Markup / (1 + Markup) | Markup = Margin / (1 - Margin)",
    explanation: "Markup is profit as a percentage of cost. Margin is profit as a percentage of selling price. Margin is always lower than markup.",
    example: {
      title: "Worked Example: Converting 50% Markup to Profit Margin",
      inputs: "Cost Price = ₹1,000 | Markup = 50% (0.50)",
      steps: [
        "Selling Price = ₹1,000 × (1 + 0.50) = ₹1,500",
        "Dollar Profit = ₹1,500 - ₹1,000 = ₹500",
        "Profit Margin = (500 / 1,500) × 100 = 33.33%",
        "Formula verification: 0.50 / (1 + 0.50) = 0.50 / 1.50 = 33.33%"
      ],
      summary: "Cost = ₹1,000 | Markup = 50.0% | Selling Price = ₹1,500 | Profit Margin = 33.33%"
    },
    metricsText: "Confusing markup with margin is one of the most fatal financial errors in retail: aiming for a 20% margin by adding a 20% markup actually leaves you with only a 16.7% margin.",
    useCases: [
      "Retail Price Setting: Set retail prices with exact mathematical confidence to guarantee target gross margins.",
      "Contract Bidding: Convert target corporate gross margin requirements into contractor labor markups.",
      "Wholesale Negotiation: Evaluate buyer discount requests without accidentally eroding baseline profitability."
    ],
    commonMistakes: [
      "Adding a 25% markup and expecting a 25% profit margin (a 25% markup produces only a 20% profit margin).",
      "Granting customer discounts equal to your markup, which results in selling goods below cost.",
      "Failing to standardize financial terminology across sales teams and accounting departments."
    ],
    faqs: [
      { question: "Why is margin always smaller than markup?", answer: "Because margin divides profit by selling price (a larger number), while markup divides profit by cost (a smaller number)." },
      { question: "What markup is required to achieve a 20% margin?", answer: "Markup = 0.20 / (1 - 0.20) = 0.20 / 0.80 = 25% markup." },
      { question: "What markup is required to achieve a 50% margin?", answer: "Markup = 0.50 / (1 - 0.50) = 0.50 / 0.50 = 100% markup (keystone pricing)." }
    ],
    sources: [{ name: "Corporate Finance Institute", url: "https://corporatefinanceinstitute.com" }]
  },

  "freelance-tax-hourly-rate-calculator": {
    overview: "Calculates the true net hourly wage of freelancers and independent consultants after deducting non-billable hours, software expenses, income tax, and GST.",
    formula: "Net Hourly Rate = (Gross Annual Billings - Business Expenses - Taxes) / Total Working Hours (Billable + Non-Billable)",
    explanation: "Reveals what you actually earn per hour worked, accounting for unpaid proposals, administration, marketing, and self-employment taxes.",
    example: {
      title: "Worked Example: Freelancer Charging ₹2,000/hr ($24/hr) with 1,000 Billable Hours",
      inputs: "Billable Rate = ₹2,000/hr | Billable Hours = 1,000 | Non-Billable Admin Hours = 500 | Expenses = ₹2,00,000 | Tax = ₹1,80,000",
      steps: [
        "Gross billing revenue = 1,000 × ₹2,000 = ₹20,00,000",
        "Net take-home after expenses & taxes = ₹20,00,000 - ₹2,00,000 - ₹1,80,000 = ₹16,20,000",
        "Total hours worked = 1,000 billable + 500 non-billable = 1,500 total hours",
        "True Net Hourly Rate = ₹16,20,000 / 1,500 hours = ₹1,080 per hour"
      ],
      summary: "Stated Rate = ₹2,000/hr | Gross = ₹20 Lakhs | True Net Take-Home Rate = ₹1,080/hr"
    },
    metricsText: "Nearly 35% of a full-time freelancer's working hours are non-billable; your quoted rate must cover these unpaid operational hours.",
    useCases: [
      "Full-Time Job vs Freelancing: Accurately compare corporate salary offers with independent consulting contracts.",
      "Rate Revision Planning: Identify when to raise client rates to offset inflation and rising SaaS software subscriptions.",
      "Tax Reserve Setting: Automatically calculate what percentage of every client payment must be reserved for advance taxes."
    ],
    commonMistakes: [
      "Assuming a ₹2,000 hourly rate means you earn ₹2,000 for every hour you sit at your desk.",
      "Failing to budget for unpaid sick days, vacations, client late payments, and dry pipeline periods.",
      "Neglecting advance quarterly income tax payments, incurring Section 234B interest penalties."
    ],
    faqs: [
      { question: "What is Presumptive Taxation (Section 44ADA) for Indian freelancers?", answer: "Eligible professionals with gross receipts up to ₹75 Lakhs can declare 50% of revenue as taxable profit, reducing accounting compliance burdens." },
      { question: "What percentage of freelance income should be saved for taxes?", answer: "Most freelancers should reserve 20% to 30% of every invoice payment in a dedicated tax savings account." },
      { question: "How can I increase my true net hourly rate?", answer: "Automate administrative invoicing, package services into fixed retainers, and raise rates on low-margin clients." }
    ],
    sources: [{ name: "Income Tax Department of India (Section 44ADA)", url: "https://www.incometax.gov.in" }]
  },

  "cogs-calculator": {
    overview: "Calculates Cost of Goods Sold (COGS) from beginning inventory, direct raw material purchases, factory labor, and ending inventory balances.",
    formula: "COGS = Beginning Inventory + Net Purchases + Direct Labor & Manufacturing - Ending Inventory",
    explanation: "Represents the direct costs attributable to the production of goods sold in a company during an accounting period.",
    example: {
      title: "Worked Example: Manufacturing Business Annual COGS Evaluation",
      inputs: "Starting Inventory = ₹4,00,000 | Purchases = ₹12,00,000 | Direct Labor = ₹3,00,000 | Ending Inventory = ₹5,00,000",
      steps: [
        "Cost of goods available for sale = ₹4,00,000 + ₹12,00,000 + ₹3,00,000 = ₹19,00,000",
        "Subtract closing physical inventory = ₹19,00,000 - ₹5,00,000 = ₹14,00,000"
      ],
      summary: "Beginning Inventory = ₹4.0 Lakhs | Purchases = ₹12.0 Lakhs | Ending = ₹5.0 Lakhs | COGS = ₹14.0 Lakhs"
    },
    metricsText: "COGS includes only direct costs required to create a product; indirect costs like corporate office rent, marketing, and sales travel are excluded.",
    useCases: [
      "Gross Profit Calculation: Subtract COGS from gross revenue to determine production profitability.",
      "Inventory Valuation Audit: Reconcile physical warehouse stock counts with balance sheet accounting records.",
      "Tax Return Preparation: Report accurate cost of goods sold on corporate income tax return schedules."
    ],
    commonMistakes: [
      "Including general indirect selling and administrative overhead (SG&A) in COGS.",
      "Misvaluing ending inventory (using outdated prices instead of FIFO, LIFO, or weighted average cost).",
      "Failing to write down damaged, obsolete, or expired physical inventory."
    ],
    faqs: [
      { question: "What costs are included in COGS?", answer: "Raw materials, factory worker direct labor, inbound freight shipping, packaging, and manufacturing plant electricity." },
      { question: "What costs are excluded from COGS?", answer: "Office salaries, executive compensation, advertising, legal fees, accounting, and sales commissions." },
      { question: "How does ending inventory affect net profit?", answer: "A higher ending inventory reduces COGS, which increases reported gross profit for that financial period." }
    ],
    sources: [{ name: "Financial Accounting Standards Board (FASB)", url: "https://www.fasb.org" }]
  }
};

