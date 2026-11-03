// 17 Bespoke Math Tool Guides
export const mathToolGuides = {
  "percentage-change-calculator": {
    overview: "Calculates the percentage increase or percentage decrease between an original starting value and a final new value.",
    formula: "Percentage Change (%) = ((New Value - Old Value) / |Old Value|) × 100",
    explanation: "A positive result indicates a percentage increase; a negative result represents a percentage decrease.",
    example: {
      title: "Worked Example: Revenue Increasing from ₹80,000 to ₹1,00,000",
      inputs: "Old Value = ₹80,000 | New Value = ₹1,00,000",
      steps: [
        "Absolute change = 1,00,000 - 80,000 = +20,000",
        "Divide by original value = 20,000 / 80,000 = 0.25",
        "Multiply by 100 = 0.25 × 100 = +25.0% increase"
      ],
      summary: "Old = 80,000 | New = 1,00,000 | Percentage Change = +25.0% Increase"
    },
    metricsText: "Percentage changes are asymmetrical: a 50% drop requires a 100% gain just to return to the original starting baseline.",
    useCases: [
      "Financial Reporting: Track month-over-month growth in website traffic, sales conversions, and business revenues.",
      "Investment Performance: Calculate asset appreciation or drawdown percentages on equity and mutual fund holdings.",
      "Retail Price Tracking: Measure inflation spikes or seasonal discounts on consumer goods."
    ],
    commonMistakes: [
      "Dividing by the new final value instead of the initial starting value.",
      "Assuming a 20% gain followed by a 20% loss leaves you back at even (it results in a 4% net loss).",
      "Confusing percentage change with percentage point differences."
    ],
    faqs: [
      { question: "Why doesn't a 50% loss break even with a 50% gain?", answer: "If ₹100 drops 50%, you have ₹50; gaining 50% on ₹50 brings you to ₹75, leaving a net 25% loss from your initial ₹100." },
      { question: "Can percentage change be negative?", answer: "Yes, any reduction in value produces a negative percentage change, representing a decrease." },
      { question: "How do I calculate percentage decrease?", answer: "Subtract the new value from the old value, divide by the old value, and multiply by 100." }
    ],
    sources: [{ name: "National Council of Teachers of Mathematics", url: "https://www.nctm.org" }]
  },

  "average-calculator": {
    overview: "Calculates the arithmetic Mean, Median, Mode, Range, and geometric average across any numerical data series with step-by-step working.",
    formula: "Arithmetic Mean = Sum(x_i) / n | Median = Middle Value (or average of two middle values) when sorted",
    explanation: "Mean evaluates arithmetic center; Median finds the 50th percentile midpoint resilient against extreme statistical outliers.",
    example: {
      title: "Worked Example: Dataset of 5 Exam Scores (75, 80, 85, 90, 100)",
      inputs: "Numbers: 75, 80, 85, 90, 100 (Count n = 5)",
      steps: [
        "Sum of values = 75 + 80 + 85 + 90 + 100 = 430",
        "Mean average = 430 / 5 = 86.0",
        "Median = 85.0 (the 3rd number in sorted sequence)",
        "Range = 100 - 75 = 25"
      ],
      summary: "Mean = 86.0 | Median = 85.0 | Range = 25 | Sum = 430"
    },
    metricsText: "When datasets have extreme outliers (like national income distributions), the Median provides a far more accurate representation of the 'typical' value than the Mean.",
    useCases: [
      "Academic Evaluation: Compute student term averages across quizzes, assignments, and semester exams.",
      "Statistical Research: Evaluate central tendency metrics across experimental sample cohorts.",
      "Salary Benchmarking: Determine median company compensation levels free from executive outlier distortion."
    ],
    commonMistakes: [
      "Using the Mean for heavily skewed data (like house prices or salaries) where outliers inflate the average.",
      "Forgetting to sort the numbers in ascending order before identifying the Median.",
      "Assuming every dataset has a unique Mode (datasets can be bimodal, multimodal, or have no mode)."
    ],
    faqs: [
      { question: "When should I use Median instead of Mean?", answer: "Use the Median when your data has extreme outliers or is heavily skewed, as the Median is unaffected by extreme high or low values." },
      { question: "What is the Mode?", answer: "The value that appears most frequently in a dataset; if all numbers appear with equal frequency, there is no mode." },
      { question: "How is the Median calculated for an even number of values?", answer: "Sort the list, locate the two middle values, and calculate their arithmetic mean." }
    ],
    sources: [{ name: "American Statistical Association (ASA)", url: "https://www.amstat.org" }]
  },

  "ratio-calculator": {
    overview: "Simplifies mathematical ratios (A:B) to their lowest terms using the Greatest Common Divisor and solves for missing proportional values (A:B = C:D).",
    formula: "Simplified Ratio = (A / GCD(A, B)) : (B / GCD(A, B)) | Proportions: D = (B × C) / A",
    explanation: "Reduces terms by dividing by their greatest common factor and solves cross-multiplication equations.",
    example: {
      title: "Worked Example: Simplifying the Ratio 48:64",
      inputs: "Ratio A = 48 | Ratio B = 64",
      steps: [
        "Find Greatest Common Divisor: GCD(48, 64) = 16",
        "Divide first term: 48 / 16 = 3",
        "Divide second term: 64 / 16 = 4",
        "Simplified ratio = 3:4"
      ],
      summary: "Original Ratio = 48:64 | Simplified = 3:4 | Decimal Ratio = 0.75"
    },
    metricsText: "Ratios express relative size without units: a 16:9 widescreen display ratio holds true whether measuring millimeters or meters.",
    useCases: [
      "Culinary Recipe Scaling: Scale ingredient recipe quantities up or down while maintaining exact taste proportions.",
      "Graphic Design & Photography: Maintain exact image aspect ratios when resizing banners and thumbnail graphics.",
      "Financial Statement Analysis: Compute debt-to-equity and current liquidity ratios for corporate balance sheets."
    ],
    commonMistakes: [
      "Confusing ratios (comparing part to part, A:B) with fractions (comparing part to whole, A/(A+B)).",
      "Mixing different units of measurement without converting to a common scale first.",
      "Cross-multiplying proportions incorrectly when solving for unknown variables."
    ],
    faqs: [
      { question: "What is the difference between a ratio and a proportion?", answer: "A ratio compares two quantities (A:B); a proportion is an equation stating that two ratios are equal (A:B = C:D)." },
      { question: "How do I convert a ratio to a percentage?", answer: "Add the ratio parts together to find the whole (A + B), then calculate [A / (A + B)] × 100." },
      { question: "What does scaling a ratio mean?", answer: "Multiplying or dividing all terms in the ratio by the same non-zero number to expand or shrink quantities proportionately." }
    ],
    sources: [{ name: "Wolfram MathWorld (Ratio)", url: "https://mathworld.wolfram.com/Ratio.html" }]
  },

  "lcm-hcf-calculator": {
    overview: "Finds the Least Common Multiple (LCM) and Highest Common Factor (HCF / GCD) for multiple numbers using prime factorization and the Euclidean algorithm.",
    formula: "HCF = gcd(a, b) via Euclidean Algorithm: gcd(a, b) = gcd(b, a mod b) | LCM = (|a × b|) / gcd(a, b)",
    explanation: "HCF is the largest integer dividing all numbers without remainder; LCM is the smallest positive integer divisible by all numbers.",
    example: {
      title: "Worked Example: LCM and HCF of 24 and 36",
      inputs: "Number 1 = 24 | Number 2 = 36",
      steps: [
        "Prime Factorization: 24 = 2³ × 3¹ | 36 = 2² × 3²",
        "HCF (lowest powers): 2² × 3¹ = 4 × 3 = 12",
        "LCM (highest powers): 2³ × 3² = 8 × 9 = 72",
        "Verification: 24 × 36 = 864; HCF × LCM = 12 × 72 = 864"
      ],
      summary: "Numbers = 24, 36 | HCF (GCD) = 12 | LCM = 72 | Product = 864"
    },
    metricsText: "The mathematical identity: Product of Two Numbers = HCF × LCM holds true for any two positive integers.",
    useCases: [
      "Fraction Arithmetic: Find the Lowest Common Denominator (LCD) to add or subtract fractions with unlike denominators.",
      "Event Synchronization: Calculate when two periodic events with different cycle intervals will coincide again.",
      "Tiling and Packaging: Determine the largest square tile size that perfectly fits a rectangular floor without cuts."
    ],
    commonMistakes: [
      "Confusing LCM with HCF (LCM is always equal to or larger than the greatest number; HCF is always equal to or smaller than the smallest number).",
      "Applying the HCF × LCM = Product rule to three or more numbers (that identity only applies strictly to pairs).",
      "Missing common prime factors during manual ladder division."
    ],
    faqs: [
      { question: "How does the Euclidean algorithm find the HCF?", answer: "It repeatedly divides the larger number by the smaller and replaces the larger with the remainder until the remainder is zero." },
      { question: "Why do we need LCM to add fractions?", answer: "Because you can only add fractions that share a common unit (denominator); the LCM provides the smallest common denominator." },
      { question: "Can two prime numbers have an HCF greater than 1?", answer: "No. The HCF of any two distinct prime numbers is always 1, and their LCM is simply their product." }
    ],
    sources: [{ name: "Euclidean Algorithm (Wolfram MathWorld)", url: "https://mathworld.wolfram.com/EuclideanAlgorithm.html" }]
  },

  "fraction-calculator": {
    overview: "Performs addition, subtraction, multiplication, and division on fractions, mixed numbers, and improper fractions with step-by-step simplification.",
    formula: "Addition: a/b + c/d = (ad + bc) / bd | Multiplication: a/b × c/d = ac / bd | Division: a/b ÷ c/d = ad / bc",
    explanation: "Converts mixed numbers to improper fractions, finds common denominators, and reduces results to lowest terms via GCD.",
    example: {
      title: "Worked Example: Adding 2/3 + 3/4",
      inputs: "Fraction 1 = 2/3 | Operation = Addition (+) | Fraction 2 = 3/4",
      steps: [
        "Find common denominator for 3 and 4: LCM(3, 4) = 12",
        "Convert numerators: (2 × 4) / 12 = 8/12 and (3 × 3) / 12 = 9/12",
        "Add numerators: (8 + 9) / 12 = 17/12",
        "Convert to mixed fraction: 1 and 5/12 (Decimal: 1.4167)"
      ],
      summary: "2/3 + 3/4 = 17/12 | Mixed Number = 1 5/12 | Decimal = 1.4167"
    },
    metricsText: "To divide fractions, multiply by the reciprocal of the second fraction ('keep, change, flip').",
    useCases: [
      "Carpentry & Woodworking: Calculate fractional imperial lumber measurements (e.g. 3/8\" + 5/16\").",
      "Cooking & Baking: Halve or double recipe ingredient quantities with fractional cup measurements.",
      "Algebra Homework: Verify manual fraction operations with complete step-by-step simplification breakdowns."
    ],
    commonMistakes: [
      "Adding denominators directly (e.g. 1/2 + 1/3 = 2/5, which is mathematically incorrect).",
      "Forgetting to invert the second fraction when performing fraction division.",
      "Leaving improper fractions unsimplified without extracting the greatest common factor."
    ],
    faqs: [
      { question: "What is an improper fraction?", answer: "A fraction where the numerator is greater than or equal to the denominator (e.g. 7/4), which converts to the mixed number 1 3/4." },
      { question: "Why can't you add fractions with different denominators directly?", answer: "Because the denominator defines the size of the fractional pieces; you must convert them to equal-sized pieces before adding." },
      { question: "What is the reciprocal of a fraction?", answer: "The reciprocal of a/b is b/a; multiplying a fraction by its reciprocal always equals 1." }
    ],
    sources: [{ name: "Khan Academy Arithmetic (Fractions)", url: "https://www.khanacademy.org" }]
  },

  "square-root-calculator": {
    overview: "Computes square roots, cube roots, and nth roots of positive numbers with high floating-point precision and radical simplification.",
    formula: "Square Root = sqrt(x) = x^(1/2) | Cube Root = cbrt(x) = x^(1/3) | Nth Root = x^(1/n)",
    explanation: "Calculates the non-negative real root r such that r^n = x. Evaluates perfect squares and decimal approximations.",
    example: {
      title: "Worked Example: Finding the Square Root of 250",
      inputs: "Number x = 250 | Root Type = Square Root (n = 2)",
      steps: [
        "Identify nearest perfect squares: 15² = 225 and 16² = 256",
        "Estimate value between 15 and 16",
        "High-precision Newton-Raphson calculation: sqrt(250) = 15.8113883",
        "Radical simplification: sqrt(250) = sqrt(25 × 10) = 5 × sqrt(10)"
      ],
      summary: "sqrt(250) = 15.8114 | Simplified Radical = 5√10 | Perfect Square: No"
    },
    metricsText: "The square root of any non-square integer is irrational: its decimal expansion continues infinitely without repeating.",
    useCases: [
      "Geometry & Trigonometry: Solve right triangle hypotenuses using the Pythagorean theorem (c = sqrt(a² + b²)).",
      "Statistical Calculations: Compute standard deviation from sample variance.",
      "Physics & Engineering: Evaluate kinetic energy, electrical RMS voltage, and wave frequency formulas."
    ],
    commonMistakes: [
      "Assuming the square root of a negative real number exists within the real number system (requires imaginary unit i).",
      "Confusing square root (x^(1/2)) with dividing by 2 (e.g. sqrt(16) is 4, not 8).",
      "Forgetting that every positive number has both a positive and negative root (the radical symbol denotes the principal positive root)."
    ],
    faqs: [
      { question: "What is a perfect square?", answer: "An integer that is the square of another integer (e.g. 1, 4, 9, 16, 25, 36, 49, 64, 81, 100)." },
      { question: "How does the Newton-Raphson method calculate square roots?", answer: "It uses iterative approximations: x_(k+1) = 0.5 × (x_k + S / x_k), rapidly doubling correct decimal precision with each iteration." },
      { question: "Can a negative number have a real cube root?", answer: "Yes. For example, the cube root of -8 is -2, because (-2) × (-2) × (-2) = -8." }
    ],
    sources: [{ name: "MathWorld (Square Root)", url: "https://mathworld.wolfram.com/SquareRoot.html" }]
  },

  "standard-deviation-calculator": {
    overview: "Calculates population and sample standard deviation, variance, mean, and sum of squares across numerical datasets to quantify statistical dispersion.",
    formula: "Sample SD (s) = sqrt([Sum(x_i - Mean)^2] / (n - 1)) | Population SD (sigma) = sqrt([Sum(x_i - Mean)^2] / N)",
    explanation: "Uses Bessel's correction (n - 1) for sample data to provide an unbiased estimator of population variance.",
    example: {
      title: "Worked Example: Sample of 5 Data Points (10, 12, 14, 15, 19)",
      inputs: "Data Values: 10, 12, 14, 15, 19 (Sample n = 5)",
      steps: [
        "Calculate sample mean: (10 + 12 + 14 + 15 + 19) / 5 = 70 / 5 = 14.0",
        "Squared deviations: (10-14)²=16, (12-14)²=4, (14-14)²=0, (15-14)²=1, (19-14)²=25",
        "Sum of squared deviations = 16 + 4 + 0 + 1 + 25 = 46.0",
        "Sample variance = 46.0 / (5 - 1) = 46.0 / 4 = 11.5",
        "Sample standard deviation = sqrt(11.5) = 3.391"
      ],
      summary: "Mean = 14.0 | Sample SD = 3.39 | Population SD = 3.03 | Variance = 11.5"
    },
    metricsText: "In a normal distribution, the Empirical Rule states that approximately 68% of data falls within 1 SD of the mean, and 95% falls within 2 SDs.",
    useCases: [
      "Financial Volatility: Measure investment risk and stock price volatility (beta/Sharpe ratio).",
      "Quality Control Manufacturing: Ensure industrial component dimensions remain tightly grouped around target tolerances.",
      "Scientific Research: Quantify measurement uncertainty and experimental variance in laboratory studies."
    ],
    commonMistakes: [
      "Using population standard deviation (dividing by N) when working with sample data (must divide by n - 1).",
      "Confusing variance (squared units) with standard deviation (expressed in the original data units).",
      "Assuming standard deviation is resilient to outliers (a single extreme outlier dramatically inflates SD)."
    ],
    faqs: [
      { question: "What is Bessel's correction in standard deviation?", answer: "Dividing by n - 1 instead of n for sample data, which corrects for the mathematical bias of underestimating population variance." },
      { question: "What does a high standard deviation mean?", answer: "A high standard deviation indicates that data points are widely dispersed and spread out across a broad range of values." },
      { question: "How does variance differ from standard deviation?", answer: "Variance is the average of squared deviations; standard deviation is the square root of variance, restoring the original unit of measurement." }
    ],
    sources: [{ name: "NIST/SEMATECH e-Handbook of Statistical Methods", url: "https://www.itl.nist.gov/div898/handbook/" }]
  },

  "scientific-calculator": {
    overview: "Performs advanced scientific calculations including trigonometry (sin, cos, tan), inverse functions, logarithms (ln, log10), factorials, and powers with radian/degree toggles.",
    formula: "f(x) = Trigonometric, Logarithmic, Exponential, and Algebraic Functions",
    explanation: "Evaluates expressions adhering strictly to standard PEMDAS/BODMAS mathematical operator hierarchy and floating-point precision.",
    example: {
      title: "Worked Example: Evaluating sin(30°) + log10(100) × 2^3",
      inputs: "Expression: sin(30 deg) + log10(100) * 2^3",
      steps: [
        "Evaluate trigonometric term: sin(30°) = 0.5",
        "Evaluate logarithmic term: log10(100) = 2.0",
        "Evaluate exponent: 2^3 = 8.0",
        "Multiplication before addition: 2.0 × 8.0 = 16.0",
        "Final addition: 0.5 + 16.0 = 16.5"
      ],
      summary: "Expression Evaluated = 16.5 | Mode = Degrees | Operator Precedence Maintained"
    },
    metricsText: "Always verify your angle mode setting (Radians vs Degrees): computing trigonometric functions in radians when degrees are intended is a classic math exam error.",
    useCases: [
      "Engineering & Physics: Solve vector forces, harmonic oscillations, and wave mechanics.",
      "Higher Mathematics: Compute natural logs, Euler's number e, and trigonometric identities.",
      "Computer Science: Evaluate logarithmic algorithm complexity (O(log n)) and exponential growth."
    ],
    commonMistakes: [
      "Operating in Radian mode while entering angles in Degrees (e.g. sin(90) in radians is 0.89, whereas sin(90°) is 1.0).",
      "Confusing natural logarithm ln (base e) with common logarithm log10 (base 10).",
      "Violating mathematical order of operations by not utilizing grouping parentheses."
    ],
    faqs: [
      { question: "How do I switch between Radians and Degrees?", answer: "Use the DEG/RAD toggle button on the interface; 180 degrees equals π radians (roughly 3.14159 rad)." },
      { question: "What is the difference between log and ln?", answer: "log usually represents log10 (base 10); ln represents natural logarithm (base e ≈ 2.71828)." },
      { question: "Why is tan(90°) undefined?", answer: "Because tan(x) = sin(x) / cos(x); at 90°, cos(90°) = 0, causing division by zero." }
    ],
    sources: [{ name: "Wolfram Research MathWorld", url: "https://mathworld.wolfram.com" }]
  },

  "percentage-to-fraction-calculator": {
    overview: "Converts percentages into reduced rational fractions, mixed numbers, and decimals with step-by-step simplification breakdowns.",
    formula: "Fraction = Percentage / 100 | Simplified = (Numerator / GCD) / (Denominator / GCD)",
    explanation: "Eliminates decimal points in percentage numerators and divides by greatest common factors to produce proper fractions.",
    example: {
      title: "Worked Example: Converting 37.5% into a Fraction",
      inputs: "Percentage = 37.5%",
      steps: [
        "Express as fraction over 100: 37.5 / 100",
        "Multiply numerator and denominator by 10 to eliminate decimal: 375 / 1000",
        "Find Greatest Common Divisor: GCD(375, 1000) = 125",
        "Divide by GCD: (375 / 125) / (1000 / 125) = 3/8"
      ],
      summary: "37.5% = 3/8 | Decimal = 0.375 | Simplification Factor = 125"
    },
    metricsText: "Recognizing common fraction-percentage equivalents (1/8 = 12.5%, 1/4 = 25%, 1/3 = 33.33%, 1/2 = 50%) speeds up mental arithmetic.",
    useCases: [
      "Arithmetic Problem Solving: Convert percentage test scores into simplified fractional proportions.",
      "Financial Discount Ratios: Express percentage sale markdowns as clean fractional ratios.",
      "Culinary Scaling: Convert percentage baker's percentages into exact measurement cup fractions."
    ],
    commonMistakes: [
      "Forgetting to multiply both numerator and denominator by 10 when converting decimal percentages (like 12.5%).",
      "Leaving fractions unreduced without dividing out common factors.",
      "Confusing percentages under 1% (e.g. 0.5% = 1/200, not 1/2)."
    ],
    faqs: [
      { question: "How do I convert a percentage with a decimal to a fraction?", answer: "Multiply numerator and denominator by 10 for every decimal place, then reduce by their greatest common divisor." },
      { question: "What is 0.25% as a fraction?", answer: "0.25 / 100 = 25 / 10,000 = 1 / 400." },
      { question: "What is 100% as a fraction?", answer: "100 / 100 = 1/1 (or the whole integer 1)." }
    ],
    sources: [{ name: "National Council of Teachers of Mathematics", url: "https://www.nctm.org" }]
  },

  "prime-number-checker": {
    overview: "Determines whether an integer is prime or composite, testing trial divisibility up to sqrt(n) with 6k ± 1 primality optimizations and prime factorizations.",
    formula: "Primality Test: Check divisibility by 2, 3, and all integers 6k ± 1 <= sqrt(n)",
    explanation: "A prime number is an integer strictly greater than 1 that has no positive divisors other than 1 and itself.",
    example: {
      title: "Worked Example: Testing Primality of 97",
      inputs: "Integer n = 97",
      steps: [
        "Calculate square root: sqrt(97) ≈ 9.84 (test primes <= 9)",
        "Test prime divisors: 2 (no), 3 (no), 5 (no), 7 (97 / 7 = 13.85, no)",
        "No divisors found below sqrt(97).",
        "Result: 97 is a Prime Number."
      ],
      summary: "Number = 97 | Status = PRIME | Factors = 1 and 97 only"
    },
    metricsText: "The number 1 is neither prime nor composite by fundamental mathematical definition; 2 is the only even prime number.",
    useCases: [
      "Cryptography & Security: Understand the prime factorization foundations of RSA public-key encryption.",
      "Number Theory Homework: Verify prime classifications and find next adjacent prime numbers.",
      "Algorithm Benchmarking: Demonstrate computational complexity and trial division optimizations."
    ],
    commonMistakes: [
      "Classifying 1 as a prime number (1 is not prime by the Fundamental Theorem of Arithmetic).",
      "Testing divisors all the way up to n instead of stopping at sqrt(n).",
      "Assuming all odd numbers are prime (e.g. 9, 15, 21, 27 are composite odd numbers)."
    ],
    faqs: [
      { question: "Why is 1 not considered a prime number?", answer: "Because if 1 were prime, the Fundamental Theorem of Arithmetic (unique prime factorization) would break, as you could multiply by 1 infinitely." },
      { question: "Why is testing up to sqrt(n) sufficient to prove primality?", answer: "Because if n had a factor larger than sqrt(n), its corresponding factor pair would have to be smaller than sqrt(n), which would have already been detected." },
      { question: "What are Twin Primes?", answer: "Pairs of prime numbers that differ by exactly 2 (such as 3 and 5, 11 and 13, 17 and 19, or 41 and 43)." }
    ],
    sources: [{ name: "The Prime Pages (University of Tennessee)", url: "https://primes.utm.edu" }]
  },

  "factorial-calculator": {
    overview: "Calculates the factorial (n!) of positive integers and evaluates combinations, permutations, and Stirling's asymptotic approximations for large numbers.",
    formula: "n! = n × (n - 1) × (n - 2) × ... × 3 × 2 × 1 | 0! = 1 by definition",
    explanation: "Computes the total number of unique ways to arrange n distinct objects in a sequence.",
    example: {
      title: "Worked Example: Calculating 6 Factorial (6!)",
      inputs: "Integer n = 6",
      steps: [
        "Multiply descending sequence: 6 × 5 × 4 × 3 × 2 × 1",
        "Step 1: 6 × 5 = 30",
        "Step 2: 30 × 4 = 120",
        "Step 3: 120 × 3 = 360",
        "Step 4: 360 × 2 = 720"
      ],
      summary: "6! = 720 | Permutations = 720 Arrangements"
    },
    metricsText: "Factorials grow at super-exponential rates: while 10! is 3.6 million, 20! is over 2.4 quintillion, quickly exceeding standard 64-bit float limits.",
    useCases: [
      "Combinatorics & Probability: Calculate probability distributions, poker hand odds, and lotto combinations.",
      "Algorithm Analysis: Benchmark the time complexity of brute-force Travelling Salesperson problems (O(n!)).",
      "Taylor Series Expansions: Evaluate polynomial series denominators for e^x, sin(x), and cos(x)."
    ],
    commonMistakes: [
      "Assuming 0! = 0 (0! = 1 by mathematical convention to maintain combinatorial consistency).",
      "Attempting to calculate factorials of negative integers (factorials are undefined for negative integers in standard algebra).",
      "Allowing integer overflow errors when computing factorials above 21 without BigInt."
    ],
    faqs: [
      { question: "Why does 0 factorial equal 1 (0! = 1)?", answer: "There is exactly 1 way to arrange zero objects (the empty set); algebraically, n! = (n+1)! / (n+1), so 0! = 1! / 1 = 1." },
      { question: "Can you calculate factorials for non-integers?", answer: "Yes, the Gamma function Γ(n) generalizes factorials to real and complex numbers, where Γ(n+1) = n!." },
      { question: "How large is 100!?", answer: "100! is approximately 9.33 × 10^157, a 158-digit number that far exceeds the total estimated atoms in the observable universe." }
    ],
    sources: [{ name: "Wolfram MathWorld (Factorial)", url: "https://mathworld.wolfram.com/Factorial.html" }]
  },

  "permutation-combination-calculator": {
    overview: "Calculates Permutations nPr (where order matters) and Combinations nCr (where order does not matter) for choosing r items from n distinct items.",
    formula: "Permutations: nPr = n! / (n - r)! | Combinations: nCr = n! / [r! × (n - r)!]",
    explanation: "Permutations count ordered arrangements (passwords, race podiums); combinations count unordered groups (lottery picks, card hands).",
    example: {
      title: "Worked Example: Selecting 3 Committee Members from 8 Candidates (n=8, r=3)",
      inputs: "Total items n = 8 | Chosen items r = 3",
      steps: [
        "Combination formula: 8! / [3! × (8 - 3)!] = 8! / [3! × 5!]",
        "Expand: (8 × 7 × 6 × 5!) / [(3 × 2 × 1) × 5!]",
        "Cancel 5!: (8 × 7 × 6) / 6 = 336 / 6 = 56 combinations",
        "If order mattered (Permutation nPr): 8 × 7 × 6 = 336 permutations"
      ],
      summary: "n = 8, r = 3 | Combinations nCr = 56 | Permutations nPr = 336"
    },
    metricsText: "Because order does not matter in combinations, nCr is always equal to nPr divided by r! (the number of ways to arrange the chosen group).",
    useCases: [
      "Lottery & Gaming Odds: Calculate the total number of possible combinations in 6/49 lottery games.",
      "Team Selection: Determine how many unique project groups can be selected from a department pool.",
      "Password Security: Calculate the total combinatorial search space required to brute-force security pins."
    ],
    commonMistakes: [
      "Using permutations when order does not matter (e.g. picking a hand of cards is a combination, not a permutation).",
      "Using combinations when positions or roles are distinct (President, VP, Treasurer requires permutations).",
      "Selecting r greater than n without replacement."
    ],
    faqs: [
      { question: "What is the key difference between permutation and combination?", answer: "Order. In a permutation, arrangement matters (ABC is different from CBA); in a combination, grouping matters (ABC and CBA are the exact same group)." },
      { question: "Why is a 'combination lock' a misnomer?", answer: "Because the order of digits matters (e.g. 1-2-3 is not 3-2-1), making it mathematically a permutation lock." },
      { question: "What is Pascal's Triangle in combinations?", answer: "A triangular array where each entry corresponds to a combination nCr, with rows representing n and columns representing r." }
    ],
    sources: [{ name: "Mathematical Association of America", url: "https://www.maa.org" }]
  },

  "quadratic-equation-solver": {
    overview: "Solves quadratic equations of the form ax² + bx + c = 0, calculating real or complex roots, the discriminant, vertex coordinates, and axis of symmetry.",
    formula: "Roots x = [-b ± sqrt(b² - 4ac)] / (2a) | Discriminant Delta = b² - 4ac",
    explanation: "If Δ > 0: two distinct real roots. If Δ = 0: one repeated real root. If Δ < 0: two complex conjugate roots (u ± vi).",
    example: {
      title: "Worked Example: Solving 2x² - 4x - 6 = 0",
      inputs: "a = 2 | b = -4 | c = -6",
      steps: [
        "Discriminant Δ = (-4)² - 4(2)(-6) = 16 - (-48) = 64 (Positive, 2 real roots)",
        "Square root of discriminant = sqrt(64) = 8",
        "Root 1: [-(-4) + 8] / (2 × 2) = (4 + 8) / 4 = 12 / 4 = 3.0",
        "Root 2: [-(-4) - 8] / (2 × 2) = (4 - 8) / 4 = -4 / 4 = -1.0"
      ],
      summary: "Roots = x = 3 and x = -1 | Discriminant = 64 | Parabola Vertex = (1, -8)"
    },
    metricsText: "The vertex of the parabola always occurs at x = -b / (2a), representing the maximum or minimum turning point of the quadratic function.",
    useCases: [
      "Projectile Trajectory Modeling: Calculate flight duration, maximum height, and landing point for launched objects.",
      "Profit Maximization: Find optimal product pricing coordinates where quadratic revenue curves peak.",
      "Civil Engineering: Design parabolic suspension bridge curves and architectural archways."
    ],
    commonMistakes: [
      "Setting coefficient a = 0 (if a = 0, the equation reduces to a linear equation bx + c = 0).",
      "Forgetting to negate b in the numerator (-b becomes positive if b is negative).",
      "Failing to divide the entire numerator [-b ± sqrt(Δ)] by 2a."
    ],
    faqs: [
      { question: "What does the discriminant tell you?", answer: "The discriminant (b² - 4ac) indicates the nature of roots: > 0 means 2 real roots, = 0 means 1 real root, < 0 means 2 complex roots." },
      { question: "What if the discriminant is negative?", answer: "The parabola does not cross the x-axis, and roots are complex numbers involving the imaginary unit i = sqrt(-1)." },
      { question: "How do I find the vertex of a quadratic function?", answer: "The x-coordinate is -b / (2a); plug this x value back into the quadratic equation to find the corresponding y-coordinate." }
    ],
    sources: [{ name: "Wolfram MathWorld (Quadratic Equation)", url: "https://mathworld.wolfram.com/QuadraticEquation.html" }]
  },

  "number-to-words-converter": {
    overview: "Converts numbers and monetary currencies into written words in Indian Numbering Format (Lakhs, Crores) and International Format (Millions, Billions).",
    formula: "Words = Number_To_Language_Algorithm(Integer_Value, Numbering_System)",
    explanation: "Indian system groups by hundreds then pairs (3,2,2 format: Thousands, Lakhs, Crores); Western system groups by triplets (Millions, Billions).",
    example: {
      title: "Worked Example: Converting ₹12,34,567 into Written Words",
      inputs: "Number = 12,34,567 | System = Indian Rupees",
      steps: [
        "Decompose into groups: 12 Lakhs, 34 Thousands, 5 Hundreds, 67",
        "Convert to text: 'Twelve Lakh Thirty-Four Thousand Five Hundred Sixty-Seven Rupees Only'",
        "International equivalent: 'One Million Two Hundred Thirty-Four Thousand Five Hundred Sixty-Seven'"
      ],
      summary: "Input = 12,34,567 | Indian Words: Twelve Lakh Thirty-Four Thousand Five Hundred Sixty-Seven"
    },
    metricsText: "Spelling out financial amounts in written words on bank cheques and legal promissory notes prevents fraudulent numeral tampering.",
    useCases: [
      "Cheque & Draft Writing: Write official bank cheques in written words to prevent cheque bounce and bank teller rejection.",
      "Legal Contracts: Spell out financial consideration values in commercial sale deeds and lease agreements.",
      "Invoice Preparation: Print total payable amounts in written words at the bottom of commercial GST invoices."
    ],
    commonMistakes: [
      "Confusing Indian numbering groupings (Lakhs/Crores) with international groupings (Millions/Billions).",
      "Omitting the concluding word 'Only' on financial payment cheques.",
      "Writing 'Hundreds' or 'Thousands' in plural form (e.g. writing 'Five Hundreds' instead of 'Five Hundred')."
    ],
    faqs: [
      { question: "How much is 1 Crore in Millions?", answer: "1 Crore equals exactly 10 Million (1,00,00,000 = 10,000,000)." },
      { question: "How much is 1 Lakh in Thousands?", answer: "1 Lakh equals 100 Thousand (1,00,000 = 100,000)." },
      { question: "Why is writing numbers in words mandatory on bank cheques?", answer: "Because written words cannot be altered by adding extra zeros or altering digits, preventing financial fraud." }
    ],
    sources: [{ name: "Reserve Bank of India Cheque Truncation System (CTS)", url: "https://www.rbi.org.in" }]
  },

  "exponent-calculator": {
    overview: "Calculates powers and exponents (base raised to positive, negative, or fractional exponent power) with scientific notation formatting.",
    formula: "Power = b^x | Negative Exponent: b^(-x) = 1 / (b^x) | Fractional Exponent: b^(p/q) = qth_root(b^p)",
    explanation: "Evaluates repeated multiplication: b^n multiplies base b by itself n times. Supports integer and decimal exponents.",
    example: {
      title: "Worked Example: Calculating 2 raised to the power of 8 (2^8)",
      inputs: "Base b = 2 | Exponent x = 8",
      steps: [
        "Multiply base by itself 8 times: 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2",
        "Intermediate power: 2^4 = 16",
        "Square intermediate: 16 × 16 = 256"
      ],
      summary: "Base = 2 | Exponent = 8 | Result = 256 | Scientific Notation = 2.56 × 10^2"
    },
    metricsText: "Any non-zero base raised to the power of zero equals 1 (b^0 = 1); 0^0 is considered an indeterminate form in mathematics.",
    useCases: [
      "Compound Interest Modeling: Compute annual compounding multipliers (1 + r)^t over multi-year periods.",
      "Computer Science: Calculate binary memory addressing capacities (e.g. 2^32 = 4.29 billion addressable bytes).",
      "Scientific Notation: Express astronomical distances and subatomic particle masses in powers of 10."
    ],
    commonMistakes: [
      "Multiplying base by the exponent instead of repeated multiplication (e.g. thinking 2^3 is 2 × 3 = 6 instead of 2 × 2 × 2 = 8).",
      "Confusing negative exponents with negative results (b^(-2) is 1/(b^2), which is positive).",
      "Misinterpreting -3^2 as (-3)^2 (without parentheses, -3^2 is -9, whereas (-3)^2 is +9)."
    ],
    faqs: [
      { question: "Why does any number to the power of 0 equal 1?", answer: "Because b^n / b^n = 1, and by exponent subtraction rules b^(n-n) = b^0; therefore b^0 must equal 1." },
      { question: "What does a negative exponent mean?", answer: "A negative exponent represents division or the reciprocal: 10^(-3) = 1 / (10^3) = 1 / 1,000 = 0.001." },
      { question: "What does a fractional exponent mean?", answer: "A fractional exponent represents a root: x^(1/2) is the square root, and x^(1/3) is the cube root." }
    ],
    sources: [{ name: "Wolfram MathWorld (Exponentiation)", url: "https://mathworld.wolfram.com/Exponentiation.html" }]
  },

  "ratio-to-percentage-calculator": {
    overview: "Converts part-to-part and part-to-whole ratios (A:B or A:B:C) into exact percentage shares and decimal fractions.",
    formula: "Share A (%) = [A / (A + B)] × 100 | Share B (%) = [B / (A + B)] × 100",
    explanation: "Calculates proportional ownership, profit sharing, and ingredient mixture percentages from ratio components.",
    example: {
      title: "Worked Example: Business Partnership Ratio of 3:2",
      inputs: "Ratio A = 3 | Ratio B = 2",
      steps: [
        "Sum of ratio parts: 3 + 2 = 5 total parts",
        "Partner A share = (3 / 5) × 100 = 60.0%",
        "Partner B share = (2 / 5) × 100 = 40.0%"
      ],
      summary: "Ratio = 3:2 | Total Parts = 5 | Share A = 60.0% | Share B = 40.0%"
    },
    metricsText: "All percentage shares of a ratio must sum to exactly 100%; verify total additions to prevent rounding leakage.",
    useCases: [
      "Equity Ownership Splits: Calculate startup founder equity percentages from capitalization table share ratios.",
      "Chemical & Concrete Mixing: Convert cement, sand, and aggregate ratios (e.g. 1:2:4) into batch mixture percentages.",
      "Investment Asset Allocation: Convert portfolio equity-to-debt ratios (e.g. 70:30) into exact capital allocation percentages."
    ],
    commonMistakes: [
      "Dividing term A by term B directly instead of dividing term A by the sum of all terms (A + B).",
      "Treating 1:1 as 100% instead of 50% (1:1 has 2 total parts: 1/2 = 50%).",
      "Failing to normalize multi-term ratios (like 2:3:5) before computing percentage shares."
    ],
    faqs: [
      { question: "What percentage is a 1:1 ratio?", answer: "50% each; there are 1 + 1 = 2 total parts, so each share is 1/2 = 50%." },
      { question: "What percentage is a 3:1 ratio?", answer: "75% and 25%; total parts = 4, so 3/4 = 75% and 1/4 = 25%." },
      { question: "How do I convert a 3-way ratio like 2:3:5 into percentages?", answer: "Sum the parts (2 + 3 + 5 = 10); then 2/10 = 20%, 3/10 = 30%, and 5/10 = 50%." }
    ],
    sources: [{ name: "National Council of Teachers of Mathematics", url: "https://www.nctm.org" }]
  },

  "percentage-error-calculator": {
    overview: "Calculates the percentage error and absolute error between experimental experimental measurements and accepted theoretical true values.",
    formula: "Percentage Error (%) = (|Experimental Value - Theoretical Value| / |Theoretical Value|) × 100",
    explanation: "Quantifies the experimental accuracy of laboratory measurements relative to known scientific benchmarks.",
    example: {
      title: "Worked Example: Gravitational Acceleration Lab Measurement",
      inputs: "Experimental Measured g = 9.62 m/s² | Accepted True g = 9.81 m/s²",
      steps: [
        "Absolute error = |9.62 - 9.81| = |-0.19| = 0.19 m/s²",
        "Relative error = 0.19 / 9.81 = 0.019368",
        "Percentage error = 0.019368 × 100 = 1.94%"
      ],
      summary: "Experimental = 9.62 | True = 9.81 | Absolute Error = 0.19 | Percentage Error = 1.94%"
    },
    metricsText: "Percentage error uses absolute value in the numerator; it is conventionally expressed as a positive percentage indicating measurement inaccuracy.",
    useCases: [
      "Physics & Chemistry Labs: Compare experimental laboratory measurements against accepted standard physical constants.",
      "Engineering Sensor Calibration: Quantify measurement drift and instrument error in temperature and pressure sensors.",
      "Quality Assurance: Validate manufacturing assembly tolerances against theoretical CAD design specifications."
    ],
    commonMistakes: [
      "Dividing by the experimental measured value instead of the true theoretical benchmark in the denominator.",
      "Reporting negative percentage error without noting that standard scientific convention evaluates absolute magnitude.",
      "Confusing percent error (compared to known true value) with percent difference (comparing two experimental values)."
    ],
    faqs: [
      { question: "What is an acceptable percentage error in science experiments?", answer: "In high school/introductory labs, under 5% to 10% is typical; in precision manufacturing and professional science, under 1% is required." },
      { question: "What is the difference between percent error and percent difference?", answer: "Percent error compares a measurement to an accepted true value; percent difference compares two experimental measurements when neither is considered the 'true' benchmark." },
      { question: "Why is the absolute value used in percent error?", answer: "Because percentage error measures the magnitude of inaccuracy, regardless of whether the measurement was too high or too low." }
    ],
    sources: [{ name: "NIST Guidelines for Evaluating and Expressing Uncertainty", url: "https://www.nist.gov" }]
  }
};

