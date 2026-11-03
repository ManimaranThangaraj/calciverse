// Master dataset containing clean, domain-authentic tool guides for all 143 tools
// Compliant with Google AdSense Quality & Editorial Guidelines
export const toolGuides = {
  "emi-calculator": {
    "title": "EMI Calculator — FINANCE Guide & Formula",
    "overview": "Computes the equated monthly instalment required to amortise a home, car, or personal loan under reducing-balance interest rates.",
    "formula": "E = P × r × (1 + r)^n / ((1 + r)^n - 1)",
    "explanation": "P = Principal loan amount, r = Monthly interest rate (Annual rate / 12 / 100), n = Total tenure in months.",
    "example": {
      "title": "Worked Example: ₹10 Lakh Home Loan at 8.5% for 15 Years",
      "inputs": "Principal = ₹10,00,000 | Interest Rate = 8.5% p.a. | Tenure = 180 Months",
      "steps": [
        "Monthly interest rate r = 8.5 / 12 / 100 = 0.0070833",
        "Compounding factor (1.0070833)^180 = 3.5598",
        "Monthly EMI E = ₹9,847 per month"
      ],
      "summary": "Monthly EMI = ₹9,847 | Total Interest = ₹7,72,540 | Total Repayment = ₹17,72,540"
    },
    "metricsText": "In the first 3 years of a 15-year loan, over 65% of your monthly payment goes toward interest rather than principal reduction.",
    "useCases": [
      "Home Loan Planning: Compare monthly outgo across 15, 20, and 30-year loan tenures.",
      "Auto Financing: Verify dealership loan quotes against true reducing-balance calculations.",
      "Refinancing: Determine if balance transfer savings offset processing and valuation fees."
    ],
    "commonMistakes": [
      "Confusing flat interest rates with reducing-balance interest rates.",
      "Ignoring mandatory upfront loan processing fees and property valuation costs.",
      "Failing to account for interest rate reset cycles on floating-rate loans."
    ],
    "faqs": [
      {
        "question": "How does prepaying home loan principal affect EMI?",
        "answer": "Prepaying principal cuts your outstanding balance directly. You can choose to reduce your monthly EMI amount or keep the EMI constant to shorten your overall tenure."
      },
      {
        "question": "What is the difference between fixed and floating loan rates?",
        "answer": "Fixed rates stay constant throughout the tenure, whereas floating rates fluctuate according to the lender's benchmark repo rate (RBLR)."
      },
      {
        "question": "Are processing fees included in the monthly EMI?",
        "answer": "No. Administrative fees and GST are paid upfront at the time of loan sanction."
      }
    ],
    "sources": [
      {
        "name": "Reserve Bank of India (RBI) Lending Guidelines",
        "url": "https://www.rbi.org.in"
      }
    ]
  },
  "sip-calculator": {
    "title": "SIP Calculator — FINANCE Guide & Formula",
    "overview": "Projects the future maturity corpus of recurring monthly mutual fund investments using compound interest and rupee-cost averaging.",
    "formula": "M = P × [((1 + i)^n - 1) / i] × (1 + i)",
    "explanation": "M = Final maturity corpus, P = Monthly instalment, i = Periodic monthly return rate (Annual return / 12 / 100), n = Total months.",
    "example": {
      "title": "Worked Example: ₹5,000 Monthly SIP for 10 Years at 12%",
      "inputs": "Monthly SIP = ₹5,000 | Expected Return = 12% p.a. | Tenure = 10 Years (120 Months)",
      "steps": [
        "Monthly periodic return i = 12 / 12 / 100 = 0.01",
        "Growth multiplier = ((1.01)^120 - 1) / 0.01 × 1.01 = 232.339",
        "Maturity value = ₹5,000 × 232.339 = ₹11,61,695"
      ],
      "summary": "Invested Capital = ₹6,00,000 | Wealth Gained = ₹5,61,695 | Expected Maturity = ₹11,61,695"
    },
    "metricsText": "Compounding returns accelerate dramatically after year 7; doubling investment tenure from 10 to 20 years quadruples total returns.",
    "useCases": [
      "Retirement Nest Egg: Calculate monthly equity contributions required to build a retirement corpus.",
      "Higher Education Fund: Project maturity capital for children's future university tuition fees.",
      "Wealth Building: Harness rupee-cost averaging to eliminate the need for market timing."
    ],
    "commonMistakes": [
      "Assuming mutual fund returns are guaranteed rather than market-linked.",
      "Pausing or stopping monthly SIP instalments during temporary market corrections.",
      "Forgetting to adjust projected maturity values for long-term inflation and LTCG tax."
    ],
    "faqs": [
      {
        "question": "What is rupee-cost averaging in SIP?",
        "answer": "When equity NAVs fall, your fixed monthly instalment automatically buys more units; when NAVs rise, fewer units are purchased, lowering average acquisition cost."
      },
      {
        "question": "Can I increase my SIP amount as my income grows?",
        "answer": "Yes, using a Step-Up SIP option, you can automatically boost contributions by 5% to 10% each year."
      },
      {
        "question": "Is SIP tax-free in India?",
        "answer": "Equity mutual fund gains above ₹1.25 Lakh per financial year are subject to 12.5% Long-Term Capital Gains (LTCG) tax."
      }
    ],
    "sources": [
      {
        "name": "Association of Mutual Funds in India (AMFI)",
        "url": "https://www.amfiindia.com"
      }
    ]
  },
  "gst-calculator": {
    "title": "GST Calculator — FINANCE Guide & Formula",
    "overview": "Calculates Goods and Services Tax additions and reverse-extracts net base amounts from tax-inclusive retail invoices across standard statutory tax slabs.",
    "formula": "GST Amount = Net Price × (Rate / 100) | Net Base = Gross Amount × 100 / (100 + Rate)",
    "explanation": "Exclusive mode adds tax onto net price. Inclusive mode extracts embedded GST component from MRP.",
    "example": {
      "title": "Worked Example: Extracting 18% GST from ₹11,800 Invoice",
      "inputs": "Gross Amount = ₹11,800 | GST Rate = 18% (Inclusive)",
      "steps": [
        "Net base price = 11,800 × 100 / (100 + 18) = ₹10,000",
        "Total GST component = ₹11,800 - ₹10,000 = ₹1,800",
        "CGST (9%) = ₹900 | SGST (9%) = ₹900"
      ],
      "summary": "Base Price = ₹10,000 | Total GST = ₹1,800 | Gross Total = ₹11,800"
    },
    "metricsText": "Directly subtracting 18% from a gross price of ₹11,800 gives ₹2,124, which overstates tax liability by ₹324.",
    "useCases": [
      "B2B Billing: Generate accurate tax breakdowns between CGST, SGST, and IGST for invoices.",
      "Input Tax Credit (ITC): Reconcile input tax paid on supplier purchases for GST filings.",
      "Retail Pricing: Determine wholesale product pricing before adding consumer GST slabs."
    ],
    "commonMistakes": [
      "Applying percentage subtraction directly to MRP instead of the reverse GST formula.",
      "Billing intra-state supplies as IGST instead of splitting into CGST and SGST.",
      "Applying outdated slab rates following GST Council rate rationalization."
    ],
    "faqs": [
      {
        "question": "When do I charge IGST versus CGST and SGST?",
        "answer": "Charge IGST on inter-state sales and imports; split into equal CGST and SGST for sales within the same state."
      },
      {
        "question": "What are the primary GST slabs in India?",
        "answer": "Standard goods and services fall under 0%, 5%, 12%, 18%, and 28% slabs, with special 3% rates on gold."
      },
      {
        "question": "What is Input Tax Credit (ITC)?",
        "answer": "ITC lets businesses offset GST paid on purchase inputs against the GST collected on sales, preventing cascading taxes."
      }
    ],
    "sources": [
      {
        "name": "Goods and Services Tax Network (GSTN)",
        "url": "https://www.gst.gov.in"
      }
    ]
  },
  "fd-calculator": {
    "title": "FD Calculator — FINANCE Guide & Formula",
    "overview": "Calculates the maturity corpus and interest income on bank fixed deposits across quarterly, monthly, and cumulative compounding intervals.",
    "formula": "A = P × (1 + r/n)^(n×t)",
    "explanation": "A = Maturity amount, P = Principal deposit, r = Annual interest rate (decimal), n = Compounding frequency per year (4 for quarterly), t = Tenure in years.",
    "example": {
      "title": "Worked Example: ₹2,00,000 FD for 3 Years at 7.25% Quarterly Compounding",
      "inputs": "Principal = ₹2,00,000 | Rate = 7.25% p.a. | Tenure = 3 Years (Quarterly Compounding)",
      "steps": [
        "Periodic rate = 0.0725 / 4 = 0.018125",
        "Compounding cycles = 4 × 3 = 12 quarters",
        "Maturity A = ₹2,00,000 × (1.018125)^12 = ₹2,47,764"
      ],
      "summary": "Principal = ₹2,00,000 | Total Interest = ₹47,764 | Maturity Value = ₹2,47,764"
    },
    "metricsText": "Indian commercial banks compound FD interest quarterly; this produces a higher annualised effective yield than simple annual compounding.",
    "useCases": [
      "Capital Preservation: Secure guaranteed fixed returns for emergency fund reserves.",
      "Senior Citizen Income: Calculate enhanced interest yields (typically 0.50% higher) for retirees.",
      "Tax Planning: Estimate annual TDS deduction thresholds on accrued bank interest."
    ],
    "commonMistakes": [
      "Assuming FD interest is compounded monthly rather than quarterly in standard Indian banks.",
      "Forgetting that FD interest is fully taxable under your slab rate, requiring TDS if interest exceeds ₹40,000.",
      "Ignoring early withdrawal penalty fees (typically 0.5% to 1% reduction in interest rate)."
    ],
    "faqs": [
      {
        "question": "Is FD interest taxed every year or at maturity?",
        "answer": "Interest is taxed on an accrual basis each financial year, and banks deduct 10% TDS if interest exceeds threshold limits."
      },
      {
        "question": "What is Form 15G / 15H?",
        "answer": "Forms submitted by individuals to avoid TDS deduction if their total annual taxable income is below the exemption limit."
      },
      {
        "question": "Can I take a loan against my Fixed Deposit?",
        "answer": "Yes, banks usually offer overdraft loans up to 90% of your FD value at 1% to 2% above the FD interest rate."
      }
    ],
    "sources": [
      {
        "name": "Reserve Bank of India Master Direction on Deposits",
        "url": "https://www.rbi.org.in"
      }
    ]
  },
  "loan-calculator": {
    "title": "Loan Calculator — FINANCE Guide & Formula",
    "overview": "Evaluates comprehensive loan payment schedules, total interest costs, and payoff timelines across personal, education, and auto credit.",
    "formula": "Total Repayment = EMI × Total Months | Total Interest = Total Repayment - Principal",
    "explanation": "Computes periodic amortisation and cumulative interest paid over the life of credit agreements.",
    "example": {
      "title": "Worked Example: ₹5 Lakh Personal Loan at 11% for 4 Years",
      "inputs": "Principal = ₹5,00,000 | Interest Rate = 11% p.a. | Tenure = 48 Months",
      "steps": [
        "Monthly EMI computed via reducing balance = ₹12,933 per month",
        "Total repayment = ₹12,933 × 48 = ₹6,20,784",
        "Total interest cost = ₹6,20,784 - ₹5,00,000 = ₹1,20,784"
      ],
      "summary": "Monthly EMI = ₹12,933 | Total Interest = ₹1,20,784 | Total Outflow = ₹6,20,784"
    },
    "metricsText": "Extending loan tenure lowers monthly payments but significantly increases cumulative interest paid to the lender.",
    "useCases": [
      "Personal Loan Comparison: Compare offers from different banks to find the lowest effective borrowing cost.",
      "Tenure Optimization: Find the sweet spot between affordable monthly instalments and minimum lifetime interest.",
      "Debt Consolidation: Evaluate if merging multiple small loans into a single low-interest credit line saves money."
    ],
    "commonMistakes": [
      "Focusing only on monthly EMI size rather than total interest repaid over time.",
      "Overlooking foreclosure and part-payment penalty clauses in fixed-rate personal loans.",
      "Not factoring in loan insurance premiums bundled into sanctioned loan amounts."
    ],
    "faqs": [
      {
        "question": "What is the difference between secured and unsecured loans?",
        "answer": "Secured loans (home, car) require collateral and carry lower rates; unsecured loans (personal, credit card) require no collateral and have higher rates."
      },
      {
        "question": "Can I close a personal loan before tenure?",
        "answer": "Yes, though lenders may charge a prepayment foreclosure fee (0% to 5%) depending on loan terms and RBI rules."
      },
      {
        "question": "What is an amortization schedule?",
        "answer": "A monthly table showing how each instalment is divided between principal reduction and interest charges."
      }
    ],
    "sources": [
      {
        "name": "Indian Banks Association (IBA)",
        "url": "https://www.iba.org.in"
      }
    ]
  },
  "income-tax-calculator": {
    "title": "Income Tax Calculator — FINANCE Guide & Formula",
    "overview": "Estimates annual tax liability and compares tax deductions under both the New Tax Regime (Section 115BAC) and Old Tax Regime for FY 2026-27.",
    "formula": "Tax Payable = Slab Rates(Taxable Income) - Section 87A Rebate + 4% Cess",
    "explanation": "Taxable income equals gross CTC minus permissible deductions (80C, 80D, HRA, Standard Deduction ₹75,000).",
    "example": {
      "title": "Worked Example: ₹12 Lakh Gross Salary under New Tax Regime",
      "inputs": "Gross CTC = ₹12,00,000 | Standard Deduction = ₹75,000",
      "steps": [
        "Taxable salary = ₹12,00,000 - ₹75,00,000 = ₹11,25,000",
        "Tax on ₹3L–₹7L (5%) = ₹20,000; ₹7L–₹10L (10%) = ₹30,000; ₹10L–₹11.25L (15%) = ₹18,750",
        "Base tax = ₹68,750 + 4% Cess (₹2,750) = ₹71,500"
      ],
      "summary": "Net Tax Payable under New Regime = ₹71,500 | Effective Tax Rate = 5.96%"
    },
    "metricsText": "Under the New Tax Regime, taxable incomes up to ₹7.75 Lakhs for salaried individuals pay zero tax thanks to the ₹75,000 standard deduction and Section 87A rebate.",
    "useCases": [
      "Annual Tax Planning: Decide whether to opt for the Old or New Tax Regime before declaration deadlines.",
      "Salary Structuring: Evaluate tax savings from employer NPS contributions under Section 80CCD(2).",
      "Advance Tax: Estimate quarterly advance tax instalments to prevent Section 234B/234C interest penalties."
    ],
    "commonMistakes": [
      "Assuming Section 80C and 80D deductions can be claimed under the New Tax Regime.",
      "Overlooking the ₹75,000 standard deduction increase for salaried individuals.",
      "Forgetting to include 4% Health and Education Cess on base tax calculations."
    ],
    "faqs": [
      {
        "question": "Can salaried employees switch regimes every year?",
        "answer": "Yes, salaried individuals can choose between Old and New regimes annually when filing their ITR."
      },
      {
        "question": "What is the deduction threshold where Old Regime beats New Regime?",
        "answer": "For incomes around ₹15 Lakhs, total eligible deductions must exceed roughly ₹3.75 Lakhs to beat the New Regime."
      },
      {
        "question": "Is employer NPS tax-deductible in the New Regime?",
        "answer": "Yes, employer contributions up to 14% of basic pay under Section 80CCD(2) are deductible in both regimes."
      }
    ],
    "sources": [
      {
        "name": "Income Tax Department of India",
        "url": "https://www.incometax.gov.in"
      }
    ]
  },
  "simple-interest-calculator": {
    "title": "Simple Interest Calculator — FINANCE Guide & Formula",
    "overview": "Computes flat-rate non-compounding interest on principal loans, bonds, short-term promissory notes, and informal credit.",
    "formula": "SI = (P × R × T) / 100 | Maturity = P + SI",
    "explanation": "P = Principal sum, R = Annual interest rate %, T = Time period in years.",
    "example": {
      "title": "Worked Example: ₹50,000 at 8% Simple Interest for 3 Years",
      "inputs": "Principal = ₹50,000 | Rate = 8% p.a. | Time = 3 Years",
      "steps": [
        "Interest calculation = (50,000 × 8 × 3) / 100",
        "Total interest earned = ₹12,000",
        "Total maturity sum = ₹50,000 + ₹12,000 = ₹62,000"
      ],
      "summary": "Principal = ₹50,000 | Simple Interest = ₹12,000 | Maturity Amount = ₹62,000"
    },
    "metricsText": "Unlike compound interest, simple interest generates an identical fixed amount of interest every single year.",
    "useCases": [
      "Informal Borrowing: Calculate flat interest between family, friends, or private lending agreements.",
      "Government Bonds: Compute coupon payouts on fixed-rate treasury securities.",
      "Late Payment Penalties: Assess statutory interest charges on delayed commercial invoices."
    ],
    "commonMistakes": [
      "Applying simple interest formulas to bank savings or fixed deposits that actually compound.",
      "Entering time duration in months without dividing by 12.",
      "Failing to convert daily interest rates into annual percentages."
    ],
    "faqs": [
      {
        "question": "Where is simple interest still used in modern banking?",
        "answer": "It is used for short-term treasury bills, certain government savings schemes, and penalty interest on overdue payments."
      },
      {
        "question": "Why does simple interest produce lower returns than compound interest?",
        "answer": "Because earned interest does not get reinvested to earn additional interest in subsequent periods."
      },
      {
        "question": "How do I calculate simple interest for 6 months?",
        "answer": "Input time T as 0.5 years (6 / 12) in the formula."
      }
    ],
    "sources": [
      {
        "name": "National Institute of Securities Markets (NISM)",
        "url": "https://www.nism.ac.in"
      }
    ]
  },
  "compound-interest-calculator": {
    "title": "Compound Interest Calculator — FINANCE Guide & Formula",
    "overview": "Models exponential wealth growth where accumulated interest earns interest across annual, semi-annual, quarterly, or monthly compounding cycles.",
    "formula": "A = P × (1 + r/n)^(n×t) | CI = A - P",
    "explanation": "P = Principal investment, r = Annual interest rate (decimal), n = Compounding frequency per year, t = Duration in years.",
    "example": {
      "title": "Worked Example: ₹1,00,000 at 10% Compounded Annually for 10 Years",
      "inputs": "Principal = ₹1,00,000 | Rate = 10% p.a. | Tenure = 10 Years (Compounded Annually)",
      "steps": [
        "Compounding factor = (1 + 0.10)^10 = (1.10)^10 = 2.5937",
        "Total maturity corpus A = ₹1,00,000 × 2.5937 = ₹2,59,374",
        "Compound interest generated = ₹2,59,374 - ₹1,00,000 = ₹1,59,374"
      ],
      "summary": "Invested = ₹1,00,000 | Total Growth = ₹1,59,374 | Final Corpus = ₹2,59,374"
    },
    "metricsText": "Compounding frequency directly boosts yield: ₹1 Lakh at 10% compounded daily grows to ₹2,71,791 compared to ₹2,59,374 annually.",
    "useCases": [
      "Long-Term Wealth Projections: See how savings accounts, PPF, and reinvestment bonds grow over 10-30 years.",
      "Inflation Erosion Analysis: Calculate how purchasing power diminishes over time due to compounding inflation.",
      "Rule of 72 Planning: Estimate how many years it takes to double your initial capital (72 / rate)."
    ],
    "commonMistakes": [
      "Confusing nominal quoted rate with effective annual yield (APY).",
      "Assuming compounding cycles are always yearly when many investments compound quarterly.",
      "Underestimating the compounding impact of regular annual fees or fund expense ratios."
    ],
    "faqs": [
      {
        "question": "What is the Rule of 72?",
        "answer": "A quick mental rule to estimate doubling time: divide 72 by the annual return rate (e.g. 72 / 12% = 6 years to double)."
      },
      {
        "question": "Does more frequent compounding always give higher returns?",
        "answer": "Yes, monthly or daily compounding produces slightly higher effective returns than annual compounding at the same rate."
      },
      {
        "question": "What is continuous compounding?",
        "answer": "The theoretical limit where interest compounds infinitely often, calculated using Euler's number: A = P × e^(rt)."
      }
    ],
    "sources": [
      {
        "name": "Financial Industry Regulatory Authority (FINRA)",
        "url": "https://www.finra.org"
      }
    ]
  },
  "rd-calculator": {
    "title": "RD Calculator — FINANCE Guide & Formula",
    "overview": "Projects the final maturity payout of monthly recurring deposits in banks and post offices under quarterly compounding rules.",
    "formula": "M = P × n + P × n × (n + 1) / (2 × 12) × (r / 100)",
    "explanation": "P = Monthly instalment, n = Total months, r = Annual interest rate %.",
    "example": {
      "title": "Worked Example: ₹5,000 Monthly RD for 3 Years at 7% p.a.",
      "inputs": "Monthly Deposit = ₹5,00,000? No, ₹5,000 | Rate = 7% p.a. | Tenure = 36 Months",
      "steps": [
        "Total capital deposited = ₹5,000 × 36 = ₹1,80,000",
        "Quarterly compounding interest evaluation across instalments",
        "Maturity value = ₹2,01,148"
      ],
      "summary": "Total Deposited = ₹1,80,000 | Interest Earned = ₹21,148 | Maturity Value = ₹2,01,148"
    },
    "metricsText": "Because earlier instalments compound for longer than later instalments, total interest on an RD is lower than placing the full lump sum upfront.",
    "useCases": [
      "Disciplined Savings: Build fixed capital from monthly salary without taking equity market risks.",
      "Short-Term Goals: Save for annual insurance premiums, property taxes, or vacation travel expenses.",
      "Post Office RD: Evaluate government small savings RD schemes with guaranteed sovereign security."
    ],
    "commonMistakes": [
      "Expecting total interest equal to an FD of the same cumulative deposited amount.",
      "Missing monthly payment due dates, which triggers bank late penalty fees.",
      "Failing to report accrued RD interest in annual income tax returns."
    ],
    "faqs": [
      {
        "question": "Is RD interest taxable in India?",
        "answer": "Yes, RD interest is taxable under 'Income from Other Sources' at your applicable slab rate."
      },
      {
        "question": "What happens if I miss an RD instalment?",
        "answer": "Banks charge a nominal penalty fee (usually ₹1 to ₹2 per ₹100 of instalment) for late payments."
      },
      {
        "question": "Can I withdraw an RD prematurely?",
        "answer": "Yes, but banks deduct a premature penalty (typically 1% reduction in the applicable interest rate)."
      }
    ],
    "sources": [
      {
        "name": "India Post Small Savings Schemes",
        "url": "https://www.indiapost.gov.in"
      }
    ]
  },
  "ppf-calculator": {
    "title": "PPF Calculator — FINANCE Guide & Formula",
    "overview": "Calculates the tax-free maturity corpus of Public Provident Fund (PPF) accounts over the statutory 15-year lock-in period at current government rates.",
    "formula": "F = P × [({(1 + i)^n} - 1) / i] × (1 + i)",
    "explanation": "P = Annual investment (up to ₹1.5 Lakhs), i = Annual PPF interest rate (currently 7.1%), n = Tenure in years (15 years minimum).",
    "example": {
      "title": "Worked Example: Max ₹1.5 Lakh Annual PPF for 15 Years at 7.1%",
      "inputs": "Annual Deposit = ₹1,50,000 | Interest Rate = 7.1% p.a. | Tenure = 15 Years",
      "steps": [
        "Total invested capital = ₹1,50,000 × 15 = ₹22,50,000",
        "Annual compounding interest accrual over 15 years",
        "Final maturity corpus = ₹40,68,209"
      ],
      "summary": "Total Invested = ₹22,50,000 | Tax-Free Interest = ₹18,18,209 | Final Corpus = ₹40,68,209"
    },
    "metricsText": "PPF enjoys sovereign EEE (Exempt-Exempt-Exempt) tax status: investment, accrued interest, and maturity withdrawal are 100% tax-free.",
    "useCases": [
      "Retirement Foundation: Build risk-free, sovereign-backed retirement wealth with zero tax liability.",
      "Section 80C Deductions: Maximize the annual ₹1.5 Lakh tax exemption under the Old Tax Regime.",
      "Tenure Extension: Extend PPF in 5-year blocks after 15 years with or without fresh contributions."
    ],
    "commonMistakes": [
      "Depositing after the 5th of the month, missing that month's interest credit.",
      "Depositing more than ₹1.5 Lakh in a financial year (excess amount earns 0% interest).",
      "Closing the account before 15 years without qualifying under premature closure rules."
    ],
    "faqs": [
      {
        "question": "When should I deposit money in my PPF account each month?",
        "answer": "Deposit between the 1st and 5th of the month, as interest is computed on the minimum balance between the 5th and month-end."
      },
      {
        "question": "Can I extend my PPF account after 15 years?",
        "answer": "Yes, you can extend in 5-year blocks indefinitely, either with fresh contributions or without."
      },
      {
        "question": "Can I take a loan against my PPF balance?",
        "answer": "Yes, loans are available from the 3rd to 6th financial year at 1% interest above the PPF interest rate."
      }
    ],
    "sources": [
      {
        "name": "National Savings Institute (Ministry of Finance)",
        "url": "https://www.nsiindia.gov.in"
      }
    ]
  },
  "nps-calculator": {
    "title": "NPS Calculator — FINANCE Guide & Formula",
    "overview": "Estimates retirement pension wealth and monthly annuity payouts accumulated through Tier-1 National Pension System contributions.",
    "formula": "Corpus = P × [((1 + r)^n - 1) / r] × (1 + r) | Annuity = 40% of Corpus × Annuity_Rate",
    "explanation": "P = Monthly contribution, r = Expected blended annual return (equity + debt), n = Months until age 60.",
    "example": {
      "title": "Worked Example: ₹10,000 Monthly NPS for 25 Years at 10% Return",
      "inputs": "Monthly Deposit = ₹10,000 | Expected Return = 10% p.a. | Tenure = 25 Years (300 Months)",
      "steps": [
        "Total principal invested = ₹10,000 × 300 = ₹30,00,000",
        "Accumulated retirement corpus at age 60 = ₹1,33,78,903",
        "Lump-sum tax-free withdrawal (60%) = ₹80,27,342 | Annuity purchase (40%) = ₹53,51,561"
      ],
      "summary": "Total Corpus = ₹1.34 Crores | Lump-Sum Payout = ₹80.27 Lakhs | Monthly Pension (at 6% annuity) = ₹26,758"
    },
    "metricsText": "Under Section 80CCD(1B), investing in NPS provides an exclusive additional ₹50,000 income tax deduction over and above Section 80C limits.",
    "useCases": [
      "Pillar Retirement Planning: Create a guaranteed lifelong monthly pension post-retirement.",
      "Corporate NPS Optimization: Utilize employer contributions up to 14% of basic pay under Section 80CCD(2).",
      "Asset Allocation Rebalancing: Combine equity schemes (Scheme E) with corporate and government bonds (Scheme C & G)."
    ],
    "commonMistakes": [
      "Assuming the entire 100% NPS corpus can be withdrawn as cash at retirement without annuity mandate.",
      "Choosing ultra-conservative debt funds early in career when equity allocation offers superior growth.",
      "Ignoring that annuity pension payouts are taxable under standard income tax slab rates."
    ],
    "faqs": [
      {
        "question": "Is the 60% NPS withdrawal taxable?",
        "answer": "No, the 60% lump-sum withdrawal at age 60 is 100% tax-exempt under Section 10(12A)."
      },
      {
        "question": "What is the minimum annuity purchase required in NPS?",
        "answer": "At least 40% of the accumulated corpus must be utilized to purchase a registered annuity from an insurance provider."
      },
      {
        "question": "Can I exit NPS before age 60?",
        "answer": "Premature exit is permitted after 5 years, but 80% of the corpus must be directed into an annuity."
      }
    ],
    "sources": [
      {
        "name": "Pension Fund Regulatory and Development Authority (PFRDA)",
        "url": "https://www.pfrda.org.in"
      }
    ]
  },
  "epf-calculator": {
    "title": "EPF Calculator — FINANCE Guide & Formula",
    "overview": "Projects accumulated Employee Provident Fund savings from mandatory employee and employer monthly salary deductions with annual EPFO interest.",
    "formula": "Total EPF = Monthly Contributions (Employee 12% + Employer 3.67%) + Annual Compounded Interest (8.25%)",
    "explanation": "Employee contributes 12% of Basic + DA; Employer matches with 3.67% to EPF and 8.33% to EPS pension.",
    "example": {
      "title": "Worked Example: ₹50,000 Basic Salary with 8.25% Interest for 20 Years",
      "inputs": "Basic Pay = ₹50,000 | EPF Interest = 8.25% p.a. | Annual Salary Hike = 5% | Tenure = 20 Years",
      "steps": [
        "Employee contribution = 12% of ₹50,000 = ₹6,000/month",
        "Employer EPF contribution = 3.67% of ₹50,000 = ₹1,835/month",
        "Total monthly deposit = ₹7,835 compounded annually at 8.25% with 5% annual wage increases"
      ],
      "summary": "Total Contribution = ₹31.1 Lakhs | Total Interest = ₹48.9 Lakhs | Final EPF Corpus = ₹80.0 Lakhs"
    },
    "metricsText": "EPFO interest is calculated on monthly running balances but credited to member accounts at the close of the financial year.",
    "useCases": [
      "Salaried Wealth Projection: Track the growth of your mandatory retirement corpus across job switches.",
      "Voluntary PF (VPF) Decisions: Assess whether contributing beyond 12% via VPF out-yields bank deposits.",
      "Home Loan Prepayment Funding: Determine eligible non-refundable EPF advances for home purchase."
    ],
    "commonMistakes": [
      "Assuming employer's full 12% contribution goes to EPF (in reality, 8.33% is diverted to EPS pension).",
      "Withdrawing EPF before completing 5 continuous years of service, which triggers tax deductions.",
      "Failing to transfer existing Universal Account Number (UAN) balances when switching employers."
    ],
    "faqs": [
      {
        "question": "Is EPF interest taxable above ₹2.5 Lakhs contribution?",
        "answer": "Yes, interest earned on employee contributions exceeding ₹2.5 Lakh in a financial year is taxable."
      },
      {
        "question": "When can I withdraw my full EPF amount?",
        "answer": "Full withdrawal is permitted after retirement (age 58) or upon remaining unemployed for 2 consecutive months."
      },
      {
        "question": "What is the current EPFO interest rate?",
        "answer": "The central government declared an 8.25% interest rate for employee provident fund accounts."
      }
    ],
    "sources": [
      {
        "name": "Employees' Provident Fund Organisation (EPFO)",
        "url": "https://www.epfindia.gov.in"
      }
    ]
  },
  "lumpsum-calculator": {
    "title": "Lumpsum Investment Calculator — FINANCE Guide & Formula",
    "overview": "Calculates the future compound value of a single one-time investment in mutual funds, stocks, or gold over long holding horizons.",
    "formula": "FV = PV × (1 + r)^n",
    "explanation": "FV = Future Value, PV = Present Value (initial one-time investment), r = Expected annual rate of return, n = Investment tenure in years.",
    "example": {
      "title": "Worked Example: ₹2,00,000 Lumpsum at 12% for 15 Years",
      "inputs": "One-Time Investment = ₹2,00,000 | Expected Return = 12% p.a. | Duration = 15 Years",
      "steps": [
        "Growth factor = (1 + 0.12)^15 = (1.12)^15 = 5.4735",
        "Future Value = ₹2,00,000 × 5.4735 = ₹10,94,713",
        "Total wealth generated = ₹10,94,713 - ₹2,00,000 = ₹8,94,713"
      ],
      "summary": "Invested = ₹2,00,000 | Capital Gains = ₹8,94,713 | Final Value = ₹10,94,713"
    },
    "metricsText": "A one-time lumpsum investment of ₹2 Lakhs at 12% more than quintuples over 15 years through the power of uninterrupted compounding.",
    "useCases": [
      "Windfall Deployment: Calculate projected growth from annual corporate bonuses, property sales, or inheritance.",
      "Target Corpus Planning: Determine the exact lump-sum needed today to achieve a future financial milestone.",
      "Asset Class Comparison: Compare projected outcomes between equity funds, debt instruments, and real estate."
    ],
    "commonMistakes": [
      "Trying to time market bottoms with a lumpsum instead of using a Systematic Transfer Plan (STP).",
      "Panicking and withdrawing capital during standard cyclical market downturns.",
      "Ignoring the impact of capital gains taxes (LTCG) upon redemption."
    ],
    "faqs": [
      {
        "question": "Is lumpsum investing better than SIP?",
        "answer": "In consistently rising markets, lumpsum yields higher returns because all money compounds from day one; SIP is safer during volatile sideways markets."
      },
      {
        "question": "How does inflation affect my lumpsum future value?",
        "answer": "To find real purchasing power, subtract expected inflation rate from your nominal return (e.g. 12% return - 6% inflation = 6% real return)."
      },
      {
        "question": "What is an STP?",
        "answer": "A Systematic Transfer Plan invests a lumpsum in a liquid debt fund and transfers fixed amounts monthly into equity to average costs."
      }
    ],
    "sources": [
      {
        "name": "Securities and Exchange Board of India (SEBI)",
        "url": "https://www.sebi.gov.in"
      }
    ]
  },
  "cagr-calculator": {
    "title": "CAGR Calculator — FINANCE Guide & Formula",
    "overview": "Determines the Compound Annual Growth Rate, measuring the smoothed annualized return of an investment over multiple years.",
    "formula": "CAGR = (Ending Value / Beginning Value)^(1 / Years) - 1",
    "explanation": "Calculates the constant annual rate of return that would take an investment from its initial value to its final value.",
    "example": {
      "title": "Worked Example: Investment Growing from ₹1,00,000 to ₹2,50,000 in 7 Years",
      "inputs": "Beginning Value = ₹1,00,000 | Ending Value = ₹2,50,000 | Duration = 7 Years",
      "steps": [
        "Growth multiple = 2,50,000 / 1,00,000 = 2.50",
        "Power factor = 1 / 7 = 0.142857",
        "CAGR = (2.50)^0.142857 - 1 = 1.1398 - 1 = 13.98%"
      ],
      "summary": "Initial = ₹1,00,000 | Final = ₹2,50,000 | Annualized CAGR = 13.98%"
    },
    "metricsText": "CAGR eliminates interim market volatility, providing a normalized metric to compare different asset classes objectively.",
    "useCases": [
      "Portfolio Benchmarking: Compare equity mutual fund performance against broad indices like Nifty 50 or S&P 500.",
      "Real Estate Returns: Calculate true annualised appreciation on property held across multi-year holding periods.",
      "Business Revenue Growth: Measure annualized top-line revenue growth across multi-year operational cycles."
    ],
    "commonMistakes": [
      "Using absolute percentage return instead of CAGR for investments held longer than one year.",
      "Assuming CAGR reflects steady yearly returns without accounting for negative drawdown years.",
      "Applying CAGR to recurring SIP cash flows (which requires XIRR rather than CAGR)."
    ],
    "faqs": [
      {
        "question": "What is the difference between CAGR and XIRR?",
        "answer": "CAGR is used for single point-in-time lump sums; XIRR (Extended Internal Rate of Return) is used when multiple periodic cash inflows/outflows occur."
      },
      {
        "question": "Can CAGR be negative?",
        "answer": "Yes, if an investment's ending value is lower than its beginning value, the resulting CAGR will be negative."
      },
      {
        "question": "Why is absolute return misleading over 5 years?",
        "answer": "An absolute return of 50% over 5 years is only roughly 8.45% CAGR, which might barely beat inflation."
      }
    ],
    "sources": [
      {
        "name": "National Stock Exchange of India (NSE)",
        "url": "https://www.nseindia.com"
      }
    ]
  },
  "roi-calculator": {
    "title": "ROI Calculator — FINANCE Guide & Formula",
    "overview": "Calculates the percentage Return on Investment and annualized profitability of business ventures, marketing campaigns, or asset purchases.",
    "formula": "ROI (%) = [(Net Profit) / Cost of Investment] × 100",
    "explanation": "Net profit equals final investment gain minus total invested expenses.",
    "example": {
      "title": "Worked Example: ₹3,00,000 Investment Sold for ₹4,20,000",
      "inputs": "Cost of Investment = ₹3,00,000 | Final Proceeds = ₹4,20,000",
      "steps": [
        "Net Profit = ₹4,20,000 - ₹3,00,000 = ₹1,20,000",
        "ROI Ratio = 1,20,000 / 3,00,000 = 0.40",
        "ROI Percentage = 0.40 × 100 = 40.0%"
      ],
      "summary": "Total Cost = ₹3,00,000 | Net Gain = ₹1,20,000 | Total ROI = 40.0%"
    },
    "metricsText": "ROI measures total gain relative to capital deployed; always combine it with holding duration to understand true annual capital efficiency.",
    "useCases": [
      "Marketing Campaign Evaluation: Measure customer acquisition revenues against digital ad spend.",
      "Equipment Purchases: Assess commercial machinery efficiency against operational cost savings.",
      "Real Estate Flipping: Calculate net percentage returns after accounting for renovation and registration expenses."
    ],
    "commonMistakes": [
      "Omitting holding costs, maintenance expenses, and legal fees from total investment cost.",
      "Comparing ROI across two investments without standardizing for time duration.",
      "Failing to factor income tax liabilities on capital gains."
    ],
    "faqs": [
      {
        "question": "How does annualized ROI differ from simple ROI?",
        "answer": "Annualized ROI divides total ROI by the number of holding years, accounting for the compounding duration."
      },
      {
        "question": "What is a healthy ROI benchmark?",
        "answer": "Benchmarks vary by risk: broad equity markets average 10-14%, while high-risk venture capital targets 25%+."
      },
      {
        "question": "Can ROI be negative?",
        "answer": "Yes, if your exit proceeds are lower than total costs, ROI reflects a net loss."
      }
    ],
    "sources": [
      {
        "name": "Corporate Finance Institute (CFI)",
        "url": "https://corporatefinanceinstitute.com"
      }
    ]
  },
  "retirement-calculator": {
    "title": "Retirement Corpus Calculator — FINANCE Guide & Formula",
    "overview": "Estimates the total retirement corpus required to maintain living standards post-retirement, incorporating life expectancy and inflation.",
    "formula": "Corpus = Annual Expenses × ((1 - (1 + Real_Rate)^(-Retirement_Years)) / Real_Rate)",
    "explanation": "Real Rate = ((1 + Investment Return) / (1 + Inflation)) - 1. Accounts for living expenses increasing each year with inflation.",
    "example": {
      "title": "Worked Example: ₹50,000 Current Monthly Expenses Retiring in 20 Years",
      "inputs": "Current Age = 35 | Retirement Age = 55 | Life Expectancy = 85 | Monthly Expense = ₹50,000 | Inflation = 6%",
      "steps": [
        "Future monthly expenses at age 55 = ₹50,000 × (1.06)^20 = ₹1,60,356 per month",
        "Annual retirement expense requirement = ₹19.24 Lakhs per year",
        "Corpus needed to sustain 30 years of post-retirement living with 6% inflation and 8% return"
      ],
      "summary": "Target Retirement Corpus = ₹4.15 Crores | Required Monthly SIP = ₹28,400"
    },
    "metricsText": "The 4% safe withdrawal rule suggests your retirement nest egg should equal at least 25 times your anticipated annual retirement expenses.",
    "useCases": [
      "FIRE Planning: Determine savings targets required for Financial Independence, Retire Early (FIRE).",
      "Retirement Gap Analysis: Calculate the shortfall between current provident fund savings and required retirement capital.",
      "Post-Retirement Drawdown Strategy: Plan safe monthly withdrawal schedules that avoid depleting principal early."
    ],
    "commonMistakes": [
      "Assuming expenses will drastically drop post-retirement while ignoring rising healthcare inflation.",
      "Using nominal returns without subtracting inflation from purchasing power projections.",
      "Underestimating longevity and assuming life expectancy ends at 70 or 75 years."
    ],
    "faqs": [
      {
        "question": "What is the 4% Rule in retirement planning?",
        "answer": "It posits that withdrawing 4% of your initial retirement portfolio annually (adjusted for inflation) allows funds to last 30+ years."
      },
      {
        "question": "What inflation rate should I assume for retirement in India?",
        "answer": "Historical retail consumer inflation averages 5.5% to 6.5%, while healthcare inflation often exceeds 10%."
      },
      {
        "question": "How does life expectancy impact my corpus requirement?",
        "answer": "Each additional 5 years of life expectancy increases required retirement capital by roughly 15% to 20%."
      }
    ],
    "sources": [
      {
        "name": "Society of Actuaries (SOA)",
        "url": "https://www.soa.org"
      }
    ]
  },
  "inflation-calculator": {
    "title": "Inflation Calculator — FINANCE Guide & Formula",
    "overview": "Calculates the eroding purchasing power of money over time and projects future costs of living based on historical inflation rates.",
    "formula": "Future Value = Present Value × (1 + Inflation Rate)^Years",
    "explanation": "Determines how much future currency is needed to purchase a basket of goods costing a given amount today.",
    "example": {
      "title": "Worked Example: ₹1,00,000 Purchasing Power in 15 Years at 6% Inflation",
      "inputs": "Current Amount = ₹1,00,000 | Inflation Rate = 6% p.a. | Duration = 15 Years",
      "steps": [
        "Inflation compounding factor = (1 + 0.06)^15 = (1.06)^15 = 2.3965",
        "Equivalent future cost = ₹1,00,000 × 2.3965 = ₹2,39,655",
        "Loss of purchasing power = Today's ₹1,00,000 will only buy ₹41,727 worth of goods in 15 years"
      ],
      "summary": "Present Value = ₹1,00,000 | Equivalent Future Cost = ₹2,39,655 | Loss in Real Value = 58.27%"
    },
    "metricsText": "At a 6% annual inflation rate, prices double roughly every 12 years (Rule of 72: 72 / 6 = 12 years).",
    "useCases": [
      "Long-Term Education Cost Planning: Estimate future college tuition fees for school-age children.",
      "Salary Real Growth Analysis: Determine if annual salary appraisals beat consumer price index increases.",
      "Real Return Calculation: Calculate true purchasing power growth after subtracting inflation from investment yields."
    ],
    "commonMistakes": [
      "Leaving emergency savings in standard zero-interest savings accounts that guarantee inflation erosion.",
      "Assuming official headline CPI matches personal lifestyle inflation (especially in healthcare and education).",
      "Ignoring the compounding nature of inflation over horizons longer than 10 years."
    ],
    "faqs": [
      {
        "question": "What is the Consumer Price Index (CPI)?",
        "answer": "CPI measures the average change over time in prices paid by consumers for a representative basket of goods and services."
      },
      {
        "question": "What is the difference between real and nominal returns?",
        "answer": "Nominal return is the raw interest rate stated; real return is nominal return minus the inflation rate."
      },
      {
        "question": "Which asset classes historically beat inflation?",
        "answer": "Equities, equity mutual funds, and commercial real estate have historically outpaced inflation over 10+ year periods."
      }
    ],
    "sources": [
      {
        "name": "Ministry of Statistics and Programme Implementation (MOSPI)",
        "url": "https://mospi.gov.in"
      }
    ]
  },
  "salary-calculator": {
    "title": "Salary / CTC Calculator — FINANCE Guide & Formula",
    "overview": "Breaks down annual Cost to Company (CTC) packages into monthly gross earnings, statutory PF/ESI/PT deductions, and net in-hand bank deposits.",
    "formula": "In-Hand Salary = Gross Monthly Salary - (Employee EPF + Professional Tax + Monthly TDS)",
    "explanation": "Gross salary equals CTC minus employer PF, gratuity, and insurance. In-hand is gross salary minus employee deductions.",
    "example": {
      "title": "Worked Example: ₹12 Lakh Annual CTC In-Hand Breakdown",
      "inputs": "CTC = ₹12,00,000 per annum | Metro Location | New Tax Regime",
      "steps": [
        "Employer EPF & Gratuity component = ₹48,000/year; Gross Salary = ₹11,52,000 (₹96,000/month)",
        "Employee EPF deduction = ₹3,600/month | Professional Tax = ₹200/month",
        "Estimated monthly income tax TDS under New Regime = ₹5,958/month",
        "Net in-hand take-home = ₹96,000 - (₹3,600 + ₹200 + ₹5,958) = ₹86,242"
      ],
      "summary": "Annual CTC = ₹12,00,000 | Monthly Gross = ₹96,000 | Monthly In-Hand = ₹86,242"
    },
    "metricsText": "CTC is not equal to your take-home pay; employer contributions to PF, gratuity, and performance bonuses typically take up 15-20% of your gross offer.",
    "useCases": [
      "Job Offer Evaluation: Compare true monthly bank credit across multiple corporate job offers.",
      "Budgeting & Rent Planning: Base household budgeting on verified monthly in-hand credit rather than CTC.",
      "Salary Negotiation: Negotiate for higher fixed basic salary versus volatile annual performance bonuses."
    ],
    "commonMistakes": [
      "Dividing annual CTC directly by 12 to estimate monthly bank credit.",
      "Forgetting mandatory Professional Tax deductions (typically ₹200/month depending on state rules).",
      "Overlooking non-cash components like meal cards, retention bonuses, and group health insurance."
    ],
    "faqs": [
      {
        "question": "What is the difference between CTC and Gross Salary?",
        "answer": "CTC includes employer contributions (EPF, gratuity, insurance); Gross Salary is what is credited before employee deductions."
      },
      {
        "question": "Why is my in-hand salary lower than my gross salary?",
        "answer": "Because employee deductions like 12% EPF, Professional Tax, and Income Tax (TDS) are deducted at source."
      },
      {
        "question": "What is Professional Tax (PT)?",
        "answer": "A state-level tax levied on salaried professionals, capped by constitutional mandate at ₹2,500 per year."
      }
    ],
    "sources": [
      {
        "name": "Ministry of Labour and Employment",
        "url": "https://labour.gov.in"
      }
    ]
  },
  "salary-hike-calculator": {
    "title": "Salary Hike Calculator — FINANCE Guide & Formula",
    "overview": "Computes salary percentage increments, revised annual CTC, and new monthly in-hand compensation following appraisals or job switches.",
    "formula": "Hike (%) = ((New Salary - Old Salary) / Old Salary) × 100 | New Salary = Old Salary × (1 + Hike / 100)",
    "explanation": "Measures the absolute monetary and percentage increase in compensation packages.",
    "example": {
      "title": "Worked Example: ₹8 Lakh Salary with a 25% Job Switch Hike",
      "inputs": "Current CTC = ₹8,00,000 | Increment Hike = 25%",
      "steps": [
        "Annual increase = ₹8,00,000 × 0.25 = ₹2,00,000",
        "New revised CTC = ₹8,00,000 + ₹2,00,000 = ₹10,00,000",
        "Revised monthly gross = ₹10,00,000 / 12 = ₹83,333 per month"
      ],
      "summary": "Old CTC = ₹8,00,000 | Hike = 25.0% | Revised CTC = ₹10,00,000 | Annual Gain = ₹2,00,000"
    },
    "metricsText": "A 30% hike on a job switch may push you into a higher tax bracket; always evaluate the net post-tax increase in take-home pay.",
    "useCases": [
      "Appraisal Assessment: Calculate exact monthly net gains following annual corporate performance reviews.",
      "Offer Counter-Proposals: Model required hike percentages during recruitment salary negotiations.",
      "Tax Bracket Impact: Evaluate whether an increment pushes your taxable base into a higher income tax slab."
    ],
    "commonMistakes": [
      "Assuming a 30% increase in CTC translates to a 30% increase in monthly in-hand bank credit.",
      "Failing to check whether the hike is concentrated in variable performance pay or guaranteed fixed basic.",
      "Ignoring relocation living expenses when accepting job offers in higher-cost tier-1 cities."
    ],
    "faqs": [
      {
        "question": "What is the standard job switch salary hike in India?",
        "answer": "Standard lateral job switch hikes typically range between 20% and 40%, depending on skill rarity and industry demand."
      },
      {
        "question": "How does a salary hike affect income tax?",
        "answer": "Higher incremental income is taxed at your marginal slab rate (e.g. 15%, 20%, or 30%), reducing the effective net percentage gain."
      },
      {
        "question": "How do I calculate what hike percentage I received?",
        "answer": "Subtract old salary from new salary, divide the result by old salary, and multiply by 100."
      }
    ],
    "sources": [
      {
        "name": "All India Management Association (AIMA)",
        "url": "https://www.aima.in"
      }
    ]
  },
  "hra-calculator": {
    "title": "HRA Exemption Calculator — FINANCE Guide & Formula",
    "overview": "Calculates the tax-exempt House Rent Allowance (HRA) under Section 10(13A) of the Income Tax Act to minimize taxable salary income.",
    "formula": "Exempt HRA = Minimum of: (1) Actual HRA received, (2) Rent paid - 10% of Basic, (3) 50% of Basic (Metro) or 40% (Non-Metro)",
    "explanation": "Taxable HRA equals total HRA received minus the calculated exempt HRA amount. Metro cities are Delhi, Mumbai, Kolkata, and Chennai.",
    "example": {
      "title": "Worked Example: Salaried Employee in Metro Paying ₹25,000 Monthly Rent",
      "inputs": "Basic Salary = ₹60,000/mo | HRA Received = ₹30,000/mo | Rent Paid = ₹25,000/mo | Location = Metro",
      "steps": [
        "Condition 1: Actual HRA received = ₹30,000",
        "Condition 2: Rent paid minus 10% basic = ₹25,000 - (10% of ₹60,000) = ₹25,000 - ₹6,000 = ₹19,000",
        "Condition 3: 50% of basic salary = 50% of ₹60,000 = ₹30,000",
        "Exempt HRA is the lowest figure = ₹19,000 per month (₹2,28,000 annually)"
      ],
      "summary": "Annual HRA Received = ₹3,60,000 | Tax-Exempt HRA = ₹2,28,000 | Taxable HRA = ₹1,32,000"
    },
    "metricsText": "HRA tax exemption is only available under the Old Tax Regime; the New Tax Regime does not permit HRA exemptions under Section 10(13A).",
    "useCases": [
      "Income Tax Declaration: Submit accurate HRA rent proofs to employer payroll portals before February cutoffs.",
      "Rent Optimization: Calculate how much rent you need to pay to claim 100% of your allotted HRA tax-free.",
      "Old vs New Regime Decision: Determine if substantial HRA exemptions make the Old Tax Regime more beneficial."
    ],
    "commonMistakes": [
      "Attempting to claim HRA tax exemption while filing returns under the New Tax Regime.",
      "Failing to obtain landlord PAN when annual rent payments exceed ₹1,00,000.",
      "Claiming 50% metro allowance for Bengaluru, Hyderabad, or Pune (statutory metro classification only covers Delhi, Mumbai, Kolkata, Chennai)."
    ],
    "faqs": [
      {
        "question": "Which cities qualify for the 50% metro HRA rule?",
        "answer": "Under Income Tax rules, only Mumbai, Delhi, Kolkata, and Chennai qualify for 50%; all other cities (including Bengaluru and Hyderabad) are 40%."
      },
      {
        "question": "Is landlord PAN mandatory for claiming HRA?",
        "answer": "Yes, if annual rent paid exceeds ₹1,00,000 (roughly ₹8,333/month), landlord's PAN must be submitted."
      },
      {
        "question": "Can I pay rent to my parents and claim HRA?",
        "answer": "Yes, provided parents own the property, you execute a genuine rental agreement, and parents declare rental income in their tax returns."
      }
    ],
    "sources": [
      {
        "name": "Income Tax Department of India (Section 10(13A))",
        "url": "https://www.incometax.gov.in"
      }
    ]
  },
  "gratuity-calculator": {
    "title": "Gratuity Calculator — FINANCE Guide & Formula",
    "overview": "Calculates statutory retirement and resignation gratuity payouts for employees completing five or more years of continuous service.",
    "formula": "Gratuity = (15 × Last Drawn Salary × Years of Service) / 26",
    "explanation": "Last drawn salary = Basic Pay + Dearness Allowance (DA). 26 represents working days per month. 15 represents days of wages per year.",
    "example": {
      "title": "Worked Example: 10 Years Service with ₹75,000 Last Drawn Basic",
      "inputs": "Last Drawn Basic + DA = ₹75,000 | Completed Service = 10 Years",
      "steps": [
        "15 days salary factor = (15 × ₹75,000) / 26 = ₹43,269",
        "Total gratuity = ₹43,269 × 10 years of service = ₹4,32,692"
      ],
      "summary": "Service = 10 Years | Last Basic = ₹75,000 | Total Statutory Gratuity = ₹4,32,692"
    },
    "metricsText": "Gratuity received under the Payment of Gratuity Act is 100% tax-free up to a statutory lifetime limit of ₹20 Lakhs.",
    "useCases": [
      "Resignation Settlements: Verify that full-and-final settlement payouts from employers match statutory formulas.",
      "Retirement Planning: Calculate expected lump-sum gratuity benefits upon superannuation.",
      "Job Switch Timing: Ensure you complete 4 years and 240 days of continuous service to secure gratuity eligibility."
    ],
    "commonMistakes": [
      "Resigning before completing the mandatory 5 continuous years of service (which forfeits gratuity eligibility).",
      "Using full CTC instead of Basic + Dearness Allowance to compute gratuity payouts.",
      "Ignoring that service periods of 6 months or more in the final year are rounded up to a full year."
    ],
    "faqs": [
      {
        "question": "What is the minimum service required for gratuity?",
        "answer": "Employees must complete at least 5 years of continuous service with the employer (or 4 years and 240 working days in judicial rulings)."
      },
      {
        "question": "Is gratuity payout taxable?",
        "answer": "Gratuity is tax-exempt up to a lifetime ceiling of ₹20 Lakhs for non-government employees covered under the Act."
      },
      {
        "question": "What happens to gratuity if an employee passes away in service?",
        "answer": "The 5-year continuous service condition is waived, and full gratuity is paid to legal nominees."
      }
    ],
    "sources": [
      {
        "name": "Payment of Gratuity Act, 1972",
        "url": "https://clc.gov.in"
      }
    ]
  },
  "tds-calculator": {
    "title": "TDS Calculator — FINANCE Guide & Formula",
    "overview": "Computes Tax Deducted at Source (TDS) on contractual professional fees, contractor payments, fixed deposit interest, and commercial rent.",
    "formula": "TDS Amount = Gross Payment × (Section TDS Rate / 100) | Net Payable = Gross - TDS",
    "explanation": "Statutory deduction rates vary by section: 194J (Professional fees 10% or 2%), 194C (Contractor 1% or 2%), 194A (Interest 10%), 194I (Rent 10%).",
    "example": {
      "title": "Worked Example: Freelance Invoice of ₹1,00,000 under Section 194J (10%)",
      "inputs": "Gross Professional Fee = ₹1,00,000 | TDS Section = 194J (10%)",
      "steps": [
        "TDS deduction = ₹1,00,000 × (10 / 100) = ₹10,000",
        "Net payment disbursed to freelancer = ₹1,00,000 - ₹10,000 = ₹90,000",
        "Client deposits ₹10,000 to government via Challan 281 and issues Form 16A"
      ],
      "summary": "Gross Bill = ₹1,00,000 | TDS Deducted = ₹10,000 | Net Disbursed = ₹90,000"
    },
    "metricsText": "TDS is not an additional tax; it is an advance tax deduction credited to your PAN, fully claimable against your final ITR tax liability.",
    "useCases": [
      "Freelance Invoicing: Calculate net receipts expected after clients deduct TDS under Section 194J.",
      "Landlord Rent Receipts: Assess commercial rental income deductions under Section 194I.",
      "Vendor Billing: Reconcile quarterly Form 26AS and AIS tax credits against client payment vouchers."
    ],
    "commonMistakes": [
      "Failing to furnish valid PAN, which triggers mandatory higher TDS deduction at 20% under Section 206AA.",
      "Assuming deducted TDS represents final tax liability (you must still file ITR and pay balance tax or claim refunds).",
      "Applying 10% technical service rate instead of 2% royalty rate on specified IT BPO contracts."
    ],
    "faqs": [
      {
        "question": "How can I verify if my client deposited deducted TDS?",
        "answer": "Check your Form 26AS or Annual Information Statement (AIS) on the income tax portal using your PAN."
      },
      {
        "question": "What is Form 16A?",
        "answer": "A quarterly certificate issued by the deductor specifying the amount of TDS deducted and deposited on non-salary payments."
      },
      {
        "question": "Can I get a refund of deducted TDS?",
        "answer": "Yes, if your total annual tax liability calculated in your ITR is less than the TDS deducted, you receive a direct bank refund."
      }
    ],
    "sources": [
      {
        "name": "Income Tax Department TDS Slabs",
        "url": "https://www.incometax.gov.in"
      }
    ]
  },
  "capital-gains-calculator": {
    "title": "Capital Gains Tax Calculator — FINANCE Guide & Formula",
    "overview": "Calculates Short-Term Capital Gains (STCG) and Long-Term Capital Gains (LTCG) tax on equity shares, mutual funds, real estate, and gold sales.",
    "formula": "LTCG = Sale Price - (Cost of Acquisition + Indexed Improvement) | Tax = LTCG × Statutory Rate",
    "explanation": "Post-Budget statutory rates: Listed equity LTCG is 12.5% (above ₹1.25 Lakh exemption); STCG is 20%. Real estate LTCG is 12.5% without indexation.",
    "example": {
      "title": "Worked Example: ₹5,00,000 Profit on Listed Equity Shares Sold after 2 Years",
      "inputs": "Capital Gain = ₹5,00,000 | Asset = Listed Equity Mutual Fund | Holding Period = 2 Years (Long Term)",
      "steps": [
        "Annual statutory LTCG exemption = ₹1,25,000",
        "Taxable capital gain = ₹5,00,000 - ₹1,25,000 = ₹3,75,000",
        "LTCG tax at 12.5% = ₹3,75,000 × 0.125 = ₹46,875 + 4% cess (₹1,875) = ₹48,750"
      ],
      "summary": "Total Gain = ₹5,00,000 | Tax-Free Exemption = ₹1,25,000 | Total Tax = ₹48,750"
    },
    "metricsText": "The statutory exemption limit for long-term capital gains on listed equities and mutual funds is ₹1.25 Lakhs per financial year.",
    "useCases": [
      "Tax Harvesting: Sell and re-buy equity funds annually to harvest the ₹1.25 Lakh tax-free LTCG exemption.",
      "Property Sale Planning: Calculate capital gains on home sales and evaluate Section 54/54EC capital gains bond exemptions.",
      "Stock Market Trading: Reconcile annual capital gains reports from Zerodha, Groww, or Upstox for ITR filing."
    ],
    "commonMistakes": [
      "Assuming the old ₹1.0 Lakh equity LTCG exemption and 10% tax rate still apply after recent statutory Budget revisions.",
      "Forgetting to offset short-term and long-term capital losses against eligible gains.",
      "Omitting transfer expenses (brokerage, STT, registry charges) from net sale consideration."
    ],
    "faqs": [
      {
        "question": "What is the holding period for long-term equity in India?",
        "answer": "Listed shares and equity mutual funds held for more than 12 months qualify as long-term capital assets."
      },
      {
        "question": "Can capital losses be carried forward?",
        "answer": "Yes, both short-term and long-term capital losses can be carried forward for up to 8 consecutive assessment years if ITR is filed on time."
      },
      {
        "question": "What is Section 54EC?",
        "answer": "Allows individuals to exempt up to ₹50 Lakhs of long-term capital gains from real estate by investing in specified infrastructure bonds (NHAI/REC) within 6 months."
      }
    ],
    "sources": [
      {
        "name": "Central Board of Direct Taxes (CBDT)",
        "url": "https://incometaxindia.gov.in"
      }
    ]
  },
  "credit-card-interest-calculator": {
    "title": "Credit Card Interest Calculator — FINANCE Guide & Formula",
    "overview": "Computes compound finance charges, APR fees, and multi-year debt payoff schedules on revolving unpaid credit card balances.",
    "formula": "Monthly Interest = (Outstanding Balance × Monthly APR) / 365 × Number of Days",
    "explanation": "Credit card APRs range from 36% to 45% per annum (3% to 3.75% per month) plus 18% GST on all interest charges.",
    "example": {
      "title": "Worked Example: ₹50,000 Revolved Balance at 42% APR for 30 Days",
      "inputs": "Outstanding Balance = ₹50,000 | Annual Rate = 42% APR | Billing Period = 30 Days",
      "steps": [
        "Daily interest rate = 42 / 365 / 100 = 0.0011506",
        "Monthly finance charge = ₹50,000 × 0.0011506 × 30 = ₹1,726",
        "18% GST on interest = ₹1,726 × 0.18 = ₹311; Total Monthly Charge = ₹2,037"
      ],
      "summary": "Revolving Debt = ₹50,000 | Monthly Interest = ₹1,726 | GST on Interest = ₹311 | Total Cost = ₹2,037/month"
    },
    "metricsText": "Paying only the 5% 'Minimum Amount Due' on a ₹50,000 balance can take over 8 years to clear and cost over ₹70,000 in interest alone.",
    "useCases": [
      "Debt Trap Elimination: See how paying only the minimum amount due balloons total debt over multi-year cycles.",
      "Balance Transfer Evaluation: Calculate savings from transferring credit card debt to a low-interest personal loan.",
      "Grace Period Understanding: Learn why revolving even ₹1 revokes the 45-day interest-free period on all fresh purchases."
    ],
    "commonMistakes": [
      "Believing that paying the Minimum Amount Due stops interest from accruing on the remaining balance.",
      "Overlooking that new purchases immediately start accruing interest from day one when a balance is revolving.",
      "Forgetting that 18% GST is charged on all credit card interest, late fees, and annual charges."
    ],
    "faqs": [
      {
        "question": "What happens if I only pay the Minimum Amount Due?",
        "answer": "You avoid late payment penalties, but the remaining 95% balance continues accruing interest at 36%-45% annual APR."
      },
      {
        "question": "What is the interest-free grace period?",
        "answer": "A 20 to 50 day period where no interest is charged, valid ONLY if the previous month's total statement balance was paid in full."
      },
      {
        "question": "How can I avoid credit card interest entirely?",
        "answer": "Always pay 100% of the 'Total Amount Due' on or before the payment due date every single month."
      }
    ],
    "sources": [
      {
        "name": "Reserve Bank of India Master Direction on Credit Cards",
        "url": "https://www.rbi.org.in"
      }
    ]
  },
  "loan-eligibility-calculator": {
    "title": "Loan Eligibility Calculator — FINANCE Guide & Formula",
    "overview": "Estimates the maximum loan sanction amount you qualify for based on net monthly income, existing EMIs, and debt-to-income limits (FOIR).",
    "formula": "Max EMI = (Net Monthly Salary × FOIR %) - Existing EMIs | Loan Amount = Present_Value(Max EMI, Rate, Tenure)",
    "explanation": "FOIR (Fixed Obligation to Income Ratio) is the percentage of monthly income lenders allow for total debt payments (typically 40% to 55%).",
    "example": {
      "title": "Worked Example: ₹80,000 Monthly Salary with ₹10,000 Existing Car EMI",
      "inputs": "Monthly Net Income = ₹80,000 | Existing EMI = ₹10,000 | FOIR = 50% | Interest = 8.5% | Tenure = 20 Years",
      "steps": [
        "Allowed debt capacity = 50% of ₹80,000 = ₹40,000/month",
        "Maximum available EMI for new loan = ₹40,000 - ₹10,000 = ₹30,000/month",
        "Home loan per lakh EMI factor at 8.5% for 20 years = ₹868 per lakh",
        "Eligible home loan amount = (30,000 / 868) × 1,00,000 = ₹34.56 Lakhs"
      ],
      "summary": "Net Salary = ₹80,000 | Max Allowed EMI = ₹30,000 | Max Loan Eligibility = ₹34.56 Lakhs"
    },
    "metricsText": "Adding a co-applicant (spouse or earning parent) combines household incomes, boosting total loan eligibility by 50% to 80%.",
    "useCases": [
      "Pre-Purchase Budgeting: Know your exact borrowing ceiling before paying token booking advances for properties.",
      "Co-Applicant Planning: Calculate how adding a working spouse enhances total sanctioned loan amounts.",
      "CIBIL Score Optimization: See how paying off small personal loans frees up FOIR headroom for larger home loans."
    ],
    "commonMistakes": [
      "Assuming lenders will sanction loans based on gross CTC rather than take-home bank salary.",
      "Ignoring the negative impact of active credit card outstanding balances on credit eligibility.",
      "Assuming high income guarantees loan sanction even with a poor credit score (< 700)."
    ],
    "faqs": [
      {
        "question": "What is FOIR?",
        "answer": "Fixed Obligation to Income Ratio: the percentage of your monthly net income that goes toward paying all loan EMIs."
      },
      {
        "question": "How does my credit score affect loan eligibility?",
        "answer": "A CIBIL score of 750+ secures the lowest interest rates and highest eligibility multipliers from tier-1 banks."
      },
      {
        "question": "Can I increase my loan eligibility without a co-applicant?",
        "answer": "Yes, by opting for a longer loan tenure (e.g. 30 years instead of 20 years) or clearing existing small debts."
      }
    ],
    "sources": [
      {
        "name": "TransUnion CIBIL India",
        "url": "https://www.cibil.com"
      }
    ]
  },
  "prepayment-calculator": {
    "title": "Loan Prepayment Calculator — FINANCE Guide & Formula",
    "overview": "Calculates interest savings and loan tenure reduction achieved by making partial lump-sum prepayments toward loan principal.",
    "formula": "New Principal = Current Principal - Prepayment | Recalculate Tenure or EMI using Amortisation",
    "explanation": "Prepayments reduce outstanding principal directly, permanently eliminating future interest on that portion.",
    "example": {
      "title": "Worked Example: Prepaying ₹2,00,000 on a ₹30 Lakh Home Loan",
      "inputs": "Loan Balance = ₹30,00,000 | Rate = 8.5% | Remaining Tenure = 240 Months | Prepayment = ₹2,00,000",
      "steps": [
        "Principal reduces immediately from ₹30,00,000 to ₹28,00,000",
        "Option A (Reduce Tenure): Monthly EMI remains ₹26,035; tenure reduces from 240 months to 207 months (33 months cut)",
        "Option B (Reduce EMI): Tenure remains 240 months; monthly EMI drops from ₹26,035 to ₹24,300"
      ],
      "summary": "Prepayment = ₹2,00,000 | Tenure Saved = 33 Months (2.75 Years) | Total Interest Saved = ₹5,58,000"
    },
    "metricsText": "Prepaying early in a loan's life cycle produces maximum savings: ₹1 Lakh prepaid in Year 2 saves more than triple the interest of ₹1 Lakh prepaid in Year 15.",
    "useCases": [
      "Bonus Utilization: Direct annual corporate bonuses into loan principal to shave years off home mortgages.",
      "EMI vs Tenure Decision: Compare the financial advantage of cutting loan tenure versus reducing monthly EMI commitments.",
      "Zero Prepayment Penalty Check: Take advantage of RBI mandates that ban prepayment penalties on floating-rate individual home loans."
    ],
    "commonMistakes": [
      "Delaying prepayments until late in the loan tenure when remaining interest obligations are already small.",
      "Prepaying low-interest loans (e.g. 8.5% home loan) instead of high-interest debts (e.g. 15% personal loan or 42% credit card).",
      "Failing to instruct the bank in writing to adjust prepayments against principal rather than future EMIs."
    ],
    "faqs": [
      {
        "question": "Are banks allowed to charge prepayment penalties on home loans?",
        "answer": "No. The Reserve Bank of India strictly prohibits foreclosure charges and prepayment penalties on floating-rate home loans for individual borrowers."
      },
      {
        "question": "Is it better to reduce tenure or reduce EMI when prepaying?",
        "answer": "Reducing tenure saves substantially more total interest; reducing EMI improves immediate monthly household cash flow."
      },
      {
        "question": "How often can I make prepayments?",
        "answer": "Most banks allow partial prepayments at any time throughout the year, either via online net banking or branch visits."
      }
    ],
    "sources": [
      {
        "name": "Reserve Bank of India Master Circular on Loan Foreclosure",
        "url": "https://www.rbi.org.in"
      }
    ]
  },
  "stamp-duty-calculator": {
    "title": "Stamp Duty Calculator — FINANCE Guide & Formula",
    "overview": "Estimates state government stamp duty, legal registration fees, and municipal surcharges required during property transactions.",
    "formula": "Stamp Duty = Higher of (Agreement Value, Ready Reckoner / Circle Rate) × State Stamp Duty %",
    "explanation": "Stamp duty is an indirect property tax levied by state governments. Rates vary by state, gender of buyer, and municipal limits.",
    "example": {
      "title": "Worked Example: ₹80 Lakh Property Purchase in Maharashtra (Male Buyer)",
      "inputs": "Property Value = ₹80,00,000 | State = Maharashtra | Buyer Gender = Male",
      "steps": [
        "Stamp Duty Rate = 5% base + 1% Metro Cess = 6%",
        "Stamp Duty payable = ₹80,00,000 × 0.06 = ₹4,80,000",
        "Registration Fee = 1% (capped at statutory ₹30,000 in Maharashtra) = ₹30,000"
      ],
      "summary": "Property Cost = ₹80,00,000 | Stamp Duty = ₹4,80,000 | Registration = ₹30,000 | Total Government Fees = ₹5,10,000"
    },
    "metricsText": "Many Indian states offer a 1% to 2% stamp duty concession for female property buyers to encourage women homeownership.",
    "useCases": [
      "Home Buying Budgeting: Calculate total legal registration fees before finalizing property sale agreements.",
      "Gender Concession Planning: Assess tax savings by registering property jointly or solely in the name of a female family member.",
      "Circle Rate Compliance: Ensure agreement consideration value does not fall below the government ready reckoner benchmark."
    ],
    "commonMistakes": [
      "Assuming stamp duty rates are uniform across India (they vary from 3% to 7% depending on the state).",
      "Understating agreement values below the official circle rate, which triggers tax scrutiny under Section 56(2)(x).",
      "Forgetting to budget for 1% registration charges and advocate documentation fees."
    ],
    "faqs": [
      {
        "question": "Can stamp duty be included in home loan amounts?",
        "answer": "Generally no. RBI guidelines specify that banks cannot include stamp duty and registration charges in the sanctioned loan-to-value (LTV) calculation."
      },
      {
        "question": "Can I claim income tax deduction on stamp duty?",
        "answer": "Yes, stamp duty and registration fees paid can be claimed as a deduction under Section 80C up to ₹1.5 Lakhs in the year of purchase."
      },
      {
        "question": "What is Circle Rate / Ready Reckoner Rate?",
        "answer": "The minimum baseline price per square foot set by the state government below which a property cannot be legally registered."
      }
    ],
    "sources": [
      {
        "name": "Department of Registration and Stamps (State Governments)",
        "url": "https://igrmaharashtra.gov.in"
      }
    ]
  },
  "property-tax-calculator": {
    "title": "Property Tax Calculator — FINANCE Guide & Formula",
    "overview": "Estimates annual municipal property tax dues based on built-up area, property classification, construction age, and local municipality unit area values.",
    "formula": "Property Tax = Built-Up Area × Base Value per Sq.Ft × Age Factor × Structure Factor × Occupancy Factor × Tax Rate",
    "explanation": "Calculated using the Unit Area System (UAS) or Capital Value System adopted by urban municipal corporations.",
    "example": {
      "title": "Worked Example: 1,200 Sq.Ft Residential Apartment under Municipal Corporation",
      "inputs": "Area = 1,200 sq.ft | Base Rate = ₹2.50/sq.ft/month | Age Factor = 0.9 (10 years) | Occupancy = Self-Occupied (1.0)",
      "steps": [
        "Annual Rateable Value (ARV) = 1,200 × 2.50 × 12 × 0.9 × 1.0 = ₹32,400",
        "General tax rate (20%) = ₹6,480",
        "Add municipal education and library cess (5%) = ₹324"
      ],
      "summary": "Built-up Area = 1,200 Sq.Ft | Annual Rateable Value = ₹32,400 | Net Annual Property Tax = ₹6,804"
    },
    "metricsText": "Paying annual municipal property tax in full during the first quarter (April–May) usually qualifies for a 5% to 10% early-bird rebate.",
    "useCases": [
      "Municipal Assessment: Verify annual municipal tax bills against published unit area rate schedules.",
      "Tenant vs Landlord Verification: Check property tax clearance certificates before executing residential lease deeds.",
      "Ownership Transfer: Clear all municipal tax arrears before applying for municipal khata or property title mutation."
    ],
    "commonMistakes": [
      "Reporting incorrect carpet or built-up area measurements on self-assessment tax declaration forms.",
      "Failing to declare commercial usage of residential properties, which attracts severe penalty back-taxes.",
      "Missing municipal payment deadlines, incurring recurring 1% to 2% monthly late interest charges."
    ],
    "faqs": [
      {
        "question": "Who is responsible for paying property tax: tenant or owner?",
        "answer": "The property owner is legally responsible for paying municipal property tax, regardless of tenancy agreements."
      },
      {
        "question": "How does property age affect tax calculations?",
        "answer": "Older properties generally have lower depreciation factors, resulting in slightly lower annual rateable values."
      },
      {
        "question": "What happens if property tax is unpaid for years?",
        "answer": "Municipal authorities can issue legal recovery notices, freeze property registry mutations, and auction properties to recover tax dues."
      }
    ],
    "sources": [
      {
        "name": "Directorate of Municipal Administration",
        "url": "https://mohua.gov.in"
      }
    ]
  },
  "rent-vs-buy-calculator": {
    "title": "Rent vs Buy Calculator — FINANCE Guide & Formula",
    "overview": "Evaluates the long-term wealth difference between buying a home with a mortgage versus renting and investing the down payment in equity index funds.",
    "formula": "Net Buying Wealth = Property Value - Buying Costs | Net Renting Wealth = Compounded Investment Portfolio - Cumulative Rent",
    "explanation": "Compares mortgage interest, maintenance, property tax, and home appreciation against rent escalation and equity compounding returns.",
    "example": {
      "title": "Worked Example: ₹70 Lakh Property vs ₹20,000 Monthly Rent over 15 Years",
      "inputs": "Home Price = ₹70,00,000 | Down Payment = ₹14,00,000 | Rent = ₹20,000/mo | Home Appreciation = 5% | SIP Return = 12%",
      "steps": [
        "Buyer Path: ₹56 Lakh loan at 8.5% costs ₹48,590/mo EMI + maintenance + taxes. House appreciates to ₹1.45 Crores.",
        "Renter Path: Pays ₹20,000/mo rent (5% escalation) and invests ₹14 Lakh down payment + ₹28,590 monthly savings in equity at 12%.",
        "Renter's investment portfolio grows to ₹2.10 Crores over 15 years."
      ],
      "summary": "Buyer Home Equity = ₹1.45 Crores | Renter Investment Corpus = ₹2.10 Crores | Net Financial Advantage = Renting (+₹65 Lakhs)"
    },
    "metricsText": "In Indian metro cities where rental yields average just 2% to 3%, renting and disciplined investing often out-yields buying on high-interest mortgages.",
    "useCases": [
      "Relocation Decisions: Decide whether buying makes sense if career mobility requires relocating within 3-5 years.",
      "Opportunity Cost Analysis: Evaluate how investing down payment capital in equity markets compares with real estate appreciation.",
      "Lifestyle Financial Planning: Balance the psychological emotional security of homeownership against capital flexibility."
    ],
    "commonMistakes": [
      "Comparing monthly EMI directly to monthly rent while ignoring property taxes, maintenance fees, and registration costs.",
      "Assuming home values appreciate at 10%+ every year without considering real historical localized data (4% to 6%).",
      "Assuming renters actually invest their monthly savings rather than spending surplus cash."
    ],
    "faqs": [
      {
        "question": "What is rental yield?",
        "answer": "Annual rent divided by total property purchase price (e.g. ₹2.4 Lakh annual rent on ₹80 Lakh home = 3% rental yield)."
      },
      {
        "question": "When does buying a home make more financial sense than renting?",
        "answer": "When you plan to stay in the home for 10+ years, property prices appreciate rapidly, or mortgage interest rates drop significantly."
      },
      {
        "question": "What are the hidden costs of homeownership?",
        "answer": "Stamp duty (5-7%), interior fitouts, annual maintenance charges (AMC), property taxes, and loan interest."
      }
    ],
    "sources": [
      {
        "name": "National Housing Bank RESIDEX",
        "url": "https://residex.nhb.org.in"
      }
    ]
  },
  "home-affordability-calculator": {
    "title": "Home Affordability Calculator — FINANCE Guide & Formula",
    "overview": "Determines the maximum realistic home purchase price you can afford based on household income, down payment savings, and monthly debt caps.",
    "formula": "Affordable Price = Down Payment Savings + Maximum Sanctioned Home Loan (based on 40-50% FOIR)",
    "explanation": "Ensures monthly mortgage payments do not exceed 40% of net household take-home income.",
    "example": {
      "title": "Worked Example: Household Income ₹1,20,000/mo with ₹15 Lakh Down Payment",
      "inputs": "Monthly Net Income = ₹1,20,000 | Down Payment = ₹15,00,000 | Loan Rate = 8.5% | Tenure = 20 Years",
      "steps": [
        "Maximum safe monthly EMI (40% of income) = 0.40 × ₹1,20,000 = ₹48,000/month",
        "Max loan supported by ₹48,000 EMI at 8.5% for 20 years = ₹55.3 Lakhs",
        "Total affordable purchase budget = ₹15 Lakh down payment + ₹55.3 Lakh loan = ₹70.3 Lakhs",
        "Reserve 7% for stamp duty and registration = ₹4.9 Lakhs; Net affordable home price = ₹65.4 Lakhs"
      ],
      "summary": "Monthly Income = ₹1,20,000 | Safe EMI = ₹48,000 | Total Home Budget = ₹65.4 Lakhs"
    },
    "metricsText": "Financial advisors recommend the 28/36 rule: mortgage payments should not exceed 28% of gross income, and total debts should stay under 36%.",
    "useCases": [
      "Property Search Filtering: Restrict real estate portal searches to homes within your verified financial affordability limit.",
      "Emergency Reserve Protection: Ensure home purchase down payments do not exhaust your 6-month emergency reserve fund.",
      "Dual Income Budgeting: Combine joint partner incomes to realistically budget for family starter homes."
    ],
    "commonMistakes": [
      "Spending 100% of liquid savings on the down payment, leaving zero emergency reserves for post-purchase repairs.",
      "Forgetting to subtract 8% to 10% of property cost for stamp duty, registration, legal fees, and interior woodwork.",
      "Maxing out credit limits to buy the largest home possible, creating severe 'house poor' cash flow stress."
    ],
    "faqs": [
      {
        "question": "What percentage should I put down as a down payment?",
        "answer": "Lenders require at least 10% to 20%; putting down 20% eliminates high loan-to-value risk and lowers monthly EMIs."
      },
      {
        "question": "What does being 'house poor' mean?",
        "answer": "A situation where so much of your monthly income goes toward home payments that you have little left for investing, travel, or emergencies."
      },
      {
        "question": "Does my credit score change my affordability budget?",
        "answer": "Yes. Higher credit scores (750+) qualify for lower interest rates, which lowers your EMI and lets you afford a higher loan."
      }
    ],
    "sources": [
      {
        "name": "National Housing Bank",
        "url": "https://nhb.org.in"
      }
    ]
  },
  "break-even-calculator": {
    "title": "Break-Even Calculator — FINANCE Guide & Formula",
    "overview": "Calculates the exact unit sales volume and revenue required for a business to cover all fixed and variable operating costs with zero profit and zero loss.",
    "formula": "Break-Even Units = Fixed Costs / (Selling Price per Unit - Variable Cost per Unit)",
    "explanation": "Contribution Margin = Selling Price - Variable Cost. Break-even occurs when total contribution margin equals total fixed overhead.",
    "example": {
      "title": "Worked Example: Retail Product with ₹50,000 Monthly Fixed Overhead",
      "inputs": "Fixed Overhead = ₹50,000/month | Selling Price = ₹500/unit | Variable Cost = ₹300/unit",
      "steps": [
        "Contribution margin per unit = ₹500 - ₹300 = ₹200 per unit",
        "Contribution margin ratio = 200 / 500 = 40%",
        "Break-even volume = ₹50,000 / ₹200 = 250 units per month",
        "Break-even revenue = 250 units × ₹500 = ₹1,25,000 per month"
      ],
      "summary": "Fixed Costs = ₹50,000 | Margin = ₹200/unit | Break-Even Volume = 250 Units | Break-Even Sales = ₹1,25,000"
    },
    "metricsText": "Every unit sold beyond the break-even point contributes 100% of its contribution margin directly to net operational profit.",
    "useCases": [
      "Startup Financial Feasibility: Determine whether a new commercial venture has a realistic sales threshold.",
      "Pricing Adjustments: Model how offering a 10% retail discount shifts the required monthly sales volume.",
      "Cost Reduction Strategy: Calculate how cutting office rent or software overhead lowers the operational risk threshold."
    ],
    "commonMistakes": [
      "Classifying semi-variable costs (like electricity or customer support) strictly as fixed costs.",
      "Ignoring seasonal sales fluctuations when planning monthly fixed cost commitments.",
      "Failing to update break-even models when supplier raw material prices change."
    ],
    "faqs": [
      {
        "question": "What is the difference between fixed and variable costs?",
        "answer": "Fixed costs (rent, insurance, salaries) stay constant regardless of volume; variable costs (raw materials, packaging, shipping) rise with production."
      },
      {
        "question": "What is Contribution Margin?",
        "answer": "Selling price minus variable cost per unit; it is the amount of money each unit sale contributes toward paying off fixed costs."
      },
      {
        "question": "How can a company lower its break-even point?",
        "answer": "By raising selling prices, reducing unit material costs, or trimming fixed operational overhead."
      }
    ],
    "sources": [
      {
        "name": "Institute of Cost Accountants of India",
        "url": "https://icmai.in"
      }
    ]
  },
  "profit-margin-calculator": {
    "title": "Profit Margin Calculator — FINANCE Guide & Formula",
    "overview": "Computes gross profit, operating margin, and net profit percentage from product cost of goods sold and net sales revenue.",
    "formula": "Gross Margin (%) = ((Revenue - COGS) / Revenue) × 100 | Net Margin (%) = (Net Profit / Revenue) × 100",
    "explanation": "Gross margin reflects production efficiency; net margin reflects overall business profitability after all overhead and taxes.",
    "example": {
      "title": "Worked Example: Product Cost ₹60 Sold for ₹100 with ₹15 Operating Overhead",
      "inputs": "Revenue = ₹100 | Cost of Goods Sold = ₹60 | Operating Expenses = ₹15",
      "steps": [
        "Gross Profit = ₹100 - ₹60 = ₹40; Gross Profit Margin = (40 / 100) × 100 = 40.0%",
        "Operating Profit = ₹40 - ₹15 = ₹25; Net Profit Margin = (25 / 100) × 100 = 25.0%"
      ],
      "summary": "Revenue = ₹100 | Gross Margin = 40.0% | Net Profit Margin = 25.0%"
    },
    "metricsText": "A company can have healthy 60% gross profit margins but still record net losses if corporate marketing and overhead are unmanaged.",
    "useCases": [
      "Product Line Auditing: Identify which inventory SKUs generate the highest net percentage profit margins.",
      "E-Commerce Pricing: Ensure marketplace selling prices account for platform commissions, payment gateway fees, and returns.",
      "Competitor Benchmarking: Compare operational profitability against publicly listed industry peer averages."
    ],
    "commonMistakes": [
      "Confusing gross profit margin (calculated before overhead) with net profit margin.",
      "Omitting packaging, merchant gateway fees, and shipping costs from Cost of Goods Sold.",
      "Failing to account for customer product return rates and damaged inventory write-offs."
    ],
    "faqs": [
      {
        "question": "What is a good profit margin?",
        "answer": "Average margins vary: retail grocery operates on 2-5%, manufacturing on 10-15%, and SaaS software on 20-30%+ net margins."
      },
      {
        "question": "What is the difference between markup and margin?",
        "answer": "Margin is profit divided by revenue; markup is profit divided by cost price."
      },
      {
        "question": "How do discounting strategies impact profit margins?",
        "answer": "A 20% discount on a product with a 30% margin slashes total dollar profit by two-thirds."
      }
    ],
    "sources": [
      {
        "name": "Harvard Business Review Financial Metrics",
        "url": "https://hbr.org"
      }
    ]
  },
  "markup-calculator": {
    "title": "Markup Calculator — FINANCE Guide & Formula",
    "overview": "Calculates the retail selling price and markup percentage required on cost prices to achieve target product profitability.",
    "formula": "Selling Price = Cost Price × (1 + Markup / 100) | Markup % = ((Selling Price - Cost) / Cost) × 100",
    "explanation": "Markup is the percentage added directly to the wholesale cost price to determine final customer retail pricing.",
    "example": {
      "title": "Worked Example: ₹800 Wholesale Cost with a 50% Retail Markup",
      "inputs": "Cost Price = ₹800 | Desired Markup = 50%",
      "steps": [
        "Markup dollar amount = ₹800 × 0.50 = ₹400",
        "Target selling price = ₹800 + ₹400 = ₹1,200",
        "Resulting profit margin = (400 / 1,200) × 100 = 33.33%"
      ],
      "summary": "Cost Price = ₹800 | Markup = 50.0% | Retail Price = ₹1,200 | Margin Equivalent = 33.33%"
    },
    "metricsText": "A 100% markup (keystone pricing, doubling cost) equals a 50% profit margin on final selling price.",
    "useCases": [
      "Retail Wholesale Pricing: Quickly price boutique and retail inventory based on standard keystone markup percentages.",
      "Restaurant Menu Costing: Apply 200% to 300% markups on raw food ingredient costs to cover kitchen overhead.",
      "Custom Manufacturing: Quote client job projects by adding standard labor and materials markups."
    ],
    "commonMistakes": [
      "Assuming a 50% markup yields a 50% profit margin (it actually yields a 33.3% margin).",
      "Setting markups without researching market competitor price sensitivity.",
      "Failing to include inbound shipping and import customs duties in base product cost."
    ],
    "faqs": [
      {
        "question": "Why is markup always higher than profit margin?",
        "answer": "Because markup divides profit by cost (a smaller denominator), while margin divides profit by selling price (a larger denominator)."
      },
      {
        "question": "What is keystone pricing?",
        "answer": "A retail pricing strategy where products are priced at exactly double their wholesale cost (a 100% markup, or 50% margin)."
      },
      {
        "question": "How do I convert a 25% desired margin into markup?",
        "answer": "Markup = Margin / (1 - Margin) = 0.25 / 0.75 = 33.33% markup."
      }
    ],
    "sources": [
      {
        "name": "National Retail Federation (NRF)",
        "url": "https://nrf.com"
      }
    ]
  },
  "freelance-rate-calculator": {
    "title": "Freelance Rate Calculator — FINANCE Guide & Formula",
    "overview": "Calculates the minimum hourly and daily billable rates needed for freelancers to match target salary goals after factoring unpaid hours, taxes, and expenses.",
    "formula": "Hourly Rate = (Target Annual Net Income + Annual Business Expenses + Income Taxes) / Annual Billable Hours",
    "explanation": "Annual billable hours accounts for non-billable administrative tasks, marketing, sick days, and unpaid vacations (typically 1,000 hours/year).",
    "example": {
      "title": "Worked Example: ₹12 Lakh Target Annual Income with ₹2 Lakh Expenses",
      "inputs": "Target Take-Home = ₹12,00,000 | Expenses = ₹2,00,000 | Tax Reserve = ₹1,50,000 | Billable Weeks = 46 (25 hrs/wk)",
      "steps": [
        "Total revenue required = ₹12,00,000 + ₹2,00,000 + ₹1,50,000 = ₹15,50,000",
        "Total billable hours = 46 weeks × 25 hours/week = 1,150 billable hours/year",
        "Minimum hourly rate = ₹15,50,000 / 1,150 hours = ₹1,348 per hour"
      ],
      "summary": "Annual Target = ₹15.5 Lakhs Gross | Billable Hours = 1,150 | Minimum Rate = ₹1,350/hr ($16.20/hr) | Day Rate = ₹10,800"
    },
    "metricsText": "Freelancers typically spend only 50% to 60% of their working hours on billable client work; the rest is spent on proposals, invoicing, and marketing.",
    "useCases": [
      "Career Transition: Transition from corporate employment to independent freelancing with realistic rate baselines.",
      "Project Quoting: Convert estimated project completion hours into accurate client price proposals.",
      "Retainer Calculations: Establish monthly retainer contracts based on guaranteed billable client hours."
    ],
    "commonMistakes": [
      "Dividing annual salary by 2,080 hours (40 hrs × 52 weeks) without subtracting vacation, holidays, and marketing time.",
      "Failing to budget for self-funded health insurance, retirement PF, and hardware upgrades.",
      "Ignoring 18% GST registration obligations once annual turnover crosses ₹20 Lakhs."
    ],
    "faqs": [
      {
        "question": "How many hours per week is a freelancer actually billable?",
        "answer": "Most successful full-time freelancers log 20 to 25 billable hours per week; the rest is non-billable overhead."
      },
      {
        "question": "Should I charge hourly or fixed project rates?",
        "answer": "Value-based fixed pricing is generally better for experienced freelancers; hourly billing protects against scope creep on undefined projects."
      },
      {
        "question": "How should I account for taxes as an Indian freelancer?",
        "answer": "Under Section 44ADA (Presumptive Taxation), eligible professionals can declare 50% of gross receipts as profit and pay tax on that half."
      }
    ],
    "sources": [
      {
        "name": "Freelancers Union",
        "url": "https://www.freelancersunion.org"
      }
    ]
  },
  "bmi-calculator": {
    "title": "BMI Calculator — HEALTH Guide & Formula",
    "overview": "Calculates Body Mass Index (BMI) from body weight and height, categorizing adult physical health against World Health Organization clinical cutoffs.",
    "formula": "BMI = Weight (kg) / [Height (m)]^2",
    "explanation": "Weight in kilograms divided by the square of height in meters. WHO adult classifications: Underweight (<18.5), Normal (18.5–24.9), Overweight (25–29.9), Obese (≥30).",
    "example": {
      "title": "Worked Example: Adult Weighing 72 kg at 175 cm Height",
      "inputs": "Weight = 72 kg | Height = 175 cm (1.75 meters)",
      "steps": [
        "Height squared = 1.75 × 1.75 = 3.0625 m²",
        "BMI value = 72 / 3.0625 = 23.51 kg/m²",
        "Clinical classification = Normal Weight (Healthy Range)"
      ],
      "summary": "Weight = 72 kg | Height = 175 cm | BMI = 23.5 kg/m² | Category = Normal Weight"
    },
    "metricsText": "For Asian populations, clinical health risks begin at lower thresholds: overweight cutoffs start at 23.0 BMI and obesity cutoffs start at 27.5 BMI.",
    "useCases": [
      "Clinical Screening: Screen for weight-related epidemiological risks including hypertension and type-2 diabetes.",
      "Weight Loss Milestones: Determine the exact kilogram target needed to enter the recommended healthy weight range.",
      "Annual Health Checkups: Track annual biometric changes alongside blood lipid panels and waist measurements."
    ],
    "commonMistakes": [
      "Using BMI alone for muscular athletes or bodybuilders whose high lean mass misclassifies them as overweight.",
      "Applying adult BMI cutoffs to children and adolescents (which requires CDC pediatric percentile growth charts).",
      "Ignoring abdominal visceral fat distribution, which is better evaluated using waist-to-hip ratios."
    ],
    "faqs": [
      {
        "question": "Why is BMI misleading for athletes?",
        "answer": "BMI cannot distinguish between dense muscle mass and adipose fat tissue; heavily muscled individuals often score in the overweight range despite low body fat."
      },
      {
        "question": "What are the revised BMI cutoffs for South Asians?",
        "answer": "Due to higher visceral fat propensity, WHO guidelines recommend Asian cutoffs: Normal (18.5–22.9), Overweight (23.0–27.4), and Obese (≥27.5)."
      },
      {
        "question": "At what BMI does health risk significantly increase?",
        "answer": "Cardiovascular and metabolic risks increase progressively when BMI exceeds 25, accelerating rapidly above 30."
      }
    ],
    "sources": [
      {
        "name": "World Health Organization (WHO) BMI Classification",
        "url": "https://www.who.int"
      }
    ]
  },
  "calorie-calculator": {
    "title": "Calories Calculator — HEALTH Guide & Formula",
    "overview": "Calculates Total Daily Energy Expenditure (TDEE) and target daily caloric intake for fat loss, muscle gain, or weight maintenance based on physical activity levels.",
    "formula": "TDEE = BMR × Activity Factor | BMR (Mifflin-St Jeor) = (10 × W) + (6.25 × H) - (5 × A) + s",
    "explanation": "W = Weight in kg, H = Height in cm, A = Age, s = Biological sex constant (+5 for males, -161 for females). Activity factors range from 1.2 (sedentary) to 1.9 (athlete).",
    "example": {
      "title": "Worked Example: 28-Year-Old Male (75 kg, 178 cm, Moderate Exercise)",
      "inputs": "Age = 28 | Sex = Male | Weight = 75 kg | Height = 178 cm | Activity = Moderate (3-5 days/week)",
      "steps": [
        "BMR = (10 × 75) + (6.25 × 178) - (5 × 28) + 5 = 750 + 1112.5 - 140 + 5 = 1,727.5 kcal",
        "Moderate Activity Factor = 1.55",
        "Maintenance TDEE = 1,727.5 × 1.55 = 2,678 kcal/day",
        "Target for steady 0.5 kg/week fat loss (500 kcal deficit) = 2,178 kcal/day"
      ],
      "summary": "Basal BMR = 1,728 kcal | Maintenance TDEE = 2,678 kcal | Moderate Fat Loss Deficit = 2,178 kcal/day"
    },
    "metricsText": "A cumulative caloric deficit of approximately 3,500 kcal equals roughly 0.45 kg (1 lb) of body fat tissue reduction.",
    "useCases": [
      "Fat Loss Planning: Establish safe, sustainable 300 to 500 kcal daily deficits that prevent metabolic slowdown.",
      "Lean Bulking: Calculate structured 250 to 400 kcal daily surpluses to promote hypertrophy while minimizing fat gain.",
      "Dietary Tracking Calibration: Calibrate calorie intake targets on tracking apps like MyFitnessPal and Cronometer."
    ],
    "commonMistakes": [
      "Overestimating daily physical activity levels (e.g. selecting 'very active' for a desk job with 1 hour of gym training).",
      "Using severe crash deficits (> 1,000 kcal/day) that trigger muscle catabolism, fatigue, and hormonal disruption.",
      "Failing to track liquid calories, cooking oils, and condiments that erase planned daily deficits."
    ],
    "faqs": [
      {
        "question": "What is the difference between BMR and TDEE?",
        "answer": "BMR is calories burned at complete rest to keep organs functioning; TDEE is total calories burned including daily movement and exercise."
      },
      {
        "question": "How large should my calorie deficit be for fat loss?",
        "answer": "A moderate deficit of 15% to 20% below your maintenance TDEE (roughly 300 to 500 kcal/day) allows steady fat loss while preserving muscle."
      },
      {
        "question": "Why do weight loss plateaus happen?",
        "answer": "As you lose weight, your smaller body burns fewer calories, and metabolic adaptation lowers daily expenditure; recalculate your TDEE every 3-5 kg lost."
      }
    ],
    "sources": [
      {
        "name": "American Journal of Clinical Nutrition",
        "url": "https://academic.oup.com/ajcn"
      }
    ]
  },
  "water-intake-calculator": {
    "title": "Water Intake Calculator — HEALTH Guide & Formula",
    "overview": "Determines optimal daily water hydration volumes based on body mass, climate environment, and daily physical exercise duration.",
    "formula": "Daily Water (Liters) = (Body Weight in kg × 0.033) + (Exercise Hours × 0.5 Liters)",
    "explanation": "Base hydration requirement is roughly 30 to 35 mL per kilogram of body weight, with additional fluid replenishment for sweat loss.",
    "example": {
      "title": "Worked Example: 70 kg Adult with 45 Minutes of Daily Exercise",
      "inputs": "Body Weight = 70 kg | Daily Workout = 45 Minutes (0.75 Hours) | Climate = Moderate",
      "steps": [
        "Base hydration requirement = 70 × 0.033 = 2.31 Liters",
        "Exercise replenishment = 0.75 × 0.5 = 0.375 Liters",
        "Total daily fluid target = 2.31 + 0.38 = 2.69 Liters (roughly 11 glasses of 250 mL each)"
      ],
      "summary": "Weight = 70 kg | Exercise = 45 min | Daily Target = 2.7 Liters (11 Glasses)"
    },
    "metricsText": "Thirst is a delayed physiological indicator; mild dehydration of just 1% to 2% body mass impairs cognitive focus and physical stamina.",
    "useCases": [
      "Endurance Sports Hydration: Calculate baseline fluid requirements for marathon training and summer athletics.",
      "Kidney Stone Prevention: Maintain adequate urinary volume (at least 2.5 L/day) to prevent crystal crystallization.",
      "Daily Wellness Tracking: Establish consistent hydration habits by distributing water targets evenly across daytime hours."
    ],
    "commonMistakes": [
      "Relying exclusively on the generic '8 glasses a day' myth without adjusting for body weight and sweat rate.",
      "Drinking excessive fluid volumes all at once rather than sipping consistently throughout the day.",
      "Neglecting electrolyte replacement (sodium, potassium, magnesium) during heavy endurance sweating."
    ],
    "faqs": [
      {
        "question": "Do coffee and tea count toward daily water intake?",
        "answer": "Yes, caffeinated beverages contribute to total fluid intake, though plain water should remain your primary hydration source."
      },
      {
        "question": "How can I check if I am properly hydrated?",
        "answer": "Monitor your urine color; pale straw or light yellow indicates optimal hydration, while dark yellow suggests dehydration."
      },
      {
        "question": "Can drinking too much water be dangerous?",
        "answer": "Yes, excessive water intake without electrolytes can dilute blood sodium, causing a rare but serious condition called hyponatremia."
      }
    ],
    "sources": [
      {
        "name": "National Academies of Sciences, Engineering, and Medicine",
        "url": "https://www.nationalacademies.org"
      }
    ]
  },
  "bmr-calculator": {
    "title": "BMR Calculator — HEALTH Guide & Formula",
    "overview": "Measures Basal Metabolic Rate (BMR)—the baseline number of calories your body burns at complete physical and digestive rest to maintain vital life functions.",
    "formula": "BMR (Mifflin-St Jeor) = (10 × W) + (6.25 × H) - (5 × A) + s",
    "explanation": "Calculated using the clinically validated Mifflin-St Jeor equation. W = Weight (kg), H = Height (cm), A = Age (years), s = Sex factor (+5 for men, -161 for women).",
    "example": {
      "title": "Worked Example: 30-Year-Old Female Weighing 62 kg at 165 cm",
      "inputs": "Age = 30 | Sex = Female | Weight = 62 kg | Height = 165 cm",
      "steps": [
        "Weight component = 10 × 62 = 620",
        "Height component = 6.25 × 165 = 1,031.25",
        "Age component = 5 × 30 = 150",
        "Female constant = -161",
        "BMR = 620 + 1,031.25 - 150 - 161 = 1,340.25 kcal/day"
      ],
      "summary": "Age = 30 | Sex = Female | Basal Metabolic Rate = 1,340 kcal/day"
    },
    "metricsText": "BMR accounts for approximately 60% to 75% of your total daily energy expenditure; vital organs like the liver, brain, and heart consume the majority.",
    "useCases": [
      "Calorie Floor Determination: Identify the minimum caloric threshold below which diets risk metabolic suppression.",
      "Body Recomposition: Track how adding lean skeletal muscle tissue increases resting basal metabolic rate.",
      "Clinical Nutrition: Provide baseline energy expenditure estimates for hospital patients and post-operative recovery."
    ],
    "commonMistakes": [
      "Confusing BMR with TDEE and eating only at BMR levels while engaging in heavy athletic workouts.",
      "Believing that crash dieting does not lower BMR (severe restriction causes adaptive thermogenesis, dropping BMR).",
      "Using outdated Harris-Benedict (1919) tables which tend to overestimate BMR by 5% to 10% compared to Mifflin-St Jeor."
    ],
    "faqs": [
      {
        "question": "Can I eat below my BMR to lose weight faster?",
        "answer": "Consistently eating below your BMR causes fatigue, muscle loss, nutrient deficiencies, and hormonal imbalances; create your deficit from your TDEE, not your BMR."
      },
      {
        "question": "How can I naturally increase my BMR?",
        "answer": "Building skeletal muscle tissue via resistance strength training increases resting metabolic rate, as muscle burns more calories at rest than fat tissue."
      },
      {
        "question": "Does BMR decrease with age?",
        "answer": "Yes, BMR typically declines by roughly 1% to 2% per decade after age 30, primarily due to gradual loss of lean muscle mass (sarcopenia)."
      }
    ],
    "sources": [
      {
        "name": "American Society for Nutrition",
        "url": "https://nutrition.org"
      }
    ]
  },
  "ideal-weight-calculator": {
    "title": "Ideal Weight Calculator — HEALTH Guide & Formula",
    "overview": "Estimates healthy body weight ranges based on clinical epidemiological equations including Devine, Robinson, Miller, and Hamwi formulas.",
    "formula": "Devine Formula: Men = 50 kg + 2.3 kg per inch over 5 feet | Women = 45.5 kg + 2.3 kg per inch over 5 feet",
    "explanation": "Calculates the statistical midpoint weight associated with minimum all-cause mortality for a given adult height and biological frame.",
    "example": {
      "title": "Worked Example: 5'10\" Male (70 inches tall)",
      "inputs": "Sex = Male | Height = 5 feet 10 inches (10 inches above 5 feet)",
      "steps": [
        "Base weight at 5 feet = 50 kg",
        "Height increment = 10 inches × 2.3 kg = 23 kg",
        "Devine ideal weight = 50 + 23 = 73.0 kg (160.9 lbs)",
        "Healthy clinical range (BMI 18.5–24.9) = 57.5 kg to 77.4 kg"
      ],
      "summary": "Height = 5'10\" | Devine Ideal = 73.0 kg | Recommended Healthy Range = 58 kg to 77 kg"
    },
    "metricsText": "There is no single universal 'perfect weight'; clinical medicine evaluates an optimal weight span of 15 to 20 kg based on individual bone frame and muscle mass.",
    "useCases": [
      "Medical Target Formulation: Establish realistic target weight goals during clinical weight management therapy.",
      "Pharmaceutical Dosing: Calculate ideal body weight for dosing medications that do not distribute into adipose tissue.",
      "Fitness Goal Benchmarking: Set sensible long-term physical targets that avoid extreme, unhealthy leanness."
    ],
    "commonMistakes": [
      "Obsessing over an exact single number rather than maintaining a healthy weight range.",
      "Ignoring body frame size (small, medium, large bone structures shift ideal targets by ±10%).",
      "Treating ideal weight formulas as diagnostic without evaluating body fat percentage."
    ],
    "faqs": [
      {
        "question": "Why do different formulas (Devine, Robinson, Hamwi) give different answers?",
        "answer": "Each formula was derived from different historical clinical populations and clinical medication dosing studies, creating slight variations."
      },
      {
        "question": "How do I determine my body frame size?",
        "answer": "Measure your wrist circumference: for a male over 5'5\", a wrist under 6.5\" is small frame, 6.5\"-7.5\" is medium, and over 7.5\" is large frame."
      },
      {
        "question": "Can a person be healthy above their ideal weight?",
        "answer": "Yes, an individual with high lean muscle mass and low visceral fat can exceed their ideal weight while remaining in peak cardiovascular health."
      }
    ],
    "sources": [
      {
        "name": "Centers for Disease Control and Prevention (CDC)",
        "url": "https://www.cdc.gov"
      }
    ]
  },
  "body-fat-calculator": {
    "title": "Body Fat % Calculator — HEALTH Guide & Formula",
    "overview": "Estimates total body fat percentage using the anthropometric US Navy circumference method based on neck, waist, and hip circumference measurements.",
    "formula": "Navy Formula (Men) = 495 / [1.0324 - 0.19077×log10(Waist - Neck) + 0.15456×log10(Height)] - 450",
    "explanation": "For women, formula incorporates hip circumference: [Waist + Hip - Neck]. Categorizes essential fat, athletic, fitness, acceptable, and obesity ranges.",
    "example": {
      "title": "Worked Example: Adult Male (Height 178 cm, Neck 38 cm, Waist 86 cm)",
      "inputs": "Sex = Male | Height = 178 cm | Neck = 38 cm | Waist = 86 cm",
      "steps": [
        "Waist minus Neck circumference = 86 - 38 = 48 cm",
        "Logarithmic evaluation of circumference difference and height",
        "Estimated Body Fat % = 16.4%",
        "Fitness category = Fitness Range (14%–17%)"
      ],
      "summary": "Height = 178 cm | Waist = 86 cm | Body Fat % = 16.4% | Category = Fitness Range"
    },
    "metricsText": "Body fat percentage provides a far superior assessment of metabolic and cardiovascular health than scale weight or BMI alone.",
    "useCases": [
      "Body Recomposition Monitoring: Track fat loss while verifying that resistance training preserves lean skeletal muscle.",
      "Athletic Conditioning: Monitor competition readiness for sports with weight classes (wrestling, boxing, rowing).",
      "Health Risk Stratification: Assess visceral adiposity risks associated with metabolic syndrome."
    ],
    "commonMistakes": [
      "Pulling the measuring tape too tight or leaving it slack across the waist during circumference measurement.",
      "Measuring waist circumference at the trouser belt line instead of the narrowest point or navel level.",
      "Comparing Navy tape method results directly against DEXA scans without accounting for ±3% method variance."
    ],
    "faqs": [
      {
        "question": "What is an ideal body fat percentage for men and women?",
        "answer": "For men: Athletic (6-13%), Fitness (14-17%), Acceptable (18-24%). For women: Athletic (14-20%), Fitness (21-24%), Acceptable (25-31%)."
      },
      {
        "question": "What is essential body fat?",
        "answer": "The minimal fat required for physiological survival, nerve insulation, and organ protection: roughly 2-5% for men and 10-13% for women."
      },
      {
        "question": "Where should waist circumference be measured?",
        "answer": "Men should measure horizontally across the navel; women should measure at the narrowest point of the natural waist above the hip bones."
      }
    ],
    "sources": [
      {
        "name": "American Council on Exercise (ACE) Body Composition",
        "url": "https://www.acefitness.org"
      }
    ]
  },
  "pregnancy-due-date-calculator": {
    "title": "Pregnancy Due Date Calculator — HEALTH Guide & Formula",
    "overview": "Estimates expected date of delivery (EDD) and gestational age based on the first day of the last menstrual period (LMP) using Naegele's Rule.",
    "formula": "EDD (Naegele's Rule) = First Day of LMP + 1 Year - 3 Months + 7 Days (280 days total)",
    "explanation": "Assumes a standard 28-day menstrual cycle with ovulation occurring on day 14. Adjusts for shorter or longer cycle lengths.",
    "example": {
      "title": "Worked Example: Last Menstrual Period on May 10th with Standard 28-Day Cycle",
      "inputs": "LMP = May 10, 2026 | Cycle Length = 28 Days",
      "steps": [
        "Add 7 days to day 10 = May 17",
        "Subtract 3 calendar months = February 17",
        "Add 1 year = February 17, 2027",
        "Total gestational duration = 40 Weeks (280 Days)"
      ],
      "summary": "LMP = May 10, 2026 | Estimated Due Date = February 17, 2027 | Full Term Milestone = 37-42 Weeks"
    },
    "metricsText": "Only about 4% to 5% of babies arrive on their exact calculated due date; a birth window between 37 and 42 weeks is considered full term.",
    "useCases": [
      "Prenatal Care Milestones: Schedule first trimester ultrasound scans, genetic screenings, and anatomy scans.",
      "Maternity Leave Planning: Plan corporate maternity leave notices and childcare arrangements ahead of delivery.",
      "Fetal Development Tracking: Track week-by-week embryonic development stages and fetal growth milestones."
    ],
    "commonMistakes": [
      "Counting gestational age from the estimated conception date instead of the first day of the last menstrual period.",
      "Failing to adjust for irregular or long menstrual cycles (e.g. 35-day cycles shift due date by roughly 7 days).",
      "Treating the due date as a rigid deadline rather than an estimated median delivery window."
    ],
    "faqs": [
      {
        "question": "Why is pregnancy calculated from LMP instead of conception?",
        "answer": "Because the exact date of conception is rarely known with certainty, whereas the first day of the last period is an easily observable event."
      },
      {
        "question": "How does an early ultrasound affect the due date?",
        "answer": "A first-trimester ultrasound (measuring crown-rump length) is the most accurate dating method; doctors adjust due dates if it differs by > 5-7 days from LMP."
      },
      {
        "question": "What is considered a full-term pregnancy?",
        "answer": "A pregnancy is considered full term between 39 weeks 0 days and 40 weeks 6 days; early term is 37-38 weeks."
      }
    ],
    "sources": [
      {
        "name": "American College of Obstetricians and Gynecologists (ACOG)",
        "url": "https://www.acog.org"
      }
    ]
  },
  "ovulation-calculator": {
    "title": "Ovulation Calculator — HEALTH Guide & Formula",
    "overview": "Predicts peak fertile windows and estimated ovulation dates based on menstrual cycle lengths to optimize natural conception timing.",
    "formula": "Estimated Ovulation Day = Total Cycle Length - 14 Days (Luteal Phase)",
    "explanation": "Fertile window spans 5 days prior to ovulation plus the day of ovulation, as sperm can survive up to 5 days in fertile cervical mucus.",
    "example": {
      "title": "Worked Example: 30-Day Cycle with Period Starting on October 1st",
      "inputs": "First Day of Period = October 1 | Average Cycle Length = 30 Days",
      "steps": [
        "Ovulation day = 30 - 14 = Day 16 of cycle",
        "Estimated ovulation date = October 16th",
        "Peak fertile window (5 days prior + ovulation day) = October 11th through October 16th",
        "Highest conception probability = October 14th, 15th, and 16th"
      ],
      "summary": "Ovulation Date = Oct 16 | Fertile Window = Oct 11 - Oct 16 | Peak Fertility = Oct 15-16"
    },
    "metricsText": "The unfertilized ovum survives for only 12 to 24 hours after release; timing intercourse in the 2-3 days before ovulation provides maximum conception likelihood.",
    "useCases": [
      "Conception Optimization: Time intercourse during peak fertile window days to maximize monthly pregnancy probabilities.",
      "Cycle Awareness: Understand personal luteal phase duration and biological signs of ovulation (LH surges, cervical fluid changes).",
      "Natural Family Planning: Combine calendar estimates with basal body temperature (BBT) charting."
    ],
    "commonMistakes": [
      "Assuming every woman ovulates on Day 14 regardless of whether their personal cycle is 24 days or 35 days.",
      "Waiting until the day after ovulation to have intercourse (when the egg has already degenerated).",
      "Relying on calendar ovulation calculators alone for individuals with highly irregular cycles or PCOS."
    ],
    "faqs": [
      {
        "question": "How long is the fertile window?",
        "answer": "The fertile window spans roughly 6 days: the 5 days before ovulation plus the day of ovulation itself."
      },
      {
        "question": "What are physical signs of ovulation?",
        "answer": "Clear, stretchy 'egg-white' cervical mucus, mild pelvic twinges (mittelschmerz), increased libido, and a sustained rise in morning basal body temperature."
      },
      {
        "question": "How do ovulation predictor kits (OPKs) work?",
        "answer": "They detect a surge in Luteinizing Hormone (LH) in urine, which typically triggers ovulation 24 to 36 hours later."
      }
    ],
    "sources": [
      {
        "name": "American Society for Reproductive Medicine (ASRM)",
        "url": "https://www.asrm.org"
      }
    ]
  },
  "period-calculator": {
    "title": "Period Calculator — HEALTH Guide & Formula",
    "overview": "Forecasts future menstrual cycle start dates, expected period lengths, and PMS symptom windows based on historical cycle tracking data.",
    "formula": "Next Period Date = Start Date of Last Period + Average Cycle Length (Days)",
    "explanation": "A standard healthy menstrual cycle averages 28 days, but normal clinical variation ranges from 21 to 35 days in adult females.",
    "example": {
      "title": "Worked Example: 29-Day Cycle Starting on August 5th",
      "inputs": "Last Period Start = August 5 | Average Cycle Length = 29 Days | Bleeding Duration = 5 Days",
      "steps": [
        "Next period start date = August 5 + 29 Days = September 3rd",
        "Bleeding phase = September 3rd to September 7th",
        "Subsequent cycle start = September 3 + 29 Days = October 2nd"
      ],
      "summary": "Last Period = Aug 5 | Next Expected Period = Sept 3 | Following Cycle = Oct 2"
    },
    "metricsText": "Tracking menstrual cycle regularity over 3 to 6 consecutive months establishes your true biological baseline and detects cycle irregularities early.",
    "useCases": [
      "Event & Travel Planning: Schedule athletic competitions, vacations, and social events around anticipated menstrual bleeding.",
      "Gynecological Health Tracking: Document cycle length variances to share with healthcare providers during clinical evaluations.",
      "PMS Management: Anticipate premenstrual syndrome symptom phases to optimize rest, nutrition, and stress management."
    ],
    "commonMistakes": [
      "Entering only the number of bleeding days instead of the full cycle length from Day 1 to the next Day 1.",
      "Assuming minor 2-3 day fluctuations indicate medical problems (temporary stress and travel frequently shift cycle timing).",
      "Failing to record unexpected spotting or mid-cycle breakthrough bleeding."
    ],
    "faqs": [
      {
        "question": "How is menstrual cycle length calculated?",
        "answer": "Count from the first day of full menstrual bleeding in one cycle up to (but not including) the first day of bleeding in the next cycle."
      },
      {
        "question": "What is considered a normal cycle length?",
        "answer": "A normal menstrual cycle in healthy adults ranges between 21 and 35 days; cycles under 21 days or over 35 days warrant medical review."
      },
      {
        "question": "What causes periods to be irregular?",
        "answer": "Common factors include emotional stress, rapid weight changes, thyroid disorders, polycystic ovary syndrome (PCOS), and perimenopause."
      }
    ],
    "sources": [
      {
        "name": "Office on Women's Health (U.S. Department of Health and Human Services)",
        "url": "https://www.womenshealth.gov"
      }
    ]
  },
  "macro-calculator": {
    "title": "Macro Calculator — HEALTH Guide & Formula",
    "overview": "Translates total daily calorie targets into specific gram breakdowns of dietary protein, carbohydrates, and fats tailored to fitness goals.",
    "formula": "Calories = (Protein_g × 4) + (Carb_g × 4) + (Fat_g × 9)",
    "explanation": "Protein and carbs provide 4 kcal per gram; fat provides 9 kcal per gram. Ratios adjust for fat loss, muscle building, or ketogenic diets.",
    "example": {
      "title": "Worked Example: 2,200 kcal Diet (High Protein: 30% Protein, 40% Carbs, 30% Fat)",
      "inputs": "Target Calories = 2,200 kcal/day | Protein = 30% | Carbs = 40% | Fat = 30%",
      "steps": [
        "Protein calories = 2,200 × 0.30 = 660 kcal; Grams = 660 / 4 = 165 g/day",
        "Carbohydrate calories = 2,200 × 0.40 = 880 kcal; Grams = 880 / 4 = 220 g/day",
        "Fat calories = 2,200 × 0.30 = 660 kcal; Grams = 660 / 9 = 73 g/day"
      ],
      "summary": "Calories = 2,200 kcal | Protein = 165 g (30%) | Carbs = 220 g (40%) | Fat = 73 g (30%)"
    },
    "metricsText": "Maintaining protein intake around 1.6 to 2.2 grams per kilogram of body weight optimizes muscle protein synthesis during fat loss phases.",
    "useCases": [
      "Bodybuilding Prep: Structure precise macronutrient distributions to maximize muscle hypertrophy while cutting body fat.",
      "Ketogenic Diets: Limit carbohydrates to under 50g per day while allocating 70% to 75% of calories to healthy dietary fats.",
      "Endurance Fueling: Optimize carbohydrate intake (5-8 g/kg) to maintain glycogen stores during marathon training."
    ],
    "commonMistakes": [
      "Cutting dietary fat too low (< 15% of total calories), which disrupts endocrine hormone production and joint health.",
      "Setting protein targets higher than necessary (> 3 g/kg), displacing beneficial fiber-rich carbohydrates.",
      "Weighing cooked meats instead of raw weights, which skews actual protein tracking accuracy."
    ],
    "faqs": [
      {
        "question": "How much protein do I need per day?",
        "answer": "Sedentary adults need 0.8 g/kg; active individuals and strength trainers benefit from 1.6 to 2.2 g per kg of body weight."
      },
      {
        "question": "Why do fats have more calories than carbs or protein?",
        "answer": "Dietary fat is more energy-dense, yielding 9 calories per gram compared to 4 calories per gram for protein and carbohydrates."
      },
      {
        "question": "Are all carbs processed the same way?",
        "answer": "No. Complex carbohydrates (whole grains, oats) digest slowly and provide sustained energy, while refined simple sugars cause rapid blood glucose spikes."
      }
    ],
    "sources": [
      {
        "name": "International Society of Sports Nutrition (ISSN)",
        "url": "https://www.jissn.com"
      }
    ]
  },
  "heart-rate-zone-calculator": {
    "title": "Heart Rate Zone Calculator — HEALTH Guide & Formula",
    "overview": "Calculates aerobic and anaerobic target heart rate training zones (Zone 1 through Zone 5) based on maximum heart rate and resting heart rate.",
    "formula": "Max HR (Tanaka) = 208 - (0.7 × Age) | Target HR (Karvonen) = [(Max HR - Resting HR) × % Intensity] + Resting HR",
    "explanation": "Zone 1: Active Recovery (50-60%), Zone 2: Aerobic Base (60-70%), Zone 3: Tempo (70-80%), Zone 4: Lactate Threshold (80-90%), Zone 5: Anaerobic Max (90-100%).",
    "example": {
      "title": "Worked Example: 35-Year-Old Runner with 60 bpm Resting Heart Rate",
      "inputs": "Age = 35 | Resting Heart Rate = 60 bpm | Method = Karvonen Formula",
      "steps": [
        "Estimated Max Heart Rate = 208 - (0.7 × 35) = 183.5 bpm",
        "Heart Rate Reserve (HRR) = 183.5 - 60 = 123.5 bpm",
        "Zone 2 Aerobic Base (60% to 70% HRR) = [123.5 × 0.60] + 60 = 134 bpm to [123.5 × 0.70] + 60 = 146 bpm"
      ],
      "summary": "Max HR = 184 bpm | Zone 1 (Recovery) = 122-134 bpm | Zone 2 (Aerobic Base) = 134-146 bpm | Zone 4 (Threshold) = 159-171 bpm"
    },
    "metricsText": "Polarized training (80% of workout volume in easy Zone 2, 20% in high-intensity Zone 4/5) builds superior endurance compared to chronic mid-intensity training.",
    "useCases": [
      "Zone 2 Endurance Base Building: Build mitochondrial density and fat oxidation capacity through conversational-pace running.",
      "High-Intensity Interval Training (HIIT): Calibrate sprint intervals to ensure efforts reach true Zone 5 (> 90% HR max).",
      "Cardiovascular Recovery Monitoring: Track morning resting heart rate trends to detect overtraining and systemic fatigue."
    ],
    "commonMistakes": [
      "Using the overly simplistic '220 minus age' formula, which has high individual variance (Tanaka formula is more accurate).",
      "Running 'easy' runs too fast, drifting into Zone 3 tempo and blunting aerobic mitochondrial adaptations.",
      "Failing to account for cardiac drift during long workouts in hot, humid weather conditions."
    ],
    "faqs": [
      {
        "question": "What is Zone 2 training and why is it popular?",
        "answer": "Zone 2 (60-70% max HR) trains your slow-twitch muscle fibers to burn fat as fuel efficiently, building a massive aerobic cardiovascular engine."
      },
      {
        "question": "What is cardiac drift?",
        "answer": "A natural physiological phenomenon where heart rate gradually drifts upward during prolonged exercise even though running pace stays constant, caused by dehydration and body heating."
      },
      {
        "question": "How does resting heart rate reflect fitness?",
        "answer": "A lower resting heart rate (typically 45-60 bpm in fit individuals) indicates a stronger stroke volume, meaning your heart pumps more blood per beat."
      }
    ],
    "sources": [
      {
        "name": "American Heart Association Target Heart Rates",
        "url": "https://www.heart.org"
      }
    ]
  },
  "waist-hip-ratio-calculator": {
    "title": "Waist-to-Hip Ratio Calculator — HEALTH Guide & Formula",
    "overview": "Evaluates visceral abdominal fat distribution and cardiovascular disease risk by comparing waist circumference to hip circumference.",
    "formula": "WHR = Waist Circumference / Hip Circumference",
    "explanation": "World Health Organization obesity cutoffs for cardiovascular risk: WHR > 0.90 for men, WHR > 0.85 for women.",
    "example": {
      "title": "Worked Example: Adult Male with 88 cm Waist and 98 cm Hips",
      "inputs": "Waist = 88 cm | Hips = 98 cm | Sex = Male",
      "steps": [
        "WHR Ratio = 88 / 98 = 0.898 (0.90)",
        "WHO Cardiovascular Risk Category: Moderate / Normal Risk (Threshold is 0.90)"
      ],
      "summary": "Waist = 88 cm | Hips = 98 cm | WHR = 0.90 | Risk Classification = Normal"
    },
    "metricsText": "An elevated waist-to-hip ratio indicates android 'apple-shaped' visceral fat surrounding internal organs, which carries far higher metabolic disease risk than subcutaneous fat.",
    "useCases": [
      "Cardiometabolic Risk Assessment: Screen for risks of type-2 diabetes, hypertension, and atherosclerosis.",
      "Body Composition Tracking: Measure changes in central abdominal fat during targeted diet and fitness interventions.",
      "BMI Contextualization: Complement standard BMI measurements with central visceral adiposity data."
    ],
    "commonMistakes": [
      "Measuring waist circumference while sucking in the abdomen, which produces artificially low risk scores.",
      "Measuring hips at the pelvic crest instead of the widest circumference around the buttocks.",
      "Using different tension levels on the tape measure across repeated monthly checks."
    ],
    "faqs": [
      {
        "question": "Why is Waist-to-Hip Ratio considered better than BMI?",
        "answer": "Because WHR distinguishes between healthy subcutaneous fat on the hips/thighs and dangerous visceral fat stored deep around abdominal organs."
      },
      {
        "question": "What is an apple shape versus a pear shape?",
        "answer": "Apple shape carries fat around the abdomen (higher WHR, higher cardiovascular risk); pear shape carries fat around the hips and thighs (lower metabolic risk)."
      },
      {
        "question": "Where should the hip measurement be taken?",
        "answer": "Stand with feet together and measure around the widest portion of your buttocks and hips, keeping the tape parallel to the floor."
      }
    ],
    "sources": [
      {
        "name": "World Health Organization Waist Circumference Report",
        "url": "https://www.who.int"
      }
    ]
  },
  "sleep-calculator": {
    "title": "Sleep Cycle Calculator — HEALTH Guide & Formula",
    "overview": "Calculates optimal bedtime and wake-up times aligned with natural 90-minute ultradian sleep cycles to eliminate morning grogginess and sleep inertia.",
    "formula": "Target Wake Time = Bedtime + (N × 90 Minutes) + 15 Minutes Sleep Latency",
    "explanation": "Human nocturnal sleep progresses in 90-minute cycles through light, deep, and REM sleep. Waking mid-cycle causes sleep inertia; waking at cycle completion ensures alertness.",
    "example": {
      "title": "Worked Example: Need to Wake Up at 6:30 AM",
      "inputs": "Desired Wake Time = 6:30 AM | Average Sleep Latency = 15 Minutes",
      "steps": [
        "6 cycles (9.0 hours): Bedtime at 9:15 PM",
        "5 cycles (7.5 hours - recommended): Bedtime at 10:45 PM",
        "4 cycles (6.0 hours): Bedtime at 12:15 AM"
      ],
      "summary": "Wake Time = 6:30 AM | Optimal 5-Cycle Bedtime = 10:45 PM | 6-Cycle Bedtime = 9:15 PM"
    },
    "metricsText": "Sleeping 7.5 hours (5 full cycles) often leaves you feeling more alert than sleeping 8 hours and being jarred awake mid-way through deep slow-wave sleep.",
    "useCases": [
      "Shift Work & Travel Planning: Plan restful sleep intervals when managing rotating shifts or cross-time-zone jet lag.",
      "Exam & Presentation Preparation: Ensure optimal REM sleep cycles for memory consolidation before critical events.",
      "Circadian Alignment: Align bedtime consistency with natural melatonin secretion patterns."
    ],
    "commonMistakes": [
      "Ignoring the 15 to 20 minutes it naturally takes for an adult to fall asleep (sleep latency).",
      "Relying on multiple snooze alarms, which fragments light sleep and worsens sleep inertia.",
      "Consuming blue light from smartphones in bed, which suppresses natural melatonin release."
    ],
    "faqs": [
      {
        "question": "How long is a normal sleep cycle?",
        "answer": "A normal sleep cycle lasts approximately 90 to 110 minutes, cycling through NREM Stage 1, Stage 2, Slow-Wave Deep Sleep, and REM sleep."
      },
      {
        "question": "What is sleep inertia?",
        "answer": "The feeling of grogginess, disorientation, and cognitive impairment experienced when awakened abruptly from deep slow-wave sleep."
      },
      {
        "question": "How many sleep cycles do adults need per night?",
        "answer": "Most healthy adults require 5 complete sleep cycles (roughly 7.5 hours) or 6 cycles (9.0 hours) per night."
      }
    ],
    "sources": [
      {
        "name": "National Sleep Foundation",
        "url": "https://www.thensf.org"
      }
    ]
  },
  "calories-burned-calculator": {
    "title": "Calories Burned Calculator — HEALTH Guide & Formula",
    "overview": "Estimates calories expended across various athletic sports, gym workouts, and everyday activities based on Metabolic Equivalent of Task (MET) values.",
    "formula": "Calories Burned = MET × Body Weight (kg) × Duration (Hours)",
    "explanation": "1 MET represents energy expended sitting quietly at rest (~1 kcal/kg/hour). Walking briskly is ~3.8 METs; running at 10 km/h is ~9.8 METs.",
    "example": {
      "title": "Worked Example: 70 kg Adult Running at 9.8 km/h for 45 Minutes (MET 9.8)",
      "inputs": "Weight = 70 kg | Duration = 45 Minutes (0.75 Hours) | MET = 9.8 (Running 6 mph)",
      "steps": [
        "Hourly calorie burn = 9.8 × 70 kg = 686 kcal/hour",
        "Total calories burned for 45 min = 686 × 0.75 = 514.5 kcal"
      ],
      "summary": "Activity = Running (6 mph) | Weight = 70 kg | Duration = 45 min | Calories Expended = 515 kcal"
    },
    "metricsText": "Heavier individuals burn more total calories performing the same physical activity because moving greater body mass requires more mechanical energy.",
    "useCases": [
      "Workout Energy Tracking: Calculate gross calorie expenditure from gym cardio, cycling, and resistance sessions.",
      "Energy Balance Management: Plan post-exercise meal nutrition to match daily expenditure targets.",
      "Non-Exercise Activity (NEAT): Quantify calories burned through daily walking, household chores, and gardening."
    ],
    "commonMistakes": [
      "Double-counting BMR calories when adding exercise calories to daily intake logs.",
      "Relying unverified on gym elliptical machine calorie counters, which often overestimate expenditure by 20% to 30%.",
      "Overeating post-workout ('compensatory eating') and consuming more calories than the workout burned."
    ],
    "faqs": [
      {
        "question": "What does MET stand for in exercise science?",
        "answer": "Metabolic Equivalent of Task: the ratio of your working metabolic rate relative to your resting metabolic rate."
      },
      {
        "question": "Why do fitness smartwatches report different calorie burns?",
        "answer": "Wearables use proprietary algorithms combining optical heart rate, accelerometer motion, and age/weight data, each with varying estimation models."
      },
      {
        "question": "Does walking a kilometer burn the same calories as running a kilometer?",
        "answer": "Running burns slightly more total calories per kilometer due to the vertical mechanical oscillation and energy needed to propel the body airborne."
      }
    ],
    "sources": [
      {
        "name": "Compendium of Physical Activities (Stanford University)",
        "url": "https://pacompendium.com"
      }
    ]
  },
  "percentage-calculator": {
    "title": "Percentage Calculator — EDUCATION Guide & Formula",
    "overview": "Computes three essential percentage calculations: what is X% of Y, X is what percentage of Y, and percentage increase or decrease between two numbers.",
    "formula": "Percentage Value = (Part / Whole) × 100 | Percentage of Number = (Percentage / 100) × Number",
    "explanation": "Calculates proportional ratios, test score percentages, marksheets, and financial variance metrics.",
    "example": {
      "title": "Worked Example: Scoring 465 Marks out of 500 Maximum Marks",
      "inputs": "Marks Scored = 465 | Maximum Total Marks = 500",
      "steps": [
        "Divide obtained score by total maximum score: 465 / 500 = 0.93",
        "Multiply by 100 to convert to percentage: 0.93 × 100 = 93.0%"
      ],
      "summary": "Obtained = 465 | Total = 500 | Percentage = 93.0% (Grade A+)"
    },
    "metricsText": "A percentage expresses a fraction with 100 as the common denominator, enabling direct mathematical comparison across different scales.",
    "useCases": [
      "Exam Score Conversion: Convert aggregate marks from board and university exams into standardized percentages.",
      "Retail Discounts: Verify clearance sale price reductions and calculate sales tax amounts on shopping receipts.",
      "Financial Growth: Measure year-over-year revenue growth, investment returns, and salary increases."
    ],
    "commonMistakes": [
      "Confusing percentage change (relative change) with percentage points (simple arithmetic subtraction).",
      "Reversing the numerator and denominator when calculating what percent one number is of another.",
      "Dividing by the new number instead of the original base number when calculating percentage increase."
    ],
    "faqs": [
      {
        "question": "How do I calculate what percentage a number is of another?",
        "answer": "Divide the part by the whole and multiply by 100 (e.g. 25 of 80: [25 / 80] × 100 = 31.25%)."
      },
      {
        "question": "What is the difference between percent and percentage points?",
        "answer": "If a tax rate moves from 10% to 12%, it increased by 2 percentage points, but rose by 20% in relative terms."
      },
      {
        "question": "Can a percentage exceed 100%?",
        "answer": "Yes. Any value that is more than double its baseline represents an increase greater than 100% (e.g. 250 is 250% of 100)."
      }
    ],
    "sources": [
      {
        "name": "National Council of Teachers of Mathematics",
        "url": "https://www.nctm.org"
      }
    ]
  },
  "cgpa-calculator": {
    "title": "CGPA Calculator — EDUCATION Guide & Formula",
    "overview": "Calculates Cumulative Grade Point Average (CGPA) on a 10-point scale across all academic semesters and converts cumulative scores to equivalent percentages.",
    "formula": "CGPA = Sum of (Subject Grade Points × Credit Hours) / Total Credit Hours Across All Semesters",
    "explanation": "For CBSE secondary schools: CGPA is the simple average of grade points in 5 main subjects; Percentage = CGPA × 9.5.",
    "example": {
      "title": "Worked Example: Student with 5 Subjects on 10-Point Grading Scale",
      "inputs": "Grade Points: Math = 9.0, Science = 8.0, English = 9.0, Social = 8.0, Hindi = 9.0",
      "steps": [
        "Sum of Grade Points = 9.0 + 8.0 + 9.0 + 8.0 + 9.0 = 43.0",
        "CGPA = 43.0 / 5 = 8.60 CGPA",
        "CBSE Percentage Equivalent = 8.60 × 9.5 = 81.70%"
      ],
      "summary": "Total Grade Points = 43.0 | CGPA = 8.60 / 10 | Percentage Equivalent = 81.70%"
    },
    "metricsText": "The CBSE 9.5 conversion multiplier was derived from statistical score distributions to reflect the midpoint of marks within each grade band.",
    "useCases": [
      "CBSE Secondary School Marksheets: Calculate official Class 10 board exam CGPA and percentage equivalents.",
      "Engineering College Transcripts: Combine semester-by-semester SGPA results into cumulative degree CGPA.",
      "Campus Placement Screening: Verify eligibility against corporate cutoffs (e.g. minimum 7.0 or 7.5 CGPA)."
    ],
    "commonMistakes": [
      "Using a 10x multiplier instead of the official CBSE 9.5 multiplier when converting CGPA to percentage.",
      "Averaging semester SGPAs without weighting by the different credit hours completed in each semester.",
      "Prematurely rounding grade points before calculating the final cumulative quotient."
    ],
    "faqs": [
      {
        "question": "Why does CBSE use 9.5 as the multiplier instead of 10?",
        "answer": "CBSE analyzed past score distributions: students scoring in the A1 band (91-100 marks) averaged 95 marks, giving a conversion factor of 95 / 10 = 9.5."
      },
      {
        "question": "How is SGPA different from CGPA?",
        "answer": "SGPA (Semester Grade Point Average) measures academic performance in a single term; CGPA measures cumulative performance across all terms to date."
      },
      {
        "question": "Is a 9.0 CGPA considered first class with distinction?",
        "answer": "In most Indian universities, a CGPA of 7.5 and above qualifies as First Class with Distinction (or First Division)."
      }
    ],
    "sources": [
      {
        "name": "Central Board of Secondary Education (CBSE)",
        "url": "https://www.cbse.gov.in"
      }
    ]
  },
  "attendance-calculator": {
    "title": "Attendance Calculator — EDUCATION Guide & Formula",
    "overview": "Tracks academic attendance percentages and calculates the exact number of future classes you can miss or must attend to meet minimum institutional attendance criteria.",
    "formula": "Current Attendance % = (Classes Attended / Total Classes Conducted) × 100",
    "explanation": "To reach Target %: Required Classes = [(Target × Total - 100 × Attended) / (100 - Target)]. To find Safe Bunks: Bunks = [(100 × Attended - Target × Total) / Target].",
    "example": {
      "title": "Worked Example: 45 Attended out of 60 Classes with 75% Requirement",
      "inputs": "Classes Attended = 45 | Total Conducted = 60 | Target Requirement = 75%",
      "steps": [
        "Current Attendance = (45 / 60) × 100 = 75.0%",
        "Safe Bunk Calculation: [100 × 45 - 75 × 60] / 75 = [4500 - 4500] / 75 = 0 classes",
        "If 20 more classes are held in the semester, attending 15 keeps attendance at (60 / 80) × 100 = 75.0%"
      ],
      "summary": "Current Attendance = 75.0% | Status: Eligible | Safe Bunks = 0 Classes"
    },
    "metricsText": "Most universities mandate 75% minimum attendance to sit for final semester examinations under University Grants Commission (UGC) regulations.",
    "useCases": [
      "Exam Eligibility Safeguard: Ensure attendance remains strictly above 75% or 80% to prevent academic debarment.",
      "Absence Planning: Calculate how many classes can be safely skipped for college festivals, interviews, or illness.",
      "Attendance Recovery: Determine the exact consecutive attendance streak needed to recover from low attendance."
    ],
    "commonMistakes": [
      "Assuming a missed 2-hour laboratory block counts as only 1 missed lecture attendance point.",
      "Forgetting that each skipped class increases the denominator (total classes held), dropping percentage rapidly.",
      "Failing to submit medical certificates within institutional deadlines to claim medical attendance leave."
    ],
    "faqs": [
      {
        "question": "How many classes do I need to attend to reach 75% from 60%?",
        "answer": "Use the formula: Required = (0.75 × Total - Attended) / (1 - 0.75); you must attend 3 classes for every 1 future class missed."
      },
      {
        "question": "What happens if my attendance falls below 75%?",
        "answer": "Depending on university policy, you may receive a condonation fine, lose internal assessment marks, or be debarred from writing exams."
      },
      {
        "question": "Do college lab sessions count the same as theory lectures?",
        "answer": "Many universities assign higher credit or double attendance hours to 2-3 hour practical lab sessions."
      }
    ],
    "sources": [
      {
        "name": "University Grants Commission (UGC)",
        "url": "https://www.ugc.gov.in"
      }
    ]
  },
  "gpa-calculator": {
    "title": "GPA Calculator — EDUCATION Guide & Formula",
    "overview": "Calculates single-semester Grade Point Average (GPA) on a 4.0 or 10.0 scale by weighting individual course letter grades by their assigned credit hours.",
    "formula": "GPA = Sum of (Course Credit Hours × Grade Point) / Total Semester Credit Hours",
    "explanation": "Standard 4.0 scale mappings: A (4.0), A- (3.7), B+ (3.3), B (3.0), B- (2.7), C+ (2.3), C (2.0), D (1.0), F (0.0).",
    "example": {
      "title": "Worked Example: 4 Courses Completed in a Semester on 4.0 Scale",
      "inputs": "Math (4 cr, Grade A=4.0) | Physics (3 cr, Grade B+=3.3) | English (3 cr, Grade A-=3.7) | Lab (1 cr, Grade A=4.0)",
      "steps": [
        "Quality points = (4 × 4.0) + (3 × 3.3) + (3 × 3.7) + (1 × 4.0) = 16.0 + 9.9 + 11.1 + 4.0 = 41.0 points",
        "Total semester credits = 4 + 3 + 3 + 1 = 11 credits",
        "Semester GPA = 41.0 / 11 = 3.73 GPA"
      ],
      "summary": "Total Credits = 11 | Quality Points = 41.0 | Semester GPA = 3.73 / 4.0 (Dean's List)"
    },
    "metricsText": "High-credit core courses (3-4 credits) impact your GPA three to four times more than single-credit introductory seminars or lab modules.",
    "useCases": [
      "Semester Academic Tracking: Calculate term GPA to verify eligibility for academic honors and scholarships.",
      "Grading Strategy: Determine which course grades require greatest study focus to maximize semester GPA.",
      "Exchange Student Conversion: Convert European ECTS or Asian grading scales to standard US 4.0 GPA."
    ],
    "commonMistakes": [
      "Calculating an unweighted average of letter grades without multiplying by each course's credit hours.",
      "Including non-credit audit courses or Pass/Fail courses in the GPA credit calculation.",
      "Failing to account for plus/minus grading nuances (+0.3 / -0.3 adjustments) on 4.0 scales."
    ],
    "faqs": [
      {
        "question": "What is a good GPA on a 4.0 scale?",
        "answer": "A 3.0 (B average) is standard; 3.5+ qualifies for Dean's List honors; 3.8+ is competitive for top-tier graduate schools."
      },
      {
        "question": "Do Pass/Fail or Withdrawn (W) grades affect GPA?",
        "answer": "Pass/Fail and official course withdrawals (W) do not impact GPA; however, failing a Pass/Fail course (Fail) may count as 0.0 points in some colleges."
      },
      {
        "question": "How do credit hours affect my GPA?",
        "answer": "Credit hours represent weighting: getting an A in a 4-credit course provides four times the grade points of getting an A in a 1-credit course."
      }
    ],
    "sources": [
      {
        "name": "National Association of Student Financial Aid Administrators",
        "url": "https://www.nasfaa.org"
      }
    ]
  },
  "grade-calculator": {
    "title": "Grade Calculator — EDUCATION Guide & Formula",
    "overview": "Computes overall course grades based on weighted syllabus assessment categories (homework, midterms, quizzes, laboratory work, and final exams).",
    "formula": "Final Grade (%) = Sum of (Category Average Score % × Category Weight %)",
    "explanation": "Weights must sum to 100%. To find needed score on final exam: Needed = [Target Grade - Current Weighted Score] / Final Exam Weight.",
    "example": {
      "title": "Worked Example: Course with Homework (20%), Midterm (30%), and Final (50%)",
      "inputs": "Homework = 90% (wt 20%) | Midterm = 80% (wt 30%) | Target Grade = 85% (Grade A)",
      "steps": [
        "Current earned points = (90 × 0.20) + (80 × 0.30) = 18.0 + 24.0 = 42.0 points",
        "Points needed from final exam = 85.0 - 42.0 = 43.0 points",
        "Required score on final exam = 43.0 / 0.50 = 86.0%"
      ],
      "summary": "Current Grade = 84.0% | Target = 85.0% | Needed on 50% Final Exam = 86.0%"
    },
    "metricsText": "Heavily weighted final exams (40% to 50%) can dramatically swing a course grade by two full letter grades in a single test.",
    "useCases": [
      "Final Exam Planning: Calculate the exact minimum score needed on the final exam to pass or secure an A grade.",
      "Syllabus Weight Breakdown: Map out how much each homework assignment and quiz contributes to total course grades.",
      "Academic Triage: Allocate study hours strategically to assessments carrying the highest percentage weighting."
    ],
    "commonMistakes": [
      "Summing raw assignment scores together when syllabus categories carry unequal percentage weights.",
      "Forgetting to drop the lowest homework or quiz grade if the professor's syllabus allows dropped scores.",
      "Assuming a 90% average before the final exam guarantees an A without calculating the final exam's impact."
    ],
    "faqs": [
      {
        "question": "How do I calculate what I need on the final exam?",
        "answer": "Subtract your current weighted points from your target grade percentage, then divide by the decimal weight of the final exam."
      },
      {
        "question": "What if syllabus category weights do not equal 100%?",
        "answer": "Divide your earned weighted points by the sum of completed category weights to find your current course standing."
      },
      {
        "question": "How do curved grades impact weighted calculations?",
        "answer": "Curving adjusts the raw score distribution across the entire class, typically boosting the class median to a target grade (like B or B-)."
      }
    ],
    "sources": [
      {
        "name": "Association of American Colleges and Universities",
        "url": "https://www.aacu.org"
      }
    ]
  },
  "cgpa-to-percentage-calculator": {
    "title": "CGPA to Percentage Converter — EDUCATION Guide & Formula",
    "overview": "Converts university and CBSE 10-point scale CGPA scores into official percentage equivalents using verified institutional formulas.",
    "formula": "Percentage (%) = CGPA × 9.5 (CBSE Standard) | University Formula: (CGPA - 0.75) × 10 or (CGPA - 0.5) × 10",
    "explanation": "CBSE uses the 9.5 factor; Mumbai University uses (7.1 × CGPA) + 11; VTU and KTU use (CGPA - 0.75) × 10. Check transcript guidelines.",
    "example": {
      "title": "Worked Example: Converting 8.8 CGPA under CBSE Guidelines",
      "inputs": "CGPA = 8.8 on a 10.0 scale | Formula = CBSE Standard (9.5x)",
      "steps": [
        "Multiply CGPA by conversion factor: 8.8 × 9.5 = 83.60%",
        "Corresponding Letter Grade: A1 Band (Excellent Academic Standing)"
      ],
      "summary": "CGPA = 8.8 / 10 | Conversion Multiplier = 9.5 | Percentage Equivalent = 83.60%"
    },
    "metricsText": "Different Indian engineering universities use distinct conversion multipliers; always verify the certified formula printed on the reverse of your official degree transcript.",
    "useCases": [
      "Government Job Applications: Convert university CGPA to percentage for UPSC, SSC, and state public service commission forms.",
      "Corporate Recruitment: Fill out company job portal eligibility forms that mandate percentage inputs.",
      "Scholarship Applications: Verify whether academic standing meets minimum percentage criteria (e.g. 60% or 75%)."
    ],
    "commonMistakes": [
      "Using the CBSE 9.5 formula for university engineering degrees that mandate (CGPA - 0.75) × 10.",
      "Multiplying directly by 10 (e.g. 8.0 CGPA = 80%), which is invalid for most Indian universities.",
      "Failing to attach the official formula circular when submitting degree certificates to employers."
    ],
    "faqs": [
      {
        "question": "Why doesn't CGPA convert to percentage simply by multiplying by 10?",
        "answer": "Because grade point bands represent score ranges rather than single marks, and linear 10x scaling inflates marks unrealistically."
      },
      {
        "question": "What is VTU's official CGPA to percentage formula?",
        "answer": "Visvesvaraya Technological University (VTU) uses: Percentage (%) = (CGPA - 0.75) × 10."
      },
      {
        "question": "Where can I find my university's official conversion formula?",
        "answer": "The official conversion formula is printed on the back of your consolidated marksheet or degree transcript."
      }
    ],
    "sources": [
      {
        "name": "All India Council for Technical Education (AICTE)",
        "url": "https://www.aicte-india.org"
      }
    ]
  },
  "age-calculator": {
    "title": "Age Calculator — EVERYDAY Guide & Formula",
    "overview": "Calculates exact chronological age in years, months, and days, including leap years, total weeks, days, hours, and countdown to your next birthday.",
    "formula": "Exact Age = Current_Date(Y, M, D) - Birth_Date(Y, M, D) accounting for month lengths and leap years",
    "explanation": "Walks through the Gregorian calendar month by month, resolving variable month lengths (28, 29, 30, 31 days) to prevent 1-day rounding discrepancies.",
    "example": {
      "title": "Worked Example: Born on August 15, 1995 evaluated on August 15, 2026",
      "inputs": "Birth Date = August 15, 1995 | Current Date = August 15, 2026",
      "steps": [
        "Year subtraction: 2026 - 1995 = 31 Years",
        "Month subtraction: 8 - 8 = 0 Months",
        "Day subtraction: 15 - 15 = 0 Days",
        "Total Days Lived: ~11,323 days (accounting for 8 leap years)"
      ],
      "summary": "Exact Age = 31 Years, 0 Months, 0 Days | Total Days = 11,323 Days | Next Birthday: Today!"
    },
    "metricsText": "Calendar age calculations must walk through actual historical calendar months rather than dividing total days by 365.25 to prevent month-end discrepancies.",
    "useCases": [
      "Government Job & Exam Eligibility: Verify exact age in years, months, and days against official UPSC/SSC notification cutoffs.",
      "Insurance Policy Underwriting: Determine exact age nearest birthday for life insurance premium calculations.",
      "Pediatric Milestone Tracking: Track infant age in exact weeks and months for vaccination schedules."
    ],
    "commonMistakes": [
      "Dividing total elapsed days by 365, which miscalculates age by ignoring leap years.",
      "Assuming all months have 30 days when calculating month differences for birthdays on the 31st.",
      "Ignoring time zone differences when calculating age for individuals born near midnight."
    ],
    "faqs": [
      {
        "question": "Why do some age calculators give different day counts?",
        "answer": "Calculators handle month-end dates (like born Jan 31) differently: some roll to Feb 28, while others roll forward into March."
      },
      {
        "question": "How does the calculator account for leap years?",
        "answer": "It checks each February in the elapsed date range for leap year criteria (divisible by 4, not 100 unless divisible by 400)."
      },
      {
        "question": "What is 'age nearest birthday' in insurance?",
        "answer": "If you are 29 years and 7 months old, insurers treat you as 30 years old for premium calculations."
      }
    ],
    "sources": [
      {
        "name": "International Organization for Standardization (ISO 8601)",
        "url": "https://www.iso.org"
      }
    ]
  },
  "date-difference-calculator": {
    "title": "Date Difference Calculator — EVERYDAY Guide & Formula",
    "overview": "Calculates the exact elapsed duration between two calendar dates in years, months, days, total weeks, and business days.",
    "formula": "Duration = Date_2 - Date_1 in Unix milliseconds / (1000 × 60 × 60 × 24)",
    "explanation": "Calculates total calendar days and decomposes the difference into years, months, and remaining days.",
    "example": {
      "title": "Worked Example: Elapsed Time between Jan 1, 2026 and Dec 31, 2026",
      "inputs": "Start Date = January 1, 2026 | End Date = December 31, 2026",
      "steps": [
        "Calculate total calendar span = 364 days",
        "Total weeks = 52 weeks and 0 days",
        "Working days (excluding Saturdays and Sundays) = 261 business days"
      ],
      "summary": "Duration = 364 Days (11 Months, 30 Days) | 52 Weeks | 261 Business Days"
    },
    "metricsText": "The Gregorian calendar repeats on a 400-year cycle consisting of 146,097 days, which averages 365.2425 days per year.",
    "useCases": [
      "Contract Duration Auditing: Calculate exact contract tenure, rental lease duration, and warranty periods.",
      "Legal Limitation Deadlines: Verify that court filings and insurance claims fall strictly within statutory limitation periods.",
      "Project Management: Plan milestone durations, sprints, and deliverable handover dates."
    ],
    "commonMistakes": [
      "Forgetting whether the end date is inclusive or exclusive (inclusive adds 1 extra day to the span).",
      "Confusing total calendar days with working business days (excluding weekends).",
      "Ignoring daylight saving time transitions that cause 23-hour or 25-hour days."
    ],
    "faqs": [
      {
        "question": "Does the date difference include both start and end dates?",
        "answer": "By default, it measures the interval between dates; you can toggle the 'Include end date' option to count both days inclusively."
      },
      {
        "question": "How are leap years handled?",
        "answer": "The calculator accurately accounts for February 29th in all leap years falling within the selected date span."
      },
      {
        "question": "Can I calculate business days excluding weekends?",
        "answer": "Yes, the tool provides both total calendar days and net business days (Monday through Friday)."
      }
    ],
    "sources": [
      {
        "name": "US Naval Observatory Astronomical Applications",
        "url": "https://aa.usno.navy.mil"
      }
    ]
  },
  "password-generator": {
    "title": "Password Generator — EVERYDAY Guide & Formula",
    "overview": "Generates cryptographically secure, high-entropy random passwords with customizable character sets, lengths, and symbols using the Web Crypto API.",
    "formula": "Password = Sample_Uniform_Crypto_Bytes(Character_Set, Length)",
    "explanation": "Uses crypto.getRandomValues() to sample from uppercase, lowercase, numbers, and symbols without modulo bias.",
    "example": {
      "title": "Worked Example: 16-Character Secure Master Password",
      "inputs": "Length = 16 Characters | Uppercase: Yes | Lowercase: Yes | Numbers: Yes | Symbols: Yes",
      "steps": [
        "Pool size = 26 + 26 + 10 + 32 = 94 possible characters.",
        "Entropy per character = log2(94) = 6.55 bits.",
        "Total Password Entropy = 16 × 6.55 = 104.8 bits (Mathematically Uncrackable via Brute Force)."
      ],
      "summary": "Length = 16 | Entropy = 105 Bits | Strength = Very Strong | Generation = 100% Client-Side"
    },
    "metricsText": "Passwords with over 80 bits of entropy take billions of years to crack using modern GPU cluster brute-force attacks.",
    "useCases": [
      "Master Password Creation: Generate high-entropy master passwords for 1Password, Bitwarden, or Apple Keychain.",
      "Database & Server Credentials: Create secure, random passwords for MySQL root users, API tokens, and SSH keys.",
      "WiFi Security Keys: Generate 64-character WPA3 pre-shared keys for commercial wireless networks."
    ],
    "commonMistakes": [
      "Using Math.random() for passwords (Math.random() is pseudorandom and cryptographically predictable).",
      "Reusing the same password across multiple online accounts (a single leak compromises all accounts).",
      "Creating passwords containing personal names, birth years, or dictionary words."
    ],
    "faqs": [
      {
        "question": "Why is Math.random() unsafe for passwords?",
        "answer": "Math.random() is not cryptographically secure; attackers can observe previous outputs and predict future generated passwords."
      },
      {
        "question": "Are passwords generated on Calciverse stored anywhere?",
        "answer": "No. Passwords are generated strictly inside your browser's local sandbox memory using crypto.getRandomValues()."
      },
      {
        "question": "How long should a strong password be?",
        "answer": "Cybersecurity experts recommend a minimum of 16 characters with mixed uppercase, lowercase, numbers, and special symbols."
      }
    ],
    "sources": [
      {
        "name": "NIST Special Publication 800-63B (Digital Identity Guidelines)",
        "url": "https://pages.nist.gov/800-63-3/sp800-63b.html"
      }
    ]
  },
  "qr-code-generator": {
    "title": "QR Code Generator — EVERYDAY Guide & Formula",
    "overview": "Generates high-resolution, downloadable QR codes for website URLs, plain text, WiFi logins, UPI payments, and vCards with instant PNG/SVG export.",
    "formula": "QR_Matrix = Encode_Reed_Solomon(Payload_Text, Error_Correction_Level_L_M_Q_H)",
    "explanation": "Encodes alphanumeric data into 2D barcode matrices with built-in Reed-Solomon error correction to withstand up to 30% physical damage.",
    "example": {
      "title": "Worked Example: Generating UPI Payment QR Code",
      "inputs": "Type = UPI Payment | Payee VPA = 'calciverse@upi' | Payee Name = 'Calciverse' | Amount = ₹500",
      "steps": [
        "Format UPI URI string: 'upi://pay?pa=calciverse@upi&pn=Calciverse&am=500&cu=INR'",
        "Encode data with Error Correction Level M (15% redundancy).",
        "Render clean SVG/PNG QR barcode matrix with position detection markers."
      ],
      "summary": "QR Code Generated | Error Correction: Level M | Compatible with all Banking & Camera Apps"
    },
    "metricsText": "Error Correction Level H allows a QR code to be scanned successfully even if up to 30% of the symbol surface is smudged, torn, or overlaid with a brand logo.",
    "useCases": [
      "Restaurant Menus & Tables: Create instant touchless table QR codes linking to online digital food menus.",
      "Retail UPI Payments: Generate print-ready counter payment QR codes for GPay, PhonePe, and Paytm.",
      "WiFi Network Sharing: Allow guests to connect to office or home WiFi networks automatically without typing passwords."
    ],
    "commonMistakes": [
      "Creating low-contrast QR codes (light gray dots on white) that smartphone camera sensors struggle to focus on.",
      "Overloading QR codes with massive paragraphs of text, creating dense, unreadable pixel clusters.",
      "Printing QR codes on highly reflective glossy paper or distorted curved surfaces."
    ],
    "faqs": [
      {
        "question": "Do QR codes generated on Calciverse expire?",
        "answer": "No. These are static QR codes; the encoded data is permanently baked into the barcode pattern and will work forever."
      },
      {
        "question": "What is QR code Error Correction?",
        "answer": "A mathematical algorithm (Reed-Solomon) that embeds redundant data packets, allowing damaged or partially covered QR codes to be read."
      },
      {
        "question": "How do I format a WiFi QR code?",
        "answer": "The format is: WIFI:T:WPA;S:MyNetworkName;P:MyPassword;; which smartphone cameras detect automatically."
      }
    ],
    "sources": [
      {
        "name": "ISO/IEC 18004 QR Code Specification",
        "url": "https://www.iso.org"
      }
    ]
  },
  "uuid-generator": {
    "title": "UUID Generator — EVERYDAY Guide & Formula",
    "overview": "Generates cryptographically random RFC 4122 Version 4 Universally Unique Identifiers (UUIDs / GUIDs) in bulk with uppercase and hyphen formatting toggles.",
    "formula": "UUID v4 = xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx (where y is 8, 9, a, or b)",
    "explanation": "Constructs 128-bit identifiers consisting of 32 hexadecimal digits displayed in 5 groups separated by hyphens (8-4-4-4-12 format).",
    "example": {
      "title": "Worked Example: Generating RFC 4122 v4 UUID",
      "inputs": "Version = UUID v4 (Cryptographic Random) | Format = Hyphenated Lowercase",
      "steps": [
        "Generate 16 cryptographically secure random bytes.",
        "Set 4 bits of the version field to 0100 (version 4).",
        "Set 2 bits of the variant field to 10 (RFC 4122 variant).",
        "Output string: e.g. 'c107130e-505d-46a7-9a72-329086051064'"
      ],
      "summary": "UUID v4 Generated | 128 Bits | Collision Probability: ~1 in 10^37"
    },
    "metricsText": "The total number of possible UUID v4 identifiers is 2^122 (5.3 × 10^36); generating 1 billion UUIDs every second for 85 years would still result in virtually zero collisions.",
    "useCases": [
      "Database Primary Keys: Use UUIDs for distributed database record keys to eliminate auto-incrementing ID collision risks.",
      "Session & Request Tracing: Assign unique correlation IDs to incoming HTTP requests across microservice architectures.",
      "Decoupled System Architecture: Generate unique entity IDs on client devices before syncing to central servers."
    ],
    "commonMistakes": [
      "Using Math.random() to create UUIDs (which increases collision risk and violates RFC 4122 randomness standards).",
      "Indexing unsorted UUID v4 as clustered primary keys in MySQL InnoDB without understanding B-Tree fragmentation.",
      "Confusing UUID v4 (pure random) with UUID v1 (timestamp and MAC address based) or UUID v5 (namespace SHA-1)."
    ],
    "faqs": [
      {
        "question": "What is the difference between UUID and GUID?",
        "answer": "They are synonyms; UUID (Universally Unique Identifier) is the open IETF standard, while GUID (Globally Unique Identifier) is Microsoft's implementation term."
      },
      {
        "question": "Can two UUID v4 values ever collide?",
        "answer": "While theoretically possible, the probability is so astronomically low (1 in 2^122) that it is effectively zero in real-world computing."
      },
      {
        "question": "What is UUID v7?",
        "answer": "A modern UUID standard that combines a 48-bit timestamp with random bits, making it time-sortable and ideal for database indexing."
      }
    ],
    "sources": [
      {
        "name": "RFC 4122 A Universally Unique Identifier (UUID) URN Namespace",
        "url": "https://www.ietf.org/rfc/rfc4122.txt"
      }
    ]
  },
  "random-number-generator": {
    "title": "Random Number Generator — EVERYDAY Guide & Formula",
    "overview": "Generates cryptographically unbiased random numbers, rolls virtual dice, picks lottery integers, and shuffles lists using the Web Crypto API.",
    "formula": "Random_Integer = Min + Math.floor((Crypto_Random_Uint32 / 4294967296) × (Max - Min + 1))",
    "explanation": "Eliminates modulo bias by sampling directly from the browser's hardware-seeded cryptographic random byte stream.",
    "example": {
      "title": "Worked Example: Rolling a Fair 6-Sided Die",
      "inputs": "Min = 1 | Max = 6 | Quantity = 1 | Allow Duplicates = Yes",
      "steps": [
        "Sample 32-bit unsigned random integer via crypto.getRandomValues().",
        "Normalize to uniform distribution scale between 1 and 6.",
        "Output: 4"
      ],
      "summary": "Range = [1, 6] | Generated Value = 4 | Distribution = Cryptographically Unbiased"
    },
    "metricsText": "Standard programming Math.random() is pseudorandom and predictable; cryptographic RNG utilizes operating system hardware entropy for true unpredictability.",
    "useCases": [
      "Contest & Giveaway Winner Selection: Conduct transparent, provably fair prize draws and giveaways.",
      "Tabletop Gaming & Dice Rolling: Roll polyhedral RPG dice (d6, d20, d100) for board games and roleplaying.",
      "Statistical Sampling: Select randomized control group sample indices from larger population lists."
    ],
    "commonMistakes": [
      "Using simple modulo division (rand % range), which introduces modulo bias favoring lower numbers.",
      "Assuming random numbers will not produce repeating sequences (true randomness naturally includes consecutive duplicates).",
      "Using pseudorandom numbers for lottery drawings or cryptographic key generation."
    ],
    "faqs": [
      {
        "question": "What is modulo bias in random number generation?",
        "answer": "An error where dividing by a range that doesn't evenly divide the RNG's bit size causes smaller numbers to be selected slightly more often."
      },
      {
        "question": "Are these random numbers fair for official contest draws?",
        "answer": "Yes, because numbers are generated using the browser's native cryptographic hardware randomness API."
      },
      {
        "question": "Can I generate unique non-repeating numbers?",
        "answer": "Yes, toggle the 'No Duplicates' option to generate unique picks without replacement (like lottery draws)."
      }
    ],
    "sources": [
      {
        "name": "W3C Web Cryptography API (getRandomValues)",
        "url": "https://www.w3.org/TR/WebCryptoAPI/"
      }
    ]
  },
  "barcode-generator": {
    "title": "Barcode Generator — EVERYDAY Guide & Formula",
    "overview": "Generates standard retail and industrial 1D barcodes (Code 128, EAN-13, UPC-A, Code 39) with custom label text and high-resolution SVG/PNG downloads.",
    "formula": "Barcode_Pattern = Encode_Symbology(Data_String, Check_Digit_Algorithm)",
    "explanation": "Encodes alphanumeric data into alternating dark bars and light spaces conforming to GS1 international retail standards.",
    "example": {
      "title": "Worked Example: Generating EAN-13 Retail Barcode",
      "inputs": "Symbology = EAN-13 | 12-Digit Base = 890123456789",
      "steps": [
        "Calculate Modulo-10 checksum digit on alternating 1x and 3x digit weights.",
        "Checksum digit calculated = 4; Full 13-digit sequence = 8901234567894.",
        "Render guard bars, center separators, and optical bar-space modules."
      ],
      "summary": "Symbology = EAN-13 | 13 Digits | Valid Checksum | Print-Ready SVG/PNG"
    },
    "metricsText": "Code 128 is the most versatile 1D barcode standard, capable of encoding all 128 ASCII characters with high data density.",
    "useCases": [
      "Retail Inventory Management: Generate scannable product packaging barcodes for supermarket checkout scanners.",
      "Warehouse Asset Tracking: Print Code 128 barcode labels for storage bins, pallets, and shipping cartons.",
      "Library Book Cataloging: Print durable ISBN/EAN identification barcodes for book management."
    ],
    "commonMistakes": [
      "Printing barcodes too small or low-resolution, which causes handheld laser scanners to fail reads.",
      "Entering an incorrect check digit for EAN-13 or UPC-A barcodes (our tool computes check digits automatically).",
      "Failing to maintain the mandatory 'quiet zone' blank margins on the left and right of the barcode."
    ],
    "faqs": [
      {
        "question": "What is the difference between Code 128 and EAN-13?",
        "answer": "EAN-13 is strictly a 13-digit numeric barcode used for global retail products; Code 128 is an industrial barcode that encodes both letters and numbers."
      },
      {
        "question": "What is the quiet zone on a barcode?",
        "answer": "The clear, unprinted white margin on both sides of the barcode bars required by laser scanners to recognize the start and end of the barcode."
      },
      {
        "question": "Can barcode scanners read barcodes displayed on smartphone screens?",
        "answer": "Optical image-based (2D) scanners can read screens easily; older red laser scanners struggle with reflective phone displays."
      }
    ],
    "sources": [
      {
        "name": "GS1 Global Standards for Barcodes",
        "url": "https://www.gs1.org/standards/barcodes"
      }
    ]
  },
  "discount-calculator": {
    "title": "Discount Calculator — EVERYDAY Guide & Formula",
    "overview": "Calculates final sale prices, net dollar savings, and stacked double discounts for retail clearance sales and shopping promotions.",
    "formula": "Discount Amount = Original Price × (Discount Rate / 100) | Final Sale Price = Original Price - Discount Amount",
    "explanation": "For stacked discounts (e.g. 20% off plus extra 10% off): Second discount applies to the already discounted price, not the original base price.",
    "example": {
      "title": "Worked Example: ₹2,500 Jacket on 30% Clearance Sale with 5% GST",
      "inputs": "Original Price = ₹2,500 | Discount = 30% | Sales Tax / GST = 5%",
      "steps": [
        "Discount savings = ₹2,500 × 0.30 = ₹750",
        "Discounted sale price = ₹2,500 - ₹750 = ₹1,750",
        "Add 5% GST = ₹1,750 × 0.05 = ₹87.50",
        "Final checkout price = ₹1,750 + ₹87.50 = ₹1,837.50"
      ],
      "summary": "Original = ₹2,500 | Savings = ₹750 (30%) | Final Price = ₹1,837.50"
    },
    "metricsText": "Stacked discounts do not add directly: a 50% discount plus an extra 20% off equals a 60% total discount, not 70%.",
    "useCases": [
      "Shopping Clearance Evaluation: Verify cash register discounts and coupon code savings during festival sales.",
      "Retail Margin Setting: Calculate net proceeds when offering seasonal clearance promotions on aged inventory.",
      "Compare Promotions: Compare 'Buy 1 Get 1 Free' (50% off) against 'Buy 2 Get 1 Free' (33.3% off)."
    ],
    "commonMistakes": [
      "Adding stacked discount percentages together directly (e.g. 20% + 10% = 30% is incorrect; it is 28% net).",
      "Forgetting that sales tax or GST is charged on the discounted price, not the original MRP.",
      "Miscalculating 'Buy 2 Get 1 Free' as 50% off (it represents 3 items for the price of 2 = 33.3% off)."
    ],
    "faqs": [
      {
        "question": "How does 'Buy 1 Get 1 Free' translate to a percentage discount?",
        "answer": "Buy 1 Get 1 Free equals a 50% discount across the two items."
      },
      {
        "question": "How do stacked double discounts work?",
        "answer": "The first discount is deducted from original price; the second discount is deducted from that resulting lower subtotal."
      },
      {
        "question": "Is sales tax calculated before or after the discount?",
        "answer": "Sales tax is calculated on the final discounted price after all promotional discounts have been deducted."
      }
    ],
    "sources": [
      {
        "name": "Federal Trade Commission (FTC) Guides Against Deceptive Pricing",
        "url": "https://www.ftc.gov"
      }
    ]
  },
  "tip-calculator": {
    "title": "Tip Calculator — EVERYDAY Guide & Formula",
    "overview": "Calculates dining gratuity amounts and splits restaurant bills evenly or custom among friends with tax-inclusive or tax-exclusive tipping toggles.",
    "formula": "Tip Amount = Bill Subtotal × (Tip % / 100) | Per Person Split = (Bill Subtotal + Tip) / Number of People",
    "explanation": "Standard tipping etiquette suggests tipping on the pre-tax food and beverage subtotal rather than the post-tax bill total.",
    "example": {
      "title": "Worked Example: ₹3,000 Dinner Bill Split Among 4 Friends with 10% Tip",
      "inputs": "Bill Subtotal = ₹3,00,0? No, ₹3,000 | Tip Rate = 10% | People = 4",
      "steps": [
        "Tip amount = ₹3,000 × 0.10 = ₹300",
        "Total bill including tip = ₹3,000 + ₹300 = ₹3,300",
        "Split per person = ₹3,300 / 4 = ₹825 per person"
      ],
      "summary": "Bill = ₹3,000 | Tip (10%) = ₹300 | Total = ₹3,300 | Each Person Pays = ₹825"
    },
    "metricsText": "In India, voluntary tipping is customary (5-10%), but mandatory 'Service Charges' added directly by restaurants are legally voluntary per CCPA consumer protection guidelines.",
    "useCases": [
      "Dining Bill Splitting: Split group restaurant bills evenly among dinner guests without awkward mental math.",
      "International Travel Tipping: Adjust tipping percentages for foreign destinations (e.g. 15-20% in US/Canada, 0% in Japan).",
      "Delivery & Service Gratuity: Calculate fair tip gratuities for food delivery drivers, salon stylists, and cab drivers."
    ],
    "commonMistakes": [
      "Tipping on top of a bill that already includes a mandatory 10% restaurant 'Service Charge'.",
      "Tipping on the post-tax total rather than the pre-tax food subtotal.",
      "Tipping in countries like Japan where tipping is considered culturally improper or offensive."
    ],
    "faqs": [
      {
        "question": "What is standard tipping etiquette in the United States?",
        "answer": "Standard US dining tips range from 15% to 20% for good service, and 20%+ for exceptional service."
      },
      {
        "question": "Can Indian restaurants force customers to pay a Service Charge?",
        "answer": "No. The Central Consumer Protection Authority (CCPA) declared mandatory service charges illegal; customers can request their removal."
      },
      {
        "question": "Should you tip on alcohol and wine bottles?",
        "answer": "Yes, standard convention is to tip on the full food and drink subtotal, though some tip 10% on expensive wine bottles."
      }
    ],
    "sources": [
      {
        "name": "Central Consumer Protection Authority (CCPA) Guidelines",
        "url": "https://consumeraffairs.nic.in"
      }
    ]
  },
  "fuel-cost-calculator": {
    "title": "Fuel Cost Calculator — EVERYDAY Guide & Formula",
    "overview": "Estimates total fuel consumption, trip gasoline costs, and per-passenger travel shares based on trip distance, fuel economy, and fuel price per liter.",
    "formula": "Fuel Consumed (Liters) = Distance (km) / Mileage (km/L) | Total Cost = Fuel Consumed × Fuel Price per Liter",
    "explanation": "Converts distance and vehicle fuel efficiency into total fuel liters and splits travel costs across carpool passengers.",
    "example": {
      "title": "Worked Example: 450 km Road Trip with 15 km/L Car Mileage at ₹102/L Petrol",
      "inputs": "Distance = 450 km | Mileage = 15 km/L | Petrol Price = ₹102/Liter | Passengers = 3",
      "steps": [
        "Fuel liters consumed = 450 / 15 = 30.0 Liters",
        "Total fuel cost = 30 Liters × ₹102 = ₹3,060",
        "Per-passenger carpool split = ₹3,060 / 3 = ₹1,020 per person"
      ],
      "summary": "Distance = 450 km | Fuel Used = 30 Liters | Total Cost = ₹3,060 | Cost per Person = ₹1,020"
    },
    "metricsText": "Driving at 90 km/h instead of 120 km/h on highways improves car fuel economy by approximately 15% to 20% due to reduced aerodynamic drag.",
    "useCases": [
      "Road Trip Cost Sharing: Calculate fair fuel and toll expense splits among friends on weekend highway road trips.",
      "Daily Commute Budgeting: Estimate monthly fuel expenditures for driving to work vs using public transit.",
      "Fleet Expense Reimbursement: Submit accurate mileage reimbursement claims for business travel."
    ],
    "commonMistakes": [
      "Using manufacturer ARAI claimed mileage instead of realistic real-world stop-and-go city mileage (which is 20-30% lower).",
      "Forgetting highway toll plaza charges, which can add 20% to 30% to total road trip expenditures.",
      "Ignoring the fuel efficiency penalty of driving with under-inflated tires or heavily loaded roof cargo racks."
    ],
    "faqs": [
      {
        "question": "How does air conditioning impact car mileage?",
        "answer": "Running the vehicle AC in hot city traffic can reduce fuel economy by 5% to 15%."
      },
      {
        "question": "How do I calculate my car's true real-world mileage?",
        "answer": "Fill your tank full, reset the trip meter, drive normally, fill up full again, and divide trip kilometers by the liters pumped."
      },
      {
        "question": "How do I convert MPG to km/L?",
        "answer": "1 US MPG equals approximately 0.425 km/L (e.g. 30 MPG = 12.75 km/L)."
      }
    ],
    "sources": [
      {
        "name": "U.S. Department of Energy (Fuel Economy)",
        "url": "https://www.fueleconomy.gov"
      }
    ]
  },
  "word-counter": {
    "title": "Word & Character Counter — EVERYDAY Guide & Formula",
    "overview": "Analyzes text in real time, calculating word count, character count (with and without spaces), paragraph count, reading time, and keyword density.",
    "formula": "Word Count = Matches of \\b\\S+\\b | Reading Time = Words / 200 words per minute",
    "explanation": "Standard average silent adult reading speed is 200 to 250 words per minute; speaking presentation speed is roughly 130 to 150 WPM.",
    "example": {
      "title": "Worked Example: Analyzing a 600-Word Blog Post Article",
      "inputs": "Article Text = 600 Words | Total Characters = ~3,800 characters",
      "steps": [
        "Count word tokens by whitespace delimiters = 600 Words",
        "Count characters with spaces = 3,800 characters; without spaces = 3,200 characters",
        "Estimated silent reading duration = 600 / 200 = 3.0 Minutes",
        "Estimated spoken presentation duration = 600 / 130 = 4.6 Minutes"
      ],
      "summary": "Words = 600 | Characters = 3,800 | Reading Time = 3 min | Speaking Time = 4.6 min"
    },
    "metricsText": "In-depth blog articles between 1,200 and 2,000 words historically achieve higher organic search visibility and social media shares.",
    "useCases": [
      "Essay & Academic Submissions: Ensure college essays stay within strict minimum and maximum word limits.",
      "Social Media Character Limits: Check post lengths for X/Twitter (280 chars), LinkedIn, and Instagram captions.",
      "SEO Meta Tag Optimization: Keep meta titles under 60 characters and meta descriptions under 160 characters."
    ],
    "commonMistakes": [
      "Counting hyphenated words as two words or one word inconsistently across different word processors.",
      "Including footnotes, bibliographies, and title headers when checking strict essay word limits.",
      "Exceeding character limits on social media by forgetting that URLs count as a fixed character length."
    ],
    "faqs": [
      {
        "question": "What is the character limit for Twitter / X?",
        "answer": "Standard accounts have a 280-character limit; X Premium subscribers can post long-form content up to 25,000 characters."
      },
      {
        "question": "How fast does an average adult read?",
        "answer": "The average adult reads silently at approximately 200 to 250 words per minute (WPM)."
      },
      {
        "question": "How long should a standard blog post be for SEO?",
        "answer": "Most search engines favor comprehensive articles between 1,000 and 2,000 words that thoroughly address user search intent."
      }
    ],
    "sources": [
      {
        "name": "Purdue Online Writing Lab (OWL)",
        "url": "https://owl.purdue.edu"
      }
    ]
  },
  "case-converter": {
    "title": "Text Case Converter — EVERYDAY Guide & Formula",
    "overview": "Transforms text between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, kebab-case, and Constant Case instantly.",
    "formula": "Transformed_Text = String_Mapping(Text, Target_Casing_Rules)",
    "explanation": "Handles Unicode capitalization rules, converts delimiters (spaces to underscores or hyphens), and formats code identifiers.",
    "example": {
      "title": "Worked Example: Converting 'hello world from calciverse'",
      "inputs": "Input: 'hello world from calciverse'",
      "steps": [
        "Title Case: 'Hello World From Calciverse'",
        "camelCase: 'helloWorldFromCalciverse'",
        "kebab-case: 'hello-world-from-calciverse'",
        "CONSTANT_CASE: 'HELLO_WORLD_FROM_CALCIVERSE'"
      ],
      "summary": "Case Transformation Complete | 8 Casing Styles Supported | Instant Copy"
    },
    "metricsText": "In programming conventions: camelCase is standard for JavaScript variables, snake_case for Python, and kebab-case for URL slugs and CSS classes.",
    "useCases": [
      "Accidental Caps Lock Recovery: Fix sentences accidentally typed with the Caps Lock key engaged without retyping.",
      "Code Refactoring: Convert database snake_case column names into JavaScript camelCase variable properties.",
      "Headline Formatting: Standardize publication article titles conforming to Associated Press (AP) or Chicago title case rules."
    ],
    "commonMistakes": [
      "Capitalizing small minor articles and prepositions (a, an, the, in, on, at, of) in Title Case headlines.",
      "Using camelCase in URL paths where search engine crawlers prefer hyphen-separated kebab-case.",
      "Manually re-typing text when automated case conversion tools can format thousands of words in one click."
    ],
    "faqs": [
      {
        "question": "What is the difference between camelCase and PascalCase?",
        "answer": "camelCase starts with a lowercase letter (myVariable); PascalCase starts with an uppercase letter (MyVariable, used for classes)."
      },
      {
        "question": "What words should be lowercase in Title Case?",
        "answer": "Articles (a, an, the), coordinating conjunctions (and, but, for, nor, or), and short prepositions under 4 letters (in, on, to, of)."
      },
      {
        "question": "What is kebab-case used for?",
        "answer": "kebab-case uses hyphens between words; it is standard for CSS class names, HTML attributes, and web URL slugs."
      }
    ],
    "sources": [
      {
        "name": "Chicago Manual of Style (Capitalization Rules)",
        "url": "https://www.chicagomanualofstyle.org"
      }
    ]
  },
  "typing-speed-test": {
    "title": "Typing Speed Test — EVERYDAY Guide & Formula",
    "overview": "Measures typing speed in Words Per Minute (WPM) and Gross WPM, accuracy percentage, and net character errors over 1-minute, 3-minute, and 5-minute typing sprints.",
    "formula": "Net WPM = [(Total Characters Typed / 5) - Uncorrected Errors] / Time in Minutes",
    "explanation": "In standardized typing tests, 1 word is defined as exactly 5 keystrokes (including spaces and punctuation). Accuracy = (Correct Characters / Total) × 100.",
    "example": {
      "title": "Worked Example: Typing 300 Characters in 1 Minute with 2 Errors",
      "inputs": "Characters Typed = 300 | Uncorrected Errors = 2 | Duration = 1 Minute",
      "steps": [
        "Gross Words = 300 / 5 = 60 Gross WPM",
        "Penalty deduction for 2 errors = 60 - 2 = 58 Net WPM",
        "Accuracy percentage = [(300 - 2) / 300] × 100 = 99.33%"
      ],
      "summary": "Speed = 58 WPM | Accuracy = 99.3% | Rating = Fast / Professional Typist"
    },
    "metricsText": "Average touch-typing speed is approximately 40 WPM; professional transcriptionists, legal secretaries, and competitive coders regularly exceed 75 to 100+ WPM.",
    "useCases": [
      "Employment Skill Testing: Test typing speed requirements for secretarial, transcription, and customer service job interviews.",
      "Touch Typing Practice: Measure daily typing speed and accuracy improvements while learning proper home-row finger placement.",
      "Ergonomic Keyboard Benchmarking: Compare typing speed between standard laptop keyboards and mechanical split ergonomic keyboards."
    ],
    "commonMistakes": [
      "Sacrificing accuracy for raw speed (uncorrected errors penalize net WPM score heavily).",
      "Looking down at the keyboard keys instead of maintaining touch-typing visual focus on the screen.",
      "Resting wrists heavily on the desk surface instead of maintaining floating, neutral wrist alignment."
    ],
    "faqs": [
      {
        "question": "Why is a word defined as 5 characters in typing tests?",
        "answer": "Because real words vary in length; standardizing 1 word as 5 keystrokes provides an objective, consistent speed measurement."
      },
      {
        "question": "What is considered a good typing speed?",
        "answer": "Average is 35-40 WPM; 50-60 WPM is good; 70-80 WPM is fast; over 90 WPM is considered elite speed."
      },
      {
        "question": "How can I increase my typing speed by 20 WPM?",
        "answer": "Practice touch typing on home-row keys (ASDF JKL;) without looking down, focusing on accuracy first before increasing speed."
      }
    ],
    "sources": [
      {
        "name": "Typing Certification Standards",
        "url": "https://www.typing.com"
      }
    ]
  },
  "unit-converter": {
    "title": "Unit Converter — EVERYDAY Guide & Formula",
    "overview": "Converts measurements across length, mass/weight, temperature, area, volume, digital storage, speed, and pressure with bidirectional calculation.",
    "formula": "Target_Unit = (Source_Value × Source_To_Base_Factor) / Target_To_Base_Factor",
    "explanation": "Converts units through SI base standards (meters for length, kilograms for mass, Kelvin for temperature) with high floating-point precision.",
    "example": {
      "title": "Worked Example: Converting 10 Kilometers to Miles",
      "inputs": "Length = 10 Kilometers | Target = Miles",
      "steps": [
        "Base conversion factor: 1 mile = 1.609344 kilometers",
        "Calculation: 10 / 1.609344 = 6.2137 miles",
        "Metric equivalent in meters: 10 × 1,000 = 10,000 meters"
      ],
      "summary": "10 Kilometers = 6.2137 Miles | 10,000 Meters | 32,808 Feet"
    },
    "metricsText": "In 1999, NASA lost the $125 million Mars Climate Orbiter spacecraft because one engineering team used imperial units while another used metric SI units.",
    "useCases": [
      "International Travel: Convert kilometers to miles, Celsius to Fahrenheit, and liters to gallons.",
      "Cooking & Recipes: Convert fluid ounces, tablespoons, and cups into milliliters and grams.",
      "Engineering & Construction: Translate CAD drawings between metric millimeters and architectural feet/inches."
    ],
    "commonMistakes": [
      "Using linear scaling for temperature conversions (converting Celsius to Fahrenheit requires adding 32 after scaling: F = C × 1.8 + 32).",
      "Confusing US liquid gallons (3.785 L) with British Imperial gallons (4.546 L).",
      "Confusing decimal gigabytes (1,000 MB) with binary gibibytes (1,024 MiB) in digital storage."
    ],
    "faqs": [
      {
        "question": "How do you convert Celsius to Fahrenheit in your head?",
        "answer": "Quick mental shortcut: multiply Celsius by 2 and add 30 (e.g. 20°C × 2 + 30 ≈ 70°F; exact is 68°F)."
      },
      {
        "question": "What is the difference between mass and weight?",
        "answer": "Mass is the amount of matter in an object (measured in kilograms); weight is the gravitational force acting on that mass (measured in Newtons)."
      },
      {
        "question": "How many feet are in a meter?",
        "answer": "1 meter equals approximately 3.28084 feet (roughly 3 feet and 3.37 inches)."
      }
    ],
    "sources": [
      {
        "name": "NIST Guide to the SI (International System of Units)",
        "url": "https://www.nist.gov/pml/special-publication-811"
      }
    ]
  },
  "time-zone-converter": {
    "title": "Time Zone Converter — EVERYDAY Guide & Formula",
    "overview": "Converts meeting times across worldwide international time zones, calculating UTC offsets, military time, and Daylight Saving Time (DST) shifts.",
    "formula": "Target_Time = UTC_Time + Target_Timezone_Offset (accounting for active DST)",
    "explanation": "Converts between IST (UTC+5:30), EST/EDT (UTC-5/-4), PST/PDT (UTC-8/-7), GMT/BST (UTC+0/+1), and Australian time zones.",
    "example": {
      "title": "Worked Example: 7:00 PM Indian Standard Time (IST) to US Eastern Time (EDT)",
      "inputs": "Source Time = 7:00 PM IST (UTC+5:30) | Target Zone = US Eastern Daylight Time (UTC-4:00)",
      "steps": [
        "Calculate total time difference: (+5:30) - (-4:00) = 9 hours and 30 minutes",
        "Subtract difference: 7:00 PM IST - 9 hours 30 minutes = 9:30 AM EDT (Same Day)"
      ],
      "summary": "7:00 PM IST = 9:30 AM US Eastern Time (EDT) | Time Gap = 9.5 Hours Behind"
    },
    "metricsText": "Indian Standard Time (IST) is unique: it is UTC+5:30, carrying a 30-minute fractional offset and never observing seasonal Daylight Saving Time.",
    "useCases": [
      "International Meeting Scheduling: Schedule cross-border client conference calls across New York, London, and Bengaluru.",
      "Flight & Travel Coordination: Coordinate flight departure and arrival times across changing global time zones.",
      "Global Live Event Broadcasts: Determine exact local kickoff times for sports events and product keynotes."
    ],
    "commonMistakes": [
      "Forgetting Daylight Saving Time (DST) shifts in the US and Europe (which shifts time differences by 1 hour twice a year).",
      "Forgetting the 30-minute fractional offset when converting Indian Standard Time (UTC+5:30).",
      "Misinterpreting dates when international flights cross the International Date Line (gaining or losing an entire calendar day)."
    ],
    "faqs": [
      {
        "question": "Does India observe Daylight Saving Time?",
        "answer": "No. India maintains a constant single time zone (Indian Standard Time, UTC+5:30) throughout the entire year without seasonal clock changes."
      },
      {
        "question": "When do the US and Europe change their clocks for Daylight Saving?",
        "answer": "The US springs forward on the second Sunday of March and falls back on the first Sunday of November; Europe changes on the last Sundays of March and October."
      },
      {
        "question": "What is UTC?",
        "answer": "Coordinated Universal Time: the primary global time standard by which the world regulates clocks and time zones."
      }
    ],
    "sources": [
      {
        "name": "IANA Time Zone Database (tzdb)",
        "url": "https://www.iana.org/time-zones"
      }
    ]
  },
  "time-duration-calculator": {
    "title": "Time Duration Calculator — EVERYDAY Guide & Formula",
    "overview": "Adds and subtracts time intervals (hours, minutes, seconds) to calculate total elapsed work hours, shift durations, and finish times.",
    "formula": "Total Duration = (End_Seconds - Start_Seconds) decomposed into Hours, Minutes, Seconds",
    "explanation": "Handles overnight shifts spanning past midnight, multiple shift segment additions, and lunch break deductions.",
    "example": {
      "title": "Worked Example: Work Shift from 9:15 AM to 5:45 PM with 45-Minute Lunch Break",
      "inputs": "Start Time = 9:15 AM | End Time = 5:45 PM | Break Deduction = 45 Minutes",
      "steps": [
        "Convert to 24-hour time: 9:15 to 17:45",
        "Gross elapsed duration: 17:45 - 9:15 = 8 Hours, 30 Minutes",
        "Subtract 45-minute lunch break: 8 Hours 30 Min - 45 Min = 7 Hours, 45 Minutes",
        "Decimal hours equivalent = 7.75 Hours"
      ],
      "summary": "Gross Time = 8h 30m | Lunch Break = 45m | Billable Hours = 7h 45m (7.75 Hours)"
    },
    "metricsText": "To convert minutes into decimal billing hours, divide minutes by 60 (e.g. 45 minutes = 45 / 60 = 0.75 hours).",
    "useCases": [
      "Timesheet Payroll Tracking: Calculate exact weekly billable hours from daily punch-in and punch-out logs.",
      "Flight Layover Planning: Measure connecting airport transit durations and total journey travel time.",
      "Audio & Video Editing: Calculate total running lengths of podcast tracks and video timelines."
    ],
    "commonMistakes": [
      "Entering overnight night shifts (e.g. 10:00 PM to 6:00 AM) without rolling past midnight (produces negative times if unhandled).",
      "Treating minutes as decimals (e.g. writing 7 hours and 30 minutes as 7.30 instead of 7.50 hours).",
      "Forgetting to deduct unpaid lunch breaks from recorded gross shift hours."
    ],
    "faqs": [
      {
        "question": "How do I calculate an overnight shift crossing midnight?",
        "answer": "Add 24 hours to the end time before subtracting the start time (e.g. 6:00 AM becomes 30:00; 30:00 - 22:00 = 8 hours)."
      },
      {
        "question": "How do I convert 15 minutes to decimal hours?",
        "answer": "Divide minutes by 60: 15 / 60 = 0.25 hours (30 min = 0.50 hrs, 45 min = 0.75 hrs)."
      },
      {
        "question": "Can I add multiple time blocks together?",
        "answer": "Yes, you can add individual shift durations to compute cumulative weekly working hours."
      }
    ],
    "sources": [
      {
        "name": "U.S. Department of Labor (FLSA Hours Worked)",
        "url": "https://www.dol.gov"
      }
    ]
  },
  "electricity-bill-calculator": {
    "title": "Electricity Bill Calculator — EVERYDAY Guide & Formula",
    "overview": "Estimates monthly electrical consumption and power bill costs from appliance wattage, daily usage hours, and municipal tiered tariff slabs.",
    "formula": "Monthly Units (kWh) = [Appliance Wattage (W) × Daily Hours × 30 Days] / 1,000 | Bill = kWh × Tariff Rate per Unit",
    "explanation": "1 electricity billing unit equals 1 kilowatt-hour (kWh). Tiered tariff slabs charge progressively higher rates as consumption crosses unit thresholds.",
    "example": {
      "title": "Worked Example: 1.5-Ton Inverter AC (1,500W) Running 8 Hours Daily at ₹8/Unit",
      "inputs": "Wattage = 1,500 Watts | Daily Usage = 8 Hours | Rate = ₹8.00 per kWh Unit",
      "steps": [
        "Daily energy consumption = (1,500 × 8) / 1,000 = 12.0 kWh units/day",
        "Monthly energy consumption = 12.0 × 30 days = 360 kWh units/month",
        "Monthly electricity cost = 360 units × ₹8.00 = ₹2,880 per month"
      ],
      "summary": "Power = 1,500 W | Monthly Units = 360 kWh | Monthly Operating Cost = ₹2,880"
    },
    "metricsText": "Air conditioners, water geysers, and refrigerators account for over 60% of an average household's summer electricity bill.",
    "useCases": [
      "Appliance Running Cost Audit: Calculate exactly how much money running an air conditioner, gaming PC, or space heater costs per month.",
      "Energy Efficiency Comparison: Compare operating costs of 5-star BEE rated inverter appliances against older non-inverter models.",
      "Solar Panel Sizing: Determine monthly kilowatt-hour household demand to properly size rooftop solar net-metering systems."
    ],
    "commonMistakes": [
      "Assuming appliances run at full rated wattage 100% of the time (inverter ACs and refrigerators cycle compressors down).",
      "Forgetting fixed meter charges, electricity duty, and fuel surcharge adjustments added to utility bills.",
      "Using watts directly in cost calculations without dividing by 1,000 to convert to kilowatt-hours (kWh)."
    ],
    "faqs": [
      {
        "question": "What is 1 unit of electricity on an electricity meter?",
        "answer": "1 unit of electricity equals 1 kilowatt-hour (kWh), which is 1,000 watts of power consumed continuously for 1 hour."
      },
      {
        "question": "How much power does a refrigerator use per day?",
        "answer": "A modern 3-star to 5-star frost-free refrigerator consumes approximately 0.8 to 1.5 units (kWh) per day."
      },
      {
        "question": "What is the difference between an inverter AC and a regular AC?",
        "answer": "Inverter ACs regulate compressor motor speed continuously, saving 30% to 50% electricity compared to regular on/off compressor models."
      }
    ],
    "sources": [
      {
        "name": "Bureau of Energy Efficiency (BEE India)",
        "url": "https://beeindia.gov.in"
      }
    ]
  },
  "rent-split-calculator": {
    "title": "Rent Split Calculator — EVERYDAY Guide & Formula",
    "overview": "Splits apartment rent, utility bills, and shared groceries fairly among roommates based on room square footage, private bathrooms, and amenities.",
    "formula": "Roommate Share = Base Common Share + Private Room Premium Adjustment",
    "explanation": "Splits shared common space (living room, kitchen) equally, while adjusting private room rent by square footage and amenities (balcony, attached bath).",
    "example": {
      "title": "Worked Example: 2-Bedroom Flat (₹30,000 Rent) with Master Bedroom (180 sq.ft) and Small Bedroom (120 sq.ft)",
      "inputs": "Total Rent = ₹30,000 | Master Bedroom = 180 sq.ft (attached bath) | Second Bedroom = 120 sq.ft",
      "steps": [
        "Common area rent (50% of total) = ₹15,000 split equally = ₹7,500 each",
        "Private room rent (50% of total) = ₹15,000 split by area ratio (180:120 = 60%:40%)",
        "Master Bedroom private share = 60% of ₹15,000 = ₹9,000; Total = ₹7,500 + ₹9,000 = ₹16,500",
        "Second Bedroom private share = 40% of ₹15,000 = ₹6,000; Total = ₹7,500 + ₹6,000 = ₹13,500"
      ],
      "summary": "Master Bedroom = ₹16,500/mo | Small Bedroom = ₹13,500/mo | Fair Split Achieved"
    },
    "metricsText": "Splitting rent strictly by square footage and private amenities eliminates roommate resentment over unequal bedroom sizes.",
    "useCases": [
      "Apartment Sharing: Calculate fair rent splits between master bedroom and smaller secondary bedrooms.",
      "Shared Utility Division: Split monthly WiFi, electricity, maid charges, and grocery bills among roommates.",
      "Couples in Shared Housing: Fairly calculate the rent share of a couple sharing a master bedroom in a 3-bedroom flat."
    ],
    "commonMistakes": [
      "Splitting rent strictly 50/50 when one roommate has a master bedroom with private attached bath and balcony.",
      "Failing to agree in writing on how shared cleaning supplies and common utilities will be billed.",
      "Ignoring couples: a couple should pay more for common spaces (since two people use the kitchen/living area) but share bedroom square footage."
    ],
    "faqs": [
      {
        "question": "How should a couple sharing a room with single roommates split rent?",
        "answer": "Split common areas equally per person (e.g. 1/3 each in a 2-room flat with a couple and 1 single), and split private bedrooms by room value."
      },
      {
        "question": "How much extra should an attached private bathroom add to rent?",
        "answer": "Typically adds 10% to 20% to that bedroom's private rent allocation."
      },
      {
        "question": "How should shared household utilities be split?",
        "answer": "Electricity, water, gas, and WiFi should be split equally per individual resident, not per bedroom."
      }
    ],
    "sources": [
      {
        "name": "National Fair Housing Alliance",
        "url": "https://nationalfairhousing.org"
      }
    ]
  },
  "countdown-timer": {
    "title": "Countdown Timer — EVERYDAY Guide & Formula",
    "overview": "Tracks real-time countdown days, hours, minutes, and seconds to holidays, birthdays, weddings, product releases, and retirement milestones.",
    "formula": "Time_Remaining = Target_Event_Timestamp - Current_Timestamp decomposed into Days, Hours, Minutes, Seconds",
    "explanation": "Calculates precise real-time interval remaining until a target calendar date, updating every second.",
    "example": {
      "title": "Worked Example: Countdown to New Year's Day",
      "inputs": "Target Date = January 1, 2027 00:00:00 | Current Date = October 1, 2026",
      "steps": [
        "Calculate total millisecond difference between timestamps.",
        "Extract remaining integer days = 92 Days.",
        "Extract remaining hours, minutes, and seconds.",
        "Live interactive ticking display updating every 1,000 ms."
      ],
      "summary": "92 Days, 0 Hours, 0 Minutes Remaining | Real-Time Ticking Engine"
    },
    "metricsText": "Visual countdown timers create psychological urgency and maintain goal motivation for personal fitness and career deadlines.",
    "useCases": [
      "Product Launches: Embed animated countdown timers for software releases, sales promotions, and Kickstarter campaigns.",
      "Wedding & Life Events: Track remaining days, weeks, and hours until wedding ceremonies and milestone anniversaries.",
      "Retirement Countdown: Celebrate days remaining until official corporate retirement or military discharge."
    ],
    "commonMistakes": [
      "Failing to account for the event's local time zone (e.g. midnight in London is 5:30 AM in India).",
      "Ignoring daylight saving time clock changes occurring between the current date and the target event.",
      "Leaving countdown timers active after the event date has already passed."
    ],
    "faqs": [
      {
        "question": "Can I share a countdown timer link with friends?",
        "answer": "Yes, you can copy the unique URL with embedded target date parameters to share with friends."
      },
      {
        "question": "What happens when the countdown timer reaches zero?",
        "answer": "The interface triggers a celebratory animation and displays that the milestone event has arrived."
      },
      {
        "question": "How does the timer handle time zones?",
        "answer": "Timers can count down to a specific local time zone or adjust dynamically to the viewer's local device time."
      }
    ],
    "sources": [
      {
        "name": "ISO 8601 Date and Time Format Standard",
        "url": "https://www.iso.org"
      }
    ]
  },
  "notice-period-calculator": {
    "title": "Notice Period Calculator — EVERYDAY Guide & Formula",
    "overview": "Calculates official employee last working day (LWD) dates, notice period shortfall buyouts, and leave adjustment credits upon resignation.",
    "formula": "Last Working Day = Resignation Date + Notice Period Duration (in Days or Months) - Approved Leave Deductions",
    "explanation": "Computes last working day, calculates gross salary buyout penalties for early release, and reconciles earned leave balances.",
    "example": {
      "title": "Worked Example: Resignation on October 1st with 90-Day Notice Period",
      "inputs": "Resignation Date = October 1, 2026 | Notice Period = 90 Days | Earned Leave Adjusted = 10 Days",
      "steps": [
        "Standard 90-day completion date = December 30, 2026",
        "Subtract 10 days of approved earned leave adjustment",
        "Official Revised Last Working Day (LWD) = December 20, 2026"
      ],
      "summary": "Resigned = Oct 1, 2026 | Full Notice = 90 Days | Adjusted LWD = Dec 20, 2026"
    },
    "metricsText": "In India, IT services companies commonly mandate 90-day notice periods, whereas global multinational corporations typically require 30 to 60 days.",
    "useCases": [
      "Career Transition Planning: Communicate an exact verifiable joining date to new hiring employers.",
      "Notice Period Buyout Negotiations: Calculate the monetary buyout cost needed for a new employer to buy out remaining notice days.",
      "Earned Leave Encashment: Determine whether to adjust accumulated privilege leaves to leave early or encash them for cash payout."
    ],
    "commonMistakes": [
      "Counting notice period in business working days instead of calendar days (employment contracts define notice in calendar days).",
      "Assuming employers are legally obligated to accept a notice buyout (early release is at company management discretion).",
      "Taking unapproved leaves during notice period, which employers can use to extend your last working day."
    ],
    "faqs": [
      {
        "question": "Is notice period calculated in calendar days or working days?",
        "answer": "Unless explicitly stated otherwise in your employment contract, notice periods are counted in standard continuous calendar days."
      },
      {
        "question": "What is a notice period buyout?",
        "answer": "When an employee or new employer pays basic salary for the unserved notice days to secure an immediate release."
      },
      {
        "question": "Can an employer reject a resignation?",
        "answer": "No. Employment is a bilateral contract; an employee has the legal right to resign by serving the agreed contractual notice period or paying buyout."
      }
    ],
    "sources": [
      {
        "name": "Industrial Employment (Standing Orders) Act",
        "url": "https://clc.gov.in"
      }
    ]
  },
  "percentage-change-calculator": {
    "title": "Percentage Increase/Decrease Calculator — MATH Guide & Formula",
    "overview": "Calculates the percentage increase or percentage decrease between an original starting value and a final new value.",
    "formula": "Percentage Change (%) = ((New Value - Old Value) / |Old Value|) × 100",
    "explanation": "A positive result indicates a percentage increase; a negative result represents a percentage decrease.",
    "example": {
      "title": "Worked Example: Revenue Increasing from ₹80,000 to ₹1,00,000",
      "inputs": "Old Value = ₹80,000 | New Value = ₹1,00,000",
      "steps": [
        "Absolute change = 1,00,000 - 80,000 = +20,000",
        "Divide by original value = 20,000 / 80,000 = 0.25",
        "Multiply by 100 = 0.25 × 100 = +25.0% increase"
      ],
      "summary": "Old = 80,000 | New = 1,00,000 | Percentage Change = +25.0% Increase"
    },
    "metricsText": "Percentage changes are asymmetrical: a 50% drop requires a 100% gain just to return to the original starting baseline.",
    "useCases": [
      "Financial Reporting: Track month-over-month growth in website traffic, sales conversions, and business revenues.",
      "Investment Performance: Calculate asset appreciation or drawdown percentages on equity and mutual fund holdings.",
      "Retail Price Tracking: Measure inflation spikes or seasonal discounts on consumer goods."
    ],
    "commonMistakes": [
      "Dividing by the new final value instead of the initial starting value.",
      "Assuming a 20% gain followed by a 20% loss leaves you back at even (it results in a 4% net loss).",
      "Confusing percentage change with percentage point differences."
    ],
    "faqs": [
      {
        "question": "Why doesn't a 50% loss break even with a 50% gain?",
        "answer": "If ₹100 drops 50%, you have ₹50; gaining 50% on ₹50 brings you to ₹75, leaving a net 25% loss from your initial ₹100."
      },
      {
        "question": "Can percentage change be negative?",
        "answer": "Yes, any reduction in value produces a negative percentage change, representing a decrease."
      },
      {
        "question": "How do I calculate percentage decrease?",
        "answer": "Subtract the new value from the old value, divide by the old value, and multiply by 100."
      }
    ],
    "sources": [
      {
        "name": "National Council of Teachers of Mathematics",
        "url": "https://www.nctm.org"
      }
    ]
  },
  "average-calculator": {
    "title": "Average Calculator — MATH Guide & Formula",
    "overview": "Calculates the arithmetic Mean, Median, Mode, Range, and geometric average across any numerical data series with step-by-step working.",
    "formula": "Arithmetic Mean = Sum(x_i) / n | Median = Middle Value (or average of two middle values) when sorted",
    "explanation": "Mean evaluates arithmetic center; Median finds the 50th percentile midpoint resilient against extreme statistical outliers.",
    "example": {
      "title": "Worked Example: Dataset of 5 Exam Scores (75, 80, 85, 90, 100)",
      "inputs": "Numbers: 75, 80, 85, 90, 100 (Count n = 5)",
      "steps": [
        "Sum of values = 75 + 80 + 85 + 90 + 100 = 430",
        "Mean average = 430 / 5 = 86.0",
        "Median = 85.0 (the 3rd number in sorted sequence)",
        "Range = 100 - 75 = 25"
      ],
      "summary": "Mean = 86.0 | Median = 85.0 | Range = 25 | Sum = 430"
    },
    "metricsText": "When datasets have extreme outliers (like national income distributions), the Median provides a far more accurate representation of the 'typical' value than the Mean.",
    "useCases": [
      "Academic Evaluation: Compute student term averages across quizzes, assignments, and semester exams.",
      "Statistical Research: Evaluate central tendency metrics across experimental sample cohorts.",
      "Salary Benchmarking: Determine median company compensation levels free from executive outlier distortion."
    ],
    "commonMistakes": [
      "Using the Mean for heavily skewed data (like house prices or salaries) where outliers inflate the average.",
      "Forgetting to sort the numbers in ascending order before identifying the Median.",
      "Assuming every dataset has a unique Mode (datasets can be bimodal, multimodal, or have no mode)."
    ],
    "faqs": [
      {
        "question": "When should I use Median instead of Mean?",
        "answer": "Use the Median when your data has extreme outliers or is heavily skewed, as the Median is unaffected by extreme high or low values."
      },
      {
        "question": "What is the Mode?",
        "answer": "The value that appears most frequently in a dataset; if all numbers appear with equal frequency, there is no mode."
      },
      {
        "question": "How is the Median calculated for an even number of values?",
        "answer": "Sort the list, locate the two middle values, and calculate their arithmetic mean."
      }
    ],
    "sources": [
      {
        "name": "American Statistical Association (ASA)",
        "url": "https://www.amstat.org"
      }
    ]
  },
  "ratio-calculator": {
    "title": "Ratio Calculator — MATH Guide & Formula",
    "overview": "Simplifies mathematical ratios (A:B) to their lowest terms using the Greatest Common Divisor and solves for missing proportional values (A:B = C:D).",
    "formula": "Simplified Ratio = (A / GCD(A, B)) : (B / GCD(A, B)) | Proportions: D = (B × C) / A",
    "explanation": "Reduces terms by dividing by their greatest common factor and solves cross-multiplication equations.",
    "example": {
      "title": "Worked Example: Simplifying the Ratio 48:64",
      "inputs": "Ratio A = 48 | Ratio B = 64",
      "steps": [
        "Find Greatest Common Divisor: GCD(48, 64) = 16",
        "Divide first term: 48 / 16 = 3",
        "Divide second term: 64 / 16 = 4",
        "Simplified ratio = 3:4"
      ],
      "summary": "Original Ratio = 48:64 | Simplified = 3:4 | Decimal Ratio = 0.75"
    },
    "metricsText": "Ratios express relative size without units: a 16:9 widescreen display ratio holds true whether measuring millimeters or meters.",
    "useCases": [
      "Culinary Recipe Scaling: Scale ingredient recipe quantities up or down while maintaining exact taste proportions.",
      "Graphic Design & Photography: Maintain exact image aspect ratios when resizing banners and thumbnail graphics.",
      "Financial Statement Analysis: Compute debt-to-equity and current liquidity ratios for corporate balance sheets."
    ],
    "commonMistakes": [
      "Confusing ratios (comparing part to part, A:B) with fractions (comparing part to whole, A/(A+B)).",
      "Mixing different units of measurement without converting to a common scale first.",
      "Cross-multiplying proportions incorrectly when solving for unknown variables."
    ],
    "faqs": [
      {
        "question": "What is the difference between a ratio and a proportion?",
        "answer": "A ratio compares two quantities (A:B); a proportion is an equation stating that two ratios are equal (A:B = C:D)."
      },
      {
        "question": "How do I convert a ratio to a percentage?",
        "answer": "Add the ratio parts together to find the whole (A + B), then calculate [A / (A + B)] × 100."
      },
      {
        "question": "What does scaling a ratio mean?",
        "answer": "Multiplying or dividing all terms in the ratio by the same non-zero number to expand or shrink quantities proportionately."
      }
    ],
    "sources": [
      {
        "name": "Wolfram MathWorld (Ratio)",
        "url": "https://mathworld.wolfram.com/Ratio.html"
      }
    ]
  },
  "lcm-hcf-calculator": {
    "title": "LCM & HCF Calculator — MATH Guide & Formula",
    "overview": "Finds the Least Common Multiple (LCM) and Highest Common Factor (HCF / GCD) for multiple numbers using prime factorization and the Euclidean algorithm.",
    "formula": "HCF = gcd(a, b) via Euclidean Algorithm: gcd(a, b) = gcd(b, a mod b) | LCM = (|a × b|) / gcd(a, b)",
    "explanation": "HCF is the largest integer dividing all numbers without remainder; LCM is the smallest positive integer divisible by all numbers.",
    "example": {
      "title": "Worked Example: LCM and HCF of 24 and 36",
      "inputs": "Number 1 = 24 | Number 2 = 36",
      "steps": [
        "Prime Factorization: 24 = 2³ × 3¹ | 36 = 2² × 3²",
        "HCF (lowest powers): 2² × 3¹ = 4 × 3 = 12",
        "LCM (highest powers): 2³ × 3² = 8 × 9 = 72",
        "Verification: 24 × 36 = 864; HCF × LCM = 12 × 72 = 864"
      ],
      "summary": "Numbers = 24, 36 | HCF (GCD) = 12 | LCM = 72 | Product = 864"
    },
    "metricsText": "The mathematical identity: Product of Two Numbers = HCF × LCM holds true for any two positive integers.",
    "useCases": [
      "Fraction Arithmetic: Find the Lowest Common Denominator (LCD) to add or subtract fractions with unlike denominators.",
      "Event Synchronization: Calculate when two periodic events with different cycle intervals will coincide again.",
      "Tiling and Packaging: Determine the largest square tile size that perfectly fits a rectangular floor without cuts."
    ],
    "commonMistakes": [
      "Confusing LCM with HCF (LCM is always equal to or larger than the greatest number; HCF is always equal to or smaller than the smallest number).",
      "Applying the HCF × LCM = Product rule to three or more numbers (that identity only applies strictly to pairs).",
      "Missing common prime factors during manual ladder division."
    ],
    "faqs": [
      {
        "question": "How does the Euclidean algorithm find the HCF?",
        "answer": "It repeatedly divides the larger number by the smaller and replaces the larger with the remainder until the remainder is zero."
      },
      {
        "question": "Why do we need LCM to add fractions?",
        "answer": "Because you can only add fractions that share a common unit (denominator); the LCM provides the smallest common denominator."
      },
      {
        "question": "Can two prime numbers have an HCF greater than 1?",
        "answer": "No. The HCF of any two distinct prime numbers is always 1, and their LCM is simply their product."
      }
    ],
    "sources": [
      {
        "name": "Euclidean Algorithm (Wolfram MathWorld)",
        "url": "https://mathworld.wolfram.com/EuclideanAlgorithm.html"
      }
    ]
  },
  "fraction-calculator": {
    "title": "Fraction Calculator — MATH Guide & Formula",
    "overview": "Performs addition, subtraction, multiplication, and division on fractions, mixed numbers, and improper fractions with step-by-step simplification.",
    "formula": "Addition: a/b + c/d = (ad + bc) / bd | Multiplication: a/b × c/d = ac / bd | Division: a/b ÷ c/d = ad / bc",
    "explanation": "Converts mixed numbers to improper fractions, finds common denominators, and reduces results to lowest terms via GCD.",
    "example": {
      "title": "Worked Example: Adding 2/3 + 3/4",
      "inputs": "Fraction 1 = 2/3 | Operation = Addition (+) | Fraction 2 = 3/4",
      "steps": [
        "Find common denominator for 3 and 4: LCM(3, 4) = 12",
        "Convert numerators: (2 × 4) / 12 = 8/12 and (3 × 3) / 12 = 9/12",
        "Add numerators: (8 + 9) / 12 = 17/12",
        "Convert to mixed fraction: 1 and 5/12 (Decimal: 1.4167)"
      ],
      "summary": "2/3 + 3/4 = 17/12 | Mixed Number = 1 5/12 | Decimal = 1.4167"
    },
    "metricsText": "To divide fractions, multiply by the reciprocal of the second fraction ('keep, change, flip').",
    "useCases": [
      "Carpentry & Woodworking: Calculate fractional imperial lumber measurements (e.g. 3/8\" + 5/16\").",
      "Cooking & Baking: Halve or double recipe ingredient quantities with fractional cup measurements.",
      "Algebra Homework: Verify manual fraction operations with complete step-by-step simplification breakdowns."
    ],
    "commonMistakes": [
      "Adding denominators directly (e.g. 1/2 + 1/3 = 2/5, which is mathematically incorrect).",
      "Forgetting to invert the second fraction when performing fraction division.",
      "Leaving improper fractions unsimplified without extracting the greatest common factor."
    ],
    "faqs": [
      {
        "question": "What is an improper fraction?",
        "answer": "A fraction where the numerator is greater than or equal to the denominator (e.g. 7/4), which converts to the mixed number 1 3/4."
      },
      {
        "question": "Why can't you add fractions with different denominators directly?",
        "answer": "Because the denominator defines the size of the fractional pieces; you must convert them to equal-sized pieces before adding."
      },
      {
        "question": "What is the reciprocal of a fraction?",
        "answer": "The reciprocal of a/b is b/a; multiplying a fraction by its reciprocal always equals 1."
      }
    ],
    "sources": [
      {
        "name": "Khan Academy Arithmetic (Fractions)",
        "url": "https://www.khanacademy.org"
      }
    ]
  },
  "square-root-calculator": {
    "title": "Square Root & Cube Root Calculator — MATH Guide & Formula",
    "overview": "Computes square roots, cube roots, and nth roots of positive numbers with high floating-point precision and radical simplification.",
    "formula": "Square Root = sqrt(x) = x^(1/2) | Cube Root = cbrt(x) = x^(1/3) | Nth Root = x^(1/n)",
    "explanation": "Calculates the non-negative real root r such that r^n = x. Evaluates perfect squares and decimal approximations.",
    "example": {
      "title": "Worked Example: Finding the Square Root of 250",
      "inputs": "Number x = 250 | Root Type = Square Root (n = 2)",
      "steps": [
        "Identify nearest perfect squares: 15² = 225 and 16² = 256",
        "Estimate value between 15 and 16",
        "High-precision Newton-Raphson calculation: sqrt(250) = 15.8113883",
        "Radical simplification: sqrt(250) = sqrt(25 × 10) = 5 × sqrt(10)"
      ],
      "summary": "sqrt(250) = 15.8114 | Simplified Radical = 5√10 | Perfect Square: No"
    },
    "metricsText": "The square root of any non-square integer is irrational: its decimal expansion continues infinitely without repeating.",
    "useCases": [
      "Geometry & Trigonometry: Solve right triangle hypotenuses using the Pythagorean theorem (c = sqrt(a² + b²)).",
      "Statistical Calculations: Compute standard deviation from sample variance.",
      "Physics & Engineering: Evaluate kinetic energy, electrical RMS voltage, and wave frequency formulas."
    ],
    "commonMistakes": [
      "Assuming the square root of a negative real number exists within the real number system (requires imaginary unit i).",
      "Confusing square root (x^(1/2)) with dividing by 2 (e.g. sqrt(16) is 4, not 8).",
      "Forgetting that every positive number has both a positive and negative root (the radical symbol denotes the principal positive root)."
    ],
    "faqs": [
      {
        "question": "What is a perfect square?",
        "answer": "An integer that is the square of another integer (e.g. 1, 4, 9, 16, 25, 36, 49, 64, 81, 100)."
      },
      {
        "question": "How does the Newton-Raphson method calculate square roots?",
        "answer": "It uses iterative approximations: x_(k+1) = 0.5 × (x_k + S / x_k), rapidly doubling correct decimal precision with each iteration."
      },
      {
        "question": "Can a negative number have a real cube root?",
        "answer": "Yes. For example, the cube root of -8 is -2, because (-2) × (-2) × (-2) = -8."
      }
    ],
    "sources": [
      {
        "name": "MathWorld (Square Root)",
        "url": "https://mathworld.wolfram.com/SquareRoot.html"
      }
    ]
  },
  "standard-deviation-calculator": {
    "title": "Standard Deviation Calculator — MATH Guide & Formula",
    "overview": "Calculates population and sample standard deviation, variance, mean, and sum of squares across numerical datasets to quantify statistical dispersion.",
    "formula": "Sample SD (s) = sqrt([Sum(x_i - Mean)^2] / (n - 1)) | Population SD (sigma) = sqrt([Sum(x_i - Mean)^2] / N)",
    "explanation": "Uses Bessel's correction (n - 1) for sample data to provide an unbiased estimator of population variance.",
    "example": {
      "title": "Worked Example: Sample of 5 Data Points (10, 12, 14, 15, 19)",
      "inputs": "Data Values: 10, 12, 14, 15, 19 (Sample n = 5)",
      "steps": [
        "Calculate sample mean: (10 + 12 + 14 + 15 + 19) / 5 = 70 / 5 = 14.0",
        "Squared deviations: (10-14)²=16, (12-14)²=4, (14-14)²=0, (15-14)²=1, (19-14)²=25",
        "Sum of squared deviations = 16 + 4 + 0 + 1 + 25 = 46.0",
        "Sample variance = 46.0 / (5 - 1) = 46.0 / 4 = 11.5",
        "Sample standard deviation = sqrt(11.5) = 3.391"
      ],
      "summary": "Mean = 14.0 | Sample SD = 3.39 | Population SD = 3.03 | Variance = 11.5"
    },
    "metricsText": "In a normal distribution, the Empirical Rule states that approximately 68% of data falls within 1 SD of the mean, and 95% falls within 2 SDs.",
    "useCases": [
      "Financial Volatility: Measure investment risk and stock price volatility (beta/Sharpe ratio).",
      "Quality Control Manufacturing: Ensure industrial component dimensions remain tightly grouped around target tolerances.",
      "Scientific Research: Quantify measurement uncertainty and experimental variance in laboratory studies."
    ],
    "commonMistakes": [
      "Using population standard deviation (dividing by N) when working with sample data (must divide by n - 1).",
      "Confusing variance (squared units) with standard deviation (expressed in the original data units).",
      "Assuming standard deviation is resilient to outliers (a single extreme outlier dramatically inflates SD)."
    ],
    "faqs": [
      {
        "question": "What is Bessel's correction in standard deviation?",
        "answer": "Dividing by n - 1 instead of n for sample data, which corrects for the mathematical bias of underestimating population variance."
      },
      {
        "question": "What does a high standard deviation mean?",
        "answer": "A high standard deviation indicates that data points are widely dispersed and spread out across a broad range of values."
      },
      {
        "question": "How does variance differ from standard deviation?",
        "answer": "Variance is the average of squared deviations; standard deviation is the square root of variance, restoring the original unit of measurement."
      }
    ],
    "sources": [
      {
        "name": "NIST/SEMATECH e-Handbook of Statistical Methods",
        "url": "https://www.itl.nist.gov/div898/handbook/"
      }
    ]
  },
  "scientific-calculator": {
    "title": "Scientific Calculator — MATH Guide & Formula",
    "overview": "Performs advanced scientific calculations including trigonometry (sin, cos, tan), inverse functions, logarithms (ln, log10), factorials, and powers with radian/degree toggles.",
    "formula": "f(x) = Trigonometric, Logarithmic, Exponential, and Algebraic Functions",
    "explanation": "Evaluates expressions adhering strictly to standard PEMDAS/BODMAS mathematical operator hierarchy and floating-point precision.",
    "example": {
      "title": "Worked Example: Evaluating sin(30°) + log10(100) × 2^3",
      "inputs": "Expression: sin(30 deg) + log10(100) * 2^3",
      "steps": [
        "Evaluate trigonometric term: sin(30°) = 0.5",
        "Evaluate logarithmic term: log10(100) = 2.0",
        "Evaluate exponent: 2^3 = 8.0",
        "Multiplication before addition: 2.0 × 8.0 = 16.0",
        "Final addition: 0.5 + 16.0 = 16.5"
      ],
      "summary": "Expression Evaluated = 16.5 | Mode = Degrees | Operator Precedence Maintained"
    },
    "metricsText": "Always verify your angle mode setting (Radians vs Degrees): computing trigonometric functions in radians when degrees are intended is a classic math exam error.",
    "useCases": [
      "Engineering & Physics: Solve vector forces, harmonic oscillations, and wave mechanics.",
      "Higher Mathematics: Compute natural logs, Euler's number e, and trigonometric identities.",
      "Computer Science: Evaluate logarithmic algorithm complexity (O(log n)) and exponential growth."
    ],
    "commonMistakes": [
      "Operating in Radian mode while entering angles in Degrees (e.g. sin(90) in radians is 0.89, whereas sin(90°) is 1.0).",
      "Confusing natural logarithm ln (base e) with common logarithm log10 (base 10).",
      "Violating mathematical order of operations by not utilizing grouping parentheses."
    ],
    "faqs": [
      {
        "question": "How do I switch between Radians and Degrees?",
        "answer": "Use the DEG/RAD toggle button on the interface; 180 degrees equals π radians (roughly 3.14159 rad)."
      },
      {
        "question": "What is the difference between log and ln?",
        "answer": "log usually represents log10 (base 10); ln represents natural logarithm (base e ≈ 2.71828)."
      },
      {
        "question": "Why is tan(90°) undefined?",
        "answer": "Because tan(x) = sin(x) / cos(x); at 90°, cos(90°) = 0, causing division by zero."
      }
    ],
    "sources": [
      {
        "name": "Wolfram Research MathWorld",
        "url": "https://mathworld.wolfram.com"
      }
    ]
  },
  "percentage-to-fraction-calculator": {
    "title": "Percentage to Fraction/Decimal Converter — MATH Guide & Formula",
    "overview": "Converts percentages into reduced rational fractions, mixed numbers, and decimals with step-by-step simplification breakdowns.",
    "formula": "Fraction = Percentage / 100 | Simplified = (Numerator / GCD) / (Denominator / GCD)",
    "explanation": "Eliminates decimal points in percentage numerators and divides by greatest common factors to produce proper fractions.",
    "example": {
      "title": "Worked Example: Converting 37.5% into a Fraction",
      "inputs": "Percentage = 37.5%",
      "steps": [
        "Express as fraction over 100: 37.5 / 100",
        "Multiply numerator and denominator by 10 to eliminate decimal: 375 / 1000",
        "Find Greatest Common Divisor: GCD(375, 1000) = 125",
        "Divide by GCD: (375 / 125) / (1000 / 125) = 3/8"
      ],
      "summary": "37.5% = 3/8 | Decimal = 0.375 | Simplification Factor = 125"
    },
    "metricsText": "Recognizing common fraction-percentage equivalents (1/8 = 12.5%, 1/4 = 25%, 1/3 = 33.33%, 1/2 = 50%) speeds up mental arithmetic.",
    "useCases": [
      "Arithmetic Problem Solving: Convert percentage test scores into simplified fractional proportions.",
      "Financial Discount Ratios: Express percentage sale markdowns as clean fractional ratios.",
      "Culinary Scaling: Convert percentage baker's percentages into exact measurement cup fractions."
    ],
    "commonMistakes": [
      "Forgetting to multiply both numerator and denominator by 10 when converting decimal percentages (like 12.5%).",
      "Leaving fractions unreduced without dividing out common factors.",
      "Confusing percentages under 1% (e.g. 0.5% = 1/200, not 1/2)."
    ],
    "faqs": [
      {
        "question": "How do I convert a percentage with a decimal to a fraction?",
        "answer": "Multiply numerator and denominator by 10 for every decimal place, then reduce by their greatest common divisor."
      },
      {
        "question": "What is 0.25% as a fraction?",
        "answer": "0.25 / 100 = 25 / 10,000 = 1 / 400."
      },
      {
        "question": "What is 100% as a fraction?",
        "answer": "100 / 100 = 1/1 (or the whole integer 1)."
      }
    ],
    "sources": [
      {
        "name": "National Council of Teachers of Mathematics",
        "url": "https://www.nctm.org"
      }
    ]
  },
  "prime-number-checker": {
    "title": "Prime Number Checker — MATH Guide & Formula",
    "overview": "Determines whether an integer is prime or composite, testing trial divisibility up to sqrt(n) with 6k ± 1 primality optimizations and prime factorizations.",
    "formula": "Primality Test: Check divisibility by 2, 3, and all integers 6k ± 1 <= sqrt(n)",
    "explanation": "A prime number is an integer strictly greater than 1 that has no positive divisors other than 1 and itself.",
    "example": {
      "title": "Worked Example: Testing Primality of 97",
      "inputs": "Integer n = 97",
      "steps": [
        "Calculate square root: sqrt(97) ≈ 9.84 (test primes <= 9)",
        "Test prime divisors: 2 (no), 3 (no), 5 (no), 7 (97 / 7 = 13.85, no)",
        "No divisors found below sqrt(97).",
        "Result: 97 is a Prime Number."
      ],
      "summary": "Number = 97 | Status = PRIME | Factors = 1 and 97 only"
    },
    "metricsText": "The number 1 is neither prime nor composite by fundamental mathematical definition; 2 is the only even prime number.",
    "useCases": [
      "Cryptography & Security: Understand the prime factorization foundations of RSA public-key encryption.",
      "Number Theory Homework: Verify prime classifications and find next adjacent prime numbers.",
      "Algorithm Benchmarking: Demonstrate computational complexity and trial division optimizations."
    ],
    "commonMistakes": [
      "Classifying 1 as a prime number (1 is not prime by the Fundamental Theorem of Arithmetic).",
      "Testing divisors all the way up to n instead of stopping at sqrt(n).",
      "Assuming all odd numbers are prime (e.g. 9, 15, 21, 27 are composite odd numbers)."
    ],
    "faqs": [
      {
        "question": "Why is 1 not considered a prime number?",
        "answer": "Because if 1 were prime, the Fundamental Theorem of Arithmetic (unique prime factorization) would break, as you could multiply by 1 infinitely."
      },
      {
        "question": "Why is testing up to sqrt(n) sufficient to prove primality?",
        "answer": "Because if n had a factor larger than sqrt(n), its corresponding factor pair would have to be smaller than sqrt(n), which would have already been detected."
      },
      {
        "question": "What are Twin Primes?",
        "answer": "Pairs of prime numbers that differ by exactly 2 (such as 3 and 5, 11 and 13, 17 and 19, or 41 and 43)."
      }
    ],
    "sources": [
      {
        "name": "The Prime Pages (University of Tennessee)",
        "url": "https://primes.utm.edu"
      }
    ]
  },
  "factorial-calculator": {
    "title": "Factorial Calculator — MATH Guide & Formula",
    "overview": "Calculates the factorial (n!) of positive integers and evaluates combinations, permutations, and Stirling's asymptotic approximations for large numbers.",
    "formula": "n! = n × (n - 1) × (n - 2) × ... × 3 × 2 × 1 | 0! = 1 by definition",
    "explanation": "Computes the total number of unique ways to arrange n distinct objects in a sequence.",
    "example": {
      "title": "Worked Example: Calculating 6 Factorial (6!)",
      "inputs": "Integer n = 6",
      "steps": [
        "Multiply descending sequence: 6 × 5 × 4 × 3 × 2 × 1",
        "Step 1: 6 × 5 = 30",
        "Step 2: 30 × 4 = 120",
        "Step 3: 120 × 3 = 360",
        "Step 4: 360 × 2 = 720"
      ],
      "summary": "6! = 720 | Permutations = 720 Arrangements"
    },
    "metricsText": "Factorials grow at super-exponential rates: while 10! is 3.6 million, 20! is over 2.4 quintillion, quickly exceeding standard 64-bit float limits.",
    "useCases": [
      "Combinatorics & Probability: Calculate probability distributions, poker hand odds, and lotto combinations.",
      "Algorithm Analysis: Benchmark the time complexity of brute-force Travelling Salesperson problems (O(n!)).",
      "Taylor Series Expansions: Evaluate polynomial series denominators for e^x, sin(x), and cos(x)."
    ],
    "commonMistakes": [
      "Assuming 0! = 0 (0! = 1 by mathematical convention to maintain combinatorial consistency).",
      "Attempting to calculate factorials of negative integers (factorials are undefined for negative integers in standard algebra).",
      "Allowing integer overflow errors when computing factorials above 21 without BigInt."
    ],
    "faqs": [
      {
        "question": "Why does 0 factorial equal 1 (0! = 1)?",
        "answer": "There is exactly 1 way to arrange zero objects (the empty set); algebraically, n! = (n+1)! / (n+1), so 0! = 1! / 1 = 1."
      },
      {
        "question": "Can you calculate factorials for non-integers?",
        "answer": "Yes, the Gamma function Γ(n) generalizes factorials to real and complex numbers, where Γ(n+1) = n!."
      },
      {
        "question": "How large is 100!?",
        "answer": "100! is approximately 9.33 × 10^157, a 158-digit number that far exceeds the total estimated atoms in the observable universe."
      }
    ],
    "sources": [
      {
        "name": "Wolfram MathWorld (Factorial)",
        "url": "https://mathworld.wolfram.com/Factorial.html"
      }
    ]
  },
  "permutation-combination-calculator": {
    "title": "Permutation & Combination Calculator — MATH Guide & Formula",
    "overview": "Calculates Permutations nPr (where order matters) and Combinations nCr (where order does not matter) for choosing r items from n distinct items.",
    "formula": "Permutations: nPr = n! / (n - r)! | Combinations: nCr = n! / [r! × (n - r)!]",
    "explanation": "Permutations count ordered arrangements (passwords, race podiums); combinations count unordered groups (lottery picks, card hands).",
    "example": {
      "title": "Worked Example: Selecting 3 Committee Members from 8 Candidates (n=8, r=3)",
      "inputs": "Total items n = 8 | Chosen items r = 3",
      "steps": [
        "Combination formula: 8! / [3! × (8 - 3)!] = 8! / [3! × 5!]",
        "Expand: (8 × 7 × 6 × 5!) / [(3 × 2 × 1) × 5!]",
        "Cancel 5!: (8 × 7 × 6) / 6 = 336 / 6 = 56 combinations",
        "If order mattered (Permutation nPr): 8 × 7 × 6 = 336 permutations"
      ],
      "summary": "n = 8, r = 3 | Combinations nCr = 56 | Permutations nPr = 336"
    },
    "metricsText": "Because order does not matter in combinations, nCr is always equal to nPr divided by r! (the number of ways to arrange the chosen group).",
    "useCases": [
      "Lottery & Gaming Odds: Calculate the total number of possible combinations in 6/49 lottery games.",
      "Team Selection: Determine how many unique project groups can be selected from a department pool.",
      "Password Security: Calculate the total combinatorial search space required to brute-force security pins."
    ],
    "commonMistakes": [
      "Using permutations when order does not matter (e.g. picking a hand of cards is a combination, not a permutation).",
      "Using combinations when positions or roles are distinct (President, VP, Treasurer requires permutations).",
      "Selecting r greater than n without replacement."
    ],
    "faqs": [
      {
        "question": "What is the key difference between permutation and combination?",
        "answer": "Order. In a permutation, arrangement matters (ABC is different from CBA); in a combination, grouping matters (ABC and CBA are the exact same group)."
      },
      {
        "question": "Why is a 'combination lock' a misnomer?",
        "answer": "Because the order of digits matters (e.g. 1-2-3 is not 3-2-1), making it mathematically a permutation lock."
      },
      {
        "question": "What is Pascal's Triangle in combinations?",
        "answer": "A triangular array where each entry corresponds to a combination nCr, with rows representing n and columns representing r."
      }
    ],
    "sources": [
      {
        "name": "Mathematical Association of America",
        "url": "https://www.maa.org"
      }
    ]
  },
  "quadratic-equation-solver": {
    "title": "Quadratic Equation Solver — MATH Guide & Formula",
    "overview": "Solves quadratic equations of the form ax² + bx + c = 0, calculating real or complex roots, the discriminant, vertex coordinates, and axis of symmetry.",
    "formula": "Roots x = [-b ± sqrt(b² - 4ac)] / (2a) | Discriminant Delta = b² - 4ac",
    "explanation": "If Δ > 0: two distinct real roots. If Δ = 0: one repeated real root. If Δ < 0: two complex conjugate roots (u ± vi).",
    "example": {
      "title": "Worked Example: Solving 2x² - 4x - 6 = 0",
      "inputs": "a = 2 | b = -4 | c = -6",
      "steps": [
        "Discriminant Δ = (-4)² - 4(2)(-6) = 16 - (-48) = 64 (Positive, 2 real roots)",
        "Square root of discriminant = sqrt(64) = 8",
        "Root 1: [-(-4) + 8] / (2 × 2) = (4 + 8) / 4 = 12 / 4 = 3.0",
        "Root 2: [-(-4) - 8] / (2 × 2) = (4 - 8) / 4 = -4 / 4 = -1.0"
      ],
      "summary": "Roots = x = 3 and x = -1 | Discriminant = 64 | Parabola Vertex = (1, -8)"
    },
    "metricsText": "The vertex of the parabola always occurs at x = -b / (2a), representing the maximum or minimum turning point of the quadratic function.",
    "useCases": [
      "Projectile Trajectory Modeling: Calculate flight duration, maximum height, and landing point for launched objects.",
      "Profit Maximization: Find optimal product pricing coordinates where quadratic revenue curves peak.",
      "Civil Engineering: Design parabolic suspension bridge curves and architectural archways."
    ],
    "commonMistakes": [
      "Setting coefficient a = 0 (if a = 0, the equation reduces to a linear equation bx + c = 0).",
      "Forgetting to negate b in the numerator (-b becomes positive if b is negative).",
      "Failing to divide the entire numerator [-b ± sqrt(Δ)] by 2a."
    ],
    "faqs": [
      {
        "question": "What does the discriminant tell you?",
        "answer": "The discriminant (b² - 4ac) indicates the nature of roots: > 0 means 2 real roots, = 0 means 1 real root, < 0 means 2 complex roots."
      },
      {
        "question": "What if the discriminant is negative?",
        "answer": "The parabola does not cross the x-axis, and roots are complex numbers involving the imaginary unit i = sqrt(-1)."
      },
      {
        "question": "How do I find the vertex of a quadratic function?",
        "answer": "The x-coordinate is -b / (2a); plug this x value back into the quadratic equation to find the corresponding y-coordinate."
      }
    ],
    "sources": [
      {
        "name": "Wolfram MathWorld (Quadratic Equation)",
        "url": "https://mathworld.wolfram.com/QuadraticEquation.html"
      }
    ]
  },
  "number-to-words-converter": {
    "title": "Number to Words Converter — MATH Guide & Formula",
    "overview": "Converts numbers and monetary currencies into written words in Indian Numbering Format (Lakhs, Crores) and International Format (Millions, Billions).",
    "formula": "Words = Number_To_Language_Algorithm(Integer_Value, Numbering_System)",
    "explanation": "Indian system groups by hundreds then pairs (3,2,2 format: Thousands, Lakhs, Crores); Western system groups by triplets (Millions, Billions).",
    "example": {
      "title": "Worked Example: Converting ₹12,34,567 into Written Words",
      "inputs": "Number = 12,34,567 | System = Indian Rupees",
      "steps": [
        "Decompose into groups: 12 Lakhs, 34 Thousands, 5 Hundreds, 67",
        "Convert to text: 'Twelve Lakh Thirty-Four Thousand Five Hundred Sixty-Seven Rupees Only'",
        "International equivalent: 'One Million Two Hundred Thirty-Four Thousand Five Hundred Sixty-Seven'"
      ],
      "summary": "Input = 12,34,567 | Indian Words: Twelve Lakh Thirty-Four Thousand Five Hundred Sixty-Seven"
    },
    "metricsText": "Spelling out financial amounts in written words on bank cheques and legal promissory notes prevents fraudulent numeral tampering.",
    "useCases": [
      "Cheque & Draft Writing: Write official bank cheques in written words to prevent cheque bounce and bank teller rejection.",
      "Legal Contracts: Spell out financial consideration values in commercial sale deeds and lease agreements.",
      "Invoice Preparation: Print total payable amounts in written words at the bottom of commercial GST invoices."
    ],
    "commonMistakes": [
      "Confusing Indian numbering groupings (Lakhs/Crores) with international groupings (Millions/Billions).",
      "Omitting the concluding word 'Only' on financial payment cheques.",
      "Writing 'Hundreds' or 'Thousands' in plural form (e.g. writing 'Five Hundreds' instead of 'Five Hundred')."
    ],
    "faqs": [
      {
        "question": "How much is 1 Crore in Millions?",
        "answer": "1 Crore equals exactly 10 Million (1,00,00,000 = 10,000,000)."
      },
      {
        "question": "How much is 1 Lakh in Thousands?",
        "answer": "1 Lakh equals 100 Thousand (1,00,000 = 100,000)."
      },
      {
        "question": "Why is writing numbers in words mandatory on bank cheques?",
        "answer": "Because written words cannot be altered by adding extra zeros or altering digits, preventing financial fraud."
      }
    ],
    "sources": [
      {
        "name": "Reserve Bank of India Cheque Truncation System (CTS)",
        "url": "https://www.rbi.org.in"
      }
    ]
  },
  "json-formatter": {
    "title": "JSON Formatter — DEVELOPER Guide & Formula",
    "overview": "Formats, indents, validates, and beautifies minified JSON payloads with customizable indentation tabs or spaces for rapid API inspection.",
    "formula": "Formatted_JSON = JSON.stringify(JSON.parse(Raw_String), null, Indent_Spaces)",
    "explanation": "Parses input strings against ECMA-404 JSON syntax specifications, highlighting unclosed brackets, missing quotes, and syntax errors.",
    "example": {
      "title": "Worked Example: Formatting Minified API Response",
      "inputs": "Raw String: {\"status\":\"success\",\"data\":{\"id\":101,\"user\":\"mani\"}}",
      "steps": [
        "Validate JSON token syntax and structure.",
        "Apply 2-space hierarchical tree indentation.",
        "Output clean, human-readable JSON structure with line breaks."
      ],
      "summary": "Syntax Validated | Indentation: 2 Spaces | Clean Hierarchy Produced"
    },
    "metricsText": "All JSON validation executes locally in browser memory via JavaScript V8 engine; confidential API keys and user payloads are never transmitted to external servers.",
    "useCases": [
      "REST API Debugging: Pretty-print minified HTTP response payloads from Postman or curl requests.",
      "Config File Validation: Validate syntax for package.json, tsconfig.json, and Kubernetes manifests.",
      "Git Diff Preparation: Format single-line JSON payloads before committing to git for clean line-by-line diffs."
    ],
    "commonMistakes": [
      "Using single quotes instead of standard double quotes for JSON keys and string values.",
      "Leaving trailing commas after the final key in objects or arrays (which violates RFC 8259).",
      "Pasting JavaScript object literals with unquoted keys instead of strict JSON."
    ],
    "faqs": [
      {
        "question": "Why does JSON reject trailing commas?",
        "answer": "RFC 8259 strictly defines JSON syntax; trailing commas break strict parsers in Python, Java, and Go."
      },
      {
        "question": "Is my JSON payload secure on Calciverse?",
        "answer": "Yes, JSON formatting executes 100% locally in your browser memory; zero network requests are made."
      },
      {
        "question": "Can this tool format large multi-megabyte JSON files?",
        "answer": "Yes, modern browser engines can parse and pretty-print multi-megabyte JSON objects in milliseconds."
      }
    ],
    "sources": [
      {
        "name": "ECMA-404 The JSON Data Interchange Standard",
        "url": "https://www.ecma-international.org"
      }
    ]
  },
  "base64-encoder-decoder": {
    "title": "Base64 Encoder/Decoder — DEVELOPER Guide & Formula",
    "overview": "Encodes binary and ASCII/UTF-8 text into standard Base64 representation and decodes Base64 strings back to clean plaintext.",
    "formula": "Base64 = Map_6Bit_Chunks_To_Alphabet(ASCII_Binary, RFC_4648)",
    "explanation": "Groups 8-bit bytes into 6-bit chunks, mapping each chunk to a 64-character ASCII alphabet (A-Z, a-z, 0-9, +, /) with '=' padding.",
    "example": {
      "title": "Worked Example: Encoding 'Calciverse' into Base64",
      "inputs": "Input Plaintext = 'Calciverse'",
      "steps": [
        "Convert ASCII characters into 8-bit binary stream.",
        "Re-group binary bits into 6-bit index blocks.",
        "Map index blocks to Base64 character index table = 'Q2FsY2l2ZXJzZQ=='"
      ],
      "summary": "Plaintext = 'Calciverse' | Base64 Encoded = 'Q2FsY2l2ZXJzZQ=='"
    },
    "metricsText": "Base64 encoding increases data payload size by approximately 33% due to representing 3 bytes of binary data using 4 ASCII characters.",
    "useCases": [
      "Data URIs: Embed small PNG or SVG images directly into CSS and HTML stylesheets without extra HTTP requests.",
      "Basic Authentication: Encode 'username:password' strings for HTTP Authorization headers.",
      "Binary Payload Transmission: Transmit raw binary files safely across text-only protocols like SMTP email."
    ],
    "commonMistakes": [
      "Treating Base64 as security or encryption (it is an encoding scheme, not encryption; anyone can decode it instantly).",
      "Failing to handle multibyte UTF-8 characters (like emojis or non-English text) in native browser btoa() functions.",
      "Omitting '=' padding characters, which causes strict backend decoders to throw formatting exceptions."
    ],
    "faqs": [
      {
        "question": "Is Base64 an encryption algorithm?",
        "answer": "No. Base64 is an encoding format designed for safe data transmission across text channels; it offers zero cryptographic security."
      },
      {
        "question": "Why does Base64 output end with '=' signs?",
        "answer": "The '=' symbol is padding used when the input byte length is not evenly divisible by 3, ensuring 4-character alignment."
      },
      {
        "question": "What is URL-safe Base64?",
        "answer": "A variant that replaces '+' with '-' and '/' with '_' to prevent conflicts with URL query string reserved characters."
      }
    ],
    "sources": [
      {
        "name": "RFC 4648 Base64 Encoding Standard",
        "url": "https://www.ietf.org/rfc/rfc4648.txt"
      }
    ]
  },
  "color-picker": {
    "title": "Color Picker — DEVELOPER Guide & Formula",
    "overview": "Picks, samples, and converts web colors interactively between HEX, RGB, HSL, and HSV formats with instant alpha transparency controls.",
    "formula": "HEX = '#' + R_hex + G_hex + B_hex | HSL = Transform_RGB_To_Polar_Cylindrical(R, G, B)",
    "explanation": "Converts color coordinates across additive RGB color spaces and human-intuitive Hue, Saturation, and Lightness models.",
    "example": {
      "title": "Worked Example: Converting Calciverse Saffron Color",
      "inputs": "HEX Value = #f59e0b",
      "steps": [
        "RGB decomposition: R = 245, G = 158, B = 11",
        "HSL conversion: Hue = 38°, Saturation = 92%, Lightness = 50%",
        "CSS declaration: rgb(245, 158, 11) | hsl(38, 92%, 50%)"
      ],
      "summary": "HEX = #f59e0b | RGB = (245, 158, 11) | HSL = (38°, 92%, 50%)"
    },
    "metricsText": "HSL (Hue, Saturation, Lightness) is preferred by modern UI designers because adjusting lightness or saturation does not alter the underlying color hue.",
    "useCases": [
      "UI Design System Tokens: Generate consistent color palettes and interactive hover states for web apps.",
      "Tailwind CSS Configuration: Convert brand hex colors into RGB coordinate triples for Tailwind CSS variable opacity.",
      "Digital Illustration: Sample and inspect exact color values for canvas and vector graphics."
    ],
    "commonMistakes": [
      "Using 3-digit shorthand hex codes (#f00) when exact 6-digit or 8-digit precision is required for brand consistency.",
      "Forgetting to check contrast ratios against background colors, causing accessibility failures for visually impaired users.",
      "Confusing CMYK print color profiles with digital sRGB display screens."
    ],
    "faqs": [
      {
        "question": "What is the difference between HSL and RGB?",
        "answer": "RGB defines colors by red, green, and blue light intensities; HSL defines colors by hue angle (0-360°), saturation percentage, and lightness percentage."
      },
      {
        "question": "What do the extra two digits in an 8-digit HEX code mean?",
        "answer": "They represent the alpha transparency channel (e.g. #f59e0bff is 100% opaque, #f59e0b80 is 50% transparent)."
      },
      {
        "question": "How does the EyeDropper API work?",
        "answer": "Modern browsers provide a native screen magnifying eyedropper that samples pixel colors directly from your desktop display."
      }
    ],
    "sources": [
      {
        "name": "W3C CSS Color Module Level 4",
        "url": "https://www.w3.org/TR/css-color-4/"
      }
    ]
  },
  "regex-tester": {
    "title": "Regex Tester — DEVELOPER Guide & Formula",
    "overview": "Tests, evaluates, and debugs JavaScript regular expressions in real time with syntax highlighting, flag toggles, and capture group breakdowns.",
    "formula": "Matches = RegExp(Pattern, Flags).exec(Target_Text)",
    "explanation": "Evaluates search patterns with standard PCRE / ECMAScript flags: global (g), case-insensitive (i), multiline (m), dotAll (s), and unicode (u).",
    "example": {
      "title": "Worked Example: Email Validation Regex Pattern",
      "inputs": "Pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/ | Target: 'user@example.com'",
      "steps": [
        "Evaluate username character classes before the @ symbol.",
        "Validate domain host and subdomains.",
        "Validate top-level domain suffix (minimum 2 characters).",
        "Result: Match found (Valid email format)."
      ],
      "summary": "Pattern Validated | 1 Full Match Found | Zero Syntax Errors"
    },
    "metricsText": "Beware of catastrophic backtracking: nested quantifiers like (a+)+ can cause regular expression evaluation times to explode exponentially.",
    "useCases": [
      "Form Input Validation: Test regex rules for validating phone numbers, zip codes, passwords, and email addresses.",
      "Log Scraping: Extract timestamp patterns, IP addresses, and HTTP status codes from web server log files.",
      "Search & Replace Workflows: Formulate capture group replacement strings ($1, $2) for code refactoring."
    ],
    "commonMistakes": [
      "Failing to escape special meta-characters (like . * + ? [ ] { } ( ) | ^ $ \\) when searching for literal characters.",
      "Writing unanchored expressions (^ and $) that match substrings when full-string validation was intended.",
      "Creating catastrophic backtracking vulnerabilities that freeze web application event loops."
    ],
    "faqs": [
      {
        "question": "What is catastrophic backtracking in regular expressions?",
        "answer": "A performance pitfall where an ambiguous regex pattern forces the regex engine to explore millions of possible match permutations, hanging the CPU."
      },
      {
        "question": "What is the difference between greedy and lazy quantifiers?",
        "answer": "Greedy quantifiers (*, +) match as much text as possible; lazy quantifiers (*?, +?) match as little text as necessary."
      },
      {
        "question": "What does the 'm' flag do in regex?",
        "answer": "The multiline flag causes ^ and $ to match the start and end of each individual line, rather than the entire input string."
      }
    ],
    "sources": [
      {
        "name": "ECMA-262 ECMAScript RegExp Specification",
        "url": "https://tc39.es/ecma262/"
      }
    ]
  },
  "html-formatter": {
    "title": "HTML Formatter — DEVELOPER Guide & Formula",
    "overview": "Beautifies minified, messy, or unindented HTML templates with consistent tag indentation, attribute alignment, and DOM hierarchy formatting.",
    "formula": "Formatted_HTML = Indent_DOM_Tree(Parse_HTML(Raw_Markup), 2_or_4_Spaces)",
    "explanation": "Parses DOM parent-child tag hierarchies, formats inline and block-level elements, and preserves self-closing void elements.",
    "example": {
      "title": "Worked Example: Formatting Minified Landing Page Section",
      "inputs": "Raw String: <div><h1>Title</h1><p>Description text</p><button>Click</button></div>",
      "steps": [
        "Parse open and close tag tokens.",
        "Indent child elements 2 spaces deeper than parent container.",
        "Output clean, multi-line structured HTML markup."
      ],
      "summary": "Clean HTML Hierarchy | 2-Space Indentation | Block Elements Formatted"
    },
    "metricsText": "Proper HTML tag indentation reduces code review times and prevents unclosed tag bugs that break web page CSS layout trees.",
    "useCases": [
      "Email Template Formatting: Clean up messy, nested table-based HTML email newsletter templates.",
      "Web Scraping Inspection: Pretty-print raw HTML source code downloaded from web scrapers for easier parsing.",
      "CMS Template Cleanups: Clean up copy-pasted rich-text HTML exported from WYSIWYG editors."
    ],
    "commonMistakes": [
      "Accidentally indenting <pre> or <code> blocks where whitespace changes affect browser text rendering.",
      "Leaving orphaned unclosed <div> or <span> tags that distort downstream flexbox or grid layouts.",
      "Using non-standard custom tags without proper custom element registration."
    ],
    "faqs": [
      {
        "question": "Does indenting HTML increase file size?",
        "answer": "Yes, formatting adds whitespace characters; always minify HTML before deploying to production to maximize page load speeds."
      },
      {
        "question": "What are void elements in HTML?",
        "answer": "Self-closing tags that cannot contain child elements or closing tags, such as <img>, <input>, <br>, and <meta>."
      },
      {
        "question": "Why is whitespace important inside <pre> tags?",
        "answer": "Browsers preserve exact spaces and line breaks inside <pre> tags; auto-indenting them alters visible output."
      }
    ],
    "sources": [
      {
        "name": "W3C HTML5 Specification",
        "url": "https://www.w3.org/TR/html52/"
      }
    ]
  },
  "sql-formatter": {
    "title": "SQL Formatter — DEVELOPER Guide & Formula",
    "overview": "Formats unreadable, single-line SQL queries into clean, standardized statements with capitalized clauses and indented subqueries.",
    "formula": "Beautified_SQL = Indent_Clauses(Capitalize_Keywords(Tokenize_SQL(Raw_Query)))",
    "explanation": "Standardizes reserved SQL keywords (SELECT, FROM, WHERE, JOIN, GROUP BY, ORDER BY) into uppercase and aligns table join clauses.",
    "example": {
      "title": "Worked Example: Formatting Complex E-Commerce Order Query",
      "inputs": "Raw String: select o.id, c.name, sum(o.total) from orders o join customers c on o.cust_id=c.id where o.status='paid' group by o.id, c.name order by o.id desc",
      "steps": [
        "Capitalize SQL keywords into uppercase.",
        "Place major clauses (SELECT, FROM, JOIN, WHERE, GROUP BY, ORDER BY) on dedicated newlines.",
        "Indent column projections and join conditions 2 spaces."
      ],
      "summary": "Keywords Standardized | Clauses Aligned | Subqueries Indented"
    },
    "metricsText": "Formatting SQL queries makes complex nested joins and aggregation logic instantly readable during database code reviews.",
    "useCases": [
      "Database Query Tuning: Format complex analytical queries from ORM logs (Hibernate, Prisma) for query plan analysis.",
      "Pull Request Reviews: Clean up migration scripts and stored procedures before merging into database repositories.",
      "Documentation & Runbooks: Create beautifully formatted SQL snippets for engineering wikis and runbooks."
    ],
    "commonMistakes": [
      "Breaking up string literals or quoted column aliases during automated newline insertion.",
      "Failing to standardize dialect-specific operators between PostgreSQL, MySQL, and SQL Server.",
      "Forgetting to wrap complex OR conditions in parentheses inside WHERE clauses."
    ],
    "faqs": [
      {
        "question": "Which SQL dialects does the formatter support?",
        "answer": "Standard ANSI SQL, PostgreSQL, MySQL, SQLite, Oracle PL/SQL, and Microsoft T-SQL syntax."
      },
      {
        "question": "Why capitalize SQL keywords?",
        "answer": "Uppercasing reserved keywords like SELECT and WHERE creates visual contrast against lower-case table and column identifiers."
      },
      {
        "question": "Is my database query data secure?",
        "answer": "Yes, formatting executes entirely client-side; database query strings, table schemas, and parameters are never uploaded."
      }
    ],
    "sources": [
      {
        "name": "ISO/IEC 9075 SQL Standard",
        "url": "https://www.iso.org"
      }
    ]
  },
  "css-minifier": {
    "title": "CSS Minifier — DEVELOPER Guide & Formula",
    "overview": "Compresses CSS stylesheets by removing whitespace, comments, trailing semicolons, and redundant rules to reduce asset file sizes and accelerate page loads.",
    "formula": "Compressed_CSS = Strip_Comments_And_Whitespace(Raw_CSS)",
    "explanation": "Eliminates unnecessary line breaks, spaces around selectors and braces, and converts color codes to shorter hexadecimal equivalents.",
    "example": {
      "title": "Worked Example: Minifying a Navigation Header Stylesheet",
      "inputs": "Raw CSS: 450 bytes with comments, multi-line indentation, and spaces around colons",
      "steps": [
        "Strip all CSS multi-line comments (/* ... */).",
        "Remove line breaks, tab indents, and spaces around { } : ; , symbols.",
        "Combine redundant zero units (e.g. 0px -> 0)."
      ],
      "summary": "Original = 450 Bytes | Minified = 210 Bytes | Compression Savings = 53.3%"
    },
    "metricsText": "Minifying CSS assets reduces initial page payload size, directly improving Google Core Web Vitals (First Contentful Paint and LCP).",
    "useCases": [
      "Production Deployment: Minify custom theme stylesheets before uploading to web hosting servers or CDNs.",
      "Asset Size Optimization: Reduce bundle sizes for mobile web applications on constrained cellular data networks.",
      "Inline Critical CSS: Compress above-the-fold critical CSS rules for direct embedding inside HTML <head> tags."
    ],
    "commonMistakes": [
      "Over-minifying modern CSS calc() expressions (removing spaces around + and - inside calc() breaks CSS syntax).",
      "Minifying source code without preserving a development backup file for future editing.",
      "Failing to pair minification with Gzip or Brotli server-level compression."
    ],
    "faqs": [
      {
        "question": "Why do spaces matter inside CSS calc() functions?",
        "answer": "The CSS specification requires whitespace around the + and - operators inside calc() to distinguish them from positive and negative signs."
      },
      {
        "question": "How much file size reduction does CSS minification achieve?",
        "answer": "Typically 20% to 50% reduction in raw file size, and further benefits when combined with Gzip/Brotli transfer compression."
      },
      {
        "question": "Does minifying CSS alter how styles render in browsers?",
        "answer": "No. Minification strips only non-semantic whitespace and comments; all style rendering behavior remains identical."
      }
    ],
    "sources": [
      {
        "name": "W3C CSS Syntax Module Level 3",
        "url": "https://www.w3.org/TR/css-syntax-3/"
      }
    ]
  },
  "js-minifier": {
    "title": "JS Minifier — DEVELOPER Guide & Formula",
    "overview": "Compresses JavaScript source code by removing whitespace, line breaks, comments, and redundant characters to optimize client download speeds.",
    "formula": "Minified_JS = Strip_Redundant_Tokens(JavaScript_Source)",
    "explanation": "Safely strips block and single-line comments, condenses whitespace, and preserves critical semicolon terminators.",
    "example": {
      "title": "Worked Example: Minifying a Client-Side Modal Script",
      "inputs": "Raw JS: 1,200 bytes containing comments, indented functions, and variable declarations",
      "steps": [
        "Remove all // single-line and /* block */ comments.",
        "Strip extraneous newlines and spaces around operators and braces.",
        "Preserve strict semicolons to prevent Automatic Semicolon Insertion (ASI) bugs."
      ],
      "summary": "Original = 1,200 Bytes | Minified = 580 Bytes | Savings = 51.7%"
    },
    "metricsText": "Minification eliminates dead characters, while production bundlers combine minification with tree-shaking and variable mangling for maximum compression.",
    "useCases": [
      "Script Optimization: Minify standalone JavaScript utility scripts before deploying to production websites.",
      "Bookmarklet Creation: Compress multi-line browser automation scripts into single-line javascript: bookmarklet URLs.",
      "Widget Embedding: Compress embeddable JavaScript tracking tags and chat widget scripts."
    ],
    "commonMistakes": [
      "Omitting semicolons in original code, which causes syntax errors when newlines are removed during minification.",
      "Minifying already minified library files (like jquery.min.js), which can introduce corruption.",
      "Debugging production issues on minified code without generating source maps."
    ],
    "faqs": [
      {
        "question": "What is the difference between minification and obfuscation?",
        "answer": "Minification strips whitespace and comments to reduce file size; obfuscation deliberately scrambles code logic to make reverse engineering difficult."
      },
      {
        "question": "What are source maps?",
        "answer": "Files that map minified production code back to original source code lines, enabling easy debugging in browser DevTools."
      },
      {
        "question": "Why does missing semicolons break minified JavaScript?",
        "answer": "JavaScript's Automatic Semicolon Insertion (ASI) relies on line breaks; stripping newlines can cause adjacent statements to fuse illegally."
      }
    ],
    "sources": [
      {
        "name": "ECMA-262 ECMAScript Language Specification",
        "url": "https://tc39.es/ecma262/"
      }
    ]
  },
  "markdown-previewer": {
    "title": "Markdown Previewer — DEVELOPER Guide & Formula",
    "overview": "Renders CommonMark and GitHub Flavored Markdown (GFM) into clean, sanitized HTML in real time with live side-by-side preview.",
    "formula": "Rendered_HTML = Sanitize(CommonMark_Parser(Markdown_Source))",
    "explanation": "Parses headers, bold/italics, bullet lists, blockquotes, code blocks, tables, and hyperlinks conforming to GFM specifications.",
    "example": {
      "title": "Worked Example: Previewing a GitHub README Section",
      "inputs": "# Project Title\n\n**Bold text**, *italics*, and `inline code`.\n\n- Feature 1\n- Feature 2",
      "steps": [
        "Parse heading tokens (# into <h1>).",
        "Convert inline styling markers (** into <strong>, ` into <code>).",
        "Render unordered list items (- into <ul><li>)."
      ],
      "summary": "CommonMark Validated | Live HTML Preview Generated | Instant Copy Export"
    },
    "metricsText": "Markdown offers a portable, plain-text syntax that converts reliably to HTML, PDF, and documentation sites without proprietary editor lock-in.",
    "useCases": [
      "README Documentation: Draft and proofread project README.md files before committing to GitHub or GitLab.",
      "Technical Blogging: Write markdown articles for static site generators like Jekyll, Hugo, Astro, and Next.js.",
      "Note Taking: Formulate structured technical notes with clean code blocks and checklist tasks."
    ],
    "commonMistakes": [
      "Forgetting to leave an empty blank line before starting bullet lists, which breaks list parsing in standard CommonMark.",
      "Omitting a space after the # hash symbol for headings (e.g. #Heading instead of # Heading).",
      "Failing to escape raw HTML characters (< and >) inside code snippets."
    ],
    "faqs": [
      {
        "question": "What is GitHub Flavored Markdown (GFM)?",
        "answer": "A strict extension of CommonMark that adds support for tables, task checklists, strikethrough text, and autolinks."
      },
      {
        "question": "How do I create a table in Markdown?",
        "answer": "Use pipes (|) to separate columns and hyphens (-) to define header rows (e.g. | Col 1 | Col 2 |\\n|---|---|)."
      },
      {
        "question": "Can I use raw HTML inside Markdown?",
        "answer": "Yes, standard Markdown parsers allow raw HTML tags for advanced formatting, unless explicitly disabled for security."
      }
    ],
    "sources": [
      {
        "name": "CommonMark Spec",
        "url": "https://commonmark.org"
      }
    ]
  },
  "url-encoder-decoder": {
    "title": "URL Encoder/Decoder — DEVELOPER Guide & Formula",
    "overview": "Encodes reserved and non-ASCII characters into standard percent-encoded escape sequences (%XX) and decodes URL strings safely.",
    "formula": "Encoded_URL = encodeURIComponent(String) | Decoded_URL = decodeURIComponent(Encoded_String)",
    "explanation": "Replaces unsafe URI characters with a '%' symbol followed by two hexadecimal digits representing their UTF-8 byte values (e.g. space -> %20).",
    "example": {
      "title": "Worked Example: Encoding Query Parameter String",
      "inputs": "Raw String: 'name=Rahul Sharma & co=Calciverse!'",
      "steps": [
        "Identify space characters and special symbols (&, =, !).",
        "Encode spaces to %20 and special characters to corresponding hex triplets.",
        "Resulting encoded string: 'name%3DRahul%20Sharma%20%26%20co%3DCalciverse!'"
      ],
      "summary": "Plaintext = 'Rahul Sharma & co' | Encoded = 'Rahul%20Sharma%20%26%20co'"
    },
    "metricsText": "Failing to URL-encode query string parameters allows characters like '&' and '=' to corrupt HTTP request structures and break backend API parsers.",
    "useCases": [
      "API Query Construction: Encode search parameters and user inputs before appending to GET request URL endpoints.",
      "OAuth Redirect URIs: Safely pass callback URLs as query string values inside single-sign-on redirect parameters.",
      "Webhook Payload Links: Prepare encoded URL links containing special characters for notification systems."
    ],
    "commonMistakes": [
      "Using encodeURI() when encodeURIComponent() was needed (encodeURI does not encode &, +, or =, which breaks query parameters).",
      "Double-encoding URLs (turning %20 into %2520), which causes backend decoders to receive corrupted strings.",
      "Forgetting that the '+' character represents a space in form-urlencoded data but a literal '+' in path segments."
    ],
    "faqs": [
      {
        "question": "What is the difference between encodeURI and encodeURIComponent?",
        "answer": "encodeURI preserves full URL structure (leaving ://, ?, & intact); encodeURIComponent encodes all reserved characters and is intended for individual query parameters."
      },
      {
        "question": "Why is space encoded as %20 or +?",
        "answer": "%20 is standard percent-encoding; the '+' character is used specifically in application/x-www-form-urlencoded form submissions."
      },
      {
        "question": "What characters never need URL encoding?",
        "answer": "Unreserved characters: alphanumeric letters (A-Z, a-z), decimal digits (0-9), and hyphen (-), underscore (_), period (.), and tilde (~)."
      }
    ],
    "sources": [
      {
        "name": "RFC 3986 Uniform Resource Identifier (URI)",
        "url": "https://www.ietf.org/rfc/rfc3986.txt"
      }
    ]
  },
  "html-entity-converter": {
    "title": "HTML Entity Encoder/Decoder — DEVELOPER Guide & Formula",
    "overview": "Converts reserved HTML characters into named entity references (&amp;, &lt;, &gt;) and decimal/hex character codes to prevent XSS attacks and rendering bugs.",
    "formula": "HTML_Entities = Replace_Characters({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '\"': '&quot;', \"'\": '&#39;' })",
    "explanation": "Ensures reserved markup delimiters are rendered literally by web browsers rather than executed as DOM markup.",
    "example": {
      "title": "Worked Example: Escaping Script Tag String",
      "inputs": "Raw String: '<script>alert(\"XSS\");</script>'",
      "steps": [
        "Replace '<' with '&lt;'.",
        "Replace '>' with '&gt;'.",
        "Replace '\"' with '&quot;'.",
        "Result: '&lt;script&gt;alert(&quot;XSS&quot;);&lt;/script&gt;'"
      ],
      "summary": "Escaped HTML Entities | XSS Injection Prevented | Browser Displays Literal Text"
    },
    "metricsText": "Escaping user-generated inputs using HTML entities is the first line of defense against Cross-Site Scripting (XSS) vulnerabilities.",
    "useCases": [
      "XSS Sanitization: Escape untrusted user comments before rendering them into dynamic web pages.",
      "Code Block Display: Render literal HTML tags inside <code> and <pre> elements on technical blogs.",
      "Special Symbol Rendering: Display copyright symbols (&copy;), currency symbols (&pound;, &yen;), and math characters."
    ],
    "commonMistakes": [
      "Double-escaping ampersands (&amp; becoming &amp;amp;), which creates ugly literal entity strings on screen.",
      "Failing to escape single quotes (&#39;) inside HTML attribute values, which allows attribute-breaking injections.",
      "Assuming HTML escaping protects against SQL injection (HTML entities only protect against browser DOM execution)."
    ],
    "faqs": [
      {
        "question": "Why must the ampersand (&) always be escaped first?",
        "answer": "Because HTML entities begin with an ampersand; if you escape other characters first and then escape ampersands, you double-escape all previous entities."
      },
      {
        "question": "What are the 5 critical HTML entities to escape?",
        "answer": "& (&amp;), < (&lt;), > (&gt;), \" (&quot;), and ' (&#39; or &apos;)."
      },
      {
        "question": "What is the difference between named entities and numeric entities?",
        "answer": "Named entities use readable names (&copy;); numeric entities use decimal (&#169;) or hex (&#xA9;) Unicode code points."
      }
    ],
    "sources": [
      {
        "name": "W3C HTML Character Entity Reference",
        "url": "https://dev.w3.org/html5/html-author/charref"
      }
    ]
  },
  "jwt-decoder": {
    "title": "JWT Decoder — DEVELOPER Guide & Formula",
    "overview": "Decodes and inspects JSON Web Token (JWT) headers and claims payloads client-side, displaying algorithm headers, expiration timestamps, and user scopes.",
    "formula": "Decoded_Payload = JSON.parse(Base64URL_Decode(JWT.split('.')[1]))",
    "explanation": "A JWT consists of three parts separated by dots: Header, Payload, and Signature. Decoding parses Header and Payload without verifying cryptographic signature.",
    "example": {
      "title": "Worked Example: Inspecting an Authentication Bearer Token",
      "inputs": "JWT Token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTYiLCJ1c2VyIjoibWFuaSIsImV4cCI6MTgwMDAwMDAwMH0.signature",
      "steps": [
        "Split token by dot delimiters into three segments.",
        "Base64URL decode Segment 0 (Header: alg = 'HS256', typ = 'JWT').",
        "Base64URL decode Segment 1 (Payload: sub = '123456', user = 'mani', exp = 1800000000).",
        "Convert unix timestamp exp into formatted human expiration date."
      ],
      "summary": "Header: HS256 | Subject: 123456 | User: mani | Expiration Validated"
    },
    "metricsText": "Decoding a JWT token reveals its payload data, but does not prove authenticity; only verifying the signature against your private secret proves the token is untampered.",
    "useCases": [
      "OAuth & Auth0 Debugging: Inspect user permissions, roles, and expiration claims during API integration.",
      "Token Expiry Checking: Check the 'exp' claim to verify whether an access token has expired.",
      "Client-Side State Inspection: Audit user profile attributes passed in identity tokens (ID tokens)."
    ],
    "commonMistakes": [
      "Assuming decoding a JWT validates that the token was signed by the genuine auth server.",
      "Storing sensitive personal data (passwords, social security numbers) in JWT payloads (JWT payloads are readable by anyone).",
      "Treating expired tokens as valid without checking the 'exp' timestamp claim."
    ],
    "faqs": [
      {
        "question": "Is decoding a JWT safe on Calciverse?",
        "answer": "Yes, decoding runs 100% locally in your browser memory; your authentication tokens are never sent to external servers."
      },
      {
        "question": "Why is decoding not the same as verifying a JWT?",
        "answer": "Anyone can edit a token's payload and re-encode it; verification requires the cryptographic secret key or public certificate to confirm the signature."
      },
      {
        "question": "What are common standard JWT claims?",
        "answer": "sub (subject/user ID), iss (issuer), aud (audience), exp (expiration time), and iat (issued at time)."
      }
    ],
    "sources": [
      {
        "name": "RFC 7519 JSON Web Token (JWT)",
        "url": "https://www.ietf.org/rfc/rfc7519.txt"
      }
    ]
  },
  "unix-timestamp-converter": {
    "title": "Unix Timestamp Converter — DEVELOPER Guide & Formula",
    "overview": "Converts Unix epoch timestamps (seconds and milliseconds) into human-readable ISO-8601, UTC, and local date-time strings.",
    "formula": "Date_String = new Date(Unix_Timestamp_Seconds × 1000).toISOString()",
    "explanation": "Counts the number of non-leap seconds elapsed since January 1, 1970 00:00:00 UTC (the Unix Epoch).",
    "example": {
      "title": "Worked Example: Converting Timestamp 1700000000",
      "inputs": "Unix Timestamp = 1700000000 (Seconds)",
      "steps": [
        "Multiply by 1,000 to convert to milliseconds: 1,700,000,000,000 ms",
        "Evaluate calendar year, month, day, hours, minutes, and seconds",
        "UTC Date: Wednesday, November 15, 2023 02:40:00 AM UTC",
        "ISO 8601 String: 2023-11-15T02:40:00.000Z"
      ],
      "summary": "Timestamp = 1700000000 | UTC Date = Nov 15, 2023 02:40:00 UTC | Relative: Past Event"
    },
    "metricsText": "The Year 2038 Problem (Y2038) will affect 32-bit systems when Unix epoch seconds exceed 2,147,483,647 on January 19, 2038.",
    "useCases": [
      "Database Query Auditing: Convert raw integer timestamps from MySQL, PostgreSQL, or MongoDB into readable dates.",
      "API Development: Verify expiration dates in authentication tokens and cache headers.",
      "Log Analysis: Translate server log timestamps during incident post-mortems and debugging."
    ],
    "commonMistakes": [
      "Confusing Unix timestamps in seconds (10 digits) with JavaScript timestamps in milliseconds (13 digits).",
      "Ignoring client local time zone offsets when comparing UTC server timestamps.",
      "Assuming Unix time counts leap seconds (it deliberately omits leap seconds)."
    ],
    "faqs": [
      {
        "question": "What is the Unix Epoch?",
        "answer": "The starting point for Unix time: 00:00:00 Coordinated Universal Time (UTC) on Thursday, January 1, 1970."
      },
      {
        "question": "How do I tell if a timestamp is in seconds or milliseconds?",
        "answer": "A 10-digit timestamp (e.g. 1700000000) is in seconds; a 13-digit timestamp (e.g. 1700000000000) is in milliseconds."
      },
      {
        "question": "What will happen in the Year 2038?",
        "answer": "32-bit signed integers will overflow on January 19, 2038; modern 64-bit systems have already resolved this issue."
      }
    ],
    "sources": [
      {
        "name": "The Open Group Base Specifications (Unix Time)",
        "url": "https://pubs.opengroup.org"
      }
    ]
  },
  "diff-checker": {
    "title": "Text Diff Checker — DEVELOPER Guide & Formula",
    "overview": "Compares two text passages, code files, or documents side by side, highlighting added, deleted, and modified character differences using the Myers Diff algorithm.",
    "formula": "Edit_Script = Shortest_Edit_Path(Myers_Diff_Algorithm(Sequence_A, Sequence_B))",
    "explanation": "Computes the minimal sequence of insertions and deletions required to transform Text A into Text B with line-by-line and character-level diffing.",
    "example": {
      "title": "Worked Example: Comparing Code Revisions",
      "inputs": "Original: 'const total = price * 1.18;' | Revised: 'const total = price * (1 + taxRate);'",
      "steps": [
        "Tokenize lines and characters into comparable arrays.",
        "Calculate longest common subsequence (LCS).",
        "Highlight '1.18' as deleted (- red) and '(1 + taxRate)' as inserted (+ green)."
      ],
      "summary": "1 Modification Detected | Character Diff Highlighted | Zero Data Uploaded"
    },
    "metricsText": "The Myers Diff algorithm powers modern version control systems like Git, finding the most compact visual difference between file revisions.",
    "useCases": [
      "Code Review Verification: Inspect changes between function refactorings before opening pull requests.",
      "Contract & Legal Comparison: Compare revised contract clauses to spot subtle wording modifications.",
      "Configuration Drift Detection: Compare production server configs against staging templates."
    ],
    "commonMistakes": [
      "Confusing line-by-line diffs with character-by-character diffs (missing tiny single-character punctuation changes).",
      "Ignoring trailing newline and whitespace differences across operating systems (CRLF on Windows vs LF on Linux).",
      "Comparing large binary files as plaintext."
    ],
    "faqs": [
      {
        "question": "How does Git calculate diffs?",
        "answer": "Git uses Eugene Myers' O(ND) difference algorithm to find the shortest edit path between two sequences of lines."
      },
      {
        "question": "What is CRLF vs LF?",
        "answer": "Windows uses Carriage Return + Line Feed (\\r\\n), while Linux/macOS uses Line Feed (\\n); whitespace toggles account for this difference."
      },
      {
        "question": "Is my proprietary code kept private?",
        "answer": "Yes, difference calculation executes entirely client-side in your local browser memory."
      }
    ],
    "sources": [
      {
        "name": "Myers Difference Algorithm Paper (Eugene W. Myers)",
        "url": "https://doi.org/10.1007/BF01840446"
      }
    ]
  },
  "css-gradient-generator": {
    "title": "CSS Gradient Generator — DEVELOPER Guide & Formula",
    "overview": "Generates modern CSS linear, radial, and conic gradient code with interactive color stops, direction angles, and instant CSS clipboard copy.",
    "formula": "CSS = linear-gradient(Angle, Color_Stop_1, Color_Stop_2) | radial-gradient(Shape, Color_1, Color_2)",
    "explanation": "Constructs smooth color transitions conforming to CSS Images Module Level 3 with browser compatibility prefixes.",
    "example": {
      "title": "Worked Example: 135° Saffron to Emerald Mesh Gradient",
      "inputs": "Angle = 135deg | Stop 1 = #f59e0b (0%) | Stop 2 = #10b981 (100%)",
      "steps": [
        "Calculate directional angle vector.",
        "Map primary saffron stop at 0% position.",
        "Map secondary emerald stop at 100% position.",
        "Output: background: linear-gradient(135deg, #f59e0b 0%, #10b981 100%);"
      ],
      "summary": "Linear Gradient (135deg) | 2 Color Stops | Cross-Browser CSS Output"
    },
    "metricsText": "Using 3 or more color stops with subtle opacity layers creates rich 'mesh' gradient aesthetics popular in modern SaaS landing page designs.",
    "useCases": [
      "Hero Section Backgrounds: Create vibrant, high-contrast visual backdrops for modern web headers.",
      "Button & Badge Styling: Add subtle gradient depth to primary call-to-action buttons.",
      "Card UI Borders: Design glowing gradient borders for featured pricing tiers."
    ],
    "commonMistakes": [
      "Using clashing complementary colors that mix into a muddy, dull gray transition in the middle.",
      "Omitting fallback solid background colors for legacy email clients that do not support CSS gradients.",
      "Overcomplicating gradients with too many stops, hurting UI readability."
    ],
    "faqs": [
      {
        "question": "How do I fix the 'muddy gray' middle in CSS gradients?",
        "answer": "Use intermediate color stops or transition through analogous colors on the color wheel rather than pure complementary opposites."
      },
      {
        "question": "What is a conic gradient in CSS?",
        "answer": "A gradient where color transitions rotate around a center origin point, like color wheels or pie chart segments."
      },
      {
        "question": "What are gradient color stop positions?",
        "answer": "Percentages (0% to 100%) that define where a specific color begins transitioning into the next color."
      }
    ],
    "sources": [
      {
        "name": "W3C CSS Images Module Level 3",
        "url": "https://www.w3.org/TR/css-images-3/"
      }
    ]
  },
  "box-shadow-generator": {
    "title": "CSS Box Shadow Generator — DEVELOPER Guide & Formula",
    "overview": "Builds multi-layer CSS box-shadow effects with visual sliders for horizontal offset, vertical offset, blur radius, spread, and inset depth.",
    "formula": "box-shadow: [inset] Offset_X Offset_Y Blur_Radius Spread_Radius Color",
    "explanation": "Creates realistic skeuomorphic depth and subtle elevation layers adhering to modern UI design systems.",
    "example": {
      "title": "Worked Example: Elevated Modern Card Shadow",
      "inputs": "Offset X = 0px | Offset Y = 10px | Blur = 25px | Spread = -5px | Color = rgba(0, 0, 0, 0.1)",
      "steps": [
        "Set downward vertical elevation to 10px.",
        "Apply soft diffuse blur of 25px.",
        "Add negative spread of -5px to tighten the shadow perimeter.",
        "Result: box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);"
      ],
      "summary": "Modern Card Elevation | Soft Blur (25px) | Negative Spread Applied"
    },
    "metricsText": "Stacking two shadows—one tight and dark, one broad and diffuse—produces far more natural lighting depth than a single harsh shadow.",
    "useCases": [
      "Card Elevation: Design subtle hover elevation states that lift interactive cards when users mouse over them.",
      "Modal Dialog Drop Shadows: Create high-elevation focus shadows that separate modal overlays from page backdrops.",
      "Neumorphism UI: Design soft inset shadows for pressed button states and toggle controls."
    ],
    "commonMistakes": [
      "Using pure opaque black (rgba(0,0,0,1)) shadows, which look harsh and amateurish.",
      "Setting excessive blur without negative spread, causing shadows to spill over onto adjacent UI components.",
      "Neglecting reduced-motion and high-contrast accessibility preferences."
    ],
    "faqs": [
      {
        "question": "What does negative spread do in CSS box-shadow?",
        "answer": "Negative spread shrinks the shadow smaller than the element itself, concentrating the blur directly beneath the element for a modern elevated look."
      },
      {
        "question": "What is an inset shadow?",
        "answer": "Adding the 'inset' keyword draws the shadow inside the element's border, creating an indented or sunken effect."
      },
      {
        "question": "Can I stack multiple shadows on one element?",
        "answer": "Yes, separate multiple shadow definitions with commas (e.g. box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.05);)."
      }
    ],
    "sources": [
      {
        "name": "W3C CSS Backgrounds and Borders Module Level 3",
        "url": "https://www.w3.org/TR/css-backgrounds-3/"
      }
    ]
  },
  "lorem-ipsum-generator": {
    "title": "Lorem Ipsum Generator — DEVELOPER Guide & Formula",
    "overview": "Generates classic dummy placeholder text in paragraphs, sentences, words, or lists based on Cicero's historic Latin literature.",
    "formula": "Output_Text = Generate_Latin_Passage(Paragraph_Count, Include_Standard_Opening)",
    "explanation": "Provides realistic visual character and word distribution to test typographic layout hierarchies without reading distraction.",
    "example": {
      "title": "Worked Example: Generating 2 Paragraphs of Dummy Body Copy",
      "inputs": "Length = 2 Paragraphs | Format = Standard Latin | Start with 'Lorem ipsum'",
      "steps": [
        "Generate canonical opening: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'",
        "Construct natural sentence lengths varying between 8 and 25 words.",
        "Produce two paragraphs with realistic punctuation and paragraph breaks."
      ],
      "summary": "2 Paragraphs Generated | ~150 Words | Typographic Balance Maintained"
    },
    "metricsText": "Lorem Ipsum mimics natural English letter frequencies without conveying semantic meaning, keeping visual focus strictly on graphic design.",
    "useCases": [
      "Wireframe & Prototype Design: Fill website mockups with realistic text to test heading, paragraph, and line heights.",
      "Typography Testing: Evaluate font kerning, line-height (leading), and column readability.",
      "CMS Template Testing: Populate blog layout templates with dummy copy to test responsive image wrapping."
    ],
    "commonMistakes": [
      "Leaving dummy Lorem Ipsum text in production websites before public launch.",
      "Using identical repetitive sentences that don't test realistic text length variations.",
      "Failing to test responsive layouts with actual real-world copy length extremes."
    ],
    "faqs": [
      {
        "question": "Where does the text of Lorem Ipsum come from?",
        "answer": "It originates from sections 1.10.32 and 1.10.33 of Cicero's 'De Finibus Bonorum et Malorum' written in 45 BC, scrambled in the 1500s."
      },
      {
        "question": "Why not use English placeholder text?",
        "answer": "Readers naturally try to read English text, distracting them from evaluating visual layout, font choices, and UI balance."
      },
      {
        "question": "What does 'Lorem ipsum dolor sit amet' mean in Latin?",
        "answer": "It loosely translates to 'Pain itself is loved, pursued, and sought after, because it is pain,' but is altered into nonsense Latin."
      }
    ],
    "sources": [
      {
        "name": "The History of Lorem Ipsum (Lipsum.com)",
        "url": "https://www.lipsum.com"
      }
    ]
  },
  "number-base-converter": {
    "title": "Binary / Hex / Octal Converter — DEVELOPER Guide & Formula",
    "overview": "Converts numbers bidirectionally between Binary (Base 2), Octal (Base 8), Decimal (Base 10), and Hexadecimal (Base 16) formats with bit length indicators.",
    "formula": "Target_Base = parseInt(Input_String, Source_Radix).toString(Target_Radix)",
    "explanation": "Parses positional notation with powers of base n, supporting integer representations up to 64-bit precision.",
    "example": {
      "title": "Worked Example: Converting Decimal 255 to Binary and Hexadecimal",
      "inputs": "Decimal Value = 255 (Base 10)",
      "steps": [
        "Hexadecimal conversion (255 / 16 = 15 remainder 15): 'FF' (Base 16)",
        "Binary conversion (powers of 2: 128+64+32+16+8+4+2+1): '11111111' (Base 2)",
        "Octal conversion (255 / 8 = 31 remainder 7): '377' (Base 8)"
      ],
      "summary": "Decimal = 255 | Hex = FF | Binary = 11111111 | Octal = 377"
    },
    "metricsText": "Each hexadecimal character maps directly to a 4-bit nibble of binary data (e.g. Hex F = Binary 1111), making hex the ideal human shorthand for raw binary.",
    "useCases": [
      "Embedded Systems Programming: Inspect microprocessor register bitmasks and GPIO pin configurations.",
      "Network Subnetting: Convert IP addresses and subnet masks between binary bits and decimal notation.",
      "Color Code Parsing: Decode 24-bit hex RGB color codes into individual 8-bit channel integers."
    ],
    "commonMistakes": [
      "Entering invalid digits for a specific base (e.g. typing '8' or '9' into an Octal input field).",
      "Confusing unsigned binary integers with two's complement signed negative binary representations.",
      "Exceeding 53-bit JavaScript safe integer limits (Number.MAX_SAFE_INTEGER) without BigInt."
    ],
    "faqs": [
      {
        "question": "Why is hexadecimal so popular in computer science?",
        "answer": "Because 16 is 2^4; exactly two hex digits represent one 8-bit byte, making it compact and easy to align with binary memory."
      },
      {
        "question": "What is the two's complement of a binary number?",
        "answer": "A mathematical operation to represent negative numbers in binary: invert all bits and add 1."
      },
      {
        "question": "What is an octal number?",
        "answer": "A base-8 number system using digits 0 to 7; frequently used for Unix file permissions (e.g. chmod 755)."
      }
    ],
    "sources": [
      {
        "name": "IEEE Standard for Floating-Point Arithmetic (IEEE 754)",
        "url": "https://standards.ieee.org"
      }
    ]
  },
  "px-to-rem-converter": {
    "title": "PX to REM Converter — DEVELOPER Guide & Formula",
    "overview": "Converts pixel values (px) to scalable rem and em CSS units based on configurable root font-size baselines (default 16px).",
    "formula": "rem = px / Root_Base_Font_Size (default 16px) | px = rem × Root_Base_Font_Size",
    "explanation": "rem units scale relative to the root <html> font-size, preserving user accessibility preferences set in browser settings.",
    "example": {
      "title": "Worked Example: Converting 24px Font Size to REM (Base 16px)",
      "inputs": "Pixel Value = 24px | Root Base = 16px",
      "steps": [
        "Divide pixels by root font size: 24 / 16 = 1.5 rem",
        "CSS declaration: font-size: 1.5rem;",
        "If root base is 10px (62.5% trick): 24 / 10 = 2.4 rem"
      ],
      "summary": "24px = 1.5rem (at 16px base) | Scalable | Accessible"
    },
    "metricsText": "Hardcoding font sizes in px ignores user browser accessibility preferences; using rem units allows vision-impaired users to scale page text seamlessly.",
    "useCases": [
      "Responsive Web Typography: Convert Figma/Sketch pixel mockup specifications into responsive rem CSS units.",
      "Tailwind Spacing Calibration: Verify spacing classes (e.g. p-4 = 1rem = 16px, p-6 = 1.5rem = 24px).",
      "Web Accessibility (a11y) Auditing: Replace fixed px font declarations to comply with WCAG 1.4.4 Resize Text criteria."
    ],
    "commonMistakes": [
      "Confusing rem (root em, relative to <html>) with em (relative to immediate parent font size).",
      "Hardcoding font-size: 16px on the <html> tag, which overrides user browser font preferences.",
      "Using rem for border widths (1px borders should stay in px to avoid subpixel rounding artifacts)."
    ],
    "faqs": [
      {
        "question": "What is the difference between rem and em?",
        "answer": "rem is relative to the root <html> element font size; em is relative to the font size of its immediate parent element."
      },
      {
        "question": "Why do designers use the 62.5% CSS font-size trick?",
        "answer": "Setting font-size: 62.5% on <html> makes 1rem equal to 10px (instead of 16px), simplifying mental math (e.g. 1.6rem = 16px)."
      },
      {
        "question": "Should I use rem for padding and margins?",
        "answer": "Yes, using rem for spacing ensures your entire layout scales proportionally when users increase browser zoom or text size."
      }
    ],
    "sources": [
      {
        "name": "W3C CSS Values and Units Module Level 4",
        "url": "https://www.w3.org/TR/css-values-4/"
      }
    ]
  },
  "invoice-generator": {
    "title": "Invoice & GST Bill Generator — BUSINESS Guide & Formula",
    "overview": "Generates professional, printable, and downloadable GST-compliant commercial tax invoices with itemized line items, tax breakdowns, and payment terms.",
    "formula": "Line Item Total = Quantity × Unit Price | Subtotal = Sum(Line Items) | Grand Total = Subtotal + GST/Taxes - Discounts",
    "explanation": "Includes mandatory statutory fields: Supplier GSTIN, Buyer GSTIN, HSN/SAC codes, reverse charge indicator, and CGST/SGST/IGST splits.",
    "example": {
      "title": "Worked Example: Consulting Invoice with 2 Billable Line Items",
      "inputs": "Item 1: 10 Hours Web Dev at ₹1,500/hr | Item 2: UI Design ₹10,000 | GST Rate = 18% (Intra-State)",
      "steps": [
        "Item 1 total = 10 × ₹1,500 = ₹15,000; Item 2 total = ₹10,000",
        "Taxable Subtotal = ₹15,000 + ₹10,000 = ₹25,000",
        "CGST (9%) = ₹2,250 | SGST (9%) = ₹2,250 | Total Tax = ₹4,500",
        "Grand Invoice Total = ₹25,000 + ₹4,500 = ₹29,500"
      ],
      "summary": "Taxable Subtotal = ₹25,000 | GST (18%) = ₹4,500 | Total Invoice Value = ₹29,500"
    },
    "metricsText": "Invoices generated on Calciverse are created 100% client-side in browser memory; client confidential billing details and customer pricing never leave your device.",
    "useCases": [
      "Freelance & Agency Billing: Issue instant, branded PDF invoices to clients upon milestone completions.",
      "GST Return Reconciliation: Generate standardized tax invoices matching GSTR-1 outward supply reporting criteria.",
      "Small Business Billing: Provide customers with formal itemized receipts including bank payment details and UPI QR codes."
    ],
    "commonMistakes": [
      "Omitting mandatory HSN (Harmonized System of Nomenclature) or SAC service codes from invoice items.",
      "Failing to display sequential invoice numbering without duplicate prefixes across financial years.",
      "Applying IGST instead of CGST/SGST on sales to buyers located within the same home state."
    ],
    "faqs": [
      {
        "question": "What are the mandatory elements of a valid GST tax invoice?",
        "answer": "Supplier name/address/GSTIN, consecutive invoice number, date of issue, recipient GSTIN, HSN/SAC code, description, taxable value, tax rate, and signature."
      },
      {
        "question": "Is e-Invoicing mandatory for small businesses?",
        "answer": "Under current GST rules, e-Invoicing on the government portal is mandatory for registered businesses with aggregate annual turnover exceeding ₹5 Crores."
      },
      {
        "question": "Can I save or download my invoice as a PDF?",
        "answer": "Yes, use the browser print dialog ('Print to PDF') to export high-resolution, vector-clean invoice documents."
      }
    ],
    "sources": [
      {
        "name": "Central Board of Indirect Taxes and Customs (CBIC) Invoice Rules",
        "url": "https://cbic.gov.in"
      }
    ]
  },
  "profit-and-loss-calculator": {
    "title": "Profit & Loss (P&L) Calculator — BUSINESS Guide & Formula",
    "overview": "Constructs comprehensive income statements evaluating gross revenue, cost of goods sold, operating expenses, and net profit margins.",
    "formula": "Gross Profit = Net Sales - COGS | Operating Profit = Gross Profit - OPEX | Net Income = Operating Profit - Taxes & Interest",
    "explanation": "Summarizes revenues, costs, and expenses incurred during specified financial quarters or annual fiscal periods.",
    "example": {
      "title": "Worked Example: Small E-Commerce Store Monthly P&L Statement",
      "inputs": "Gross Sales = ₹5,00,000 | COGS = ₹2,50,000 | Operating Expenses = ₹1,20,000 | Taxes = ₹26,000",
      "steps": [
        "Gross Profit = ₹5,00,000 - ₹2,50,000 = ₹2,50,000 (50.0% Gross Margin)",
        "Operating Profit (EBIT) = ₹2,50,000 - ₹1,20,000 = ₹1,30,000 (26.0% Operating Margin)",
        "Net Profit after Taxes = ₹1,30,000 - ₹26,000 = ₹1,04,000 (20.8% Net Margin)"
      ],
      "summary": "Revenue = ₹5,00,000 | Gross Profit = ₹2,50,000 | Net Income = ₹1,04,000 | Net Profit Margin = 20.8%"
    },
    "metricsText": "Positive cash flow does not always mean positive net profit; tracking P&L reveals whether your operational unit economics are truly sustainable.",
    "useCases": [
      "Fiscal Performance Auditing: Track monthly revenue vs expenditure trends to identify runaway operational costs.",
      "Investor Pitch Decks: Prepare standardized financial statements for venture capital and angel funding presentations.",
      "Bank Loan Documentation: Demonstrate healthy debt service coverage ratios (DSCR) for commercial business credit."
    ],
    "commonMistakes": [
      "Mixing personal non-business expenses into commercial operating expense statements.",
      "Recognizing revenue prematurely before services are delivered or goods are accepted (violating accrual rules).",
      "Treating capital equipment purchases (CAPEX) as immediate operational expenses (OPEX) instead of depreciating them."
    ],
    "faqs": [
      {
        "question": "What is the difference between Gross Profit and Net Profit?",
        "answer": "Gross Profit is revenue minus direct production costs (COGS); Net Profit is what remains after deducting all operating expenses, interest, and taxes."
      },
      {
        "question": "What is Operating Expense (OPEX)?",
        "answer": "Ongoing indirect costs required to run a business, including office rent, staff salaries, marketing, insurance, and utilities."
      },
      {
        "question": "Why is P&L different from a Cash Flow Statement?",
        "answer": "P&L records revenues and expenses when earned or incurred (accrual accounting); Cash Flow tracks actual physical cash entering and leaving bank accounts."
      }
    ],
    "sources": [
      {
        "name": "Institute of Chartered Accountants of India (ICAI)",
        "url": "https://www.icai.org"
      }
    ]
  },
  "sales-tax-calculator": {
    "title": "Sales Tax & VAT Calculator — BUSINESS Guide & Formula",
    "overview": "Computes state, county, and municipal sales taxes and Value Added Tax (VAT) on retail merchandise purchases.",
    "formula": "Sales Tax Amount = Net Price × (Tax Rate / 100) | Total Amount = Net Price + Sales Tax Amount",
    "explanation": "Calculates combined composite state and local sales tax rates across US, European VAT, and international retail jurisdictions.",
    "example": {
      "title": "Worked Example: $250 Electronics Purchase with Combined 8.25% Sales Tax",
      "inputs": "Net Retail Price = $250.00 | Combined Tax Rate = 8.25%",
      "steps": [
        "Sales tax calculation = $250.00 × 0.0825 = $20.63",
        "Total customer checkout price = $250.00 + $20.63 = $270.63"
      ],
      "summary": "Retail Price = $250.00 | Sales Tax (8.25%) = $20.63 | Total Due = $270.63"
    },
    "metricsText": "In the United States, sales tax rates vary by zip code because state, county, and city municipal tax rates combine additively.",
    "useCases": [
      "E-Commerce Checkout: Calculate accurate destination-based sales tax on out-of-state customer orders.",
      "Travel Budgeting: Anticipate final checkout costs for retail purchases in foreign destination cities.",
      "Business Expense Auditing: Reconcile sales tax receipts against accounts payable general ledgers."
    ],
    "commonMistakes": [
      "Assuming sales tax applies universally to all items (many states exempt groceries, prescription drugs, and clothing).",
      "Confusing origin-based sales tax rules with destination-based sales tax sourcing rules.",
      "Failing to collect economic nexus sales tax after crossing state turnover thresholds."
    ],
    "faqs": [
      {
        "question": "What is the difference between Sales Tax and VAT?",
        "answer": "Sales tax is collected once at the final point of retail sale to consumers; VAT (Value Added Tax) is collected at every stage of the supply chain on added value."
      },
      {
        "question": "What is Economic Nexus in the United States?",
        "answer": "A legal requirement that out-of-state remote sellers collect sales tax if their sales in that state exceed a threshold (typically $100,000 or 200 transactions)."
      },
      {
        "question": "Are services subject to sales tax?",
        "answer": "In most jurisdictions, tangible goods are taxable by default, whereas services are taxable only if specifically enumerated by state statute."
      }
    ],
    "sources": [
      {
        "name": "Federation of Tax Administrators",
        "url": "https://www.taxadmin.org"
      }
    ]
  },
  "payroll-calculator": {
    "title": "Payroll & Take-Home Salary Calculator — BUSINESS Guide & Formula",
    "overview": "Calculates employee take-home pay, employer payroll overhead, statutory provident fund (EPF), ESI, professional tax, and monthly TDS withholdings.",
    "formula": "Net Take-Home = Gross Salary - (Employee EPF 12% + ESI 0.75% + PT + TDS Withholding)",
    "explanation": "Total employer cost equals gross salary plus employer statutory contributions (EPF 3.67%, EPS 8.33%, EDLI 0.5%, ESI 3.25%).",
    "example": {
      "title": "Worked Example: Monthly Salary of ₹45,000 (Basic ₹25,000)",
      "inputs": "Gross Salary = ₹45,000 | Basic Pay = ₹25,000 | Professional Tax = ₹200 | Monthly TDS = ₹1,500",
      "steps": [
        "Employee EPF deduction (12% of basic) = 0.12 × ₹25,000 = ₹3,000",
        "Professional tax = ₹200 | Monthly TDS = ₹1,500",
        "Total employee deductions = ₹3,000 + ₹200 + ₹1,500 = ₹4,700",
        "Net take-home salary disbursed = ₹45,000 - ₹4,700 = ₹40,300"
      ],
      "summary": "Gross Salary = ₹45,000 | Statutory Deductions = ₹4,700 | Net Disbursed = ₹40,300"
    },
    "metricsText": "Total cost to the employer (CTC) is typically 15% to 20% higher than the employee's gross monthly pay slip.",
    "useCases": [
      "Corporate Payroll Processing: Generate accurate monthly employee pay slips with statutory compliance.",
      "Hiring Cost Budgeting: Calculate the true annual cost of adding new full-time corporate staff members.",
      "Statutory Remittance: Determine monthly remittance sums due to the EPFO, ESIC, and state revenue departments."
    ],
    "commonMistakes": [
      "Deducting EPF from full gross salary instead of statutory Basic Pay + Dearness Allowance.",
      "Missing monthly ESIC contribution cutoffs (ESIC applies to employees earning gross wages up to ₹21,000/month).",
      "Applying incorrect state-specific professional tax slab structures."
    ],
    "faqs": [
      {
        "question": "What is the wage ceiling for mandatory EPF coverage?",
        "answer": "Employees with a basic salary up to ₹15,000 per month are mandatorily covered; those above can opt out at the start of employment if not previously enrolled."
      },
      {
        "question": "What is the ESI contribution rate?",
        "answer": "Employee contribution is 0.75% of gross wages; employer contribution is 3.25% of gross wages (for employees earning up to ₹21,000/mo)."
      },
      {
        "question": "How is monthly TDS on salary calculated?",
        "answer": "Annual taxable salary is estimated after allowable exemptions, annual tax is computed, and divided by 12 equal monthly instalments."
      }
    ],
    "sources": [
      {
        "name": "Employees' State Insurance Corporation (ESIC)",
        "url": "https://www.esic.gov.in"
      }
    ]
  },
  "commission-calculator": {
    "title": "Sales Commission Calculator — BUSINESS Guide & Formula",
    "overview": "Calculates variable sales commissions, base salary retainers, tiered incentive structures, and effective commission payout percentages.",
    "formula": "Commission = Total Sales Volume × Commission Rate % | Total Earnings = Base Salary + Commission",
    "explanation": "Models flat commissions, tiered performance thresholds (accelerators), and sliding scale quota attainment models.",
    "example": {
      "title": "Worked Example: ₹8,00,000 Sales with Tiered Commission Structure",
      "inputs": "Base Pay = ₹30,000 | Sales = ₹8,00,000 | Tier 1 (up to 5L) = 5% | Tier 2 (above 5L) = 8%",
      "steps": [
        "Tier 1 commission (5% on ₹5,00,000) = ₹25,000",
        "Tier 2 commission (8% on remaining ₹3,00,000) = ₹24,00,0? No, ₹24,000",
        "Total sales commission earned = ₹25,000 + ₹24,000 = ₹49,000",
        "Total monthly payout = ₹30,000 base + ₹49,000 commission = ₹79,000"
      ],
      "summary": "Sales Volume = ₹8,00,000 | Total Commission = ₹49,000 | Total Payout = ₹79,000 | Effective Rate = 6.13%"
    },
    "metricsText": "Tiered accelerator commission structures motivate sales representatives to push past 100% quota attainment by rewarding higher incremental rates.",
    "useCases": [
      "Sales Compensation Modeling: Design incentive plans that align sales rep rewards with corporate profit margins.",
      "Monthly Commission Reconciliation: Verify quarterly incentive bonus calculations against CRM sales closures.",
      "Real Estate Brokerage Split: Calculate broker-agent commission splits on property transactions."
    ],
    "commonMistakes": [
      "Calculating commission on gross order values that include refunded products or cancelled client orders.",
      "Failing to define whether commission triggers on contract signing or upon customer invoice payment collection.",
      "Ignoring withholding income tax (TDS) on commercial agent commission payouts under Section 194H."
    ],
    "faqs": [
      {
        "question": "What is an accelerator in sales commission?",
        "answer": "An increased commission rate (e.g. jumping from 5% to 10%) that kicks in once an account executive surpasses 100% of their sales quota."
      },
      {
        "question": "What is a commission clawback?",
        "answer": "A contractual clause where previously paid commissions are deducted back if a client cancels or defaults within a specified period (e.g. 90 days)."
      },
      {
        "question": "Is sales commission subject to TDS in India?",
        "answer": "Yes, under Section 194H, commission or brokerage payments exceeding ₹15,000 in a year are subject to 5% TDS."
      }
    ],
    "sources": [
      {
        "name": "Sales Management Association",
        "url": "https://salesmanagement.org"
      }
    ]
  },
  "markup-vs-margin-calculator": {
    "title": "Markup vs Profit Margin Calculator — BUSINESS Guide & Formula",
    "overview": "Converts seamlessly between markup percentage and gross profit margin percentage to ensure product pricing guarantees healthy profitability.",
    "formula": "Margin = Markup / (1 + Markup) | Markup = Margin / (1 - Margin)",
    "explanation": "Markup is profit as a percentage of cost. Margin is profit as a percentage of selling price. Margin is always lower than markup.",
    "example": {
      "title": "Worked Example: Converting 50% Markup to Profit Margin",
      "inputs": "Cost Price = ₹1,000 | Markup = 50% (0.50)",
      "steps": [
        "Selling Price = ₹1,000 × (1 + 0.50) = ₹1,500",
        "Dollar Profit = ₹1,500 - ₹1,000 = ₹500",
        "Profit Margin = (500 / 1,500) × 100 = 33.33%",
        "Formula verification: 0.50 / (1 + 0.50) = 0.50 / 1.50 = 33.33%"
      ],
      "summary": "Cost = ₹1,000 | Markup = 50.0% | Selling Price = ₹1,500 | Profit Margin = 33.33%"
    },
    "metricsText": "Confusing markup with margin is one of the most fatal financial errors in retail: aiming for a 20% margin by adding a 20% markup actually leaves you with only a 16.7% margin.",
    "useCases": [
      "Retail Price Setting: Set retail prices with exact mathematical confidence to guarantee target gross margins.",
      "Contract Bidding: Convert target corporate gross margin requirements into contractor labor markups.",
      "Wholesale Negotiation: Evaluate buyer discount requests without accidentally eroding baseline profitability."
    ],
    "commonMistakes": [
      "Adding a 25% markup and expecting a 25% profit margin (a 25% markup produces only a 20% profit margin).",
      "Granting customer discounts equal to your markup, which results in selling goods below cost.",
      "Failing to standardize financial terminology across sales teams and accounting departments."
    ],
    "faqs": [
      {
        "question": "Why is margin always smaller than markup?",
        "answer": "Because margin divides profit by selling price (a larger number), while markup divides profit by cost (a smaller number)."
      },
      {
        "question": "What markup is required to achieve a 20% margin?",
        "answer": "Markup = 0.20 / (1 - 0.20) = 0.20 / 0.80 = 25% markup."
      },
      {
        "question": "What markup is required to achieve a 50% margin?",
        "answer": "Markup = 0.50 / (1 - 0.50) = 0.50 / 0.50 = 100% markup (keystone pricing)."
      }
    ],
    "sources": [
      {
        "name": "Corporate Finance Institute",
        "url": "https://corporatefinanceinstitute.com"
      }
    ]
  },
  "mortgage-calculator": {
    "title": "Mortgage Loan Calculator — FINANCE Guide & Formula",
    "overview": "Estimates monthly home mortgage payments, principal amortisation, and total lifetime interest costs for property purchases.",
    "formula": "M = P × [r(1+r)^n] / [(1+r)^n - 1]",
    "explanation": "P = Loan balance, r = Monthly interest rate, n = Total number of monthly mortgage payments.",
    "example": {
      "title": "Worked Example: ₹40 Lakh Mortgage at 8.75% for 20 Years",
      "inputs": "Mortgage Amount = ₹40,00,000 | Interest Rate = 8.75% | Term = 20 Years (240 Months)",
      "steps": [
        "Monthly interest rate r = 8.75 / 12 / 100 = 0.0072916",
        "Amortisation factor = (1.0072916)^240 = 5.7088",
        "Monthly Mortgage Payment M = ₹35,348 per month"
      ],
      "summary": "Principal = ₹40,00,000 | Monthly Payment = ₹35,348 | Total Interest = ₹44,83,520 | Total Cost = ₹84,83,520"
    },
    "metricsText": "Over a 20-year term at 8.75%, the total interest paid (₹44.8 Lakhs) exceeds the actual principal amount borrowed (₹40 Lakhs).",
    "useCases": [
      "Mortgage Comparison: Evaluate bank quotes across variable loan tenures to balance payment size and interest cost.",
      "Down Payment Impact: See how increasing your down payment by ₹5 Lakhs lowers your monthly commitment.",
      "Amortization Analysis: Track when your payments start contributing more to principal reduction than interest charges."
    ],
    "commonMistakes": [
      "Overlooking property taxes, homeowners insurance, and maintenance fees in total monthly housing costs.",
      "Assuming advertised teaser interest rates stay fixed for the entire 20-year term.",
      "Failing to check for reset caps on adjustable-rate mortgages."
    ],
    "faqs": [
      {
        "question": "What is an amortization schedule?",
        "answer": "A chronological table showing how each monthly mortgage payment is split between principal reduction and interest fees."
      },
      {
        "question": "Can I shorten my mortgage term without refinancing?",
        "answer": "Yes, making extra principal payments directly reduces outstanding debt and cuts remaining tenure."
      },
      {
        "question": "What is Loan-to-Value (LTV)?",
        "answer": "The ratio of the loan amount to the appraised property value; lower LTV (e.g. 70-80%) secures lower interest rates."
      }
    ],
    "sources": [
      {
        "name": "Consumer Financial Protection Bureau (CFPB)",
        "url": "https://www.consumerfinance.gov"
      }
    ]
  },
  "pace-calculator": {
    "title": "Running & Walking Pace Calculator — HEALTH Guide & Formula",
    "overview": "Calculates running, jogging, and walking split paces (minutes per kilometer or minutes per mile) and projects race finish times for 5K, 10K, half, and full marathons.",
    "formula": "Pace = Total Time / Distance | Projected Finish Time = Pace × Target Race Distance",
    "explanation": "Converts between minutes/km and minutes/mile. Uses Riegel's power formula: T2 = T1 × (D2 / D1)^1.06 to project race times across distances.",
    "example": {
      "title": "Worked Example: 10K Run Completed in 50 Minutes",
      "inputs": "Distance = 10.0 km | Total Time = 50 Minutes (3,000 Seconds)",
      "steps": [
        "Pace per kilometer = 50 / 10 = 5.00 min/km (5 minutes, 0 seconds per km)",
        "Equivalent speed = 60 / 5 = 12.0 km/h (7.46 mph)",
        "Pace per mile = 5.00 × 1.60934 = 8:03 min/mile",
        "Projected Half Marathon finish time (Riegel formula) = 1 Hour, 51 Minutes"
      ],
      "summary": "Distance = 10 km | Time = 50:00 | Pace = 5:00 min/km (8:03 min/mi) | Speed = 12.0 km/h"
    },
    "metricsText": "Negative splitting—running the second half of a race slightly faster than the first—is the pacing strategy used in nearly all world-record distance performances.",
    "useCases": [
      "Race Day Pacing: Establish kilometer-by-kilometer target split times to avoid starting too fast in half and full marathons.",
      "Treadmill Training: Convert outdoor running paces (min/km) into indoor treadmill speed settings (km/h or mph).",
      "Training Zone Calibration: Determine exact training paces for tempo workouts, recovery jogs, and interval repeats."
    ],
    "commonMistakes": [
      "Starting races too fast during the first kilometer due to adrenaline, leading to early glycogen depletion.",
      "Linear extrapolation: assuming your 5K pace can be maintained over a 42.2 km marathon without accounting for fatigue.",
      "Failing to adjust target pacing for hilly terrain, elevation, and high ambient race temperatures."
    ],
    "faqs": [
      {
        "question": "What is Riegel's formula for predicting race times?",
        "answer": "A formula developed by Pete Riegel (T2 = T1 × [D2/D1]^1.06) that models the exponential fatigue curve as race distance increases."
      },
      {
        "question": "How do I convert min/km to min/mile?",
        "answer": "Multiply your min/km pace by 1.60934 (e.g. 5:00 min/km × 1.609 = 8:03 min/mile)."
      },
      {
        "question": "What is a negative split in distance running?",
        "answer": "Running the second half of a race faster than the first half, preserving glycogen stores and avoiding early lactic buildup."
      }
    ],
    "sources": [
      {
        "name": "USA Track & Field (USATF)",
        "url": "https://www.usatf.org"
      }
    ]
  },
  "body-surface-area-calculator": {
    "title": "Body Surface Area (BSA) Calculator — HEALTH Guide & Formula",
    "overview": "Estimates total external Body Surface Area (BSA) in square meters using clinically validated Mosteller and Du Bois clinical equations.",
    "formula": "Mosteller Formula: BSA (m²) = sqrt([Height (cm) × Weight (kg)] / 3600)",
    "explanation": "Du Bois Formula: BSA = 0.007184 × Height^0.725 × Weight^0.425. BSA is the clinical standard for indexation of cardiac output and chemotherapy dosing.",
    "example": {
      "title": "Worked Example: Adult Weighing 70 kg at 175 cm Height",
      "inputs": "Weight = 70 kg | Height = 175 cm | Formula = Mosteller",
      "steps": [
        "Product = 175 × 70 = 12,250",
        "Quotient = 12,250 / 3,600 = 3.40277",
        "Square root = sqrt(3.40277) = 1.8446 m²"
      ],
      "summary": "Height = 175 cm | Weight = 70 kg | Body Surface Area (Mosteller) = 1.84 m²"
    },
    "metricsText": "Average body surface area is approximately 1.9 m² for adult men and 1.6 m² for adult women.",
    "useCases": [
      "Medical Pharmacokinetics: Calculate accurate therapeutic dosages for chemotherapy and narrow-therapeutic-index drugs.",
      "Cardiovascular Diagnostics: Index echocardiographic cardiac output and stroke volume to body size (Cardiac Index).",
      "Renal Function Indexation: Normalize glomerular filtration rates (eGFR per 1.73 m² BSA)."
    ],
    "commonMistakes": [
      "Dosing toxic medications based on raw body weight rather than indexed body surface area in obese patients.",
      "Confusing centimeters with meters when entering height into clinical formulas.",
      "Assuming pediatric BSA formulas follow the same proportionality constants as adult equations."
    ],
    "faqs": [
      {
        "question": "Why is BSA preferred over body weight for medication dosing?",
        "answer": "BSA correlates more closely with physiological parameters such as cardiac output, renal blood flow, and metabolic rate than raw body weight."
      },
      {
        "question": "Which formula is most widely used in modern clinical practice?",
        "answer": "The Mosteller formula is preferred in clinical practice due to its mathematical simplicity and high concordance with Du Bois."
      },
      {
        "question": "What is normal average adult BSA?",
        "answer": "Standard accepted normal adult BSA is approximately 1.73 m² (frequently used as the normalization baseline for kidney function tests)."
      }
    ],
    "sources": [
      {
        "name": "New England Journal of Medicine (Mosteller Formula)",
        "url": "https://www.nejm.org"
      }
    ]
  },
  "gpa-to-percentage-converter": {
    "title": "GPA to Percentage Converter — EDUCATION Guide & Formula",
    "overview": "Converts US 4.0 scale GPA scores to international percentage marks and European ECTS letter grades for university admissions.",
    "formula": "Percentage (%) = (GPA / 4.0) × 100 (Rough Linear) | WES Standard Scale: 4.0 = 93-100%, 3.7 = 90-92%, 3.3 = 87-89%, 3.0 = 83-86%",
    "explanation": "Converts between 4.0, 5.0, and 10.0 academic GPA scales using World Education Services (WES) credential evaluation standards.",
    "example": {
      "title": "Worked Example: Converting a 3.6 GPA on a 4.0 Scale",
      "inputs": "GPA = 3.6 on 4.0 Scale | Evaluation Standard = WES Equivalent",
      "steps": [
        "Mapping to standard percentage band: 3.6 GPA corresponds to the 87% to 89% band",
        "Midpoint equivalent percentage = 88.0%",
        "Letter Grade Equivalent: B+ / A- (Very Good Academic Standing)"
      ],
      "summary": "US GPA = 3.6 / 4.0 | Percentage Equivalent = ~88.0% | ECTS Grade = B"
    },
    "metricsText": "Direct linear conversion (GPA / 4 × 100) is inaccurate for US GPA; an A grade (4.0) in the US represents marks typically above 90%, not 100%.",
    "useCases": [
      "Study Abroad Applications: Convert Indian percentages or 10-point CGPA into US 4.0 GPA for MS and MBA applications.",
      "Credential Evaluation: Prepare documents for evaluation agencies like World Education Services (WES) and ECE.",
      "International CV Preparation: Present academic scores in formats understood by global multinational recruiters."
    ],
    "commonMistakes": [
      "Applying simple linear scaling (e.g. 3.0 / 4.0 = 75%), which severely understates true academic achievement.",
      "Ignoring that an Indian First Class with Distinction (75%+) often equates to a 3.7 to 4.0 GPA in US evaluations.",
      "Converting individual assignment marks rather than full course letter grades."
    ],
    "faqs": [
      {
        "question": "How does WES evaluate Indian university marks?",
        "answer": "WES evaluates Indian degree transcripts by converting marks above 60-70% into A and B grades on the US 4.0 scale."
      },
      {
        "question": "What is an acceptable GPA for US master's programs?",
        "answer": "Most competitive graduate schools require a minimum 3.0 GPA (roughly equivalent to an Indian First Class degree)."
      },
      {
        "question": "How do 5.0 GPA scales compare to 4.0 scales?",
        "answer": "A 5.0 scale typically reflects weighted GPAs from Advanced Placement (AP) or International Baccalaureate (IB) courses."
      }
    ],
    "sources": [
      {
        "name": "World Education Services (WES)",
        "url": "https://www.wes.org"
      }
    ]
  },
  "aspect-ratio-calculator": {
    "title": "Aspect Ratio Calculator — EVERYDAY Guide & Formula",
    "overview": "Calculates widescreen display dimensions (16:9, 4:3, 21:9, 1:1) and resizes image/video pixel dimensions while preserving original visual proportions.",
    "formula": "New Height = (New Width × Original Height) / Original Width | Aspect Ratio = (Width / GCD) : (Height / GCD)",
    "explanation": "Uses the Greatest Common Divisor to express display aspect ratios in lowest canonical integer terms.",
    "example": {
      "title": "Worked Example: Resizing 1920×1080 Full HD Video to 1280px Width",
      "inputs": "Original Width = 1920px | Original Height = 1080px | Target Width = 1280px",
      "steps": [
        "Find canonical ratio: GCD(1920, 1080) = 120; Ratio = 16:9 (1.7778)",
        "Calculate proportional height: (1280 × 1080) / 1920 = (1280 × 9) / 16 = 720px",
        "Resulting proportional resolution: 1280 × 720 pixels (720p HD)"
      ],
      "summary": "Original = 1920×1080 (16:9) | Resized = 1280×720 (16:9) | Distortion = 0%"
    },
    "metricsText": "16:9 is the universal international standard for HDTV, YouTube, and computer monitors; 9:16 is the vertical inversion used for TikTok, YouTube Shorts, and Instagram Reels.",
    "useCases": [
      "Video Production & Editing: Calculate custom render dimensions for 4K UHD, 1080p Full HD, and 720p exports.",
      "Social Media Graphic Design: Format banner graphics to fit Instagram (1:1 and 4:5), YouTube thumbnails (16:9), and Stories (9:16).",
      "Web Responsive Images: Set width and height attributes on HTML <img> tags to prevent Cumulative Layout Shift (CLS)."
    ],
    "commonMistakes": [
      "Altering width or height independently, causing distorted, stretched, or squashed images.",
      "Confusing aspect ratio (relative shape) with absolute resolution (total pixel count).",
      "Forgetting to set CSS aspect-ratio: 16/9; on modern web video embeds."
    ],
    "faqs": [
      {
        "question": "What is the aspect ratio of 1920x1080?",
        "answer": "1920x1080 has an aspect ratio of 16:9 (1.78:1), standard for widescreen video and monitors."
      },
      {
        "question": "What aspect ratio is used for Instagram Reels and TikTok?",
        "answer": "9:16 (vertical video, typically 1080×1920 pixels)."
      },
      {
        "question": "How does setting aspect ratio improve web performance?",
        "answer": "Specifying aspect ratios on images lets browsers reserve space before images load, preventing Cumulative Layout Shift (CLS) layout jumps."
      }
    ],
    "sources": [
      {
        "name": "Society of Motion Picture and Television Engineers (SMPTE)",
        "url": "https://www.smpte.org"
      }
    ]
  },
  "exponent-calculator": {
    "title": "Exponent & Power Calculator — MATH Guide & Formula",
    "overview": "Calculates powers and exponents (base raised to positive, negative, or fractional exponent power) with scientific notation formatting.",
    "formula": "Power = b^x | Negative Exponent: b^(-x) = 1 / (b^x) | Fractional Exponent: b^(p/q) = qth_root(b^p)",
    "explanation": "Evaluates repeated multiplication: b^n multiplies base b by itself n times. Supports integer and decimal exponents.",
    "example": {
      "title": "Worked Example: Calculating 2 raised to the power of 8 (2^8)",
      "inputs": "Base b = 2 | Exponent x = 8",
      "steps": [
        "Multiply base by itself 8 times: 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2",
        "Intermediate power: 2^4 = 16",
        "Square intermediate: 16 × 16 = 256"
      ],
      "summary": "Base = 2 | Exponent = 8 | Result = 256 | Scientific Notation = 2.56 × 10^2"
    },
    "metricsText": "Any non-zero base raised to the power of zero equals 1 (b^0 = 1); 0^0 is considered an indeterminate form in mathematics.",
    "useCases": [
      "Compound Interest Modeling: Compute annual compounding multipliers (1 + r)^t over multi-year periods.",
      "Computer Science: Calculate binary memory addressing capacities (e.g. 2^32 = 4.29 billion addressable bytes).",
      "Scientific Notation: Express astronomical distances and subatomic particle masses in powers of 10."
    ],
    "commonMistakes": [
      "Multiplying base by the exponent instead of repeated multiplication (e.g. thinking 2^3 is 2 × 3 = 6 instead of 2 × 2 × 2 = 8).",
      "Confusing negative exponents with negative results (b^(-2) is 1/(b^2), which is positive).",
      "Misinterpreting -3^2 as (-3)^2 (without parentheses, -3^2 is -9, whereas (-3)^2 is +9)."
    ],
    "faqs": [
      {
        "question": "Why does any number to the power of 0 equal 1?",
        "answer": "Because b^n / b^n = 1, and by exponent subtraction rules b^(n-n) = b^0; therefore b^0 must equal 1."
      },
      {
        "question": "What does a negative exponent mean?",
        "answer": "A negative exponent represents division or the reciprocal: 10^(-3) = 1 / (10^3) = 1 / 1,000 = 0.001."
      },
      {
        "question": "What does a fractional exponent mean?",
        "answer": "A fractional exponent represents a root: x^(1/2) is the square root, and x^(1/3) is the cube root."
      }
    ],
    "sources": [
      {
        "name": "Wolfram MathWorld (Exponentiation)",
        "url": "https://mathworld.wolfram.com/Exponentiation.html"
      }
    ]
  },
  "ev-vs-petrol-calculator": {
    "title": "EV vs Petrol Fuel Cost & Carbon Calculator — EVERYDAY Guide & Formula",
    "overview": "Compares monthly fuel expenditures, operating cost per kilometer, maintenance savings, and CO2 carbon reduction between Electric Vehicles (EV) and Petrol cars.",
    "formula": "Cost per km (EV) = (Battery Capacity kWh × Electricity Rate) / (Range km) | Cost per km (Petrol) = Petrol Price / Mileage km/L",
    "explanation": "Models total cost of ownership (TCO) across purchase price, annual running costs, home charging tariffs, and battery degradation.",
    "example": {
      "title": "Worked Example: 1,500 km Monthly Driving (Tata Nexon EV vs Petrol)",
      "inputs": "Monthly Drive = 1,500 km | Petrol Price = ₹102/L | Petrol Mileage = 14 km/L | EV Tariff = ₹8/unit | EV Efficiency = 7.5 km/kWh",
      "steps": [
        "Petrol running cost: (1,500 / 14) × ₹102 = 107.1 L × ₹102 = ₹10,928 per month (₹7.29/km)",
        "EV running cost: (1,500 / 7.5) × ₹8 = 200 kWh × ₹8 = ₹1,600 per month (₹1.07/km)",
        "Monthly fuel savings = ₹10,928 - ₹1,600 = ₹9,328 per month",
        "Annual fuel savings = ₹9,328 × 12 = ₹1,11,936 per year"
      ],
      "summary": "Petrol Cost = ₹7.29/km | EV Cost = ₹1.07/km | Monthly Savings = ₹9,328 | Annual Savings = ₹1.12 Lakhs"
    },
    "metricsText": "Electric vehicles typically cost 80% to 85% less per kilometer in fuel compared to petrol vehicles, with zero engine oil changes or spark plug maintenance.",
    "useCases": [
      "Car Buying Decision: Calculate how many kilometers of driving are needed for EV fuel savings to offset higher upfront EV purchase price.",
      "Commercial Fleet Planning: Transition commercial delivery fleets and taxi operations to electric powertrains.",
      "Carbon Footprint Auditing: Quantify annual tailpipe CO2 greenhouse gas emissions avoided by switching to electric."
    ],
    "commonMistakes": [
      "Assuming public DC fast-charging rates equal cheap residential home charging electricity tariffs.",
      "Ignoring the real-world EV range drop (15-20%) when running cabin air conditioning in peak summer heat.",
      "Failing to factor in battery replacement costs after 8 to 10 years of intensive commercial usage."
    ],
    "faqs": [
      {
        "question": "What is the cost per kilometer to drive an electric car in India?",
        "answer": "Home charging typically costs ₹1.00 to ₹1.30 per kilometer, compared to ₹6.50 to ₹8.50 per kilometer for a petrol car."
      },
      {
        "question": "How long does an EV battery last?",
        "answer": "Modern EV lithium-ion batteries are warranted for 8 years or 1,60,000 km, retaining 75% to 80% of original capacity."
      },
      {
        "question": "How many kilometers per year make an EV financially worth it?",
        "answer": "If you drive more than 10,000 to 12,000 km per year, fuel savings will comfortably recover the higher initial EV purchase premium within 3 to 4 years."
      }
    ],
    "sources": [
      {
        "name": "NITI Aayog (Zero Emission Vehicles Transition)",
        "url": "https://www.niti.gov.in"
      }
    ]
  },
  "freelance-tax-hourly-rate-calculator": {
    "title": "Freelance & Side-Hustle Net Hourly Rate Calculator — BUSINESS Guide & Formula",
    "overview": "Calculates the true net hourly wage of freelancers and independent consultants after deducting non-billable hours, software expenses, income tax, and GST.",
    "formula": "Net Hourly Rate = (Gross Annual Billings - Business Expenses - Taxes) / Total Working Hours (Billable + Non-Billable)",
    "explanation": "Reveals what you actually earn per hour worked, accounting for unpaid proposals, administration, marketing, and self-employment taxes.",
    "example": {
      "title": "Worked Example: Freelancer Charging ₹2,000/hr ($24/hr) with 1,000 Billable Hours",
      "inputs": "Billable Rate = ₹2,000/hr | Billable Hours = 1,000 | Non-Billable Admin Hours = 500 | Expenses = ₹2,00,000 | Tax = ₹1,80,000",
      "steps": [
        "Gross billing revenue = 1,000 × ₹2,000 = ₹20,00,000",
        "Net take-home after expenses & taxes = ₹20,00,000 - ₹2,00,000 - ₹1,80,000 = ₹16,20,000",
        "Total hours worked = 1,000 billable + 500 non-billable = 1,500 total hours",
        "True Net Hourly Rate = ₹16,20,000 / 1,500 hours = ₹1,080 per hour"
      ],
      "summary": "Stated Rate = ₹2,000/hr | Gross = ₹20 Lakhs | True Net Take-Home Rate = ₹1,080/hr"
    },
    "metricsText": "Nearly 35% of a full-time freelancer's working hours are non-billable; your quoted rate must cover these unpaid operational hours.",
    "useCases": [
      "Full-Time Job vs Freelancing: Accurately compare corporate salary offers with independent consulting contracts.",
      "Rate Revision Planning: Identify when to raise client rates to offset inflation and rising SaaS software subscriptions.",
      "Tax Reserve Setting: Automatically calculate what percentage of every client payment must be reserved for advance taxes."
    ],
    "commonMistakes": [
      "Assuming a ₹2,000 hourly rate means you earn ₹2,000 for every hour you sit at your desk.",
      "Failing to budget for unpaid sick days, vacations, client late payments, and dry pipeline periods.",
      "Neglecting advance quarterly income tax payments, incurring Section 234B interest penalties."
    ],
    "faqs": [
      {
        "question": "What is Presumptive Taxation (Section 44ADA) for Indian freelancers?",
        "answer": "Eligible professionals with gross receipts up to ₹75 Lakhs can declare 50% of revenue as taxable profit, reducing accounting compliance burdens."
      },
      {
        "question": "What percentage of freelance income should be saved for taxes?",
        "answer": "Most freelancers should reserve 20% to 30% of every invoice payment in a dedicated tax savings account."
      },
      {
        "question": "How can I increase my true net hourly rate?",
        "answer": "Automate administrative invoicing, package services into fixed retainers, and raise rates on low-margin clients."
      }
    ],
    "sources": [
      {
        "name": "Income Tax Department of India (Section 44ADA)",
        "url": "https://www.incometax.gov.in"
      }
    ]
  },
  "swp-calculator": {
    "title": "SWP Calculator (Systematic Withdrawal Plan) — FINANCE Guide & Formula",
    "overview": "Projects monthly cash flow payouts and remaining portfolio corpus for Systematic Withdrawal Plans (SWP) in mutual funds.",
    "formula": "Remaining Balance = (Initial Balance - Monthly Withdrawal) × (1 + Monthly Return)",
    "explanation": "Simulates regular monthly redemptions from mutual fund investments while remaining capital continues compounding.",
    "example": {
      "title": "Worked Example: ₹50,00,000 Corpus with ₹35,000 Monthly SWP at 8% Return",
      "inputs": "Initial Corpus = ₹50,00,000 | Monthly Withdrawal = ₹35,000 | Expected Return = 8% p.a. | Tenure = 15 Years",
      "steps": [
        "Total withdrawal over 15 years = ₹35,00,000 × 180 months = ₹63,00,000",
        "Capital remaining after 15 years of steady withdrawals compounding at 8% = ₹57,84,320"
      ],
      "summary": "Invested = ₹50,00,000 | Total Withdrawn = ₹63,00,000 | Remaining Corpus = ₹57,84,320"
    },
    "metricsText": "If your monthly withdrawal rate is lower than the portfolio's annual return rate, your principal corpus continues growing indefinitely.",
    "useCases": [
      "Retirement Regular Income: Generate tax-efficient monthly income from accumulated mutual fund wealth.",
      "Senior Citizen Cash Flow: Replace traditional bank fixed deposit interest with higher-yielding hybrid fund SWPs.",
      "Post-Tax Efficiency: Benefit from capital gains taxation where only the profit component of each withdrawal is taxed."
    ],
    "commonMistakes": [
      "Setting monthly withdrawal amounts higher than realistic long-term portfolio returns, causing capital depletion.",
      "Withdrawing exclusively from volatile small-cap funds during severe bear market drawdowns.",
      "Ignoring capital gains tax implications on redeemed mutual fund units."
    ],
    "faqs": [
      {
        "question": "Why is SWP more tax-efficient than dividend plans or FD interest?",
        "answer": "Because each SWP instalment consists partly of original capital and partly of gains; tax is paid only on the capital gains portion."
      },
      {
        "question": "Can the SWP amount be modified after starting?",
        "answer": "Yes, you can increase, decrease, pause, or terminate your monthly SWP instructions at any time."
      },
      {
        "question": "What mutual funds are best suited for SWP?",
        "answer": "Conservative hybrid funds, equity savings funds, or balanced advantage funds that offer capital stability with modest growth."
      }
    ],
    "sources": [
      {
        "name": "Association of Mutual Funds in India (AMFI)",
        "url": "https://www.amfiindia.com"
      }
    ]
  },
  "step-up-sip-calculator": {
    "title": "Step-Up SIP Calculator — FINANCE Guide & Formula",
    "overview": "Calculates mutual fund maturity wealth when regular monthly SIP contributions increase by a fixed percentage or amount every year.",
    "formula": "Corpus = Sum over years of: Year_k_SIP × Compound_Growth_Factor",
    "explanation": "Simulates annual top-ups (e.g. 10% increase every 12 months) aligned with career salary increments.",
    "example": {
      "title": "Worked Example: ₹10,000 Starting SIP with 10% Annual Step-Up at 12% for 15 Years",
      "inputs": "Starting SIP = ₹10,00,00? No, ₹10,000 | Step-Up = 10% per year | Expected Return = 12% | Tenure = 15 Years",
      "steps": [
        "Year 1: ₹10,000/mo; Year 2: ₹11,000/mo; Year 5: ₹14,641/mo; Year 15: ₹37,975/mo",
        "Total invested capital with annual step-ups = ₹38,12,680",
        "Compounded final maturity corpus = ₹98,42,150 (compared to ₹50.45 Lakhs for a flat ₹10k SIP)"
      ],
      "summary": "Total Invested = ₹38.13 Lakhs | Final Maturity = ₹98.42 Lakhs | Extra Wealth vs Flat SIP = +₹47.97 Lakhs"
    },
    "metricsText": "Stepping up your monthly SIP by just 10% each year nearly doubles your final maturity corpus compared to a flat SIP over 15 years.",
    "useCases": [
      "Career Growth Alignment: Automatically increase mutual fund contributions as annual salary appraisals arrive.",
      "Early Retirement Acceleration: Build wealth significantly faster without feeling immediate cash flow pinch.",
      "Inflation Countering: Prevent inflation from reducing the real purchasing power of your monthly investment amounts."
    ],
    "commonMistakes": [
      "Assuming a flat SIP is sufficient over 20 years while lifestyle and income scale upward.",
      "Setting an aggressive step-up rate (e.g. 20%) that becomes unsustainable during job transitions.",
      "Stopping the step-up feature during temporary market corrections instead of purchasing more units."
    ],
    "faqs": [
      {
        "question": "How does a Step-Up SIP work?",
        "answer": "Your fund house automatically increments your monthly debit amount by a specified percentage (e.g. 10%) or fixed sum (e.g. ₹1,000) every 12 months."
      },
      {
        "question": "Can I cap the maximum monthly contribution in a Step-Up SIP?",
        "answer": "Yes, most mutual fund platforms let you set a maximum ceiling amount beyond which the SIP continues flat."
      },
      {
        "question": "What is the recommended annual step-up percentage?",
        "answer": "An annual step-up of 5% to 10% matches standard corporate salary increments comfortably."
      }
    ],
    "sources": [
      {
        "name": "Mutual Fund Utility (MFU India)",
        "url": "https://www.mfuindia.com"
      }
    ]
  },
  "lean-body-mass-calculator": {
    "title": "Lean Body Mass (LBM) Calculator — HEALTH Guide & Formula",
    "overview": "Calculates Lean Body Mass (LBM)—the weight of bones, organs, muscles, and water excluding adipose fat tissue—using Boer, James, and Hume clinical formulas.",
    "formula": "Boer Formula (Men) = (0.407 × Weight) + (0.267 × Height) - 19.2 | Women = (0.252 × Weight) + (0.473 × Height) - 48.3",
    "explanation": "Weight in kg, height in cm. Lean body mass represents total metabolically active tissue and serves as the baseline for protein and drug dosing.",
    "example": {
      "title": "Worked Example: Male Weighing 80 kg at 180 cm Height (Boer Formula)",
      "inputs": "Sex = Male | Weight = 80 kg | Height = 180 cm",
      "steps": [
        "Weight component = 0.407 × 80 = 32.56",
        "Height component = 0.267 × 180 = 48.06",
        "Constant subtraction = -19.2",
        "Lean Body Mass = 32.56 + 48.06 - 19.2 = 61.42 kg",
        "Fat mass = 80 kg - 61.42 kg = 18.58 kg (23.2% Body Fat)"
      ],
      "summary": "Total Weight = 80 kg | Lean Muscle/Organ Mass = 61.4 kg | Fat Mass = 18.6 kg | Fat % = 23.2%"
    },
    "metricsText": "Preserving lean body mass during weight loss ensures resting metabolic rate remains elevated and prevents post-diet rebound weight gain.",
    "useCases": [
      "Sports Nutrition: Calculate daily protein targets based on active lean tissue rather than total body weight.",
      "Anesthetic Dosing: Determine accurate induction dosages for lipid-insoluble anesthetic agents.",
      "Athletic Sarcopenia Screening: Monitor skeletal muscle retention in aging adults and cutting athletes."
    ],
    "commonMistakes": [
      "Assuming all lost scale weight during dieting is body fat (improper diets sacrifice substantial lean muscle tissue).",
      "Dosing water-soluble pharmaceuticals on total weight in severely obese patients instead of lean body mass.",
      "Failing to consume adequate protein and resistance train while in a calorie deficit."
    ],
    "faqs": [
      {
        "question": "What is the difference between lean body mass and muscle mass?",
        "answer": "Lean body mass includes all non-fat tissue (bones, water, organs, and muscles); skeletal muscle mass is just one component of LBM."
      },
      {
        "question": "How does LBM affect my calorie needs?",
        "answer": "Lean body mass is your primary metabolically active tissue; individuals with higher LBM burn significantly more calories even while resting."
      },
      {
        "question": "Can you increase lean body mass while losing fat?",
        "answer": "Yes, 'body recomposition' is achievable, particularly in beginners, returning lifters, or individuals with higher body fat using progressive overload and high protein."
      }
    ],
    "sources": [
      {
        "name": "British Journal of Anaesthesia",
        "url": "https://academic.oup.com/bja"
      }
    ]
  },
  "slug-generator": {
    "title": "URL Slug Generator — DEVELOPER Guide & Formula",
    "overview": "Converts article titles and text strings into clean, sanitized, URL-friendly slugs with lowercase alphanumeric characters, accents removed, and hyphens.",
    "formula": "Slug = Text.normalize('NFD').replace(/[\\u0300-\\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')",
    "explanation": "Strips diacritics, removes non-alphanumeric punctuation, replaces spaces with hyphens, and trims leading/trailing dashes.",
    "example": {
      "title": "Worked Example: Generating SEO Slug for Article Title",
      "inputs": "Title: 'What's the Best Way to Calculate Loan EMI in 2026?!'",
      "steps": [
        "Normalize unicode accents and convert to lowercase.",
        "Remove punctuation apostrophes, exclamation points, and question marks.",
        "Replace remaining whitespace gaps with hyphens.",
        "Trim extra dashes: 'whats-the-best-way-to-calculate-loan-emi-in-2026'"
      ],
      "summary": "Clean SEO Slug = 'whats-the-best-way-to-calculate-loan-emi-in-2026'"
    },
    "metricsText": "Clean, readable URL slugs containing targeted primary keywords improve organic search engine click-through rates and SEO crawlability.",
    "useCases": [
      "CMS Publishing: Automatically generate URL path permalinks for blog posts, documentation, and products.",
      "Database Key Indexing: Create human-readable unique identifier keys for NoSQL database records.",
      "File Naming Standardization: Sanitize document titles for safe file storage across Linux and Windows filesystems."
    ],
    "commonMistakes": [
      "Leaving stop words (the, a, and) that make URL slugs unnecessarily long without adding SEO keyword value.",
      "Allowing multiple consecutive dashes (--) or trailing dashes at the end of the URL slug.",
      "Failing to normalize accented foreign characters (e.g. 'Café' becoming 'caf' instead of 'cafe')."
    ],
    "faqs": [
      {
        "question": "What is an SEO-friendly URL slug?",
        "answer": "A short, descriptive, lowercase URL segment using hyphens to separate words that clearly signals page content to search engines and users."
      },
      {
        "question": "Should I use underscores (_) or hyphens (-) in URLs?",
        "answer": "Always use hyphens (-); Google's search algorithms treat hyphens as word separators, but treat underscores as joining characters."
      },
      {
        "question": "How long should a URL slug be?",
        "answer": "Keep slugs concise (typically 3 to 5 key words); shorter URLs are easier to share and achieve higher search CTR."
      }
    ],
    "sources": [
      {
        "name": "Google Search Central URL Structure Guidelines",
        "url": "https://developers.google.com/search/docs/crawling-indexing/url-structure"
      }
    ]
  },
  "hash-generator": {
    "title": "Crypto Hash Generator (SHA-256 / SHA-512) — DEVELOPER Guide & Formula",
    "overview": "Generates cryptographic message digests (SHA-256, SHA-512, SHA-1, MD5) from text strings using the native Web Crypto API.",
    "formula": "Hash = Array.from(new Uint8Array(await crypto.subtle.digest(Algorithm, Data))).map(b => b.toString(16).padStart(2, '0')).join('')",
    "explanation": "One-way cryptographic mathematical functions that convert arbitrary input text into fixed-length hexadecimal hash digests.",
    "example": {
      "title": "Worked Example: Generating SHA-256 Hash of 'Calciverse'",
      "inputs": "Input String = 'Calciverse' | Algorithm = SHA-256",
      "steps": [
        "Encode string into UTF-8 byte array.",
        "Execute SHA-256 cryptographic hashing rounds.",
        "Format 256-bit binary output into 64-character hexadecimal digest string."
      ],
      "summary": "Algorithm = SHA-256 | Length = 64 Hex Characters | 100% Client-Side"
    },
    "metricsText": "Cryptographic hash functions are deterministic: identical input always produces the exact same hash, while changing a single character completely randomizes the output digest.",
    "useCases": [
      "Data Integrity Verification: Verify downloaded file checksums against publisher SHA-256 checksums.",
      "Cache Key Generation: Create deterministic content hashes for browser asset caching and CDN invalidation.",
      "Password Hashing Principles: Understand the fundamental cryptographic primitives used in authentication security."
    ],
    "commonMistakes": [
      "Using MD5 or SHA-1 for security or password hashing (both algorithms have known cryptographic collision vulnerabilities).",
      "Storing fast hashes (like raw SHA-256) for passwords without salt and slow key derivation functions (like bcrypt or Argon2).",
      "Assuming a hash can be reversed or 'decrypted' back to its original plain text."
    ],
    "faqs": [
      {
        "question": "Can a hash be decrypted?",
        "answer": "No. Cryptographic hashes are one-way mathematical functions; you cannot reverse a hash back to its original input."
      },
      {
        "question": "Why is SHA-256 preferred over MD5?",
        "answer": "MD5 has severe collision vulnerabilities (different inputs producing the same hash); SHA-256 is cryptographically secure and standard for industry security."
      },
      {
        "question": "Is my text data sent across the network?",
        "answer": "No, the Web Crypto API executes locally within your browser's native cryptographic hardware sandbox."
      }
    ],
    "sources": [
      {
        "name": "NIST FIPS 180-4 Secure Hash Standard (SHS)",
        "url": "https://csrc.nist.gov"
      }
    ]
  },
  "sip-lumpsum-combined-calculator": {
    "title": "SIP + Lumpsum Combined Calculator — FINANCE Guide & Formula",
    "overview": "Projects aggregate investment returns when combining an initial one-time lumpsum deposit with ongoing monthly SIP contributions.",
    "formula": "Total Corpus = (Lumpsum × (1 + r)^n) + (Monthly SIP Compounding Formula)",
    "explanation": "Models dual wealth-building strategies: deploying existing savings immediately while maintaining monthly salary investments.",
    "example": {
      "title": "Worked Example: ₹2 Lakh Lumpsum + ₹5,000 Monthly SIP for 10 Years at 12%",
      "inputs": "Lumpsum = ₹2,00,000 | Monthly SIP = ₹5,000 | Return = 12% p.a. | Tenure = 10 Years",
      "steps": [
        "Lumpsum component growth: ₹2,00,000 × (1.12)^10 = ₹6,21,170",
        "SIP component growth: ₹5,000/mo compounding at 12% over 10 years = ₹11,61,695",
        "Combined portfolio value = ₹6,21,170 + ₹11,61,695 = ₹17,82,865"
      ],
      "summary": "Total Invested = ₹8,00,000 | Lumpsum Growth = ₹6.21 Lakhs | SIP Growth = ₹11.62 Lakhs | Total Corpus = ₹17.83 Lakhs"
    },
    "metricsText": "Combining lumpsum capital with regular SIP balances the time advantage of lump sums with the volatility mitigation of monthly averaging.",
    "useCases": [
      "Windfall + Salary Deployment: Invest an inheritance or bonus upfront while continuing monthly salary SIPs.",
      "Aggressive Goal Funding: Accelerate wealth accumulation for down payments or retirement milestones.",
      "Portfolio Consolidation: Model total mutual fund growth across both past savings and ongoing contributions."
    ],
    "commonMistakes": [
      "Holding large lump sums in savings accounts while waiting for a 'perfect market crash' to start investing.",
      "Treating both components as separate portfolios rather than balancing asset allocation across the total sum.",
      "Overestimating annual returns and ignoring market drawdown cycles."
    ],
    "faqs": [
      {
        "question": "Should I invest my lumpsum first or start the SIP first?",
        "answer": "Starting both simultaneously puts capital to work immediately while building disciplined monthly savings habits."
      },
      {
        "question": "How does this compare to an STP?",
        "answer": "In a combined strategy, the lumpsum goes directly into equity; in an STP, the lumpsum stays in debt and transfers to equity gradually."
      },
      {
        "question": "What is the tax treatment of the combined portfolio?",
        "answer": "Each redemption lot is taxed individually based on whether its holding period exceeds 12 months (LTCG at 12.5% above ₹1.25L exemption)."
      }
    ],
    "sources": [
      {
        "name": "Association of Mutual Funds in India",
        "url": "https://www.amfiindia.com"
      }
    ]
  },
  "water-fasting-calculator": {
    "title": "Intermittent & Water Fasting Weight Loss Calculator — HEALTH Guide & Formula",
    "overview": "Estimates projected fat loss, glycogen depletion, and metabolic ketone transitions during intermittent and multi-day water fasting protocols.",
    "formula": "Daily Fat Loss = Net Calorie Deficit / 7,700 kcal per kg fat | Water Loss = Initial Glycogen Bound Water (~1.5–2.5 kg)",
    "explanation": "Models metabolic phases: Glycogen Depletion (0–24 hrs), Gluconeogenesis (24–48 hrs), Ketosis (48–72 hrs), and Protein Conservation.",
    "example": {
      "title": "Worked Example: 72-Hour Water Fast for an Adult with 2,200 kcal TDEE",
      "inputs": "Fast Duration = 72 Hours (3 Days) | Maintenance TDEE = 2,200 kcal/day",
      "steps": [
        "Total caloric deficit over 3 days = 2,200 × 3 = 6,600 kcal",
        "Pure adipose fat oxidized = 6,600 / 7,700 = 0.86 kg (roughly 1.9 lbs)",
        "Water & glycogen depletion loss = ~1.8 kg",
        "Total scale drop = ~2.66 kg (note that glycogen water rebounds upon refeeding)"
      ],
      "summary": "Fast Duration = 72 Hours | Adipose Fat Lost = 0.86 kg | Temporary Water Drop = 1.8 kg | Total Scale Loss = 2.66 kg"
    },
    "metricsText": "Initial rapid scale loss during the first 48 hours of fasting is predominantly water weight shed as the liver and muscles deplete glycogen stores (1g glycogen binds ~3-4g water).",
    "useCases": [
      "Intermittent Fasting Tracking: Plan daily 16/8 or 20/4 fasting windows for insulin sensitivity and weight management.",
      "Autophagy & Ketosis Timeline: Track estimated timeframes for cellular autophagy and deep nutritional ketosis.",
      "Refeeding Planning: Plan safe post-fast refeeding meals to avoid gastrointestinal distress."
    ],
    "commonMistakes": [
      "Confusing initial rapid glycogen water loss with true permanent adipose fat tissue reduction.",
      "Neglecting essential electrolyte supplementation (sodium, potassium, magnesium) during extended fasts.",
      "Breaking multi-day fasts with heavy, high-carbohydrate meals instead of light, easily digestible bone broth or healthy fats."
    ],
    "faqs": [
      {
        "question": "What is autophagy during fasting?",
        "answer": "A cellular recycling process where cells degrade and clean out damaged organelles and misfolded proteins, typically peaking after 24 to 48 hours of fasting."
      },
      {
        "question": "Why do I get headaches during a water fast?",
        "answer": "Headaches are usually caused by acute electrolyte depletion (hyponatremia) as insulin drops and the kidneys excrete sodium; drinking water with electrolytes resolves this."
      },
      {
        "question": "Who should avoid extended water fasting?",
        "answer": "Pregnant or nursing women, individuals with a history of eating disorders, type-1 diabetics, and underweight individuals should not water fast without medical supervision."
      }
    ],
    "sources": [
      {
        "name": "Cell Metabolism Journal (Fasting Research)",
        "url": "https://www.cell.com/cell-metabolism"
      }
    ]
  },
  "ratio-to-percentage-calculator": {
    "title": "Ratio to Percentage Calculator — MATH Guide & Formula",
    "overview": "Converts part-to-part and part-to-whole ratios (A:B or A:B:C) into exact percentage shares and decimal fractions.",
    "formula": "Share A (%) = [A / (A + B)] × 100 | Share B (%) = [B / (A + B)] × 100",
    "explanation": "Calculates proportional ownership, profit sharing, and ingredient mixture percentages from ratio components.",
    "example": {
      "title": "Worked Example: Business Partnership Ratio of 3:2",
      "inputs": "Ratio A = 3 | Ratio B = 2",
      "steps": [
        "Sum of ratio parts: 3 + 2 = 5 total parts",
        "Partner A share = (3 / 5) × 100 = 60.0%",
        "Partner B share = (2 / 5) × 100 = 40.0%"
      ],
      "summary": "Ratio = 3:2 | Total Parts = 5 | Share A = 60.0% | Share B = 40.0%"
    },
    "metricsText": "All percentage shares of a ratio must sum to exactly 100%; verify total additions to prevent rounding leakage.",
    "useCases": [
      "Equity Ownership Splits: Calculate startup founder equity percentages from capitalization table share ratios.",
      "Chemical & Concrete Mixing: Convert cement, sand, and aggregate ratios (e.g. 1:2:4) into batch mixture percentages.",
      "Investment Asset Allocation: Convert portfolio equity-to-debt ratios (e.g. 70:30) into exact capital allocation percentages."
    ],
    "commonMistakes": [
      "Dividing term A by term B directly instead of dividing term A by the sum of all terms (A + B).",
      "Treating 1:1 as 100% instead of 50% (1:1 has 2 total parts: 1/2 = 50%).",
      "Failing to normalize multi-term ratios (like 2:3:5) before computing percentage shares."
    ],
    "faqs": [
      {
        "question": "What percentage is a 1:1 ratio?",
        "answer": "50% each; there are 1 + 1 = 2 total parts, so each share is 1/2 = 50%."
      },
      {
        "question": "What percentage is a 3:1 ratio?",
        "answer": "75% and 25%; total parts = 4, so 3/4 = 75% and 1/4 = 25%."
      },
      {
        "question": "How do I convert a 3-way ratio like 2:3:5 into percentages?",
        "answer": "Sum the parts (2 + 3 + 5 = 10); then 2/10 = 20%, 3/10 = 30%, and 5/10 = 50%."
      }
    ],
    "sources": [
      {
        "name": "National Council of Teachers of Mathematics",
        "url": "https://www.nctm.org"
      }
    ]
  },
  "weighted-gpa-calculator": {
    "title": "Weighted GPA Calculator (AP / Honors / IB) — EDUCATION Guide & Formula",
    "overview": "Calculates weighted high school GPA on a 5.0 scale, awarding extra quality point weightings for Advanced Placement (AP), Honors, and IB courses.",
    "formula": "Weighted GPA = Sum of (Course Credits × Weighted Grade Point) / Total Credits",
    "explanation": "Standard weighting additions: Regular course (A=4.0), Honors course (A=4.5), Advanced Placement / International Baccalaureate (A=5.0).",
    "example": {
      "title": "Worked Example: Student with 2 AP Courses and 2 Regular Courses",
      "inputs": "AP Calc (Grade A = 5.0, 1 cr) | AP Physics (Grade B = 4.0, 1 cr) | English (Grade A = 4.0, 1 cr) | History (Grade A = 4.0, 1 cr)",
      "steps": [
        "Quality points = (1 × 5.0) + (1 × 4.0) + (1 × 4.0) + (1 × 4.0) = 17.0 points",
        "Total completed credits = 4.0 credits",
        "Weighted GPA = 17.0 / 4 = 4.25 GPA",
        "Unweighted GPA equivalent = (4.0 + 3.0 + 4.0 + 4.0) / 4 = 3.75 GPA"
      ],
      "summary": "Weighted GPA = 4.25 / 5.0 | Unweighted GPA = 3.75 / 4.0 | Academic Boost = +0.50 points"
    },
    "metricsText": "Weighted GPAs can exceed 4.0, allowing high-achieving students taking rigorous AP and IB courses to compete for top class rank percentiles.",
    "useCases": [
      "College Admissions Strategy: Demonstrate course rigor and academic achievement to competitive university admissions boards.",
      "Class Rank Competition: Calculate weighted rank points required for valedictorian and salutatorian honors.",
      "Course Load Optimization: Balance AP challenge courses with extracurricular time commitments."
    ],
    "commonMistakes": [
      "Assuming all colleges evaluate weighted GPA (many state universities recalculate GPAs on an unweighted 4.0 scale).",
      "Assigning AP weight (+1.0 point) to introductory courses that only carry Honors weighting (+0.5 point).",
      "Failing to award proper quality points for grades below C (many schools do not weight D or F grades)."
    ],
    "faqs": [
      {
        "question": "What is the difference between weighted and unweighted GPA?",
        "answer": "Unweighted GPA caps grades at 4.0 regardless of course difficulty; weighted GPA awards up to 5.0 for challenging AP and IB courses."
      },
      {
        "question": "Do colleges prefer a higher unweighted GPA or a higher weighted GPA?",
        "answer": "Admissions officers look for 'strength of curriculum': taking rigorous courses and performing well is preferred over easy A grades."
      },
      {
        "question": "Can a weighted GPA exceed 5.0?",
        "answer": "In standard high school systems, weighted GPAs max out at 5.0 for straight A grades in AP/IB courses."
      }
    ],
    "sources": [
      {
        "name": "College Board Advanced Placement (AP)",
        "url": "https://apcentral.collegeboard.org"
      }
    ]
  },
  "cogs-calculator": {
    "title": "Cost of Goods Sold (COGS) Calculator — BUSINESS Guide & Formula",
    "overview": "Calculates Cost of Goods Sold (COGS) from beginning inventory, direct raw material purchases, factory labor, and ending inventory balances.",
    "formula": "COGS = Beginning Inventory + Net Purchases + Direct Labor & Manufacturing - Ending Inventory",
    "explanation": "Represents the direct costs attributable to the production of goods sold in a company during an accounting period.",
    "example": {
      "title": "Worked Example: Manufacturing Business Annual COGS Evaluation",
      "inputs": "Starting Inventory = ₹4,00,000 | Purchases = ₹12,00,000 | Direct Labor = ₹3,00,000 | Ending Inventory = ₹5,00,000",
      "steps": [
        "Cost of goods available for sale = ₹4,00,000 + ₹12,00,000 + ₹3,00,000 = ₹19,00,000",
        "Subtract closing physical inventory = ₹19,00,000 - ₹5,00,000 = ₹14,00,000"
      ],
      "summary": "Beginning Inventory = ₹4.0 Lakhs | Purchases = ₹12.0 Lakhs | Ending = ₹5.0 Lakhs | COGS = ₹14.0 Lakhs"
    },
    "metricsText": "COGS includes only direct costs required to create a product; indirect costs like corporate office rent, marketing, and sales travel are excluded.",
    "useCases": [
      "Gross Profit Calculation: Subtract COGS from gross revenue to determine production profitability.",
      "Inventory Valuation Audit: Reconcile physical warehouse stock counts with balance sheet accounting records.",
      "Tax Return Preparation: Report accurate cost of goods sold on corporate income tax return schedules."
    ],
    "commonMistakes": [
      "Including general indirect selling and administrative overhead (SG&A) in COGS.",
      "Misvaluing ending inventory (using outdated prices instead of FIFO, LIFO, or weighted average cost).",
      "Failing to write down damaged, obsolete, or expired physical inventory."
    ],
    "faqs": [
      {
        "question": "What costs are included in COGS?",
        "answer": "Raw materials, factory worker direct labor, inbound freight shipping, packaging, and manufacturing plant electricity."
      },
      {
        "question": "What costs are excluded from COGS?",
        "answer": "Office salaries, executive compensation, advertising, legal fees, accounting, and sales commissions."
      },
      {
        "question": "How does ending inventory affect net profit?",
        "answer": "A higher ending inventory reduces COGS, which increases reported gross profit for that financial period."
      }
    ],
    "sources": [
      {
        "name": "Financial Accounting Standards Board (FASB)",
        "url": "https://www.fasb.org"
      }
    ]
  },
  "reading-time-calculator": {
    "title": "Text Reading & Speech Duration Calculator — EVERYDAY Guide & Formula",
    "overview": "Estimates silent reading duration, normal speech presentation time, and fast presentation speed for articles, essays, and public keynote speeches.",
    "formula": "Reading Time = Word Count / Average Reading Speed (Words Per Minute)",
    "explanation": "Standard benchmarks: Silent Adult Reading = 200–250 WPM; Slow Speech = 110 WPM; Conversational Presentation = 130–150 WPM; Audiobooks = 150 WPM.",
    "example": {
      "title": "Worked Example: Keynote Speech Transcript of 1,200 Words",
      "inputs": "Word Count = 1,200 Words | Presentation Speech Rate = 130 WPM",
      "steps": [
        "Silent reading duration = 1,200 / 225 = 5.3 Minutes (5 minutes, 20 seconds)",
        "Spoken presentation duration = 1,200 / 130 = 9.2 Minutes (9 minutes, 15 seconds)",
        "Slow, deliberate speech delivery (110 WPM) = 10.9 Minutes"
      ],
      "summary": "Words = 1,200 | Silent Reading = 5.3 min | Speech Time = 9.2 min | Slides Recommendation = ~9-10 Slides"
    },
    "metricsText": "Displaying estimated reading time (e.g. '5 min read') at the top of web articles improves visitor engagement by setting clear time expectations.",
    "useCases": [
      "Keynote & Public Speaking: Time conference presentations and TEDx-style speeches to avoid exceeding strict speaker time limits.",
      "Content Marketing & Blogging: Display accurate reading time indicators on Medium, WordPress, and Substack newsletters.",
      "Voiceover Script Timing: Ensure commercial voiceover scripts fit exact 30-second and 60-second broadcast advertising slots."
    ],
    "commonMistakes": [
      "Practicing speeches in silent reading speed instead of actual spoken delivery speed (which takes 60% longer).",
      "Failing to add buffer time for audience applause, slide transitions, and deliberate pauses.",
      "Writing too much text on slides rather than pacing speech delivery naturally."
    ],
    "faqs": [
      {
        "question": "How many words can you speak in a 10-minute presentation?",
        "answer": "At a comfortable conversational pace of 130 words per minute, a 10-minute speech should contain approximately 1,200 to 1,300 words."
      },
      {
        "question": "How fast is normal silent reading compared to speaking?",
        "answer": "Silent reading (200-250 WPM) is roughly 60% to 80% faster than speaking aloud (130-150 WPM)."
      },
      {
        "question": "How many words fit in a 30-second radio commercial?",
        "answer": "A 30-second voiceover script should be tightly edited to between 65 and 75 words."
      }
    ],
    "sources": [
      {
        "name": "Toastmasters International (Speech Timing Guidelines)",
        "url": "https://www.toastmasters.org"
      }
    ]
  },
  "chmod-calculator": {
    "title": "Linux Chmod Permissions Calculator — DEVELOPER Guide & Formula",
    "overview": "Calculates Linux/Unix file permissions interactively, toggling Read, Write, and Execute bits to generate octal (755, 644) and symbolic (rwxr-xr-x) syntax.",
    "formula": "Permission_Octal = (Read × 4) + (Write × 2) + (Execute × 1) evaluated for User, Group, and Others",
    "explanation": "3-digit octal notation: Owner (User), Group, and Public (Others). Read = 4, Write = 2, Execute = 1.",
    "example": {
      "title": "Worked Example: Standard Web Server File Permissions (chmod 644)",
      "inputs": "Owner = Read + Write (4+2=6) | Group = Read (4) | Others = Read (4)",
      "steps": [
        "Owner permissions: 4 + 2 = 6 (rw-)",
        "Group permissions: 4 (r--)",
        "Others permissions: 4 (r--)",
        "Resulting octal command: chmod 644 filename.html"
      ],
      "summary": "Octal = 644 | Symbolic = -rw-r--r-- | Safe for Web Assets"
    },
    "metricsText": "Setting chmod 777 grants full read, write, and execute permissions to anyone on the server, creating severe security vulnerabilities.",
    "useCases": [
      "Web Server Security: Configure safe 644 file permissions and 755 directory permissions on Nginx/Apache servers.",
      "SSH Key Hardening: Set chmod 400 or 600 on private id_rsa keys to prevent SSH permission denied errors.",
      "Script Execution: Grant execution rights (chmod +x or chmod 755) to shell scripts and deployment automation."
    ],
    "commonMistakes": [
      "Using chmod 777 as a quick fix for web server permission errors instead of fixing proper user ownership (chown).",
      "Forgetting that directories require the execute bit (x) for users to traverse (cd) into them.",
      "Leaving configuration files containing database passwords readable by others (should be chmod 600)."
    ],
    "faqs": [
      {
        "question": "What are the standard permissions for web files and folders?",
        "answer": "Standard safe practice: 755 (rwxr-xr-x) for directories, and 644 (rw-r--r--) for static files."
      },
      {
        "question": "Why does SSH reject my private key?",
        "answer": "SSH requires private keys to be protected from other users; running 'chmod 600 ~/.ssh/id_rsa' fixes this error."
      },
      {
        "question": "What does the 4th leading digit mean in chmod (e.g. 1777)?",
        "answer": "Special permission bits: SUID (4), SGID (2), and Sticky Bit (1, used on /tmp directories so only owners can delete files)."
      }
    ],
    "sources": [
      {
        "name": "POSIX IEEE Std 1003.1 (chmod)",
        "url": "https://pubs.opengroup.org"
      }
    ]
  },
  "payback-period-calculator": {
    "title": "Payback Period Calculator — FINANCE Guide & Formula",
    "overview": "Calculates the time required in years and months for an investment or capital project to generate cumulative cash flows equal to its initial cost.",
    "formula": "Payback Period = Initial Investment / Annual Cash Inflow (or cumulative cash flow break-even point)",
    "explanation": "Measures capital liquidity and investment risk; shorter payback periods represent faster capital recovery.",
    "example": {
      "title": "Worked Example: ₹5,00,000 Commercial Solar Installation with ₹1,20,000 Annual Savings",
      "inputs": "Initial Cost = ₹5,00,000 | Annual Net Savings = ₹1,20,000 per year",
      "steps": [
        "Payback period = ₹5,00,000 / ₹1,20,000 = 4.167 years",
        "0.167 years × 12 months = 2 months",
        "Exact payback timeline = 4 Years and 2 Months"
      ],
      "summary": "Initial Cost = ₹5,00,000 | Annual Recovery = ₹1,20,000 | Payback Period = 4 Years, 2 Months"
    },
    "metricsText": "Payback period measures liquidity risk, but ignores cash flows that occur after the break-even point and the time value of money.",
    "useCases": [
      "Equipment Purchases: Evaluate commercial machinery investments based on operational labor savings.",
      "Energy Efficiency Audits: Calculate payback timelines on rooftop solar panels, heat pumps, or LED retrofits.",
      "Franchise Feasibility: Assess how many years of franchise operation are required to recover initial setup fees."
    ],
    "commonMistakes": [
      "Failing to discount future cash flows for inflation (discounted payback period method).",
      "Rejecting highly profitable long-term projects simply because initial payback exceeds 3-4 years.",
      "Omitting annual ongoing maintenance and insurance costs from net annual cash inflows."
    ],
    "faqs": [
      {
        "question": "What is the difference between simple payback and discounted payback?",
        "answer": "Simple payback ignores the time value of money; discounted payback discounts future cash flows at the firm's cost of capital."
      },
      {
        "question": "What is a good payback period for business investments?",
        "answer": "Most businesses target payback periods between 2 and 5 years, depending on technology obsolescence risk."
      },
      {
        "question": "Why do financial analysts prefer NPV over payback period?",
        "answer": "Because Net Present Value (NPV) accounts for all project cash flows throughout its entire economic life."
      }
    ],
    "sources": [
      {
        "name": "Corporate Finance Institute",
        "url": "https://corporatefinanceinstitute.com"
      }
    ]
  },
  "mortgage-refinance-calculator": {
    "title": "Mortgage Refinance Savings Calculator — FINANCE Guide & Formula",
    "overview": "Calculates monthly EMI savings, total interest saved, and break-even timelines when transferring a home loan to a lower interest rate lender.",
    "formula": "Monthly Savings = Old EMI - New EMI | Break-Even Months = Refinancing Costs / Monthly Savings",
    "explanation": "Accounts for processing fees, valuation charges, legal stamp fees, and foreclosure terms against cumulative interest savings.",
    "example": {
      "title": "Worked Example: Refinancing ₹35 Lakh Loan from 9.25% to 8.40% with 18 Years Left",
      "inputs": "Loan Balance = ₹35,00,000 | Current Rate = 9.25% | New Rate = 8.40% | Remaining Term = 216 Months | Switching Cost = ₹18,000",
      "steps": [
        "Current Monthly EMI at 9.25% = ₹33,745 per month",
        "New Monthly EMI at 8.40% = ₹31,880 per month",
        "Monthly cash savings = ₹33,745 - ₹31,880 = ₹1,865 per month",
        "Break-even timeline on ₹18,000 fees = ₹18,000 / ₹1,865 = 9.6 months"
      ],
      "summary": "Monthly Savings = ₹1,865/mo | Lifetime Interest Saved = ₹3,84,840 | Break-Even Period = 10 Months"
    },
    "metricsText": "A rate reduction of just 0.75% on a large home loan saves several lakhs of rupees over the remaining tenure.",
    "useCases": [
      "Home Loan Balance Transfer: Determine if moving a loan to another commercial bank offsets switching processing charges.",
      "Tenure Reset Negotiation: Use competitive refinance quotes to negotiate an internal rate reduction with your existing lender.",
      "Cash-Out Refinancing: Evaluate equity cash-out options to fund major home renovations."
    ],
    "commonMistakes": [
      "Refinancing near the end of a loan tenure when remaining interest obligations are too small to justify switching costs.",
      "Extending remaining tenure back to 20 or 30 years, which lowers monthly EMI but increases total lifetime interest.",
      "Overlooking hidden administrative fees, mortgage deed registration charges, and MODT stamp duty."
    ],
    "faqs": [
      {
        "question": "Can I reduce my interest rate without switching banks?",
        "answer": "Yes, most banks offer an internal rate conversion (switching from an old benchmark to current RBLR) for a small processing fee (₹1,000 to ₹5,000)."
      },
      {
        "question": "What is MODT in home loan balance transfer?",
        "answer": "Memorandum of Deposit of Title Deed: a statutory stamp duty (0.1% to 0.5%) charged by state governments when registering mortgages."
      },
      {
        "question": "When is refinancing not recommended?",
        "answer": "If you plan to sell the property or close the loan within 1-2 years, switching fees will outweigh interest savings."
      }
    ],
    "sources": [
      {
        "name": "National Housing Bank Balance Transfer Guidelines",
        "url": "https://nhb.org.in"
      }
    ]
  },
  "one-rep-max-calculator": {
    "title": "One Rep Max (1RM) Calculator — HEALTH Guide & Formula",
    "overview": "Estimates maximum single-repetition lift capacity (1RM) for bench press, squats, and deadlifts using clinically validated Epley and Brzycki strength equations.",
    "formula": "Epley: 1RM = Weight × (1 + Reps / 30) | Brzycki: 1RM = Weight × [36 / (37 - Reps)]",
    "explanation": "Predicts maximum lift capacity from submaximal multi-rep sets (1 to 10 repetitions) without requiring dangerous maximal lift attempts.",
    "example": {
      "title": "Worked Example: Lifting 80 kg for 6 Repetitions on Bench Press",
      "inputs": "Weight Lifted = 80 kg | Completed Repetitions = 6 Reps",
      "steps": [
        "Epley Formula: 80 × (1 + 6 / 30) = 80 × 1.20 = 96.0 kg",
        "Brzycki Formula: 80 × [36 / (37 - 6)] = 80 × (36 / 31) = 92.9 kg",
        "Averaged Estimated 1RM = ~94.5 kg"
      ],
      "summary": "Lift = 80 kg × 6 Reps | Estimated 1RM = 95 kg | 80% Training Weight = 76 kg"
    },
    "metricsText": "Submaximal 1RM estimation from 3-5 rep sets is within 2-3% of true maximal lift capacity while minimizing central nervous system fatigue and injury risk.",
    "useCases": [
      "Powerlifting Training Percentages: Calibrate percentage-based strength cycles (e.g. 5/3/1 program sets at 75%, 85%, 95% of 1RM).",
      "Benchmark Strength Testing: Test strength gains safely every 8 to 12 weeks without risking joint injury from maximal singles.",
      "Workload Periodization: Adjust training loads across hypertrophy (70-80% 1RM) and peak strength (85-95% 1RM) blocks."
    ],
    "commonMistakes": [
      "Using sets higher than 10 repetitions to predict 1RM (muscle endurance alters accuracy above 10 reps).",
      "Failing to maintain strict exercise form during testing sets (e.g. bouncing bench press off chest).",
      "Attempting true 1RM lifts without qualified spotters and safety catch pins."
    ],
    "faqs": [
      {
        "question": "Why not just test true 1RM directly?",
        "answer": "Testing true 1RM carries high injury risk for joints, ligaments, and tendons, and takes days for the central nervous system to recover."
      },
      {
        "question": "Which 1RM formula is most accurate?",
        "answer": "The Brzycki and Epley formulas are both highly accurate for sets between 3 and 8 repetitions; Brzycki tends to be slightly more conservative."
      },
      {
        "question": "What percentage of 1RM should I lift for muscle hypertrophy?",
        "answer": "Hypertrophy training typically utilizes 65% to 80% of 1RM for sets of 8 to 12 repetitions."
      }
    ],
    "sources": [
      {
        "name": "National Strength and Conditioning Association (NSCA)",
        "url": "https://www.nsca.com"
      }
    ]
  },
  "macro-ratio-split-calculator": {
    "title": "Keto & Macro Ratio Split Calculator — HEALTH Guide & Formula",
    "overview": "Calculates precise gram allocations and caloric ratios for specialized dietary regimens including Ketogenic, Low-Carb High-Fat, and Zone 40-30-30 protocols.",
    "formula": "Protein (g) = (Total Calories × % Protein) / 4 | Carbs (g) = (Calories × % Carbs) / 4 | Fat (g) = (Calories × % Fat) / 9",
    "explanation": "Standard splits: Balanced (40C / 30P / 30F), Low Carb (25C / 40P / 35F), Keto (5C / 25P / 70F), High Carb Endurance (60C / 20P / 20F).",
    "example": {
      "title": "Worked Example: 2,000 kcal Ketogenic Diet Split (5% Carbs, 25% Protein, 70% Fat)",
      "inputs": "Daily Calories = 2,000 kcal | Carbs = 5% | Protein = 25% | Fat = 70%",
      "steps": [
        "Carbohydrate grams = (2,000 × 0.05) / 4 = 100 / 4 = 25 g/day",
        "Protein grams = (2,000 × 0.25) / 4 = 500 / 4 = 125 g/day",
        "Dietary Fat grams = (2,000 × 0.70) / 9 = 1,400 / 9 = 155.6 g/day"
      ],
      "summary": "Calories = 2,000 kcal | Net Carbs = 25 g (5%) | Protein = 125 g (25%) | Fat = 156 g (70%)"
    },
    "metricsText": "In ketogenic diets, keeping net carbohydrates strictly below 30-50g per day is essential to maintain hepatic ketone production and nutritional ketosis.",
    "useCases": [
      "Ketogenic Induction: Set accurate 5% carbohydrate limits to induce and sustain nutritional ketosis.",
      "Endurance Glycogen Loading: Configure high-carb 60% splits in the 48 hours prior to marathon competition.",
      "Fat Loss Satiety Optimization: Increase protein to 35-40% of calories to leverage the higher thermic effect of food (TEF)."
    ],
    "commonMistakes": [
      "Measuring total carbs instead of net carbs (total carbohydrates minus dietary fiber and sugar alcohols).",
      "Overconsuming protein on a ketogenic diet, which can trigger gluconeogenesis and knock individuals out of ketosis.",
      "Neglecting healthy monounsaturated and omega-3 polyunsaturated fats in favor of processed trans-fats."
    ],
    "faqs": [
      {
        "question": "What is the difference between total carbs and net carbs?",
        "answer": "Net carbs = Total Carbs minus Dietary Fiber; fiber does not raise blood glucose or insulin and is not counted toward ketogenic limits."
      },
      {
        "question": "What is the Thermic Effect of Food (TEF)?",
        "answer": "The energy required to digest nutrients: protein has the highest TEF (20-30% of calories burned in digestion), compared to carbs (5-10%) and fats (0-3%)."
      },
      {
        "question": "Can I build muscle on a low-carb diet?",
        "answer": "Yes, as long as total daily protein intake and overall calories are sufficient to support muscle protein synthesis and recovery."
      }
    ],
    "sources": [
      {
        "name": "Academy of Nutrition and Dietetics",
        "url": "https://www.eatright.org"
      }
    ]
  },
  "percentage-error-calculator": {
    "title": "Percentage Error Calculator — MATH Guide & Formula",
    "overview": "Calculates the percentage error and absolute error between experimental experimental measurements and accepted theoretical true values.",
    "formula": "Percentage Error (%) = (|Experimental Value - Theoretical Value| / |Theoretical Value|) × 100",
    "explanation": "Quantifies the experimental accuracy of laboratory measurements relative to known scientific benchmarks.",
    "example": {
      "title": "Worked Example: Gravitational Acceleration Lab Measurement",
      "inputs": "Experimental Measured g = 9.62 m/s² | Accepted True g = 9.81 m/s²",
      "steps": [
        "Absolute error = |9.62 - 9.81| = |-0.19| = 0.19 m/s²",
        "Relative error = 0.19 / 9.81 = 0.019368",
        "Percentage error = 0.019368 × 100 = 1.94%"
      ],
      "summary": "Experimental = 9.62 | True = 9.81 | Absolute Error = 0.19 | Percentage Error = 1.94%"
    },
    "metricsText": "Percentage error uses absolute value in the numerator; it is conventionally expressed as a positive percentage indicating measurement inaccuracy.",
    "useCases": [
      "Physics & Chemistry Labs: Compare experimental laboratory measurements against accepted standard physical constants.",
      "Engineering Sensor Calibration: Quantify measurement drift and instrument error in temperature and pressure sensors.",
      "Quality Assurance: Validate manufacturing assembly tolerances against theoretical CAD design specifications."
    ],
    "commonMistakes": [
      "Dividing by the experimental measured value instead of the true theoretical benchmark in the denominator.",
      "Reporting negative percentage error without noting that standard scientific convention evaluates absolute magnitude.",
      "Confusing percent error (compared to known true value) with percent difference (comparing two experimental values)."
    ],
    "faqs": [
      {
        "question": "What is an acceptable percentage error in science experiments?",
        "answer": "In high school/introductory labs, under 5% to 10% is typical; in precision manufacturing and professional science, under 1% is required."
      },
      {
        "question": "What is the difference between percent error and percent difference?",
        "answer": "Percent error compares a measurement to an accepted true value; percent difference compares two experimental measurements when neither is considered the 'true' benchmark."
      },
      {
        "question": "Why is the absolute value used in percent error?",
        "answer": "Because percentage error measures the magnitude of inaccuracy, regardless of whether the measurement was too high or too low."
      }
    ],
    "sources": [
      {
        "name": "NIST Guidelines for Evaluating and Expressing Uncertainty",
        "url": "https://www.nist.gov"
      }
    ]
  },
  "grade-point-converter": {
    "title": "Marks to Grade Point (GPA) Converter — EDUCATION Guide & Formula",
    "overview": "Converts percentage marks into letter grades and 10-point scale grade points across standard CBSE, ICSE, and Indian university grading matrices.",
    "formula": "Grade Point = Lookup_Table(Marks_Range) | CBSE 91-100% = A1 (GP 10), 81-90% = A2 (GP 9), 71-80% = B1 (GP 8)",
    "explanation": "Standard 7-band and 9-band grading systems map percentage marks into corresponding numerical grade points (1.0 to 10.0).",
    "example": {
      "title": "Worked Example: Student Scoring 76 Marks in Mathematics",
      "inputs": "Marks Obtained = 76 / 100 | Board Standard = CBSE 9-Band Grading",
      "steps": [
        "Score falls into the 71% to 80% marks bracket",
        "Assigned Letter Grade = B1",
        "Assigned Grade Point = 8.0 Grade Points"
      ],
      "summary": "Marks = 76 / 100 | Letter Grade = B1 | Grade Point = 8.0"
    },
    "metricsText": "Grading matrices group student performance into discrete bands to reduce high-stakes exam pressure associated with raw numerical scores.",
    "useCases": [
      "Marksheet Conversion: Convert subject-wise marks into official letter grades for board report cards.",
      "Credit Calculation: Determine individual subject grade points required to calculate semester SGPA.",
      "Eligibility Screening: Confirm that subject scores meet minimum Grade Point cutoffs for stream selection (Science, Commerce, Arts)."
    ],
    "commonMistakes": [
      "Assuming grade point bands are identical across state boards, central boards, and autonomous engineering colleges.",
      "Confusing relative grading (grading on a curve) with absolute percentage-to-grade lookup tables.",
      "Forgetting that 33% is the statutory minimum passing grade point (Grade D) in Indian school boards."
    ],
    "faqs": [
      {
        "question": "What is the passing grade point in CBSE?",
        "answer": "Grade D (Grade Point 4.0, representing 33% to 40% marks) is the minimum required to pass a subject."
      },
      {
        "question": "What is an A1 grade in CBSE?",
        "answer": "Grade A1 represents scores in the 91% to 100% marks bracket, awarding 10.0 grade points."
      },
      {
        "question": "Can grade point conversion tables be customized?",
        "answer": "Yes, autonomous universities publish custom grading matrices in their academic regulations."
      }
    ],
    "sources": [
      {
        "name": "Central Board of Secondary Education Examination Bylaws",
        "url": "https://www.cbse.gov.in"
      }
    ]
  },
  "css-px-to-vw-calculator": {
    "title": "PX to VW / VH Converter — DEVELOPER Guide & Formula",
    "overview": "Converts fixed pixel dimensions into responsive Viewport Width (vw) and Viewport Height (vh) units based on target screen mockup resolutions.",
    "formula": "vw = (px / Viewport_Width_px) × 100 | vh = (px / Viewport_Height_px) × 100",
    "explanation": "Enables fluid CSS scaling where typography and component sizes scale proportionally with screen viewport width.",
    "example": {
      "title": "Worked Example: Converting 48px Heading on 1440px Desktop Canvas",
      "inputs": "Target Pixels = 48px | Viewport Canvas Width = 1440px",
      "steps": [
        "Divide pixels by canvas width: 48 / 1440 = 0.03333",
        "Multiply by 100: 0.03333 × 100 = 3.333vw",
        "CSS declaration: font-size: 3.333vw;"
      ],
      "summary": "48px at 1440px Canvas = 3.333vw | Responsive Scaling Enabled"
    },
    "metricsText": "Using CSS clamp(1.5rem, 3vw, 3rem) prevents viewport-based typography from becoming unreadably tiny on mobile or gigantic on ultra-wide monitors.",
    "useCases": [
      "Fluid Typography: Create headline fonts that scale smoothly between mobile and desktop screen sizes.",
      "Hero Banners: Proportion full-screen landing page headers to match 100vh viewport heights.",
      "Aspect Ratio Containers: Build responsive canvas containers that maintain exact layout proportions."
    ],
    "commonMistakes": [
      "Using pure vw units for body text without clamp(), causing tiny illegible text on mobile phones.",
      "Forgetting that 100vw includes the browser scrollbar width in some desktop browsers, causing horizontal scroll.",
      "Confusing vh (viewport height) with dvh (dynamic viewport height on mobile devices with collapsing address bars)."
    ],
    "faqs": [
      {
        "question": "What is the difference between vw and %?",
        "answer": "vw is always relative to the browser viewport window; % is relative to the size of the immediate parent element."
      },
      {
        "question": "What are dvh and lvh units in modern CSS?",
        "answer": "dvh (dynamic viewport height) adjusts dynamically as mobile browser address bars expand and collapse; lvh reflects the largest possible viewport height."
      },
      {
        "question": "How do I prevent viewport fonts from scaling too large?",
        "answer": "Use CSS clamp(): font-size: clamp(min, preferred_vw, max); to lock minimum and maximum boundaries."
      }
    ],
    "sources": [
      {
        "name": "W3C CSS Values and Units Module Level 4",
        "url": "https://www.w3.org/TR/css-values-4/"
      }
    ]
  },
  "color-contrast-checker": {
    "title": "WCAG Color Contrast Ratio Checker — DEVELOPER Guide & Formula",
    "overview": "Evaluates the luminance contrast ratio between foreground text and background colors according to Web Content Accessibility Guidelines (WCAG 2.1).",
    "formula": "Contrast Ratio = (L1 + 0.05) / (L2 + 0.05) where L1 is relative luminance of lighter color and L2 is darker color",
    "explanation": "Checks compliance against WCAG Level AA (minimum 4.5:1 for normal text, 3:1 for large text) and Level AAA (minimum 7:1 for normal text).",
    "example": {
      "title": "Worked Example: Evaluating Dark Slate Text (#0f172a) on Light Gray Background (#f8fafc)",
      "inputs": "Foreground = #0f172a | Background = #f8fafc",
      "steps": [
        "Calculate relative luminance L1 and L2.",
        "Ratio = (0.95 + 0.05) / (0.02 + 0.05) = 1.00 / 0.07 = 14.28:1",
        "Threshold comparison: Exceeds 4.5:1 (AA) and 7.0:1 (AAA)."
      ],
      "summary": "Contrast Ratio = 14.3:1 | WCAG AA: PASS | WCAG AAA: PASS (Accessible)"
    },
    "metricsText": "Approximately 8% of men and 0.5% of women have color vision deficiencies; maintaining 4.5:1 contrast ensures text remains readable for all users.",
    "useCases": [
      "Accessibility Compliance: Ensure web user interfaces comply with legal Americans with Disabilities Act (ADA) and WCAG standards.",
      "Design System Auditing: Audit button text, input labels, and alert banners for accessible readability.",
      "Dark Mode Optimization: Validate inverted color palettes to prevent low-contrast gray-on-dark eye fatigue."
    ],
    "commonMistakes": [
      "Checking contrast only on normal state and forgetting hover, focus, and disabled button states.",
      "Placing low-contrast light gray text (#94a3b8) on white backgrounds, failing minimum AA criteria.",
      "Relying solely on color to convey information (e.g. green for success without an accompanying icon or text label)."
    ],
    "faqs": [
      {
        "question": "What is the minimum WCAG contrast ratio for normal text?",
        "answer": "WCAG 2.1 Level AA requires a minimum contrast ratio of 4.5:1 for regular body text, and 3:1 for large text (18pt or 14pt bold)."
      },
      {
        "question": "What is the AAA contrast standard?",
        "answer": "WCAG Level AAA requires a stricter 7:1 ratio for normal text and 4.5:1 for large text, representing highest accessibility."
      },
      {
        "question": "Do placeholder texts inside inputs need to meet contrast ratios?",
        "answer": "Yes, low-contrast placeholder text is one of the most common accessibility failures flagged by automated audit tools."
      }
    ],
    "sources": [
      {
        "name": "W3C Web Content Accessibility Guidelines (WCAG) 2.1",
        "url": "https://www.w3.org/WAI/standards-guidelines/wcag/"
      }
    ]
  },
  "unit-price-comparison-calculator": {
    "title": "Unit Price Value Comparison Calculator — EVERYDAY Guide & Formula",
    "overview": "Compares unit prices across different package sizes, weights, and volumes to find the true best financial bargain on grocery store shelves.",
    "formula": "Unit Price = Total Package Cost / Total Quantity in Base Units (grams, ml, or units)",
    "explanation": "Converts diverse packaging quantities into standardized baseline units (e.g. Cost per 100 grams, Cost per Liter, Cost per Count).",
    "example": {
      "title": "Worked Example: Comparing Two Detergent Packs",
      "inputs": "Option A: 800g for ₹180 | Option B: 2 kg (2,000g) for ₹420",
      "steps": [
        "Normalize Option A: 180 / 800g = ₹0.225 per gram (₹22.50 per 100g)",
        "Normalize Option B: 420 / 2,000g = ₹0.210 per gram (₹21.00 per 100g)",
        "Difference: Option B saves ₹1.50 per 100g (6.67% cheaper)"
      ],
      "summary": "Option A = ₹22.50/100g | Option B = ₹21.00/100g | Best Value = Option B (Bulk Pack)"
    },
    "metricsText": "Larger 'family size' or 'bulk' packages are not always cheaper per unit; manufacturer shrinkflation and promotional pricing often make smaller packs cheaper.",
    "useCases": [
      "Supermarket Shopping: Identify whether bulk pack cereals and detergents genuinely offer lower unit prices than smaller twin packs.",
      "Shrinkflation Detection: Detect subtle price increases when brands downsize packaging volume while keeping retail price constant.",
      "Warehouse Club Valuation: Verify whether wholesale club memberships (Costco, Metro) justify bulk purchase quantities."
    ],
    "commonMistakes": [
      "Assuming larger bulk packaging is always the better deal without comparing normalized cost per gram or milliliter.",
      "Buying perishable groceries in massive bulk packs that spoil before consumption, resulting in wasted money.",
      "Comparing products with different concentration levels (e.g. concentrated vs diluted laundry detergents)."
    ],
    "faqs": [
      {
        "question": "What is shrinkflation in grocery shopping?",
        "answer": "A stealth pricing tactic where manufacturers reduce product package size or weight while keeping the retail price unchanged, effectively increasing the unit price."
      },
      {
        "question": "How do I calculate unit price quickly on my phone?",
        "answer": "Divide the price by the quantity listed on the package to find the cost per gram, milliliter, or ounce."
      },
      {
        "question": "Why do supermarkets display unit prices on shelf tags?",
        "answer": "Consumer protection regulations in many regions mandate shelf unit pricing to help shoppers compare values across different package sizes."
      }
    ],
    "sources": [
      {
        "name": "National Institute of Standards and Technology (NIST) Metric Program",
        "url": "https://www.nist.gov/pml/owm/metric-program"
      }
    ]
  },
  "working-days-calculator": {
    "title": "Working Business Days Calculator — EVERYDAY Guide & Formula",
    "overview": "Calculates net business working days between two calendar dates, automatically excluding Saturdays, Sundays, and public bank holidays.",
    "formula": "Working Days = Total Calendar Days - (Weekend Days + Public Holidays)",
    "explanation": "Calculates standard Monday-through-Friday commercial work days, supporting 5-day and 6-day work week schedules.",
    "example": {
      "title": "Worked Example: Working Days in October 2026 (31 Calendar Days)",
      "inputs": "Start = October 1, 2026 | End = October 31, 2026 | 5-Day Work Week | Public Holidays = 2 Days",
      "steps": [
        "Total calendar days = 31 days",
        "Weekend days (Saturdays and Sundays) = 9 days",
        "Declared national holidays falling on weekdays = 2 days (Gandhi Jayanti, Dussehra)",
        "Net working business days = 31 - 9 - 2 = 20 Working Days"
      ],
      "summary": "Calendar Days = 31 | Weekend Days = 9 | Holidays = 2 | Net Working Days = 20 Days (160 Work Hours)"
    },
    "metricsText": "A standard calendar year contains 260 to 262 weekdays; subtracting 10 to 12 national holidays leaves approximately 250 working days per year.",
    "useCases": [
      "Project Delivery Timelines: Calculate realistic sprint milestones based on actual billable working days rather than calendar spans.",
      "Payroll & Hourly Billing: Determine exact monthly billable work days for salaried contractors and hourly consultants.",
      "Statutory Notice Period Compliance: Calculate official corporate notice period release dates excluding non-working days."
    ],
    "commonMistakes": [
      "Assuming public holidays falling on weekends subtract an extra day from total working days.",
      "Forgetting regional state-specific holiday variances when coordinating projects across different Indian states or global offices.",
      "Failing to specify whether Saturdays are full working days, half days, or alternate weekend off-days."
    ],
    "faqs": [
      {
        "question": "How many working days are in a typical month?",
        "answer": "On a 5-day work week, an average month contains 20 to 22 business working days (roughly 160 to 176 work hours)."
      },
      {
        "question": "How many working days are in a year?",
        "answer": "A non-leap year has 261 weekdays; subtracting typical paid public holidays leaves roughly 248 to 250 net working days."
      },
      {
        "question": "Can I customize weekend days?",
        "answer": "Yes, you can toggle between a standard 5-day week (Mon-Fri) or a 6-day week (Mon-Sat)."
      }
    ],
    "sources": [
      {
        "name": "Ministry of Personnel, Public Grievances and Pensions (Government Holidays)",
        "url": "https://dopt.gov.in"
      }
    ]
  }
};

export const getGuideBySlug = (slug) => toolGuides[slug];
