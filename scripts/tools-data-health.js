// 20 Bespoke Health & Fitness Tool Guides
export const healthToolGuides = {
  "bmi-calculator": {
    overview: "Calculates Body Mass Index (BMI) from body weight and height, categorizing adult physical health against World Health Organization clinical cutoffs.",
    formula: "BMI = Weight (kg) / [Height (m)]^2",
    explanation: "Weight in kilograms divided by the square of height in meters. WHO adult classifications: Underweight (<18.5), Normal (18.5–24.9), Overweight (25–29.9), Obese (≥30).",
    example: {
      title: "Worked Example: Adult Weighing 72 kg at 175 cm Height",
      inputs: "Weight = 72 kg | Height = 175 cm (1.75 meters)",
      steps: [
        "Height squared = 1.75 × 1.75 = 3.0625 m²",
        "BMI value = 72 / 3.0625 = 23.51 kg/m²",
        "Clinical classification = Normal Weight (Healthy Range)"
      ],
      summary: "Weight = 72 kg | Height = 175 cm | BMI = 23.5 kg/m² | Category = Normal Weight"
    },
    metricsText: "For Asian populations, clinical health risks begin at lower thresholds: overweight cutoffs start at 23.0 BMI and obesity cutoffs start at 27.5 BMI.",
    useCases: [
      "Clinical Screening: Screen for weight-related epidemiological risks including hypertension and type-2 diabetes.",
      "Weight Loss Milestones: Determine the exact kilogram target needed to enter the recommended healthy weight range.",
      "Annual Health Checkups: Track annual biometric changes alongside blood lipid panels and waist measurements."
    ],
    commonMistakes: [
      "Using BMI alone for muscular athletes or bodybuilders whose high lean mass misclassifies them as overweight.",
      "Applying adult BMI cutoffs to children and adolescents (which requires CDC pediatric percentile growth charts).",
      "Ignoring abdominal visceral fat distribution, which is better evaluated using waist-to-hip ratios."
    ],
    faqs: [
      { question: "Why is BMI misleading for athletes?", answer: "BMI cannot distinguish between dense muscle mass and adipose fat tissue; heavily muscled individuals often score in the overweight range despite low body fat." },
      { question: "What are the revised BMI cutoffs for South Asians?", answer: "Due to higher visceral fat propensity, WHO guidelines recommend Asian cutoffs: Normal (18.5–22.9), Overweight (23.0–27.4), and Obese (≥27.5)." },
      { question: "At what BMI does health risk significantly increase?", answer: "Cardiovascular and metabolic risks increase progressively when BMI exceeds 25, accelerating rapidly above 30." }
    ],
    sources: [{ name: "World Health Organization (WHO) BMI Classification", url: "https://www.who.int" }]
  },

  "calorie-calculator": {
    overview: "Calculates Total Daily Energy Expenditure (TDEE) and target daily caloric intake for fat loss, muscle gain, or weight maintenance based on physical activity levels.",
    formula: "TDEE = BMR × Activity Factor | BMR (Mifflin-St Jeor) = (10 × W) + (6.25 × H) - (5 × A) + s",
    explanation: "W = Weight in kg, H = Height in cm, A = Age, s = Biological sex constant (+5 for males, -161 for females). Activity factors range from 1.2 (sedentary) to 1.9 (athlete).",
    example: {
      title: "Worked Example: 28-Year-Old Male (75 kg, 178 cm, Moderate Exercise)",
      inputs: "Age = 28 | Sex = Male | Weight = 75 kg | Height = 178 cm | Activity = Moderate (3-5 days/week)",
      steps: [
        "BMR = (10 × 75) + (6.25 × 178) - (5 × 28) + 5 = 750 + 1112.5 - 140 + 5 = 1,727.5 kcal",
        "Moderate Activity Factor = 1.55",
        "Maintenance TDEE = 1,727.5 × 1.55 = 2,678 kcal/day",
        "Target for steady 0.5 kg/week fat loss (500 kcal deficit) = 2,178 kcal/day"
      ],
      summary: "Basal BMR = 1,728 kcal | Maintenance TDEE = 2,678 kcal | Moderate Fat Loss Deficit = 2,178 kcal/day"
    },
    metricsText: "A cumulative caloric deficit of approximately 3,500 kcal equals roughly 0.45 kg (1 lb) of body fat tissue reduction.",
    useCases: [
      "Fat Loss Planning: Establish safe, sustainable 300 to 500 kcal daily deficits that prevent metabolic slowdown.",
      "Lean Bulking: Calculate structured 250 to 400 kcal daily surpluses to promote hypertrophy while minimizing fat gain.",
      "Dietary Tracking Calibration: Calibrate calorie intake targets on tracking apps like MyFitnessPal and Cronometer."
    ],
    commonMistakes: [
      "Overestimating daily physical activity levels (e.g. selecting 'very active' for a desk job with 1 hour of gym training).",
      "Using severe crash deficits (> 1,000 kcal/day) that trigger muscle catabolism, fatigue, and hormonal disruption.",
      "Failing to track liquid calories, cooking oils, and condiments that erase planned daily deficits."
    ],
    faqs: [
      { question: "What is the difference between BMR and TDEE?", answer: "BMR is calories burned at complete rest to keep organs functioning; TDEE is total calories burned including daily movement and exercise." },
      { question: "How large should my calorie deficit be for fat loss?", answer: "A moderate deficit of 15% to 20% below your maintenance TDEE (roughly 300 to 500 kcal/day) allows steady fat loss while preserving muscle." },
      { question: "Why do weight loss plateaus happen?", answer: "As you lose weight, your smaller body burns fewer calories, and metabolic adaptation lowers daily expenditure; recalculate your TDEE every 3-5 kg lost." }
    ],
    sources: [{ name: "American Journal of Clinical Nutrition", url: "https://academic.oup.com/ajcn" }]
  },

  "water-intake-calculator": {
    overview: "Determines optimal daily water hydration volumes based on body mass, climate environment, and daily physical exercise duration.",
    formula: "Daily Water (Liters) = (Body Weight in kg × 0.033) + (Exercise Hours × 0.5 Liters)",
    explanation: "Base hydration requirement is roughly 30 to 35 mL per kilogram of body weight, with additional fluid replenishment for sweat loss.",
    example: {
      title: "Worked Example: 70 kg Adult with 45 Minutes of Daily Exercise",
      inputs: "Body Weight = 70 kg | Daily Workout = 45 Minutes (0.75 Hours) | Climate = Moderate",
      steps: [
        "Base hydration requirement = 70 × 0.033 = 2.31 Liters",
        "Exercise replenishment = 0.75 × 0.5 = 0.375 Liters",
        "Total daily fluid target = 2.31 + 0.38 = 2.69 Liters (roughly 11 glasses of 250 mL each)"
      ],
      summary: "Weight = 70 kg | Exercise = 45 min | Daily Target = 2.7 Liters (11 Glasses)"
    },
    metricsText: "Thirst is a delayed physiological indicator; mild dehydration of just 1% to 2% body mass impairs cognitive focus and physical stamina.",
    useCases: [
      "Endurance Sports Hydration: Calculate baseline fluid requirements for marathon training and summer athletics.",
      "Kidney Stone Prevention: Maintain adequate urinary volume (at least 2.5 L/day) to prevent crystal crystallization.",
      "Daily Wellness Tracking: Establish consistent hydration habits by distributing water targets evenly across daytime hours."
    ],
    commonMistakes: [
      "Relying exclusively on the generic '8 glasses a day' myth without adjusting for body weight and sweat rate.",
      "Drinking excessive fluid volumes all at once rather than sipping consistently throughout the day.",
      "Neglecting electrolyte replacement (sodium, potassium, magnesium) during heavy endurance sweating."
    ],
    faqs: [
      { question: "Do coffee and tea count toward daily water intake?", answer: "Yes, caffeinated beverages contribute to total fluid intake, though plain water should remain your primary hydration source." },
      { question: "How can I check if I am properly hydrated?", answer: "Monitor your urine color; pale straw or light yellow indicates optimal hydration, while dark yellow suggests dehydration." },
      { question: "Can drinking too much water be dangerous?", answer: "Yes, excessive water intake without electrolytes can dilute blood sodium, causing a rare but serious condition called hyponatremia." }
    ],
    sources: [{ name: "National Academies of Sciences, Engineering, and Medicine", url: "https://www.nationalacademies.org" }]
  },

  "bmr-calculator": {
    overview: "Measures Basal Metabolic Rate (BMR)—the baseline number of calories your body burns at complete physical and digestive rest to maintain vital life functions.",
    formula: "BMR (Mifflin-St Jeor) = (10 × W) + (6.25 × H) - (5 × A) + s",
    explanation: "Calculated using the clinically validated Mifflin-St Jeor equation. W = Weight (kg), H = Height (cm), A = Age (years), s = Sex factor (+5 for men, -161 for women).",
    example: {
      title: "Worked Example: 30-Year-Old Female Weighing 62 kg at 165 cm",
      inputs: "Age = 30 | Sex = Female | Weight = 62 kg | Height = 165 cm",
      steps: [
        "Weight component = 10 × 62 = 620",
        "Height component = 6.25 × 165 = 1,031.25",
        "Age component = 5 × 30 = 150",
        "Female constant = -161",
        "BMR = 620 + 1,031.25 - 150 - 161 = 1,340.25 kcal/day"
      ],
      summary: "Age = 30 | Sex = Female | Basal Metabolic Rate = 1,340 kcal/day"
    },
    metricsText: "BMR accounts for approximately 60% to 75% of your total daily energy expenditure; vital organs like the liver, brain, and heart consume the majority.",
    useCases: [
      "Calorie Floor Determination: Identify the minimum caloric threshold below which diets risk metabolic suppression.",
      "Body Recomposition: Track how adding lean skeletal muscle tissue increases resting basal metabolic rate.",
      "Clinical Nutrition: Provide baseline energy expenditure estimates for hospital patients and post-operative recovery."
    ],
    commonMistakes: [
      "Confusing BMR with TDEE and eating only at BMR levels while engaging in heavy athletic workouts.",
      "Believing that crash dieting does not lower BMR (severe restriction causes adaptive thermogenesis, dropping BMR).",
      "Using outdated Harris-Benedict (1919) tables which tend to overestimate BMR by 5% to 10% compared to Mifflin-St Jeor."
    ],
    faqs: [
      { question: "Can I eat below my BMR to lose weight faster?", answer: "Consistently eating below your BMR causes fatigue, muscle loss, nutrient deficiencies, and hormonal imbalances; create your deficit from your TDEE, not your BMR." },
      { question: "How can I naturally increase my BMR?", answer: "Building skeletal muscle tissue via resistance strength training increases resting metabolic rate, as muscle burns more calories at rest than fat tissue." },
      { question: "Does BMR decrease with age?", answer: "Yes, BMR typically declines by roughly 1% to 2% per decade after age 30, primarily due to gradual loss of lean muscle mass (sarcopenia)." }
    ],
    sources: [{ name: "American Society for Nutrition", url: "https://nutrition.org" }]
  },

  "ideal-weight-calculator": {
    overview: "Estimates healthy body weight ranges based on clinical epidemiological equations including Devine, Robinson, Miller, and Hamwi formulas.",
    formula: "Devine Formula: Men = 50 kg + 2.3 kg per inch over 5 feet | Women = 45.5 kg + 2.3 kg per inch over 5 feet",
    explanation: "Calculates the statistical midpoint weight associated with minimum all-cause mortality for a given adult height and biological frame.",
    example: {
      title: "Worked Example: 5'10\" Male (70 inches tall)",
      inputs: "Sex = Male | Height = 5 feet 10 inches (10 inches above 5 feet)",
      steps: [
        "Base weight at 5 feet = 50 kg",
        "Height increment = 10 inches × 2.3 kg = 23 kg",
        "Devine ideal weight = 50 + 23 = 73.0 kg (160.9 lbs)",
        "Healthy clinical range (BMI 18.5–24.9) = 57.5 kg to 77.4 kg"
      ],
      summary: "Height = 5'10\" | Devine Ideal = 73.0 kg | Recommended Healthy Range = 58 kg to 77 kg"
    },
    metricsText: "There is no single universal 'perfect weight'; clinical medicine evaluates an optimal weight span of 15 to 20 kg based on individual bone frame and muscle mass.",
    useCases: [
      "Medical Target Formulation: Establish realistic target weight goals during clinical weight management therapy.",
      "Pharmaceutical Dosing: Calculate ideal body weight for dosing medications that do not distribute into adipose tissue.",
      "Fitness Goal Benchmarking: Set sensible long-term physical targets that avoid extreme, unhealthy leanness."
    ],
    commonMistakes: [
      "Obsessing over an exact single number rather than maintaining a healthy weight range.",
      "Ignoring body frame size (small, medium, large bone structures shift ideal targets by ±10%).",
      "Treating ideal weight formulas as diagnostic without evaluating body fat percentage."
    ],
    faqs: [
      { question: "Why do different formulas (Devine, Robinson, Hamwi) give different answers?", answer: "Each formula was derived from different historical clinical populations and clinical medication dosing studies, creating slight variations." },
      { question: "How do I determine my body frame size?", answer: "Measure your wrist circumference: for a male over 5'5\", a wrist under 6.5\" is small frame, 6.5\"-7.5\" is medium, and over 7.5\" is large frame." },
      { question: "Can a person be healthy above their ideal weight?", answer: "Yes, an individual with high lean muscle mass and low visceral fat can exceed their ideal weight while remaining in peak cardiovascular health." }
    ],
    sources: [{ name: "Centers for Disease Control and Prevention (CDC)", url: "https://www.cdc.gov" }]
  },

  "body-fat-calculator": {
    overview: "Estimates total body fat percentage using the anthropometric US Navy circumference method based on neck, waist, and hip circumference measurements.",
    formula: "Navy Formula (Men) = 495 / [1.0324 - 0.19077×log10(Waist - Neck) + 0.15456×log10(Height)] - 450",
    explanation: "For women, formula incorporates hip circumference: [Waist + Hip - Neck]. Categorizes essential fat, athletic, fitness, acceptable, and obesity ranges.",
    example: {
      title: "Worked Example: Adult Male (Height 178 cm, Neck 38 cm, Waist 86 cm)",
      inputs: "Sex = Male | Height = 178 cm | Neck = 38 cm | Waist = 86 cm",
      steps: [
        "Waist minus Neck circumference = 86 - 38 = 48 cm",
        "Logarithmic evaluation of circumference difference and height",
        "Estimated Body Fat % = 16.4%",
        "Fitness category = Fitness Range (14%–17%)"
      ],
      summary: "Height = 178 cm | Waist = 86 cm | Body Fat % = 16.4% | Category = Fitness Range"
    },
    metricsText: "Body fat percentage provides a far superior assessment of metabolic and cardiovascular health than scale weight or BMI alone.",
    useCases: [
      "Body Recomposition Monitoring: Track fat loss while verifying that resistance training preserves lean skeletal muscle.",
      "Athletic Conditioning: Monitor competition readiness for sports with weight classes (wrestling, boxing, rowing).",
      "Health Risk Stratification: Assess visceral adiposity risks associated with metabolic syndrome."
    ],
    commonMistakes: [
      "Pulling the measuring tape too tight or leaving it slack across the waist during circumference measurement.",
      "Measuring waist circumference at the trouser belt line instead of the narrowest point or navel level.",
      "Comparing Navy tape method results directly against DEXA scans without accounting for ±3% method variance."
    ],
    faqs: [
      { question: "What is an ideal body fat percentage for men and women?", answer: "For men: Athletic (6-13%), Fitness (14-17%), Acceptable (18-24%). For women: Athletic (14-20%), Fitness (21-24%), Acceptable (25-31%)." },
      { question: "What is essential body fat?", answer: "The minimal fat required for physiological survival, nerve insulation, and organ protection: roughly 2-5% for men and 10-13% for women." },
      { question: "Where should waist circumference be measured?", answer: "Men should measure horizontally across the navel; women should measure at the narrowest point of the natural waist above the hip bones." }
    ],
    sources: [{ name: "American Council on Exercise (ACE) Body Composition", url: "https://www.acefitness.org" }]
  },

  "pregnancy-due-date-calculator": {
    overview: "Estimates expected date of delivery (EDD) and gestational age based on the first day of the last menstrual period (LMP) using Naegele's Rule.",
    formula: "EDD (Naegele's Rule) = First Day of LMP + 1 Year - 3 Months + 7 Days (280 days total)",
    explanation: "Assumes a standard 28-day menstrual cycle with ovulation occurring on day 14. Adjusts for shorter or longer cycle lengths.",
    example: {
      title: "Worked Example: Last Menstrual Period on May 10th with Standard 28-Day Cycle",
      inputs: "LMP = May 10, 2026 | Cycle Length = 28 Days",
      steps: [
        "Add 7 days to day 10 = May 17",
        "Subtract 3 calendar months = February 17",
        "Add 1 year = February 17, 2027",
        "Total gestational duration = 40 Weeks (280 Days)"
      ],
      summary: "LMP = May 10, 2026 | Estimated Due Date = February 17, 2027 | Full Term Milestone = 37-42 Weeks"
    },
    metricsText: "Only about 4% to 5% of babies arrive on their exact calculated due date; a birth window between 37 and 42 weeks is considered full term.",
    useCases: [
      "Prenatal Care Milestones: Schedule first trimester ultrasound scans, genetic screenings, and anatomy scans.",
      "Maternity Leave Planning: Plan corporate maternity leave notices and childcare arrangements ahead of delivery.",
      "Fetal Development Tracking: Track week-by-week embryonic development stages and fetal growth milestones."
    ],
    commonMistakes: [
      "Counting gestational age from the estimated conception date instead of the first day of the last menstrual period.",
      "Failing to adjust for irregular or long menstrual cycles (e.g. 35-day cycles shift due date by roughly 7 days).",
      "Treating the due date as a rigid deadline rather than an estimated median delivery window."
    ],
    faqs: [
      { question: "Why is pregnancy calculated from LMP instead of conception?", answer: "Because the exact date of conception is rarely known with certainty, whereas the first day of the last period is an easily observable event." },
      { question: "How does an early ultrasound affect the due date?", answer: "A first-trimester ultrasound (measuring crown-rump length) is the most accurate dating method; doctors adjust due dates if it differs by > 5-7 days from LMP." },
      { question: "What is considered a full-term pregnancy?", answer: "A pregnancy is considered full term between 39 weeks 0 days and 40 weeks 6 days; early term is 37-38 weeks." }
    ],
    sources: [{ name: "American College of Obstetricians and Gynecologists (ACOG)", url: "https://www.acog.org" }]
  },

  "ovulation-calculator": {
    overview: "Predicts peak fertile windows and estimated ovulation dates based on menstrual cycle lengths to optimize natural conception timing.",
    formula: "Estimated Ovulation Day = Total Cycle Length - 14 Days (Luteal Phase)",
    explanation: "Fertile window spans 5 days prior to ovulation plus the day of ovulation, as sperm can survive up to 5 days in fertile cervical mucus.",
    example: {
      title: "Worked Example: 30-Day Cycle with Period Starting on October 1st",
      inputs: "First Day of Period = October 1 | Average Cycle Length = 30 Days",
      steps: [
        "Ovulation day = 30 - 14 = Day 16 of cycle",
        "Estimated ovulation date = October 16th",
        "Peak fertile window (5 days prior + ovulation day) = October 11th through October 16th",
        "Highest conception probability = October 14th, 15th, and 16th"
      ],
      summary: "Ovulation Date = Oct 16 | Fertile Window = Oct 11 - Oct 16 | Peak Fertility = Oct 15-16"
    },
    metricsText: "The unfertilized ovum survives for only 12 to 24 hours after release; timing intercourse in the 2-3 days before ovulation provides maximum conception likelihood.",
    useCases: [
      "Conception Optimization: Time intercourse during peak fertile window days to maximize monthly pregnancy probabilities.",
      "Cycle Awareness: Understand personal luteal phase duration and biological signs of ovulation (LH surges, cervical fluid changes).",
      "Natural Family Planning: Combine calendar estimates with basal body temperature (BBT) charting."
    ],
    commonMistakes: [
      "Assuming every woman ovulates on Day 14 regardless of whether their personal cycle is 24 days or 35 days.",
      "Waiting until the day after ovulation to have intercourse (when the egg has already degenerated).",
      "Relying on calendar ovulation calculators alone for individuals with highly irregular cycles or PCOS."
    ],
    faqs: [
      { question: "How long is the fertile window?", answer: "The fertile window spans roughly 6 days: the 5 days before ovulation plus the day of ovulation itself." },
      { question: "What are physical signs of ovulation?", answer: "Clear, stretchy 'egg-white' cervical mucus, mild pelvic twinges (mittelschmerz), increased libido, and a sustained rise in morning basal body temperature." },
      { question: "How do ovulation predictor kits (OPKs) work?", answer: "They detect a surge in Luteinizing Hormone (LH) in urine, which typically triggers ovulation 24 to 36 hours later." }
    ],
    sources: [{ name: "American Society for Reproductive Medicine (ASRM)", url: "https://www.asrm.org" }]
  },

  "period-calculator": {
    overview: "Forecasts future menstrual cycle start dates, expected period lengths, and PMS symptom windows based on historical cycle tracking data.",
    formula: "Next Period Date = Start Date of Last Period + Average Cycle Length (Days)",
    explanation: "A standard healthy menstrual cycle averages 28 days, but normal clinical variation ranges from 21 to 35 days in adult females.",
    example: {
      title: "Worked Example: 29-Day Cycle Starting on August 5th",
      inputs: "Last Period Start = August 5 | Average Cycle Length = 29 Days | Bleeding Duration = 5 Days",
      steps: [
        "Next period start date = August 5 + 29 Days = September 3rd",
        "Bleeding phase = September 3rd to September 7th",
        "Subsequent cycle start = September 3 + 29 Days = October 2nd"
      ],
      summary: "Last Period = Aug 5 | Next Expected Period = Sept 3 | Following Cycle = Oct 2"
    },
    metricsText: "Tracking menstrual cycle regularity over 3 to 6 consecutive months establishes your true biological baseline and detects cycle irregularities early.",
    useCases: [
      "Event & Travel Planning: Schedule athletic competitions, vacations, and social events around anticipated menstrual bleeding.",
      "Gynecological Health Tracking: Document cycle length variances to share with healthcare providers during clinical evaluations.",
      "PMS Management: Anticipate premenstrual syndrome symptom phases to optimize rest, nutrition, and stress management."
    ],
    commonMistakes: [
      "Entering only the number of bleeding days instead of the full cycle length from Day 1 to the next Day 1.",
      "Assuming minor 2-3 day fluctuations indicate medical problems (temporary stress and travel frequently shift cycle timing).",
      "Failing to record unexpected spotting or mid-cycle breakthrough bleeding."
    ],
    faqs: [
      { question: "How is menstrual cycle length calculated?", answer: "Count from the first day of full menstrual bleeding in one cycle up to (but not including) the first day of bleeding in the next cycle." },
      { question: "What is considered a normal cycle length?", answer: "A normal menstrual cycle in healthy adults ranges between 21 and 35 days; cycles under 21 days or over 35 days warrant medical review." },
      { question: "What causes periods to be irregular?", answer: "Common factors include emotional stress, rapid weight changes, thyroid disorders, polycystic ovary syndrome (PCOS), and perimenopause." }
    ],
    sources: [{ name: "Office on Women's Health (U.S. Department of Health and Human Services)", url: "https://www.womenshealth.gov" }]
  },

  "macro-calculator": {
    overview: "Translates total daily calorie targets into specific gram breakdowns of dietary protein, carbohydrates, and fats tailored to fitness goals.",
    formula: "Calories = (Protein_g × 4) + (Carb_g × 4) + (Fat_g × 9)",
    explanation: "Protein and carbs provide 4 kcal per gram; fat provides 9 kcal per gram. Ratios adjust for fat loss, muscle building, or ketogenic diets.",
    example: {
      title: "Worked Example: 2,200 kcal Diet (High Protein: 30% Protein, 40% Carbs, 30% Fat)",
      inputs: "Target Calories = 2,200 kcal/day | Protein = 30% | Carbs = 40% | Fat = 30%",
      steps: [
        "Protein calories = 2,200 × 0.30 = 660 kcal; Grams = 660 / 4 = 165 g/day",
        "Carbohydrate calories = 2,200 × 0.40 = 880 kcal; Grams = 880 / 4 = 220 g/day",
        "Fat calories = 2,200 × 0.30 = 660 kcal; Grams = 660 / 9 = 73 g/day"
      ],
      summary: "Calories = 2,200 kcal | Protein = 165 g (30%) | Carbs = 220 g (40%) | Fat = 73 g (30%)"
    },
    metricsText: "Maintaining protein intake around 1.6 to 2.2 grams per kilogram of body weight optimizes muscle protein synthesis during fat loss phases.",
    useCases: [
      "Bodybuilding Prep: Structure precise macronutrient distributions to maximize muscle hypertrophy while cutting body fat.",
      "Ketogenic Diets: Limit carbohydrates to under 50g per day while allocating 70% to 75% of calories to healthy dietary fats.",
      "Endurance Fueling: Optimize carbohydrate intake (5-8 g/kg) to maintain glycogen stores during marathon training."
    ],
    commonMistakes: [
      "Cutting dietary fat too low (< 15% of total calories), which disrupts endocrine hormone production and joint health.",
      "Setting protein targets higher than necessary (> 3 g/kg), displacing beneficial fiber-rich carbohydrates.",
      "Weighing cooked meats instead of raw weights, which skews actual protein tracking accuracy."
    ],
    faqs: [
      { question: "How much protein do I need per day?", answer: "Sedentary adults need 0.8 g/kg; active individuals and strength trainers benefit from 1.6 to 2.2 g per kg of body weight." },
      { question: "Why do fats have more calories than carbs or protein?", answer: "Dietary fat is more energy-dense, yielding 9 calories per gram compared to 4 calories per gram for protein and carbohydrates." },
      { question: "Are all carbs processed the same way?", answer: "No. Complex carbohydrates (whole grains, oats) digest slowly and provide sustained energy, while refined simple sugars cause rapid blood glucose spikes." }
    ],
    sources: [{ name: "International Society of Sports Nutrition (ISSN)", url: "https://www.jissn.com" }]
  },

  "heart-rate-zone-calculator": {
    overview: "Calculates aerobic and anaerobic target heart rate training zones (Zone 1 through Zone 5) based on maximum heart rate and resting heart rate.",
    formula: "Max HR (Tanaka) = 208 - (0.7 × Age) | Target HR (Karvonen) = [(Max HR - Resting HR) × % Intensity] + Resting HR",
    explanation: "Zone 1: Active Recovery (50-60%), Zone 2: Aerobic Base (60-70%), Zone 3: Tempo (70-80%), Zone 4: Lactate Threshold (80-90%), Zone 5: Anaerobic Max (90-100%).",
    example: {
      title: "Worked Example: 35-Year-Old Runner with 60 bpm Resting Heart Rate",
      inputs: "Age = 35 | Resting Heart Rate = 60 bpm | Method = Karvonen Formula",
      steps: [
        "Estimated Max Heart Rate = 208 - (0.7 × 35) = 183.5 bpm",
        "Heart Rate Reserve (HRR) = 183.5 - 60 = 123.5 bpm",
        "Zone 2 Aerobic Base (60% to 70% HRR) = [123.5 × 0.60] + 60 = 134 bpm to [123.5 × 0.70] + 60 = 146 bpm"
      ],
      summary: "Max HR = 184 bpm | Zone 1 (Recovery) = 122-134 bpm | Zone 2 (Aerobic Base) = 134-146 bpm | Zone 4 (Threshold) = 159-171 bpm"
    },
    metricsText: "Polarized training (80% of workout volume in easy Zone 2, 20% in high-intensity Zone 4/5) builds superior endurance compared to chronic mid-intensity training.",
    useCases: [
      "Zone 2 Endurance Base Building: Build mitochondrial density and fat oxidation capacity through conversational-pace running.",
      "High-Intensity Interval Training (HIIT): Calibrate sprint intervals to ensure efforts reach true Zone 5 (> 90% HR max).",
      "Cardiovascular Recovery Monitoring: Track morning resting heart rate trends to detect overtraining and systemic fatigue."
    ],
    commonMistakes: [
      "Using the overly simplistic '220 minus age' formula, which has high individual variance (Tanaka formula is more accurate).",
      "Running 'easy' runs too fast, drifting into Zone 3 tempo and blunting aerobic mitochondrial adaptations.",
      "Failing to account for cardiac drift during long workouts in hot, humid weather conditions."
    ],
    faqs: [
      { question: "What is Zone 2 training and why is it popular?", answer: "Zone 2 (60-70% max HR) trains your slow-twitch muscle fibers to burn fat as fuel efficiently, building a massive aerobic cardiovascular engine." },
      { question: "What is cardiac drift?", answer: "A natural physiological phenomenon where heart rate gradually drifts upward during prolonged exercise even though running pace stays constant, caused by dehydration and body heating." },
      { question: "How does resting heart rate reflect fitness?", answer: "A lower resting heart rate (typically 45-60 bpm in fit individuals) indicates a stronger stroke volume, meaning your heart pumps more blood per beat." }
    ],
    sources: [{ name: "American Heart Association Target Heart Rates", url: "https://www.heart.org" }]
  },

  "waist-hip-ratio-calculator": {
    overview: "Evaluates visceral abdominal fat distribution and cardiovascular disease risk by comparing waist circumference to hip circumference.",
    formula: "WHR = Waist Circumference / Hip Circumference",
    explanation: "World Health Organization obesity cutoffs for cardiovascular risk: WHR > 0.90 for men, WHR > 0.85 for women.",
    example: {
      title: "Worked Example: Adult Male with 88 cm Waist and 98 cm Hips",
      inputs: "Waist = 88 cm | Hips = 98 cm | Sex = Male",
      steps: [
        "WHR Ratio = 88 / 98 = 0.898 (0.90)",
        "WHO Cardiovascular Risk Category: Moderate / Normal Risk (Threshold is 0.90)"
      ],
      summary: "Waist = 88 cm | Hips = 98 cm | WHR = 0.90 | Risk Classification = Normal"
    },
    metricsText: "An elevated waist-to-hip ratio indicates android 'apple-shaped' visceral fat surrounding internal organs, which carries far higher metabolic disease risk than subcutaneous fat.",
    useCases: [
      "Cardiometabolic Risk Assessment: Screen for risks of type-2 diabetes, hypertension, and atherosclerosis.",
      "Body Composition Tracking: Measure changes in central abdominal fat during targeted diet and fitness interventions.",
      "BMI Contextualization: Complement standard BMI measurements with central visceral adiposity data."
    ],
    commonMistakes: [
      "Measuring waist circumference while sucking in the abdomen, which produces artificially low risk scores.",
      "Measuring hips at the pelvic crest instead of the widest circumference around the buttocks.",
      "Using different tension levels on the tape measure across repeated monthly checks."
    ],
    faqs: [
      { question: "Why is Waist-to-Hip Ratio considered better than BMI?", answer: "Because WHR distinguishes between healthy subcutaneous fat on the hips/thighs and dangerous visceral fat stored deep around abdominal organs." },
      { question: "What is an apple shape versus a pear shape?", answer: "Apple shape carries fat around the abdomen (higher WHR, higher cardiovascular risk); pear shape carries fat around the hips and thighs (lower metabolic risk)." },
      { question: "Where should the hip measurement be taken?", answer: "Stand with feet together and measure around the widest portion of your buttocks and hips, keeping the tape parallel to the floor." }
    ],
    sources: [{ name: "World Health Organization Waist Circumference Report", url: "https://www.who.int" }]
  },

  "sleep-calculator": {
    overview: "Calculates optimal bedtime and wake-up times aligned with natural 90-minute ultradian sleep cycles to eliminate morning grogginess and sleep inertia.",
    formula: "Target Wake Time = Bedtime + (N × 90 Minutes) + 15 Minutes Sleep Latency",
    explanation: "Human nocturnal sleep progresses in 90-minute cycles through light, deep, and REM sleep. Waking mid-cycle causes sleep inertia; waking at cycle completion ensures alertness.",
    example: {
      title: "Worked Example: Need to Wake Up at 6:30 AM",
      inputs: "Desired Wake Time = 6:30 AM | Average Sleep Latency = 15 Minutes",
      steps: [
        "6 cycles (9.0 hours): Bedtime at 9:15 PM",
        "5 cycles (7.5 hours - recommended): Bedtime at 10:45 PM",
        "4 cycles (6.0 hours): Bedtime at 12:15 AM"
      ],
      summary: "Wake Time = 6:30 AM | Optimal 5-Cycle Bedtime = 10:45 PM | 6-Cycle Bedtime = 9:15 PM"
    },
    metricsText: "Sleeping 7.5 hours (5 full cycles) often leaves you feeling more alert than sleeping 8 hours and being jarred awake mid-way through deep slow-wave sleep.",
    useCases: [
      "Shift Work & Travel Planning: Plan restful sleep intervals when managing rotating shifts or cross-time-zone jet lag.",
      "Exam & Presentation Preparation: Ensure optimal REM sleep cycles for memory consolidation before critical events.",
      "Circadian Alignment: Align bedtime consistency with natural melatonin secretion patterns."
    ],
    commonMistakes: [
      "Ignoring the 15 to 20 minutes it naturally takes for an adult to fall asleep (sleep latency).",
      "Relying on multiple snooze alarms, which fragments light sleep and worsens sleep inertia.",
      "Consuming blue light from smartphones in bed, which suppresses natural melatonin release."
    ],
    faqs: [
      { question: "How long is a normal sleep cycle?", answer: "A normal sleep cycle lasts approximately 90 to 110 minutes, cycling through NREM Stage 1, Stage 2, Slow-Wave Deep Sleep, and REM sleep." },
      { question: "What is sleep inertia?", answer: "The feeling of grogginess, disorientation, and cognitive impairment experienced when awakened abruptly from deep slow-wave sleep." },
      { question: "How many sleep cycles do adults need per night?", answer: "Most healthy adults require 5 complete sleep cycles (roughly 7.5 hours) or 6 cycles (9.0 hours) per night." }
    ],
    sources: [{ name: "National Sleep Foundation", url: "https://www.thensf.org" }]
  },

  "calories-burned-calculator": {
    overview: "Estimates calories expended across various athletic sports, gym workouts, and everyday activities based on Metabolic Equivalent of Task (MET) values.",
    formula: "Calories Burned = MET × Body Weight (kg) × Duration (Hours)",
    explanation: "1 MET represents energy expended sitting quietly at rest (~1 kcal/kg/hour). Walking briskly is ~3.8 METs; running at 10 km/h is ~9.8 METs.",
    example: {
      title: "Worked Example: 70 kg Adult Running at 9.8 km/h for 45 Minutes (MET 9.8)",
      inputs: "Weight = 70 kg | Duration = 45 Minutes (0.75 Hours) | MET = 9.8 (Running 6 mph)",
      steps: [
        "Hourly calorie burn = 9.8 × 70 kg = 686 kcal/hour",
        "Total calories burned for 45 min = 686 × 0.75 = 514.5 kcal"
      ],
      summary: "Activity = Running (6 mph) | Weight = 70 kg | Duration = 45 min | Calories Expended = 515 kcal"
    },
    metricsText: "Heavier individuals burn more total calories performing the same physical activity because moving greater body mass requires more mechanical energy.",
    useCases: [
      "Workout Energy Tracking: Calculate gross calorie expenditure from gym cardio, cycling, and resistance sessions.",
      "Energy Balance Management: Plan post-exercise meal nutrition to match daily expenditure targets.",
      "Non-Exercise Activity (NEAT): Quantify calories burned through daily walking, household chores, and gardening."
    ],
    commonMistakes: [
      "Double-counting BMR calories when adding exercise calories to daily intake logs.",
      "Relying unverified on gym elliptical machine calorie counters, which often overestimate expenditure by 20% to 30%.",
      "Overeating post-workout ('compensatory eating') and consuming more calories than the workout burned."
    ],
    faqs: [
      { question: "What does MET stand for in exercise science?", answer: "Metabolic Equivalent of Task: the ratio of your working metabolic rate relative to your resting metabolic rate." },
      { question: "Why do fitness smartwatches report different calorie burns?", answer: "Wearables use proprietary algorithms combining optical heart rate, accelerometer motion, and age/weight data, each with varying estimation models." },
      { question: "Does walking a kilometer burn the same calories as running a kilometer?", answer: "Running burns slightly more total calories per kilometer due to the vertical mechanical oscillation and energy needed to propel the body airborne." }
    ],
    sources: [{ name: "Compendium of Physical Activities (Stanford University)", url: "https://pacompendium.com" }]
  },

  "pace-calculator": {
    overview: "Calculates running, jogging, and walking split paces (minutes per kilometer or minutes per mile) and projects race finish times for 5K, 10K, half, and full marathons.",
    formula: "Pace = Total Time / Distance | Projected Finish Time = Pace × Target Race Distance",
    explanation: "Converts between minutes/km and minutes/mile. Uses Riegel's power formula: T2 = T1 × (D2 / D1)^1.06 to project race times across distances.",
    example: {
      title: "Worked Example: 10K Run Completed in 50 Minutes",
      inputs: "Distance = 10.0 km | Total Time = 50 Minutes (3,000 Seconds)",
      steps: [
        "Pace per kilometer = 50 / 10 = 5.00 min/km (5 minutes, 0 seconds per km)",
        "Equivalent speed = 60 / 5 = 12.0 km/h (7.46 mph)",
        "Pace per mile = 5.00 × 1.60934 = 8:03 min/mile",
        "Projected Half Marathon finish time (Riegel formula) = 1 Hour, 51 Minutes"
      ],
      summary: "Distance = 10 km | Time = 50:00 | Pace = 5:00 min/km (8:03 min/mi) | Speed = 12.0 km/h"
    },
    metricsText: "Negative splitting—running the second half of a race slightly faster than the first—is the pacing strategy used in nearly all world-record distance performances.",
    useCases: [
      "Race Day Pacing: Establish kilometer-by-kilometer target split times to avoid starting too fast in half and full marathons.",
      "Treadmill Training: Convert outdoor running paces (min/km) into indoor treadmill speed settings (km/h or mph).",
      "Training Zone Calibration: Determine exact training paces for tempo workouts, recovery jogs, and interval repeats."
    ],
    commonMistakes: [
      "Starting races too fast during the first kilometer due to adrenaline, leading to early glycogen depletion.",
      "Linear extrapolation: assuming your 5K pace can be maintained over a 42.2 km marathon without accounting for fatigue.",
      "Failing to adjust target pacing for hilly terrain, elevation, and high ambient race temperatures."
    ],
    faqs: [
      { question: "What is Riegel's formula for predicting race times?", answer: "A formula developed by Pete Riegel (T2 = T1 × [D2/D1]^1.06) that models the exponential fatigue curve as race distance increases." },
      { question: "How do I convert min/km to min/mile?", answer: "Multiply your min/km pace by 1.60934 (e.g. 5:00 min/km × 1.609 = 8:03 min/mile)." },
      { question: "What is a negative split in distance running?", answer: "Running the second half of a race faster than the first half, preserving glycogen stores and avoiding early lactic buildup." }
    ],
    sources: [{ name: "USA Track & Field (USATF)", url: "https://www.usatf.org" }]
  },

  "body-surface-area-calculator": {
    overview: "Estimates total external Body Surface Area (BSA) in square meters using clinically validated Mosteller and Du Bois clinical equations.",
    formula: "Mosteller Formula: BSA (m²) = sqrt([Height (cm) × Weight (kg)] / 3600)",
    explanation: "Du Bois Formula: BSA = 0.007184 × Height^0.725 × Weight^0.425. BSA is the clinical standard for indexation of cardiac output and chemotherapy dosing.",
    example: {
      title: "Worked Example: Adult Weighing 70 kg at 175 cm Height",
      inputs: "Weight = 70 kg | Height = 175 cm | Formula = Mosteller",
      steps: [
        "Product = 175 × 70 = 12,250",
        "Quotient = 12,250 / 3,600 = 3.40277",
        "Square root = sqrt(3.40277) = 1.8446 m²"
      ],
      summary: "Height = 175 cm | Weight = 70 kg | Body Surface Area (Mosteller) = 1.84 m²"
    },
    metricsText: "Average body surface area is approximately 1.9 m² for adult men and 1.6 m² for adult women.",
    useCases: [
      "Medical Pharmacokinetics: Calculate accurate therapeutic dosages for chemotherapy and narrow-therapeutic-index drugs.",
      "Cardiovascular Diagnostics: Index echocardiographic cardiac output and stroke volume to body size (Cardiac Index).",
      "Renal Function Indexation: Normalize glomerular filtration rates (eGFR per 1.73 m² BSA)."
    ],
    commonMistakes: [
      "Dosing toxic medications based on raw body weight rather than indexed body surface area in obese patients.",
      "Confusing centimeters with meters when entering height into clinical formulas.",
      "Assuming pediatric BSA formulas follow the same proportionality constants as adult equations."
    ],
    faqs: [
      { question: "Why is BSA preferred over body weight for medication dosing?", answer: "BSA correlates more closely with physiological parameters such as cardiac output, renal blood flow, and metabolic rate than raw body weight." },
      { question: "Which formula is most widely used in modern clinical practice?", answer: "The Mosteller formula is preferred in clinical practice due to its mathematical simplicity and high concordance with Du Bois." },
      { question: "What is normal average adult BSA?", answer: "Standard accepted normal adult BSA is approximately 1.73 m² (frequently used as the normalization baseline for kidney function tests)." }
    ],
    sources: [{ name: "New England Journal of Medicine (Mosteller Formula)", url: "https://www.nejm.org" }]
  },

  "lean-body-mass-calculator": {
    overview: "Calculates Lean Body Mass (LBM)—the weight of bones, organs, muscles, and water excluding adipose fat tissue—using Boer, James, and Hume clinical formulas.",
    formula: "Boer Formula (Men) = (0.407 × Weight) + (0.267 × Height) - 19.2 | Women = (0.252 × Weight) + (0.473 × Height) - 48.3",
    explanation: "Weight in kg, height in cm. Lean body mass represents total metabolically active tissue and serves as the baseline for protein and drug dosing.",
    example: {
      title: "Worked Example: Male Weighing 80 kg at 180 cm Height (Boer Formula)",
      inputs: "Sex = Male | Weight = 80 kg | Height = 180 cm",
      steps: [
        "Weight component = 0.407 × 80 = 32.56",
        "Height component = 0.267 × 180 = 48.06",
        "Constant subtraction = -19.2",
        "Lean Body Mass = 32.56 + 48.06 - 19.2 = 61.42 kg",
        "Fat mass = 80 kg - 61.42 kg = 18.58 kg (23.2% Body Fat)"
      ],
      summary: "Total Weight = 80 kg | Lean Muscle/Organ Mass = 61.4 kg | Fat Mass = 18.6 kg | Fat % = 23.2%"
    },
    metricsText: "Preserving lean body mass during weight loss ensures resting metabolic rate remains elevated and prevents post-diet rebound weight gain.",
    useCases: [
      "Sports Nutrition: Calculate daily protein targets based on active lean tissue rather than total body weight.",
      "Anesthetic Dosing: Determine accurate induction dosages for lipid-insoluble anesthetic agents.",
      "Athletic Sarcopenia Screening: Monitor skeletal muscle retention in aging adults and cutting athletes."
    ],
    commonMistakes: [
      "Assuming all lost scale weight during dieting is body fat (improper diets sacrifice substantial lean muscle tissue).",
      "Dosing water-soluble pharmaceuticals on total weight in severely obese patients instead of lean body mass.",
      "Failing to consume adequate protein and resistance train while in a calorie deficit."
    ],
    faqs: [
      { question: "What is the difference between lean body mass and muscle mass?", answer: "Lean body mass includes all non-fat tissue (bones, water, organs, and muscles); skeletal muscle mass is just one component of LBM." },
      { question: "How does LBM affect my calorie needs?", answer: "Lean body mass is your primary metabolically active tissue; individuals with higher LBM burn significantly more calories even while resting." },
      { question: "Can you increase lean body mass while losing fat?", answer: "Yes, 'body recomposition' is achievable, particularly in beginners, returning lifters, or individuals with higher body fat using progressive overload and high protein." }
    ],
    sources: [{ name: "British Journal of Anaesthesia", url: "https://academic.oup.com/bja" }]
  },

  "water-fasting-calculator": {
    overview: "Estimates projected fat loss, glycogen depletion, and metabolic ketone transitions during intermittent and multi-day water fasting protocols.",
    formula: "Daily Fat Loss = Net Calorie Deficit / 7,700 kcal per kg fat | Water Loss = Initial Glycogen Bound Water (~1.5–2.5 kg)",
    explanation: "Models metabolic phases: Glycogen Depletion (0–24 hrs), Gluconeogenesis (24–48 hrs), Ketosis (48–72 hrs), and Protein Conservation.",
    example: {
      title: "Worked Example: 72-Hour Water Fast for an Adult with 2,200 kcal TDEE",
      inputs: "Fast Duration = 72 Hours (3 Days) | Maintenance TDEE = 2,200 kcal/day",
      steps: [
        "Total caloric deficit over 3 days = 2,200 × 3 = 6,600 kcal",
        "Pure adipose fat oxidized = 6,600 / 7,700 = 0.86 kg (roughly 1.9 lbs)",
        "Water & glycogen depletion loss = ~1.8 kg",
        "Total scale drop = ~2.66 kg (note that glycogen water rebounds upon refeeding)"
      ],
      summary: "Fast Duration = 72 Hours | Adipose Fat Lost = 0.86 kg | Temporary Water Drop = 1.8 kg | Total Scale Loss = 2.66 kg"
    },
    metricsText: "Initial rapid scale loss during the first 48 hours of fasting is predominantly water weight shed as the liver and muscles deplete glycogen stores (1g glycogen binds ~3-4g water).",
    useCases: [
      "Intermittent Fasting Tracking: Plan daily 16/8 or 20/4 fasting windows for insulin sensitivity and weight management.",
      "Autophagy & Ketosis Timeline: Track estimated timeframes for cellular autophagy and deep nutritional ketosis.",
      "Refeeding Planning: Plan safe post-fast refeeding meals to avoid gastrointestinal distress."
    ],
    commonMistakes: [
      "Confusing initial rapid glycogen water loss with true permanent adipose fat tissue reduction.",
      "Neglecting essential electrolyte supplementation (sodium, potassium, magnesium) during extended fasts.",
      "Breaking multi-day fasts with heavy, high-carbohydrate meals instead of light, easily digestible bone broth or healthy fats."
    ],
    faqs: [
      { question: "What is autophagy during fasting?", answer: "A cellular recycling process where cells degrade and clean out damaged organelles and misfolded proteins, typically peaking after 24 to 48 hours of fasting." },
      { question: "Why do I get headaches during a water fast?", answer: "Headaches are usually caused by acute electrolyte depletion (hyponatremia) as insulin drops and the kidneys excrete sodium; drinking water with electrolytes resolves this." },
      { question: "Who should avoid extended water fasting?", answer: "Pregnant or nursing women, individuals with a history of eating disorders, type-1 diabetics, and underweight individuals should not water fast without medical supervision." }
    ],
    sources: [{ name: "Cell Metabolism Journal (Fasting Research)", url: "https://www.cell.com/cell-metabolism" }]
  },

  "one-rep-max-calculator": {
    overview: "Estimates maximum single-repetition lift capacity (1RM) for bench press, squats, and deadlifts using clinically validated Epley and Brzycki strength equations.",
    formula: "Epley: 1RM = Weight × (1 + Reps / 30) | Brzycki: 1RM = Weight × [36 / (37 - Reps)]",
    explanation: "Predicts maximum lift capacity from submaximal multi-rep sets (1 to 10 repetitions) without requiring dangerous maximal lift attempts.",
    example: {
      title: "Worked Example: Lifting 80 kg for 6 Repetitions on Bench Press",
      inputs: "Weight Lifted = 80 kg | Completed Repetitions = 6 Reps",
      steps: [
        "Epley Formula: 80 × (1 + 6 / 30) = 80 × 1.20 = 96.0 kg",
        "Brzycki Formula: 80 × [36 / (37 - 6)] = 80 × (36 / 31) = 92.9 kg",
        "Averaged Estimated 1RM = ~94.5 kg"
      ],
      summary: "Lift = 80 kg × 6 Reps | Estimated 1RM = 95 kg | 80% Training Weight = 76 kg"
    },
    metricsText: "Submaximal 1RM estimation from 3-5 rep sets is within 2-3% of true maximal lift capacity while minimizing central nervous system fatigue and injury risk.",
    useCases: [
      "Powerlifting Training Percentages: Calibrate percentage-based strength cycles (e.g. 5/3/1 program sets at 75%, 85%, 95% of 1RM).",
      "Benchmark Strength Testing: Test strength gains safely every 8 to 12 weeks without risking joint injury from maximal singles.",
      "Workload Periodization: Adjust training loads across hypertrophy (70-80% 1RM) and peak strength (85-95% 1RM) blocks."
    ],
    commonMistakes: [
      "Using sets higher than 10 repetitions to predict 1RM (muscle endurance alters accuracy above 10 reps).",
      "Failing to maintain strict exercise form during testing sets (e.g. bouncing bench press off chest).",
      "Attempting true 1RM lifts without qualified spotters and safety catch pins."
    ],
    faqs: [
      { question: "Why not just test true 1RM directly?", answer: "Testing true 1RM carries high injury risk for joints, ligaments, and tendons, and takes days for the central nervous system to recover." },
      { question: "Which 1RM formula is most accurate?", answer: "The Brzycki and Epley formulas are both highly accurate for sets between 3 and 8 repetitions; Brzycki tends to be slightly more conservative." },
      { question: "What percentage of 1RM should I lift for muscle hypertrophy?", answer: "Hypertrophy training typically utilizes 65% to 80% of 1RM for sets of 8 to 12 repetitions." }
    ],
    sources: [{ name: "National Strength and Conditioning Association (NSCA)", url: "https://www.nsca.com" }]
  },

  "macro-ratio-split-calculator": {
    overview: "Calculates precise gram allocations and caloric ratios for specialized dietary regimens including Ketogenic, Low-Carb High-Fat, and Zone 40-30-30 protocols.",
    formula: "Protein (g) = (Total Calories × % Protein) / 4 | Carbs (g) = (Calories × % Carbs) / 4 | Fat (g) = (Calories × % Fat) / 9",
    explanation: "Standard splits: Balanced (40C / 30P / 30F), Low Carb (25C / 40P / 35F), Keto (5C / 25P / 70F), High Carb Endurance (60C / 20P / 20F).",
    example: {
      title: "Worked Example: 2,000 kcal Ketogenic Diet Split (5% Carbs, 25% Protein, 70% Fat)",
      inputs: "Daily Calories = 2,000 kcal | Carbs = 5% | Protein = 25% | Fat = 70%",
      steps: [
        "Carbohydrate grams = (2,000 × 0.05) / 4 = 100 / 4 = 25 g/day",
        "Protein grams = (2,000 × 0.25) / 4 = 500 / 4 = 125 g/day",
        "Dietary Fat grams = (2,000 × 0.70) / 9 = 1,400 / 9 = 155.6 g/day"
      ],
      summary: "Calories = 2,000 kcal | Net Carbs = 25 g (5%) | Protein = 125 g (25%) | Fat = 156 g (70%)"
    },
    metricsText: "In ketogenic diets, keeping net carbohydrates strictly below 30-50g per day is essential to maintain hepatic ketone production and nutritional ketosis.",
    useCases: [
      "Ketogenic Induction: Set accurate 5% carbohydrate limits to induce and sustain nutritional ketosis.",
      "Endurance Glycogen Loading: Configure high-carb 60% splits in the 48 hours prior to marathon competition.",
      "Fat Loss Satiety Optimization: Increase protein to 35-40% of calories to leverage the higher thermic effect of food (TEF)."
    ],
    commonMistakes: [
      "Measuring total carbs instead of net carbs (total carbohydrates minus dietary fiber and sugar alcohols).",
      "Overconsuming protein on a ketogenic diet, which can trigger gluconeogenesis and knock individuals out of ketosis.",
      "Neglecting healthy monounsaturated and omega-3 polyunsaturated fats in favor of processed trans-fats."
    ],
    faqs: [
      { question: "What is the difference between total carbs and net carbs?", answer: "Net carbs = Total Carbs minus Dietary Fiber; fiber does not raise blood glucose or insulin and is not counted toward ketogenic limits." },
      { question: "What is the Thermic Effect of Food (TEF)?", answer: "The energy required to digest nutrients: protein has the highest TEF (20-30% of calories burned in digestion), compared to carbs (5-10%) and fats (0-3%)." },
      { question: "Can I build muscle on a low-carb diet?", answer: "Yes, as long as total daily protein intake and overall calories are sufficient to support muscle protein synthesis and recovery." }
    ],
    sources: [{ name: "Academy of Nutrition and Dietetics", url: "https://www.eatright.org" }]
  }
};

