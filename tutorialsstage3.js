// Maharashtra State Board Class 10 Mathematics Tutorial Database (All 13 Chapters)
const chapterTutorials = {
  // ==================== MATHS PART I — ALGEBRA ====================
  "m1-1": {
    title: "Linear Equations in Two Variables",
    lessons: [
      {
        id: "m1-1-l1",
        title: "Simultaneous Linear Equations (Elimination & Substitution)",
        objectives: [
          "Identify linear equations in two variables in general form ax + by + c = 0",
          "Solve simultaneous linear equations using Elimination and Substitution methods"
        ],
        hinglish: "Linear equation in two variables ka matlab hai aisi equation jisme do variables (jaise x aur y) hon aur dono ki maximum degree (power) 1 ho. Jaise 2x + 3y = 12. Jab hum aisi do equations ko ek sath solve karte hain taaki x aur y ki aisi common values mile jo dono equations ko satisfy karein, toh ise Simultaneous Linear Equations kehte hain. Elimination method me hum kisi ek variable ke coefficients ko same banakar add ya subtract karte hain taaki wo variable cancel ho jaye.",
        boardNotes: "An equation which contains two variables and the degree of each term containing variable is one, is called a linear equation in two variables. General form: ax + by + c = 0, where a, b, c are real numbers and a, b are not equal to zero at the same time. When we think about two linear equations in two variables at the same time, they are called simultaneous equations.",
        formulaBox: "General Form: ax + by + c = 0  (a ≠ 0, b ≠ 0)
Standard Form for Solving: ax + by = c",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Elimination Method",
          problem: "Solve the simultaneous equations: 5x + 3y = 9 ... (I) and 2x - 3y = 12 ... (II)",
          steps: [
            "Observe the coefficients of y in both equations: they are +3 and -3 (equal in magnitude, opposite in sign).",
            "Adding equation (I) and equation (II): (5x + 3y) + (2x - 3y) = 9 + 12",
            "7x = 21  ⇒  x = 21 / 7  ⇒  x = 3.",
            "Substituting x = 3 in equation (I): 5(3) + 3y = 9  ⇒  15 + 3y = 9  ⇒  3y = 9 - 15 = -6  ⇒  y = -2.",
            "Therefore, (x, y) = (3, -2) is the solution of the given simultaneous equations."
          ]
        },
        commonMistakes: [
          "Forgetting to multiply every term of an equation when equalizing coefficients.",
          "Sign errors when subtracting one equation from another."
        ],
        examTips: [
          "Always write the final answer in ordered pair format: (x, y) = (3, -2).",
          "In special equations like 15x + 17y = 21 and 17x + 15y = 11, first add both equations and then subtract them to get two simple equations."
        ],
        checkpoint: {
          question: "Which of the following is a linear equation in two variables?",
          options: [
            "4x² + 3y = 12",
            "3x - 7y = 13",
            "2xy + 5 = 9",
            "5x + 0y = 8 (where coefficient of y is 0)"
          ],
          correct: 1,
          explanation: "In 3x - 7y = 13, both x and y have degree 1 and non-zero coefficients (a = 3, b = -7)."
        }
      },
      {
        id: "m1-1-l2",
        title: "Graphical Method & Determinant Method (Cramer's Rule)",
        objectives: [
          "Understand graphical representation of linear equations",
          "Evaluate 2×2 determinants and solve equations using Cramer's Rule"
        ],
        hinglish: "Har linear equation ka graph ek straight line hota hai. Jahan do lines intersect karti hain, us point ke coordinates (x, y) hi solution hote hain. Doosra powerful method hai Cramer's Rule: isme 2×2 Determinant |a b; c d| = ad - bc ka use karke direct D, Dx aur Dy nikala jata hai.",
        boardNotes: "Determinant of order 2: |a  b; c  d| = ad - bc. For simultaneous equations a1x + b1y = c1 and a2x + b2y = c2:
D = |a1  b1; a2  b2|,  Dx = |c1  b1; c2  b2|,  Dy = |a1  c1; a2  c2|.
By Cramer's Rule: x = Dx / D and y = Dy / D (provided D ≠ 0).",
        formulaBox: "D = a1b2 - a2b1
Dx = c1b2 - c2b1
Dy = a1c2 - a2c1
x = Dx / D,   y = Dy / D",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Cramer's Rule",
          problem: "Solve using Cramer's Rule: 3x - 4y = 10 ; 4x + 3y = 5",
          steps: [
            "Compare with a1x + b1y = c1 and a2x + b2y = c2: a1 = 3, b1 = -4, c1 = 10 and a2 = 4, b2 = 3, c2 = 5.",
            "D = (3)(3) - (-4)(4) = 9 - (-16) = 9 + 16 = 25.",
            "Dx = (10)(3) - (-4)(5) = 30 - (-20) = 30 + 20 = 50.",
            "Dy = (3)(5) - (10)(4) = 15 - 40 = -25.",
            "x = Dx / D = 50 / 25 = 2;   y = Dy / D = -25 / 25 = -1. Solution: (x, y) = (2, -1)."
          ]
        },
        commonMistakes: [
          "Applying Cramer's Rule before converting equations into ax + by = c form.",
          "Swapping columns when writing Dx (replace x-column with constants c1, c2) and Dy (replace y-column with constants)."
        ],
        examTips: [
          "Always write the scale on the top right corner of your graph paper (e.g., Scale: On both axes, 1 cm = 1 unit)."
        ],
        checkpoint: {
          question: "Find the value of the determinant | 5   3 |
| -7  0 |",
          options: ["21", "-21", "0", "35"],
          correct: 0,
          explanation: "Value = (5 × 0) - (3 × -7) = 0 - (-21) = +21."
        }
      },
      {
        id: "m1-1-l3",
        title: "Equations Reducible to Linear Form & Applications",
        objectives: [
          "Transform non-linear fractional equations into linear form using substitution",
          "Formulate simultaneous equations from word problems"
        ],
        hinglish: "Kai baar variables denominator me hote hain, jaise 2/x + 3/y = 13. Ise direct solve karna mushkil hota hai, isliye hum 1/x = m aur 1/y = n maan lete hain. Isse equation simple linear form 2m + 3n = 13 ban jati hai! Solve karne ke baad m aur n se wapas x aur y nikal lete hain.",
        boardNotes: "Equations of the form a1/x + b1/y = c1 and a2/x + b2/y = c2 are reduced to linear equations in two variables by substituting 1/x = m and 1/y = n. After finding m and n, resubstitute to obtain x and y.",
        formulaBox: "Substitution Rule: Let 1/x = m and 1/y = n
After solving for m and n: x = 1/m,  y = 1/n",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Reducible Equations",
          problem: "Solve: 2/x + 3/y = 13 and 5/x - 4/y = -2",
          steps: [
            "Substitute 1/x = m and 1/y = n: 2m + 3n = 13 ... (I) and 5m - 4n = -2 ... (II).",
            "Multiply (I) by 4 and (II) by 3: 8m + 12n = 52 and 15m - 12n = -6.",
            "Adding both: 23m = 46  ⇒  m = 2. Substituting m = 2 in (I): 2(2) + 3n = 13  ⇒  3n = 9  ⇒  n = 3.",
            "Resubstituting: 1/x = 2 ⇒ x = 1/2, and 1/y = 3 ⇒ y = 1/3.",
            "Solution: (x, y) = (1/2, 1/3)."
          ]
        },
        commonMistakes: [
          "Stopping after finding m and n and forgetting to convert back to x and y."
        ],
        examTips: [
          "In word problems on ages, upstream/downstream boats, or two-digit numbers (10x + y), clearly define what x and y represent in your opening lines."
        ],
        checkpoint: {
          question: "If 1/x = 4 and 1/y = -1/3 after solving a reducible system, what is (x, y)?",
          options: ["(4, -3)", "(1/4, -3)", "(1/4, -1/3)", "(4, -1/3)"],
          correct: 1,
          explanation: "Taking reciprocals: x = 1/4 and y = -3."
        }
      }
    ]
  },

  "m1-2": {
    title: "Quadratic Equations",
    lessons: [
      {
        id: "m1-2-l1",
        title: "Standard Form & Factorization Method",
        objectives: [
          "Identify quadratic equations and write them in standard form ax² + bx + c = 0",
          "Find roots of a quadratic equation by factorization"
        ],
        hinglish: "Quadratic equation wo polynomial equation hoti hai jisme ek hi variable hota hai aur uski highest power (degree) 2 hoti hai. Standard form hai ax² + bx + c = 0 (jahan a ≠ 0). Factorization method me hum constant term c (ya a × c) ke do aise factors dhundhte hain jinka sum middle coefficient b ke barabar ho.",
        boardNotes: "The equation involving one variable and having 2 as the maximum index of the variable is called a quadratic equation. Standard form: ax² + bx + c = 0, where a, b, c are real numbers and a ≠ 0. Values of the variable which satisfy the equation are called roots of the quadratic equation.",
        formulaBox: "Standard Form: ax² + bx + c = 0  (a ≠ 0)
Zero Product Property: If P × Q = 0, then P = 0 or Q = 0",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Factorization",
          problem: "Solve the quadratic equation by factorization: x² - 15x + 54 = 0",
          steps: [
            "Here product a × c = 1 × 54 = 54, and sum b = -15.",
            "Factors of 54 whose sum is -15 are -9 and -6 (since (-9) × (-6) = 54 and -9 + (-6) = -15).",
            "Split the middle term: x² - 9x - 6x + 54 = 0",
            "Group and factor: x(x - 9) - 6(x - 9) = 0  ⇒  (x - 9)(x - 6) = 0",
            "x - 9 = 0 or x - 6 = 0  ⇒  x = 9 or x = 6. Roots are 9 and 6."
          ]
        },
        commonMistakes: [
          "Dividing both sides by a variable (like x) and losing the root x = 0.",
          "Forgetting to multiply a and c when the leading coefficient a is not 1."
        ],
        examTips: [
          "Write the final sentence clearly: '9 and 6 are the roots of the given quadratic equation.'"
        ],
        checkpoint: {
          question: "Which of the following is NOT a quadratic equation?",
          options: [
            "x² + 4x = 11 + x²",
            "x² - 9 = 0",
            "2y² = 5y - 3",
            "m(m - 5) = 0"
          ],
          correct: 0,
          explanation: "In x² + 4x = 11 + x², x² cancels out on both sides leaving 4x = 11, which is linear (degree 1)."
        }
      },
      {
        id: "m1-2-l2",
        title: "Completing the Square & Quadratic Formula Method",
        objectives: [
          "Solve quadratic equations using the formula method",
          "Compute the discriminant Δ = b² - 4ac accurately"
        ],
        hinglish: "Har quadratic equation ke factors aasani se nahi milte. Tab hum Quadratic Formula use karte hain: x = [-b ± √(b² - 4ac)] / 2a. Isme root ke andar jo b² - 4ac hai, use Discriminant (Δ) kehte hain. Pehle Δ nikal lene se calculation bahut clean aur error-free ho jati hai.",
        boardNotes: "For the quadratic equation ax² + bx + c = 0 (a ≠ 0), the roots are given by the formula:
x = (-b ± √(b² - 4ac)) / 2a.
To solve by completing the square, make the coefficient of x² equal to 1 and add (1/2 × coefficient of x)² to both sides.",
        formulaBox: "Quadratic Formula: x = (-b ± √(b² - 4ac)) / 2a
Third Term for Completing Square = (1/2 × coefficient of x)²",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Formula Method",
          problem: "Solve using formula: m² - 14m + 13 = 0",
          steps: [
            "Comparing with am² + bm + c = 0: a = 1, b = -14, c = 13.",
            "Find b² - 4ac = (-14)² - 4(1)(13) = 196 - 52 = 144.",
            "m = [-(-14) ± √144] / (2 × 1) = (14 ± 12) / 2.",
            "m = (14 + 12)/2 = 26/2 = 13   OR   m = (14 - 12)/2 = 2/2 = 1.",
            "Therefore, 13 and 1 are the roots of the given quadratic equation."
          ]
        },
        commonMistakes: [
          "Sign error in -b when b itself is negative (e.g., -(-14) becomes +14, not -14).",
          "Dividing only √Δ by 2a instead of dividing the entire numerator (-b ± √Δ) by 2a."
        ],
        examTips: [
          "Always compare with ax² + bx + c = 0 first and explicitly list the values of a, b, and c to earn step marks."
        ],
        checkpoint: {
          question: "For the equation 2x² - 5x + 2 = 0, what is the value of b² - 4ac?",
          options: ["9", "41", "-9", "25"],
          correct: 0,
          explanation: "b² - 4ac = (-5)² - 4(2)(2) = 25 - 16 = 9."
        }
      },
      {
        id: "m1-2-l3",
        title: "Nature of Roots & Relation Between Roots and Coefficients",
        objectives: [
          "Determine nature of roots using discriminant Δ",
          "Form a quadratic equation when roots α and β are given"
        ],
        hinglish: "Discriminant Δ = b² - 4ac ki value dekh kar hum bina solve kiye bata sakte hain ki roots kaise honge: agar Δ = 0 toh roots real aur equal; agar Δ > 0 toh real aur unequal; aur agar Δ < 0 toh roots real nahi honge. Agar roots α aur β diye hon, toh equation banti hai: x² - (α + β)x + αβ = 0.",
        boardNotes: "Nature of roots of ax² + bx + c = 0 depends on Δ = b² - 4ac:
1. If Δ = 0, roots are real and equal.
2. If Δ > 0, roots are real and unequal.
3. If Δ < 0, roots are not real.
If α and β are roots: α + β = -b/a and αβ = c/a. Required quadratic equation: x² - (α + β)x + αβ = 0.",
        formulaBox: "Discriminant Δ = b² - 4ac
Sum of roots: α + β = -b / a
Product of roots: αβ = c / a
Equation from roots: x² - (α + β)x + αβ = 0",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Forming Quadratic Equation",
          problem: "Obtain the quadratic equation if roots are -3 and -7.",
          steps: [
            "Let α = -3 and β = -7.",
            "Sum of roots: α + β = -3 + (-7) = -10.",
            "Product of roots: αβ = (-3) × (-7) = 21.",
            "Required equation: x² - (α + β)x + αβ = 0  ⇒  x² - (-10)x + 21 = 0",
            "x² + 10x + 21 = 0."
          ]
        },
        commonMistakes: [
          "Using + (α + β)x instead of - (α + β)x when forming the quadratic equation."
        ],
        examTips: [
          "When a problem states 'roots are real and equal', immediately set b² - 4ac = 0 to find the unknown constant k."
        ],
        checkpoint: {
          question: "If α and β are roots of 3x² - 6x + 5 = 0, what is α + β?",
          options: ["-2", "2", "5/3", "-6"],
          correct: 1,
          explanation: "α + β = -b/a = -(-6)/3 = 6/3 = 2."
        }
      }
    ]
  },

  "m1-3": {
    title: "Arithmetic Progression",
    lessons: [
      {
        id: "m1-3-l1",
        title: "Sequence, Arithmetic Progression & nth Term (tn)",
        objectives: [
          "Verify whether a given sequence is an Arithmetic Progression",
          "Calculate any term tn of an AP using tn = a + (n - 1)d"
        ],
        hinglish: "Numbers ki aisi ordered list jisme har agla term pichle term me ek constant number 'd' (common difference) add karne se milta hai, use Arithmetic Progression (AP) kehte hain. Jaise 4, 7, 10, 13... yahan first term a = 4 aur d = 3 hai. Koi bhi n-th term nikalne ke liye formula hai: tn = a + (n - 1)d.",
        boardNotes: "In a sequence, if the difference between any two consecutive terms (t_{n+1} - tn) is constant, then the sequence is called an Arithmetic Progression (A.P.). This constant difference is denoted by d (can be positive, negative, or zero). The nth term of an A.P. is given by tn = a + (n - 1)d.",
        formulaBox: "Common difference: d = t2 - t1 = t3 - t2
nth term of A.P.: tn = a + (n - 1)d",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Finding nth Term",
          problem: "Find the 24th term of the A.P.: 12, 16, 20, 24, ...",
          steps: [
            "Here t1 = a = 12, t2 = 16, t3 = 20. Common difference d = 16 - 12 = 4.",
            "We have to find t24, so n = 24.",
            "Formula: tn = a + (n - 1)d",
            "t24 = 12 + (24 - 1) × 4 = 12 + 23 × 4 = 12 + 92 = 104.",
            "The 24th term of the given A.P. is 104."
          ]
        },
        commonMistakes: [
          "Subtracting t1 - t2 instead of t2 - t1 (getting the opposite sign for d)."
        ],
        examTips: [
          "To prove a sequence is an AP, calculate t2 - t1, t3 - t2, and t4 - t3 separately and state 'The difference between any two consecutive terms is constant'."
        ],
        checkpoint: {
          question: "For the A.P. 10, 7, 4, 1, ..., what is the common difference d?",
          options: ["3", "-3", "10", "-7"],
          correct: 1,
          explanation: "d = t2 - t1 = 7 - 10 = -3."
        }
      },
      {
        id: "m1-3-l2",
        title: "Sum of First n Terms (Sn) & Applications",
        objectives: [
          "Compute sum of first n terms Sn using both textbook formulae",
          "Apply AP concepts to word problems (savings, auditorium seats, etc.)"
        ],
        hinglish: "Agar hume AP ke pehle n terms ka total (sum) nikalna ho, toh Sn formula lagate hain: Sn = (n/2)[2a + (n - 1)d]. Agar first term (t1) aur last term (tn) dono pata hon, toh chhota formula Sn = (n/2)[t1 + tn] aur bhi fast kaam karta hai.",
        boardNotes: "Sum of first n terms of an A.P. is given by:
Sn = (n / 2)[2a + (n - 1)d]
Also, Sn = (n / 2)[t1 + tn], where t1 is the first term and tn is the nth term.",
        formulaBox: "Sn = (n / 2)[2a + (n - 1)d]
Sn = (n / 2)[t1 + tn]
tn = Sn - S_{n-1}",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Sum of Even Numbers",
          problem: "Find the sum of all even natural numbers from 1 to 100.",
          steps: [
            "Even natural numbers from 1 to 100 are: 2, 4, 6, ..., 100.",
            "Here a = t1 = 2, d = 2, and last term tn = 100.",
            "First find n: 100 = 2 + (n - 1)2  ⇒  98 = 2(n - 1)  ⇒  49 = n - 1  ⇒  n = 50.",
            "Now apply Sn = (n / 2)[t1 + tn] = (50 / 2)[2 + 100] = 25 × 102 = 2550.",
            "The sum of all even natural numbers from 1 to 100 is 2550."
          ]
        },
        commonMistakes: [
          "Using the last term value (100) in place of n (50) in the Sn formula."
        ],
        examTips: [
          "Three consecutive terms in an AP are best assumed as (a - d), a, (a + d) because d cancels out when added!"
        ],
        checkpoint: {
          question: "What is the sum of the first 10 natural numbers (1 + 2 + ... + 10)?",
          options: ["45", "50", "55", "100"],
          correct: 2,
          explanation: "S10 = (10/2)(1 + 10) = 5 × 11 = 55."
        }
      }
    ]
  },

  "m1-4": {
    title: "Financial Planning",
    lessons: [
      {
        id: "m1-4-l1",
        title: "GST & Input Tax Credit (ITC) in Trading Chain",
        objectives: [
          "Calculate CGST, SGST, and Total Invoice Value",
          "Compute Input Tax Credit (ITC) and GST payable by a trader"
        ],
        hinglish: "GST (Goods and Services Tax) ke do barabar hisse hote hain: CGST (Central) aur SGST (State). Agar GST 18% hai, toh 9% CGST aur 9% SGST lagta hai. Jab koi dukandar samaan kharidte waqt tax bharta hai (Input Tax) aur bechte waqt customer se tax leta hai (Output Tax), toh sarkar ko sirf difference bharta hai: Payable GST = Output Tax - ITC.",
        boardNotes: "GST stands for Goods and Services Tax. Every registered trader has a 15-digit alphanumeric GSTIN. CGST = SGST = (1/2) × GST. At the time of paying GST to the government, a trader deducts the tax paid at the time of purchase (Input Tax Credit / ITC) from the tax collected at the time of sale (Output Tax).",
        formulaBox: "CGST = SGST = (Rate of GST / 2) × Taxable Value
Payable GST = Output Tax - Input Tax Credit (ITC)",
        solvedExample: {
          title: "Textbook Pattern Solved Example: ITC & Payable GST",
          problem: "A wholesaler bought goods for taxable value ₹1,50,000 and sold them to a retailer for taxable value ₹1,80,000. Rate of GST is 18%. Find ITC and GST payable by wholesaler.",
          steps: [
            "Input Tax (ITC) = 18% of ₹1,50,000 = (18 / 100) × 150000 = ₹27,000.",
            "Output Tax = 18% of ₹1,80,000 = (18 / 100) × 180000 = ₹32,400.",
            "GST Payable = Output Tax - ITC = ₹32,400 - ₹27,000 = ₹5,400.",
            "Payable CGST = ₹5,400 / 2 = ₹2,700;  Payable SGST = ₹2,700."
          ]
        },
        commonMistakes: [
          "Calculating GST on the total bill amount (including tax) instead of the Taxable Value."
        ],
        examTips: [
          "Always split final Payable GST into Payable CGST and Payable SGST at the end of B2B chain problems."
        ],
        checkpoint: {
          question: "A trader collected ₹8,500 as Output Tax and had ₹6,200 as Input Tax Credit (ITC). How much GST is payable?",
          options: ["₹14,700", "₹2,300", "₹1,150", "₹6,200"],
          correct: 1,
          explanation: "Payable GST = Output Tax - ITC = ₹8,500 - ₹6,200 = ₹2,300."
        }
      },
      {
        id: "m1-4-l2",
        title: "Shares, Dividends, Brokerage & Mutual Funds",
        objectives: [
          "Distinguish between Face Value (FV) and Market Value (MV)",
          "Calculate Sum Invested, Dividend Income, Rate of Return, and Brokerage with GST"
        ],
        hinglish: "Share par chhapi hui original keemat ko Face Value (FV) kehte hain, aur market me jis rate par share milta hai use Market Value (MV) kehte hain. Company hamesha Dividend Face Value (FV) par deti hai, jabki humari Investment Market Value (MV) par hoti hai. Share kharidte waqt brokerage MV me add hoti hai aur bechte waqt MV se minus hoti hai.",
        boardNotes: "1. If MV > FV, the share is at premium.
2. If MV = FV, the share is at par.
3. If MV < FV, the share is at discount.
Dividend is always calculated on Face Value. Brokerage is calculated on Market Value, and 18% GST is levied on the brokerage amount.",
        formulaBox: "Sum Invested = Number of shares × MV
Dividend per share = FV × (Dividend %)
Rate of Return = (Total Dividend Income / Sum Invested) × 100
Purchase Price = MV + Brokerage + 18% GST on Brokerage",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Rate of Return",
          problem: "Smt. Deshpande purchased shares of FV ₹5 at a premium of ₹20. How many shares will she get for ₹20,000? If company declares 20% dividend, find her rate of return.",
          steps: [
            "FV = ₹5, Premium = ₹20  ⇒  Market Value (MV) = FV + Premium = 5 + 20 = ₹25.",
            "Number of shares = Sum Invested / MV = 20,000 / 25 = 800 shares.",
            "Dividend per share = 20% of FV = (20 / 100) × 5 = ₹1. Total Dividend = 800 × ₹1 = ₹800.",
            "Rate of Return = (800 / 20,000) × 100 = 4%."
          ]
        },
        commonMistakes: [
          "Calculating dividend on Market Value (₹25) instead of Face Value (₹5).",
          "Applying 18% GST on the entire share value instead of applying it only on the Brokerage."
        ],
        examTips: [
          "For Mutual Funds: Number of Units = Total Investment / NAV (Net Asset Value)."
        ],
        checkpoint: {
          question: "If a share of Face Value ₹10 is trading at a discount of ₹2, what is its Market Value (MV)?",
          options: ["₹12", "₹8", "₹10", "₹2"],
          correct: 1,
          explanation: "At discount, MV = FV - Discount = ₹10 - ₹2 = ₹8."
        }
      }
    ]
  },

  "m1-5": {
    title: "Probability",
    lessons: [
      {
        id: "m1-5-l1",
        title: "Random Experiment, Sample Space (S) & Event",
        objectives: [
          "Write exact Sample Space S and n(S) for coins, dice, cards, and digit formation",
          "Identify sample points satisfying a given Event condition"
        ],
        hinglish: "Jis experiment ke saare possible results pehle se pata hon par exact result predict na kiya ja sake, use Random Experiment kehte hain. Saare possible outcomes ke set ko Sample Space (S) kehte hain aur uski ginti ko n(S). Kisi khaas condition ko satisfy karne wale outcomes ko Event (A, B, C) kehte hain.",
        boardNotes: "An experiment in which all possible results are known in advance but none of them can be predicted with certainty is called a Random Experiment. The set of all possible outcomes of a random experiment is called the Sample Space (S). The number of elements in S is denoted by n(S). A subset of sample space satisfying a specific condition is called an Event.",
        formulaBox: "1 Coin: n(S) = 2  |  2 Coins: n(S) = 4  |  3 Coins: n(S) = 8
1 Die: n(S) = 6   |  2 Dice: n(S) = 36
Pack of Playing Cards: n(S) = 52 (26 Red, 26 Black; 13 of each suit)",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Two-Digit Numbers Without Repetition",
          problem: "Form two-digit numbers using digits 2, 3, 5 without repetition. Write S, n(S), and event A: the number is odd.",
          steps: [
            "Without repetition, digits cannot be repeated (no 22, 33, 55).",
            "Sample Space S = {23, 25, 32, 35, 52, 53}  ⇒  n(S) = 6.",
            "Event A (odd numbers): A = {23, 25, 35, 53}  ⇒  n(A) = 4."
          ]
        },
        commonMistakes: [
          "Including 22, 33, 55 when the question explicitly specifies 'without repetition'."
        ],
        examTips: [
          "Always remember: 52 cards = 13 Spades + 13 Clubs (26 Black) and 13 Hearts + 13 Diamonds (26 Red). Face cards = 12 (4 Kings, 4 Queens, 4 Jacks)."
        ],
        checkpoint: {
          question: "Three coins are tossed simultaneously. What is the number of sample points n(S)?",
          options: ["3", "6", "8", "9"],
          correct: 2,
          explanation: "S = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}, so n(S) = 2³ = 8."
        }
      },
      {
        id: "m1-5-l2",
        title: "Probability of an Event P(A) & Key Properties",
        objectives: [
          "Calculate probability P(A) = n(A) / n(S) and simplify fractions",
          "Apply range property 0 ≤ P(A) ≤ 1"
        ],
        hinglish: "Kisi event A ki probability nikalne ke liye favorable outcomes n(A) ko total outcomes n(S) se divide karte hain: P(A) = n(A) / n(S). Yaad rakho: Probability kabhi bhi negative nahi hoti aur kabhi 1 (ya 100%) se badi nahi ho sakti.",
        boardNotes: "In mathematical language, when possibility of an expected event is expressed in number, it is called Probability. For a sample space S and event A, P(A) = n(A) / n(S). Probability is expressed as a fraction or decimal between 0 and 1 (0 ≤ P(A) ≤ 1).",
        formulaBox: "P(A) = n(A) / n(S)
0 ≤ P(A) ≤ 1   (or 0% ≤ P(A) ≤ 100%)",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Two Dice Sum",
          problem: "Two dice are rolled simultaneously. Find the probability of event A that the sum of digits on upper faces is a multiple of 5.",
          steps: [
            "For two dice, n(S) = 36.",
            "Multiples of 5 possible as sum on two dice are 5 and 10.",
            "A = {(1,4), (2,3), (3,2), (4,1), (4,6), (5,5), (6,4)}  ⇒  n(A) = 7.",
            "P(A) = n(A) / n(S) = 7 / 36."
          ]
        },
        commonMistakes: [
          "Writing a probability greater than 1 (e.g., n(S)/n(A) by mistake)."
        ],
        examTips: [
          "Always write the formula P(A) = n(A) / n(S) explicitly before substituting values."
        ],
        checkpoint: {
          question: "Which of the following CANNOT represent the probability of an event?",
          options: ["2/3", "1.5", "15%", "0.7"],
          correct: 1,
          explanation: "Probability can never exceed 1, so 1.5 is impossible."
        }
      }
    ]
  },

  "m1-6": {
    title: "Statistics",
    lessons: [
      {
        id: "m1-6-l1",
        title: "Mean of Grouped Data (Direct, Assumed Mean & Step Deviation)",
        objectives: [
          "Calculate Class Mark xi and Deviation di = xi - A",
          "Compute Mean x̄ using Direct, Assumed Mean, and Step Deviation methods"
        ],
        hinglish: "Grouped data ka Mean (average) nikalne ke liye pehle har class ka midpoint yaani Class Mark xi = (Lower limit + Upper limit)/2 nikalte hain. Chhote numbers ke liye Direct Method (Σfi xi / Σfi) best hai. Bade numbers ke liye Assumed Mean (A) ya Step Deviation method calculation ko bahut aasan bana deta hai.",
        boardNotes: "1. Direct Method: Mean x̄ = (Σfi xi) / Σfi
2. Assumed Mean Method: x̄ = A + d̄, where d̄ = (Σfi di) / Σfi and di = xi - A
3. Step Deviation Method: x̄ = A + g × ū, where ū = (Σfi ui) / Σfi and ui = (xi - A) / g (g is class width / GCD of di).",
        formulaBox: "Class Mark xi = (Lower Class Limit + Upper Class Limit) / 2
Direct Method: x̄ = Σfi xi / Σfi
Assumed Mean: x̄ = A + (Σfi di / Σfi)
Step Deviation: x̄ = A + g × (Σfi ui / Σfi)",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Assumed Mean Method",
          problem: "If Assumed Mean A = 300, Σfi di = -320, and Σfi = 80, find the Mean x̄.",
          steps: [
            "d̄ = Σfi di / Σfi = -320 / 80 = -4.",
            "Mean x̄ = A + d̄ = 300 + (-4) = 296.",
            "The mean of the given data is 296."
          ]
        },
        commonMistakes: [
          "Forgetting to multiply ū by class width g in the Step Deviation method."
        ],
        examTips: [
          "Always make classes continuous before computing Median or Mode (subtract 0.5 from lower limit, add 0.5 to upper limit if discontinuous)."
        ],
        checkpoint: {
          question: "In Step Deviation method, if A = 25, g = 10, Σfi ui = 12, and Σfi = 40, what is the Mean x̄?",
          options: ["28", "25.3", "37", "26.2"],
          correct: 0,
          explanation: "ū = 12/40 = 0.3. Mean x̄ = A + g × ū = 25 + 10(0.3) = 25 + 3 = 28."
        }
      },
      {
        id: "m1-6-l2",
        title: "Median, Mode & Graphical Representation (Histogram, Polygon, Pie)",
        objectives: [
          "Compute Median and Mode for continuous grouped frequency distributions",
          "Calculate central angles θ = (Component / Total) × 360° for Pie Diagrams"
        ],
        hinglish: "Median data ka middle value batata hai, aur Mode sabse zyada repeat hone wali class (Modal Class) ka exact value deta hai. Pie Diagram banane ke liye har component ko 360° ke circle me central angle θ = (Score / Total) × 360° me convert karte hain.",
        boardNotes: "Median = L + [((N/2) - cf) / f] × h, where L = lower limit of median class, N = Σfi, cf = cumulative frequency of class preceding median class, f = frequency of median class, h = class interval.
Mode = L + [(f1 - f0) / (2f1 - f0 - f2)] × h.
Central Angle for Pie Diagram θ = (Number of scores in component / Total number of scores) × 360°.",
        formulaBox: "Median = L + [((N/2) - cf) / f] × h
Mode = L + [(f1 - f0) / (2f1 - f0 - f2)] × h
Pie Central Angle θ = (Component Value / Total Value) × 360°",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Pie Diagram Central Angle",
          problem: "In a budget of ₹18,000, ₹4,500 is spent on food. Find the central angle for food in a pie diagram.",
          steps: [
            "Central angle θ = (Component Value / Total Value) × 360°",
            "θ = (4500 / 18000) × 360° = (1 / 4) × 360° = 90°."
          ]
        },
        commonMistakes: [
          "Taking cf of the median class itself instead of the class PRECEDING the median class.",
          "Drawing a Frequency Polygon without adding zero-frequency classes before the first and after the last class."
        ],
        examTips: [
          "In a Pie Diagram, always verify that the sum of all calculated central angles equals 360°."
        ],
        checkpoint: {
          question: "In the Mode formula L + [(f1 - f0) / (2f1 - f0 - f2)] × h, what does f1 denote?",
          options: [
            "Frequency of the modal class",
            "Frequency of the class preceding modal class",
            "Frequency of the class succeeding modal class",
            "Cumulative frequency"
          ],
          correct: 0,
          explanation: "f1 is the maximum frequency (frequency of the modal class), f0 is preceding, and f2 is succeeding."
        }
      }
    ]
  },

  // ==================== MATHS PART II — GEOMETRY ====================
  "m2-1": {
    title: "Similarity",
    lessons: [
      {
        id: "m2-1-l1",
        title: "Ratio of Areas of Two Triangles & Basic Proportionality Theorem (BPT)",
        objectives: [
          "Apply area ratio properties of triangles with equal bases or equal heights",
          "State and apply Basic Proportionality Theorem (BPT) and Angle Bisector Property"
        ],
        hinglish: "Do triangles ke areas ka ratio unke base aur height ke product ke ratio me hota hai: A1/A2 = (b1×h1)/(b2×h2). Agar height equal ho toh area base ke ratio me hota hai. BPT (Thales Theorem) kehta hai ki agar triangle ki ek side ko parallel line draw ki jaye, toh wo baki do sides ko equal ratio me divide karti hai.",
        boardNotes: "1. Ratio of areas of two triangles is equal to the ratio of the products of their bases and corresponding heights.
2. Basic Proportionality Theorem (BPT): If a line parallel to a side of a triangle intersects the remaining sides in two distinct points, then the line divides the sides in the same proportion.
3. Angle Bisector Theorem: The bisector of an angle of a triangle divides the side opposite to the angle in the ratio of the remaining sides.",
        formulaBox: "A(Δ1) / A(Δ2) = (b1 × h1) / (b2 × h2)
BPT: In ΔABC, if seg DE || side BC, then AD / DB = AE / EC
Angle Bisector: If ray CE bisects ∠ACB, then AE / EB = AC / BC",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Angle Bisector Property",
          problem: "In ΔABC, ray BD bisects ∠ABC. If AB = 6, BC = 8, AD = 3, find DC.",
          steps: [
            "In ΔABC, ray BD is the bisector of ∠ABC.",
            "By property of angle bisector of a triangle: AB / BC = AD / DC",
            "6 / 8 = 3 / DC  ⇒  DC = (3 × 8) / 6 = 24 / 6 = 4."
          ]
        },
        commonMistakes: [
          "Writing inverted ratios in BPT or Angle Bisector property."
        ],
        examTips: [
          "BPT and Theorem of Areas of Similar Triangles are two of the most frequently asked 3-4 mark proofs in Maharashtra Board exams."
        ],
        checkpoint: {
          question: "In ΔPQR, seg PM is a median. What is the ratio A(ΔPQM) : A(ΔPMR)?",
          options: ["2 : 1", "1 : 1", "1 : 2", "4 : 1"],
          correct: 1,
          explanation: "Median PM divides base QR into equal parts (QM = MR) and both triangles share a common vertex P (equal height), so A(ΔPQM) : A(ΔPMR) = 1 : 1."
        }
      },
      {
        id: "m2-1-l2",
        title: "Tests of Similarity & Theorem of Areas of Similar Triangles",
        objectives: [
          "Prove triangles similar using AAA (AA), SAS, and SSS tests",
          "Apply the Theorem of Areas of Similar Triangles: A1/A2 = s1²/s2²"
        ],
        hinglish: "Do triangles similar prove karne ke 3 main tests hain: AA (ya AAA) test, SAS test, aur SSS test. Jab do triangles similar hote hain, toh unke areas ka ratio unki corresponding sides ke SQUARES ke ratio me hota hai! Jaise sides ka ratio 2:3 hai toh areas ka ratio 4:9 hoga.",
        boardNotes: "Tests for similarity of triangles: AAA test (or AA test), SAS test, and SSS test.
Theorem of Areas of Similar Triangles: When two triangles are similar, the ratio of areas of those triangles is equal to the ratio of the squares of their corresponding sides.",
        formulaBox: "If ΔABC ~ ΔPQR, then:
A(ΔABC) / A(ΔPQR) = AB² / PQ² = BC² / QR² = AC² / PR²",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Areas of Similar Triangles",
          problem: "If ΔABC ~ ΔPQR, A(ΔABC) = 80, A(ΔPQR) = 125, and AB = 4, find PQ.",
          steps: [
            "Since ΔABC ~ ΔPQR, by Theorem of Areas of Similar Triangles:",
            "A(ΔABC) / A(ΔPQR) = AB² / PQ²",
            "80 / 125 = 4² / PQ²  ⇒  16 / 25 = 16 / PQ²",
            "PQ² = 25  ⇒  PQ = 5."
          ]
        },
        commonMistakes: [
          "Forgetting to square the sides when computing the ratio of areas of similar triangles."
        ],
        examTips: [
          "Always write one-to-one correspondence of vertices accurately (e.g., ΔABC ~ ΔPQR) before writing side ratios."
        ],
        checkpoint: {
          question: "If ΔLMN ~ ΔXYZ and LM : XY = 3 : 5, what is A(ΔLMN) : A(ΔXYZ)?",
          options: ["3 : 5", "9 : 25", "5 : 3", "27 : 125"],
          correct: 1,
          explanation: "Ratio of areas = (3/5)² = 9 : 25."
        }
      }
    ]
  },

  "m2-2": {
    title: "Pythagoras Theorem",
    lessons: [
      {
        id: "m2-2-l1",
        title: "Pythagoras Theorem, Triplets & Special Triangles (30°-60°-90°)",
        objectives: [
          "Verify Pythagorean triplets and apply Pythagoras Theorem",
          "Use 30°-60°-90° and 45°-45°-90° triangle theorems"
        ],
        hinglish: "Right-angled triangle me hypotenuse ka square baki do sides ke squares ke sum ke barabar hota hai. Agar 3 natural numbers me sabse bade number ka square baki do ke squares ke sum ke equal ho, toh unhe Pythagorean Triplet kehte hain (jaise 3, 4, 5). 30°-60°-90° triangle me 30° ke samne wali side hypotenuse ki half hoti hai aur 60° ke samne wali √3/2 times.",
        boardNotes: "Pythagoras Theorem: In a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of remaining two sides.
Converse of Pythagoras Theorem: In a triangle, if the square of one side is equal to the sum of the squares of the remaining two sides, then the triangle is a right-angled triangle.",
        formulaBox: "Pythagoras: AC² = AB² + BC²
30°-60°-90°: Side opp 30° = (1/2)Hyp,  Side opp 60° = (√3/2)Hyp
45°-45°-90°: Side opp 45° = (1/√2)Hyp",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Diagonal of a Square",
          problem: "Find the diagonal of a square whose side is 10 cm.",
          steps: [
            "Let ABCD be a square of side 10 cm. Diagonal AC divides it into two 45°-45°-90° right triangles.",
            "By Pythagoras theorem (or 45°-45°-90° property): AC = √2 × side",
            "AC = 10√2 cm."
          ]
        },
        commonMistakes: [
          "Confusing side opposite to 60° (√3/2 × Hyp) with side opposite to 30° (1/2 × Hyp)."
        ],
        examTips: [
          "Memorize key Pythagorean triplets: (3,4,5), (5,12,13), (8,15,17), (7,24,25), (9,40,41)."
        ],
        checkpoint: {
          question: "Which of the following is a Pythagorean triplet?",
          options: ["(2, 3, 4)", "(5, 12, 13)", "(4, 5, 6)", "(6, 7, 8)"],
          correct: 1,
          explanation: "5² + 12² = 25 + 144 = 169 = 13², so (5, 12, 13) is a Pythagorean triplet."
        }
      },
      {
        id: "m2-2-l2",
        title: "Similarity & Right Angled Triangles, Geometric Mean & Apollonius",
        objectives: [
          "Apply Theorem of Geometric Mean in right triangles",
          "Apply Apollonius Theorem to find length of median"
        ],
        hinglish: "Right-angled triangle ke right-angle vertex se hypotenuse par perpendicular draw karne par jo altitude banta hai, uska square hypotenuse ke dono segments ke product ke barabar hota hai (QS² = PS × SR). Apollonius Theorem triangle ki median ki length nikalne me kaam aata hai.",
        boardNotes: "Theorem of Geometric Mean: In a right-angled triangle, the perpendicular segment to the hypotenuse from the opposite vertex, is the geometric mean of the segments into which the hypotenuse is divided.
Apollonius Theorem: In ΔABC, if M is the midpoint of side BC, then AB² + AC² = 2AM² + 2BM².",
        formulaBox: "Geometric Mean: QS² = PS × SR
Apollonius Theorem: AB² + AC² = 2AM² + 2BM²  (where AM is median)",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Apollonius Theorem",
          problem: "In ΔABC, point M is midpoint of side BC. If AB² + AC² = 290 cm² and AM = 8 cm, find BC.",
          steps: [
            "By Apollonius theorem: AB² + AC² = 2AM² + 2BM²",
            "290 = 2(8)² + 2BM²  ⇒  290 = 2(64) + 2BM²  ⇒  290 = 128 + 2BM²",
            "2BM² = 290 - 128 = 162  ⇒  BM² = 81  ⇒  BM = 9 cm.",
            "Since M is midpoint of BC, BC = 2 × BM = 2 × 9 = 18 cm."
          ]
        },
        commonMistakes: [
          "Forgetting to double BM at the end when the question asks for full side BC."
        ],
        examTips: [
          "Whenever a question gives the midpoint of a side or mentions 'median' along with squares of sides, immediately think of Apollonius Theorem."
        ],
        checkpoint: {
          question: "In right-angled ΔPQR (∠Q = 90°), seg QS ⊥ hyp PR. If PS = 4 and SR = 9, find QS.",
          options: ["6", "13", "36", "5"],
          correct: 0,
          explanation: "By Geometric Mean Theorem, QS² = PS × SR = 4 × 9 = 36, so QS = 6."
        }
      }
    ]
  },

  "m2-3": {
    title: "Circle",
    lessons: [
      {
        id: "m2-3-l1",
        title: "Tangent Theorem, Touching Circles & Cyclic Quadrilateral",
        objectives: [
          "Apply Tangent-Radius perpendicularity and Tangent Segment Theorem",
          "Solve problems using Touching Circles distance of centers and Cyclic Quadrilateral theorems"
        ],
        hinglish: "Circle ke kisi point par draw ki gayi tangent us point ke radius par perpendicular (90°) hoti hai. Bahar ke ek point se circle par draw ki gayi dono tangent segments equal length ki hoti hain. Agar do circles externally touch karein toh centers ka distance r1 + r2 hota hai, aur internally touch karein toh |r1 - r2| hota hai.",
        boardNotes: "1. Tangent Theorem: A tangent at any point of a circle is perpendicular to the radius at the point of contact.
2. Tangent Segment Theorem: Tangent segments drawn from an external point to a circle are congruent.
3. Theorem of Touching Circles: If two circles touch each other, their point of contact lies on the line joining their centres.
4. Cyclic Quadrilateral Theorem: Opposite angles of a cyclic quadrilateral are supplementary (sum = 180°).",
        formulaBox: "External Touching Circles: Distance between centres = r1 + r2
Internal Touching Circles: Distance between centres = |r1 - r2|
Cyclic Quadrilateral: ∠A + ∠C = 180° and ∠B + ∠D = 180°",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Touching Circles",
          problem: "Two circles of radii 5.5 cm and 4.2 cm touch each other externally. Find the distance between their centres.",
          steps: [
            "Let r1 = 5.5 cm and r2 = 4.2 cm.",
            "By theorem of touching circles, when circles touch externally, distance between centres = r1 + r2.",
            "Distance = 5.5 + 4.2 = 9.7 cm."
          ]
        },
        commonMistakes: [
          "Adding radii instead of subtracting when circles touch INTERNALLY."
        ],
        examTips: [
          "Corollary of Cyclic Quadrilateral: An exterior angle of a cyclic quadrilateral is congruent to the angle opposite to its adjacent interior angle."
        ],
        checkpoint: {
          question: "Two circles having radii 8 cm and 3 cm touch internally. What is the distance between their centres?",
          options: ["11 cm", "5 cm", "24 cm", "8 cm"],
          correct: 1,
          explanation: "For internally touching circles, distance = r1 - r2 = 8 - 3 = 5 cm."
        }
      },
      {
        id: "m2-3-l2",
        title: "Inscribed Angle Theorem & Secant-Tangent Segment Properties",
        objectives: [
          "Apply Inscribed Angle Theorem and Angle Inscribed in a Semicircle",
          "Solve problems using Internal/External Division of Chords and Tangent-Secant Theorem"
        ],
        hinglish: "Inscribed Angle Theorem kehta hai ki circle ke andar bana inscribed angle apne intercepted arc ke measure ka half hota hai. Semicircle me bana angle hamesha 90° (right angle) hota hai. Agar do chords circle ke andar ya bahar intersect karein toh unke segments ke products equal hote hain.",
        boardNotes: "1. Inscribed Angle Theorem: The measure of an inscribed angle is half of the measure of the arc intercepted by it.
2. Angle inscribed in a semicircle is a right angle (90°).
3. Theorem of Internal/External Division of Chords: AE × EB = CE × ED.
4. Tangent Secant Segments Theorem: PT² = PA × PB.",
        formulaBox: "Inscribed Angle = (1/2) × m(Intercepted Arc)
Intersecting Chords: AE × EB = CE × ED
Tangent-Secant Theorem: PT² = PA × PB",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Tangent Secant Theorem",
          problem: "A tangent segment PT and a secant PAB intersect at external point P. If PA = 4 cm and AB = 5 cm, find PT.",
          steps: [
            "Note that PB = PA + AB = 4 + 5 = 9 cm.",
            "By Tangent Secant Segments Theorem: PT² = PA × PB",
            "PT² = 4 × 9 = 36  ⇒  PT = 6 cm."
          ]
        },
        commonMistakes: [
          "Using PA × AB instead of PA × PB (total secant length) in the Tangent-Secant theorem."
        ],
        examTips: [
          "Always verify whether the secant length given is the external segment (PA) or the chord inside (AB), and add them to get PB."
        ],
        checkpoint: {
          question: "Chords AB and CD of a circle intersect inside the circle at point E. If AE = 4, EB = 6, and CE = 3, find ED.",
          options: ["8", "6", "12", "4.5"],
          correct: 0,
          explanation: "By Theorem of Internal Division of Chords, AE × EB = CE × ED ⇒ 4 × 6 = 3 × ED ⇒ 24 = 3 × ED ⇒ ED = 8."
        }
      }
    ]
  },

  "m2-4": {
    title: "Geometric Constructions",
    lessons: [
      {
        id: "m2-4-l1",
        title: "Construction of Similar Triangles (With & Without Common Vertex)",
        objectives: [
          "Construct a triangle similar to a given triangle when vertices are distinct",
          "Construct a similar triangle sharing a common vertex using parallel lines"
        ],
        hinglish: "Is chapter me do cases hain: Case 1 jab dono triangles ke saare vertices alag hon—toh pehle ratio se naye triangle ki saari sides calculate karke normal triangle construct karte hain. Case 2 jab ek vertex common ho (jaise ΔABC ~ ΔAPQ)—toh common vertex se acute ray banakar bigger ratio number jitne equal arcs kaat kar parallel line draw karte hain.",
        boardNotes: "Case 1 (No common vertex): Compute exact lengths of all three sides of the required triangle using the given proportion, then construct using SSS/SAS.
Case 2 (One common vertex): Draw an acute ray from the common vertex. Mark arcs equal to the LARGER number in the ratio m:n. Join the denominator's arc to the given triangle's vertex and draw a parallel line through the numerator's arc.",
        formulaBox: "If ΔABC ~ ΔPQR and AB/PQ = 3/4, then PQ = (4/3)AB, QR = (4/3)BC, PR = (4/3)AC",
        solvedExample: {
          title: "Textbook Pattern Construction Steps: Common Vertex Type",
          problem: "Construct ΔABC ~ ΔAEM such that AB/AE = 5/7 (common vertex A).",
          steps: [
            "Draw ΔABC with given measurements.",
            "From common vertex A, draw a ray AX making an acute angle below base AB.",
            "Since larger number in 5/7 is 7, mark 7 equal arcs A1, A2, ..., A7 on ray AX.",
            "Join A5 (corresponding to AB's ratio 5) to point B.",
            "Through A7, draw a line parallel to A5B intersecting extended AB at E. Then through E, draw line parallel to BC intersecting extended AC at M."
          ]
        },
        commonMistakes: [
          "Joining the wrong arc number to B when a vertex is common (always join the arc matching the GIVEN triangle's ratio number)."
        ],
        examTips: [
          "Always draw a neat, labelled Rough Figure first—it carries marks in Maharashtra Board geometry constructions!"
        ],
        checkpoint: {
          question: "ΔRST ~ ΔXYZ. In ΔRST, RS = 4.5 cm, ∠RST = 40°, ST = 5.7 cm. If RS/XY = 3/5, what is the length of XY?",
          options: ["2.7 cm", "7.5 cm", "9.0 cm", "6.5 cm"],
          correct: 1,
          explanation: "4.5 / XY = 3 / 5 ⇒ XY = (4.5 × 5) / 3 = 1.5 × 5 = 7.5 cm."
        }
      },
      {
        id: "m2-4-l2",
        title: "Construction of Tangents to a Circle",
        objectives: [
          "Construct a tangent at a point on the circle (with and without using centre)",
          "Construct two tangents from an external point to a circle"
        ],
        hinglish: "Circle par tangent banane ke 3 tarike hain: (1) Centre use karke: centre se point ko milakar ray badhao aur perpendicular bisector banao. (2) Bina centre use kiye: circle ke andar ek chord aur inscribed angle banakar alternate segment me equal angle copy karo. (3) Bahar ke point P se: OP ka perpendicular bisector banakar midpoint M se ek aur circle draw karo.",
        boardNotes: "1. Using Centre: Draw ray OP through point P on circle; construct perpendicular to ray OP at P.
2. Without Using Centre: Draw a chord PQ and an inscribed angle ∠PRQ. At P, construct an angle congruent to ∠PRQ on the opposite side of chord PQ.
3. From External Point P: Bisect segment OP at M. Draw a circle with centre M and radius OM intersecting the original circle at A and B. Rays PA and PB are the tangents.",
        formulaBox: "Tangents from external point P: PA = PB
Angle in semicircle property ensures ∠OAP = ∠OBP = 90°",
        solvedExample: {
          title: "Textbook Pattern Construction Steps: Without Using Centre",
          problem: "Draw a circle of radius 3.4 cm. Take any point M on it and draw a tangent without using the centre.",
          steps: [
            "Draw a circle of radius 3.4 cm and mark point M on it.",
            "Draw any chord MN and take a point K on the major arc.",
            "Join KM and KN to form inscribed angle ∠MKN.",
            "With M as vertex, construct an angle equal to ∠MKN below chord MN using compass arcs.",
            "Extend the ray through M in both directions to get the required tangent."
          ]
        },
        commonMistakes: [
          "Using the centre in a question that explicitly says 'without using the centre'."
        ],
        examTips: [
          "Show clear perpendicular marks (90°) and arrowheads on both ends of tangent lines."
        ],
        checkpoint: {
          question: "When constructing tangents from an external point P to a circle with centre O, what is the first construction step after joining OP?",
          options: [
            "Draw an acute ray at O",
            "Construct the perpendicular bisector of segment OP",
            "Draw a chord inside the circle",
            "Measure angle at P with a protractor"
          ],
          correct: 1,
          explanation: "We bisect segment OP to find its midpoint M, which serves as the centre of the auxiliary circle."
        }
      }
    ]
  },

  "m2-5": {
    title: "Co-ordinate Geometry",
    lessons: [
      {
        id: "m2-5-l1",
        title: "Distance Formula, Section Formula, Midpoint & Centroid",
        objectives: [
          "Find distance between two points and test collinearity",
          "Apply Section Formula, Midpoint Formula, and Centroid Formula"
        ],
        hinglish: "Do points A(x1, y1) aur B(x2, y2) ke beech ka distance formula hai: d(A,B) = √[(x2 - x1)² + (y2 - y1)²]. Agar koi point P segment AB ko m:n ratio me divide kare toh Section Formula lagta hai. Triangle ke teeno medians jahan milte hain us Centroid G ke coordinates teeno vertices ka average hote hain!",
        boardNotes: "1. Distance Formula: d(A, B) = √[(x2 - x1)² + (y2 - y1)²]. Distance from origin O(0,0) to P(x,y) = √(x² + y²).
2. Section Formula (ratio m:n): x = (mx2 + nx1)/(m + n), y = (my2 + ny1)/(m + n).
3. Midpoint Formula: x = (x1 + x2)/2, y = (y1 + y2)/2.
4. Centroid Formula: G = ((x1 + x2 + x3)/3, (y1 + y2 + y3)/3).",
        formulaBox: "Distance: d(A,B) = √[(x2 - x1)² + (y2 - y1)²]
Section Formula: ((mx2 + nx1)/(m + n), (my2 + ny1)/(m + n))
Midpoint: ((x1 + x2)/2, (y1 + y2)/2)
Centroid: ((x1 + x2 + x3)/3, (y1 + y2 + y3)/3)",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Centroid Formula",
          problem: "Find the coordinates of the centroid of a triangle whose vertices are (-7, 6), (2, -2), and (8, 5).",
          steps: [
            "Here (x1, y1) = (-7, 6), (x2, y2) = (2, -2), (x3, y3) = (8, 5).",
            "x = (x1 + x2 + x3) / 3 = (-7 + 2 + 8) / 3 = 3 / 3 = 1.",
            "y = (y1 + y2 + y3) / 3 = (6 + (-2) + 5) / 3 = 9 / 3 = 3.",
            "Coordinates of the centroid G are (1, 3)."
          ]
        },
        commonMistakes: [
          "Mixing up mx2 + nx1 as mx1 + nx2 in the section formula."
        ],
        examTips: [
          "To prove 3 points A, B, C are collinear using distance formula, show that the sum of two smaller distances equals the largest distance."
        ],
        checkpoint: {
          question: "What is the distance of point P(-3, 4) from the origin O(0, 0)?",
          options: ["7", "5", "1", "25"],
          correct: 1,
          explanation: "d(O, P) = √[(-3)² + 4²] = √(9 + 16) = √25 = 5."
        }
      },
      {
        id: "m2-5-l2",
        title: "Slope of a Line & Collinearity Using Slope",
        objectives: [
          "Calculate slope of a line using angle of inclination θ or two points",
          "Prove three points collinear using equal slopes"
        ],
        hinglish: "Line positive X-axis ke sath jo angle θ banati hai, uske tanθ ko line ka Slope (m) kehte hain: m = tanθ. Agar line par do points diye hon toh slope m = (y2 - y1) / (x2 - x1) hota hai. Agar line AB aur line BC ka slope equal aaye, toh points A, B, C collinear hote hain!",
        boardNotes: "Slope of a line making angle θ with positive X-axis: m = tanθ.
Slope of a line passing through (x1, y1) and (x2, y2): m = (y2 - y1) / (x2 - x1).
Slope of X-axis is 0; slope of Y-axis cannot be determined. Parallel lines have equal slopes.",
        formulaBox: "m = tanθ
m = (y2 - y1) / (x2 - x1)
Collinearity test: Slope of AB = Slope of BC",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Collinearity by Slope",
          problem: "Verify whether points A(1, -3), B(2, -5), and C(-4, 7) are collinear.",
          steps: [
            "Slope of line AB = (-5 - (-3)) / (2 - 1) = (-5 + 3) / 1 = -2.",
            "Slope of line BC = (7 - (-5)) / (-4 - 2) = (7 + 5) / -6 = 12 / -6 = -2.",
            "Since Slope of line AB = Slope of line BC and point B is common, points A, B, and C are collinear."
          ]
        },
        commonMistakes: [
          "Writing (x2 - x1) in the numerator instead of (y2 - y1)."
        ],
        examTips: [
          "Remember standard slope values: θ = 30° ⇒ m = 1/√3; θ = 45° ⇒ m = 1; θ = 60° ⇒ m = √3."
        ],
        checkpoint: {
          question: "What is the slope of a line that makes an angle of 45° with the positive direction of X-axis?",
          options: ["0", "1", "√3", "1/√3"],
          correct: 1,
          explanation: "Slope m = tan 45° = 1."
        }
      }
    ]
  },

  "m2-6": {
    title: "Trigonometry",
    lessons: [
      {
        id: "m2-6-l1",
        title: "Trigonometric Ratios, Standard Values & Identities",
        objectives: [
          "Recall all 6 trigonometric ratios and reciprocal relations",
          "Prove trigonometric identities using sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, and 1 + cot²θ = cosec²θ"
        ],
        hinglish: "Trigonometry me 3 main identities sabse important hain: (1) sin²θ + cos²θ = 1, (2) 1 + tan²θ = sec²θ, (3) 1 + cot²θ = cosec²θ. Prove-that questions solve karne ka golden rule hai: LHS ke sabhi terms (tan, cot, sec, cosec) ko sinθ aur cosθ me convert karo, LCM lo, aur identity lagao!",
        boardNotes: "Reciprocal relations: cosecθ = 1/sinθ, secθ = 1/cosθ, cotθ = 1/tanθ = cosθ/sinθ, tanθ = sinθ/cosθ.
Fundamental Trigonometric Identities:
1. sin²θ + cos²θ = 1
2. 1 + tan²θ = sec²θ
3. 1 + cot²θ = cosec²θ",
        formulaBox: "sin²θ + cos²θ = 1
1 + tan²θ = sec²θ
1 + cot²θ = cosec²θ
tanθ = sinθ / cosθ,   cotθ = cosθ / sinθ",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Trigonometric Identity Proof",
          problem: "Prove that: secθ + tanθ = cosθ / (1 - sinθ)",
          steps: [
            "LHS = secθ + tanθ = (1 / cosθ) + (sinθ / cosθ) = (1 + sinθ) / cosθ.",
            "Multiply numerator and denominator by (1 - sinθ):",
            "LHS = [(1 + sinθ)(1 - sinθ)] / [cosθ(1 - sinθ)] = (1 - sin²θ) / [cosθ(1 - sinθ)].",
            "Since 1 - sin²θ = cos²θ: LHS = cos²θ / [cosθ(1 - sinθ)] = cosθ / (1 - sinθ) = RHS."
          ]
        },
        commonMistakes: [
          "Writing 1 - sec²θ = tan²θ instead of sec²θ - 1 = tan²θ (sign reversal)."
        ],
        examTips: [
          "When proving identities, always start from the more complex side (usually LHS) and clearly cite each identity used in brackets."
        ],
        checkpoint: {
          question: "What is the value of 9 sec²A - 9 tan²A?",
          options: ["1", "9", "0", "8"],
          correct: 1,
          explanation: "9(sec²A - tan²A) = 9(1) = 9, using the identity 1 + tan²A = sec²A."
        }
      },
      {
        id: "m2-6-l2",
        title: "Applications of Trigonometry (Heights and Distances)",
        objectives: [
          "Distinguish between Line of Vision, Angle of Elevation, and Angle of Depression",
          "Solve word problems involving heights of buildings, trees, and ships"
        ],
        hinglish: "Jab hum seedha horizontal dekhte hain aur phir kisi unchi cheez (jaise tower top) ko dekhte hain, toh jo angle upar ki taraf banta hai use Angle of Elevation kehte hain. Aur jab hum kisi building ke upar se niche road par kisi car ko dekhte hain, toh horizontal line se niche banne wale angle ko Angle of Depression kehte hain (jo alternate angle ki wajah se niche ke angle ke equal hota hai).",
        boardNotes: "Line of Vision: The ray from the observer's eye to the object.
Angle of Elevation: Angle between horizontal line and line of vision when the object is ABOVE horizontal level.
Angle of Depression: Angle between horizontal line and line of vision when the object is BELOW horizontal level.",
        formulaBox: "tan 30° = 1 / √3   |   tan 45° = 1   |   tan 60° = √3
sin 30° = 1/2   |   cos 60° = 1/2   |   sin 60° = √3/2",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Ship & Lighthouse",
          problem: "From the top of a lighthouse, an observer looking at a ship makes an angle of depression of 60°. If the height of the lighthouse is 90 m, find how far the ship is from the lighthouse (√3 = 1.73).",
          steps: [
            "Let AB = 90 m be the lighthouse and C be the ship. Angle of depression = 60°, so alternate angle ∠ACB = 60°.",
            "In right-angled ΔABC: tan 60° = AB / BC",
            "√3 = 90 / BC  ⇒  BC = 90 / √3 = (90√3) / 3 = 30√3.",
            "BC = 30 × 1.73 = 51.9 m. The ship is 51.9 m away from the lighthouse."
          ]
        },
        commonMistakes: [
          "Drawing the angle of depression with the vertical wall instead of the horizontal line of sight."
        ],
        examTips: [
          "Always rationalize denominators like 90/√3 to 30√3 before multiplying by √3 = 1.73—it saves huge calculation time!"
        ],
        checkpoint: {
          question: "If the height of a vertical pole equals the length of its shadow on the ground, what is the angle of elevation of the Sun?",
          options: ["30°", "45°", "60°", "90°"],
          correct: 1,
          explanation: "tanθ = Height / Shadow = 1 ⇒ θ = 45°."
        }
      }
    ]
  },

  "m2-7": {
    title: "Mensuration",
    lessons: [
      {
        id: "m2-7-l1",
        title: "Surface Area & Volume of 3D Solids and Frustum of a Cone",
        objectives: [
          "Apply TSA, CSA, and Volume formulas for Cylinder, Cone, Sphere, and Hemisphere",
          "Calculate slant height, surface area, and volume of a Frustum of a Cone"
        ],
        hinglish: "Mensuration ke Part 1 me hum 3D solids (Cylinder, Cone, Sphere, Hemisphere) aur Frustum of a Cone ke formulas padhte hain. Jab ek cone ko base ke parallel plane se kaat kar upar ka chhota cone hata diya jata hai, toh bacha hua bucket-shaped hissa Frustum kehlata hai, jiske do radii r1 aur r2 hote hain.",
        boardNotes: "Frustum of a cone with radii r1, r2 (r1 > r2) and perpendicular height h:
1. Slant height l = √[h² + (r1 - r2)²]
2. Curved Surface Area = π(r1 + r2)l
3. Total Surface Area = π(r1 + r2)l + πr1² + πr2²
4. Volume = (1/3)πh(r1² + r2² + r1r2)",
        formulaBox: "Cone: l = √(r² + h²), CSA = πrl, Vol = (1/3)πr²h
Sphere: Surface Area = 4πr², Vol = (4/3)πr³
Hemisphere: CSA = 2πr², TSA = 3πr², Vol = (2/3)πr³
Frustum Vol = (1/3)πh(r1² + r2² + r1r2)",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Frustum Slant Height & CSA",
          problem: "Radii of ends of a frustum are 14 cm and 6 cm respectively and its height is 6 cm. Find its slant height and curved surface area (π = 3.14).",
          steps: [
            "Here r1 = 14 cm, r2 = 6 cm, h = 6 cm.",
            "Slant height l = √[h² + (r1 - r2)²] = √[6² + (14 - 6)²] = √(36 + 64) = √100 = 10 cm.",
            "Curved Surface Area = π(r1 + r2)l = 3.14 × (14 + 6) × 10 = 3.14 × 200 = 628 cm²."
          ]
        },
        commonMistakes: [
          "Using (r1 + r2)² instead of (r1 - r2)² inside the slant height formula l = √[h² + (r1 - r2)²]."
        ],
        examTips: [
          "When one solid is melted and recast into another solid (e.g., spheres melted into a cylinder), equate their Volumes!"
        ],
        checkpoint: {
          question: "What is the Total Surface Area (TSA) of a solid hemisphere of radius r?",
          options: ["2πr²", "3πr²", "4πr²", "(2/3)πr³"],
          correct: 1,
          explanation: "TSA of solid hemisphere = Curved surface area (2πr²) + Circular base area (πr²) = 3πr²."
        }
      },
      {
        id: "m2-7-l2",
        title: "Sector of a Circle, Length of Arc & Area of Segment",
        objectives: [
          "Calculate Area of Sector and Length of Arc using central angle θ",
          "Compute Area of Segment = Area of Sector - Area of Triangle"
        ],
        hinglish: "Circle ke do radii aur unke beech ke arc se ghira hissa Sector kehlata hai. Sector ka area nikalne ke liye formula hai (θ/360) × πr², aur arc ki length ke liye (θ/360) × 2πr. Agar sector aur arc ki length l dono pata hon, toh Area of Sector = (l × r) / 2 direct lag sakta hai!",
        boardNotes: "For a circle of radius r and central angle θ:
1. Area of Sector A = (θ / 360) × πr²
2. Length of Arc l = (θ / 360) × 2πr
3. Relation: Area of Sector A = (l × r) / 2
4. Area of Minor Segment = Area of Sector - Area of ΔOAB = r²[(πθ / 360) - (sinθ / 2)]",
        formulaBox: "Area of Sector = (θ / 360) × πr²  =  (l × r) / 2
Length of Arc l = (θ / 360) × 2πr
Area of Segment = r²[(πθ / 360) - (sinθ / 2)]",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Sector Area from Arc Length",
          problem: "Radius of a sector of a circle is 3.5 cm and length of its arc is 2.2 cm. Find the area of the sector.",
          steps: [
            "Here radius r = 3.5 cm and length of arc l = 2.2 cm.",
            "Using direct formula: Area of sector = (l × r) / 2",
            "Area = (2.2 × 3.5) / 2 = 1.1 × 3.5 = 3.85 cm²."
          ]
        },
        commonMistakes: [
          "Forgetting to subtract the area of the central triangle when asked for Area of SEGMENT instead of Area of SECTOR."
        ],
        examTips: [
          "Perimeter of a sector = Length of arc + 2 × radius = l + 2r."
        ],
        checkpoint: {
          question: "If the length of an arc of a sector is 10 cm and the radius of the circle is 6 cm, what is the area of the sector?",
          options: ["60 cm²", "30 cm²", "16 cm²", "36 cm²"],
          correct: 1,
          explanation: "Area of sector = (l × r) / 2 = (10 × 6) / 2 = 30 cm²."
        }
      }
    ]
  }
};
