// 9 Bespoke Education Tool Guides
export const educationToolGuides = {
  "percentage-calculator": {
    overview: "Computes three essential percentage calculations: what is X% of Y, X is what percentage of Y, and percentage increase or decrease between two numbers.",
    formula: "Percentage Value = (Part / Whole) × 100 | Percentage of Number = (Percentage / 100) × Number",
    explanation: "Calculates proportional ratios, test score percentages, marksheets, and financial variance metrics.",
    example: {
      title: "Worked Example: Scoring 465 Marks out of 500 Maximum Marks",
      inputs: "Marks Scored = 465 | Maximum Total Marks = 500",
      steps: [
        "Divide obtained score by total maximum score: 465 / 500 = 0.93",
        "Multiply by 100 to convert to percentage: 0.93 × 100 = 93.0%"
      ],
      summary: "Obtained = 465 | Total = 500 | Percentage = 93.0% (Grade A+)"
    },
    metricsText: "A percentage expresses a fraction with 100 as the common denominator, enabling direct mathematical comparison across different scales.",
    useCases: [
      "Exam Score Conversion: Convert aggregate marks from board and university exams into standardized percentages.",
      "Retail Discounts: Verify clearance sale price reductions and calculate sales tax amounts on shopping receipts.",
      "Financial Growth: Measure year-over-year revenue growth, investment returns, and salary increases."
    ],
    commonMistakes: [
      "Confusing percentage change (relative change) with percentage points (simple arithmetic subtraction).",
      "Reversing the numerator and denominator when calculating what percent one number is of another.",
      "Dividing by the new number instead of the original base number when calculating percentage increase."
    ],
    faqs: [
      { question: "How do I calculate what percentage a number is of another?", answer: "Divide the part by the whole and multiply by 100 (e.g. 25 of 80: [25 / 80] × 100 = 31.25%)." },
      { question: "What is the difference between percent and percentage points?", answer: "If a tax rate moves from 10% to 12%, it increased by 2 percentage points, but rose by 20% in relative terms." },
      { question: "Can a percentage exceed 100%?", answer: "Yes. Any value that is more than double its baseline represents an increase greater than 100% (e.g. 250 is 250% of 100)." }
    ],
    sources: [{ name: "National Council of Teachers of Mathematics", url: "https://www.nctm.org" }]
  },

  "cgpa-calculator": {
    overview: "Calculates Cumulative Grade Point Average (CGPA) on a 10-point scale across all academic semesters and converts cumulative scores to equivalent percentages.",
    formula: "CGPA = Sum of (Subject Grade Points × Credit Hours) / Total Credit Hours Across All Semesters",
    explanation: "For CBSE secondary schools: CGPA is the simple average of grade points in 5 main subjects; Percentage = CGPA × 9.5.",
    example: {
      title: "Worked Example: Student with 5 Subjects on 10-Point Grading Scale",
      inputs: "Grade Points: Math = 9.0, Science = 8.0, English = 9.0, Social = 8.0, Hindi = 9.0",
      steps: [
        "Sum of Grade Points = 9.0 + 8.0 + 9.0 + 8.0 + 9.0 = 43.0",
        "CGPA = 43.0 / 5 = 8.60 CGPA",
        "CBSE Percentage Equivalent = 8.60 × 9.5 = 81.70%"
      ],
      summary: "Total Grade Points = 43.0 | CGPA = 8.60 / 10 | Percentage Equivalent = 81.70%"
    },
    metricsText: "The CBSE 9.5 conversion multiplier was derived from statistical score distributions to reflect the midpoint of marks within each grade band.",
    useCases: [
      "CBSE Secondary School Marksheets: Calculate official Class 10 board exam CGPA and percentage equivalents.",
      "Engineering College Transcripts: Combine semester-by-semester SGPA results into cumulative degree CGPA.",
      "Campus Placement Screening: Verify eligibility against corporate cutoffs (e.g. minimum 7.0 or 7.5 CGPA)."
    ],
    commonMistakes: [
      "Using a 10x multiplier instead of the official CBSE 9.5 multiplier when converting CGPA to percentage.",
      "Averaging semester SGPAs without weighting by the different credit hours completed in each semester.",
      "Prematurely rounding grade points before calculating the final cumulative quotient."
    ],
    faqs: [
      { question: "Why does CBSE use 9.5 as the multiplier instead of 10?", answer: "CBSE analyzed past score distributions: students scoring in the A1 band (91-100 marks) averaged 95 marks, giving a conversion factor of 95 / 10 = 9.5." },
      { question: "How is SGPA different from CGPA?", answer: "SGPA (Semester Grade Point Average) measures academic performance in a single term; CGPA measures cumulative performance across all terms to date." },
      { question: "Is a 9.0 CGPA considered first class with distinction?", answer: "In most Indian universities, a CGPA of 7.5 and above qualifies as First Class with Distinction (or First Division)." }
    ],
    sources: [{ name: "Central Board of Secondary Education (CBSE)", url: "https://www.cbse.gov.in" }]
  },

  "attendance-calculator": {
    overview: "Tracks academic attendance percentages and calculates the exact number of future classes you can miss or must attend to meet minimum institutional attendance criteria.",
    formula: "Current Attendance % = (Classes Attended / Total Classes Conducted) × 100",
    explanation: "To reach Target %: Required Classes = [(Target × Total - 100 × Attended) / (100 - Target)]. To find Safe Bunks: Bunks = [(100 × Attended - Target × Total) / Target].",
    example: {
      title: "Worked Example: 45 Attended out of 60 Classes with 75% Requirement",
      inputs: "Classes Attended = 45 | Total Conducted = 60 | Target Requirement = 75%",
      steps: [
        "Current Attendance = (45 / 60) × 100 = 75.0%",
        "Safe Bunk Calculation: [100 × 45 - 75 × 60] / 75 = [4500 - 4500] / 75 = 0 classes",
        "If 20 more classes are held in the semester, attending 15 keeps attendance at (60 / 80) × 100 = 75.0%"
      ],
      summary: "Current Attendance = 75.0% | Status: Eligible | Safe Bunks = 0 Classes"
    },
    metricsText: "Most universities mandate 75% minimum attendance to sit for final semester examinations under University Grants Commission (UGC) regulations.",
    useCases: [
      "Exam Eligibility Safeguard: Ensure attendance remains strictly above 75% or 80% to prevent academic debarment.",
      "Absence Planning: Calculate how many classes can be safely skipped for college festivals, interviews, or illness.",
      "Attendance Recovery: Determine the exact consecutive attendance streak needed to recover from low attendance."
    ],
    commonMistakes: [
      "Assuming a missed 2-hour laboratory block counts as only 1 missed lecture attendance point.",
      "Forgetting that each skipped class increases the denominator (total classes held), dropping percentage rapidly.",
      "Failing to submit medical certificates within institutional deadlines to claim medical attendance leave."
    ],
    faqs: [
      { question: "How many classes do I need to attend to reach 75% from 60%?", answer: "Use the formula: Required = (0.75 × Total - Attended) / (1 - 0.75); you must attend 3 classes for every 1 future class missed." },
      { question: "What happens if my attendance falls below 75%?", answer: "Depending on university policy, you may receive a condonation fine, lose internal assessment marks, or be debarred from writing exams." },
      { question: "Do college lab sessions count the same as theory lectures?", answer: "Many universities assign higher credit or double attendance hours to 2-3 hour practical lab sessions." }
    ],
    sources: [{ name: "University Grants Commission (UGC)", url: "https://www.ugc.gov.in" }]
  },

  "gpa-calculator": {
    overview: "Calculates single-semester Grade Point Average (GPA) on a 4.0 or 10.0 scale by weighting individual course letter grades by their assigned credit hours.",
    formula: "GPA = Sum of (Course Credit Hours × Grade Point) / Total Semester Credit Hours",
    explanation: "Standard 4.0 scale mappings: A (4.0), A- (3.7), B+ (3.3), B (3.0), B- (2.7), C+ (2.3), C (2.0), D (1.0), F (0.0).",
    example: {
      title: "Worked Example: 4 Courses Completed in a Semester on 4.0 Scale",
      inputs: "Math (4 cr, Grade A=4.0) | Physics (3 cr, Grade B+=3.3) | English (3 cr, Grade A-=3.7) | Lab (1 cr, Grade A=4.0)",
      steps: [
        "Quality points = (4 × 4.0) + (3 × 3.3) + (3 × 3.7) + (1 × 4.0) = 16.0 + 9.9 + 11.1 + 4.0 = 41.0 points",
        "Total semester credits = 4 + 3 + 3 + 1 = 11 credits",
        "Semester GPA = 41.0 / 11 = 3.73 GPA"
      ],
      summary: "Total Credits = 11 | Quality Points = 41.0 | Semester GPA = 3.73 / 4.0 (Dean's List)"
    },
    metricsText: "High-credit core courses (3-4 credits) impact your GPA three to four times more than single-credit introductory seminars or lab modules.",
    useCases: [
      "Semester Academic Tracking: Calculate term GPA to verify eligibility for academic honors and scholarships.",
      "Grading Strategy: Determine which course grades require greatest study focus to maximize semester GPA.",
      "Exchange Student Conversion: Convert European ECTS or Asian grading scales to standard US 4.0 GPA."
    ],
    commonMistakes: [
      "Calculating an unweighted average of letter grades without multiplying by each course's credit hours.",
      "Including non-credit audit courses or Pass/Fail courses in the GPA credit calculation.",
      "Failing to account for plus/minus grading nuances (+0.3 / -0.3 adjustments) on 4.0 scales."
    ],
    faqs: [
      { question: "What is a good GPA on a 4.0 scale?", answer: "A 3.0 (B average) is standard; 3.5+ qualifies for Dean's List honors; 3.8+ is competitive for top-tier graduate schools." },
      { question: "Do Pass/Fail or Withdrawn (W) grades affect GPA?", answer: "Pass/Fail and official course withdrawals (W) do not impact GPA; however, failing a Pass/Fail course (Fail) may count as 0.0 points in some colleges." },
      { question: "How do credit hours affect my GPA?", answer: "Credit hours represent weighting: getting an A in a 4-credit course provides four times the grade points of getting an A in a 1-credit course." }
    ],
    sources: [{ name: "National Association of Student Financial Aid Administrators", url: "https://www.nasfaa.org" }]
  },

  "grade-calculator": {
    overview: "Computes overall course grades based on weighted syllabus assessment categories (homework, midterms, quizzes, laboratory work, and final exams).",
    formula: "Final Grade (%) = Sum of (Category Average Score % × Category Weight %)",
    explanation: "Weights must sum to 100%. To find needed score on final exam: Needed = [Target Grade - Current Weighted Score] / Final Exam Weight.",
    example: {
      title: "Worked Example: Course with Homework (20%), Midterm (30%), and Final (50%)",
      inputs: "Homework = 90% (wt 20%) | Midterm = 80% (wt 30%) | Target Grade = 85% (Grade A)",
      steps: [
        "Current earned points = (90 × 0.20) + (80 × 0.30) = 18.0 + 24.0 = 42.0 points",
        "Points needed from final exam = 85.0 - 42.0 = 43.0 points",
        "Required score on final exam = 43.0 / 0.50 = 86.0%"
      ],
      summary: "Current Grade = 84.0% | Target = 85.0% | Needed on 50% Final Exam = 86.0%"
    },
    metricsText: "Heavily weighted final exams (40% to 50%) can dramatically swing a course grade by two full letter grades in a single test.",
    useCases: [
      "Final Exam Planning: Calculate the exact minimum score needed on the final exam to pass or secure an A grade.",
      "Syllabus Weight Breakdown: Map out how much each homework assignment and quiz contributes to total course grades.",
      "Academic Triage: Allocate study hours strategically to assessments carrying the highest percentage weighting."
    ],
    commonMistakes: [
      "Summing raw assignment scores together when syllabus categories carry unequal percentage weights.",
      "Forgetting to drop the lowest homework or quiz grade if the professor's syllabus allows dropped scores.",
      "Assuming a 90% average before the final exam guarantees an A without calculating the final exam's impact."
    ],
    faqs: [
      { question: "How do I calculate what I need on the final exam?", answer: "Subtract your current weighted points from your target grade percentage, then divide by the decimal weight of the final exam." },
      { question: "What if syllabus category weights do not equal 100%?", answer: "Divide your earned weighted points by the sum of completed category weights to find your current course standing." },
      { question: "How do curved grades impact weighted calculations?", answer: "Curving adjusts the raw score distribution across the entire class, typically boosting the class median to a target grade (like B or B-)." }
    ],
    sources: [{ name: "Association of American Colleges and Universities", url: "https://www.aacu.org" }]
  },

  "cgpa-to-percentage-calculator": {
    overview: "Converts university and CBSE 10-point scale CGPA scores into official percentage equivalents using verified institutional formulas.",
    formula: "Percentage (%) = CGPA × 9.5 (CBSE Standard) | University Formula: (CGPA - 0.75) × 10 or (CGPA - 0.5) × 10",
    explanation: "CBSE uses the 9.5 factor; Mumbai University uses (7.1 × CGPA) + 11; VTU and KTU use (CGPA - 0.75) × 10. Check transcript guidelines.",
    example: {
      title: "Worked Example: Converting 8.8 CGPA under CBSE Guidelines",
      inputs: "CGPA = 8.8 on a 10.0 scale | Formula = CBSE Standard (9.5x)",
      steps: [
        "Multiply CGPA by conversion factor: 8.8 × 9.5 = 83.60%",
        "Corresponding Letter Grade: A1 Band (Excellent Academic Standing)"
      ],
      summary: "CGPA = 8.8 / 10 | Conversion Multiplier = 9.5 | Percentage Equivalent = 83.60%"
    },
    metricsText: "Different Indian engineering universities use distinct conversion multipliers; always verify the certified formula printed on the reverse of your official degree transcript.",
    useCases: [
      "Government Job Applications: Convert university CGPA to percentage for UPSC, SSC, and state public service commission forms.",
      "Corporate Recruitment: Fill out company job portal eligibility forms that mandate percentage inputs.",
      "Scholarship Applications: Verify whether academic standing meets minimum percentage criteria (e.g. 60% or 75%)."
    ],
    commonMistakes: [
      "Using the CBSE 9.5 formula for university engineering degrees that mandate (CGPA - 0.75) × 10.",
      "Multiplying directly by 10 (e.g. 8.0 CGPA = 80%), which is invalid for most Indian universities.",
      "Failing to attach the official formula circular when submitting degree certificates to employers."
    ],
    faqs: [
      { question: "Why doesn't CGPA convert to percentage simply by multiplying by 10?", answer: "Because grade point bands represent score ranges rather than single marks, and linear 10x scaling inflates marks unrealistically." },
      { question: "What is VTU's official CGPA to percentage formula?", answer: "Visvesvaraya Technological University (VTU) uses: Percentage (%) = (CGPA - 0.75) × 10." },
      { question: "Where can I find my university's official conversion formula?", answer: "The official conversion formula is printed on the back of your consolidated marksheet or degree transcript." }
    ],
    sources: [{ name: "All India Council for Technical Education (AICTE)", url: "https://www.aicte-india.org" }]
  },

  "gpa-to-percentage-converter": {
    overview: "Converts US 4.0 scale GPA scores to international percentage marks and European ECTS letter grades for university admissions.",
    formula: "Percentage (%) = (GPA / 4.0) × 100 (Rough Linear) | WES Standard Scale: 4.0 = 93-100%, 3.7 = 90-92%, 3.3 = 87-89%, 3.0 = 83-86%",
    explanation: "Converts between 4.0, 5.0, and 10.0 academic GPA scales using World Education Services (WES) credential evaluation standards.",
    example: {
      title: "Worked Example: Converting a 3.6 GPA on a 4.0 Scale",
      inputs: "GPA = 3.6 on 4.0 Scale | Evaluation Standard = WES Equivalent",
      steps: [
        "Mapping to standard percentage band: 3.6 GPA corresponds to the 87% to 89% band",
        "Midpoint equivalent percentage = 88.0%",
        "Letter Grade Equivalent: B+ / A- (Very Good Academic Standing)"
      ],
      summary: "US GPA = 3.6 / 4.0 | Percentage Equivalent = ~88.0% | ECTS Grade = B"
    },
    metricsText: "Direct linear conversion (GPA / 4 × 100) is inaccurate for US GPA; an A grade (4.0) in the US represents marks typically above 90%, not 100%.",
    useCases: [
      "Study Abroad Applications: Convert Indian percentages or 10-point CGPA into US 4.0 GPA for MS and MBA applications.",
      "Credential Evaluation: Prepare documents for evaluation agencies like World Education Services (WES) and ECE.",
      "International CV Preparation: Present academic scores in formats understood by global multinational recruiters."
    ],
    commonMistakes: [
      "Applying simple linear scaling (e.g. 3.0 / 4.0 = 75%), which severely understates true academic achievement.",
      "Ignoring that an Indian First Class with Distinction (75%+) often equates to a 3.7 to 4.0 GPA in US evaluations.",
      "Converting individual assignment marks rather than full course letter grades."
    ],
    faqs: [
      { question: "How does WES evaluate Indian university marks?", answer: "WES evaluates Indian degree transcripts by converting marks above 60-70% into A and B grades on the US 4.0 scale." },
      { question: "What is an acceptable GPA for US master's programs?", answer: "Most competitive graduate schools require a minimum 3.0 GPA (roughly equivalent to an Indian First Class degree)." },
      { question: "How do 5.0 GPA scales compare to 4.0 scales?", answer: "A 5.0 scale typically reflects weighted GPAs from Advanced Placement (AP) or International Baccalaureate (IB) courses." }
    ],
    sources: [{ name: "World Education Services (WES)", url: "https://www.wes.org" }]
  },

  "weighted-gpa-calculator": {
    overview: "Calculates weighted high school GPA on a 5.0 scale, awarding extra quality point weightings for Advanced Placement (AP), Honors, and IB courses.",
    formula: "Weighted GPA = Sum of (Course Credits × Weighted Grade Point) / Total Credits",
    explanation: "Standard weighting additions: Regular course (A=4.0), Honors course (A=4.5), Advanced Placement / International Baccalaureate (A=5.0).",
    example: {
      title: "Worked Example: Student with 2 AP Courses and 2 Regular Courses",
      inputs: "AP Calc (Grade A = 5.0, 1 cr) | AP Physics (Grade B = 4.0, 1 cr) | English (Grade A = 4.0, 1 cr) | History (Grade A = 4.0, 1 cr)",
      steps: [
        "Quality points = (1 × 5.0) + (1 × 4.0) + (1 × 4.0) + (1 × 4.0) = 17.0 points",
        "Total completed credits = 4.0 credits",
        "Weighted GPA = 17.0 / 4 = 4.25 GPA",
        "Unweighted GPA equivalent = (4.0 + 3.0 + 4.0 + 4.0) / 4 = 3.75 GPA"
      ],
      summary: "Weighted GPA = 4.25 / 5.0 | Unweighted GPA = 3.75 / 4.0 | Academic Boost = +0.50 points"
    },
    metricsText: "Weighted GPAs can exceed 4.0, allowing high-achieving students taking rigorous AP and IB courses to compete for top class rank percentiles.",
    useCases: [
      "College Admissions Strategy: Demonstrate course rigor and academic achievement to competitive university admissions boards.",
      "Class Rank Competition: Calculate weighted rank points required for valedictorian and salutatorian honors.",
      "Course Load Optimization: Balance AP challenge courses with extracurricular time commitments."
    ],
    commonMistakes: [
      "Assuming all colleges evaluate weighted GPA (many state universities recalculate GPAs on an unweighted 4.0 scale).",
      "Assigning AP weight (+1.0 point) to introductory courses that only carry Honors weighting (+0.5 point).",
      "Failing to award proper quality points for grades below C (many schools do not weight D or F grades)."
    ],
    faqs: [
      { question: "What is the difference between weighted and unweighted GPA?", answer: "Unweighted GPA caps grades at 4.0 regardless of course difficulty; weighted GPA awards up to 5.0 for challenging AP and IB courses." },
      { question: "Do colleges prefer a higher unweighted GPA or a higher weighted GPA?", answer: "Admissions officers look for 'strength of curriculum': taking rigorous courses and performing well is preferred over easy A grades." },
      { question: "Can a weighted GPA exceed 5.0?", answer: "In standard high school systems, weighted GPAs max out at 5.0 for straight A grades in AP/IB courses." }
    ],
    sources: [{ name: "College Board Advanced Placement (AP)", url: "https://apcentral.collegeboard.org" }]
  },

  "grade-point-converter": {
    overview: "Converts percentage marks into letter grades and 10-point scale grade points across standard CBSE, ICSE, and Indian university grading matrices.",
    formula: "Grade Point = Lookup_Table(Marks_Range) | CBSE 91-100% = A1 (GP 10), 81-90% = A2 (GP 9), 71-80% = B1 (GP 8)",
    explanation: "Standard 7-band and 9-band grading systems map percentage marks into corresponding numerical grade points (1.0 to 10.0).",
    example: {
      title: "Worked Example: Student Scoring 76 Marks in Mathematics",
      inputs: "Marks Obtained = 76 / 100 | Board Standard = CBSE 9-Band Grading",
      steps: [
        "Score falls into the 71% to 80% marks bracket",
        "Assigned Letter Grade = B1",
        "Assigned Grade Point = 8.0 Grade Points"
      ],
      summary: "Marks = 76 / 100 | Letter Grade = B1 | Grade Point = 8.0"
    },
    metricsText: "Grading matrices group student performance into discrete bands to reduce high-stakes exam pressure associated with raw numerical scores.",
    useCases: [
      "Marksheet Conversion: Convert subject-wise marks into official letter grades for board report cards.",
      "Credit Calculation: Determine individual subject grade points required to calculate semester SGPA.",
      "Eligibility Screening: Confirm that subject scores meet minimum Grade Point cutoffs for stream selection (Science, Commerce, Arts)."
    ],
    commonMistakes: [
      "Assuming grade point bands are identical across state boards, central boards, and autonomous engineering colleges.",
      "Confusing relative grading (grading on a curve) with absolute percentage-to-grade lookup tables.",
      "Forgetting that 33% is the statutory minimum passing grade point (Grade D) in Indian school boards."
    ],
    faqs: [
      { question: "What is the passing grade point in CBSE?", answer: "Grade D (Grade Point 4.0, representing 33% to 40% marks) is the minimum required to pass a subject." },
      { question: "What is an A1 grade in CBSE?", answer: "Grade A1 represents scores in the 91% to 100% marks bracket, awarding 10.0 grade points." },
      { question: "Can grade point conversion tables be customized?", answer: "Yes, autonomous universities publish custom grading matrices in their academic regulations." }
    ],
    sources: [{ name: "Central Board of Secondary Education Examination Bylaws", url: "https://www.cbse.gov.in" }]
  }
};

