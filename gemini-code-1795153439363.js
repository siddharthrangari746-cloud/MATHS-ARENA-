// Maharashtra State Board Class 10 Mathematics Tutorial Database (All 13 Chapters)
const chapterTutorials = {
  // ==================== MATHS PART I — ALGEBRA ====================
  "m1-1": {
    title: "Linear Equations in Two Variables",
    lessons: [
      {
        id: "m1-1-l1",
        title: "Introduction & Simultaneous Linear Equations",
        objectives: ["Understand equations of degree 1 in two variables", "Identify general form ax + by = c"],
        hinglish: "Linear equation in two variables ka matlab hai aisi equation jisme do variables (jaise x aur y) hon aur dono ki maximum degree (power) 1 ho. Jaise 2x + 3y = 12. Jab hum aisi do equations ko ek sath solve karte hain taaki x aur y ki aisi common values mile jo dono equations ko satisfy karein, toh ise Simultaneous Linear Equations kehte hain.",
        boardNotes: "An equation of the form ax + by + c = 0 (or ax + by = k), where a, b, c are real numbers and a ≠ 0, b ≠ 0, is a linear equation in two variables x and y. A pair of linear equations in two variables is solved simultaneously using Elimination Method or Substitution Method.",
        formulaBox: "General Form: ax + by = c\nDeterminant Method (Cramer's Rule):\nx = D_x / D,  y = D_y / D\nwhere D = |a1 b1 / a2 b2| = a1b2 - a2b1",
        solvedExample: {
          title: "Solved Example: Elimination Method",
          problem: "Solve: 5x + 3y = 9 ... (1) and 2x - 3y = 12 ... (2)",
          steps: [
            "Observe coefficients of y: they are +3 and -3.",
            "Adding equation (1) and equation (2): (5x + 2x) + (3y - 3y) = 9 + 12",
            "7x = 21 ⇒ x = 3",
            "Substitute x = 3 in equation (1): 5(3) + 3y = 9 ⇒ 15 + 3y = 9 ⇒ 3y = -6 ⇒ y = -2.",
            "Solution: (x, y) = (3, -2)."
          ]
        },
        commonMistakes: ["Forgetting to multiply all terms when equating coefficients.", "Sign errors while subtracting equations."],
        examTips: ["Always write the final solution as an ordered pair (x, y) = (...).", "Verify your answer by substituting x and y back into both original equations."],
        checkpoint: {
          question: "What is the degree of a linear equation in two variables?",
          options: ["0", "1", "2", "3"],
          correct: 1,
          explanation: "The maximum power of variables x and y in a linear equation is 1."
        }
      },
      {
        id: "m1-1-l2",
        title: "Cramer's Rule (Determinants)",
        objectives: ["Evaluate 2x2 determinants", "Apply Cramer's Rule to solve simultaneous equations"],
        hinglish: "Determinant ek 2x2 grid hoti hai numbers ki jise cross-multiply karke solve kiya jata hai. Cramer's Rule ek bahut hi aasan shortcut method hai simultaneous equations solve karne ka bina variables ko eliminate kiye, bas Determinants (D, Dx, Dy) nikal kar.",
        boardNotes: "Determinant D = |a1 b1; a2 b2| = a1b2 - a2b1. If D ≠ 0, the system has a unique solution given by x = Dx/D and y = Dy/D where Dx = |c1 b1; c2 b2| and Dy = |a1 c1; a2 c2|.",
        formulaBox: "D = a1b2 - a2b1\nDx = c1b2 - c2b1\nDy = a1c2 - a2c1\nx = Dx / D, y = Dy / D",
        solvedExample: {
          title: "Solved Example using Cramer's Rule",
          problem: "Solve: 3x - 4y = 10 and 4x + 3y = 5",
          steps: [
            "Here a1 = 3, b1 = -4, c1 = 10 and a2 = 4, b2 = 3, c2 = 5.",
            "D = (3)(3) - (-4)(4) = 9 - (-16) = 9 + 16 = 25.",
            "Dx = (10)(3) - (-4)(5) = 30 - (-20) = 50.",
            "Dy = (3)(5) - (10)(4) = 15 - 40 = -25.",
            "x = Dx / D = 50 / 25 = 2; y = Dy / D = -25 / 25 = -1. Solution is (2, -1)."
          ]
        },
        commonMistakes: ["Mixing up columns for Dx and Dy.", "Sign mistakes when subtracting cross products (e.g., minus minus becomes plus)."],
        examTips: ["Always write down standard form ax + by = c before writing a1, b1, c1."],
        checkpoint: {
          question: "For the determinant | 2  3 | \n| 4  5 |, what is the value?",
          options: ["22", "-2", "2", "-22"],
          correct: 1,
          explanation: "(2 × 5) - (3 × 4) = 10 - 12 = -2."
        }
      }
    ]
  },

  "m1-2": {
    title: "Quadratic Equations",
    lessons: [
      {
        id: "m1-2-l1",
        title: "Introduction & Factorization Method",
        objectives: ["Identify quadratic equations in standard form", "Solve by splitting the middle term"],
        hinglish: "Quadratic equation aisi equation hai jisme variable ki maximum power 2 hoti hai. Standard form hai ax² + bx + c = 0 (jahan a ≠ 0). Isse solve karne ke liye hum middle term ko split karte hain taaki do aise factors mile jinka sum b ho aur product a × c ho.",
        boardNotes: "Any equation that contains a polynomial of degree 2 is a quadratic equation. Standard form: ax² + bx + c = 0 (a, b, c are real numbers, a ≠ 0). Roots (or solutions) are values of x that satisfy the equation.",
        formulaBox: "Standard Form: ax² + bx + c = 0\nZero Product Property: If AB = 0, then A = 0 or B = 0.",
        solvedExample: {
          title: "Solved Example: Factorization",
          problem: "Solve: x² - 9x + 20 = 0",
          steps: [
            "Product of ac = 1 × 20 = 20. Middle term sum = -9.",
            "Two numbers whose product is 20 and sum is -9 are -4 and -5.",
            "Rewrite middle term: x² - 4x - 5x + 20 = 0",
            "Factor by grouping: x(x - 4) - 5(x - 4) = 0 ⇒ (x - 4)(x - 5) = 0",
            "Therefore, x = 4 or x = 5."
          ]
        },
        commonMistakes: ["Ignoring the 'a' coefficient when finding product ac.", "Sign errors while grouping negative terms."],
        examTips: ["Always check if the equation is in standard form before factoring."],
        checkpoint: {
          question: "What is the standard form of a quadratic equation?",
          options: ["ax + b = 0", "ax² + bx + c = 0 (a ≠ 0)", "ax³ + bx² + c = 0", "ax² = c"],
          correct: 1,
          explanation: "Standard form requires degree 2 with a non-zero leading coefficient a."
        }
      },
      {
        id: "m1-2-l2",
        title: "Formula Method & Discriminant",
        objectives: ["Use Shree Dharacharya formula", "Determine nature of roots using discriminant Δ"],
        hinglish: "Jab middle term split karna mushkil ho, tab hum direct Formula method (Shree Dharacharya formula) use karte hain: x = (-b ± √(b² - 4ac)) / 2a. Isme jo b² - 4ac hota hai use Discriminant (Delta Δ) kehte hain, jo batata hai ki roots real honge ya imaginary.",
        boardNotes: "Roots of ax² + bx + c = 0 are given by x = (-b ± √(b² - 4ac)) / 2a. Discriminant Δ = b² - 4ac determines nature of roots:\n- If Δ > 0: Real and unequal roots.\n- If Δ = 0: Real and equal roots.\n- If Δ < 0: Not real roots.",
        formulaBox: "Quadratic Formula: x = (-b ± √(b² - 4ac)) / 2a\nDiscriminant (Δ) = b² - 4ac",
        solvedExample: {
          title: "Solved Example: Formula Method",
          problem: "Solve: x² + 5x + 6 = 0",
          steps: [
            "Here a = 1, b = 5, c = 6.",
            "Calculate Δ = b² - 4ac = 5² - 4(1)(6) = 25 - 24 = 1.",
            "Apply formula: x = (-5 ± √1) / (2 × 1) = (-5 ± 1) / 2.",
            "x = (-5 + 1)/2 = -2  or  x = (-5 - 1)/2 = -3.",
            "Roots are -2 and -3."
          ]
        },
        commonMistakes: ["Forgetting the square root in ± part.", "Calculation errors with negative signs in discriminant."],
        examTips: ["Always find Δ separately first to simplify root calculation."],
        checkpoint: {
          question: "If the discriminant Δ = b² - 4ac is less than 0 (Δ < 0), what is the nature of roots?",
          options: ["Real and equal", "Real and unequal", "Not real (Imaginary)", "Rational"],
          correct: 2,
          explanation: "When Δ < 0, taking the square root of a negative number yields non-real complex numbers."
        }
      }
    ]
  },

  "m1-3": {
    title: "Arithmetic Progression",
    lessons: [
      {
        id: "m1-3-l1",
        title: "Sequence, AP & nth Term Formula",
        objectives: ["Identify Arithmetic Progression by common difference d", "Find nth term tn of an AP"],
        hinglish: "Arithmetic Progression (AP) ek aisi sequence hoti hai jisme har agla term pichle term me ek fixed number (common difference 'd') jodne par milta hai. Jaise 2, 5, 8, 11... yahan d = 3 hai. Kisi bhi number ka n-th term nikalne ka formula hai tn = a + (n-1)d.",
        boardNotes: "A sequence in which each term after the first differs from the preceding term by a constant amount is called an Arithmetic Progression. The constant difference is denoted by d. nth term tn = a + (n - 1)d, where a is first term.",
        formulaBox: "Common Difference: d = t_{n+1} - tn\nnth Term: tn = a + (n - 1)d",
        solvedExample: {
          title: "Solved Example: Finding nth Term",
          problem: "Find the 10th term of AP: 2, 7, 12, 17, ...",
          steps: [
            "First term a = 2, Common difference d = 7 - 2 = 5.",
            "We need t10, so n = 10.",
            "Formula: tn = a + (n - 1)d",
            "t10 = 2 + (10 - 1)5 = 2 + (9)(5) = 2 + 45 = 47.",
            "The 10th term is 47."
          ]
        },
        commonMistakes: ["Using t2 - t1 incorrectly.", "Forgetting parentheses in (n - 1)d."],
        examTips: ["Always verify that d is constant for at least three consecutive terms before declaring a sequence an AP."],
        checkpoint: {
          question: "What is the common difference d for AP: 5, 8, 11, 14, ...?",
          options: ["2", "3", "5", "8"],
          correct: 1,
          explanation: "d = 8 - 5 = 3."
        }
      },
      {
        id: "m1-3-l2",
        title: "Sum of first n terms of an AP",
        objectives: ["Calculate sum Sn using AP summation formulae"],
        hinglish: "Agar hume AP ke pehle n terms ka total (sum) nikalna ho, toh hum Sn formula use karte hain. Jaise 1 se 100 tak ke numbers ka sum nikalna.",
        boardNotes: "The sum of the first n terms of an AP is given by Sn = (n/2)[2a + (n - 1)d] or Sn = (n/2)(t1 + tn).",
        formulaBox: "Sn = (n/2)[2a + (n - 1)d]\nSn = (n/2)(a + l) where l is last term",
        solvedExample: {
          title: "Solved Example: Sum of AP",
          problem: "Find the sum of first 20 terms of AP: 3, 6, 9, 12, ...",
          steps: [
            "Here a = 3, d = 6 - 3 = 3, n = 20.",
            "Sn = (n/2)[2a + (n - 1)d]",
            "S20 = (20/2)[2(3) + (20 - 1)3] = 10[6 + (19)(3)]",
            "S20 = 10[6 + 57] = 10[63] = 630.",
            "Sum of first 20 terms is 630."
          ]
        },
        commonMistakes: ["Confusing tn formula with Sn formula."],
        examTips: ["Check whether you need the term value (tn) or the sum (Sn) by reading the word problem carefully."],
        checkpoint: {
          question: "What is the formula for sum of first n terms Sn when first and last terms are known?",
          options: ["n/2(a - l)", "n(a + l)", "n/2(a + l)", "2n(a + l)"],
          correct: 2,
          explanation: "Sn = (n/2)(a + l) is the direct summation formula using first and last term."
        }
      }
    ]
  },

  "m1-4": {
    title: "Financial Planning",
    lessons: [
      {
        id: "m1-4-l1",
        title: "GST (Goods and Services Tax) & Input Tax Credit",
        objectives: ["Calculate CGST and SGST", "Compute Input Tax Credit (ITC) and payable GST"],
        hinglish: "GST matlab Goods and Services Tax jo 'One Nation, One Tax' ke roop me chalta hai. Isme tax do parts me divide hota hai: Central GST (CGST) aur State GST (SGST), dono aade-aade hote hain. Businessman jab raw material kharidte waqt tax dete hain (Input Tax) aur bechte waqt tax collect karte hain (Output Tax), toh unhe ITC milta hai.",
        boardNotes: "GST is levied at each stage of value addition. CGST = SGST = (Total GST Rate) / 2. Payable GST = Output Tax - Input Tax Credit (ITC).",
        formulaBox: "CGST = SGST = (GST% / 2) of Taxable Value\nPayable GST = Output Tax - ITC",
        solvedExample: {
          title: "Solved Example: GST Calculation",
          problem: "A trader sells goods worth ₹10,000 at 12% GST. Find CGST and SGST.",
          steps: [
            "Total GST rate = 12%.",
            "CGST rate = 12% / 2 = 6%. SGST rate = 6%.",
            "CGST = 6% of ₹10,000 = (6/100) × 10000 = ₹600.",
            "SGST = 6% of ₹10,000 = ₹600.",
            "Total GST = ₹1,200."
          ]
        },
        commonMistakes: ["Applying full GST rate to CGST instead of splitting by 2."],
        examTips: ["Always mention units (₹) in financial planning answers."],
        checkpoint: {
          question: "If the total GST rate on an item is 18%, what is the rate of CGST?",
          options: ["36%", "18%", "9%", "0%"],
          correct: 2,
          explanation: "CGST is always half of the total GST rate: 18% / 2 = 9%."
        }
      },
      {
        id: "m1-4-l2",
        title: "Shares, Mutual Funds & Dividends",
        objectives: ["Understand Face Value (FV) and Market Value (MV)", "Calculate Dividend and Rate of Return"],
        hinglish: "Company ki share capital chhote hisso me bati hoti hai jise Shares kehte hain. Share ki original price Face Value (FV) hoti hai, aur stock market me jis price par wo bikta hai use Market Value (MV) kehte hain. Jab share FV se zyada par bike toh Premium, kam par bike toh Discount.",
        boardNotes: "Dividend is always calculated on Face Value (FV). Investment = Number of shares × Market Value (MV). Rate of Return = (Total Dividend / Total Investment) × 100.",
        formulaBox: "Total Dividend = Number of shares × FV × (Dividend %)\nInvestment = Number of shares × MV\nRate of Return = (Income / Investment) × 100",
        solvedExample: {
          title: "Solved Example: Dividend Calculation",
          problem: "Find the dividend received on 100 shares of FV ₹10 each at 15% dividend.",
          steps: [
            "Face Value of 1 share = ₹10.",
            "Dividend per share = 15% of ₹10 = (15/100) × 10 = ₹1.50.",
            "Total Dividend for 100 shares = 100 × 1.50 = ₹150.",