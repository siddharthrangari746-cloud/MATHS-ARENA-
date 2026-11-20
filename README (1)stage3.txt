MATHS ARENA — STAGE 3 (COMPLETE INTERACTIVE TUTORIAL SYSTEM)
============================================================

1. WHAT STAGE 3 ADDS
--------------------
- Complete Interactive Tutorial System for all 13 chapters of Maharashtra State Board Class 10 Mathematics:
  * Mathematics Part I (Algebra):
    - m1-1: Linear Equations in Two Variables (3 lessons)
    - m1-2: Quadratic Equations (3 lessons)
    - m1-3: Arithmetic Progression (2 lessons)
    - m1-4: Financial Planning (2 lessons)
    - m1-5: Probability (2 lessons)
    - m1-6: Statistics (2 lessons)
  * Mathematics Part II (Geometry):
    - m2-1: Similarity (2 lessons)
    - m2-2: Pythagoras Theorem (2 lessons)
    - m2-3: Circle (2 lessons)
    - m2-4: Geometric Constructions (2 lessons)
    - m2-5: Co-ordinate Geometry (2 lessons)
    - m2-6: Trigonometry (2 lessons)
    - m2-7: Mensuration (2 lessons)
- Dual-Level Teaching System in every lesson:
  * Level 1: Simple Hinglish Concept Guide (beginner-friendly intuition).
  * Level 2: Board Exam Ready Notes & Textbook Definitions.
- Important Formulae, Theorems, Textbook-Pattern Solved Examples, Exam Tips, and Common Mistakes.
- Interactive Checkpoints with multiple-choice options, instant answer validation, explanation, and Continue button.
- Persistent Progress Tracking via `localStorage` (tracks completed lessons, updates both Tutorial and Chapter Hub progress bars, and restores your last opened lesson).

2. EXACT FILENAMES & FILE ROLES
-------------------------------
Replace / upload these exact 6 files in the root folder of your GitHub repository:

1. `index.html`          (MODIFIED — Preserves Stage 1 & 2 views and upgrades `#tutorialView` with the Stage 3 interactive tutorial workspace)
2. `style.css`           (MODIFIED — Preserves Stage 1 & 2 cream notebook theme and adds responsive Stage 3 lesson, formula, and checkpoint styles)
3. `app.js`              (MODIFIED — Preserves `syllabusData`, `appState`, `navigateTo()`, and `popstate` history while connecting `initTutorial()` and `updateChapterProgressUI()`)
4. `tutorials.js`        (NEW FILE — Contains complete Maharashtra Board textbook-aligned tutorial lessons and checkpoints for all 13 chapters)
5. `tutorial-system.js`  (NEW FILE — Handles lesson rendering, Prev/Next/Jump navigation, checkpoint evaluation, and `localStorage` progress persistence)
6. `README.txt`          (UPDATED — Deployment, file structure, and verification guide)

3. SCRIPT LOADING ORDER (CRITICAL)
----------------------------------
In `index.html`, scripts are loaded at the bottom of `<body>` in this exact sequence:
  1. `<script src="tutorials.js"></script>`
  2. `<script src="tutorial-system.js"></script>`
  3. `<script src="app.js"></script>`

Do not reorder these script tags, because `app.js` calls `initTutorial()` and `updateChapterProgressUI()` from `tutorial-system.js`, which reads `chapterTutorials` from `tutorials.js`.

4. HOW TO UPLOAD TO YOUR EXISTING GITHUB REPOSITORY
---------------------------------------------------
- Delete or overwrite old Stage 2 files (`index.html`, `style.css`, `app.js`, `README.txt`) if they had `.stage2` in their names—ensure the live files are named strictly `index.html`, `style.css`, `app.js`, `tutorials.js`, `tutorial-system.js`, and `README.txt`.
- Upload all 6 files directly into the root directory of your GitHub repository and commit to `main`.
- GitHub Pages will serve `index.html` automatically with zero backend or build step required.

5. HOW TO TEST STAGE 3 AFTER DEPLOYMENT
---------------------------------------
1. Open `index.html` -> Verify Home Screen shows Maths 1 (6 chapters), Maths 2 (7 chapters), and Test Arena.
2. Click any chapter -> Click "Tutorial" (or open Chapter Hub -> Tutorial).
3. Verify Level 1 (Hinglish), Level 2 (Board Notes), Formula Box, Solved Example, Exam Tips, and Common Mistakes render cleanly without horizontal scrolling on mobile.
4. Answer the Interactive Checkpoint -> Click "Submit Answer" -> Verify Green/Red feedback + explanation + "Complete & Next Lesson" button appear.
5. Click "Mark Complete & Next" -> Go back to Chapter Hub -> Verify the progress bar percentage updated and persists after refreshing the browser page.
