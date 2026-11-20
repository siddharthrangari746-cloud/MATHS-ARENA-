// Stage 3 Interactive Tutorial System & Progress Tracker

const TUTORIAL_STORAGE_KEY = "maths_arena_tutorial_progress_v1";

// Get progress store from localStorage
function getTutorialProgress() {
  try {
    const data = localStorage.getItem(TUTORIAL_STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error("Error reading localStorage", e);
    return {};
  }
}

// Save progress to localStorage
function saveTutorialProgress(progressObj) {
  try {
    localStorage.setItem(TUTORIAL_STORAGE_KEY, JSON.stringify(progressObj));
  } catch (e) {
    console.error("Error writing localStorage", e);
  }
}

// State tracker for active tutorial session
const tutorialState = {
  chapterId: "m1-1",
  currentLessonIndex: 0
};

// Open and render tutorial for given chapter
function initTutorial(chapterId) {
  tutorialState.chapterId = chapterId;
  const ch = getChapterById(chapterId);
  const tutData = chapterTutorials[chapterId];

  if (!tutData || !tutData.lessons || tutData.lessons.length === 0) {
    showInfo("Tutorial Coming Soon", `Detailed interactive lessons for ${ch.name} are currently being finalized.`);
    return;
  }

  // Restore last opened lesson index if available
  const progress = getTutorialProgress();
  if (progress[chapterId] && typeof progress[chapterId].lastLessonIndex === "number") {
    tutorialState.currentLessonIndex = Math.min(progress[chapterId].lastLessonIndex, tutData.lessons.length - 1);
  } else {
    tutorialState.currentLessonIndex = 0;
  }

  renderActiveLesson();
  updateChapterProgressUI(chapterId);
}

// Render active lesson content into #lessonContainer
function renderActiveLesson() {
  const ch = getChapterById(tutorialState.chapterId);
  const tutData = chapterTutorials[tutorialState.chapterId];
  const lesson = tutData.lessons[tutorialState.currentLessonIndex];
  const totalLessons = tutData.lessons.length;

  // Update header indicators
  document.getElementById("tutBreadcrumb").textContent = `Home › Ch ${String(ch.number).padStart(2, "0")}: ${ch.name} › Tutorial`;
  const pill = document.getElementById("tutSubjectPill");
  pill.textContent = ch.subject.toUpperCase();
  pill.classList.toggle("blue", ch.part === "maths2");
  document.getElementById("tutChapterTitle").textContent = `Tutorial: ${ch.name}`;
  document.getElementById("tutLessonIndicator").textContent = `Lesson ${tutorialState.currentLessonIndex + 1} of ${totalLessons}`;

  // Populate jump select dropdown
  const jumpSelect = document.getElementById("lessonJumpSelect");
  jumpSelect.innerHTML = "";
  tutData.lessons.forEach((l, idx) => {
    const opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = `Lesson ${idx + 1}: ${l.title}`;
    if (idx === tutorialState.currentLessonIndex) opt.selected = true;
    jumpSelect.appendChild(opt);
  });

  // Build Lesson HTML structure
  const container = document.getElementById("lessonContainer");
  
  let html = `
    <div class="lesson-card">
      <h3 class="lesson-title-heading">${tutorialState.currentLessonIndex + 1}. ${lesson.title}</h3>
      
      <!-- Learning Objectives -->
      <div class="outline-box">
        <h4>🎯 Learning Objectives:</h4>
        <ul class="clean-list">
          ${lesson.objectives.map(obj => `<li>${obj}</li>`).join("")}
        </ul>
      </div>

      <!-- LEVEL 1: SIMPLE HINGLISH -->
      <div class="level-badge hinglish">Level 1 · Simple Hinglish Concept Guide</div>
      <div class="explanation-block">
        <p>${lesson.hinglish}</p>
      </div>

      <!-- LEVEL 2: BOARD EXAM READY NOTES -->
      <div class="level-badge board">Level 2 · Board Exam Ready Notes</div>
      <div class="explanation-block board-note">
        <p><strong>Textbook Definition & Notes:</strong> ${lesson.boardNotes}</p>
      </div>
  `;

  // Formula Box if available
  if (lesson.formulaBox) {
    html += `
      <div class="formula-box">
        <strong>Important Formulae & Rules</strong>
        <pre style="margin:0;font-family:inherit;white-space:pre-wrap;">${lesson.formulaBox}</pre>
      </div>
    `;
  }

  // Solved Example
  if (lesson.solvedExample) {
    html += `
      <div class="solved-example-box">
        <h5>📝 ${lesson.solvedExample.title}</h5>
        <p><strong>Problem:</strong> ${lesson.solvedExample.problem}</p>
        <ol class="solved-steps">
          ${lesson.solvedExample.steps.map(s => `<li>${s}</li>`).join("")}
        </ol>
      </div>
    `;
  }

  // Common Mistakes & Exam Tips Grid
  html += `
    <div class="tips-mistakes-grid">
      <div class="tip-box">
        <h6>💡 Exam Tips</h6>
        <ul>
          ${lesson.examTips.map(t => `<li>${t}</li>`).join("")}
        </ul>
      </div>
      <div class="mistake-box">
        <h6>⚠️ Common Mistakes</h6>
        <ul>
          ${lesson.commonMistakes.map(m => `<li>${m}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;

  // Interactive Checkpoint
  if (lesson.checkpoint) {
    const cp = lesson.checkpoint;
    html += `
      <div class="checkpoint-box" id="checkpointBox">
        <div class="checkpoint-header">
          <span>⚡ Interactive Checkpoint</span>
        </div>
        <p class="checkpoint-question">${cp.question}</p>
        <div class="checkpoint-options" id="cpOptions">
          ${cp.options.map((opt, oIdx) => `
            <label class="checkpoint-option">
              <input type="radio" name="cpOption" value="${oIdx}">
              <span>${opt}</span>
            </label>
          `).join("")}
        </div>
        <button class="primary-btn" id="submitCheckpointBtn" type="button">Submit Answer</button>
        <div id="cpFeedback" class="checkpoint-feedback hidden"></div>
      </div>
    `;
  }

  html += `</div>`;
  container.innerHTML = html;

  // Bind checkpoint submit event if checkpoint exists
  if (lesson.checkpoint) {
    document.getElementById("submitCheckpointBtn").addEventListener("click", () => {
      evaluateCheckpoint(lesson.checkpoint);
    });
  }

  // Save current lesson index in progress
  const progress = getTutorialProgress();
  if (!progress[tutorialState.chapterId]) {
    progress[tutorialState.chapterId] = { completedLessons: [], lastLessonIndex: 0 };
  }
  progress[tutorialState.chapterId].lastLessonIndex = tutorialState.currentLessonIndex;
  saveTutorialProgress(progress);

  // Update button states
  document.getElementById("prevLessonBtn").disabled = tutorialState.currentLessonIndex === 0;
  document.getElementById("prevLessonBtn").style.opacity = tutorialState.currentLessonIndex === 0 ? "0.5" : "1";
  
  const isLast = tutorialState.currentLessonIndex === totalLessons - 1;
  document.getElementById("nextLessonBtn").textContent = isLast ? "Finish Chapter Hub →" : "Next Lesson →";
}

// Evaluate Interactive Checkpoint
function evaluateCheckpoint(cp) {
  const selected = document.querySelector('input[name="cpOption"]:checked');
  const feedbackDiv = document.getElementById("cpFeedback");
  
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
    if (idx === cp.correct) {
      label.classList.add("correct");
    } else if (idx === userChoice && userChoice !== cp.correct) {
      label.classList.add("incorrect");
    }
  });

  if (userChoice === cp.correct) {
    feedbackDiv.className = "checkpoint-feedback success";
    feedbackDiv.innerHTML = `<strong>✓ Correct!</strong> ${cp.explanation}`;
  } else {
    feedbackDiv.className = "checkpoint-feedback error";
    feedbackDiv.innerHTML = `<strong>✗ Incorrect.</strong> The correct answer is <em>"${cp.options[cp.correct]}"</em>. ${cp.explanation}`;
  }

  document.getElementById("submitCheckpointBtn").disabled = true;
}

// Mark current lesson complete & proceed
function markCurrentLessonComplete() {
  const progress = getTutorialProgress();
  if (!progress[tutorialState.chapterId]) {
    progress[tutorialState.chapterId] = { completedLessons: [], lastLessonIndex: 0 };
  }

  if (!progress[tutorialState.chapterId].completedLessons.includes(tutorialState.currentLessonIndex)) {
    progress[tutorialState.chapterId].completedLessons.push(tutorialState.currentLessonIndex);
  }

  saveTutorialProgress(progress);
  updateChapterProgressUI(tutorialState.chapterId);

  // Move to next lesson or return to hub if last
  const tutData = chapterTutorials[tutorialState.chapterId];
  if (tutorialState.currentLessonIndex < tutData.lessons.length - 1) {
    tutorialState.currentLessonIndex++;
    renderActiveLesson();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    showInfo("Chapter Completed! 🎉", `Congratulations! You have completed all interactive lessons for ${getChapterById(tutorialState.chapterId).name}.`, "TUTORIAL SYSTEM");
    navigateTo({ view: "chapter", chapterId: tutorialState.chapterId });
  }
}

// Update chapter progress UI & percentage
function updateChapterProgressUI(chapterId) {
  const tutData = chapterTutorials[chapterId];
  if (!tutData) return;

  const total = tutData.lessons.length;
  const progress = getTutorialProgress();
  const completedCount = progress[chapterId] && progress[chapterId].completedLessons ? progress[chapterId].completedLessons.length : 0;
  
  const percentage = Math.round((completedCount / total) * 100);

  const fillEl = document.getElementById("chapProgressFill");
  const textEl = document.getElementById("chapProgressText");
  const noteEl = document.getElementById("chapProgressNote");

  if (fillEl) fillEl.style.width = `${percentage}%`;
  if (textEl) textEl.textContent = `${percentage}% · ${completedCount} of ${total} lessons completed`;
  if (noteEl) {
    noteEl.textContent = percentage === 100 
      ? "🌟 Mastered! You have completed all lessons for this chapter." 
      : "Complete tutorial lessons and checkpoints to increase your mastery percentage.";
  }
}

// Bind Stage 3 Tutorial Navigation Listeners
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("prevLessonBtn").addEventListener("click", () => {
    if (tutorialState.currentLessonIndex > 0) {
      tutorialState.currentLessonIndex--;
      renderActiveLesson();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  document.getElementById("nextLessonBtn").addEventListener("click", () => {
    const tutData = chapterTutorials[tutorialState.chapterId];
    if (tutorialState.currentLessonIndex < tutData.lessons.length - 1) {
      tutorialState.currentLessonIndex++;
      renderActiveLesson();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigateTo({ view: "chapter", chapterId: tutorialState.chapterId });
    }
  });

  document.getElementById("lessonJumpSelect").addEventListener("change", (e) => {
    tutorialState.currentLessonIndex = parseInt(e.target.value, 10);
    renderActiveLesson();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("markCompleteBtn").addEventListener("click", () => {
    markCurrentLessonComplete();
  });

  document.getElementById("tutBackChapterBtn").addEventListener("click", () => {
    navigateTo({ view: "chapter", chapterId: tutorialState.chapterId });
  });
});