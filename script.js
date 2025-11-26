// ---- JAIIB subject tab logic ----
function initJaiibTabs() {
  const tabs = document.querySelectorAll(".subject-tab");
  const cards = document.querySelectorAll(".paper-card[data-paper]");
  if (!tabs.length || !cards.length) return;

  function activate(paperKey) {
    tabs.forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.paper === paperKey);
    });
    cards.forEach((card) => {
      card.classList.toggle("active", card.dataset.paper === paperKey);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activate(tab.dataset.paper);
    });
  });

  // default: first tab
  activate(tabs[0].dataset.paper);
}

document.addEventListener("DOMContentLoaded", () => {
  initJaiibTabs();
});
