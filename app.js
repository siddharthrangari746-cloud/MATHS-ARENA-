const chapters = {
  maths1: [
    "Linear Equations in Two Variables",
    "Quadratic Equations",
    "Arithmetic Progression",
    "Financial Planning",
    "Probability",
    "Statistics"
  ],
  maths2: [
    "Similarity",
    "Pythagoras Theorem",
    "Circle",
    "Geometric Constructions",
    "Co-ordinate Geometry",
    "Trigonometry",
    "Mensuration"
  ]
};
const m1 = document.getElementById("maths1List");
const m2 = document.getElementById("maths2List");
let selected = null;

function renderChapters(target, list, bookName) {
  list.forEach((name, i) => {
    const button = document.createElement("button");
    button.className = "chapter-row";
    button.innerHTML = `<span class="chapter-no">${String(i+1).padStart(2,"0")}</span><span class="chapter-name"></span><span class="chapter-arrow">›</span>`;
    button.querySelector(".chapter-name").textContent = name;
    button.addEventListener("click", () => {
      selected = {name, bookName};
      document.getElementById("dialogBook").textContent = bookName.toUpperCase();
      document.getElementById("dialogTitle").textContent = name;
      document.getElementById("chapterDialog").showModal();
    });
    target.appendChild(button);
  });
}
renderChapters(m1, chapters.maths1, "Mathematics Part I · Algebra");
renderChapters(m2, chapters.maths2, "Mathematics Part II · Geometry");

const chapterDialog = document.getElementById("chapterDialog");
document.getElementById("closeDialog").onclick = () => chapterDialog.close();
document.getElementById("tutorialBtn").onclick = () => showInfo("Tutorial module", "The selected chapter’s easy-Hinglish, step-by-step tutorial will be built in Stage 2.");
document.getElementById("practiceBtn").onclick = () => showInfo("Notebook practice", "The notebook workspace, difficulty selector, question generator and solving tools will be built in the next stage.");
function showInfo(title, text) {
  chapterDialog.close();
  document.getElementById("infoTitle").textContent = title;
  document.getElementById("infoText").textContent = text;
  document.getElementById("infoDialog").showModal();
}
document.getElementById("closeInfo").onclick = () => document.getElementById("infoDialog").close();
document.getElementById("settingsBtn").onclick = () => showInfo("Settings", "Sound, animations and preferences will be added after the core learning and practice screens.");
document.getElementById("settingsCard").onclick = () => showInfo("Settings", "Sound, animations and preferences will be added after the core learning and practice screens.");
document.getElementById("analysisBtn").onclick = () => showInfo("My Analysis", "Chapter-wise accuracy, mistakes, weak topics and improvement tracking will be added after practice data is available.");
