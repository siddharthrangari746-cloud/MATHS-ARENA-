const syllabusData = [
  { id: "m1-1", part: "maths1", number: 1, subject: "Mathematics Part I · Algebra", shortSubject: "Part I (Algebra)", name: "Linear Equations in Two Variables" },
  { id: "m1-2", part: "maths1", number: 2, subject: "Mathematics Part I · Algebra", shortSubject: "Part I (Algebra)", name: "Quadratic Equations" },
  { id: "m1-3", part: "maths1", number: 3, subject: "Mathematics Part I · Algebra", shortSubject: "Part I (Algebra)", name: "Arithmetic Progression" },
  { id: "m1-4", part: "maths1", number: 4, subject: "Mathematics Part I · Algebra", shortSubject: "Part I (Algebra)", name: "Financial Planning" },
  { id: "m1-5", part: "maths1", number: 5, subject: "Mathematics Part I · Algebra", shortSubject: "Part I (Algebra)", name: "Probability" },
  { id: "m1-6", part: "maths1", number: 6, subject: "Mathematics Part I · Algebra", shortSubject: "Part I (Algebra)", name: "Statistics" },

  { id: "m2-1", part: "maths2", number: 1, subject: "Mathematics Part II · Geometry", shortSubject: "Part II (Geometry)", name: "Similarity" },
  { id: "m2-2", part: "maths2", number: 2, subject: "Mathematics Part II · Geometry", shortSubject: "Part II (Geometry)", name: "Pythagoras Theorem" },
  { id: "m2-3", part: "maths2", number: 3, subject: "Mathematics Part II · Geometry", shortSubject: "Part II (Geometry)", name: "Circle" },
  { id: "m2-4", part: "maths2", number: 4, subject: "Mathematics Part II · Geometry", shortSubject: "Part II (Geometry)", name: "Geometric Constructions" },
  { id: "m2-5", part: "maths2", number: 5, subject: "Mathematics Part II · Geometry", shortSubject: "Part II (Geometry)", name: "Co-ordinate Geometry" },
  { id: "m2-6", part: "maths2", number: 6, subject: "Mathematics Part II · Geometry", shortSubject: "Part II (Geometry)", name: "Trigonometry" },
  { id: "m2-7", part: "maths2", number: 7, subject: "Mathematics Part II · Geometry", shortSubject: "Part II (Geometry)", name: "Mensuration" }
];

const tutorialDatabase = {
  "m1-1": {
    concept: "Linear equation in two variables ek aisi equation hoti hai jisme do variables (jaise x aur y) hote hain aur har variable ki degree (power) 1 hoti hai. Iska standard form <strong>ax + by + c = 0</strong> hota hai.",
    formulas: "Standard Form: <strong>ax + by = c</strong><br>Cramer's Rule: D = (a₁b₂ - a₂b₁), Dx = (c₁b₂ - c₂b₁), Dy = (a₁c₂ - a₂c₁)<br>x = Dx / D, y = Dy / D",
    examples: [
      { q: "Solve: 3x + 2y = 11 and 2x + 3y = 4", steps: "Step 1: Coefficients equal karke subtract karein.<br>Step 2: x = 5, y = -2." }
    ],
    checkpoint: {
      question: "What is the degree of a linear equation in two variables?",
      options: ["0", "1", "2", "3"],
      answer: 1,
      explanation: "Correct! Har variable ki power 1 hoti hai."
    }
  },
  "m1-2": {
    concept: "Quadratic equation ka standard form <strong>ax² + bx + c = 0</strong> hai, jahan a ≠ 0. Iske maximum 2 roots hote hain.",
    formulas: "Quadratic Formula: <strong>x = (-b ± √(b² - 4ac)) / 2a</strong><br>Discriminant Δ = b² - 4ac",
    examples: [
      { q: "Solve: x² - 9x + 20 = 0", steps: "Step 1: Factorization se (x-5)(x-4) = 0.<br>Step 2: x = 5, 4." }
    ],
    checkpoint: {
      question: "What is the Discriminant for x² - 4x + 4 = 0?",
      options: ["0", "4", "16", "-16"],
      answer: 0,
      explanation: "Correct! Δ = (-4)² - 4(1)(4) = 0."
    }
  },
  "m1-3": {
    concept: "Arithmetic Progression (AP) aisi sequence hai jisme consecutive terms ka difference constant (d) hota hai.",
    formulas: "n-th term: <strong>tₙ = a + (n - 1)d</strong><br>Sum: <strong>Sₙ = (n/2)[2a + (n - 1)d]</strong>",
    examples: [
      { q: "Find 10th term of AP: 2, 7, 12, ...", steps: "Step 1: a = 2, d = 5.<br>Step 2: t₁₀ = 2 + 9(5) = 47." }
    ],
    checkpoint: {
      question: "Find common difference d for AP: 5, 8, 11, 14, ...",
      options: ["2", "3", "5", "8"],
      answer: 1,
      explanation: "Correct! d = 8 - 5 = 3."
    }
  },
  "m1-4": {
    concept: "Financial Planning mein GST, brokerage, aur shares ke baare mein padhte hain. GST CGST aur SGST mein divide hota hai.",
    formulas: "GST = CGST + SGST<br>Total Bill = Taxable Value + GST",
    examples: [
      { q: "If taxable value is ₹2000 and GST is 18%, find total bill.", steps: "Step 1: GST = ₹360.<br>Step 2: Total = ₹2360." }
    ],
    checkpoint: {
      question: "If GST rate is 12%, what is CGST rate?",
      options: ["12%", "6%", "24%", "0%"],
      answer: 1,
      explanation: "Correct! CGST is half of total GST (6%)."
    }
  },
  "m1-5": {
    concept: "Probability mein event ke hone ki possibility measure ki jati hai.",
    formulas: "P(A) = n(A) / n(S)<br>0 ≤ P(A) ≤ 1",
    examples: [
      { q: "A fair die is rolled. Find P(even number).", steps: "Step 1: n(S)=6, n(A)=3.<br>Step 2: P(A) = 3/6 = 1/2." }
    ],
    checkpoint: {
      question: "Probability of getting number greater than 6 on a normal die?",
      options: ["1", "1/6", "0", "1/2"],
      answer: 2,
      explanation: "Correct! Impossible event ki probability 0 hoti hai."
    }
  },
  "m1-6": {
    concept: "Statistics mein data ka Mean, Median, aur Mode nikalna seekhte hain.",
    formulas: "Mean x̄ = Σ(fᵢxᵢ) / Σfᵢ",
    examples: [
      { q: "Find mean if Σ(fᵢxᵢ) = 450 and Σfᵢ = 50", steps: "Step 1: 450 / 50 = 9." }
    ],
    checkpoint: {
      question: "Which measure is obtained using an ogive curve?",
      options: ["Mean", "Median", "Mode", "Variance"],
      answer: 1,
      explanation: "Correct! Cumulative frequency graph se Median milta hai."
    }
  },
  "m2-1": {
    concept: "Similar triangles ke corresponding angles equal aur sides proportional hoti hain.",
    formulas: "Basic Proportionality Theorem (BPT): AD / DB = AE / EC",
    examples: [
      { q: "If AD=2, DB=3, AE=4, find EC using BPT.", steps: "Step 1: 2/3 = 4/EC ⇒ EC = 6." }
    ],
    checkpoint: {
      question: "In similar triangles, corresponding angles are:",
      options: ["Proportional", "Equal", "Complementary", "Supplementary"],
      answer: 1,
      explanation: "Correct! Corresponding angles equal hote hain."
    }
  },
  "m2-2": {
    concept: "Pythagoras Theorem: Hypotenuse² = Base² + Height².",
    formulas: "Hypotenuse² = Base² + Height²",
    examples: [
      { q: "If base=3, height=4, find hypotenuse.", steps: "Step 1: √(3² + 4²) = 5." }
    ],
    checkpoint: {
      question: "Which of these is a Pythagorean triplet?",
      options: ["3, 4, 5", "2, 3, 4", "5, 6, 7", "1, 2, 3"],
      answer: 0,
      explanation: "Correct! 3² + 4² = 5²."
    }
  },
  "m2-3": {
    concept: "Circle ke tangent radius par perpendicular hoti hai.",
    formulas: "Tangent length from external point are equal.",
    examples: [
      { q: "If radius=5, distance from center=13, find tangent length.", steps: "Step 1: √(13² - 5²) = 12." }
    ],
    checkpoint: {
      question: "Tangents drawn from external point to a circle are:",
      options: ["Unequal", "Equal", "Perpendicular", "Parallel"],
      answer: 1,
      explanation: "Correct! Tangents ki length equal hoti hai."
    }
  },
  "m2-4": {
    concept: "Geometric Constructions mein scale aur compass se accurate figures banate hain.",
    formulas: "Scale factor m/n for similar triangles.",
    examples: [
      { q: "Construct tangent using perpendicular bisector of segment OP.", steps: "Step 1: Bisect OP and draw circle." }
    ],
    checkpoint: {
      question: "Instrument used to draw circles accurately:",
      options: ["Scale", "Protractor", "Compass", "Divider"],
      answer: 2,
      explanation: "Correct! Compass use hota hai."
    }
  },
  "m2-5": {
    concept: "Co-ordinate Geometry mein distance formula aur section formula use hota hai.",
    formulas: "Distance: d = √((x₂ - x₁)² + (y₂ - y₁)₂)",
    examples: [
      { q: "Find distance between (2, 3) and (5, 7).", steps: "Step 1: √((3)² + (4)²) = 5." }
    ],
    checkpoint: {
      question: "Distance of point (3, 4) from origin (0,0) is:",
      options: ["3", "4", "5", "7"],
      answer: 2,
      explanation: "Correct! √(3² + 4²) = 5."
    }
  },
  "m2-6": {
    concept: "Trigonometry ratios: sin, cos, tan.",
    formulas: "sin²θ + cos²θ = 1",
    examples: [
      { q: "If sin θ = 3/5, find cos θ.", steps: "Step 1: cos θ = 4/5." }
    ],
    checkpoint: {
      question: "Value of sin²θ + cos²θ is:",
      options: ["0", "1", "2", "Depends on θ"],
      answer: 1,
      explanation: "Correct! Iski value hamesha 1 hoti hai."
    }
  },
  "m2-7": {
    concept: "Mensuration mein 3D shapes ke surface area aur volume nikalte hain.",
    formulas: "Cylinder Volume = πr²h, Cone Volume = (1/3)πr²h",
    examples: [
      { q: "Find volume of cylinder with r=7, h=10.", steps: "Step 1: (22/7) × 7² × 10 = 1540 cm³." }
    ],
    checkpoint: {
      question: "Volume formula of a cone is:",
      options: ["πr²h", "(1/3)πr²h", "(4/3)πr³", "2πrh"],
      answer: 1,
      explanation: "Correct! (1/3)πr²h hota hai."
    }
  }
};

const appState = {
  view: "home",
  chapterId: "m1-1",
  practiceDifficulty: "Easy",
  arenaScope: "chapter",
  arenaChapterId: "m1-1",
  arenaDifficulty: "Mixed (Board Pattern)"
};

const views = {
  home: document.getElementById("homeView"),
  chapter: document.getElementById("chapterView"),
  tutorial: document.getElementById("tutorialView"),
  practice: document.getElementById("practiceView"),
  arena: document.getElementById("testArenaView")
};

const globalBackBtn = document.getElementById("globalBackBtn");
const chapterDialog = document.getElementById("chapterDialog");
const infoDialog = document.getElementById("infoDialog");
let dialogSelectedChapter = null;

function getChapterById(id) {
  return syllabusData.find(ch => ch.id === id) || syllabusData[0];
}

function renderHomeChapters() {
  const m1List = document.getElementById("maths1List");
  const m2List = document.getElementById("maths2List");
  m1List.innerHTML = "";
  m2List.innerHTML = "";

  syllabusData.forEach(ch => {
    const button = document.createElement("button");
    button.className = "chapter-row";
    button.innerHTML = `
      <span class="chapter-no">${String(ch.number).padStart(2, "0")}</span>
      <span class="chapter-name"></span>
      <span class="chapter-arrow">›</span>
    `;
    button.querySelector(".chapter-name").textContent = ch.name;

    button.addEventListener("click", () => {
      dialogSelectedChapter = ch;
      document.getElementById("dialogBook").textContent = ch.subject.toUpperCase();
      document.getElementById("dialogTitle").textContent = ch.name;
      chapterDialog.showModal();
    });

    if (ch.part === "maths1") {
      m1List.appendChild(button);
    } else {
      m2List.appendChild(button);
    }
  });
}

function populateArenaChapterDropdown() {
  const select = document.getElementById("arenaChapterSelect");
  select.innerHTML = "";

  const group1 = document.createElement("optgroup");
  group1.label = "Mathematics Part I — Algebra";

  const group2 = document.createElement("optgroup");
  group2.label = "Mathematics Part II — Geometry";

  syllabusData.forEach(ch => {
    const opt = document.createElement("option");
    opt.value = ch.id;
    opt.textContent = `Ch ${String(ch.number).padStart(2, "0")}: ${ch.name}`;
    if (ch.part === "maths1") {
      group1.appendChild(opt);
    } else {
      group2.appendChild(opt);
    }
  });

  select.appendChild(group1);
  select.appendChild(group2);
}

function renderTutorialContent() {
  const ch = getChapterById(appState.chapterId);
  const numFormatted = String(ch.number).padStart(2, "0");
  const data = tutorialDatabase[ch.id] || tutorialDatabase["m1-1"];

  document.getElementById("tutBreadcrumb").textContent = `Home › Ch ${numFormatted}: ${ch.name} › Tutorial`;
  const pill = document.getElementById("tutSubjectPill");
  pill.textContent = ch.subject.toUpperCase();
  pill.classList.toggle("blue", ch.part === "maths2");

  document.getElementById("tutHeading").textContent = `Ch ${numFormatted}: ${ch.name}`;
  document.getElementById("tutSubHeading").textContent = `${ch.subject} · Maharashtra State Board Standard X`;

  document.getElementById("tutConceptContent").innerHTML = `<p>${data.concept}</p>`;
  document.getElementById("tutFormulaContent").innerHTML = `<div class="formula-box">${data.formulas}</div>`;

  let exHtml = "";
  data.examples.forEach((ex, idx) => {
    exHtml += `
      <div class="example-box">
        <strong>Example ${idx + 1}: ${ex.q}</strong>
        <p><strong>Solution:</strong><br>${ex.steps}</p>
      </div>
    `;
  });
  document.getElementById("tutExampleContent").innerHTML = exHtml;

  const cp = data.checkpoint;
  let optHtml = "";
  cp.options.forEach((opt, idx) => {
    optHtml += `<button type="button" class="chk-btn" data-opt="${idx}">${String.fromCharCode(65 + idx)}. ${opt}</button>`;
  });

  document.getElementById("tutCheckpointContent").innerHTML = `
    <p><strong>Q. ${cp.question}</strong></p>
    <div class="checkpoint-options" id="chkOptionsBox">${optHtml}</div>
    <div class="chk-feedback" id="chkFeedback"></div>
  `;

  document.querySelectorAll("#chkOptionsBox .chk-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const selectedIdx = parseInt(e.currentTarget.dataset.opt);
      const allBtns = document.querySelectorAll("#chkOptionsBox .chk-btn");
      allBtns.forEach(b => b.disabled = true);

      const feedback = document.getElementById("chkFeedback");
      if (selectedIdx === cp.answer) {
        e.currentTarget.classList.add("correct");
        feedback.innerHTML = `<span style="color:var(--green);">✔ Correct! ${cp.explanation}</span>`;
      } else {
        e.currentTarget.classList.add("incorrect");
        allBtns[cp.answer].classList.add("correct");
        feedback.innerHTML = `<span style="color:#d9534f;">✘ Incorrect. ${cp.explanation}</span>`;
      }
    });
  });

  const currentIndex = syllabusData.findIndex(item => item.id === ch.id);
  const prevCh = syllabusData[currentIndex - 1];
  const nextCh = syllabusData[currentIndex + 1];

  const prevBtn = document.getElementById("tutPrevChapterBtn");
  const nextBtn = document.getElementById("tutNextChapterBtn");

  if (prevCh) {
    prevBtn.classList.remove("hidden");
    prevBtn.textContent = `← Ch ${prevCh.number}: ${prevCh.name.substring(0, 14)}...`;
    prevBtn.onclick = () => navigateTo({ view: "tutorial", chapterId: prevCh.id });
  } else {
    prevBtn.classList.add("hidden");
  }

  if (nextCh) {
    nextBtn.classList.remove("hidden");
    nextBtn.textContent = `Ch ${nextCh.number}: ${nextCh.name.substring(0, 14)}... →`;
    nextBtn.onclick = () => navigateTo({ view: "tutorial", chapterId: nextCh.id });
  } else {
    nextBtn.classList.add("hidden");
  }
}

function renderCurrentView() {
  Object.keys(views).forEach(key => {
    if (key === appState.view) {
      views[key].classList.remove("hidden");
      views[key].classList.add("active");
    } else {
      views[key].classList.add("hidden");
      views[key].classList.remove("active");
    }
  });

  if (appState.view === "home") {
    globalBackBtn.classList.add("hidden");
  } else {
    globalBackBtn.classList.remove("hidden");
  }

  const ch = getChapterById(appState.chapterId);
  const numFormatted = String(ch.number).padStart(2, "0");

  if (appState.view === "chapter") {
    document.getElementById("chapterBreadcrumb").textContent = `Home › ${ch.shortSubject} › Ch ${numFormatted}`;
    const subjectPill = document.getElementById("chapSubjectPill");
    subjectPill.textContent = ch.subject.toUpperCase();
    subjectPill.classList.toggle("blue", ch.part === "maths2");

    document.getElementById("chapNumTag").textContent = `Chapter ${numFormatted}`;
    document.getElementById("chapPageTitle").textContent = ch.name;
    document.getElementById("chapPageDesc").textContent = `Standard X Maharashtra State Board · ${ch.shortSubject}`;
  }

  if (appState.view === "tutorial") {
    renderTutorialContent();
  }

  if (appState.view === "practice") {
    document.getElementById("pracBreadcrumb").textContent = `Home › Ch ${numFormatted}: ${ch.name} › Practice`;
    const pill = document.getElementById("pracSubjectPill");
    pill.textContent = ch.subject.toUpperCase();
    pill.classList.toggle("blue", ch.part === "maths2");
    document.getElementById("pracChapterTitle").textContent = `Question Practice: ${ch.name}`;
  }

  if (appState.view === "arena") {
    updateTestArenaSummary();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function navigateTo(newState, pushToHistory = true) {
  Object.assign(appState, newState);
  renderCurrentView();

  if (pushToHistory) {
    const hash = buildHashFromState(appState);
    history.pushState({ ...appState }, "", hash);
  }
}

function buildHashFromState(state) {
  if (state.view === "home") return "#home";
  if (state.view === "chapter") return `#chapter/${state.chapterId}`;
  if (state.view === "tutorial") return `#tutorial/${state.chapterId}`;
  if (state.view === "practice") return `#practice/${state.chapterId}`;
  if (state.view === "arena") {
    return state.arenaScope === "chapter"
      ? `#arena/chapter/${state.arenaChapterId}`
      : `#arena/${state.arenaScope}`;
  }
  return "#home";
}

function parseHashToState(hash) {
  const clean = (hash || "").replace(/^#/, "");
  if (!clean || clean === "home") return { view: "home" };
  const parts = clean.split("/");
  if (parts[0] === "chapter" && parts[1]) return { view: "chapter", chapterId: getChapterById(parts[1]).id };
  if (parts[0] === "tutorial" && parts[1]) return { view: "tutorial", chapterId: getChapterById(parts[1]).id };
  if (parts[0] === "practice" && parts[1]) return { view: "practice", chapterId: getChapterById(parts[1]).id };
  if (parts[0] === "arena") {
    const scope = parts[1] || "chapter";
    const chId = parts[2] ? getChapterById(parts[2]).id : appState.arenaChapterId;
    return { view: "arena", arenaScope: ["chapter", "part1", "part2", "full"].includes(scope) ? scope : "chapter", arenaChapterId: chId };
  }
  return { view: "home" };
}

function handleBackNavigation() {
  if (chapterDialog.open) { chapterDialog.close(); return; }
  if (infoDialog.open) { infoDialog.close(); return; }

  if (appState.view === "tutorial" || appState.view === "practice") {
    navigateTo({ view: "chapter", chapterId: appState.chapterId });
  } else if (appState.view === "chapter" || appState.view === "arena") {
    navigateTo({ view: "home" });
  }
}

window.addEventListener("popstate", event => {
  if (chapterDialog.open) chapterDialog.close();
  if (infoDialog.open) infoDialog.close();

  if (event.state && event.state.view) {
    Object.assign(appState, event.state);
    renderCurrentView();
  } else {
    const parsed = parseHashToState(window.location.hash);
    Object.assign(appState, parsed);
    renderCurrentView();
  }
});

function updateTestArenaSummary() {
  const scopeButtons = document.querySelectorAll("#testScopeGroup .scope-card");
  scopeButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.scope === appState.arenaScope);
  });

  const chapterPickerBox = document.getElementById("chapterPickerBox");
  const chapterSelect = document.getElementById("arenaChapterSelect");
  chapterSelect.value = appState.arenaChapterId;

  const summaryTitle = document.getElementById("summaryTitle");
  const summaryMeta = document.getElementById("summaryMeta");

  if (appState.arenaScope === "chapter") {
    chapterPickerBox.classList.remove("hidden");
    const ch = getChapterById(appState.arenaChapterId);
    summaryTitle.textContent = `Chapter ${String(ch.number).padStart(2, "0")}: ${ch.name}`;
    summaryMeta.textContent = `Scope: Single Chapter (${ch.shortSubject}) · Difficulty: ${appState.arenaDifficulty}`;
  } else if (appState.arenaScope === "part1") {
    chapterPickerBox.classList.add("hidden");
    summaryTitle.textContent = "Mathematics Part I — Complete Algebra Test";
    summaryMeta.textContent = `Scope: All 6 Algebra Chapters · Difficulty: ${appState.arenaDifficulty}`;
  } else if (appState.arenaScope === "part2") {
    chapterPickerBox.classList.add("hidden");
    summaryTitle.textContent = "Mathematics Part II — Complete Geometry Test";
    summaryMeta.textContent = `Scope: All 7 Geometry Chapters · Difficulty: ${appState.arenaDifficulty}`;
  } else {
    chapterPickerBox.classList.add("hidden");
    summaryTitle.textContent = "Full Syllabus — Standard X Mathematics";
    summaryMeta.textContent = `Scope: All 13 Chapters (Part I + Part II) · Difficulty: ${appState.arenaDifficulty}`;
  }
}

function showInfo(title, text, eyebrow = "MATHS ARENA") {
  if (chapterDialog.open) chapterDialog.close();
  document.getElementById("infoEyebrow").textContent = eyebrow;
  document.getElementById("infoTitle").textContent = title;
  document.getElementById("infoText").textContent = text;
  infoDialog.showModal();
}

function bindEvents() {
  globalBackBtn.addEventListener("click", handleBackNavigation);
  document.getElementById("brandHomeTrigger").addEventListener("click", () => {
    if (appState.view !== "home") navigateTo({ view: "home" });
  });

  document.getElementById("closeDialog").onclick = () => chapterDialog.close();
  document.getElementById("openChapterPageBtn").onclick = () => {
    chapterDialog.close();
    if (dialogSelectedChapter) navigateTo({ view: "chapter", chapterId: dialogSelectedChapter.id });
  };
  document.getElementById("tutorialBtn").onclick = () => {
    chapterDialog.close();
    if (dialogSelectedChapter) navigateTo({ view: "tutorial", chapterId: dialogSelectedChapter.id });
  };
  document.getElementById("practiceBtn").onclick = () => {
    chapterDialog.close();
    if (dialogSelectedChapter) navigateTo({ view: "practice", chapterId: dialogSelectedChapter.id });
  };

  document.getElementById("goToTutorialBtn").onclick = () => navigateTo({ view: "tutorial", chapterId: appState.chapterId });
  document.getElementById("goToPracticeBtn").onclick = () => navigateTo({ view: "practice", chapterId: appState.chapterId });
  document.getElementById("chapDirectTestBtn").onclick = () => navigateTo({ view: "arena", arenaScope: "chapter", arenaChapterId: appState.chapterId });

  document.getElementById("tutBackChapterBtn").onclick = () => navigateTo({ view: "chapter", chapterId: appState.chapterId });
  document.getElementById("tutCompleteAndPracticeBtn").onclick = () => navigateTo({ view: "practice", chapterId: appState.chapterId });

  document.getElementById("pracSwitchTutorialBtn").onclick = () => navigateTo({ view: "tutorial", chapterId: appState.chapterId });
  document.getElementById("pracBackChapterBtn").onclick = () => navigateTo({ view: "chapter", chapterId: appState.chapterId });

  document.getElementById("openTestArenaBtn").onclick = () => navigateTo({ view: "arena" });

  document.querySelectorAll("#testScopeGroup .scope-card").forEach(card => {
    card.addEventListener("click", () => {
      appState.arenaScope = card.dataset.scope;
      updateTestArenaSummary();
      history.replaceState({ ...appState }, "", buildHashFromState(appState));
    });
  });

  document.getElementById("arenaChapterSelect").addEventListener("change", e => {
    appState.arenaChapterId = e.target.value;
    updateTestArenaSummary();
    history.replaceState({ ...appState }, "", buildHashFromState(appState));
  });

  document.querySelectorAll("#arenaDifficultyGroup .select-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#arenaDifficultyGroup .select-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      appState.arenaDifficulty = btn.dataset.diff;
      updateTestArenaSummary();
    });
  });

  document.getElementById("confirmTestSelectionBtn").onclick = () => {
    const title = document.getElementById("summaryTitle").textContent;
    const meta = document.getElementById("summaryMeta").textContent;
    showInfo("Test Configuration Ready", `${title}\n(${meta})\n\nStage 2 & 3 navigation are complete.`, "TEST ARENA · STAGE 3");
  };

  document.getElementById("closeInfo").onclick = () => infoDialog.close();
}

renderHomeChapters();
populateArenaChapterDropdown();
bindEvents();

const initialState = parseHashToState(window.location.hash);
Object.assign(appState, initialState);
history.replaceState({ ...appState }, "", buildHashFromState(appState));
renderCurrentView();