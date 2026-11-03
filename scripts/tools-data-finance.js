// 40 Bespoke Finance Tool Guides
export const financeToolGuides = {
  "emi-calculator": {
    overview: "Computes the equated monthly instalment required to amortise a home, car, or personal loan under reducing-balance interest rates.",
    formula: "E = P × r × (1 + r)^n / ((1 + r)^n - 1)",
    explanation: "P = Principal loan amount, r = Monthly interest rate (Annual rate / 12 / 100), n = Total tenure in months.",
    example: {
      title: "Worked Example: ₹10 Lakh Home Loan at 8.5% for 15 Years",
      inputs: "Principal = ₹10,00,000 | Interest Rate = 8.5% p.a. | Tenure = 180 Months",
      steps: [
        "Monthly interest rate r = 8.5 / 12 / 100 = 0.0070833",
        "Compounding factor (1.0070833)^180 = 3.5598",
        "Monthly EMI E = ₹9,847 per month"
      ],
      summary: "Monthly EMI = ₹9,847 | Total Interest = ₹7,72,540 | Total Repayment = ₹17,72,540"
    },
    metricsText: "In the first 3 years of a 15-year loan, over 65% of your monthly payment goes toward interest rather than principal reduction.",
    useCases: [
      "Home Loan Planning: Compare monthly outgo across 15, 20, and 30-year loan tenures.",
      "Auto Financing: Verify dealership loan quotes against true reducing-balance calculations.",
      "Refinancing: Determine if balance transfer savings offset processing and valuation fees."
    ],
    commonMistakes: [
      "Confusing flat interest rates with reducing-balance interest rates.",
      "Ignoring mandatory upfront loan processing fees and property valuation costs.",
      "Failing to account for interest rate reset cycles on floating-rate loans."
    ],
    faqs: [
      { question: "How does prepaying home loan principal affect EMI?", answer: "Prepaying principal cuts your outstanding balance directly. You can choose to reduce your monthly EMI amount or keep the EMI constant to shorten your overall tenure." },
      { question: "What is the difference between fixed and floating loan rates?", answer: "Fixed rates stay constant throughout the tenure, whereas floating rates fluctuate according to the lender's benchmark repo rate (RBLR)." },
      { question: "Are processing fees included in the monthly EMI?", answer: "No. Administrative fees and GST are paid upfront at the time of loan sanction." }
    ],
    sources: [{ name: "Reserve Bank of India (RBI) Lending Guidelines", url: "https://www.rbi.org.in" }]
  },

  "sip-calculator": {
    overview: "Projects the future maturity corpus of recurring monthly mutual fund investments using compound interest and rupee-cost averaging.",
    formula: "M = P × [((1 + i)^n - 1) / i] × (1 + i)",
    explanation: "M = Final maturity corpus, P = Monthly instalment, i = Periodic monthly return rate (Annual return / 12 / 100), n = Total months.",
    example: {
      title: "Worked Example: ₹5,000 Monthly SIP for 10 Years at 12%",
      inputs: "Monthly SIP = ₹5,000 | Expected Return = 12% p.a. | Tenure = 10 Years (120 Months)",
      steps: [
        "Monthly periodic return i = 12 / 12 / 100 = 0.01",
        "Growth multiplier = ((1.01)^120 - 1) / 0.01 × 1.01 = 232.339",
        "Maturity value = ₹5,000 × 232.339 = ₹11,61,695"
      ],
      summary: "Invested Capital = ₹6,00,000 | Wealth Gained = ₹5,61,695 | Expected Maturity = ₹11,61,695"
    },
    metricsText: "Compounding returns accelerate dramatically after year 7; doubling investment tenure from 10 to 20 years quadruples total returns.",
    useCases: [
      "Retirement Nest Egg: Calculate monthly equity contributions required to build a retirement corpus.",
      "Higher Education Fund: Project maturity capital for children's future university tuition fees.",
      "Wealth Building: Harness rupee-cost averaging to eliminate the need for market timing."
    ],
    commonMistakes: [
      "Assuming mutual fund returns are guaranteed rather than market-linked.",
      "Pausing or stopping monthly SIP instalments during temporary market corrections.",
      "Forgetting to adjust projected maturity values for long-term inflation and LTCG tax."
    ],
    faqs: [
      { question: "What is rupee-cost averaging in SIP?", answer: "When equity NAVs fall, your fixed monthly instalment automatically buys more units; when NAVs rise, fewer units are purchased, lowering average acquisition cost." },
      { question: "Can I increase my SIP amount as my income grows?", answer: "Yes, using a Step-Up SIP option, you can automatically boost contributions by 5% to 10% each year." },
      { question: "Is SIP tax-free in India?", answer: "Equity mutual fund gains above ₹1.25 Lakh per financial year are subject to 12.5% Long-Term Capital Gains (LTCG) tax." }
    ],
    sources: [{ name: "Association of Mutual Funds in India (AMFI)", url: "https://www.amfiindia.com" }]
  },

  "gst-calculator": {
    overview: "Calculates Goods and Services Tax additions and reverse-extracts net base amounts from tax-inclusive retail invoices across standard statutory tax slabs.",
    formula: "GST Amount = Net Price × (Rate / 100) | Net Base = Gross Amount × 100 / (100 + Rate)",
    explanation: "Exclusive mode adds tax onto net price. Inclusive mode extracts embedded GST component from MRP.",
    example: {
      title: "Worked Example: Extracting 18% GST from ₹11,800 Invoice",
      inputs: "Gross Amount = ₹11,800 | GST Rate = 18% (Inclusive)",
      steps: [
        "Net base price = 11,800 × 100 / (100 + 18) = ₹10,000",
        "Total GST component = ₹11,800 - ₹10,000 = ₹1,800",
        "CGST (9%) = ₹900 | SGST (9%) = ₹900"
      ],
      summary: "Base Price = ₹10,000 | Total GST = ₹1,800 | Gross Total = ₹11,800"
    },
    metricsText: "Directly subtracting 18% from a gross price of ₹11,800 gives ₹2,124, which overstates tax liability by ₹324.",
    useCases: [
      "B2B Billing: Generate accurate tax breakdowns between CGST, SGST, and IGST for invoices.",
      "Input Tax Credit (ITC): Reconcile input tax paid on supplier purchases for GST filings.",
      "Retail Pricing: Determine wholesale product pricing before adding consumer GST slabs."
    ],
    commonMistakes: [
      "Applying percentage subtraction directly to MRP instead of the reverse GST formula.",
      "Billing intra-state supplies as IGST instead of splitting into CGST and SGST.",
      "Applying outdated slab rates following GST Council rate rationalization."
    ],
    faqs: [
      { question: "When do I charge IGST versus CGST and SGST?", answer: "Charge IGST on inter-state sales and imports; split into equal CGST and SGST for sales within the same state." },
      { question: "What are the primary GST slabs in India?", answer: "Standard goods and services fall under 0%, 5%, 12%, 18%, and 28% slabs, with special 3% rates on gold." },
      { question: "What is Input Tax Credit (ITC)?", answer: "ITC lets businesses offset GST paid on purchase inputs against the GST collected on sales, preventing cascading taxes." }
    ],
    sources: [{ name: "Goods and Services Tax Network (GSTN)", url: "https://www.gst.gov.in" }]
  },

  "fd-calculator": {
    overview: "Calculates the maturity corpus and interest income on bank fixed deposits across quarterly, monthly, and cumulative compounding intervals.",
    formula: "A = P × (1 + r/n)^(n×t)",
    explanation: "A = Maturity amount, P = Principal deposit, r = Annual interest rate (decimal), n = Compounding frequency per year (4 for quarterly), t = Tenure in years.",
    example: {
      title: "Worked Example: ₹2,00,000 FD for 3 Years at 7.25% Quarterly Compounding",
      inputs: "Principal = ₹2,00,000 | Rate = 7.25% p.a. | Tenure = 3 Years (Quarterly Compounding)",
      steps: [
        "Periodic rate = 0.0725 / 4 = 0.018125",
        "Compounding cycles = 4 × 3 = 12 quarters",
        "Maturity A = ₹2,00,000 × (1.018125)^12 = ₹2,47,764"
      ],
      summary: "Principal = ₹2,00,000 | Total Interest = ₹47,764 | Maturity Value = ₹2,47,764"
    },
    metricsText: "Indian commercial banks compound FD interest quarterly; this produces a higher annualised effective yield than simple annual compounding.",
    useCases: [
      "Capital Preservation: Secure guaranteed fixed returns for emergency fund reserves.",
      "Senior Citizen Income: Calculate enhanced interest yields (typically 0.50% higher) for retirees.",
      "Tax Planning: Estimate annual TDS deduction thresholds on accrued bank interest."
    ],
    commonMistakes: [
      "Assuming FD interest is compounded monthly rather than quarterly in standard Indian banks.",
      "Forgetting that FD interest is fully taxable under your slab rate, requiring TDS if interest exceeds ₹40,000.",
      "Ignoring early withdrawal penalty fees (typically 0.5% to 1% reduction in interest rate)."
    ],
    faqs: [
      { question: "Is FD interest taxed every year or at maturity?", answer: "Interest is taxed on an accrual basis each financial year, and banks deduct 10% TDS if interest exceeds threshold limits." },
      { question: "What is Form 15G / 15H?", answer: "Forms submitted by individuals to avoid TDS deduction if their total annual taxable income is below the exemption limit." },
      { question: "Can I take a loan against my Fixed Deposit?", answer: "Yes, banks usually offer overdraft loans up to 90% of your FD value at 1% to 2% above the FD interest rate." }
    ],
    sources: [{ name: "Reserve Bank of India Master Direction on Deposits", url: "https://www.rbi.org.in" }]
  },

  "loan-calculator": {
    overview: "Evaluates comprehensive loan payment schedules, total interest costs, and payoff timelines across personal, education, and auto credit.",
    formula: "Total Repayment = EMI × Total Months | Total Interest = Total Repayment - Principal",
    explanation: "Computes periodic amortisation and cumulative interest paid over the life of credit agreements.",
    example: {
      title: "Worked Example: ₹5 Lakh Personal Loan at 11% for 4 Years",
      inputs: "Principal = ₹5,00,000 | Interest Rate = 11% p.a. | Tenure = 48 Months",
      steps: [
        "Monthly EMI computed via reducing balance = ₹12,933 per month",
        "Total repayment = ₹12,933 × 48 = ₹6,20,784",
        "Total interest cost = ₹6,20,784 - ₹5,00,000 = ₹1,20,784"
      ],
      summary: "Monthly EMI = ₹12,933 | Total Interest = ₹1,20,784 | Total Outflow = ₹6,20,784"
    },
    metricsText: "Extending loan tenure lowers monthly payments but significantly increases cumulative interest paid to the lender.",
    useCases: [
      "Personal Loan Comparison: Compare offers from different banks to find the lowest effective borrowing cost.",
      "Tenure Optimization: Find the sweet spot between affordable monthly instalments and minimum lifetime interest.",
      "Debt Consolidation: Evaluate if merging multiple small loans into a single low-interest credit line saves money."
    ],
    commonMistakes: [
      "Focusing only on monthly EMI size rather than total interest repaid over time.",
      "Overlooking foreclosure and part-payment penalty clauses in fixed-rate personal loans.",
      "Not factoring in loan insurance premiums bundled into sanctioned loan amounts."
    ],
    faqs: [
      { question: "What is the difference between secured and unsecured loans?", answer: "Secured loans (home, car) require collateral and carry lower rates; unsecured loans (personal, credit card) require no collateral and have higher rates." },
      { question: "Can I close a personal loan before tenure?", answer: "Yes, though lenders may charge a prepayment foreclosure fee (0% to 5%) depending on loan terms and RBI rules." },
      { question: "What is an amortization schedule?", answer: "A monthly table showing how each instalment is divided between principal reduction and interest charges." }
    ],
    sources: [{ name: "Indian Banks Association (IBA)", url: "https://www.iba.org.in" }]
  },

  "income-tax-calculator": {
    overview: "Estimates annual tax liability and compares tax deductions under both the New Tax Regime (Section 115BAC) and Old Tax Regime for FY 2026-27.",
    formula: "Tax Payable = Slab Rates(Taxable Income) - Section 87A Rebate + 4% Cess",
    explanation: "Taxable income equals gross CTC minus permissible deductions (80C, 80D, HRA, Standard Deduction ₹75,000).",
    example: {
      title: "Worked Example: ₹12 Lakh Gross Salary under New Tax Regime",
      inputs: "Gross CTC = ₹12,00,000 | Standard Deduction = ₹75,000",
      steps: [
        "Taxable salary = ₹12,00,000 - ₹75,00,000 = ₹11,25,000",
        "Tax on ₹3L–₹7L (5%) = ₹20,000; ₹7L–₹10L (10%) = ₹30,000; ₹10L–₹11.25L (15%) = ₹18,750",
        "Base tax = ₹68,750 + 4% Cess (₹2,750) = ₹71,500"
      ],
      summary: "Net Tax Payable under New Regime = ₹71,500 | Effective Tax Rate = 5.96%"
    },
    metricsText: "Under the New Tax Regime, taxable incomes up to ₹7.75 Lakhs for salaried individuals pay zero tax thanks to the ₹75,000 standard deduction and Section 87A rebate.",
    useCases: [
      "Annual Tax Planning: Decide whether to opt for the Old or New Tax Regime before declaration deadlines.",
      "Salary Structuring: Evaluate tax savings from employer NPS contributions under Section 80CCD(2).",
      "Advance Tax: Estimate quarterly advance tax instalments to prevent Section 234B/234C interest penalties."
    ],
    commonMistakes: [
      "Assuming Section 80C and 80D deductions can be claimed under the New Tax Regime.",
      "Overlooking the ₹75,000 standard deduction increase for salaried individuals.",
      "Forgetting to include 4% Health and Education Cess on base tax calculations."
    ],
    faqs: [
      { question: "Can salaried employees switch regimes every year?", answer: "Yes, salaried individuals can choose between Old and New regimes annually when filing their ITR." },
      { question: "What is the deduction threshold where Old Regime beats New Regime?", answer: "For incomes around ₹15 Lakhs, total eligible deductions must exceed roughly ₹3.75 Lakhs to beat the New Regime." },
      { question: "Is employer NPS tax-deductible in the New Regime?", answer: "Yes, employer contributions up to 14% of basic pay under Section 80CCD(2) are deductible in both regimes." }
    ],
    sources: [{ name: "Income Tax Department of India", url: "https://www.incometax.gov.in" }]
  },

  "simple-interest-calculator": {
    overview: "Computes flat-rate non-compounding interest on principal loans, bonds, short-term promissory notes, and informal credit.",
    formula: "SI = (P × R × T) / 100 | Maturity = P + SI",
    explanation: "P = Principal sum, R = Annual interest rate %, T = Time period in years.",
    example: {
      title: "Worked Example: ₹50,000 at 8% Simple Interest for 3 Years",
      inputs: "Principal = ₹50,000 | Rate = 8% p.a. | Time = 3 Years",
      steps: [
        "Interest calculation = (50,000 × 8 × 3) / 100",
        "Total interest earned = ₹12,000",
        "Total maturity sum = ₹50,000 + ₹12,000 = ₹62,000"
      ],
      summary: "Principal = ₹50,000 | Simple Interest = ₹12,000 | Maturity Amount = ₹62,000"
    },
    metricsText: "Unlike compound interest, simple interest generates an identical fixed amount of interest every single year.",
    useCases: [
      "Informal Borrowing: Calculate flat interest between family, friends, or private lending agreements.",
      "Government Bonds: Compute coupon payouts on fixed-rate treasury securities.",
      "Late Payment Penalties: Assess statutory interest charges on delayed commercial invoices."
    ],
    commonMistakes: [
      "Applying simple interest formulas to bank savings or fixed deposits that actually compound.",
      "Entering time duration in months without dividing by 12.",
      "Failing to convert daily interest rates into annual percentages."
    ],
    faqs: [
      { question: "Where is simple interest still used in modern banking?", answer: "It is used for short-term treasury bills, certain government savings schemes, and penalty interest on overdue payments." },
      { question: "Why does simple interest produce lower returns than compound interest?", answer: "Because earned interest does not get reinvested to earn additional interest in subsequent periods." },
      { question: "How do I calculate simple interest for 6 months?", answer: "Input time T as 0.5 years (6 / 12) in the formula." }
    ],
    sources: [{ name: "National Institute of Securities Markets (NISM)", url: "https://www.nism.ac.in" }]
  },

  "compound-interest-calculator": {
    overview: "Models exponential wealth growth where accumulated interest earns interest across annual, semi-annual, quarterly, or monthly compounding cycles.",
    formula: "A = P × (1 + r/n)^(n×t) | CI = A - P",
    explanation: "P = Principal investment, r = Annual interest rate (decimal), n = Compounding frequency per year, t = Duration in years.",
    example: {
      title: "Worked Example: ₹1,00,000 at 10% Compounded Annually for 10 Years",
      inputs: "Principal = ₹1,00,000 | Rate = 10% p.a. | Tenure = 10 Years (Compounded Annually)",
      steps: [
        "Compounding factor = (1 + 0.10)^10 = (1.10)^10 = 2.5937",
        "Total maturity corpus A = ₹1,00,000 × 2.5937 = ₹2,59,374",
        "Compound interest generated = ₹2,59,374 - ₹1,00,000 = ₹1,59,374"
      ],
      summary: "Invested = ₹1,00,000 | Total Growth = ₹1,59,374 | Final Corpus = ₹2,59,374"
    },
    metricsText: "Compounding frequency directly boosts yield: ₹1 Lakh at 10% compounded daily grows to ₹2,71,791 compared to ₹2,59,374 annually.",
    useCases: [
      "Long-Term Wealth Projections: See how savings accounts, PPF, and reinvestment bonds grow over 10-30 years.",
      "Inflation Erosion Analysis: Calculate how purchasing power diminishes over time due to compounding inflation.",
      "Rule of 72 Planning: Estimate how many years it takes to double your initial capital (72 / rate)."
    ],
    commonMistakes: [
      "Confusing nominal quoted rate with effective annual yield (APY).",
      "Assuming compounding cycles are always yearly when many investments compound quarterly.",
      "Underestimating the compounding impact of regular annual fees or fund expense ratios."
    ],
    faqs: [
      { question: "What is the Rule of 72?", answer: "A quick mental rule to estimate doubling time: divide 72 by the annual return rate (e.g. 72 / 12% = 6 years to double)." },
      { question: "Does more frequent compounding always give higher returns?", answer: "Yes, monthly or daily compounding produces slightly higher effective returns than annual compounding at the same rate." },
      { question: "What is continuous compounding?", answer: "The theoretical limit where interest compounds infinitely often, calculated using Euler's number: A = P × e^(rt)." }
    ],
    sources: [{ name: "Financial Industry Regulatory Authority (FINRA)", url: "https://www.finra.org" }]
  },

  "rd-calculator": {
    overview: "Projects the final maturity payout of monthly recurring deposits in banks and post offices under quarterly compounding rules.",
    formula: "M = P × n + P × n × (n + 1) / (2 × 12) × (r / 100)",
    explanation: "P = Monthly instalment, n = Total months, r = Annual interest rate %.",
    example: {
      title: "Worked Example: ₹5,000 Monthly RD for 3 Years at 7% p.a.",
      inputs: "Monthly Deposit = ₹5,00,000? No, ₹5,000 | Rate = 7% p.a. | Tenure = 36 Months",
      steps: [
        "Total capital deposited = ₹5,000 × 36 = ₹1,80,000",
        "Quarterly compounding interest evaluation across instalments",
        "Maturity value = ₹2,01,148"
      ],
      summary: "Total Deposited = ₹1,80,000 | Interest Earned = ₹21,148 | Maturity Value = ₹2,01,148"
    },
    metricsText: "Because earlier instalments compound for longer than later instalments, total interest on an RD is lower than placing the full lump sum upfront.",
    useCases: [
      "Disciplined Savings: Build fixed capital from monthly salary without taking equity market risks.",
      "Short-Term Goals: Save for annual insurance premiums, property taxes, or vacation travel expenses.",
      "Post Office RD: Evaluate government small savings RD schemes with guaranteed sovereign security."
    ],
    commonMistakes: [
      "Expecting total interest equal to an FD of the same cumulative deposited amount.",
      "Missing monthly payment due dates, which triggers bank late penalty fees.",
      "Failing to report accrued RD interest in annual income tax returns."
    ],
    faqs: [
      { question: "Is RD interest taxable in India?", answer: "Yes, RD interest is taxable under 'Income from Other Sources' at your applicable slab rate." },
      { question: "What happens if I miss an RD instalment?", answer: "Banks charge a nominal penalty fee (usually ₹1 to ₹2 per ₹100 of instalment) for late payments." },
      { question: "Can I withdraw an RD prematurely?", answer: "Yes, but banks deduct a premature penalty (typically 1% reduction in the applicable interest rate)." }
    ],
    sources: [{ name: "India Post Small Savings Schemes", url: "https://www.indiapost.gov.in" }]
  },

  "ppf-calculator": {
    overview: "Calculates the tax-free maturity corpus of Public Provident Fund (PPF) accounts over the statutory 15-year lock-in period at current government rates.",
    formula: "F = P × [({(1 + i)^n} - 1) / i] × (1 + i)",
    explanation: "P = Annual investment (up to ₹1.5 Lakhs), i = Annual PPF interest rate (currently 7.1%), n = Tenure in years (15 years minimum).",
    example: {
      title: "Worked Example: Max ₹1.5 Lakh Annual PPF for 15 Years at 7.1%",
      inputs: "Annual Deposit = ₹1,50,000 | Interest Rate = 7.1% p.a. | Tenure = 15 Years",
      steps: [
        "Total invested capital = ₹1,50,000 × 15 = ₹22,50,000",
        "Annual compounding interest accrual over 15 years",
        "Final maturity corpus = ₹40,68,209"
      ],
      summary: "Total Invested = ₹22,50,000 | Tax-Free Interest = ₹18,18,209 | Final Corpus = ₹40,68,209"
    },
    metricsText: "PPF enjoys sovereign EEE (Exempt-Exempt-Exempt) tax status: investment, accrued interest, and maturity withdrawal are 100% tax-free.",
    useCases: [
      "Retirement Foundation: Build risk-free, sovereign-backed retirement wealth with zero tax liability.",
      "Section 80C Deductions: Maximize the annual ₹1.5 Lakh tax exemption under the Old Tax Regime.",
      "Tenure Extension: Extend PPF in 5-year blocks after 15 years with or without fresh contributions."
    ],
    commonMistakes: [
      "Depositing after the 5th of the month, missing that month's interest credit.",
      "Depositing more than ₹1.5 Lakh in a financial year (excess amount earns 0% interest).",
      "Closing the account before 15 years without qualifying under premature closure rules."
    ],
    faqs: [
      { question: "When should I deposit money in my PPF account each month?", answer: "Deposit between the 1st and 5th of the month, as interest is computed on the minimum balance between the 5th and month-end." },
      { question: "Can I extend my PPF account after 15 years?", answer: "Yes, you can extend in 5-year blocks indefinitely, either with fresh contributions or without." },
      { question: "Can I take a loan against my PPF balance?", answer: "Yes, loans are available from the 3rd to 6th financial year at 1% interest above the PPF interest rate." }
    ],
    sources: [{ name: "National Savings Institute (Ministry of Finance)", url: "https://www.nsiindia.gov.in" }]
  },

  "nps-calculator": {
    overview: "Estimates retirement pension wealth and monthly annuity payouts accumulated through Tier-1 National Pension System contributions.",
    formula: "Corpus = P × [((1 + r)^n - 1) / r] × (1 + r) | Annuity = 40% of Corpus × Annuity_Rate",
    explanation: "P = Monthly contribution, r = Expected blended annual return (equity + debt), n = Months until age 60.",
    example: {
      title: "Worked Example: ₹10,000 Monthly NPS for 25 Years at 10% Return",
      inputs: "Monthly Deposit = ₹10,000 | Expected Return = 10% p.a. | Tenure = 25 Years (300 Months)",
      steps: [
        "Total principal invested = ₹10,000 × 300 = ₹30,00,000",
        "Accumulated retirement corpus at age 60 = ₹1,33,78,903",
        "Lump-sum tax-free withdrawal (60%) = ₹80,27,342 | Annuity purchase (40%) = ₹53,51,561"
      ],
      summary: "Total Corpus = ₹1.34 Crores | Lump-Sum Payout = ₹80.27 Lakhs | Monthly Pension (at 6% annuity) = ₹26,758"
    },
    metricsText: "Under Section 80CCD(1B), investing in NPS provides an exclusive additional ₹50,000 income tax deduction over and above Section 80C limits.",
    useCases: [
      "Pillar Retirement Planning: Create a guaranteed lifelong monthly pension post-retirement.",
      "Corporate NPS Optimization: Utilize employer contributions up to 14% of basic pay under Section 80CCD(2).",
      "Asset Allocation Rebalancing: Combine equity schemes (Scheme E) with corporate and government bonds (Scheme C & G)."
    ],
    commonMistakes: [
      "Assuming the entire 100% NPS corpus can be withdrawn as cash at retirement without annuity mandate.",
      "Choosing ultra-conservative debt funds early in career when equity allocation offers superior growth.",
      "Ignoring that annuity pension payouts are taxable under standard income tax slab rates."
    ],
    faqs: [
      { question: "Is the 60% NPS withdrawal taxable?", answer: "No, the 60% lump-sum withdrawal at age 60 is 100% tax-exempt under Section 10(12A)." },
      { question: "What is the minimum annuity purchase required in NPS?", answer: "At least 40% of the accumulated corpus must be utilized to purchase a registered annuity from an insurance provider." },
      { question: "Can I exit NPS before age 60?", answer: "Premature exit is permitted after 5 years, but 80% of the corpus must be directed into an annuity." }
    ],
    sources: [{ name: "Pension Fund Regulatory and Development Authority (PFRDA)", url: "https://www.pfrda.org.in" }]
  },

  "epf-calculator": {
    overview: "Projects accumulated Employee Provident Fund savings from mandatory employee and employer monthly salary deductions with annual EPFO interest.",
    formula: "Total EPF = Monthly Contributions (Employee 12% + Employer 3.67%) + Annual Compounded Interest (8.25%)",
    explanation: "Employee contributes 12% of Basic + DA; Employer matches with 3.67% to EPF and 8.33% to EPS pension.",
    example: {
      title: "Worked Example: ₹50,000 Basic Salary with 8.25% Interest for 20 Years",
      inputs: "Basic Pay = ₹50,000 | EPF Interest = 8.25% p.a. | Annual Salary Hike = 5% | Tenure = 20 Years",
      steps: [
        "Employee contribution = 12% of ₹50,000 = ₹6,000/month",
        "Employer EPF contribution = 3.67% of ₹50,000 = ₹1,835/month",
        "Total monthly deposit = ₹7,835 compounded annually at 8.25% with 5% annual wage increases"
      ],
      summary: "Total Contribution = ₹31.1 Lakhs | Total Interest = ₹48.9 Lakhs | Final EPF Corpus = ₹80.0 Lakhs"
    },
    metricsText: "EPFO interest is calculated on monthly running balances but credited to member accounts at the close of the financial year.",
    useCases: [
      "Salaried Wealth Projection: Track the growth of your mandatory retirement corpus across job switches.",
      "Voluntary PF (VPF) Decisions: Assess whether contributing beyond 12% via VPF out-yields bank deposits.",
      "Home Loan Prepayment Funding: Determine eligible non-refundable EPF advances for home purchase."
    ],
    commonMistakes: [
      "Assuming employer's full 12% contribution goes to EPF (in reality, 8.33% is diverted to EPS pension).",
      "Withdrawing EPF before completing 5 continuous years of service, which triggers tax deductions.",
      "Failing to transfer existing Universal Account Number (UAN) balances when switching employers."
    ],
    faqs: [
      { question: "Is EPF interest taxable above ₹2.5 Lakhs contribution?", answer: "Yes, interest earned on employee contributions exceeding ₹2.5 Lakh in a financial year is taxable." },
      { question: "When can I withdraw my full EPF amount?", answer: "Full withdrawal is permitted after retirement (age 58) or upon remaining unemployed for 2 consecutive months." },
      { question: "What is the current EPFO interest rate?", answer: "The central government declared an 8.25% interest rate for employee provident fund accounts." }
    ],
    sources: [{ name: "Employees' Provident Fund Organisation (EPFO)", url: "https://www.epfindia.gov.in" }]
  },

  "lumpsum-calculator": {
    overview: "Calculates the future compound value of a single one-time investment in mutual funds, stocks, or gold over long holding horizons.",
    formula: "FV = PV × (1 + r)^n",
    explanation: "FV = Future Value, PV = Present Value (initial one-time investment), r = Expected annual rate of return, n = Investment tenure in years.",
    example: {
      title: "Worked Example: ₹2,00,000 Lumpsum at 12% for 15 Years",
      inputs: "One-Time Investment = ₹2,00,000 | Expected Return = 12% p.a. | Duration = 15 Years",
      steps: [
        "Growth factor = (1 + 0.12)^15 = (1.12)^15 = 5.4735",
        "Future Value = ₹2,00,000 × 5.4735 = ₹10,94,713",
        "Total wealth generated = ₹10,94,713 - ₹2,00,000 = ₹8,94,713"
      ],
      summary: "Invested = ₹2,00,000 | Capital Gains = ₹8,94,713 | Final Value = ₹10,94,713"
    },
    metricsText: "A one-time lumpsum investment of ₹2 Lakhs at 12% more than quintuples over 15 years through the power of uninterrupted compounding.",
    useCases: [
      "Windfall Deployment: Calculate projected growth from annual corporate bonuses, property sales, or inheritance.",
      "Target Corpus Planning: Determine the exact lump-sum needed today to achieve a future financial milestone.",
      "Asset Class Comparison: Compare projected outcomes between equity funds, debt instruments, and real estate."
    ],
    commonMistakes: [
      "Trying to time market bottoms with a lumpsum instead of using a Systematic Transfer Plan (STP).",
      "Panicking and withdrawing capital during standard cyclical market downturns.",
      "Ignoring the impact of capital gains taxes (LTCG) upon redemption."
    ],
    faqs: [
      { question: "Is lumpsum investing better than SIP?", answer: "In consistently rising markets, lumpsum yields higher returns because all money compounds from day one; SIP is safer during volatile sideways markets." },
      { question: "How does inflation affect my lumpsum future value?", answer: "To find real purchasing power, subtract expected inflation rate from your nominal return (e.g. 12% return - 6% inflation = 6% real return)." },
      { question: "What is an STP?", answer: "A Systematic Transfer Plan invests a lumpsum in a liquid debt fund and transfers fixed amounts monthly into equity to average costs." }
    ],
    sources: [{ name: "Securities and Exchange Board of India (SEBI)", url: "https://www.sebi.gov.in" }]
  },

  "cagr-calculator": {
    overview: "Determines the Compound Annual Growth Rate, measuring the smoothed annualized return of an investment over multiple years.",
    formula: "CAGR = (Ending Value / Beginning Value)^(1 / Years) - 1",
    explanation: "Calculates the constant annual rate of return that would take an investment from its initial value to its final value.",
    example: {
      title: "Worked Example: Investment Growing from ₹1,00,000 to ₹2,50,000 in 7 Years",
      inputs: "Beginning Value = ₹1,00,000 | Ending Value = ₹2,50,000 | Duration = 7 Years",
      steps: [
        "Growth multiple = 2,50,000 / 1,00,000 = 2.50",
        "Power factor = 1 / 7 = 0.142857",
        "CAGR = (2.50)^0.142857 - 1 = 1.1398 - 1 = 13.98%"
      ],
      summary: "Initial = ₹1,00,000 | Final = ₹2,50,000 | Annualized CAGR = 13.98%"
    },
    metricsText: "CAGR eliminates interim market volatility, providing a normalized metric to compare different asset classes objectively.",
    useCases: [
      "Portfolio Benchmarking: Compare equity mutual fund performance against broad indices like Nifty 50 or S&P 500.",
      "Real Estate Returns: Calculate true annualised appreciation on property held across multi-year holding periods.",
      "Business Revenue Growth: Measure annualized top-line revenue growth across multi-year operational cycles."
    ],
    commonMistakes: [
      "Using absolute percentage return instead of CAGR for investments held longer than one year.",
      "Assuming CAGR reflects steady yearly returns without accounting for negative drawdown years.",
      "Applying CAGR to recurring SIP cash flows (which requires XIRR rather than CAGR)."
    ],
    faqs: [
      { question: "What is the difference between CAGR and XIRR?", answer: "CAGR is used for single point-in-time lump sums; XIRR (Extended Internal Rate of Return) is used when multiple periodic cash inflows/outflows occur." },
      { question: "Can CAGR be negative?", answer: "Yes, if an investment's ending value is lower than its beginning value, the resulting CAGR will be negative." },
      { question: "Why is absolute return misleading over 5 years?", answer: "An absolute return of 50% over 5 years is only roughly 8.45% CAGR, which might barely beat inflation." }
    ],
    sources: [{ name: "National Stock Exchange of India (NSE)", url: "https://www.nseindia.com" }]
  },

  "roi-calculator": {
    overview: "Calculates the percentage Return on Investment and annualized profitability of business ventures, marketing campaigns, or asset purchases.",
    formula: "ROI (%) = [(Net Profit) / Cost of Investment] × 100",
    explanation: "Net profit equals final investment gain minus total invested expenses.",
    example: {
      title: "Worked Example: ₹3,00,000 Investment Sold for ₹4,20,000",
      inputs: "Cost of Investment = ₹3,00,000 | Final Proceeds = ₹4,20,000",
      steps: [
        "Net Profit = ₹4,20,000 - ₹3,00,000 = ₹1,20,000",
        "ROI Ratio = 1,20,000 / 3,00,000 = 0.40",
        "ROI Percentage = 0.40 × 100 = 40.0%"
      ],
      summary: "Total Cost = ₹3,00,000 | Net Gain = ₹1,20,000 | Total ROI = 40.0%"
    },
    metricsText: "ROI measures total gain relative to capital deployed; always combine it with holding duration to understand true annual capital efficiency.",
    useCases: [
      "Marketing Campaign Evaluation: Measure customer acquisition revenues against digital ad spend.",
      "Equipment Purchases: Assess commercial machinery efficiency against operational cost savings.",
      "Real Estate Flipping: Calculate net percentage returns after accounting for renovation and registration expenses."
    ],
    commonMistakes: [
      "Omitting holding costs, maintenance expenses, and legal fees from total investment cost.",
      "Comparing ROI across two investments without standardizing for time duration.",
      "Failing to factor income tax liabilities on capital gains."
    ],
    faqs: [
      { question: "How does annualized ROI differ from simple ROI?", answer: "Annualized ROI divides total ROI by the number of holding years, accounting for the compounding duration." },
      { question: "What is a healthy ROI benchmark?", answer: "Benchmarks vary by risk: broad equity markets average 10-14%, while high-risk venture capital targets 25%+." },
      { question: "Can ROI be negative?", answer: "Yes, if your exit proceeds are lower than total costs, ROI reflects a net loss." }
    ],
    sources: [{ name: "Corporate Finance Institute (CFI)", url: "https://corporatefinanceinstitute.com" }]
  },

  "retirement-calculator": {
    overview: "Estimates the total retirement corpus required to maintain living standards post-retirement, incorporating life expectancy and inflation.",
    formula: "Corpus = Annual Expenses × ((1 - (1 + Real_Rate)^(-Retirement_Years)) / Real_Rate)",
    explanation: "Real Rate = ((1 + Investment Return) / (1 + Inflation)) - 1. Accounts for living expenses increasing each year with inflation.",
    example: {
      title: "Worked Example: ₹50,000 Current Monthly Expenses Retiring in 20 Years",
      inputs: "Current Age = 35 | Retirement Age = 55 | Life Expectancy = 85 | Monthly Expense = ₹50,000 | Inflation = 6%",
      steps: [
        "Future monthly expenses at age 55 = ₹50,000 × (1.06)^20 = ₹1,60,356 per month",
        "Annual retirement expense requirement = ₹19.24 Lakhs per year",
        "Corpus needed to sustain 30 years of post-retirement living with 6% inflation and 8% return"
      ],
      summary: "Target Retirement Corpus = ₹4.15 Crores | Required Monthly SIP = ₹28,400"
    },
    metricsText: "The 4% safe withdrawal rule suggests your retirement nest egg should equal at least 25 times your anticipated annual retirement expenses.",
    useCases: [
      "FIRE Planning: Determine savings targets required for Financial Independence, Retire Early (FIRE).",
      "Retirement Gap Analysis: Calculate the shortfall between current provident fund savings and required retirement capital.",
      "Post-Retirement Drawdown Strategy: Plan safe monthly withdrawal schedules that avoid depleting principal early."
    ],
    commonMistakes: [
      "Assuming expenses will drastically drop post-retirement while ignoring rising healthcare inflation.",
      "Using nominal returns without subtracting inflation from purchasing power projections.",
      "Underestimating longevity and assuming life expectancy ends at 70 or 75 years."
    ],
    faqs: [
      { question: "What is the 4% Rule in retirement planning?", answer: "It posits that withdrawing 4% of your initial retirement portfolio annually (adjusted for inflation) allows funds to last 30+ years." },
      { question: "What inflation rate should I assume for retirement in India?", answer: "Historical retail consumer inflation averages 5.5% to 6.5%, while healthcare inflation often exceeds 10%." },
      { question: "How does life expectancy impact my corpus requirement?", answer: "Each additional 5 years of life expectancy increases required retirement capital by roughly 15% to 20%." }
    ],
    sources: [{ name: "Society of Actuaries (SOA)", url: "https://www.soa.org" }]
  },

  "inflation-calculator": {
    overview: "Calculates the eroding purchasing power of money over time and projects future costs of living based on historical inflation rates.",
    formula: "Future Value = Present Value × (1 + Inflation Rate)^Years",
    explanation: "Determines how much future currency is needed to purchase a basket of goods costing a given amount today.",
    example: {
      title: "Worked Example: ₹1,00,000 Purchasing Power in 15 Years at 6% Inflation",
      inputs: "Current Amount = ₹1,00,000 | Inflation Rate = 6% p.a. | Duration = 15 Years",
      steps: [
        "Inflation compounding factor = (1 + 0.06)^15 = (1.06)^15 = 2.3965",
        "Equivalent future cost = ₹1,00,000 × 2.3965 = ₹2,39,655",
        "Loss of purchasing power = Today's ₹1,00,000 will only buy ₹41,727 worth of goods in 15 years"
      ],
      summary: "Present Value = ₹1,00,000 | Equivalent Future Cost = ₹2,39,655 | Loss in Real Value = 58.27%"
    },
    metricsText: "At a 6% annual inflation rate, prices double roughly every 12 years (Rule of 72: 72 / 6 = 12 years).",
    useCases: [
      "Long-Term Education Cost Planning: Estimate future college tuition fees for school-age children.",
      "Salary Real Growth Analysis: Determine if annual salary appraisals beat consumer price index increases.",
      "Real Return Calculation: Calculate true purchasing power growth after subtracting inflation from investment yields."
    ],
    commonMistakes: [
      "Leaving emergency savings in standard zero-interest savings accounts that guarantee inflation erosion.",
      "Assuming official headline CPI matches personal lifestyle inflation (especially in healthcare and education).",
      "Ignoring the compounding nature of inflation over horizons longer than 10 years."
    ],
    faqs: [
      { question: "What is the Consumer Price Index (CPI)?", answer: "CPI measures the average change over time in prices paid by consumers for a representative basket of goods and services." },
      { question: "What is the difference between real and nominal returns?", answer: "Nominal return is the raw interest rate stated; real return is nominal return minus the inflation rate." },
      { question: "Which asset classes historically beat inflation?", answer: "Equities, equity mutual funds, and commercial real estate have historically outpaced inflation over 10+ year periods." }
    ],
    sources: [{ name: "Ministry of Statistics and Programme Implementation (MOSPI)", url: "https://mospi.gov.in" }]
  },

  "salary-calculator": {
    overview: "Breaks down annual Cost to Company (CTC) packages into monthly gross earnings, statutory PF/ESI/PT deductions, and net in-hand bank deposits.",
    formula: "In-Hand Salary = Gross Monthly Salary - (Employee EPF + Professional Tax + Monthly TDS)",
    explanation: "Gross salary equals CTC minus employer PF, gratuity, and insurance. In-hand is gross salary minus employee deductions.",
    example: {
      title: "Worked Example: ₹12 Lakh Annual CTC In-Hand Breakdown",
      inputs: "CTC = ₹12,00,000 per annum | Metro Location | New Tax Regime",
      steps: [
        "Employer EPF & Gratuity component = ₹48,000/year; Gross Salary = ₹11,52,000 (₹96,000/month)",
        "Employee EPF deduction = ₹3,600/month | Professional Tax = ₹200/month",
        "Estimated monthly income tax TDS under New Regime = ₹5,958/month",
        "Net in-hand take-home = ₹96,000 - (₹3,600 + ₹200 + ₹5,958) = ₹86,242"
      ],
      summary: "Annual CTC = ₹12,00,000 | Monthly Gross = ₹96,000 | Monthly In-Hand = ₹86,242"
    },
    metricsText: "CTC is not equal to your take-home pay; employer contributions to PF, gratuity, and performance bonuses typically take up 15-20% of your gross offer.",
    useCases: [
      "Job Offer Evaluation: Compare true monthly bank credit across multiple corporate job offers.",
      "Budgeting & Rent Planning: Base household budgeting on verified monthly in-hand credit rather than CTC.",
      "Salary Negotiation: Negotiate for higher fixed basic salary versus volatile annual performance bonuses."
    ],
    commonMistakes: [
      "Dividing annual CTC directly by 12 to estimate monthly bank credit.",
      "Forgetting mandatory Professional Tax deductions (typically ₹200/month depending on state rules).",
      "Overlooking non-cash components like meal cards, retention bonuses, and group health insurance."
    ],
    faqs: [
      { question: "What is the difference between CTC and Gross Salary?", answer: "CTC includes employer contributions (EPF, gratuity, insurance); Gross Salary is what is credited before employee deductions." },
      { question: "Why is my in-hand salary lower than my gross salary?", answer: "Because employee deductions like 12% EPF, Professional Tax, and Income Tax (TDS) are deducted at source." },
      { question: "What is Professional Tax (PT)?", answer: "A state-level tax levied on salaried professionals, capped by constitutional mandate at ₹2,500 per year." }
    ],
    sources: [{ name: "Ministry of Labour and Employment", url: "https://labour.gov.in" }]
  },

  "salary-hike-calculator": {
    overview: "Computes salary percentage increments, revised annual CTC, and new monthly in-hand compensation following appraisals or job switches.",
    formula: "Hike (%) = ((New Salary - Old Salary) / Old Salary) × 100 | New Salary = Old Salary × (1 + Hike / 100)",
    explanation: "Measures the absolute monetary and percentage increase in compensation packages.",
    example: {
      title: "Worked Example: ₹8 Lakh Salary with a 25% Job Switch Hike",
      inputs: "Current CTC = ₹8,00,000 | Increment Hike = 25%",
      steps: [
        "Annual increase = ₹8,00,000 × 0.25 = ₹2,00,000",
        "New revised CTC = ₹8,00,000 + ₹2,00,000 = ₹10,00,000",
        "Revised monthly gross = ₹10,00,000 / 12 = ₹83,333 per month"
      ],
      summary: "Old CTC = ₹8,00,000 | Hike = 25.0% | Revised CTC = ₹10,00,000 | Annual Gain = ₹2,00,000"
    },
    metricsText: "A 30% hike on a job switch may push you into a higher tax bracket; always evaluate the net post-tax increase in take-home pay.",
    useCases: [
      "Appraisal Assessment: Calculate exact monthly net gains following annual corporate performance reviews.",
      "Offer Counter-Proposals: Model required hike percentages during recruitment salary negotiations.",
      "Tax Bracket Impact: Evaluate whether an increment pushes your taxable base into a higher income tax slab."
    ],
    commonMistakes: [
      "Assuming a 30% increase in CTC translates to a 30% increase in monthly in-hand bank credit.",
      "Failing to check whether the hike is concentrated in variable performance pay or guaranteed fixed basic.",
      "Ignoring relocation living expenses when accepting job offers in higher-cost tier-1 cities."
    ],
    faqs: [
      { question: "What is the standard job switch salary hike in India?", answer: "Standard lateral job switch hikes typically range between 20% and 40%, depending on skill rarity and industry demand." },
      { question: "How does a salary hike affect income tax?", answer: "Higher incremental income is taxed at your marginal slab rate (e.g. 15%, 20%, or 30%), reducing the effective net percentage gain." },
      { question: "How do I calculate what hike percentage I received?", answer: "Subtract old salary from new salary, divide the result by old salary, and multiply by 100." }
    ],
    sources: [{ name: "All India Management Association (AIMA)", url: "https://www.aima.in" }]
  },

  "hra-calculator": {
    overview: "Calculates the tax-exempt House Rent Allowance (HRA) under Section 10(13A) of the Income Tax Act to minimize taxable salary income.",
    formula: "Exempt HRA = Minimum of: (1) Actual HRA received, (2) Rent paid - 10% of Basic, (3) 50% of Basic (Metro) or 40% (Non-Metro)",
    explanation: "Taxable HRA equals total HRA received minus the calculated exempt HRA amount. Metro cities are Delhi, Mumbai, Kolkata, and Chennai.",
    example: {
      title: "Worked Example: Salaried Employee in Metro Paying ₹25,000 Monthly Rent",
      inputs: "Basic Salary = ₹60,000/mo | HRA Received = ₹30,000/mo | Rent Paid = ₹25,000/mo | Location = Metro",
      steps: [
        "Condition 1: Actual HRA received = ₹30,000",
        "Condition 2: Rent paid minus 10% basic = ₹25,000 - (10% of ₹60,000) = ₹25,000 - ₹6,000 = ₹19,000",
        "Condition 3: 50% of basic salary = 50% of ₹60,000 = ₹30,000",
        "Exempt HRA is the lowest figure = ₹19,000 per month (₹2,28,000 annually)"
      ],
      summary: "Annual HRA Received = ₹3,60,000 | Tax-Exempt HRA = ₹2,28,000 | Taxable HRA = ₹1,32,000"
    },
    metricsText: "HRA tax exemption is only available under the Old Tax Regime; the New Tax Regime does not permit HRA exemptions under Section 10(13A).",
    useCases: [
      "Income Tax Declaration: Submit accurate HRA rent proofs to employer payroll portals before February cutoffs.",
      "Rent Optimization: Calculate how much rent you need to pay to claim 100% of your allotted HRA tax-free.",
      "Old vs New Regime Decision: Determine if substantial HRA exemptions make the Old Tax Regime more beneficial."
    ],
    commonMistakes: [
      "Attempting to claim HRA tax exemption while filing returns under the New Tax Regime.",
      "Failing to obtain landlord PAN when annual rent payments exceed ₹1,00,000.",
      "Claiming 50% metro allowance for Bengaluru, Hyderabad, or Pune (statutory metro classification only covers Delhi, Mumbai, Kolkata, Chennai)."
    ],
    faqs: [
      { question: "Which cities qualify for the 50% metro HRA rule?", answer: "Under Income Tax rules, only Mumbai, Delhi, Kolkata, and Chennai qualify for 50%; all other cities (including Bengaluru and Hyderabad) are 40%." },
      { question: "Is landlord PAN mandatory for claiming HRA?", answer: "Yes, if annual rent paid exceeds ₹1,00,000 (roughly ₹8,333/month), landlord's PAN must be submitted." },
      { question: "Can I pay rent to my parents and claim HRA?", answer: "Yes, provided parents own the property, you execute a genuine rental agreement, and parents declare rental income in their tax returns." }
    ],
    sources: [{ name: "Income Tax Department of India (Section 10(13A))", url: "https://www.incometax.gov.in" }]
  },

  "gratuity-calculator": {
    overview: "Calculates statutory retirement and resignation gratuity payouts for employees completing five or more years of continuous service.",
    formula: "Gratuity = (15 × Last Drawn Salary × Years of Service) / 26",
    explanation: "Last drawn salary = Basic Pay + Dearness Allowance (DA). 26 represents working days per month. 15 represents days of wages per year.",
    example: {
      title: "Worked Example: 10 Years Service with ₹75,000 Last Drawn Basic",
      inputs: "Last Drawn Basic + DA = ₹75,000 | Completed Service = 10 Years",
      steps: [
        "15 days salary factor = (15 × ₹75,000) / 26 = ₹43,269",
        "Total gratuity = ₹43,269 × 10 years of service = ₹4,32,692"
      ],
      summary: "Service = 10 Years | Last Basic = ₹75,000 | Total Statutory Gratuity = ₹4,32,692"
    },
    metricsText: "Gratuity received under the Payment of Gratuity Act is 100% tax-free up to a statutory lifetime limit of ₹20 Lakhs.",
    useCases: [
      "Resignation Settlements: Verify that full-and-final settlement payouts from employers match statutory formulas.",
      "Retirement Planning: Calculate expected lump-sum gratuity benefits upon superannuation.",
      "Job Switch Timing: Ensure you complete 4 years and 240 days of continuous service to secure gratuity eligibility."
    ],
    commonMistakes: [
      "Resigning before completing the mandatory 5 continuous years of service (which forfeits gratuity eligibility).",
      "Using full CTC instead of Basic + Dearness Allowance to compute gratuity payouts.",
      "Ignoring that service periods of 6 months or more in the final year are rounded up to a full year."
    ],
    faqs: [
      { question: "What is the minimum service required for gratuity?", answer: "Employees must complete at least 5 years of continuous service with the employer (or 4 years and 240 working days in judicial rulings)." },
      { question: "Is gratuity payout taxable?", answer: "Gratuity is tax-exempt up to a lifetime ceiling of ₹20 Lakhs for non-government employees covered under the Act." },
      { question: "What happens to gratuity if an employee passes away in service?", answer: "The 5-year continuous service condition is waived, and full gratuity is paid to legal nominees." }
    ],
    sources: [{ name: "Payment of Gratuity Act, 1972", url: "https://clc.gov.in" }]
  },

  "tds-calculator": {
    overview: "Computes Tax Deducted at Source (TDS) on contractual professional fees, contractor payments, fixed deposit interest, and commercial rent.",
    formula: "TDS Amount = Gross Payment × (Section TDS Rate / 100) | Net Payable = Gross - TDS",
    explanation: "Statutory deduction rates vary by section: 194J (Professional fees 10% or 2%), 194C (Contractor 1% or 2%), 194A (Interest 10%), 194I (Rent 10%).",
    example: {
      title: "Worked Example: Freelance Invoice of ₹1,00,000 under Section 194J (10%)",
      inputs: "Gross Professional Fee = ₹1,00,000 | TDS Section = 194J (10%)",
      steps: [
        "TDS deduction = ₹1,00,000 × (10 / 100) = ₹10,000",
        "Net payment disbursed to freelancer = ₹1,00,000 - ₹10,000 = ₹90,000",
        "Client deposits ₹10,000 to government via Challan 281 and issues Form 16A"
      ],
      summary: "Gross Bill = ₹1,00,000 | TDS Deducted = ₹10,000 | Net Disbursed = ₹90,000"
    },
    metricsText: "TDS is not an additional tax; it is an advance tax deduction credited to your PAN, fully claimable against your final ITR tax liability.",
    useCases: [
      "Freelance Invoicing: Calculate net receipts expected after clients deduct TDS under Section 194J.",
      "Landlord Rent Receipts: Assess commercial rental income deductions under Section 194I.",
      "Vendor Billing: Reconcile quarterly Form 26AS and AIS tax credits against client payment vouchers."
    ],
    commonMistakes: [
      "Failing to furnish valid PAN, which triggers mandatory higher TDS deduction at 20% under Section 206AA.",
      "Assuming deducted TDS represents final tax liability (you must still file ITR and pay balance tax or claim refunds).",
      "Applying 10% technical service rate instead of 2% royalty rate on specified IT BPO contracts."
    ],
    faqs: [
      { question: "How can I verify if my client deposited deducted TDS?", answer: "Check your Form 26AS or Annual Information Statement (AIS) on the income tax portal using your PAN." },
      { question: "What is Form 16A?", answer: "A quarterly certificate issued by the deductor specifying the amount of TDS deducted and deposited on non-salary payments." },
      { question: "Can I get a refund of deducted TDS?", answer: "Yes, if your total annual tax liability calculated in your ITR is less than the TDS deducted, you receive a direct bank refund." }
    ],
    sources: [{ name: "Income Tax Department TDS Slabs", url: "https://www.incometax.gov.in" }]
  },

  "capital-gains-calculator": {
    overview: "Calculates Short-Term Capital Gains (STCG) and Long-Term Capital Gains (LTCG) tax on equity shares, mutual funds, real estate, and gold sales.",
    formula: "LTCG = Sale Price - (Cost of Acquisition + Indexed Improvement) | Tax = LTCG × Statutory Rate",
    explanation: "Post-Budget statutory rates: Listed equity LTCG is 12.5% (above ₹1.25 Lakh exemption); STCG is 20%. Real estate LTCG is 12.5% without indexation.",
    example: {
      title: "Worked Example: ₹5,00,000 Profit on Listed Equity Shares Sold after 2 Years",
      inputs: "Capital Gain = ₹5,00,000 | Asset = Listed Equity Mutual Fund | Holding Period = 2 Years (Long Term)",
      steps: [
        "Annual statutory LTCG exemption = ₹1,25,000",
        "Taxable capital gain = ₹5,00,000 - ₹1,25,000 = ₹3,75,000",
        "LTCG tax at 12.5% = ₹3,75,000 × 0.125 = ₹46,875 + 4% cess (₹1,875) = ₹48,750"
      ],
      summary: "Total Gain = ₹5,00,000 | Tax-Free Exemption = ₹1,25,000 | Total Tax = ₹48,750"
    },
    metricsText: "The statutory exemption limit for long-term capital gains on listed equities and mutual funds is ₹1.25 Lakhs per financial year.",
    useCases: [
      "Tax Harvesting: Sell and re-buy equity funds annually to harvest the ₹1.25 Lakh tax-free LTCG exemption.",
      "Property Sale Planning: Calculate capital gains on home sales and evaluate Section 54/54EC capital gains bond exemptions.",
      "Stock Market Trading: Reconcile annual capital gains reports from Zerodha, Groww, or Upstox for ITR filing."
    ],
    commonMistakes: [
      "Assuming the old ₹1.0 Lakh equity LTCG exemption and 10% tax rate still apply after recent statutory Budget revisions.",
      "Forgetting to offset short-term and long-term capital losses against eligible gains.",
      "Omitting transfer expenses (brokerage, STT, registry charges) from net sale consideration."
    ],
    faqs: [
      { question: "What is the holding period for long-term equity in India?", answer: "Listed shares and equity mutual funds held for more than 12 months qualify as long-term capital assets." },
      { question: "Can capital losses be carried forward?", answer: "Yes, both short-term and long-term capital losses can be carried forward for up to 8 consecutive assessment years if ITR is filed on time." },
      { question: "What is Section 54EC?", answer: "Allows individuals to exempt up to ₹50 Lakhs of long-term capital gains from real estate by investing in specified infrastructure bonds (NHAI/REC) within 6 months." }
    ],
    sources: [{ name: "Central Board of Direct Taxes (CBDT)", url: "https://incometaxindia.gov.in" }]
  },

  "credit-card-interest-calculator": {
    overview: "Computes compound finance charges, APR fees, and multi-year debt payoff schedules on revolving unpaid credit card balances.",
    formula: "Monthly Interest = (Outstanding Balance × Monthly APR) / 365 × Number of Days",
    explanation: "Credit card APRs range from 36% to 45% per annum (3% to 3.75% per month) plus 18% GST on all interest charges.",
    example: {
      title: "Worked Example: ₹50,000 Revolved Balance at 42% APR for 30 Days",
      inputs: "Outstanding Balance = ₹50,000 | Annual Rate = 42% APR | Billing Period = 30 Days",
      steps: [
        "Daily interest rate = 42 / 365 / 100 = 0.0011506",
        "Monthly finance charge = ₹50,000 × 0.0011506 × 30 = ₹1,726",
        "18% GST on interest = ₹1,726 × 0.18 = ₹311; Total Monthly Charge = ₹2,037"
      ],
      summary: "Revolving Debt = ₹50,000 | Monthly Interest = ₹1,726 | GST on Interest = ₹311 | Total Cost = ₹2,037/month"
    },
    metricsText: "Paying only the 5% 'Minimum Amount Due' on a ₹50,000 balance can take over 8 years to clear and cost over ₹70,000 in interest alone.",
    useCases: [
      "Debt Trap Elimination: See how paying only the minimum amount due balloons total debt over multi-year cycles.",
      "Balance Transfer Evaluation: Calculate savings from transferring credit card debt to a low-interest personal loan.",
      "Grace Period Understanding: Learn why revolving even ₹1 revokes the 45-day interest-free period on all fresh purchases."
    ],
    commonMistakes: [
      "Believing that paying the Minimum Amount Due stops interest from accruing on the remaining balance.",
      "Overlooking that new purchases immediately start accruing interest from day one when a balance is revolving.",
      "Forgetting that 18% GST is charged on all credit card interest, late fees, and annual charges."
    ],
    faqs: [
      { question: "What happens if I only pay the Minimum Amount Due?", answer: "You avoid late payment penalties, but the remaining 95% balance continues accruing interest at 36%-45% annual APR." },
      { question: "What is the interest-free grace period?", answer: "A 20 to 50 day period where no interest is charged, valid ONLY if the previous month's total statement balance was paid in full." },
      { question: "How can I avoid credit card interest entirely?", answer: "Always pay 100% of the 'Total Amount Due' on or before the payment due date every single month." }
    ],
    sources: [{ name: "Reserve Bank of India Master Direction on Credit Cards", url: "https://www.rbi.org.in" }]
  },

  "loan-eligibility-calculator": {
    overview: "Estimates the maximum loan sanction amount you qualify for based on net monthly income, existing EMIs, and debt-to-income limits (FOIR).",
    formula: "Max EMI = (Net Monthly Salary × FOIR %) - Existing EMIs | Loan Amount = Present_Value(Max EMI, Rate, Tenure)",
    explanation: "FOIR (Fixed Obligation to Income Ratio) is the percentage of monthly income lenders allow for total debt payments (typically 40% to 55%).",
    example: {
      title: "Worked Example: ₹80,000 Monthly Salary with ₹10,000 Existing Car EMI",
      inputs: "Monthly Net Income = ₹80,000 | Existing EMI = ₹10,000 | FOIR = 50% | Interest = 8.5% | Tenure = 20 Years",
      steps: [
        "Allowed debt capacity = 50% of ₹80,000 = ₹40,000/month",
        "Maximum available EMI for new loan = ₹40,000 - ₹10,000 = ₹30,000/month",
        "Home loan per lakh EMI factor at 8.5% for 20 years = ₹868 per lakh",
        "Eligible home loan amount = (30,000 / 868) × 1,00,000 = ₹34.56 Lakhs"
      ],
      summary: "Net Salary = ₹80,000 | Max Allowed EMI = ₹30,000 | Max Loan Eligibility = ₹34.56 Lakhs"
    },
    metricsText: "Adding a co-applicant (spouse or earning parent) combines household incomes, boosting total loan eligibility by 50% to 80%.",
    useCases: [
      "Pre-Purchase Budgeting: Know your exact borrowing ceiling before paying token booking advances for properties.",
      "Co-Applicant Planning: Calculate how adding a working spouse enhances total sanctioned loan amounts.",
      "CIBIL Score Optimization: See how paying off small personal loans frees up FOIR headroom for larger home loans."
    ],
    commonMistakes: [
      "Assuming lenders will sanction loans based on gross CTC rather than take-home bank salary.",
      "Ignoring the negative impact of active credit card outstanding balances on credit eligibility.",
      "Assuming high income guarantees loan sanction even with a poor credit score (< 700)."
    ],
    faqs: [
      { question: "What is FOIR?", answer: "Fixed Obligation to Income Ratio: the percentage of your monthly net income that goes toward paying all loan EMIs." },
      { question: "How does my credit score affect loan eligibility?", answer: "A CIBIL score of 750+ secures the lowest interest rates and highest eligibility multipliers from tier-1 banks." },
      { question: "Can I increase my loan eligibility without a co-applicant?", answer: "Yes, by opting for a longer loan tenure (e.g. 30 years instead of 20 years) or clearing existing small debts." }
    ],
    sources: [{ name: "TransUnion CIBIL India", url: "https://www.cibil.com" }]
  },

  "prepayment-calculator": {
    overview: "Calculates interest savings and loan tenure reduction achieved by making partial lump-sum prepayments toward loan principal.",
    formula: "New Principal = Current Principal - Prepayment | Recalculate Tenure or EMI using Amortisation",
    explanation: "Prepayments reduce outstanding principal directly, permanently eliminating future interest on that portion.",
    example: {
      title: "Worked Example: Prepaying ₹2,00,000 on a ₹30 Lakh Home Loan",
      inputs: "Loan Balance = ₹30,00,000 | Rate = 8.5% | Remaining Tenure = 240 Months | Prepayment = ₹2,00,000",
      steps: [
        "Principal reduces immediately from ₹30,00,000 to ₹28,00,000",
        "Option A (Reduce Tenure): Monthly EMI remains ₹26,035; tenure reduces from 240 months to 207 months (33 months cut)",
        "Option B (Reduce EMI): Tenure remains 240 months; monthly EMI drops from ₹26,035 to ₹24,300"
      ],
      summary: "Prepayment = ₹2,00,000 | Tenure Saved = 33 Months (2.75 Years) | Total Interest Saved = ₹5,58,000"
    },
    metricsText: "Prepaying early in a loan's life cycle produces maximum savings: ₹1 Lakh prepaid in Year 2 saves more than triple the interest of ₹1 Lakh prepaid in Year 15.",
    useCases: [
      "Bonus Utilization: Direct annual corporate bonuses into loan principal to shave years off home mortgages.",
      "EMI vs Tenure Decision: Compare the financial advantage of cutting loan tenure versus reducing monthly EMI commitments.",
      "Zero Prepayment Penalty Check: Take advantage of RBI mandates that ban prepayment penalties on floating-rate individual home loans."
    ],
    commonMistakes: [
      "Delaying prepayments until late in the loan tenure when remaining interest obligations are already small.",
      "Prepaying low-interest loans (e.g. 8.5% home loan) instead of high-interest debts (e.g. 15% personal loan or 42% credit card).",
      "Failing to instruct the bank in writing to adjust prepayments against principal rather than future EMIs."
    ],
    faqs: [
      { question: "Are banks allowed to charge prepayment penalties on home loans?", answer: "No. The Reserve Bank of India strictly prohibits foreclosure charges and prepayment penalties on floating-rate home loans for individual borrowers." },
      { question: "Is it better to reduce tenure or reduce EMI when prepaying?", answer: "Reducing tenure saves substantially more total interest; reducing EMI improves immediate monthly household cash flow." },
      { question: "How often can I make prepayments?", answer: "Most banks allow partial prepayments at any time throughout the year, either via online net banking or branch visits." }
    ],
    sources: [{ name: "Reserve Bank of India Master Circular on Loan Foreclosure", url: "https://www.rbi.org.in" }]
  },

  "stamp-duty-calculator": {
    overview: "Estimates state government stamp duty, legal registration fees, and municipal surcharges required during property transactions.",
    formula: "Stamp Duty = Higher of (Agreement Value, Ready Reckoner / Circle Rate) × State Stamp Duty %",
    explanation: "Stamp duty is an indirect property tax levied by state governments. Rates vary by state, gender of buyer, and municipal limits.",
    example: {
      title: "Worked Example: ₹80 Lakh Property Purchase in Maharashtra (Male Buyer)",
      inputs: "Property Value = ₹80,00,000 | State = Maharashtra | Buyer Gender = Male",
      steps: [
        "Stamp Duty Rate = 5% base + 1% Metro Cess = 6%",
        "Stamp Duty payable = ₹80,00,000 × 0.06 = ₹4,80,000",
        "Registration Fee = 1% (capped at statutory ₹30,000 in Maharashtra) = ₹30,000"
      ],
      summary: "Property Cost = ₹80,00,000 | Stamp Duty = ₹4,80,000 | Registration = ₹30,000 | Total Government Fees = ₹5,10,000"
    },
    metricsText: "Many Indian states offer a 1% to 2% stamp duty concession for female property buyers to encourage women homeownership.",
    useCases: [
      "Home Buying Budgeting: Calculate total legal registration fees before finalizing property sale agreements.",
      "Gender Concession Planning: Assess tax savings by registering property jointly or solely in the name of a female family member.",
      "Circle Rate Compliance: Ensure agreement consideration value does not fall below the government ready reckoner benchmark."
    ],
    commonMistakes: [
      "Assuming stamp duty rates are uniform across India (they vary from 3% to 7% depending on the state).",
      "Understating agreement values below the official circle rate, which triggers tax scrutiny under Section 56(2)(x).",
      "Forgetting to budget for 1% registration charges and advocate documentation fees."
    ],
    faqs: [
      { question: "Can stamp duty be included in home loan amounts?", answer: "Generally no. RBI guidelines specify that banks cannot include stamp duty and registration charges in the sanctioned loan-to-value (LTV) calculation." },
      { question: "Can I claim income tax deduction on stamp duty?", answer: "Yes, stamp duty and registration fees paid can be claimed as a deduction under Section 80C up to ₹1.5 Lakhs in the year of purchase." },
      { question: "What is Circle Rate / Ready Reckoner Rate?", answer: "The minimum baseline price per square foot set by the state government below which a property cannot be legally registered." }
    ],
    sources: [{ name: "Department of Registration and Stamps (State Governments)", url: "https://igrmaharashtra.gov.in" }]
  },

  "property-tax-calculator": {
    overview: "Estimates annual municipal property tax dues based on built-up area, property classification, construction age, and local municipality unit area values.",
    formula: "Property Tax = Built-Up Area × Base Value per Sq.Ft × Age Factor × Structure Factor × Occupancy Factor × Tax Rate",
    explanation: "Calculated using the Unit Area System (UAS) or Capital Value System adopted by urban municipal corporations.",
    example: {
      title: "Worked Example: 1,200 Sq.Ft Residential Apartment under Municipal Corporation",
      inputs: "Area = 1,200 sq.ft | Base Rate = ₹2.50/sq.ft/month | Age Factor = 0.9 (10 years) | Occupancy = Self-Occupied (1.0)",
      steps: [
        "Annual Rateable Value (ARV) = 1,200 × 2.50 × 12 × 0.9 × 1.0 = ₹32,400",
        "General tax rate (20%) = ₹6,480",
        "Add municipal education and library cess (5%) = ₹324"
      ],
      summary: "Built-up Area = 1,200 Sq.Ft | Annual Rateable Value = ₹32,400 | Net Annual Property Tax = ₹6,804"
    },
    metricsText: "Paying annual municipal property tax in full during the first quarter (April–May) usually qualifies for a 5% to 10% early-bird rebate.",
    useCases: [
      "Municipal Assessment: Verify annual municipal tax bills against published unit area rate schedules.",
      "Tenant vs Landlord Verification: Check property tax clearance certificates before executing residential lease deeds.",
      "Ownership Transfer: Clear all municipal tax arrears before applying for municipal khata or property title mutation."
    ],
    commonMistakes: [
      "Reporting incorrect carpet or built-up area measurements on self-assessment tax declaration forms.",
      "Failing to declare commercial usage of residential properties, which attracts severe penalty back-taxes.",
      "Missing municipal payment deadlines, incurring recurring 1% to 2% monthly late interest charges."
    ],
    faqs: [
      { question: "Who is responsible for paying property tax: tenant or owner?", answer: "The property owner is legally responsible for paying municipal property tax, regardless of tenancy agreements." },
      { question: "How does property age affect tax calculations?", answer: "Older properties generally have lower depreciation factors, resulting in slightly lower annual rateable values." },
      { question: "What happens if property tax is unpaid for years?", answer: "Municipal authorities can issue legal recovery notices, freeze property registry mutations, and auction properties to recover tax dues." }
    ],
    sources: [{ name: "Directorate of Municipal Administration", url: "https://mohua.gov.in" }]
  },

  "rent-vs-buy-calculator": {
    overview: "Evaluates the long-term wealth difference between buying a home with a mortgage versus renting and investing the down payment in equity index funds.",
    formula: "Net Buying Wealth = Property Value - Buying Costs | Net Renting Wealth = Compounded Investment Portfolio - Cumulative Rent",
    explanation: "Compares mortgage interest, maintenance, property tax, and home appreciation against rent escalation and equity compounding returns.",
    example: {
      title: "Worked Example: ₹70 Lakh Property vs ₹20,000 Monthly Rent over 15 Years",
      inputs: "Home Price = ₹70,00,000 | Down Payment = ₹14,00,000 | Rent = ₹20,000/mo | Home Appreciation = 5% | SIP Return = 12%",
      steps: [
        "Buyer Path: ₹56 Lakh loan at 8.5% costs ₹48,590/mo EMI + maintenance + taxes. House appreciates to ₹1.45 Crores.",
        "Renter Path: Pays ₹20,000/mo rent (5% escalation) and invests ₹14 Lakh down payment + ₹28,590 monthly savings in equity at 12%.",
        "Renter's investment portfolio grows to ₹2.10 Crores over 15 years."
      ],
      summary: "Buyer Home Equity = ₹1.45 Crores | Renter Investment Corpus = ₹2.10 Crores | Net Financial Advantage = Renting (+₹65 Lakhs)"
    },
    metricsText: "In Indian metro cities where rental yields average just 2% to 3%, renting and disciplined investing often out-yields buying on high-interest mortgages.",
    useCases: [
      "Relocation Decisions: Decide whether buying makes sense if career mobility requires relocating within 3-5 years.",
      "Opportunity Cost Analysis: Evaluate how investing down payment capital in equity markets compares with real estate appreciation.",
      "Lifestyle Financial Planning: Balance the psychological emotional security of homeownership against capital flexibility."
    ],
    commonMistakes: [
      "Comparing monthly EMI directly to monthly rent while ignoring property taxes, maintenance fees, and registration costs.",
      "Assuming home values appreciate at 10%+ every year without considering real historical localized data (4% to 6%).",
      "Assuming renters actually invest their monthly savings rather than spending surplus cash."
    ],
    faqs: [
      { question: "What is rental yield?", answer: "Annual rent divided by total property purchase price (e.g. ₹2.4 Lakh annual rent on ₹80 Lakh home = 3% rental yield)." },
      { question: "When does buying a home make more financial sense than renting?", answer: "When you plan to stay in the home for 10+ years, property prices appreciate rapidly, or mortgage interest rates drop significantly." },
      { question: "What are the hidden costs of homeownership?", answer: "Stamp duty (5-7%), interior fitouts, annual maintenance charges (AMC), property taxes, and loan interest." }
    ],
    sources: [{ name: "National Housing Bank RESIDEX", url: "https://residex.nhb.org.in" }]
  },

  "home-affordability-calculator": {
    overview: "Determines the maximum realistic home purchase price you can afford based on household income, down payment savings, and monthly debt caps.",
    formula: "Affordable Price = Down Payment Savings + Maximum Sanctioned Home Loan (based on 40-50% FOIR)",
    explanation: "Ensures monthly mortgage payments do not exceed 40% of net household take-home income.",
    example: {
      title: "Worked Example: Household Income ₹1,20,000/mo with ₹15 Lakh Down Payment",
      inputs: "Monthly Net Income = ₹1,20,000 | Down Payment = ₹15,00,000 | Loan Rate = 8.5% | Tenure = 20 Years",
      steps: [
        "Maximum safe monthly EMI (40% of income) = 0.40 × ₹1,20,000 = ₹48,000/month",
        "Max loan supported by ₹48,000 EMI at 8.5% for 20 years = ₹55.3 Lakhs",
        "Total affordable purchase budget = ₹15 Lakh down payment + ₹55.3 Lakh loan = ₹70.3 Lakhs",
        "Reserve 7% for stamp duty and registration = ₹4.9 Lakhs; Net affordable home price = ₹65.4 Lakhs"
      ],
      summary: "Monthly Income = ₹1,20,000 | Safe EMI = ₹48,000 | Total Home Budget = ₹65.4 Lakhs"
    },
    metricsText: "Financial advisors recommend the 28/36 rule: mortgage payments should not exceed 28% of gross income, and total debts should stay under 36%.",
    useCases: [
      "Property Search Filtering: Restrict real estate portal searches to homes within your verified financial affordability limit.",
      "Emergency Reserve Protection: Ensure home purchase down payments do not exhaust your 6-month emergency reserve fund.",
      "Dual Income Budgeting: Combine joint partner incomes to realistically budget for family starter homes."
    ],
    commonMistakes: [
      "Spending 100% of liquid savings on the down payment, leaving zero emergency reserves for post-purchase repairs.",
      "Forgetting to subtract 8% to 10% of property cost for stamp duty, registration, legal fees, and interior woodwork.",
      "Maxing out credit limits to buy the largest home possible, creating severe 'house poor' cash flow stress."
    ],
    faqs: [
      { question: "What percentage should I put down as a down payment?", answer: "Lenders require at least 10% to 20%; putting down 20% eliminates high loan-to-value risk and lowers monthly EMIs." },
      { question: "What does being 'house poor' mean?", answer: "A situation where so much of your monthly income goes toward home payments that you have little left for investing, travel, or emergencies." },
      { question: "Does my credit score change my affordability budget?", answer: "Yes. Higher credit scores (750+) qualify for lower interest rates, which lowers your EMI and lets you afford a higher loan." }
    ],
    sources: [{ name: "National Housing Bank", url: "https://nhb.org.in" }]
  },

  "break-even-calculator": {
    overview: "Calculates the exact unit sales volume and revenue required for a business to cover all fixed and variable operating costs with zero profit and zero loss.",
    formula: "Break-Even Units = Fixed Costs / (Selling Price per Unit - Variable Cost per Unit)",
    explanation: "Contribution Margin = Selling Price - Variable Cost. Break-even occurs when total contribution margin equals total fixed overhead.",
    example: {
      title: "Worked Example: Retail Product with ₹50,000 Monthly Fixed Overhead",
      inputs: "Fixed Overhead = ₹50,000/month | Selling Price = ₹500/unit | Variable Cost = ₹300/unit",
      steps: [
        "Contribution margin per unit = ₹500 - ₹300 = ₹200 per unit",
        "Contribution margin ratio = 200 / 500 = 40%",
        "Break-even volume = ₹50,000 / ₹200 = 250 units per month",
        "Break-even revenue = 250 units × ₹500 = ₹1,25,000 per month"
      ],
      summary: "Fixed Costs = ₹50,000 | Margin = ₹200/unit | Break-Even Volume = 250 Units | Break-Even Sales = ₹1,25,000"
    },
    metricsText: "Every unit sold beyond the break-even point contributes 100% of its contribution margin directly to net operational profit.",
    useCases: [
      "Startup Financial Feasibility: Determine whether a new commercial venture has a realistic sales threshold.",
      "Pricing Adjustments: Model how offering a 10% retail discount shifts the required monthly sales volume.",
      "Cost Reduction Strategy: Calculate how cutting office rent or software overhead lowers the operational risk threshold."
    ],
    commonMistakes: [
      "Classifying semi-variable costs (like electricity or customer support) strictly as fixed costs.",
      "Ignoring seasonal sales fluctuations when planning monthly fixed cost commitments.",
      "Failing to update break-even models when supplier raw material prices change."
    ],
    faqs: [
      { question: "What is the difference between fixed and variable costs?", answer: "Fixed costs (rent, insurance, salaries) stay constant regardless of volume; variable costs (raw materials, packaging, shipping) rise with production." },
      { question: "What is Contribution Margin?", answer: "Selling price minus variable cost per unit; it is the amount of money each unit sale contributes toward paying off fixed costs." },
      { question: "How can a company lower its break-even point?", answer: "By raising selling prices, reducing unit material costs, or trimming fixed operational overhead." }
    ],
    sources: [{ name: "Institute of Cost Accountants of India", url: "https://icmai.in" }]
  },

  "profit-margin-calculator": {
    overview: "Computes gross profit, operating margin, and net profit percentage from product cost of goods sold and net sales revenue.",
    formula: "Gross Margin (%) = ((Revenue - COGS) / Revenue) × 100 | Net Margin (%) = (Net Profit / Revenue) × 100",
    explanation: "Gross margin reflects production efficiency; net margin reflects overall business profitability after all overhead and taxes.",
    example: {
      title: "Worked Example: Product Cost ₹60 Sold for ₹100 with ₹15 Operating Overhead",
      inputs: "Revenue = ₹100 | Cost of Goods Sold = ₹60 | Operating Expenses = ₹15",
      steps: [
        "Gross Profit = ₹100 - ₹60 = ₹40; Gross Profit Margin = (40 / 100) × 100 = 40.0%",
        "Operating Profit = ₹40 - ₹15 = ₹25; Net Profit Margin = (25 / 100) × 100 = 25.0%"
      ],
      summary: "Revenue = ₹100 | Gross Margin = 40.0% | Net Profit Margin = 25.0%"
    },
    metricsText: "A company can have healthy 60% gross profit margins but still record net losses if corporate marketing and overhead are unmanaged.",
    useCases: [
      "Product Line Auditing: Identify which inventory SKUs generate the highest net percentage profit margins.",
      "E-Commerce Pricing: Ensure marketplace selling prices account for platform commissions, payment gateway fees, and returns.",
      "Competitor Benchmarking: Compare operational profitability against publicly listed industry peer averages."
    ],
    commonMistakes: [
      "Confusing gross profit margin (calculated before overhead) with net profit margin.",
      "Omitting packaging, merchant gateway fees, and shipping costs from Cost of Goods Sold.",
      "Failing to account for customer product return rates and damaged inventory write-offs."
    ],
    faqs: [
      { question: "What is a good profit margin?", answer: "Average margins vary: retail grocery operates on 2-5%, manufacturing on 10-15%, and SaaS software on 20-30%+ net margins." },
      { question: "What is the difference between markup and margin?", answer: "Margin is profit divided by revenue; markup is profit divided by cost price." },
      { question: "How do discounting strategies impact profit margins?", answer: "A 20% discount on a product with a 30% margin slashes total dollar profit by two-thirds." }
    ],
    sources: [{ name: "Harvard Business Review Financial Metrics", url: "https://hbr.org" }]
  },

  "markup-calculator": {
    overview: "Calculates the retail selling price and markup percentage required on cost prices to achieve target product profitability.",
    formula: "Selling Price = Cost Price × (1 + Markup / 100) | Markup % = ((Selling Price - Cost) / Cost) × 100",
    explanation: "Markup is the percentage added directly to the wholesale cost price to determine final customer retail pricing.",
    example: {
      title: "Worked Example: ₹800 Wholesale Cost with a 50% Retail Markup",
      inputs: "Cost Price = ₹800 | Desired Markup = 50%",
      steps: [
        "Markup dollar amount = ₹800 × 0.50 = ₹400",
        "Target selling price = ₹800 + ₹400 = ₹1,200",
        "Resulting profit margin = (400 / 1,200) × 100 = 33.33%"
      ],
      summary: "Cost Price = ₹800 | Markup = 50.0% | Retail Price = ₹1,200 | Margin Equivalent = 33.33%"
    },
    metricsText: "A 100% markup (keystone pricing, doubling cost) equals a 50% profit margin on final selling price.",
    useCases: [
      "Retail Wholesale Pricing: Quickly price boutique and retail inventory based on standard keystone markup percentages.",
      "Restaurant Menu Costing: Apply 200% to 300% markups on raw food ingredient costs to cover kitchen overhead.",
      "Custom Manufacturing: Quote client job projects by adding standard labor and materials markups."
    ],
    commonMistakes: [
      "Assuming a 50% markup yields a 50% profit margin (it actually yields a 33.3% margin).",
      "Setting markups without researching market competitor price sensitivity.",
      "Failing to include inbound shipping and import customs duties in base product cost."
    ],
    faqs: [
      { question: "Why is markup always higher than profit margin?", answer: "Because markup divides profit by cost (a smaller denominator), while margin divides profit by selling price (a larger denominator)." },
      { question: "What is keystone pricing?", answer: "A retail pricing strategy where products are priced at exactly double their wholesale cost (a 100% markup, or 50% margin)." },
      { question: "How do I convert a 25% desired margin into markup?", answer: "Markup = Margin / (1 - Margin) = 0.25 / 0.75 = 33.33% markup." }
    ],
    sources: [{ name: "National Retail Federation (NRF)", url: "https://nrf.com" }]
  },

  "freelance-rate-calculator": {
    overview: "Calculates the minimum hourly and daily billable rates needed for freelancers to match target salary goals after factoring unpaid hours, taxes, and expenses.",
    formula: "Hourly Rate = (Target Annual Net Income + Annual Business Expenses + Income Taxes) / Annual Billable Hours",
    explanation: "Annual billable hours accounts for non-billable administrative tasks, marketing, sick days, and unpaid vacations (typically 1,000 hours/year).",
    example: {
      title: "Worked Example: ₹12 Lakh Target Annual Income with ₹2 Lakh Expenses",
      inputs: "Target Take-Home = ₹12,00,000 | Expenses = ₹2,00,000 | Tax Reserve = ₹1,50,000 | Billable Weeks = 46 (25 hrs/wk)",
      steps: [
        "Total revenue required = ₹12,00,000 + ₹2,00,000 + ₹1,50,000 = ₹15,50,000",
        "Total billable hours = 46 weeks × 25 hours/week = 1,150 billable hours/year",
        "Minimum hourly rate = ₹15,50,000 / 1,150 hours = ₹1,348 per hour"
      ],
      summary: "Annual Target = ₹15.5 Lakhs Gross | Billable Hours = 1,150 | Minimum Rate = ₹1,350/hr ($16.20/hr) | Day Rate = ₹10,800"
    },
    metricsText: "Freelancers typically spend only 50% to 60% of their working hours on billable client work; the rest is spent on proposals, invoicing, and marketing.",
    useCases: [
      "Career Transition: Transition from corporate employment to independent freelancing with realistic rate baselines.",
      "Project Quoting: Convert estimated project completion hours into accurate client price proposals.",
      "Retainer Calculations: Establish monthly retainer contracts based on guaranteed billable client hours."
    ],
    commonMistakes: [
      "Dividing annual salary by 2,080 hours (40 hrs × 52 weeks) without subtracting vacation, holidays, and marketing time.",
      "Failing to budget for self-funded health insurance, retirement PF, and hardware upgrades.",
      "Ignoring 18% GST registration obligations once annual turnover crosses ₹20 Lakhs."
    ],
    faqs: [
      { question: "How many hours per week is a freelancer actually billable?", answer: "Most successful full-time freelancers log 20 to 25 billable hours per week; the rest is non-billable overhead." },
      { question: "Should I charge hourly or fixed project rates?", answer: "Value-based fixed pricing is generally better for experienced freelancers; hourly billing protects against scope creep on undefined projects." },
      { question: "How should I account for taxes as an Indian freelancer?", answer: "Under Section 44ADA (Presumptive Taxation), eligible professionals can declare 50% of gross receipts as profit and pay tax on that half." }
    ],
    sources: [{ name: "Freelancers Union", url: "https://www.freelancersunion.org" }]
  },

  "mortgage-calculator": {
    overview: "Estimates monthly home mortgage payments, principal amortisation, and total lifetime interest costs for property purchases.",
    formula: "M = P × [r(1+r)^n] / [(1+r)^n - 1]",
    explanation: "P = Loan balance, r = Monthly interest rate, n = Total number of monthly mortgage payments.",
    example: {
      title: "Worked Example: ₹40 Lakh Mortgage at 8.75% for 20 Years",
      inputs: "Mortgage Amount = ₹40,00,000 | Interest Rate = 8.75% | Term = 20 Years (240 Months)",
      steps: [
        "Monthly interest rate r = 8.75 / 12 / 100 = 0.0072916",
        "Amortisation factor = (1.0072916)^240 = 5.7088",
        "Monthly Mortgage Payment M = ₹35,348 per month"
      ],
      summary: "Principal = ₹40,00,000 | Monthly Payment = ₹35,348 | Total Interest = ₹44,83,520 | Total Cost = ₹84,83,520"
    },
    metricsText: "Over a 20-year term at 8.75%, the total interest paid (₹44.8 Lakhs) exceeds the actual principal amount borrowed (₹40 Lakhs).",
    useCases: [
      "Mortgage Comparison: Evaluate bank quotes across variable loan tenures to balance payment size and interest cost.",
      "Down Payment Impact: See how increasing your down payment by ₹5 Lakhs lowers your monthly commitment.",
      "Amortization Analysis: Track when your payments start contributing more to principal reduction than interest charges."
    ],
    commonMistakes: [
      "Overlooking property taxes, homeowners insurance, and maintenance fees in total monthly housing costs.",
      "Assuming advertised teaser interest rates stay fixed for the entire 20-year term.",
      "Failing to check for reset caps on adjustable-rate mortgages."
    ],
    faqs: [
      { question: "What is an amortization schedule?", answer: "A chronological table showing how each monthly mortgage payment is split between principal reduction and interest fees." },
      { question: "Can I shorten my mortgage term without refinancing?", answer: "Yes, making extra principal payments directly reduces outstanding debt and cuts remaining tenure." },
      { question: "What is Loan-to-Value (LTV)?", answer: "The ratio of the loan amount to the appraised property value; lower LTV (e.g. 70-80%) secures lower interest rates." }
    ],
    sources: [{ name: "Consumer Financial Protection Bureau (CFPB)", url: "https://www.consumerfinance.gov" }]
  },

  "swp-calculator": {
    overview: "Projects monthly cash flow payouts and remaining portfolio corpus for Systematic Withdrawal Plans (SWP) in mutual funds.",
    formula: "Remaining Balance = (Initial Balance - Monthly Withdrawal) × (1 + Monthly Return)",
    explanation: "Simulates regular monthly redemptions from mutual fund investments while remaining capital continues compounding.",
    example: {
      title: "Worked Example: ₹50,00,000 Corpus with ₹35,000 Monthly SWP at 8% Return",
      inputs: "Initial Corpus = ₹50,00,000 | Monthly Withdrawal = ₹35,000 | Expected Return = 8% p.a. | Tenure = 15 Years",
      steps: [
        "Total withdrawal over 15 years = ₹35,00,000 × 180 months = ₹63,00,000",
        "Capital remaining after 15 years of steady withdrawals compounding at 8% = ₹57,84,320"
      ],
      summary: "Invested = ₹50,00,000 | Total Withdrawn = ₹63,00,000 | Remaining Corpus = ₹57,84,320"
    },
    metricsText: "If your monthly withdrawal rate is lower than the portfolio's annual return rate, your principal corpus continues growing indefinitely.",
    useCases: [
      "Retirement Regular Income: Generate tax-efficient monthly income from accumulated mutual fund wealth.",
      "Senior Citizen Cash Flow: Replace traditional bank fixed deposit interest with higher-yielding hybrid fund SWPs.",
      "Post-Tax Efficiency: Benefit from capital gains taxation where only the profit component of each withdrawal is taxed."
    ],
    commonMistakes: [
      "Setting monthly withdrawal amounts higher than realistic long-term portfolio returns, causing capital depletion.",
      "Withdrawing exclusively from volatile small-cap funds during severe bear market drawdowns.",
      "Ignoring capital gains tax implications on redeemed mutual fund units."
    ],
    faqs: [
      { question: "Why is SWP more tax-efficient than dividend plans or FD interest?", answer: "Because each SWP instalment consists partly of original capital and partly of gains; tax is paid only on the capital gains portion." },
      { question: "Can the SWP amount be modified after starting?", answer: "Yes, you can increase, decrease, pause, or terminate your monthly SWP instructions at any time." },
      { question: "What mutual funds are best suited for SWP?", answer: "Conservative hybrid funds, equity savings funds, or balanced advantage funds that offer capital stability with modest growth." }
    ],
    sources: [{ name: "Association of Mutual Funds in India (AMFI)", url: "https://www.amfiindia.com" }]
  },

  "step-up-sip-calculator": {
    overview: "Calculates mutual fund maturity wealth when regular monthly SIP contributions increase by a fixed percentage or amount every year.",
    formula: "Corpus = Sum over years of: Year_k_SIP × Compound_Growth_Factor",
    explanation: "Simulates annual top-ups (e.g. 10% increase every 12 months) aligned with career salary increments.",
    example: {
      title: "Worked Example: ₹10,000 Starting SIP with 10% Annual Step-Up at 12% for 15 Years",
      inputs: "Starting SIP = ₹10,00,00? No, ₹10,000 | Step-Up = 10% per year | Expected Return = 12% | Tenure = 15 Years",
      steps: [
        "Year 1: ₹10,000/mo; Year 2: ₹11,000/mo; Year 5: ₹14,641/mo; Year 15: ₹37,975/mo",
        "Total invested capital with annual step-ups = ₹38,12,680",
        "Compounded final maturity corpus = ₹98,42,150 (compared to ₹50.45 Lakhs for a flat ₹10k SIP)"
      ],
      summary: "Total Invested = ₹38.13 Lakhs | Final Maturity = ₹98.42 Lakhs | Extra Wealth vs Flat SIP = +₹47.97 Lakhs"
    },
    metricsText: "Stepping up your monthly SIP by just 10% each year nearly doubles your final maturity corpus compared to a flat SIP over 15 years.",
    useCases: [
      "Career Growth Alignment: Automatically increase mutual fund contributions as annual salary appraisals arrive.",
      "Early Retirement Acceleration: Build wealth significantly faster without feeling immediate cash flow pinch.",
      "Inflation Countering: Prevent inflation from reducing the real purchasing power of your monthly investment amounts."
    ],
    commonMistakes: [
      "Assuming a flat SIP is sufficient over 20 years while lifestyle and income scale upward.",
      "Setting an aggressive step-up rate (e.g. 20%) that becomes unsustainable during job transitions.",
      "Stopping the step-up feature during temporary market corrections instead of purchasing more units."
    ],
    faqs: [
      { question: "How does a Step-Up SIP work?", answer: "Your fund house automatically increments your monthly debit amount by a specified percentage (e.g. 10%) or fixed sum (e.g. ₹1,000) every 12 months." },
      { question: "Can I cap the maximum monthly contribution in a Step-Up SIP?", answer: "Yes, most mutual fund platforms let you set a maximum ceiling amount beyond which the SIP continues flat." },
      { question: "What is the recommended annual step-up percentage?", answer: "An annual step-up of 5% to 10% matches standard corporate salary increments comfortably." }
    ],
    sources: [{ name: "Mutual Fund Utility (MFU India)", url: "https://www.mfuindia.com" }]
  },

  "sip-lumpsum-combined-calculator": {
    overview: "Projects aggregate investment returns when combining an initial one-time lumpsum deposit with ongoing monthly SIP contributions.",
    formula: "Total Corpus = (Lumpsum × (1 + r)^n) + (Monthly SIP Compounding Formula)",
    explanation: "Models dual wealth-building strategies: deploying existing savings immediately while maintaining monthly salary investments.",
    example: {
      title: "Worked Example: ₹2 Lakh Lumpsum + ₹5,000 Monthly SIP for 10 Years at 12%",
      inputs: "Lumpsum = ₹2,00,000 | Monthly SIP = ₹5,000 | Return = 12% p.a. | Tenure = 10 Years",
      steps: [
        "Lumpsum component growth: ₹2,00,000 × (1.12)^10 = ₹6,21,170",
        "SIP component growth: ₹5,000/mo compounding at 12% over 10 years = ₹11,61,695",
        "Combined portfolio value = ₹6,21,170 + ₹11,61,695 = ₹17,82,865"
      ],
      summary: "Total Invested = ₹8,00,000 | Lumpsum Growth = ₹6.21 Lakhs | SIP Growth = ₹11.62 Lakhs | Total Corpus = ₹17.83 Lakhs"
    },
    metricsText: "Combining lumpsum capital with regular SIP balances the time advantage of lump sums with the volatility mitigation of monthly averaging.",
    useCases: [
      "Windfall + Salary Deployment: Invest an inheritance or bonus upfront while continuing monthly salary SIPs.",
      "Aggressive Goal Funding: Accelerate wealth accumulation for down payments or retirement milestones.",
      "Portfolio Consolidation: Model total mutual fund growth across both past savings and ongoing contributions."
    ],
    commonMistakes: [
      "Holding large lump sums in savings accounts while waiting for a 'perfect market crash' to start investing.",
      "Treating both components as separate portfolios rather than balancing asset allocation across the total sum.",
      "Overestimating annual returns and ignoring market drawdown cycles."
    ],
    faqs: [
      { question: "Should I invest my lumpsum first or start the SIP first?", answer: "Starting both simultaneously puts capital to work immediately while building disciplined monthly savings habits." },
      { question: "How does this compare to an STP?", answer: "In a combined strategy, the lumpsum goes directly into equity; in an STP, the lumpsum stays in debt and transfers to equity gradually." },
      { question: "What is the tax treatment of the combined portfolio?", answer: "Each redemption lot is taxed individually based on whether its holding period exceeds 12 months (LTCG at 12.5% above ₹1.25L exemption)." }
    ],
    sources: [{ name: "Association of Mutual Funds in India", url: "https://www.amfiindia.com" }]
  },

  "payback-period-calculator": {
    overview: "Calculates the time required in years and months for an investment or capital project to generate cumulative cash flows equal to its initial cost.",
    formula: "Payback Period = Initial Investment / Annual Cash Inflow (or cumulative cash flow break-even point)",
    explanation: "Measures capital liquidity and investment risk; shorter payback periods represent faster capital recovery.",
    example: {
      title: "Worked Example: ₹5,00,000 Commercial Solar Installation with ₹1,20,000 Annual Savings",
      inputs: "Initial Cost = ₹5,00,000 | Annual Net Savings = ₹1,20,000 per year",
      steps: [
        "Payback period = ₹5,00,000 / ₹1,20,000 = 4.167 years",
        "0.167 years × 12 months = 2 months",
        "Exact payback timeline = 4 Years and 2 Months"
      ],
      summary: "Initial Cost = ₹5,00,000 | Annual Recovery = ₹1,20,000 | Payback Period = 4 Years, 2 Months"
    },
    metricsText: "Payback period measures liquidity risk, but ignores cash flows that occur after the break-even point and the time value of money.",
    useCases: [
      "Equipment Purchases: Evaluate commercial machinery investments based on operational labor savings.",
      "Energy Efficiency Audits: Calculate payback timelines on rooftop solar panels, heat pumps, or LED retrofits.",
      "Franchise Feasibility: Assess how many years of franchise operation are required to recover initial setup fees."
    ],
    commonMistakes: [
      "Failing to discount future cash flows for inflation (discounted payback period method).",
      "Rejecting highly profitable long-term projects simply because initial payback exceeds 3-4 years.",
      "Omitting annual ongoing maintenance and insurance costs from net annual cash inflows."
    ],
    faqs: [
      { question: "What is the difference between simple payback and discounted payback?", answer: "Simple payback ignores the time value of money; discounted payback discounts future cash flows at the firm's cost of capital." },
      { question: "What is a good payback period for business investments?", answer: "Most businesses target payback periods between 2 and 5 years, depending on technology obsolescence risk." },
      { question: "Why do financial analysts prefer NPV over payback period?", answer: "Because Net Present Value (NPV) accounts for all project cash flows throughout its entire economic life." }
    ],
    sources: [{ name: "Corporate Finance Institute", url: "https://corporatefinanceinstitute.com" }]
  },

  "mortgage-refinance-calculator": {
    overview: "Calculates monthly EMI savings, total interest saved, and break-even timelines when transferring a home loan to a lower interest rate lender.",
    formula: "Monthly Savings = Old EMI - New EMI | Break-Even Months = Refinancing Costs / Monthly Savings",
    explanation: "Accounts for processing fees, valuation charges, legal stamp fees, and foreclosure terms against cumulative interest savings.",
    example: {
      title: "Worked Example: Refinancing ₹35 Lakh Loan from 9.25% to 8.40% with 18 Years Left",
      inputs: "Loan Balance = ₹35,00,000 | Current Rate = 9.25% | New Rate = 8.40% | Remaining Term = 216 Months | Switching Cost = ₹18,000",
      steps: [
        "Current Monthly EMI at 9.25% = ₹33,745 per month",
        "New Monthly EMI at 8.40% = ₹31,880 per month",
        "Monthly cash savings = ₹33,745 - ₹31,880 = ₹1,865 per month",
        "Break-even timeline on ₹18,000 fees = ₹18,000 / ₹1,865 = 9.6 months"
      ],
      summary: "Monthly Savings = ₹1,865/mo | Lifetime Interest Saved = ₹3,84,840 | Break-Even Period = 10 Months"
    },
    metricsText: "A rate reduction of just 0.75% on a large home loan saves several lakhs of rupees over the remaining tenure.",
    useCases: [
      "Home Loan Balance Transfer: Determine if moving a loan to another commercial bank offsets switching processing charges.",
      "Tenure Reset Negotiation: Use competitive refinance quotes to negotiate an internal rate reduction with your existing lender.",
      "Cash-Out Refinancing: Evaluate equity cash-out options to fund major home renovations."
    ],
    commonMistakes: [
      "Refinancing near the end of a loan tenure when remaining interest obligations are too small to justify switching costs.",
      "Extending remaining tenure back to 20 or 30 years, which lowers monthly EMI but increases total lifetime interest.",
      "Overlooking hidden administrative fees, mortgage deed registration charges, and MODT stamp duty."
    ],
    faqs: [
      { question: "Can I reduce my interest rate without switching banks?", answer: "Yes, most banks offer an internal rate conversion (switching from an old benchmark to current RBLR) for a small processing fee (₹1,000 to ₹5,000)." },
      { question: "What is MODT in home loan balance transfer?", answer: "Memorandum of Deposit of Title Deed: a statutory stamp duty (0.1% to 0.5%) charged by state governments when registering mortgages." },
      { question: "When is refinancing not recommended?", answer: "If you plan to sell the property or close the loan within 1-2 years, switching fees will outweigh interest savings." }
    ],
    sources: [{ name: "National Housing Bank Balance Transfer Guidelines", url: "https://nhb.org.in" }]
  }
};

