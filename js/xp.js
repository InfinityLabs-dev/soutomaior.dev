document.addEventListener("DOMContentLoaded", () => {
  const XP_TOTAL = 100;
  let xp = parseInt(localStorage.getItem("xp")) || 0;
  const completed = JSON.parse(localStorage.getItem("completed")) || {};

  const xpValue = document.getElementById("xp-value");
  const xpTotal = document.getElementById("xp-total");
  const xpFill = document.getElementById("xp-fill");
  xpTotal.textContent = XP_TOTAL;

  function updateXPDisplay() {
    xpValue.textContent = xp;
    xpFill.style.width = `${(xp / XP_TOTAL) * 100}%`;
  }

  function addXP(amount) {
    xp = Math.min(XP_TOTAL, xp + amount);
    localStorage.setItem("xp", xp);
    updateXPDisplay();
  }

  function gainXP(id, amount) {
    if (completed[id]) return; // prevent double XP
    completed[id] = true;
    localStorage.setItem("completed", JSON.stringify(completed));
    addXP(amount);
    showXPToast(`+${amount} XP`);
  }

  // Small popup animation when gaining XP
  function showXPToast(text) {
    const toast = document.createElement("div");
    toast.className = "xp-toast";
    toast.textContent = text;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 1200);
  }

  // Initialize XP display
  updateXPDisplay();

  // Add XP when folders are opened
  document.querySelectorAll(".folder").forEach(folder => {
    const id = folder.querySelector(".folder-name").textContent.toLowerCase();
    folder.addEventListener("click", () => gainXP(id, 15));
  });
});
