function generateContributionGraph() {
  const grid = document.getElementById("contributionGrid");
  const totalDays = 371; // ~53 weeks

  for (let i = 0; i < totalDays; i++) {
    const day = document.createElement("div");
    day.className = "contribution-day";

    // Random contribution level for demo
    const level = Math.floor(Math.random() * 5);
    if (level > 0) {
      day.classList.add(`level-${level}`);
    }

    grid.appendChild(day);
  }
}

// Tab switching functionality
document.querySelectorAll(".profile-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".profile-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

// Initialize
generateContributionGraph();
