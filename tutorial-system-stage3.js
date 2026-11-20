// Stage 3 Interactive Tutorial System & Persistent LocalStorage Progress Tracker

const TUTORIAL_STORAGE_KEY = "maths_arena_tutorial_progress_v1";

// Safely read progress store from localStorage
function getTutorialProgress() {
  try {
    const raw = localStorage.getItem(TUTORIAL_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (e) {
    console.warn("Maths Arena: Corrupted tutorial storage reset safely.", e);
    return {};
  }
}

// Safely write progress store to localStorage
function saveTutorialProgress(progressObj) {
  try {
    localStorage.setItem(TUTORIAL_STORAGE_KEY, JSON.stringify(progressObj));
  } catch (e) {
    console.warn("Maths Arena: Unable to save progress to localStorage.", e);
  }
}

// Active Tutorial Session State
const tutorialState = {
  chapterId: "m1-1",
  currentLessonIndex: 0
};

// Initialize and render tutorial for a specific chapter ID (m1-1 to m2-7)
function initTutorial(chapterId) {
  tutorialState.chapterId = chapterId;
  const ch = typeof getChapterById === "function" ? getChapterById(chapterId) : { name: chapterId, number: 1, subject: "Mathematics", part: "maths1" };
  const tutData = typeof chapterTutorials !== "undefined" ? chapterTutorials[chapterId] : null;

  if (!tutData || !Array.isArray(tutData.lessons) || tutData.lessons.length === 0) {
    const container = document.getElementById("lessonContainer");
    if (container) {
      container.innerHTML = `<div class="lesson-card"><p>Tutorial content for ${ch.name} is unavailable.</p></div>`;
    }
    return;
  }

  // Restore last opened lesson index if saved in localStorage
  const progress = getTutorialProgress();
  if (progress[chapterId] && typeof progress[chapterId].lastLessonIndex === "number") {
    const savedIdx = progress[chapterId].lastLessonIndex;
    tutorialState.currentLessonIndex = savedIdx >= 0 && savedIdx < tutData.lessons.length ? savedIdx : 0;
  } else {
    tutorialState.currentLessonIndex = 0;
  }

  renderActiveLesson();
  updateChapterProgressUI(chapterId);
}

// Render the active lesson card, dual explanations, formulas, solved example & checkpoint
function renderActiveLesson() {
  const ch = getChapterById(tutorialState.chapterId);
  const tutData = chapterTutorials[tutorialState.chapterId];
  const lesson = tutData.lessons[tutorialState.currentLessonIndex];
  const totalLessons = tutData.lessons.length;

  const progress = getTutorialProgress();
  const chapterProg = progress[tutorialState.chapterId] || { completedLessons: [], lastLessonIndex: 0, checkpointScores: {} };
  const isLessonCompleted = Array.isArray(chapterProg.completedLessons) && chapterProg.completedLessons.includes(tutorialState.currentLessonIndex);

  // Update Header & Breadcrumb
  const numFormatted = String(ch.number).padStart(2, "0");
  document.getElementById("tutBreadcrumb").textContent = `Home › Ch ${numFormatted}: ${ch.name} › Tutorial`;

  const pill = document.getElementById("tutSubjectPill");
  pill.textContent = ch.subject.toUpperCase();
  pill.classList.toggle("blue", ch.part === "maths2");

  document.getElementById("tutChapterTitle").textContent = `Tutorial: ${ch.name}`;
  document.getElementById("tutLessonIndicator").textContent = `Lesson ${tutorialState.currentLessonIndex + 1} of ${totalLessons}`;

  // Update Mini Progress Bar inside Tutorial Workspace
  const completedCount = Array.isArray(chapterProg.completedLessons) ? chapterProg.completedLessons.length : 0;
  const pct = Math.round((completedCount / totalLessons) * 100);
  const tutFill = document.getElementById("tutProgressFill");
  const tutLabel = document.getElementById("tutProgressLabel");
  if (tutFill) tutFill.style.width = `${pct}%`;
  if (tutLabel) tutLabel.textContent = `${pct}% Chapter Completed (${completedCount}/${totalLessons} lessons)`;

  // Populate Lesson Jump Dropdown
  const jumpSelect = document.getElementById("lessonJumpSelect");
  jumpSelect.innerHTML = "";
  tutData.lessons.forEach((l, idx) => {
    const doneMark = Array.isArray(chapterProg.completedLessons) && chapterProg.completedLessons.includes(idx) ? "✓ " : "";
    const opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = `${doneMark}Lesson ${idx + 1}: ${l.title}`;
    if (idx === tutorialState.currentLessonIndex) opt.selected = true;
    jumpSelect.appendChild(opt);
  });

  // Render Lesson Card
  const container = document.getElementById("lessonContainer");
  container.innerHTML = "";

  const card = document.createElement("div");
  card.className = "lesson-card";

  // Title Row
  const titleRow = document.createElement("div");
  titleRow.className = "lesson-title-row";
  const h3 = document.createElement("h3");
  h3.className = "lesson-title-heading";
  h3.textContent = `${tutorialState.currentLessonIndex + 1}. ${lesson.title}`;
  titleRow.appendChild(h3);

  if (isLessonCompleted) {
    const badge = document.createElement("span");
    badge.className = "lesson-completed-pill";
    badge.textContent = "✓ Completed";
    titleRow.appendChild(badge);
  }
  card.appendChild(titleRow);

  // B. Learning Objectives
  const objBox = document.createElement("div");
  objBox.className = "outline-box";
  const objH4 = document.createElement("h4");
  objH4.textContent = "🎯 Learning Objectives";
  const objUl = document.createElement("ul");
  objUl.className = "clean-list";
  lesson.objectives.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    objUl.appendChild(li);
  });
  objBox.appendChild(objH4);
  objBox.appendChild(objUl);
  card.appendChild(objBox);

  // C. Level 1 — Simple Hinglish Explanation
  const badge1 = document.createElement("div");
  badge1.className = "level-badge hinglish";
  badge1.textContent = "Level 1 · Simple Hinglish Concept Guide";
  card.appendChild(badge1);

  const block1 = document.createElement("div");
  block1.className = "explanation-block";
  const p1 = document.createElement("p");
  p1.textContent = lesson.hinglish;
  block1.appendChild(p1);
  card.appendChild(block1);

  // D. Level 2 — Board Exam Ready Notes & Definitions
  const badge2 = document.createElement("div");
  badge2.className = "level-badge board";
  badge2.textContent = "Level 2 · Board Exam Ready Notes & Definitions";
  card.appendChild(badge2);

  const block2 = document.createElement("div");
  block2.className = "explanation-block board-note";
  const p2 = document.createElement("p");
  p2.style.whiteSpace = "pre-line";
  p2.textContent = lesson.boardNotes;
  block2.appendChild(p2);
  card.appendChild(block2);

  // E & F. Formula & Theorem Box
  if (lesson.formulaBox) {
    const fBox = document.createElement("div");
    fBox.className = "formula-box";
    const fTitle = document.createElement("strong");
    fTitle.textContent = "Important Formulae, Theorems & Properties";
    const fBody = document.createElement("div");
    fBody.style.whiteSpace = "pre-line";
    fBody.textContent = lesson.formulaBox;
    fBox.appendChild(fTitle);
    fBox.appendChild(fBody);
    card.appendChild(fBox);
  }

  // G. Solved Example
  if (lesson.solvedExample) {
    const exBox = document.createElement("div");
    exBox.className = "solved-example-box";
    const exH5 = document.createElement("h5");
    exH5.textContent = `📝 ${lesson.solvedExample.title}`;
    const exProb = document.createElement("p");
    exProb.className = "solved-problem-text";
    exProb.innerHTML = `<strong>Problem:</strong> `;
    exProb.appendChild(document.createTextNode(lesson.solvedExample.problem));

    const exOl = document.createElement("ol");
    exOl.className = "solved-steps";
    lesson.solvedExample.steps.forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      exOl.appendChild(li);
    });

    exBox.appendChild(exH5);
    exBox.appendChild(exProb);
    exBox.appendChild(exOl);
    card.appendChild(exBox);
  }

  // H & I. Exam Tips & Common Mistakes
  const grid = document.createElement("div");
  grid.className = "tips-mistakes-grid";

  const tipBox = document.createElement("div");
  tipBox.className = "tip-box";
  const tipH6 = document.createElement("h6");
  tipH6.textContent = "💡 Board Exam Tips";
  const tipUl = document.createElement("ul");
  lesson.examTips.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    tipUl.appendChild(li);
  });
  tipBox.appendChild(tipH6);
  tipBox.appendChild(tipUl);

  const misBox = document.createElement("div");
  misBox.className = "mistake-box";
  const misH6 = document.createElement("h6");
  misH6.textContent = "⚠️ Common Mistakes to Avoid";
  const misUl = document.createElement("ul");
  lesson.commonMistakes.forEach(m => {
    const li = document.createElement("li");
    li.textContent = m;
    misUl.appendChild(li);
  });
  misBox.appendChild(misH6);
  misBox.appendChild(misUl);

  grid.appendChild(tipBox);
  grid.appendChild(misBox);
  card.appendChild(grid);

  // J. Interactive Checkpoint System
  if (lesson.checkpoint) {
    const cp = lesson.checkpoint;
    const cpBox = document.createElement("div");
    cpBox.className = "checkpoint-box";

    const cpHead = document.createElement("div");
    cpHead.className = "checkpoint-header";
    cpHead.textContent = "⚡ Interactive Checkpoint";

    const cpQ = document.createElement("p");
    cpQ.className = "checkpoint-question";
    cpQ.textContent = cp.question;

    const cpOpts = document.createElement("div");
    cpOpts.className = "checkpoint-options";

    cp.options.forEach((optText, oIdx) => {
      const label = document.createElement("label");
      label.className = "checkpoint-option";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "cpOption";
      radio.value = String(oIdx);

      const span = document.createElement("span");
      span.textContent = optText;

      label.appendChild(radio);
      label.appendChild(span);
      cpOpts.appendChild(label);
    });

    const actionsDiv = document.createElement("div");
    actionsDiv.className = "checkpoint-actions";

    const submitBtn = document.createElement("button");
    submitBtn.type = "button";
    submitBtn.className = "primary-btn";
    submitBtn.id = "submitCheckpointBtn";
    submitBtn.textContent = "Submit Answer";

    const continueBtn = document.createElement("button");
    continueBtn.type = "button";
    continueBtn.className = "secondary-btn hidden";
    continueBtn.id = "cpContinueBtn";
    continueBtn.textContent = tutorialState.currentLessonIndex < totalLessons - 1
      ? "Complete & Next Lesson →"
      : "Complete Chapter ✓";

    actionsDiv.appendChild(submitBtn);
    actionsDiv.appendChild(continueBtn);

    const feedbackDiv = document.createElement("div");
    feedbackDiv.id = "cpFeedback";
    feedbackDiv.className = "checkpoint-feedback hidden";

    submitBtn.addEventListener("click", () => {
      evaluateCheckpoint(cp, submitBtn, continueBtn, feedbackDiv);
    });

    continueBtn.addEventListener("click", () => {
      markCurrentLessonComplete();
    });

    cpBox.appendChild(cpHead);
    cpBox.appendChild(cpQ);
    cpBox.appendChild(cpOpts);
    cpBox.appendChild(actionsDiv);
    cpBox.appendChild(feedbackDiv);
    card.appendChild(cpBox);
  }

  container.appendChild(card);

  // Persist last opened lesson index
  const updatedProgress = getTutorialProgress();
  if (!updatedProgress[tutorialState.chapterId]) {
    updatedProgress[tutorialState.chapterId] = { completedLessons: [], lastLessonIndex: 0 };
  }
  updatedProgress[tutorialState.chapterId].lastLessonIndex = tutorialState.currentLessonIndex;
  saveTutorialProgress(updatedProgress);

  // Update Navigation Button States
  const prevBtn = document.getElementById("prevLessonBtn");
  const nextBtn = document.getElementById("nextLessonBtn");
  const markBtn = document.getElementById("markCompleteBtn");

  prevBtn.disabled = tutorialState.currentLessonIndex === 0;
  const isLast = tutorialState.currentLessonIndex === totalLessons - 1;
  nextBtn.textContent = isLast ? "Finish →" : "Next →";

  if (markBtn) {
    markBtn.querySelector("span").textContent = isLast
      ? "Complete Chapter"
      : (isLessonCompleted ? "Completed · Next Lesson" : "Mark Complete & Next");
  }
}

// Evaluate Interactive Checkpoint Answer
function evaluateCheckpoint(cp, submitBtn, continueBtn, feedbackDiv) {
  const selected = document.querySelector('input[name="cpOption"]:checked');

  if (!selected) {
    feedbackDiv.className = "checkpoint-feedback error";
    feedbackDiv.textContent = "Please select an option before submitting.";
    feedbackDiv.classList.remove("hidden");
    return;
  }

  const userChoice = parseInt(selected.value, 10);
  feedbackDiv.classList.remove("hidden");

  const optionLabels = document.querySelectorAll(".checkpoint-option");
  optionLabels.forEach((label, idx) => {
    label.classList.remove("correct", "incorrect");
    if (idx === cp.correct) {
      label.classList.add("correct");
    } else if (idx === userChoice && userChoice !== cp.correct) {
      label.classList.add("incorrect");
    }
  });

  if (userChoice === cp.correct) {
    feedbackDiv.className = "checkpoint-feedback success";
    feedbackDiv.innerHTML = `<strong>✓ Correct!</strong> `;
    feedbackDiv.appendChild(document.createTextNode(cp.explanation));
  } else {
    feedbackDiv.className = "checkpoint-feedback error";
    feedbackDiv.innerHTML = `<strong>✗ Incorrect.</strong> Correct answer: <em>${cp.options[cp.correct]}</em>. `;
    feedbackDiv.appendChild(document.createTextNode(cp.explanation));
  }

  continueBtn.classList.remove("hidden");
}

// Mark current lesson as completed, save to localStorage, and advance
function markCurrentLessonComplete() {
  const progress = getTutorialProgress();
  if (!progress[tutorialState.chapterId]) {
    progress[tutorialState.chapterId] = { completedLessons: [], lastLessonIndex: 0 };
  }
  if (!Array.isArray(progress[tutorialState.chapterId].completedLessons)) {
    progress[tutorialState.chapterId].completedLessons = [];
  }

  if (!progress[tutorialState.chapterId].completedLessons.includes(tutorialState.currentLessonIndex)) {
    progress[tutorialState.chapterId].completedLessons.push(tutorialState.currentLessonIndex);
  }

  saveTutorialProgress(progress);
  updateChapterProgressUI(tutorialState.chapterId);

  const tutData = chapterTutorials[tutorialState.chapterId];
  if (tutorialState.currentLessonIndex < tutData.lessons.length - 1) {
    tutorialState.currentLessonIndex++;
    renderActiveLesson();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const ch = getChapterById(tutorialState.chapterId);
    if (typeof showInfo === "function") {
      showInfo(
        "Chapter Tutorial Completed! 🎉",
        `Great work! You have completed all ${tutData.lessons.length} lessons in "${ch.name}". You can now try Question Practice or test yourself in the Test Arena.`,
        "CHAPTER MASTERED"
      );
    }
    navigateTo({ view: "chapter", chapterId: tutorialState.chapterId });
  }
}

// Synchronize Chapter Hub Progress Bar with localStorage
function updateChapterProgressUI(chapterId) {
  const tutData = typeof chapterTutorials !== "undefined" ? chapterTutorials[chapterId] : null;
  if (!tutData || !Array.isArray(tutData.lessons)) return;

  const total = tutData.lessons.length;
  const progress = getTutorialProgress();
  const completedCount = progress[chapterId] && Array.isArray(progress[chapterId].completedLessons)
    ? progress[chapterId].completedLessons.length
    : 0;

  const percentage = Math.round((completedCount / total) * 100);

  const fillEl = document.getElementById("chapProgressFill");
  const textEl = document.getElementById("chapProgressText");
  const noteEl = document.getElementById("chapProgressNote");

  if (fillEl) fillEl.style.width = `${percentage}%`;
  if (textEl) {
    textEl.textContent = completedCount === 0
      ? `0% · Not started`
      : `${percentage}% · ${completedCount} of ${total} lessons completed`;
  }
  if (noteEl) {
    noteEl.textContent = percentage === 100
      ? "🌟 Mastered! All interactive tutorial lessons for this chapter are complete."
      : "Your lesson progress is saved automatically in this browser.";
  }
}

// Bind Stage 3 Tutorial UI Controls safely
function bindTutorialControls() {
  const prevBtn = document.getElementById("prevLessonBtn");
  const nextBtn = document.getElementById("nextLessonBtn");
  const jumpSelect = document.getElementById("lessonJumpSelect");
  const markBtn = document.getElementById("markCompleteBtn");
  const backChapBtn = document.getElementById("tutBackChapterBtn");
  const switchPracBtn = document.getElementById("tutSwitchPracticeBtn");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (tutorialState.currentLessonIndex > 0) {
        tutorialState.currentLessonIndex--;
        renderActiveLesson();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const tutData = chapterTutorials[tutorialState.chapterId];
      if (tutData && tutorialState.currentLessonIndex < tutData.lessons.length - 1) {
        tutorialState.currentLessonIndex++;
        renderActiveLesson();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigateTo({ view: "chapter", chapterId: tutorialState.chapterId });
      }
    });
  }

  if (jumpSelect) {
    jumpSelect.addEventListener("change", e => {
      tutorialState.currentLessonIndex = parseInt(e.target.value, 10) || 0;
      renderActiveLesson();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (markBtn) {
    markBtn.addEventListener("click", () => {
      markCurrentLessonComplete();
    });
  }

  if (backChapBtn) {
    backChapBtn.addEventListener("click", () => {
      navigateTo({ view: "chapter", chapterId: tutorialState.chapterId });
    });
  }

  if (switchPracBtn) {
    switchPracBtn.addEventListener("click", () => {
      navigateTo({ view: "practice", chapterId: tutorialState.chapterId });
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bindTutorialControls);
} else {
  bindTutorialControls();
}
