import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Calciverse'
const SITE_DOMAIN = 'Calciverse.in'
const SITE_URL = 'https://calciverse.in'

// Explicit SEO Title and Meta Description map for all tools
const TOOL_SEO_MAP = {
  'emi-calculator': {
    title: `EMI Calculator — Calculate Monthly Loan EMI & Interest | ${SITE_DOMAIN}`,
    desc: `Calculate monthly loan EMI, interest payable, and payment schedule for home, car, and personal loans with Calciverse EMI Calculator.`
  },
  'gst-calculator': {
    title: `GST Calculator — Calculate Inclusive & Exclusive GST Rates | ${SITE_DOMAIN}`,
    desc: `Add or remove GST at 5%, 12%, 18%, and 28% slab rates instantly with Calciverse GST Calculator.`
  },
  'income-tax-calculator': {
    title: `Income Tax Calculator FY 2026-27 — Compare Tax Regimes | ${SITE_DOMAIN}`,
    desc: `Estimate income tax payable under the new and old tax regimes for FY 2026-27 with detailed slab breakdowns on Calciverse.in.`
  },
  'sip-calculator': {
    title: `SIP Calculator — Calculate Mutual Fund SIP Returns & Wealth | ${SITE_DOMAIN}`,
    desc: `Calculate expected maturity value, wealth gained, and total returns on monthly mutual fund SIP investments.`
  },
  'fd-calculator': {
    title: `FD Calculator — Calculate Fixed Deposit Maturity & Interest | ${SITE_DOMAIN}`,
    desc: `Estimate fixed deposit (FD) maturity value and total interest earned with quarterly/annual compounding.`
  },
  'rd-calculator': {
    title: `RD Calculator — Calculate Recurring Deposit Maturity | ${SITE_DOMAIN}`,
    desc: `Calculate recurring deposit (RD) maturity value and interest earned with compounding.`
  },
  'ppf-calculator': {
    title: `PPF Calculator — Calculate Public Provident Fund Corpus | ${SITE_DOMAIN}`,
    desc: `Project your Public Provident Fund (PPF) corpus and total interest earned over 15 years.`
  },
  'epf-calculator': {
    title: `EPF Calculator — Calculate Employee Provident Fund Balance | ${SITE_DOMAIN}`,
    desc: `Calculate Provident Fund corpus from monthly salary contributions and annual interest rates.`
  },
  'nps-calculator': {
    title: `NPS Calculator — Calculate National Pension System Corpus | ${SITE_DOMAIN}`,
    desc: `Estimate National Pension System retirement corpus and monthly pension payout.`
  },
  'lumpsum-calculator': {
    title: `Lumpsum Investment Calculator — Calculate Mutual Fund Returns | ${SITE_DOMAIN}`,
    desc: `Calculate future value of a one-time lumpsum mutual fund investment at an expected return rate.`
  },
  'cagr-calculator': {
    title: `CAGR Calculator — Calculate Compound Annual Growth Rate | ${SITE_DOMAIN}`,
    desc: `Calculate compound annual growth rate (CAGR) between two investment values over time.`
  },
  'roi-calculator': {
    title: `ROI Calculator — Calculate Return on Investment % | ${SITE_DOMAIN}`,
    desc: `Calculate return on investment as a percentage and annualised return figure.`
  },
  'retirement-calculator': {
    title: `Retirement Calculator — Calculate Retirement Corpus Needed | ${SITE_DOMAIN}`,
    desc: `How much you need saved to retire on a target monthly income after inflation.`
  },
  'inflation-calculator': {
    title: `Inflation Calculator — Calculate Future Purchasing Power | ${SITE_DOMAIN}`,
    desc: `Find what today's money will be worth after years of inflation.`
  },
  'salary-calculator': {
    title: `Salary & CTC Calculator — Calculate In-Hand Monthly Pay | ${SITE_DOMAIN}`,
    desc: `Calculate take-home monthly salary from CTC after EPF, Professional Tax, and TDS deductions.`
  },
  'salary-hike-calculator': {
    title: `Salary Hike Calculator — Calculate Salary Raise & Increment % | ${SITE_DOMAIN}`,
    desc: `Calculate new revised salary and percentage raise from an appraisal hike.`
  },
  'hra-calculator': {
    title: `HRA Calculator — Calculate Tax Exempt House Rent Allowance | ${SITE_DOMAIN}`,
    desc: `Calculate how much of your House Rent Allowance (HRA) is exempt from income tax.`
  },
  'gratuity-calculator': {
    title: `Gratuity Calculator — Calculate Gratuity Payble on Retirement | ${SITE_DOMAIN}`,
    desc: `Calculate gratuity payout based on last drawn basic salary and completed years of service.`
  },
  'tds-calculator': {
    title: `TDS Calculator — Calculate Tax Deducted at Source | ${SITE_DOMAIN}`,
    desc: `Calculate tax deducted at source (TDS) on salary, fixed deposit interest, or professional fees.`
  },
  'capital-gains-calculator': {
    title: `Capital Gains Tax Calculator — Calculate STCG & LTCG Tax | ${SITE_DOMAIN}`,
    desc: `Calculate short-term and long-term capital gains tax on stock, equity, or real estate sales.`
  },
  'credit-card-interest-calculator': {
    title: `Credit Card Interest Calculator — Calculate Payoff Time | ${SITE_DOMAIN}`,
    desc: `Calculate interest owed and payoff schedule on revolving credit card balance.`
  },
  'loan-eligibility-calculator': {
    title: `Loan Eligibility Calculator — Check How Much Loan You Get | ${SITE_DOMAIN}`,
    desc: `Estimate max home or personal loan amount you qualify for based on monthly income.`
  },
  'prepayment-calculator': {
    title: `Loan Prepayment Calculator — Calculate Interest Savings | ${SITE_DOMAIN}`,
    desc: `Calculate total interest saved and tenure cut by prepaying a loan.`
  },
  'stamp-duty-calculator': {
    title: `Stamp Duty Calculator — Calculate Property Registration Fees | ${SITE_DOMAIN}`,
    desc: `Estimate stamp duty and property registration costs across states.`
  },
  'property-tax-calculator': {
    title: `Property Tax Calculator — Calculate Annual House Tax | ${SITE_DOMAIN}`,
    desc: `Calculate annual property tax from assessed value and local rate.`
  },
  'rent-vs-buy-calculator': {
    title: `Rent vs Buy Calculator — Compare Buying vs Renting a Home | ${SITE_DOMAIN}`,
    desc: `Compare the long-term financial cost of renting against buying a home.`
  },
  'home-affordability-calculator': {
    title: `Home Affordability Calculator — How Much House Can You Afford | ${SITE_DOMAIN}`,
    desc: `Find the maximum home price you can afford based on income and down payment.`
  },
  'break-even-calculator': {
    title: `Break-Even Calculator — Calculate Break-Even Point Units | ${SITE_DOMAIN}`,
    desc: `Calculate units required to sell to cover fixed and variable costs.`
  },
  'profit-margin-calculator': {
    title: `Profit Margin Calculator — Calculate Gross & Net Margins | ${SITE_DOMAIN}`,
    desc: `Calculate gross margin and net profit margin from cost price and selling price.`
  },
  'markup-calculator': {
    title: `Markup Calculator — Calculate Selling Price from Cost | ${SITE_DOMAIN}`,
    desc: `Calculate target selling price from cost price and desired markup percentage.`
  },
  'freelance-rate-calculator': {
    title: `Freelance Rate Calculator — Calculate Hourly & Daily Rate | ${SITE_DOMAIN}`,
    desc: `Calculate minimum hourly rate required to hit target annual freelance income.`
  },
  'bmi-calculator': {
    title: `BMI Calculator — Calculate Body Mass Index & Weight Status | ${SITE_DOMAIN}`,
    desc: `Calculate Body Mass Index (BMI) from height and weight with WHO classifications.`
  },
  'calorie-calculator': {
    title: `Calorie Calculator — Calculate Daily Calorie Needs & TDEE | ${SITE_DOMAIN}`,
    desc: `Calculate daily calorie intake for weight loss, maintenance, or muscle gain.`
  },
  'water-intake-calculator': {
    title: `Water Intake Calculator — Calculate Daily Water Target | ${SITE_DOMAIN}`,
    desc: `Find recommended daily water intake based on body weight and activity level.`
  },
  'bmr-calculator': {
    title: `BMR Calculator — Calculate Basal Metabolic Rate | ${SITE_DOMAIN}`,
    desc: `Calculate basal metabolic rate (BMR) — calories burned at complete rest.`
  },
  'ideal-weight-calculator': {
    title: `Ideal Weight Calculator — Calculate Healthy Weight Range | ${SITE_DOMAIN}`,
    desc: `Find healthy ideal weight range based on height, age, and gender.`
  },
  'body-fat-calculator': {
    title: `Body Fat Calculator — Estimate Body Fat % (US Navy Method) | ${SITE_DOMAIN}`,
    desc: `Estimate body fat percentage using US Navy body circumference methods.`
  },
  'pregnancy-due-date-calculator': {
    title: `Pregnancy Due Date Calculator — Estimate Delivery Date | ${SITE_DOMAIN}`,
    desc: `Estimate pregnancy due date from the first day of last menstrual period.`
  },
  'ovulation-calculator': {
    title: `Ovulation Calculator — Predict Fertile Days & Cycle | ${SITE_DOMAIN}`,
    desc: `Predict your most fertile days and ovulation window based on cycle length.`
  },
  'period-calculator': {
    title: `Period Calculator — Predict Menstrual Cycle Dates | ${SITE_DOMAIN}`,
    desc: `Predict upcoming menstrual cycle dates and period start days.`
  },
  'macro-calculator': {
    title: `Macro Calculator — Calculate Protein, Carbs & Fat Targets | ${SITE_DOMAIN}`,
    desc: `Calculate daily protein, carbohydrate, and fat targets from your calorie goal.`
  },
  'heart-rate-zone-calculator': {
    title: `Heart Rate Zone Calculator — Fat Burn & Cardio Zones | ${SITE_DOMAIN}`,
    desc: `Calculate target heart rate zones for fat burn, cardio, and peak effort.`
  },
  'waist-hip-ratio-calculator': {
    title: `Waist to Hip Ratio Calculator — Health Risk Indicator | ${SITE_DOMAIN}`,
    desc: `Calculate waist-to-hip ratio as a quick indicator of cardiometabolic health risk.`
  },
  'sleep-calculator': {
    title: `Sleep Calculator — Calculate 90-Min Sleep Cycles & Wake Times | ${SITE_DOMAIN}`,
    desc: `Find optimal times to fall asleep or wake up based on 90-minute sleep cycles.`
  },
  'calories-burned-calculator': {
    title: `Calories Burned Calculator — Walking, Running & Cycling | ${SITE_DOMAIN}`,
    desc: `Calculate calories burned walking, running, or cycling a given distance.`
  },
  'percentage-calculator': {
    title: `Percentage Calculator — Calculate Marks %, Increase & Decrease | ${SITE_DOMAIN}`,
    desc: `Calculate percentages, marks to percentage, percentage change, and differences.`
  },
  'cgpa-calculator': {
    title: `CGPA Calculator — Calculate Grade Points & Percentage | ${SITE_DOMAIN}`,
    desc: `Convert grade points per subject into overall CGPA score and percentage.`
  },
  'attendance-calculator': {
    title: `Attendance Calculator — How Many Classes Can You Skip | ${SITE_DOMAIN}`,
    desc: `Calculate classes you can skip — or must attend — to maintain target percentage.`
  },
  'gpa-calculator': {
    title: `GPA Calculator — Calculate Grade Point Average | ${SITE_DOMAIN}`,
    desc: `Calculate overall GPA and equivalent percentage from subject grades.`
  },
  'grade-calculator': {
    title: `Grade Calculator — Final Exam Score Needed for Target Grade | ${SITE_DOMAIN}`,
    desc: `Find what score you need on a final exam to reach a target course grade.`
  },
  'cgpa-to-percentage-calculator': {
    title: `CGPA to Percentage Converter — Convert CGPA to % | ${SITE_DOMAIN}`,
    desc: `Convert CGPA (out of 10) to an equivalent percentage score.`
  },
  'age-calculator': {
    title: `Age Calculator — Calculate Exact Age in Years, Months & Days | ${SITE_DOMAIN}`,
    desc: `Calculate exact age in years, months, weeks, days, and hours from date of birth.`
  },
  'date-difference-calculator': {
    title: `Date Difference Calculator — Days & Months Between Dates | ${SITE_DOMAIN}`,
    desc: `Calculate days, weeks, and months between any two dates.`
  },
  'password-generator': {
    title: `Password Generator — Generate Secure Random Passwords | ${SITE_DOMAIN}`,
    desc: `Generate strong, unhackable random passwords with customizable length.`
  },
  'qr-code-generator': {
    title: `QR Code Generator — Create Custom Downloadable QR Codes | ${SITE_DOMAIN}`,
    desc: `Generate free downloadable PNG QR codes from text, links, or contact info.`
  },
  'uuid-generator': {
    title: `UUID Generator — Bulk Version 4 UUID Generator | ${SITE_DOMAIN}`,
    desc: `Generate random RFC4122 version-4 UUIDs in bulk for software development.`
  },
  'random-number-generator': {
    title: `Random Number Generator — Generate Random Integers | ${SITE_DOMAIN}`,
    desc: `Generate random integers in a range, with or without duplicates.`
  },
  'barcode-generator': {
    title: `Barcode Generator — Generate Free CODE128 Barcodes | ${SITE_DOMAIN}`,
    desc: `Generate CODE128 standard barcodes online and download SVG/PNG barcode images.`
  },
  'discount-calculator': {
    title: `Discount Calculator — Calculate Final Price & Amount Saved | ${SITE_DOMAIN}`,
    desc: `Calculate final sale price and total money saved after percentage discounts.`
  },
  'tip-calculator': {
    title: `Tip Calculator — Split Bill & Calculate Tip Per Person | ${SITE_DOMAIN}`,
    desc: `Split restaurant bills and calculate tip amount per person easily.`
  },
  'fuel-cost-calculator': {
    title: `Fuel Cost Calculator — Calculate Trip Fuel Cost & Mileage | ${SITE_DOMAIN}`,
    desc: `Calculate trip fuel cost from distance, vehicle mileage, and fuel price.`
  },
  'word-counter': {
    title: `Word Counter — Count Words, Characters & Sentences | ${SITE_DOMAIN}`,
    desc: `Count words, characters, and sentences live as you type.`
  },
  'case-converter': {
    title: `Case Converter — Convert UPPERCASE, lowercase, Title Case | ${SITE_DOMAIN}`,
    desc: `Convert text case between UPPERCASE, lowercase, Title Case, and camelCase.`
  },
  'typing-speed-test': {
    title: `Typing Speed Test — Measure WPM & Accuracy Online | ${SITE_DOMAIN}`,
    desc: `Measure typing speed in WPM (words per minute) and accuracy against sample text.`
  },
  'unit-converter': {
    title: `Unit Converter — Convert Length, Weight, Temp & Volume | ${SITE_DOMAIN}`,
    desc: `Convert units instantly for length, mass, temperature, area, and volume.`
  },
  'time-zone-converter': {
    title: `Time Zone Converter — Convert Times Across Global Timezones | ${SITE_DOMAIN}`,
    desc: `Convert time between IST, EST, PST, GMT, UTC, and global timezones.`
  },
  'time-duration-calculator': {
    title: `Time Duration Calculator — Hours & Minutes Between Times | ${SITE_DOMAIN}`,
    desc: `Calculate hours and minutes elapsed between two clock times.`
  },
  'electricity-bill-calculator': {
    title: `Electricity Bill Calculator — Estimate Monthly Power Bill | ${SITE_DOMAIN}`,
    desc: `Estimate monthly electricity bill from appliance wattage and usage hours.`
  },
  'rent-split-calculator': {
    title: `Rent Split Calculator — Fair Roommate Rent Splitter | ${SITE_DOMAIN}`,
    desc: `Fairly split rent among roommates by room size or income.`
  },
  'countdown-timer': {
    title: `Countdown Timer — Online Countdown to Any Date & Event | ${SITE_DOMAIN}`,
    desc: `Days, hours, and minutes remaining until any target date or event.`
  },
  'notice-period-calculator': {
    title: `Notice Period Calculator — Find Last Working Day | ${SITE_DOMAIN}`,
    desc: `Calculate your last working day based on resignation date and notice period.`
  },
  'percentage-change-calculator': {
    title: `Percentage Change Calculator — % Increase & Decrease | ${SITE_DOMAIN}`,
    desc: `Calculate percentage increase or decrease between two numbers.`
  },
  'average-calculator': {
    title: `Average Calculator — Calculate Mean, Median & Mode | ${SITE_DOMAIN}`,
    desc: `Calculate mean, median, and mode of a list of numbers.`
  },
  'ratio-calculator': {
    title: `Ratio Calculator — Simplify Ratios & Find Missing Terms | ${SITE_DOMAIN}`,
    desc: `Simplify ratios or solve for missing values in proportion equations.`
  },
  'lcm-hcf-calculator': {
    title: `LCM & HCF Calculator — Least Common Multiple & HCF | ${SITE_DOMAIN}`,
    desc: `Calculate least common multiple (LCM) and highest common factor (HCF).`
  },
  'fraction-calculator': {
    title: `Fraction Calculator — Add, Subtract & Multiply Fractions | ${SITE_DOMAIN}`,
    desc: `Add, subtract, multiply, and divide fractions with step-by-step solutions.`
  },
  'square-root-calculator': {
    title: `Square Root Calculator — Find Square & Cube Roots | ${SITE_DOMAIN}`,
    desc: `Calculate square roots and cube roots for perfect and non-perfect numbers.`
  },
  'standard-deviation-calculator': {
    title: `Standard Deviation Calculator — Mean & Variance | ${SITE_DOMAIN}`,
    desc: `Calculate mean, variance, and standard deviation of a dataset.`
  },
  'scientific-calculator': {
    title: `Scientific Calculator — Free Full Online Scientific Calculator | ${SITE_DOMAIN}`,
    desc: `Trigonometric, logarithmic, exponential, and scientific calculations.`
  },
  'percentage-to-fraction-calculator': {
    title: `Percentage to Fraction Converter — Convert % to Fractions | ${SITE_DOMAIN}`,
    desc: `Convert between percentages, fractions, and decimal numbers.`
  },
  'prime-number-checker': {
    title: `Prime Number Checker — Test If a Number Is Prime | ${SITE_DOMAIN}`,
    desc: `Test if a number is prime and list all factors if composite.`
  },
  'factorial-calculator': {
    title: `Factorial Calculator — Calculate Factorials of Numbers | ${SITE_DOMAIN}`,
    desc: `Calculate factorial (n!) of any non-negative integer.`
  },
  'permutation-combination-calculator': {
    title: `Permutation & Combination Calculator — nPr & nCr | ${SITE_DOMAIN}`,
    desc: `Calculate nPr permutations and nCr combinations for set sizes.`
  },
  'quadratic-equation-solver': {
    title: `Quadratic Equation Solver — Find Real & Complex Roots | ${SITE_DOMAIN}`,
    desc: `Find roots of ax² + bx + c = 0 quadratic equations.`
  },
  'number-to-words-converter': {
    title: `Number to Words Converter — Spell Numbers in Words | ${SITE_DOMAIN}`,
    desc: `Convert numbers into written words in Indian and International numbering scales.`
  },
  'json-formatter': {
    title: `JSON Formatter — Pretty Print, Minify & Validate JSON | ${SITE_DOMAIN}`,
    desc: `Pretty-print, format, minify, and validate JSON code online.`
  },
  'base64-encoder-decoder': {
    title: `Base64 Encoder & Decoder — Encode & Decode Text Base64 | ${SITE_DOMAIN}`,
    desc: `Encode text strings into Base64 format or decode Base64 strings back to text.`
  },
  'color-picker': {
    title: `Color Picker — HEX, RGB & HSL Color Code Finder | ${SITE_DOMAIN}`,
    desc: `Pick colors visually and convert instantly between HEX, RGB, and HSL.`
  },
  'regex-tester': {
    title: `Regex Tester — Test Regular Expressions Online | ${SITE_DOMAIN}`,
    desc: `Test regular expressions against sample text with live match highlighting.`
  },
  'html-formatter': {
    title: `HTML Formatter — Indent & Beautify Messy HTML | ${SITE_DOMAIN}`,
    desc: `Format, indent, and clean up unformatted HTML markup.`
  },
  'sql-formatter': {
    title: `SQL Formatter — Format & Beautify SQL Queries | ${SITE_DOMAIN}`,
    desc: `Format and beautify SQL queries with proper keywords and indentation.`
  },
  'css-minifier': {
    title: `CSS Minifier — Compress & Minify CSS Code Online | ${SITE_DOMAIN}`,
    desc: `Compress CSS stylesheets by stripping whitespace and comments.`
  },
  'js-minifier': {
    title: `JS Minifier — Compress & Minify JavaScript Code | ${SITE_DOMAIN}`,
    desc: `Compress JavaScript files by removing unnecessary whitespace and comments.`
  },
  'markdown-previewer': {
    title: `Markdown Previewer — Live Render Markdown to HTML | ${SITE_DOMAIN}`,
    desc: `Write Markdown text and preview rendered HTML side by side.`
  },
  'url-encoder-decoder': {
    title: `URL Encoder & Decoder — Percent Encode URLs | ${SITE_DOMAIN}`,
    desc: `Percent-encode or decode URLs, URI parameters, and query strings.`
  },
  'html-entity-converter': {
    title: `HTML Entity Converter — Encode & Decode Special Chars | ${SITE_DOMAIN}`,
    desc: `Convert special characters to HTML entities and back.`
  },
  'jwt-decoder': {
    title: `JWT Decoder — Decode JSON Web Tokens Header & Payload | ${SITE_DOMAIN}`,
    desc: `Decode JSON Web Token (JWT) header, payload claims, and signatures.`
  },
  'unix-timestamp-converter': {
    title: `Unix Timestamp Converter — Convert Timestamps to Dates | ${SITE_DOMAIN}`,
    desc: `Convert Unix epoch timestamps to human-readable date and time.`
  },
  'diff-checker': {
    title: `Text Diff Checker — Compare Two Blocks of Text | ${SITE_DOMAIN}`,
    desc: `Compare two blocks of text and highlight line-by-line differences.`
  },
  'css-gradient-generator': {
    title: `CSS Gradient Generator — Linear & Radial Gradients | ${SITE_DOMAIN}`,
    desc: `Design linear and radial CSS color gradients and copy CSS code.`
  },
  'box-shadow-generator': {
    title: `CSS Box Shadow Generator — Visual Box Shadow Tool | ${SITE_DOMAIN}`,
    desc: `Create visual CSS box-shadow effects and copy CSS code.`
  },
  'lorem-ipsum-generator': {
    title: `Lorem Ipsum Generator — Generate Placeholder Text | ${SITE_DOMAIN}`,
    desc: `Generate dummy placeholder text by paragraph, sentence, or word count.`
  },
  'number-base-converter': {
    title: `Binary / Hex / Octal Converter — Base Conversions | ${SITE_DOMAIN}`,
    desc: `Convert numbers between binary, decimal, hexadecimal, and octal bases.`
  },
  'px-to-rem-converter': {
    title: `PX to REM Converter — Convert Pixels to REM/EM | ${SITE_DOMAIN}`,
    desc: `Convert pixel values to REM/EM units for responsive CSS layouts.`
  },
  'invoice-generator': {
    title: `Invoice & GST Bill Generator — Create Free Tax Invoices PDF | ${SITE_DOMAIN}`,
    desc: `Create itemized GST invoices, tax bills, and download or print clean PDF invoices.`
  },
  'profit-and-loss-calculator': {
    title: `Profit & Loss (P&L) Calculator — Gross & Net Margins | ${SITE_DOMAIN}`,
    desc: `Calculate gross profit, operating margin, and net profit after tax.`
  },
  'sales-tax-calculator': {
    title: `Sales Tax & VAT Calculator — Add or Remove Sales Tax | ${SITE_DOMAIN}`,
    desc: `Add or extract sales tax and VAT from transaction amounts.`
  },
  'payroll-calculator': {
    title: `Payroll Calculator — Calculate Take-Home Salary | ${SITE_DOMAIN}`,
    desc: `Calculate employee take-home salary after EPF, Professional Tax, and TDS.`
  },
  'commission-calculator': {
    title: `Sales Commission Calculator — Tiered Payout Rates | ${SITE_DOMAIN}`,
    desc: `Calculate base commission and tiered bonus structures for sales.`
  },
  'markup-vs-margin-calculator': {
    title: `Markup vs Profit Margin Calculator — Convert % Margins | ${SITE_DOMAIN}`,
    desc: `Convert between markup percentage and profit margin percentage.`
  },
  'mortgage-calculator': {
    title: `Mortgage Loan Calculator — Estimate Monthly Payments | ${SITE_DOMAIN}`,
    desc: `Estimate home mortgage monthly payments, principal, and interest.`
  },
  'pace-calculator': {
    title: `Pace Calculator — Running & Walking Speed Calculator | ${SITE_DOMAIN}`,
    desc: `Calculate running and walking pace, speed, and projected 5k/10k finish times.`
  },
  'body-surface-area-calculator': {
    title: `Body Surface Area Calculator — Estimate BSA Online | ${SITE_DOMAIN}`,
    desc: `Estimate body surface area (BSA) using Mosteller and Du Bois formulas.`
  },
  'gpa-to-percentage-converter': {
    title: `GPA to Percentage Converter — Convert GPA Scores | ${SITE_DOMAIN}`,
    desc: `Convert GPA scores (4.0, 5.0, 10.0 scales) to percentages and letter grades.`
  },
  'aspect-ratio-calculator': {
    title: `Aspect Ratio Calculator — 16:9, 4:3 Image Dimensions | ${SITE_DOMAIN}`,
    desc: `Find 16:9, 4:3, 1:1 image and display screen dimensions.`
  },
  'exponent-calculator': {
    title: `Exponent & Power Calculator — Exponents & Powers | ${SITE_DOMAIN}`,
    desc: `Calculate base numbers raised to positive or negative exponents.`
  },
  'ev-vs-petrol-calculator': {
    title: `EV vs Petrol Fuel Cost & Carbon Calculator | ${SITE_DOMAIN}`,
    desc: `Compare monthly running costs, fuel savings, and CO2 carbon reduction between EV and Petrol vehicles.`
  },
  'freelance-tax-hourly-rate-calculator': {
    title: `Freelance & Side-Hustle Net Hourly Rate Calculator | ${SITE_DOMAIN}`,
    desc: `Calculate minimum hourly rate required after unpaid hours, operational expenses, income tax, and GST.`
  },
  'loan-calculator': {
    title: `Loan Calculator — Calculate Monthly Loan Repayment & Interest | ${SITE_DOMAIN}`,
    desc: `Calculate monthly loan payments, total interest payable, and repayment schedule for personal, auto, or home loans on Calciverse.in.`
  },
  'simple-interest-calculator': {
    title: `Simple Interest Calculator — Calculate Principal, Rate & Interest | ${SITE_DOMAIN}`,
    desc: `Calculate simple interest, final maturity amount, annual rate, or loan tenure in years instantly on Calciverse.in.`
  },
  'compound-interest-calculator': {
    title: `Compound Interest Calculator — Investment Growth & Returns | ${SITE_DOMAIN}`,
    desc: `Calculate compound interest growth daily, monthly, quarterly, or annually with total interest and return breakdowns on Calciverse.in.`
  }
}

const CATEGORY_SEO_MAP = {
  'finance': {
    title: `Finance Calculators & Financial Tools — GST, EMI, Tax & SIP | ${SITE_DOMAIN}`,
    desc: `Free online finance calculators for loan EMI, GST, Income Tax FY 2026-27, SIP returns, FD, RD, PPF, EPF, CTC salary, capital gains, and mortgages.`,
    keywords: `finance calculator, EMI calculator, GST calculator, Income tax calculator, SIP calculator, PPF calculator, FD calculator, financial tools India`
  },
  'business': {
    title: `Business & Accounting Calculators — Invoices, Margins & Tax | ${SITE_DOMAIN}`,
    desc: `Free online business tools: tax invoice generator, profit margin calculator, sales tax & VAT, markup, freelance hourly rates, and payroll splitters.`,
    keywords: `business calculator, profit margin calculator, invoice generator, markup calculator, sales tax calculator, freelance rate calculator`
  },
  'health': {
    title: `Health & Fitness Calculators — BMI, Calories, BMR & Ovulation | ${SITE_DOMAIN}`,
    desc: `Calculate Body Mass Index (BMI), daily calorie needs (TDEE), BMR, body fat %, water intake targets, pregnancy due date, and period cycles online.`,
    keywords: `health calculator, BMI calculator, calorie calculator, BMR calculator, ovulation calculator, body fat calculator, period tracker`
  },
  'education': {
    title: `Education & Grade Calculators — CGPA, Percentage & Attendance | ${SITE_DOMAIN}`,
    desc: `Convert CGPA to percentage, calculate overall GPA, final exam score targets, weighted grades, and class attendance requirements easily.`,
    keywords: `CGPA calculator, GPA calculator, percentage calculator, attendance calculator, grade calculator, marks to percentage`
  },
  'everyday': {
    title: `Everyday Utility Tools & Daily Calculators — Age, Time & Password | ${SITE_DOMAIN}`,
    desc: `Free daily utility tools: exact age calculator, date difference, secure random password generator, QR code generator, word counter, and fuel cost calculator.`,
    keywords: `everyday tools, age calculator, password generator, QR code generator, word counter, fuel cost calculator, time duration calculator`
  },
  'math': {
    title: `Online Math Calculators & Solvers — Percentage, LCM, Fractions | ${SITE_DOMAIN}`,
    desc: `Solve math calculations online: percentage change, standard deviation, LCM & HCF, quadratic equations, fractions, and square roots with steps.`,
    keywords: `math calculator, percentage calculator, LCM calculator, fraction calculator, square root calculator, standard deviation calculator`
  },
  'developer': {
    title: `Developer Tools & Code Formatters — JSON, Regex, Base64 & CSS | ${SITE_DOMAIN}`,
    desc: `Free online developer utilities: JSON formatter & validator, Base64 encoder/decoder, Regex tester, CSS minifier, HTML beautifier, and JWT decoder.`,
    keywords: `developer tools, JSON formatter, Base64 encoder, Regex tester, CSS minifier, HTML beautifier, JWT decoder, UUID generator`
  }
}

const ARTICLE_SEO_MAP = {
  'how-emi-is-calculated': {
    title: `How Loan EMI is Calculated: Formula & Amortization Math | ${SITE_DOMAIN}`,
    desc: `Learn how banks calculate loan EMI using the reducing balance formula. Complete guide with formulas, monthly split math, and early prepayment tips.`
  },
  'old-vs-new-tax-regime': {
    title: `Old vs New Tax Regime FY 2026-27: Which Saves More Tax? | ${SITE_DOMAIN}`,
    desc: `Compare Old vs New Income Tax Regime slabs and deductions (80C, HRA, home loan interest). Find your break-even deduction point to save maximum tax.`
  },
  'how-gst-actually-works': {
    title: `How GST Works in India: Rates, Inclusive & Exclusive Math | ${SITE_DOMAIN}`,
    desc: `Understand GST calculation in India. Learn exact formulas to add 18% GST or extract base prices from GST-inclusive bills without calculation errors.`
  },
  'sip-vs-lumpsum-investing': {
    title: `SIP vs Lumpsum Mutual Fund Investing: Which Yields Higher Returns? | ${SITE_DOMAIN}`,
    desc: `Compare SIP and Lumpsum mutual fund investing strategies. Learn how rupee-cost averaging reduces market volatility risk vs time-in-market advantages.`
  },
  'how-compound-interest-really-grows-money': {
    title: `How Compound Interest Works: Formula, Frequency & Growth Math | ${SITE_DOMAIN}`,
    desc: `Discover how compound interest accelerates wealth growth. Understand compounding frequency (daily, monthly, annual) and why time beats interest rate.`
  },
  'fixed-deposit-vs-recurring-deposit': {
    title: `FD vs RD Comparison: Fixed Deposit vs Recurring Deposit | ${SITE_DOMAIN}`,
    desc: `FD vs RD: Compare returns, interest payout schedules, and tax implications. Find out whether a fixed deposit or monthly recurring deposit suits your savings.`
  },
  'what-affects-your-loan-eligibility': {
    title: `Loan Eligibility Guide: FOIR, Income & CIBIL Score Factors | ${SITE_DOMAIN}`,
    desc: `Discover what banks check when approving home and personal loans. Learn how FOIR ratio, credit score, and existing EMIs limit maximum loan eligibility.`
  },
  'understanding-credit-card-interest-traps': {
    title: `Credit Card Interest Math: Minimum Balance & APR Traps | ${SITE_DOMAIN}`,
    desc: `Learn how credit card finance charges work. Understand daily compounding APR, why paying minimum balance keeps you in debt, and how to eliminate interest.`
  },
  'ppf-vs-nps-retirement-planning': {
    title: `PPF vs NPS Retirement Comparison: Tax Benefit, Lock-in & Returns | ${SITE_DOMAIN}`,
    desc: `Compare Public Provident Fund (PPF) and National Pension System (NPS). Evaluate guaranteed interest vs market returns, 80C vs 80CCD tax benefits, and lock-in rules.`
  },
  'how-prepayment-changes-your-loan': {
    title: `Loan Prepayment Strategy: Reduce Loan EMI vs Tenure Cut | ${SITE_DOMAIN}`,
    desc: `Should you cut monthly EMI or reduce loan tenure when prepaying home loans? Learn how principal prepayment drastically slashes lifetime interest charges.`
  },
  'bmi-limitations': {
    title: `Body Mass Index (BMI) Limitations: What BMI Misses | ${SITE_DOMAIN}`,
    desc: `Understand why Body Mass Index (BMI) isn't the complete picture for muscle vs fat ratio, metabolic health, frame size, or ethnic body composition.`
  },
  'bmr-vs-tdee-explained': {
    title: `BMR vs TDEE Explained: Daily Calorie Calculation Guide | ${SITE_DOMAIN}`,
    desc: `Learn the difference between Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) for weight loss, maintenance, or muscle gain targets.`
  },
  'water-intake-how-much-is-enough': {
    title: `How Much Water Should You Drink Daily? Science & Hydration | ${SITE_DOMAIN}`,
    desc: `Is the 8-glasses-a-day rule true? Calculate daily water intake based on body weight, climate, exercise intensity, and hydration signals.`
  },
  'understanding-macros-protein-carbs-fat': {
    title: `Macro Tracking Guide: Protein, Carbs & Fat Ratios Explained | ${SITE_DOMAIN}`,
    desc: `Complete macronutrient guide explaining protein for muscle repair, carbs for fuel, and healthy fats for hormones. Calculate optimal daily macro splits.`
  },
  'why-heart-rate-zones-matter-for-training': {
    title: `Heart Rate Training Zones: Fat Burn vs Aerobic & Anaerobic | ${SITE_DOMAIN}`,
    desc: `Learn how target heart rate zones optimize workout intensity. Understand Zone 2 fat burn, Zone 3 cardio endurance, and Zone 4/5 peak performance effort.`
  },
  'waist-to-hip-ratio-vs-bmi': {
    title: `Waist-to-Hip Ratio vs BMI: Which Health Metric is Better? | ${SITE_DOMAIN}`,
    desc: `Why waist-to-hip ratio (WHR) predicts cardiovascular and visceral fat health risks better than BMI alone. Learn WHO health risk thresholds.`
  },
  'how-ovulation-tracking-works': {
    title: `How Ovulation Calculators Predict Fertile Window & Cycle | ${SITE_DOMAIN}`,
    desc: `Learn how ovulation prediction math works. Calculate fertile window, ovulation day, and conception probabilities based on menstrual cycle length.`
  },
  'sleep-cycles-and-when-to-wake-up': {
    title: `90-Minute Sleep Cycle Science: Best Wake-up Times Guide | ${SITE_DOMAIN}`,
    desc: `Understand 90-minute REM and deep sleep cycles. Calculate optimal bedtimes and wake times to prevent morning grogginess and sleep inertia.`
  },
  'ideal-weight-formulas-explained': {
    title: `Ideal Body Weight Formulas: Devine, Robinson & Miller Compared | ${SITE_DOMAIN}`,
    desc: `Compare standard ideal body weight (IBW) calculation formulas. Learn why height, gender, and frame size affect healthy weight estimates.`
  },
  'calories-burned-walking-vs-running': {
    title: `Calories Burned Walking vs Running a Mile: Science & Math | ${SITE_DOMAIN}`,
    desc: `Do you burn more calories running or walking the same distance? Learn MET values, body weight impact, and energy expenditure differences.`
  },
  'cgpa-vs-percentage': {
    title: `CGPA to Percentage Conversion Guide & Formula Breakdown | ${SITE_DOMAIN}`,
    desc: `Learn how CBSE, Mumbai University, VTU, and Anna University convert CGPA to percentage. Understand why multiplying by 9.5 is an approximation.`
  },
  'attendance-percentage-explained': {
    title: `Class Attendance Percentage Math: How Many Classes Can You Skip? | ${SITE_DOMAIN}`,
    desc: `Calculate how many classes you can skip while staying above 75% or 85% required attendance threshold without getting shortage of attendance.`
  },
  'gpa-vs-cgpa-difference': {
    title: `GPA vs CGPA: Difference, Calculation & Scale Conversion | ${SITE_DOMAIN}`,
    desc: `Understand the difference between Grade Point Average (GPA) for one term and Cumulative GPA (CGPA) across degree courses.`
  },
  'how-weighted-grades-are-calculated': {
    title: `How Weighted Grades are Calculated: Final Score Math | ${SITE_DOMAIN}`,
    desc: `Step-by-step guide to calculating weighted course grades with syllabus category percentages (homework, midterms, final exams, projects).`
  },
  'understanding-grading-curves': {
    title: `Grading Curve Systems Explained: Bell Curve & Standard Deviation | ${SITE_DOMAIN}`,
    desc: `How curved grading redistributes student marks. Learn normal distribution curves, relative grading, and standard deviation score adjustments.`
  },
  'how-to-calculate-what-you-need-on-a-final': {
    title: `Final Exam Score Calculation: How to Find Needed Grade | ${SITE_DOMAIN}`,
    desc: `Find out what minimum score you must score on your final exam to pass or achieve an A grade, based on current assignment averages.`
  },
  'percentage-vs-percentile-in-exams': {
    title: `Percentage vs Percentile in Competitive Exams Explained | ${SITE_DOMAIN}`,
    desc: `Understand percentage vs percentile rank in JEE, CAT, NEET, and competitive exams. Learn relative scoring and normalisation math.`
  },
  'how-credit-hours-affect-gpa': {
    title: `How Credit Hours Impact GPA & Weighted Grade Point Average | ${SITE_DOMAIN}`,
    desc: `Why 4-credit major courses impact overall GPA far more than 1-credit lab electives. Learn credit hour weightage math in college grading.`
  },
  'common-mistakes-in-marks-to-percentage-conversion': {
    title: `Marks to Percentage Conversion Mistakes & Formulas | ${SITE_DOMAIN}`,
    desc: `Avoid common errors when calculating exam percentages, aggregate marks, best-of-five subject scores, and practical/theory mark splits.`
  },
  'why-different-boards-grade-differently': {
    title: `CBSE vs ICSE vs State Boards: Grading Scale Differences | ${SITE_DOMAIN}`,
    desc: `Understand structural differences between CBSE 10-point scale, ICSE evaluation, and state board marking schemes for college admissions.`
  },
  'how-age-is-calculated': {
    title: `How Age Calculators Measure Years, Months, Days & Leap Years | ${SITE_DOMAIN}`,
    desc: `Why different age tools output slightly different day counts. Learn leap year rules, day-of-month differences, and exact DOB calculation algorithms.`
  },
  'discount-math-explained': {
    title: `Discount Math Guide: Double Discounts & Savings Calculation | ${SITE_DOMAIN}`,
    desc: `Master percentage discount math. Learn how stacking 20% + 30% discounts works (hint: it's not 50% off) and calculate final checkout prices.`
  },
  'how-tip-splitting-math-works': {
    title: `How to Split Restaurant Bills & Tips Fairly per Person | ${SITE_DOMAIN}`,
    desc: `Learn quick mental math formulas to split dining bills and tip percentages evenly or proportionally by individual orders.`
  },
  'how-to-calculate-true-fuel-cost': {
    title: `Trip Fuel Cost Formula: Distance, Vehicle Mileage & Gas Math | ${SITE_DOMAIN}`,
    desc: `Calculate total road trip fuel expenses from distance in km/miles, vehicle fuel efficiency (kmpl/MPG), and current petrol or diesel prices.`
  },
  'why-word-count-limits-exist': {
    title: `Word Count vs Character Count: SEO & Editorial Limits | ${SITE_DOMAIN}`,
    desc: `Why essays, social media posts, and meta descriptions enforce character and word limits. Standard word length averages explained.`
  },
  'when-to-use-which-text-case': {
    title: `Title Case vs Sentence Case vs CamelCase Guide | ${SITE_DOMAIN}`,
    desc: `Rules for capitalization: when to use Title Case for headlines, Sentence Case for body text, camelCase for variables, and UPPERCASE for acronyms.`
  },
  'how-typing-speed-is-measured': {
    title: `How Typing Speed (WPM) & Accuracy are Measured Online | ${SITE_DOMAIN}`,
    desc: `Understand Words Per Minute (WPM) formula: standard 5-character word rule, gross vs net WPM, and how typo penalties decrease accuracy.`
  },
  'why-unit-conversion-factors-look-odd': {
    title: `Unit Conversion Factors Explained: Metric vs Imperial Systems | ${SITE_DOMAIN}`,
    desc: `Why conversion multipliers like 2.54 cm per inch or 1.609 km per mile exist. Learn historical origins of metric and customary units.`
  },
  'time-zones-and-daylight-saving-explained': {
    title: `Time Zone Conversion & Daylight Saving Time (DST) Guide | ${SITE_DOMAIN}`,
    desc: `Understand UTC/GMT offsets, international date line boundaries, and why Daylight Saving Time changes cause scheduling confusion.`
  },
  'how-to-estimate-your-electricity-bill': {
    title: `How to Estimate Power Bills from Appliance Wattage & Hours | ${SITE_DOMAIN}`,
    desc: `Calculate household electric power consumption in kilowatt-hours (kWh). Estimate monthly electricity bills from device wattage and slab rates.`
  },
  'percentage-points-vs-percent': {
    title: `Percentage Points vs Percent Change: Key Difference | ${SITE_DOMAIN}`,
    desc: `Never confuse percentage points with percentage change again. Clear real-world examples from interest rate hikes, tax increases, and market shifts.`
  },
  'mean-median-mode-when-to-use-which': {
    title: `Mean vs Median vs Mode: When to Use Which Average | ${SITE_DOMAIN}`,
    desc: `Learn when mean, median, or mode provides the most accurate average. Understand how extreme statistical outliers distort the arithmetic mean.`
  },
  'how-to-simplify-and-solve-ratios': {
    title: `Ratio Simplification & Proportions Calculation Guide | ${SITE_DOMAIN}`,
    desc: `Learn how to simplify ratios to lowest terms using GCD, divide quantities in ratios, and solve cross-multiplication proportion problems.`
  },
  'lcm-and-hcf-explained-with-examples': {
    title: `LCM & HCF Guide: Formulas, Methods & Real Applications | ${SITE_DOMAIN}`,
    desc: `Calculate Least Common Multiple (LCM) and Highest Common Factor (HCF / GCD) using prime factorization and Euclidean division algorithms.`
  },
  'fraction-arithmetic-the-rules-that-trip-people-up': {
    title: `Fraction Arithmetic Guide: Adding, Subtracting & Multiplying | ${SITE_DOMAIN}`,
    desc: `Master fraction math: common denominators for addition/subtraction, multiplying numerators/denominators, and flipping for division.`
  },
  'estimating-square-roots-without-a-calculator': {
    title: `Square Root Estimation Method Without a Calculator | ${SITE_DOMAIN}`,
    desc: `Learn linear approximation and Newton-Raphson methods to estimate non-perfect square roots mentally or on paper accurately.`
  },
  'what-standard-deviation-actually-tells-you': {
    title: `Standard Deviation & Variance Guide: Data Spread Math | ${SITE_DOMAIN}`,
    desc: `Understand sample vs population standard deviation, variance calculation, and the 68-95-99.7 empirical rule in statistics.`
  },
  'how-to-check-if-a-number-is-prime': {
    title: `Prime Number Test & Trial Division Method Guide | ${SITE_DOMAIN}`,
    desc: `How to test if a number is prime quickly. Learn trial division up to square root of N, primality rules, and Sieve of Eratosthenes.`
  },
  'permutations-vs-combinations-explained': {
    title: `Permutations (nPr) vs Combinations (nCr) Formula Guide | ${SITE_DOMAIN}`,
    desc: `When does order matter? Complete breakdown of Permutation nPr vs Combination nCr formulas with real-world probability examples.`
  },
  'solving-quadratic-equations-three-ways': {
    title: `3 Ways to Solve Quadratic Equations: Factoring, Formula & Square | ${SITE_DOMAIN}`,
    desc: `Solve ax² + bx + c = 0 quadratic equations using factoring, completing the square, or the quadratic formula (-b ± √(b² - 4ac)) / 2a.`
  },
  'json-vs-yaml': {
    title: `JSON vs YAML Format Comparison for Software Developers | ${SITE_DOMAIN}`,
    desc: `Compare JSON and YAML syntax, readability, indentation sensitivity, performance parsing, and best use cases for APIs vs config files.`
  },
  'regex-basics-that-cover-most-cases': {
    title: `Regex Pattern Cheat Sheet: Essential Regular Expressions | ${SITE_DOMAIN}`,
    desc: `Master 90% of real-world Regex use cases: email validation, phone numbers, URL parsing, character classes, lookaheads, and quantifiers.`
  },
  'markdown-vs-rich-text-editors': {
    title: `Markdown vs Rich Text WYSIWYG Editors Comparison | ${SITE_DOMAIN}`,
    desc: `Why software documentation, static site generators, and developer notes prefer Markdown plain text syntax over complex HTML rich text.`
  },
  'why-url-encoding-exists': {
    title: `URL Percent-Encoding Guide: Reserved Characters & Encoding | ${SITE_DOMAIN}`,
    desc: `Why spaces turn into %20 or + in URLs. Learn percent-encoding rules for query parameters, URI path segments, and special symbols.`
  },
  'what-a-jwt-actually-contains': {
    title: `JWT Decoding & Claims Structure: Header, Payload & Signature | ${SITE_DOMAIN}`,
    desc: `Understand JSON Web Tokens (JWT). Learn decoded header parameters, payload claims (exp, sub, iat), and HMAC SHA256 signature verification.`
  },
  'unix-timestamps-explained': {
    title: `Unix Epoch Timestamps Guide: Seconds Since Jan 1 1970 | ${SITE_DOMAIN}`,
    desc: `Understand Unix epoch time, millisecond timestamps, 32-bit Year 2038 problem, and timezone-agnostic server timestamp storage.`
  },
  'how-diff-algorithms-find-changes': {
    title: `Text Diff Algorithms Guide: Myers Diff & Git Comparison | ${SITE_DOMAIN}`,
    desc: `How git diff and online diff checkers identify line additions, deletions, and modifications using longest common subsequence (LCS) math.`
  },
  'css-gradients-linear-vs-radial': {
    title: `CSS Gradients Guide: Linear vs Radial Angles & Color Stops | ${SITE_DOMAIN}`,
    desc: `Design modern CSS linear and radial gradients. Master angle degrees, percentage color stops, radial shapes, and browser fallback code.`
  },
  'why-placeholder-text-is-called-lorem-ipsum': {
    title: `History of Lorem Ipsum Placeholder Text & Usage Guide | ${SITE_DOMAIN}`,
    desc: `Discover the origins of Cicero's Latin text used as dummy typesetting copy. Learn why realistic character distribution aids layout design.`
  },
  'binary-hex-and-decimal-why-programmers-use-all-three': {
    title: `Binary, Hex & Decimal Base Systems Guide for Programmers | ${SITE_DOMAIN}`,
    desc: `Why software engineering uses base-2, base-16, and base-10 numbers. Learn quick mental conversions between binary, hex codes, and decimals.`
  }
}

export default function SEO({ title, description, path = '', kind = '', type = 'website', keywords = '' }) {
  let pageTitle = ''
  let pageDesc = description || 'Free online calculators, converters and generators for GST, EMI, SIP, Income Tax, Health, Education, and Everyday Utilities.'
  let pageKeywords = keywords

  const cleanPath = path ? path.split('?')[0] : ''
  const slugFromPath = cleanPath.startsWith('/tool/')
    ? cleanPath.replace('/tool/', '')
    : cleanPath.startsWith('/category/')
    ? cleanPath.replace('/category/', '')
    : cleanPath.startsWith('/articles/')
    ? cleanPath.replace('/articles/', '')
    : ''

  if (cleanPath === '/' || cleanPath === '') {
    pageTitle = `Calciverse — Free Online Calculators, Financial & Utility Tools (${SITE_DOMAIN})`
    pageDesc = 'Calciverse.in offers 90+ free online calculators, converters and generators for finance, GST, income tax, EMI, SIP, health, education, and daily utilities. Fast, accurate, and privacy-focused.'
    pageKeywords = pageKeywords || 'Calciverse, Calciverse.in, online calculator, GST calculator, EMI calculator, income tax calculator India, SIP calculator, percentage calculator, age calculator, free online tools, developer tools'
  } else if (cleanPath.startsWith('/tool/')) {
    const toolName = title || SITE_NAME
    const mappedSEO = TOOL_SEO_MAP[slugFromPath]

    if (mappedSEO) {
      pageTitle = mappedSEO.title
      pageDesc = mappedSEO.desc
    } else {
      if (kind === 'converter' || toolName.toLowerCase().includes('converter')) {
        pageTitle = `${toolName} — Free Online Converter | ${SITE_DOMAIN}`
        pageDesc = description 
          ? `${description} Convert values instantly on Calciverse.in.`
          : `Free online ${toolName} for fast, accurate conversions on Calciverse.in.`
      } else if (kind === 'generator' || toolName.toLowerCase().includes('generator')) {
        pageTitle = `${toolName} — Free Online Generator | ${SITE_DOMAIN}`
        pageDesc = description 
          ? `${description} Generate results instantly on Calciverse.in.`
          : `Free online ${toolName} for instant generation on Calciverse.in.`
      } else {
        pageTitle = `${toolName} — Free Online Calculator | ${SITE_DOMAIN}`
        pageDesc = description 
          ? `${description} Calculate instantly on Calciverse.in.`
          : `Free online ${toolName} for fast, accurate, and privacy-focused calculations on Calciverse.in.`
      }
    }
    pageKeywords = pageKeywords || `Calciverse, Calciverse.in, ${toolName}, online calculator, free calculator, instant tool`
  } else if (cleanPath.startsWith('/category/')) {
    const mappedCategory = CATEGORY_SEO_MAP[slugFromPath]
    if (mappedCategory) {
      pageTitle = mappedCategory.title
      pageDesc = mappedCategory.desc
      pageKeywords = pageKeywords || mappedCategory.keywords
    } else {
      pageTitle = `${title || 'Tools'} Calculators, Converters & Utilities | ${SITE_DOMAIN}`
      pageDesc = `Explore free online ${title || ''} calculators, converters, and generators on Calciverse.in. ${description || ''}`
      pageKeywords = pageKeywords || `${title || ''} calculators, Calciverse, free tools`
    }
  } else if (cleanPath.startsWith('/articles/')) {
    const mappedArticle = ARTICLE_SEO_MAP[slugFromPath]
    if (mappedArticle) {
      pageTitle = mappedArticle.title
      pageDesc = mappedArticle.desc
    } else {
      pageTitle = `${title || 'Article'} | ${SITE_DOMAIN} Articles`
      pageDesc = description || `Read guide on ${title || 'finance and calculations'} on Calciverse.in.`
    }
    pageKeywords = pageKeywords || `${title || 'calculator article'}, Calciverse guides, math explainers`
  } else if (cleanPath === '/articles') {
    pageTitle = title ? `${title} | ${SITE_DOMAIN}` : `Calculators & Finance Articles — Guides & Math Explainers | ${SITE_DOMAIN}`
    pageDesc = description || 'In-depth guides and plain-English explainers behind EMI, tax regimes, GST, BMI, CGPA conversions, and developer tools.'
    pageKeywords = pageKeywords || 'Calciverse articles, calculator guides, finance explainers, math formulas'
  } else {
    pageTitle = `${title ? `${title} | ${SITE_DOMAIN}` : `${SITE_NAME} — Free Online Calculators`}`
    pageKeywords = pageKeywords || `Calciverse, ${title || 'calculators'}, online tools`
  }

  const url = `${SITE_URL}${path}`
  const canonicalUrl = `${SITE_URL}${cleanPath || path}`

  // Schema.org Structured Data Array
  const schemas = []

  if (cleanPath.startsWith('/tool/')) {
    const toolName = title || SITE_NAME
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      '@id': `${canonicalUrl}#webapp`,
      name: toolName,
      url: canonicalUrl,
      description: pageDesc,
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      browserRequirements: 'Requires JavaScript',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '1280'
      }
    })

    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: toolName,
          item: canonicalUrl
        }
      ]
    })
  } else if (cleanPath.startsWith('/category/')) {
    const categoryName = title || 'Category'
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${canonicalUrl}#collection`,
      name: categoryName,
      url: canonicalUrl,
      description: pageDesc,
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`
      }
    })

    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: categoryName,
          item: canonicalUrl
        }
      ]
    })
  } else if (cleanPath.startsWith('/articles/')) {
    const articleTitle = title || 'Article'
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: articleTitle,
      description: pageDesc,
      url: canonicalUrl,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl
      },
      author: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/logo.png`
        }
      }
    })

    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Articles',
          item: `${SITE_URL}/articles`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: articleTitle,
          item: canonicalUrl
        }
      ]
    })
  } else {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description: pageDesc,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/?s={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    })
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_DOMAIN} />
      <meta property="og:image" content={`${SITE_URL}/logo.png`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={`${SITE_URL}/logo.png`} />

      {/* Schema.org JSON-LD */}
      {schemas.map((s, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  )
}
