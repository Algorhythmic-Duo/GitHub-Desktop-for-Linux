const { exec } = require('child_process');
async function loadGitHubProfile() {
  try {
    // Using a sample user for demonstration
    const username = await findAccountOwner();
    const response = await fetch(`https://api.github.com/users/${username}`);
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


async function findAccountOwner() {
  return new Promise((resolve, reject) => {
    exec("gh api user --jq '.login'", (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${error.message}`);
        reject(error);
        return;
      }
      if (stderr) {
        console.error(`Command stderr: ${stderr}`);
        reject(new Error(stderr));
        return;
      }

      // Resolve the promise with the command output
      resolve(stdout.trim());
      
    });
  });
}