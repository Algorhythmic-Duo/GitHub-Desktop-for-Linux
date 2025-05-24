async function loadGitHubProfile() {
  try {
    // Using a sample user for demonstration
    const response = await fetch("https://api.github.com/users/MathewsVinoy");
    const userData = await response.json();

    document.getElementById("user-avatar").src = userData.avatar_url;
    document.getElementById("user-avatar").alt = `${userData.login}'s avatar`;
  } catch (error) {
    console.log("GitHub API request failed, using default profile");
    document.getElementById("username").textContent = "GitHub User";
  }
}

// Load profile on page load
loadGitHubProfile();

// Add some interactivity to cards
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-4px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(-2px)";
  });
});

// Simulate real-time updates
setInterval(() => {
  const statusIndicators = document.querySelectorAll(".status-indicator");
  statusIndicators.forEach((indicator) => {
    indicator.style.animation = "pulse 2s infinite";
  });
}, 5000);

// Add pulse animation
const style = document.createElement("style");
style.textContent = `
      @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
      }
  `;
document.head.appendChild(style);
