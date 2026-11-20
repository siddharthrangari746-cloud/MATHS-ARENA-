// Maharashtra State Board Standard X Syllabus Data (13 Chapters)
const syllabusData = [
  // Mathematics Part I — Algebra (6 chapters)
  { id: "m1-1", part: "maths1", number: 1, subject: "Mathematics Part I · Algebra", shortSubject: "Part I (Algebra)", name: "Linear Equations in Two Variables" },
  { id: "m1-2", part: "maths1", number: 2, subject: "Mathematics Part I · Algebra", shortSubject: "Part I (Algebra)", name: "Quadratic Equations" },
  { id: "m1-3", part: "maths1", number: 3, subject: "Mathematics Part I · Algebra", shortSubject: "Part I (Algebra)", name: "Arithmetic Progression" },
  { id: "m1-4", part: "maths1", number: 4, subject: "Mathematics Part I · Algebra", shortSubject: "Part I (Algebra)", name: "Financial Planning" },
  { id: "m1-5", part: "maths1", number: 5, subject: "Mathematics Part I · Algebra", shortSubject: "Part I (Algebra)", name: "Probability" },
  { id: "m1-6", part: "maths1", number: 6, subject: "Mathematics Part I · Algebra", shortSubject: "Part I (Algebra)", name: "Statistics" },

  // Mathematics Part II — Geometry (7 chapters)
  { id: "m2-1", part: "maths2", number: 1, subject: "Mathematics Part II · Geometry", shortSubject: "Part II (Geometry)", name: "Similarity" },
  { id: "m2-2", part: "maths2", number: 2, subject: "Mathematics Part II · Geometry", shortSubject: "Part II (Geometry)", name: "Pythagoras Theorem" },
  { id: "m2-3", part: "maths2", number: 3, subject: "Mathematics Part II · Geometry", shortSubject: "Part II (Geometry)", name: "Circle" },
  { id: "m2-4", part: "maths2", number: 4, subject: "Mathematics Part II · Geometry", shortSubject: "Part II (Geometry)", name: "Geometric Constructions" },
  { id: "m2-5", part: "maths2", number: 5, subject: "Mathematics Part II · Geometry", shortSubject: "Part II (Geometry)", name: "Co-ordinate Geometry" },
  { id: "m2-6", part: "maths2", number: 6, subject: "Mathematics Part II · Geometry", shortSubject: "Part II (Geometry)", name: "Trigonometry" },
  { id: "m2-7", part: "maths2", number: 7, subject: "Mathematics Part II · Geometry", shortSubject: "Part II (Geometry)", name: "Mensuration" }
];

// Application Navigation & Selection State
const appState = {
  view: "home", // 'home' | 'chapter' | 'tutorial' | 'practice' | 'arena'
  chapterId: "m1-1",
  practiceDifficulty: "Easy",
  arenaScope: "chapter", // 'chapter' | 'part1' | 'part2' | 'full'
  arenaChapterId: "m1-1",
  arenaDifficulty: "Mixed (Board Pattern)"
};

// DOM References
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

// Render Stage 1 Home Screen Chapter Lists
function renderHomeChapters() {
  const m1List = document.getElementById("maths1List");
  const m2List = document.getElementById("maths2List");
  if (!m1List || !m2List) return;
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

// Populate Test Arena Chapter Dropdown (All 13 Chapters grouped by Part I & Part II)
function populateArenaChapterDropdown() {
  const select = document.getElementById("arenaChapterSelect");
  if (!select) return;
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

// Update UI Contents for Active View
function renderCurrentView() {
  Object.keys(views).forEach(key => {
    if (!views[key]) return;
    if (key === appState.view) {
      views[key].classList.remove("hidden");
      views[key].classList.add("active");
    } else {
      views[key].classList.add("hidden");
      views[key].classList.remove("active");
    }
  });

  // Show Universal Back Button on all sub-views; hide on Home
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

    // Sync Stage 3 Tutorial Progress Bar on Chapter Hub
    if (typeof updateChapterProgressUI === "function") {
      updateChapterProgressUI(appState.chapterId);
    }
  }

  if (appState.view === "tutorial") {
    // Launch Stage 3 Interactive Tutorial Engine for Selected Chapter
    if (typeof initTutorial === "function") {
      initTutorial(appState.chapterId);
    }
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

// Navigation with Browser History Support (pushState / popstate)
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
  if (!clean || clean === "home") {
    return { view: "home" };
  }
  const parts = clean.split("/");
  if (parts[0] === "chapter" && parts[1]) {
    return { view: "chapter", chapterId: getChapterById(parts[1]).id };
  }
  if (parts[0] === "tutorial" && parts[1]) {
    return { view: "tutorial", chapterId: getChapterById(parts[1]).id };
  }
  if (parts[0] === "practice" && parts[1]) {
    return { view: "practice", chapterId: getChapterById(parts[1]).id };
  }
  if (parts[0] === "arena") {
    const scope = parts[1] || "chapter";
    const chId = parts[2] ? getChapterById(parts[2]).id : appState.arenaChapterId;
    return {
      view: "arena",
      arenaScope: ["chapter", "part1", "part2", "full"].includes(scope) ? scope : "chapter",
      arenaChapterId: chId
    };
  }
  return { view: "home" };
}

// Universal Back Navigation (Matches logical hierarchy & browser history)
function handleBackNavigation() {
  if (chapterDialog.open) {
    chapterDialog.close();
    return;
  }
  if (infoDialog.open) {
    infoDialog.close();
    return;
  }

  if (appState.view === "tutorial" || appState.view === "practice") {
    navigateTo({ view: "chapter", chapterId: appState.chapterId });
  } else if (appState.view === "chapter" || appState.view === "arena") {
    navigateTo({ view: "home" });
  }
}

// Browser Back / Forward Button Listener
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

// Test Arena Selection Logic
function updateTestArenaSummary() {
  const scopeButtons = document.querySelectorAll("#testScopeGroup .scope-card");
  scopeButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.scope === appState.arenaScope);
  });

  const chapterPickerBox = document.getElementById("chapterPickerBox");
  const chapterSelect = document.getElementById("arenaChapterSelect");
  if (chapterSelect) chapterSelect.value = appState.arenaChapterId;

  const summaryTitle = document.getElementById("summaryTitle");
  const summaryMeta = document.getElementById("summaryMeta");
  if (!summaryTitle || !summaryMeta) return;

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

// Helper for Info Modal
function showInfo(title, text, eyebrow = "MATHS ARENA") {
  if (chapterDialog.open) chapterDialog.close();
  document.getElementById("infoEyebrow").textContent = eyebrow;
  document.getElementById("infoTitle").textContent = title;
  document.getElementById("infoText").textContent = text;
  infoDialog.showModal();
}

// Event Listeners Setup
function bindEvents() {
  // Topbar Back & Brand Home
  globalBackBtn.addEventListener("click", handleBackNavigation);
  document.getElementById("brandHomeTrigger").addEventListener("click", () => {
    if (appState.view !== "home") navigateTo({ view: "home" });
  });
  document.getElementById("brandHomeTrigger").addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (appState.view !== "home") navigateTo({ view: "home" });
    }
  });

  // Chapter Selection Dialog Actions
  document.getElementById("closeDialog").onclick = () => chapterDialog.close();
  document.getElementById("openChapterPageBtn").onclick = () => {
    chapterDialog.close();
    if (dialogSelectedChapter) {
      navigateTo({ view: "chapter", chapterId: dialogSelectedChapter.id });
    }
  };
  document.getElementById("tutorialBtn").onclick = () => {
    chapterDialog.close();
    if (dialogSelectedChapter) {
      navigateTo({ view: "tutorial", chapterId: dialogSelectedChapter.id });
    }
  };
  document.getElementById("practiceBtn").onclick = () => {
    chapterDialog.close();
    if (dialogSelectedChapter) {
      navigateTo({ view: "practice", chapterId: dialogSelectedChapter.id });
    }
  };

  // Dedicated Chapter View Actions
  document.getElementById("goToTutorialBtn").onclick = () => {
    navigateTo({ view: "tutorial", chapterId: appState.chapterId });
  };
  document.getElementById("goToPracticeBtn").onclick = () => {
    navigateTo({ view: "practice", chapterId: appState.chapterId });
  };
  document.getElementById("chapDirectTestBtn").onclick = () => {
    navigateTo({
      view: "arena",
      arenaScope: "chapter",
      arenaChapterId: appState.chapterId
    });
  };

  // Practice Entry Screen Actions & Preview Difficulty Pills
  document.getElementById("pracSwitchTutorialBtn").onclick = () => {
    navigateTo({ view: "tutorial", chapterId: appState.chapterId });
  };
  document.getElementById("pracBackChapterBtn").onclick = () => {
    navigateTo({ view: "chapter", chapterId: appState.chapterId });
  };

  const diffDescriptions = {
    Easy: "Basic formula & direct substitution questions.",
    Medium: "2–3 step Maharashtra Board textbook exercises.",
    Hard: "HOTS (Higher Order Thinking Skills) & multi-concept problems.",
    Mixed: "Balanced mix of Easy, Medium, and Hard questions."
  };

  document.querySelectorAll("#pracDifficultyGroup .select-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#pracDifficultyGroup .select-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      appState.practiceDifficulty = btn.dataset.diff;
      document.getElementById("pracDiffHint").innerHTML =
        `Selected level: <strong>${appState.practiceDifficulty}</strong> — ${diffDescriptions[appState.practiceDifficulty]}`;
    });
  });

  // Home Test Arena Entry & Arena Selection Controls
  document.getElementById("openTestArenaBtn").onclick = () => {
    navigateTo({ view: "arena" });
  };

  document.querySelectorAll("#testScopeGroup .scope-card").forEach(card => {
    card.addEventListener("click", () => {
      appState.arenaScope = card.dataset.scope;
      updateTestArenaSummary();
      history.replaceState({ ...appState }, "", buildHashFromState(appState));
    });
  });

  const arenaSelect = document.getElementById("arenaChapterSelect");
  if (arenaSelect) {
    arenaSelect.addEventListener("change", e => {
      appState.arenaChapterId = e.target.value;
      updateTestArenaSummary();
      history.replaceState({ ...appState }, "", buildHashFromState(appState));
    });
  }

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
    showInfo(
      "Test Configuration Ready",
      `${title}
(${meta})

Stage 3 interactive tutorials are active for all 13 chapters. The live timed test engine and scorecard will be built in Stage 7.`,
      "TEST ARENA · STAGE 3"
    );
  };

  // Preserved Stage 1 Placeholder Dialogs
  document.getElementById("closeInfo").onclick = () => infoDialog.close();
  document.getElementById("settingsBtn").onclick = () =>
    showInfo("Settings", "Sound, animations and preferences will be added in Stage 9 after the core learning and practice screens.");
  document.getElementById("settingsCard").onclick = () =>
    showInfo("Settings", "Sound, animations and preferences will be added in Stage 9 after the core learning and practice screens.");
  document.getElementById("analysisBtn").onclick = () =>
    showInfo("My Analysis", "Chapter-wise accuracy, mistakes, weak topics and improvement tracking will be added in Stage 8 once practice data is available.");
}

// Initialize Application
renderHomeChapters();
populateArenaChapterDropdown();
bindEvents();

const initialState = parseHashToState(window.location.hash);
Object.assign(appState, initialState);
history.replaceState({ ...appState }, "", buildHashFromState(appState));
renderCurrentView();
