// 25 Bespoke Everyday Utility Tool Guides
export const everydayToolGuides = {
  "age-calculator": {
    overview: "Calculates exact chronological age in years, months, and days, including leap years, total weeks, days, hours, and countdown to your next birthday.",
    formula: "Exact Age = Current_Date(Y, M, D) - Birth_Date(Y, M, D) accounting for month lengths and leap years",
    explanation: "Walks through the Gregorian calendar month by month, resolving variable month lengths (28, 29, 30, 31 days) to prevent 1-day rounding discrepancies.",
    example: {
      title: "Worked Example: Born on August 15, 1995 evaluated on August 15, 2026",
      inputs: "Birth Date = August 15, 1995 | Current Date = August 15, 2026",
      steps: [
        "Year subtraction: 2026 - 1995 = 31 Years",
        "Month subtraction: 8 - 8 = 0 Months",
        "Day subtraction: 15 - 15 = 0 Days",
        "Total Days Lived: ~11,323 days (accounting for 8 leap years)"
      ],
      summary: "Exact Age = 31 Years, 0 Months, 0 Days | Total Days = 11,323 Days | Next Birthday: Today!"
    },
    metricsText: "Calendar age calculations must walk through actual historical calendar months rather than dividing total days by 365.25 to prevent month-end discrepancies.",
    useCases: [
      "Government Job & Exam Eligibility: Verify exact age in years, months, and days against official UPSC/SSC notification cutoffs.",
      "Insurance Policy Underwriting: Determine exact age nearest birthday for life insurance premium calculations.",
      "Pediatric Milestone Tracking: Track infant age in exact weeks and months for vaccination schedules."
    ],
    commonMistakes: [
      "Dividing total elapsed days by 365, which miscalculates age by ignoring leap years.",
      "Assuming all months have 30 days when calculating month differences for birthdays on the 31st.",
      "Ignoring time zone differences when calculating age for individuals born near midnight."
    ],
    faqs: [
      { question: "Why do some age calculators give different day counts?", answer: "Calculators handle month-end dates (like born Jan 31) differently: some roll to Feb 28, while others roll forward into March." },
      { question: "How does the calculator account for leap years?", answer: "It checks each February in the elapsed date range for leap year criteria (divisible by 4, not 100 unless divisible by 400)." },
      { question: "What is 'age nearest birthday' in insurance?", answer: "If you are 29 years and 7 months old, insurers treat you as 30 years old for premium calculations." }
    ],
    sources: [{ name: "International Organization for Standardization (ISO 8601)", url: "https://www.iso.org" }]
  },

  "date-difference-calculator": {
    overview: "Calculates the exact elapsed duration between two calendar dates in years, months, days, total weeks, and business days.",
    formula: "Duration = Date_2 - Date_1 in Unix milliseconds / (1000 × 60 × 60 × 24)",
    explanation: "Calculates total calendar days and decomposes the difference into years, months, and remaining days.",
    example: {
      title: "Worked Example: Elapsed Time between Jan 1, 2026 and Dec 31, 2026",
      inputs: "Start Date = January 1, 2026 | End Date = December 31, 2026",
      steps: [
        "Calculate total calendar span = 364 days",
        "Total weeks = 52 weeks and 0 days",
        "Working days (excluding Saturdays and Sundays) = 261 business days"
      ],
      summary: "Duration = 364 Days (11 Months, 30 Days) | 52 Weeks | 261 Business Days"
    },
    metricsText: "The Gregorian calendar repeats on a 400-year cycle consisting of 146,097 days, which averages 365.2425 days per year.",
    useCases: [
      "Contract Duration Auditing: Calculate exact contract tenure, rental lease duration, and warranty periods.",
      "Legal Limitation Deadlines: Verify that court filings and insurance claims fall strictly within statutory limitation periods.",
      "Project Management: Plan milestone durations, sprints, and deliverable handover dates."
    ],
    commonMistakes: [
      "Forgetting whether the end date is inclusive or exclusive (inclusive adds 1 extra day to the span).",
      "Confusing total calendar days with working business days (excluding weekends).",
      "Ignoring daylight saving time transitions that cause 23-hour or 25-hour days."
    ],
    faqs: [
      { question: "Does the date difference include both start and end dates?", answer: "By default, it measures the interval between dates; you can toggle the 'Include end date' option to count both days inclusively." },
      { question: "How are leap years handled?", answer: "The calculator accurately accounts for February 29th in all leap years falling within the selected date span." },
      { question: "Can I calculate business days excluding weekends?", answer: "Yes, the tool provides both total calendar days and net business days (Monday through Friday)." }
    ],
    sources: [{ name: "US Naval Observatory Astronomical Applications", url: "https://aa.usno.navy.mil" }]
  },

  "password-generator": {
    overview: "Generates cryptographically secure, high-entropy random passwords with customizable character sets, lengths, and symbols using the Web Crypto API.",
    formula: "Password = Sample_Uniform_Crypto_Bytes(Character_Set, Length)",
    explanation: "Uses crypto.getRandomValues() to sample from uppercase, lowercase, numbers, and symbols without modulo bias.",
    example: {
      title: "Worked Example: 16-Character Secure Master Password",
      inputs: "Length = 16 Characters | Uppercase: Yes | Lowercase: Yes | Numbers: Yes | Symbols: Yes",
      steps: [
        "Pool size = 26 + 26 + 10 + 32 = 94 possible characters.",
        "Entropy per character = log2(94) = 6.55 bits.",
        "Total Password Entropy = 16 × 6.55 = 104.8 bits (Mathematically Uncrackable via Brute Force)."
      ],
      summary: "Length = 16 | Entropy = 105 Bits | Strength = Very Strong | Generation = 100% Client-Side"
    },
    metricsText: "Passwords with over 80 bits of entropy take billions of years to crack using modern GPU cluster brute-force attacks.",
    useCases: [
      "Master Password Creation: Generate high-entropy master passwords for 1Password, Bitwarden, or Apple Keychain.",
      "Database & Server Credentials: Create secure, random passwords for MySQL root users, API tokens, and SSH keys.",
      "WiFi Security Keys: Generate 64-character WPA3 pre-shared keys for commercial wireless networks."
    ],
    commonMistakes: [
      "Using Math.random() for passwords (Math.random() is pseudorandom and cryptographically predictable).",
      "Reusing the same password across multiple online accounts (a single leak compromises all accounts).",
      "Creating passwords containing personal names, birth years, or dictionary words."
    ],
    faqs: [
      { question: "Why is Math.random() unsafe for passwords?", answer: "Math.random() is not cryptographically secure; attackers can observe previous outputs and predict future generated passwords." },
      { question: "Are passwords generated on Calciverse stored anywhere?", answer: "No. Passwords are generated strictly inside your browser's local sandbox memory using crypto.getRandomValues()." },
      { question: "How long should a strong password be?", answer: "Cybersecurity experts recommend a minimum of 16 characters with mixed uppercase, lowercase, numbers, and special symbols." }
    ],
    sources: [{ name: "NIST Special Publication 800-63B (Digital Identity Guidelines)", url: "https://pages.nist.gov/800-63-3/sp800-63b.html" }]
  },

  "qr-code-generator": {
    overview: "Generates high-resolution, downloadable QR codes for website URLs, plain text, WiFi logins, UPI payments, and vCards with instant PNG/SVG export.",
    formula: "QR_Matrix = Encode_Reed_Solomon(Payload_Text, Error_Correction_Level_L_M_Q_H)",
    explanation: "Encodes alphanumeric data into 2D barcode matrices with built-in Reed-Solomon error correction to withstand up to 30% physical damage.",
    example: {
      title: "Worked Example: Generating UPI Payment QR Code",
      inputs: "Type = UPI Payment | Payee VPA = 'calciverse@upi' | Payee Name = 'Calciverse' | Amount = ₹500",
      steps: [
        "Format UPI URI string: 'upi://pay?pa=calciverse@upi&pn=Calciverse&am=500&cu=INR'",
        "Encode data with Error Correction Level M (15% redundancy).",
        "Render clean SVG/PNG QR barcode matrix with position detection markers."
      ],
      summary: "QR Code Generated | Error Correction: Level M | Compatible with all Banking & Camera Apps"
    },
    metricsText: "Error Correction Level H allows a QR code to be scanned successfully even if up to 30% of the symbol surface is smudged, torn, or overlaid with a brand logo.",
    useCases: [
      "Restaurant Menus & Tables: Create instant touchless table QR codes linking to online digital food menus.",
      "Retail UPI Payments: Generate print-ready counter payment QR codes for GPay, PhonePe, and Paytm.",
      "WiFi Network Sharing: Allow guests to connect to office or home WiFi networks automatically without typing passwords."
    ],
    commonMistakes: [
      "Creating low-contrast QR codes (light gray dots on white) that smartphone camera sensors struggle to focus on.",
      "Overloading QR codes with massive paragraphs of text, creating dense, unreadable pixel clusters.",
      "Printing QR codes on highly reflective glossy paper or distorted curved surfaces."
    ],
    faqs: [
      { question: "Do QR codes generated on Calciverse expire?", answer: "No. These are static QR codes; the encoded data is permanently baked into the barcode pattern and will work forever." },
      { question: "What is QR code Error Correction?", answer: "A mathematical algorithm (Reed-Solomon) that embeds redundant data packets, allowing damaged or partially covered QR codes to be read." },
      { question: "How do I format a WiFi QR code?", answer: "The format is: WIFI:T:WPA;S:MyNetworkName;P:MyPassword;; which smartphone cameras detect automatically." }
    ],
    sources: [{ name: "ISO/IEC 18004 QR Code Specification", url: "https://www.iso.org" }]
  },

  "uuid-generator": {
    overview: "Generates cryptographically random RFC 4122 Version 4 Universally Unique Identifiers (UUIDs / GUIDs) in bulk with uppercase and hyphen formatting toggles.",
    formula: "UUID v4 = xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx (where y is 8, 9, a, or b)",
    explanation: "Constructs 128-bit identifiers consisting of 32 hexadecimal digits displayed in 5 groups separated by hyphens (8-4-4-4-12 format).",
    example: {
      title: "Worked Example: Generating RFC 4122 v4 UUID",
      inputs: "Version = UUID v4 (Cryptographic Random) | Format = Hyphenated Lowercase",
      steps: [
        "Generate 16 cryptographically secure random bytes.",
        "Set 4 bits of the version field to 0100 (version 4).",
        "Set 2 bits of the variant field to 10 (RFC 4122 variant).",
        "Output string: e.g. 'c107130e-505d-46a7-9a72-329086051064'"
      ],
      summary: "UUID v4 Generated | 128 Bits | Collision Probability: ~1 in 10^37"
    },
    metricsText: "The total number of possible UUID v4 identifiers is 2^122 (5.3 × 10^36); generating 1 billion UUIDs every second for 85 years would still result in virtually zero collisions.",
    useCases: [
      "Database Primary Keys: Use UUIDs for distributed database record keys to eliminate auto-incrementing ID collision risks.",
      "Session & Request Tracing: Assign unique correlation IDs to incoming HTTP requests across microservice architectures.",
      "Decoupled System Architecture: Generate unique entity IDs on client devices before syncing to central servers."
    ],
    commonMistakes: [
      "Using Math.random() to create UUIDs (which increases collision risk and violates RFC 4122 randomness standards).",
      "Indexing unsorted UUID v4 as clustered primary keys in MySQL InnoDB without understanding B-Tree fragmentation.",
      "Confusing UUID v4 (pure random) with UUID v1 (timestamp and MAC address based) or UUID v5 (namespace SHA-1)."
    ],
    faqs: [
      { question: "What is the difference between UUID and GUID?", answer: "They are synonyms; UUID (Universally Unique Identifier) is the open IETF standard, while GUID (Globally Unique Identifier) is Microsoft's implementation term." },
      { question: "Can two UUID v4 values ever collide?", answer: "While theoretically possible, the probability is so astronomically low (1 in 2^122) that it is effectively zero in real-world computing." },
      { question: "What is UUID v7?", answer: "A modern UUID standard that combines a 48-bit timestamp with random bits, making it time-sortable and ideal for database indexing." }
    ],
    sources: [{ name: "RFC 4122 A Universally Unique Identifier (UUID) URN Namespace", url: "https://www.ietf.org/rfc/rfc4122.txt" }]
  },

  "random-number-generator": {
    overview: "Generates cryptographically unbiased random numbers, rolls virtual dice, picks lottery integers, and shuffles lists using the Web Crypto API.",
    formula: "Random_Integer = Min + Math.floor((Crypto_Random_Uint32 / 4294967296) × (Max - Min + 1))",
    explanation: "Eliminates modulo bias by sampling directly from the browser's hardware-seeded cryptographic random byte stream.",
    example: {
      title: "Worked Example: Rolling a Fair 6-Sided Die",
      inputs: "Min = 1 | Max = 6 | Quantity = 1 | Allow Duplicates = Yes",
      steps: [
        "Sample 32-bit unsigned random integer via crypto.getRandomValues().",
        "Normalize to uniform distribution scale between 1 and 6.",
        "Output: 4"
      ],
      summary: "Range = [1, 6] | Generated Value = 4 | Distribution = Cryptographically Unbiased"
    },
    metricsText: "Standard programming Math.random() is pseudorandom and predictable; cryptographic RNG utilizes operating system hardware entropy for true unpredictability.",
    useCases: [
      "Contest & Giveaway Winner Selection: Conduct transparent, provably fair prize draws and giveaways.",
      "Tabletop Gaming & Dice Rolling: Roll polyhedral RPG dice (d6, d20, d100) for board games and roleplaying.",
      "Statistical Sampling: Select randomized control group sample indices from larger population lists."
    ],
    commonMistakes: [
      "Using simple modulo division (rand % range), which introduces modulo bias favoring lower numbers.",
      "Assuming random numbers will not produce repeating sequences (true randomness naturally includes consecutive duplicates).",
      "Using pseudorandom numbers for lottery drawings or cryptographic key generation."
    ],
    faqs: [
      { question: "What is modulo bias in random number generation?", answer: "An error where dividing by a range that doesn't evenly divide the RNG's bit size causes smaller numbers to be selected slightly more often." },
      { question: "Are these random numbers fair for official contest draws?", answer: "Yes, because numbers are generated using the browser's native cryptographic hardware randomness API." },
      { question: "Can I generate unique non-repeating numbers?", answer: "Yes, toggle the 'No Duplicates' option to generate unique picks without replacement (like lottery draws)." }
    ],
    sources: [{ name: "W3C Web Cryptography API (getRandomValues)", url: "https://www.w3.org/TR/WebCryptoAPI/" }]
  },

  "barcode-generator": {
    overview: "Generates standard retail and industrial 1D barcodes (Code 128, EAN-13, UPC-A, Code 39) with custom label text and high-resolution SVG/PNG downloads.",
    formula: "Barcode_Pattern = Encode_Symbology(Data_String, Check_Digit_Algorithm)",
    explanation: "Encodes alphanumeric data into alternating dark bars and light spaces conforming to GS1 international retail standards.",
    example: {
      title: "Worked Example: Generating EAN-13 Retail Barcode",
      inputs: "Symbology = EAN-13 | 12-Digit Base = 890123456789",
      steps: [
        "Calculate Modulo-10 checksum digit on alternating 1x and 3x digit weights.",
        "Checksum digit calculated = 4; Full 13-digit sequence = 8901234567894.",
        "Render guard bars, center separators, and optical bar-space modules."
      ],
      summary: "Symbology = EAN-13 | 13 Digits | Valid Checksum | Print-Ready SVG/PNG"
    },
    metricsText: "Code 128 is the most versatile 1D barcode standard, capable of encoding all 128 ASCII characters with high data density.",
    useCases: [
      "Retail Inventory Management: Generate scannable product packaging barcodes for supermarket checkout scanners.",
      "Warehouse Asset Tracking: Print Code 128 barcode labels for storage bins, pallets, and shipping cartons.",
      "Library Book Cataloging: Print durable ISBN/EAN identification barcodes for book management."
    ],
    commonMistakes: [
      "Printing barcodes too small or low-resolution, which causes handheld laser scanners to fail reads.",
      "Entering an incorrect check digit for EAN-13 or UPC-A barcodes (our tool computes check digits automatically).",
      "Failing to maintain the mandatory 'quiet zone' blank margins on the left and right of the barcode."
    ],
    faqs: [
      { question: "What is the difference between Code 128 and EAN-13?", answer: "EAN-13 is strictly a 13-digit numeric barcode used for global retail products; Code 128 is an industrial barcode that encodes both letters and numbers." },
      { question: "What is the quiet zone on a barcode?", answer: "The clear, unprinted white margin on both sides of the barcode bars required by laser scanners to recognize the start and end of the barcode." },
      { question: "Can barcode scanners read barcodes displayed on smartphone screens?", answer: "Optical image-based (2D) scanners can read screens easily; older red laser scanners struggle with reflective phone displays." }
    ],
    sources: [{ name: "GS1 Global Standards for Barcodes", url: "https://www.gs1.org/standards/barcodes" }]
  },

  "discount-calculator": {
    overview: "Calculates final sale prices, net dollar savings, and stacked double discounts for retail clearance sales and shopping promotions.",
    formula: "Discount Amount = Original Price × (Discount Rate / 100) | Final Sale Price = Original Price - Discount Amount",
    explanation: "For stacked discounts (e.g. 20% off plus extra 10% off): Second discount applies to the already discounted price, not the original base price.",
    example: {
      title: "Worked Example: ₹2,500 Jacket on 30% Clearance Sale with 5% GST",
      inputs: "Original Price = ₹2,500 | Discount = 30% | Sales Tax / GST = 5%",
      steps: [
        "Discount savings = ₹2,500 × 0.30 = ₹750",
        "Discounted sale price = ₹2,500 - ₹750 = ₹1,750",
        "Add 5% GST = ₹1,750 × 0.05 = ₹87.50",
        "Final checkout price = ₹1,750 + ₹87.50 = ₹1,837.50"
      ],
      summary: "Original = ₹2,500 | Savings = ₹750 (30%) | Final Price = ₹1,837.50"
    },
    metricsText: "Stacked discounts do not add directly: a 50% discount plus an extra 20% off equals a 60% total discount, not 70%.",
    useCases: [
      "Shopping Clearance Evaluation: Verify cash register discounts and coupon code savings during festival sales.",
      "Retail Margin Setting: Calculate net proceeds when offering seasonal clearance promotions on aged inventory.",
      "Compare Promotions: Compare 'Buy 1 Get 1 Free' (50% off) against 'Buy 2 Get 1 Free' (33.3% off)."
    ],
    commonMistakes: [
      "Adding stacked discount percentages together directly (e.g. 20% + 10% = 30% is incorrect; it is 28% net).",
      "Forgetting that sales tax or GST is charged on the discounted price, not the original MRP.",
      "Miscalculating 'Buy 2 Get 1 Free' as 50% off (it represents 3 items for the price of 2 = 33.3% off)."
    ],
    faqs: [
      { question: "How does 'Buy 1 Get 1 Free' translate to a percentage discount?", answer: "Buy 1 Get 1 Free equals a 50% discount across the two items." },
      { question: "How do stacked double discounts work?", answer: "The first discount is deducted from original price; the second discount is deducted from that resulting lower subtotal." },
      { question: "Is sales tax calculated before or after the discount?", answer: "Sales tax is calculated on the final discounted price after all promotional discounts have been deducted." }
    ],
    sources: [{ name: "Federal Trade Commission (FTC) Guides Against Deceptive Pricing", url: "https://www.ftc.gov" }]
  },

  "tip-calculator": {
    overview: "Calculates dining gratuity amounts and splits restaurant bills evenly or custom among friends with tax-inclusive or tax-exclusive tipping toggles.",
    formula: "Tip Amount = Bill Subtotal × (Tip % / 100) | Per Person Split = (Bill Subtotal + Tip) / Number of People",
    explanation: "Standard tipping etiquette suggests tipping on the pre-tax food and beverage subtotal rather than the post-tax bill total.",
    example: {
      title: "Worked Example: ₹3,000 Dinner Bill Split Among 4 Friends with 10% Tip",
      inputs: "Bill Subtotal = ₹3,00,0? No, ₹3,000 | Tip Rate = 10% | People = 4",
      steps: [
        "Tip amount = ₹3,000 × 0.10 = ₹300",
        "Total bill including tip = ₹3,000 + ₹300 = ₹3,300",
        "Split per person = ₹3,300 / 4 = ₹825 per person"
      ],
      summary: "Bill = ₹3,000 | Tip (10%) = ₹300 | Total = ₹3,300 | Each Person Pays = ₹825"
    },
    metricsText: "In India, voluntary tipping is customary (5-10%), but mandatory 'Service Charges' added directly by restaurants are legally voluntary per CCPA consumer protection guidelines.",
    useCases: [
      "Dining Bill Splitting: Split group restaurant bills evenly among dinner guests without awkward mental math.",
      "International Travel Tipping: Adjust tipping percentages for foreign destinations (e.g. 15-20% in US/Canada, 0% in Japan).",
      "Delivery & Service Gratuity: Calculate fair tip gratuities for food delivery drivers, salon stylists, and cab drivers."
    ],
    commonMistakes: [
      "Tipping on top of a bill that already includes a mandatory 10% restaurant 'Service Charge'.",
      "Tipping on the post-tax total rather than the pre-tax food subtotal.",
      "Tipping in countries like Japan where tipping is considered culturally improper or offensive."
    ],
    faqs: [
      { question: "What is standard tipping etiquette in the United States?", answer: "Standard US dining tips range from 15% to 20% for good service, and 20%+ for exceptional service." },
      { question: "Can Indian restaurants force customers to pay a Service Charge?", answer: "No. The Central Consumer Protection Authority (CCPA) declared mandatory service charges illegal; customers can request their removal." },
      { question: "Should you tip on alcohol and wine bottles?", answer: "Yes, standard convention is to tip on the full food and drink subtotal, though some tip 10% on expensive wine bottles." }
    ],
    sources: [{ name: "Central Consumer Protection Authority (CCPA) Guidelines", url: "https://consumeraffairs.nic.in" }]
  },

  "fuel-cost-calculator": {
    overview: "Estimates total fuel consumption, trip gasoline costs, and per-passenger travel shares based on trip distance, fuel economy, and fuel price per liter.",
    formula: "Fuel Consumed (Liters) = Distance (km) / Mileage (km/L) | Total Cost = Fuel Consumed × Fuel Price per Liter",
    explanation: "Converts distance and vehicle fuel efficiency into total fuel liters and splits travel costs across carpool passengers.",
    example: {
      title: "Worked Example: 450 km Road Trip with 15 km/L Car Mileage at ₹102/L Petrol",
      inputs: "Distance = 450 km | Mileage = 15 km/L | Petrol Price = ₹102/Liter | Passengers = 3",
      steps: [
        "Fuel liters consumed = 450 / 15 = 30.0 Liters",
        "Total fuel cost = 30 Liters × ₹102 = ₹3,060",
        "Per-passenger carpool split = ₹3,060 / 3 = ₹1,020 per person"
      ],
      summary: "Distance = 450 km | Fuel Used = 30 Liters | Total Cost = ₹3,060 | Cost per Person = ₹1,020"
    },
    metricsText: "Driving at 90 km/h instead of 120 km/h on highways improves car fuel economy by approximately 15% to 20% due to reduced aerodynamic drag.",
    useCases: [
      "Road Trip Cost Sharing: Calculate fair fuel and toll expense splits among friends on weekend highway road trips.",
      "Daily Commute Budgeting: Estimate monthly fuel expenditures for driving to work vs using public transit.",
      "Fleet Expense Reimbursement: Submit accurate mileage reimbursement claims for business travel."
    ],
    commonMistakes: [
      "Using manufacturer ARAI claimed mileage instead of realistic real-world stop-and-go city mileage (which is 20-30% lower).",
      "Forgetting highway toll plaza charges, which can add 20% to 30% to total road trip expenditures.",
      "Ignoring the fuel efficiency penalty of driving with under-inflated tires or heavily loaded roof cargo racks."
    ],
    faqs: [
      { question: "How does air conditioning impact car mileage?", answer: "Running the vehicle AC in hot city traffic can reduce fuel economy by 5% to 15%." },
      { question: "How do I calculate my car's true real-world mileage?", answer: "Fill your tank full, reset the trip meter, drive normally, fill up full again, and divide trip kilometers by the liters pumped." },
      { question: "How do I convert MPG to km/L?", answer: "1 US MPG equals approximately 0.425 km/L (e.g. 30 MPG = 12.75 km/L)." }
    ],
    sources: [{ name: "U.S. Department of Energy (Fuel Economy)", url: "https://www.fueleconomy.gov" }]
  },

  "word-counter": {
    overview: "Analyzes text in real time, calculating word count, character count (with and without spaces), paragraph count, reading time, and keyword density.",
    formula: "Word Count = Matches of \\b\\S+\\b | Reading Time = Words / 200 words per minute",
    explanation: "Standard average silent adult reading speed is 200 to 250 words per minute; speaking presentation speed is roughly 130 to 150 WPM.",
    example: {
      title: "Worked Example: Analyzing a 600-Word Blog Post Article",
      inputs: "Article Text = 600 Words | Total Characters = ~3,800 characters",
      steps: [
        "Count word tokens by whitespace delimiters = 600 Words",
        "Count characters with spaces = 3,800 characters; without spaces = 3,200 characters",
        "Estimated silent reading duration = 600 / 200 = 3.0 Minutes",
        "Estimated spoken presentation duration = 600 / 130 = 4.6 Minutes"
      ],
      summary: "Words = 600 | Characters = 3,800 | Reading Time = 3 min | Speaking Time = 4.6 min"
    },
    metricsText: "In-depth blog articles between 1,200 and 2,000 words historically achieve higher organic search visibility and social media shares.",
    useCases: [
      "Essay & Academic Submissions: Ensure college essays stay within strict minimum and maximum word limits.",
      "Social Media Character Limits: Check post lengths for X/Twitter (280 chars), LinkedIn, and Instagram captions.",
      "SEO Meta Tag Optimization: Keep meta titles under 60 characters and meta descriptions under 160 characters."
    ],
    commonMistakes: [
      "Counting hyphenated words as two words or one word inconsistently across different word processors.",
      "Including footnotes, bibliographies, and title headers when checking strict essay word limits.",
      "Exceeding character limits on social media by forgetting that URLs count as a fixed character length."
    ],
    faqs: [
      { question: "What is the character limit for Twitter / X?", answer: "Standard accounts have a 280-character limit; X Premium subscribers can post long-form content up to 25,000 characters." },
      { question: "How fast does an average adult read?", answer: "The average adult reads silently at approximately 200 to 250 words per minute (WPM)." },
      { question: "How long should a standard blog post be for SEO?", answer: "Most search engines favor comprehensive articles between 1,000 and 2,000 words that thoroughly address user search intent." }
    ],
    sources: [{ name: "Purdue Online Writing Lab (OWL)", url: "https://owl.purdue.edu" }]
  },

  "case-converter": {
    overview: "Transforms text between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, kebab-case, and Constant Case instantly.",
    formula: "Transformed_Text = String_Mapping(Text, Target_Casing_Rules)",
    explanation: "Handles Unicode capitalization rules, converts delimiters (spaces to underscores or hyphens), and formats code identifiers.",
    example: {
      title: "Worked Example: Converting 'hello world from calciverse'",
      inputs: "Input: 'hello world from calciverse'",
      steps: [
        "Title Case: 'Hello World From Calciverse'",
        "camelCase: 'helloWorldFromCalciverse'",
        "kebab-case: 'hello-world-from-calciverse'",
        "CONSTANT_CASE: 'HELLO_WORLD_FROM_CALCIVERSE'"
      ],
      summary: "Case Transformation Complete | 8 Casing Styles Supported | Instant Copy"
    },
    metricsText: "In programming conventions: camelCase is standard for JavaScript variables, snake_case for Python, and kebab-case for URL slugs and CSS classes.",
    useCases: [
      "Accidental Caps Lock Recovery: Fix sentences accidentally typed with the Caps Lock key engaged without retyping.",
      "Code Refactoring: Convert database snake_case column names into JavaScript camelCase variable properties.",
      "Headline Formatting: Standardize publication article titles conforming to Associated Press (AP) or Chicago title case rules."
    ],
    commonMistakes: [
      "Capitalizing small minor articles and prepositions (a, an, the, in, on, at, of) in Title Case headlines.",
      "Using camelCase in URL paths where search engine crawlers prefer hyphen-separated kebab-case.",
      "Manually re-typing text when automated case conversion tools can format thousands of words in one click."
    ],
    faqs: [
      { question: "What is the difference between camelCase and PascalCase?", answer: "camelCase starts with a lowercase letter (myVariable); PascalCase starts with an uppercase letter (MyVariable, used for classes)." },
      { question: "What words should be lowercase in Title Case?", answer: "Articles (a, an, the), coordinating conjunctions (and, but, for, nor, or), and short prepositions under 4 letters (in, on, to, of)." },
      { question: "What is kebab-case used for?", answer: "kebab-case uses hyphens between words; it is standard for CSS class names, HTML attributes, and web URL slugs." }
    ],
    sources: [{ name: "Chicago Manual of Style (Capitalization Rules)", url: "https://www.chicagomanualofstyle.org" }]
  },

  "typing-speed-test": {
    overview: "Measures typing speed in Words Per Minute (WPM) and Gross WPM, accuracy percentage, and net character errors over 1-minute, 3-minute, and 5-minute typing sprints.",
    formula: "Net WPM = [(Total Characters Typed / 5) - Uncorrected Errors] / Time in Minutes",
    explanation: "In standardized typing tests, 1 word is defined as exactly 5 keystrokes (including spaces and punctuation). Accuracy = (Correct Characters / Total) × 100.",
    example: {
      title: "Worked Example: Typing 300 Characters in 1 Minute with 2 Errors",
      inputs: "Characters Typed = 300 | Uncorrected Errors = 2 | Duration = 1 Minute",
      steps: [
        "Gross Words = 300 / 5 = 60 Gross WPM",
        "Penalty deduction for 2 errors = 60 - 2 = 58 Net WPM",
        "Accuracy percentage = [(300 - 2) / 300] × 100 = 99.33%"
      ],
      summary: "Speed = 58 WPM | Accuracy = 99.3% | Rating = Fast / Professional Typist"
    },
    metricsText: "Average touch-typing speed is approximately 40 WPM; professional transcriptionists, legal secretaries, and competitive coders regularly exceed 75 to 100+ WPM.",
    useCases: [
      "Employment Skill Testing: Test typing speed requirements for secretarial, transcription, and customer service job interviews.",
      "Touch Typing Practice: Measure daily typing speed and accuracy improvements while learning proper home-row finger placement.",
      "Ergonomic Keyboard Benchmarking: Compare typing speed between standard laptop keyboards and mechanical split ergonomic keyboards."
    ],
    commonMistakes: [
      "Sacrificing accuracy for raw speed (uncorrected errors penalize net WPM score heavily).",
      "Looking down at the keyboard keys instead of maintaining touch-typing visual focus on the screen.",
      "Resting wrists heavily on the desk surface instead of maintaining floating, neutral wrist alignment."
    ],
    faqs: [
      { question: "Why is a word defined as 5 characters in typing tests?", answer: "Because real words vary in length; standardizing 1 word as 5 keystrokes provides an objective, consistent speed measurement." },
      { question: "What is considered a good typing speed?", answer: "Average is 35-40 WPM; 50-60 WPM is good; 70-80 WPM is fast; over 90 WPM is considered elite speed." },
      { question: "How can I increase my typing speed by 20 WPM?", answer: "Practice touch typing on home-row keys (ASDF JKL;) without looking down, focusing on accuracy first before increasing speed." }
    ],
    sources: [{ name: "Typing Certification Standards", url: "https://www.typing.com" }]
  },

  "unit-converter": {
    overview: "Converts measurements across length, mass/weight, temperature, area, volume, digital storage, speed, and pressure with bidirectional calculation.",
    formula: "Target_Unit = (Source_Value × Source_To_Base_Factor) / Target_To_Base_Factor",
    explanation: "Converts units through SI base standards (meters for length, kilograms for mass, Kelvin for temperature) with high floating-point precision.",
    example: {
      title: "Worked Example: Converting 10 Kilometers to Miles",
      inputs: "Length = 10 Kilometers | Target = Miles",
      steps: [
        "Base conversion factor: 1 mile = 1.609344 kilometers",
        "Calculation: 10 / 1.609344 = 6.2137 miles",
        "Metric equivalent in meters: 10 × 1,000 = 10,000 meters"
      ],
      summary: "10 Kilometers = 6.2137 Miles | 10,000 Meters | 32,808 Feet"
    },
    metricsText: "In 1999, NASA lost the $125 million Mars Climate Orbiter spacecraft because one engineering team used imperial units while another used metric SI units.",
    useCases: [
      "International Travel: Convert kilometers to miles, Celsius to Fahrenheit, and liters to gallons.",
      "Cooking & Recipes: Convert fluid ounces, tablespoons, and cups into milliliters and grams.",
      "Engineering & Construction: Translate CAD drawings between metric millimeters and architectural feet/inches."
    ],
    commonMistakes: [
      "Using linear scaling for temperature conversions (converting Celsius to Fahrenheit requires adding 32 after scaling: F = C × 1.8 + 32).",
      "Confusing US liquid gallons (3.785 L) with British Imperial gallons (4.546 L).",
      "Confusing decimal gigabytes (1,000 MB) with binary gibibytes (1,024 MiB) in digital storage."
    ],
    faqs: [
      { question: "How do you convert Celsius to Fahrenheit in your head?", answer: "Quick mental shortcut: multiply Celsius by 2 and add 30 (e.g. 20°C × 2 + 30 ≈ 70°F; exact is 68°F)." },
      { question: "What is the difference between mass and weight?", answer: "Mass is the amount of matter in an object (measured in kilograms); weight is the gravitational force acting on that mass (measured in Newtons)." },
      { question: "How many feet are in a meter?", answer: "1 meter equals approximately 3.28084 feet (roughly 3 feet and 3.37 inches)." }
    ],
    sources: [{ name: "NIST Guide to the SI (International System of Units)", url: "https://www.nist.gov/pml/special-publication-811" }]
  },

  "time-zone-converter": {
    overview: "Converts meeting times across worldwide international time zones, calculating UTC offsets, military time, and Daylight Saving Time (DST) shifts.",
    formula: "Target_Time = UTC_Time + Target_Timezone_Offset (accounting for active DST)",
    explanation: "Converts between IST (UTC+5:30), EST/EDT (UTC-5/-4), PST/PDT (UTC-8/-7), GMT/BST (UTC+0/+1), and Australian time zones.",
    example: {
      title: "Worked Example: 7:00 PM Indian Standard Time (IST) to US Eastern Time (EDT)",
      inputs: "Source Time = 7:00 PM IST (UTC+5:30) | Target Zone = US Eastern Daylight Time (UTC-4:00)",
      steps: [
        "Calculate total time difference: (+5:30) - (-4:00) = 9 hours and 30 minutes",
        "Subtract difference: 7:00 PM IST - 9 hours 30 minutes = 9:30 AM EDT (Same Day)"
      ],
      summary: "7:00 PM IST = 9:30 AM US Eastern Time (EDT) | Time Gap = 9.5 Hours Behind"
    },
    metricsText: "Indian Standard Time (IST) is unique: it is UTC+5:30, carrying a 30-minute fractional offset and never observing seasonal Daylight Saving Time.",
    useCases: [
      "International Meeting Scheduling: Schedule cross-border client conference calls across New York, London, and Bengaluru.",
      "Flight & Travel Coordination: Coordinate flight departure and arrival times across changing global time zones.",
      "Global Live Event Broadcasts: Determine exact local kickoff times for sports events and product keynotes."
    ],
    commonMistakes: [
      "Forgetting Daylight Saving Time (DST) shifts in the US and Europe (which shifts time differences by 1 hour twice a year).",
      "Forgetting the 30-minute fractional offset when converting Indian Standard Time (UTC+5:30).",
      "Misinterpreting dates when international flights cross the International Date Line (gaining or losing an entire calendar day)."
    ],
    faqs: [
      { question: "Does India observe Daylight Saving Time?", answer: "No. India maintains a constant single time zone (Indian Standard Time, UTC+5:30) throughout the entire year without seasonal clock changes." },
      { question: "When do the US and Europe change their clocks for Daylight Saving?", answer: "The US springs forward on the second Sunday of March and falls back on the first Sunday of November; Europe changes on the last Sundays of March and October." },
      { question: "What is UTC?", answer: "Coordinated Universal Time: the primary global time standard by which the world regulates clocks and time zones." }
    ],
    sources: [{ name: "IANA Time Zone Database (tzdb)", url: "https://www.iana.org/time-zones" }]
  },

  "time-duration-calculator": {
    overview: "Adds and subtracts time intervals (hours, minutes, seconds) to calculate total elapsed work hours, shift durations, and finish times.",
    formula: "Total Duration = (End_Seconds - Start_Seconds) decomposed into Hours, Minutes, Seconds",
    explanation: "Handles overnight shifts spanning past midnight, multiple shift segment additions, and lunch break deductions.",
    example: {
      title: "Worked Example: Work Shift from 9:15 AM to 5:45 PM with 45-Minute Lunch Break",
      inputs: "Start Time = 9:15 AM | End Time = 5:45 PM | Break Deduction = 45 Minutes",
      steps: [
        "Convert to 24-hour time: 9:15 to 17:45",
        "Gross elapsed duration: 17:45 - 9:15 = 8 Hours, 30 Minutes",
        "Subtract 45-minute lunch break: 8 Hours 30 Min - 45 Min = 7 Hours, 45 Minutes",
        "Decimal hours equivalent = 7.75 Hours"
      ],
      summary: "Gross Time = 8h 30m | Lunch Break = 45m | Billable Hours = 7h 45m (7.75 Hours)"
    },
    metricsText: "To convert minutes into decimal billing hours, divide minutes by 60 (e.g. 45 minutes = 45 / 60 = 0.75 hours).",
    useCases: [
      "Timesheet Payroll Tracking: Calculate exact weekly billable hours from daily punch-in and punch-out logs.",
      "Flight Layover Planning: Measure connecting airport transit durations and total journey travel time.",
      "Audio & Video Editing: Calculate total running lengths of podcast tracks and video timelines."
    ],
    commonMistakes: [
      "Entering overnight night shifts (e.g. 10:00 PM to 6:00 AM) without rolling past midnight (produces negative times if unhandled).",
      "Treating minutes as decimals (e.g. writing 7 hours and 30 minutes as 7.30 instead of 7.50 hours).",
      "Forgetting to deduct unpaid lunch breaks from recorded gross shift hours."
    ],
    faqs: [
      { question: "How do I calculate an overnight shift crossing midnight?", answer: "Add 24 hours to the end time before subtracting the start time (e.g. 6:00 AM becomes 30:00; 30:00 - 22:00 = 8 hours)." },
      { question: "How do I convert 15 minutes to decimal hours?", answer: "Divide minutes by 60: 15 / 60 = 0.25 hours (30 min = 0.50 hrs, 45 min = 0.75 hrs)." },
      { question: "Can I add multiple time blocks together?", answer: "Yes, you can add individual shift durations to compute cumulative weekly working hours." }
    ],
    sources: [{ name: "U.S. Department of Labor (FLSA Hours Worked)", url: "https://www.dol.gov" }]
  },

  "electricity-bill-calculator": {
    overview: "Estimates monthly electrical consumption and power bill costs from appliance wattage, daily usage hours, and municipal tiered tariff slabs.",
    formula: "Monthly Units (kWh) = [Appliance Wattage (W) × Daily Hours × 30 Days] / 1,000 | Bill = kWh × Tariff Rate per Unit",
    explanation: "1 electricity billing unit equals 1 kilowatt-hour (kWh). Tiered tariff slabs charge progressively higher rates as consumption crosses unit thresholds.",
    example: {
      title: "Worked Example: 1.5-Ton Inverter AC (1,500W) Running 8 Hours Daily at ₹8/Unit",
      inputs: "Wattage = 1,500 Watts | Daily Usage = 8 Hours | Rate = ₹8.00 per kWh Unit",
      steps: [
        "Daily energy consumption = (1,500 × 8) / 1,000 = 12.0 kWh units/day",
        "Monthly energy consumption = 12.0 × 30 days = 360 kWh units/month",
        "Monthly electricity cost = 360 units × ₹8.00 = ₹2,880 per month"
      ],
      summary: "Power = 1,500 W | Monthly Units = 360 kWh | Monthly Operating Cost = ₹2,880"
    },
    metricsText: "Air conditioners, water geysers, and refrigerators account for over 60% of an average household's summer electricity bill.",
    useCases: [
      "Appliance Running Cost Audit: Calculate exactly how much money running an air conditioner, gaming PC, or space heater costs per month.",
      "Energy Efficiency Comparison: Compare operating costs of 5-star BEE rated inverter appliances against older non-inverter models.",
      "Solar Panel Sizing: Determine monthly kilowatt-hour household demand to properly size rooftop solar net-metering systems."
    ],
    commonMistakes: [
      "Assuming appliances run at full rated wattage 100% of the time (inverter ACs and refrigerators cycle compressors down).",
      "Forgetting fixed meter charges, electricity duty, and fuel surcharge adjustments added to utility bills.",
      "Using watts directly in cost calculations without dividing by 1,000 to convert to kilowatt-hours (kWh)."
    ],
    faqs: [
      { question: "What is 1 unit of electricity on an electricity meter?", answer: "1 unit of electricity equals 1 kilowatt-hour (kWh), which is 1,000 watts of power consumed continuously for 1 hour." },
      { question: "How much power does a refrigerator use per day?", answer: "A modern 3-star to 5-star frost-free refrigerator consumes approximately 0.8 to 1.5 units (kWh) per day." },
      { question: "What is the difference between an inverter AC and a regular AC?", answer: "Inverter ACs regulate compressor motor speed continuously, saving 30% to 50% electricity compared to regular on/off compressor models." }
    ],
    sources: [{ name: "Bureau of Energy Efficiency (BEE India)", url: "https://beeindia.gov.in" }]
  },

  "rent-split-calculator": {
    overview: "Splits apartment rent, utility bills, and shared groceries fairly among roommates based on room square footage, private bathrooms, and amenities.",
    formula: "Roommate Share = Base Common Share + Private Room Premium Adjustment",
    explanation: "Splits shared common space (living room, kitchen) equally, while adjusting private room rent by square footage and amenities (balcony, attached bath).",
    example: {
      title: "Worked Example: 2-Bedroom Flat (₹30,000 Rent) with Master Bedroom (180 sq.ft) and Small Bedroom (120 sq.ft)",
      inputs: "Total Rent = ₹30,000 | Master Bedroom = 180 sq.ft (attached bath) | Second Bedroom = 120 sq.ft",
      steps: [
        "Common area rent (50% of total) = ₹15,000 split equally = ₹7,500 each",
        "Private room rent (50% of total) = ₹15,000 split by area ratio (180:120 = 60%:40%)",
        "Master Bedroom private share = 60% of ₹15,000 = ₹9,000; Total = ₹7,500 + ₹9,000 = ₹16,500",
        "Second Bedroom private share = 40% of ₹15,000 = ₹6,000; Total = ₹7,500 + ₹6,000 = ₹13,500"
      ],
      summary: "Master Bedroom = ₹16,500/mo | Small Bedroom = ₹13,500/mo | Fair Split Achieved"
    },
    metricsText: "Splitting rent strictly by square footage and private amenities eliminates roommate resentment over unequal bedroom sizes.",
    useCases: [
      "Apartment Sharing: Calculate fair rent splits between master bedroom and smaller secondary bedrooms.",
      "Shared Utility Division: Split monthly WiFi, electricity, maid charges, and grocery bills among roommates.",
      "Couples in Shared Housing: Fairly calculate the rent share of a couple sharing a master bedroom in a 3-bedroom flat."
    ],
    commonMistakes: [
      "Splitting rent strictly 50/50 when one roommate has a master bedroom with private attached bath and balcony.",
      "Failing to agree in writing on how shared cleaning supplies and common utilities will be billed.",
      "Ignoring couples: a couple should pay more for common spaces (since two people use the kitchen/living area) but share bedroom square footage."
    ],
    faqs: [
      { question: "How should a couple sharing a room with single roommates split rent?", answer: "Split common areas equally per person (e.g. 1/3 each in a 2-room flat with a couple and 1 single), and split private bedrooms by room value." },
      { question: "How much extra should an attached private bathroom add to rent?", answer: "Typically adds 10% to 20% to that bedroom's private rent allocation." },
      { question: "How should shared household utilities be split?", answer: "Electricity, water, gas, and WiFi should be split equally per individual resident, not per bedroom." }
    ],
    sources: [{ name: "National Fair Housing Alliance", url: "https://nationalfairhousing.org" }]
  },

  "countdown-timer": {
    overview: "Tracks real-time countdown days, hours, minutes, and seconds to holidays, birthdays, weddings, product releases, and retirement milestones.",
    formula: "Time_Remaining = Target_Event_Timestamp - Current_Timestamp decomposed into Days, Hours, Minutes, Seconds",
    explanation: "Calculates precise real-time interval remaining until a target calendar date, updating every second.",
    example: {
      title: "Worked Example: Countdown to New Year's Day",
      inputs: "Target Date = January 1, 2027 00:00:00 | Current Date = October 1, 2026",
      steps: [
        "Calculate total millisecond difference between timestamps.",
        "Extract remaining integer days = 92 Days.",
        "Extract remaining hours, minutes, and seconds.",
        "Live interactive ticking display updating every 1,000 ms."
      ],
      summary: "92 Days, 0 Hours, 0 Minutes Remaining | Real-Time Ticking Engine"
    },
    metricsText: "Visual countdown timers create psychological urgency and maintain goal motivation for personal fitness and career deadlines.",
    useCases: [
      "Product Launches: Embed animated countdown timers for software releases, sales promotions, and Kickstarter campaigns.",
      "Wedding & Life Events: Track remaining days, weeks, and hours until wedding ceremonies and milestone anniversaries.",
      "Retirement Countdown: Celebrate days remaining until official corporate retirement or military discharge."
    ],
    commonMistakes: [
      "Failing to account for the event's local time zone (e.g. midnight in London is 5:30 AM in India).",
      "Ignoring daylight saving time clock changes occurring between the current date and the target event.",
      "Leaving countdown timers active after the event date has already passed."
    ],
    faqs: [
      { question: "Can I share a countdown timer link with friends?", answer: "Yes, you can copy the unique URL with embedded target date parameters to share with friends." },
      { question: "What happens when the countdown timer reaches zero?", answer: "The interface triggers a celebratory animation and displays that the milestone event has arrived." },
      { question: "How does the timer handle time zones?", answer: "Timers can count down to a specific local time zone or adjust dynamically to the viewer's local device time." }
    ],
    sources: [{ name: "ISO 8601 Date and Time Format Standard", url: "https://www.iso.org" }]
  },

  "notice-period-calculator": {
    overview: "Calculates official employee last working day (LWD) dates, notice period shortfall buyouts, and leave adjustment credits upon resignation.",
    formula: "Last Working Day = Resignation Date + Notice Period Duration (in Days or Months) - Approved Leave Deductions",
    explanation: "Computes last working day, calculates gross salary buyout penalties for early release, and reconciles earned leave balances.",
    example: {
      title: "Worked Example: Resignation on October 1st with 90-Day Notice Period",
      inputs: "Resignation Date = October 1, 2026 | Notice Period = 90 Days | Earned Leave Adjusted = 10 Days",
      steps: [
        "Standard 90-day completion date = December 30, 2026",
        "Subtract 10 days of approved earned leave adjustment",
        "Official Revised Last Working Day (LWD) = December 20, 2026"
      ],
      summary: "Resigned = Oct 1, 2026 | Full Notice = 90 Days | Adjusted LWD = Dec 20, 2026"
    },
    metricsText: "In India, IT services companies commonly mandate 90-day notice periods, whereas global multinational corporations typically require 30 to 60 days.",
    useCases: [
      "Career Transition Planning: Communicate an exact verifiable joining date to new hiring employers.",
      "Notice Period Buyout Negotiations: Calculate the monetary buyout cost needed for a new employer to buy out remaining notice days.",
      "Earned Leave Encashment: Determine whether to adjust accumulated privilege leaves to leave early or encash them for cash payout."
    ],
    commonMistakes: [
      "Counting notice period in business working days instead of calendar days (employment contracts define notice in calendar days).",
      "Assuming employers are legally obligated to accept a notice buyout (early release is at company management discretion).",
      "Taking unapproved leaves during notice period, which employers can use to extend your last working day."
    ],
    faqs: [
      { question: "Is notice period calculated in calendar days or working days?", answer: "Unless explicitly stated otherwise in your employment contract, notice periods are counted in standard continuous calendar days." },
      { question: "What is a notice period buyout?", answer: "When an employee or new employer pays basic salary for the unserved notice days to secure an immediate release." },
      { question: "Can an employer reject a resignation?", answer: "No. Employment is a bilateral contract; an employee has the legal right to resign by serving the agreed contractual notice period or paying buyout." }
    ],
    sources: [{ name: "Industrial Employment (Standing Orders) Act", url: "https://clc.gov.in" }]
  },

  "aspect-ratio-calculator": {
    overview: "Calculates widescreen display dimensions (16:9, 4:3, 21:9, 1:1) and resizes image/video pixel dimensions while preserving original visual proportions.",
    formula: "New Height = (New Width × Original Height) / Original Width | Aspect Ratio = (Width / GCD) : (Height / GCD)",
    explanation: "Uses the Greatest Common Divisor to express display aspect ratios in lowest canonical integer terms.",
    example: {
      title: "Worked Example: Resizing 1920×1080 Full HD Video to 1280px Width",
      inputs: "Original Width = 1920px | Original Height = 1080px | Target Width = 1280px",
      steps: [
        "Find canonical ratio: GCD(1920, 1080) = 120; Ratio = 16:9 (1.7778)",
        "Calculate proportional height: (1280 × 1080) / 1920 = (1280 × 9) / 16 = 720px",
        "Resulting proportional resolution: 1280 × 720 pixels (720p HD)"
      ],
      summary: "Original = 1920×1080 (16:9) | Resized = 1280×720 (16:9) | Distortion = 0%"
    },
    metricsText: "16:9 is the universal international standard for HDTV, YouTube, and computer monitors; 9:16 is the vertical inversion used for TikTok, YouTube Shorts, and Instagram Reels.",
    useCases: [
      "Video Production & Editing: Calculate custom render dimensions for 4K UHD, 1080p Full HD, and 720p exports.",
      "Social Media Graphic Design: Format banner graphics to fit Instagram (1:1 and 4:5), YouTube thumbnails (16:9), and Stories (9:16).",
      "Web Responsive Images: Set width and height attributes on HTML <img> tags to prevent Cumulative Layout Shift (CLS)."
    ],
    commonMistakes: [
      "Altering width or height independently, causing distorted, stretched, or squashed images.",
      "Confusing aspect ratio (relative shape) with absolute resolution (total pixel count).",
      "Forgetting to set CSS aspect-ratio: 16/9; on modern web video embeds."
    ],
    faqs: [
      { question: "What is the aspect ratio of 1920x1080?", answer: "1920x1080 has an aspect ratio of 16:9 (1.78:1), standard for widescreen video and monitors." },
      { question: "What aspect ratio is used for Instagram Reels and TikTok?", answer: "9:16 (vertical video, typically 1080×1920 pixels)." },
      { question: "How does setting aspect ratio improve web performance?", answer: "Specifying aspect ratios on images lets browsers reserve space before images load, preventing Cumulative Layout Shift (CLS) layout jumps." }
    ],
    sources: [{ name: "Society of Motion Picture and Television Engineers (SMPTE)", url: "https://www.smpte.org" }]
  },

  "ev-vs-petrol-calculator": {
    overview: "Compares monthly fuel expenditures, operating cost per kilometer, maintenance savings, and CO2 carbon reduction between Electric Vehicles (EV) and Petrol cars.",
    formula: "Cost per km (EV) = (Battery Capacity kWh × Electricity Rate) / (Range km) | Cost per km (Petrol) = Petrol Price / Mileage km/L",
    explanation: "Models total cost of ownership (TCO) across purchase price, annual running costs, home charging tariffs, and battery degradation.",
    example: {
      title: "Worked Example: 1,500 km Monthly Driving (Tata Nexon EV vs Petrol)",
      inputs: "Monthly Drive = 1,500 km | Petrol Price = ₹102/L | Petrol Mileage = 14 km/L | EV Tariff = ₹8/unit | EV Efficiency = 7.5 km/kWh",
      steps: [
        "Petrol running cost: (1,500 / 14) × ₹102 = 107.1 L × ₹102 = ₹10,928 per month (₹7.29/km)",
        "EV running cost: (1,500 / 7.5) × ₹8 = 200 kWh × ₹8 = ₹1,600 per month (₹1.07/km)",
        "Monthly fuel savings = ₹10,928 - ₹1,600 = ₹9,328 per month",
        "Annual fuel savings = ₹9,328 × 12 = ₹1,11,936 per year"
      ],
      summary: "Petrol Cost = ₹7.29/km | EV Cost = ₹1.07/km | Monthly Savings = ₹9,328 | Annual Savings = ₹1.12 Lakhs"
    },
    metricsText: "Electric vehicles typically cost 80% to 85% less per kilometer in fuel compared to petrol vehicles, with zero engine oil changes or spark plug maintenance.",
    useCases: [
      "Car Buying Decision: Calculate how many kilometers of driving are needed for EV fuel savings to offset higher upfront EV purchase price.",
      "Commercial Fleet Planning: Transition commercial delivery fleets and taxi operations to electric powertrains.",
      "Carbon Footprint Auditing: Quantify annual tailpipe CO2 greenhouse gas emissions avoided by switching to electric."
    ],
    commonMistakes: [
      "Assuming public DC fast-charging rates equal cheap residential home charging electricity tariffs.",
      "Ignoring the real-world EV range drop (15-20%) when running cabin air conditioning in peak summer heat.",
      "Failing to factor in battery replacement costs after 8 to 10 years of intensive commercial usage."
    ],
    faqs: [
      { question: "What is the cost per kilometer to drive an electric car in India?", answer: "Home charging typically costs ₹1.00 to ₹1.30 per kilometer, compared to ₹6.50 to ₹8.50 per kilometer for a petrol car." },
      { question: "How long does an EV battery last?", answer: "Modern EV lithium-ion batteries are warranted for 8 years or 1,60,000 km, retaining 75% to 80% of original capacity." },
      { question: "How many kilometers per year make an EV financially worth it?", answer: "If you drive more than 10,000 to 12,000 km per year, fuel savings will comfortably recover the higher initial EV purchase premium within 3 to 4 years." }
    ],
    sources: [{ name: "NITI Aayog (Zero Emission Vehicles Transition)", url: "https://www.niti.gov.in" }]
  },

  "reading-time-calculator": {
    overview: "Estimates silent reading duration, normal speech presentation time, and fast presentation speed for articles, essays, and public keynote speeches.",
    formula: "Reading Time = Word Count / Average Reading Speed (Words Per Minute)",
    explanation: "Standard benchmarks: Silent Adult Reading = 200–250 WPM; Slow Speech = 110 WPM; Conversational Presentation = 130–150 WPM; Audiobooks = 150 WPM.",
    example: {
      title: "Worked Example: Keynote Speech Transcript of 1,200 Words",
      inputs: "Word Count = 1,200 Words | Presentation Speech Rate = 130 WPM",
      steps: [
        "Silent reading duration = 1,200 / 225 = 5.3 Minutes (5 minutes, 20 seconds)",
        "Spoken presentation duration = 1,200 / 130 = 9.2 Minutes (9 minutes, 15 seconds)",
        "Slow, deliberate speech delivery (110 WPM) = 10.9 Minutes"
      ],
      summary: "Words = 1,200 | Silent Reading = 5.3 min | Speech Time = 9.2 min | Slides Recommendation = ~9-10 Slides"
    },
    metricsText: "Displaying estimated reading time (e.g. '5 min read') at the top of web articles improves visitor engagement by setting clear time expectations.",
    useCases: [
      "Keynote & Public Speaking: Time conference presentations and TEDx-style speeches to avoid exceeding strict speaker time limits.",
      "Content Marketing & Blogging: Display accurate reading time indicators on Medium, WordPress, and Substack newsletters.",
      "Voiceover Script Timing: Ensure commercial voiceover scripts fit exact 30-second and 60-second broadcast advertising slots."
    ],
    commonMistakes: [
      "Practicing speeches in silent reading speed instead of actual spoken delivery speed (which takes 60% longer).",
      "Failing to add buffer time for audience applause, slide transitions, and deliberate pauses.",
      "Writing too much text on slides rather than pacing speech delivery naturally."
    ],
    faqs: [
      { question: "How many words can you speak in a 10-minute presentation?", answer: "At a comfortable conversational pace of 130 words per minute, a 10-minute speech should contain approximately 1,200 to 1,300 words." },
      { question: "How fast is normal silent reading compared to speaking?", answer: "Silent reading (200-250 WPM) is roughly 60% to 80% faster than speaking aloud (130-150 WPM)." },
      { question: "How many words fit in a 30-second radio commercial?", answer: "A 30-second voiceover script should be tightly edited to between 65 and 75 words." }
    ],
    sources: [{ name: "Toastmasters International (Speech Timing Guidelines)", url: "https://www.toastmasters.org" }]
  },

  "unit-price-comparison-calculator": {
    overview: "Compares unit prices across different package sizes, weights, and volumes to find the true best financial bargain on grocery store shelves.",
    formula: "Unit Price = Total Package Cost / Total Quantity in Base Units (grams, ml, or units)",
    explanation: "Converts diverse packaging quantities into standardized baseline units (e.g. Cost per 100 grams, Cost per Liter, Cost per Count).",
    example: {
      title: "Worked Example: Comparing Two Detergent Packs",
      inputs: "Option A: 800g for ₹180 | Option B: 2 kg (2,000g) for ₹420",
      steps: [
        "Normalize Option A: 180 / 800g = ₹0.225 per gram (₹22.50 per 100g)",
        "Normalize Option B: 420 / 2,000g = ₹0.210 per gram (₹21.00 per 100g)",
        "Difference: Option B saves ₹1.50 per 100g (6.67% cheaper)"
      ],
      summary: "Option A = ₹22.50/100g | Option B = ₹21.00/100g | Best Value = Option B (Bulk Pack)"
    },
    metricsText: "Larger 'family size' or 'bulk' packages are not always cheaper per unit; manufacturer shrinkflation and promotional pricing often make smaller packs cheaper.",
    useCases: [
      "Supermarket Shopping: Identify whether bulk pack cereals and detergents genuinely offer lower unit prices than smaller twin packs.",
      "Shrinkflation Detection: Detect subtle price increases when brands downsize packaging volume while keeping retail price constant.",
      "Warehouse Club Valuation: Verify whether wholesale club memberships (Costco, Metro) justify bulk purchase quantities."
    ],
    commonMistakes: [
      "Assuming larger bulk packaging is always the better deal without comparing normalized cost per gram or milliliter.",
      "Buying perishable groceries in massive bulk packs that spoil before consumption, resulting in wasted money.",
      "Comparing products with different concentration levels (e.g. concentrated vs diluted laundry detergents)."
    ],
    faqs: [
      { question: "What is shrinkflation in grocery shopping?", answer: "A stealth pricing tactic where manufacturers reduce product package size or weight while keeping the retail price unchanged, effectively increasing the unit price." },
      { question: "How do I calculate unit price quickly on my phone?", answer: "Divide the price by the quantity listed on the package to find the cost per gram, milliliter, or ounce." },
      { question: "Why do supermarkets display unit prices on shelf tags?", answer: "Consumer protection regulations in many regions mandate shelf unit pricing to help shoppers compare values across different package sizes." }
    ],
    sources: [{ name: "National Institute of Standards and Technology (NIST) Metric Program", url: "https://www.nist.gov/pml/owm/metric-program" }]
  },

  "working-days-calculator": {
    overview: "Calculates net business working days between two calendar dates, automatically excluding Saturdays, Sundays, and public bank holidays.",
    formula: "Working Days = Total Calendar Days - (Weekend Days + Public Holidays)",
    explanation: "Calculates standard Monday-through-Friday commercial work days, supporting 5-day and 6-day work week schedules.",
    example: {
      title: "Worked Example: Working Days in October 2026 (31 Calendar Days)",
      inputs: "Start = October 1, 2026 | End = October 31, 2026 | 5-Day Work Week | Public Holidays = 2 Days",
      steps: [
        "Total calendar days = 31 days",
        "Weekend days (Saturdays and Sundays) = 9 days",
        "Declared national holidays falling on weekdays = 2 days (Gandhi Jayanti, Dussehra)",
        "Net working business days = 31 - 9 - 2 = 20 Working Days"
      ],
      summary: "Calendar Days = 31 | Weekend Days = 9 | Holidays = 2 | Net Working Days = 20 Days (160 Work Hours)"
    },
    metricsText: "A standard calendar year contains 260 to 262 weekdays; subtracting 10 to 12 national holidays leaves approximately 250 working days per year.",
    useCases: [
      "Project Delivery Timelines: Calculate realistic sprint milestones based on actual billable working days rather than calendar spans.",
      "Payroll & Hourly Billing: Determine exact monthly billable work days for salaried contractors and hourly consultants.",
      "Statutory Notice Period Compliance: Calculate official corporate notice period release dates excluding non-working days."
    ],
    commonMistakes: [
      "Assuming public holidays falling on weekends subtract an extra day from total working days.",
      "Forgetting regional state-specific holiday variances when coordinating projects across different Indian states or global offices.",
      "Failing to specify whether Saturdays are full working days, half days, or alternate weekend off-days."
    ],
    faqs: [
      { question: "How many working days are in a typical month?", answer: "On a 5-day work week, an average month contains 20 to 22 business working days (roughly 160 to 176 work hours)." },
      { question: "How many working days are in a year?", answer: "A non-leap year has 261 weekdays; subtracting typical paid public holidays leaves roughly 248 to 250 net working days." },
      { question: "Can I customize weekend days?", answer: "Yes, you can toggle between a standard 5-day week (Mon-Fri) or a 6-day week (Mon-Sat)." }
    ],
    sources: [{ name: "Ministry of Personnel, Public Grievances and Pensions (Government Holidays)", url: "https://dopt.gov.in" }]
  }
};

