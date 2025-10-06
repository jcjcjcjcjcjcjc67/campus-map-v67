// global function (keeps inline onclick="toggleSidebar()" working)
function toggleSidebar() {
  const sidebar = document.getElementById("right-sidebar");
  if (!sidebar) return console.warn("toggleSidebar: #right-sidebar not found");
  sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", () => {
  const floorsBtn = document.getElementById("floorsBtn");
  const floorsDropdown = document.getElementById("floorsDropdown");
  const legendsBtn = document.getElementById("legendsBtn");
  const legendsDropdown = document.getElementById("legendsDropdown");
  const creditsPopup = document.getElementById("creditsPopup");
  const creditsBtn = document.getElementById("creditsBtn");
  const closeCreditsBtn = document.getElementById("closeCreditsBtn");
  const removeHighlightsText = document.getElementById("removeHighlightsText");

  if (!floorsBtn) console.warn("floor2.js: #floorsBtn not found");
  if (!floorsDropdown) console.warn("floor2.js: #floorsDropdown not found");
  if (!legendsBtn) console.warn("floor2.js: #legendsBtn not found");
  if (!legendsDropdown) console.warn("floor2.js: #legendsDropdown not found");

  // helper to hide dropdowns
  function hideDropdown(el) {
    if (!el) return;
    el.style.display = "none";
  }

  // toggle floors dropdown
  if (floorsBtn && floorsDropdown) {
    floorsBtn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      // toggle this dropdown
      floorsDropdown.style.display = floorsDropdown.style.display === "block" ? "none" : "block";
      // ensure others are closed
      if (legendsDropdown) hideDropdown(legendsDropdown);
    });
  }

  // toggle legends dropdown
  if (legendsBtn && legendsDropdown) {
    legendsBtn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      legendsDropdown.style.display = legendsDropdown.style.display === "block" ? "none" : "block";
      if (floorsDropdown) hideDropdown(floorsDropdown);
    });
  }

  // Click anywhere else closes dropdowns
  document.addEventListener("click", (ev) => {
    // If click is inside a dropdown (.dropdown) do nothing
    if (ev.target.closest && ev.target.closest(".dropdown")) return;
    hideDropdown(floorsDropdown);
    hideDropdown(legendsDropdown);
  });

  // Credits popup handlers
  if (creditsBtn && creditsPopup) {
    creditsBtn.addEventListener("click", () => {
      creditsPopup.style.display = "block";
    });
  }
  if (closeCreditsBtn && creditsPopup) {
    closeCreditsBtn.addEventListener("click", () => {
      creditsPopup.style.display = "none";
    });
  }

  // Remove highlights text (safe if not present)
  if (removeHighlightsText) {
    removeHighlightsText.addEventListener("click", () => {
      // Trigger a custom event or clear highlights if you have them.
      // For now this just hides both dropdowns for cleanliness.
      hideDropdown(floorsDropdown);
      hideDropdown(legendsDropdown);
    });
  }

  // close credits popup when clicking outside it
  window.addEventListener("click", (e) => {
    if (creditsPopup && e.target === creditsPopup) {
      creditsPopup.style.display = "none";
    }
  });

  // small debug log that script initialized
  console.log("floor2.js initialized");
});
