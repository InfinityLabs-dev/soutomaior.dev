const XP_TOTAL = 100; // total XP to reach 100%
let xp = parseInt(localStorage.getItem("xp")) || 0;

const xpValue = document.getElementById("xp-value");
const xpTotal = document.getElementById("xp-total");
const xpFill = document.getElementById("xp-fill");

xpTotal.textContent = XP_TOTAL;
updateXPDisplay();

function addXP(amount) {
  if (xp + amount > XP_TOTAL) xp = XP_TOTAL;
  else xp += amount;
  localStorage.setItem("xp", xp);
  updateXPDisplay();
}

function updateXPDisplay() {
  xpValue.textContent = xp;
  xpFill.style.width = `${(xp / XP_TOTAL) * 100}%`;
}

// Example triggers:
// Replace these with your real event listeners
document.querySelectorAll(".folder").forEach(folder => {
  folder.addEventListener("click", () => addXP(10));
});

document.querySelectorAll(".project").forEach(project => {
  project.addEventListener("click", () => addXP(20));
});


const completed = JSON.parse(localStorage.getItem("completed")) || {};

function gainXP(id, amount) {
  if (completed[id]) return; // already viewed
  completed[id] = true;
  addXP(amount);
  localStorage.setItem("completed", JSON.stringify(completed));
}

document.querySelectorAll(".folder").forEach(folder => {
  folder.addEventListener("click", () => gainXP(folder.dataset.id, 10));
});

document.querySelectorAll(".project").forEach(project => {
  project.addEventListener("click", () => gainXP(project.dataset.id, 20));
});
