// js/github.js
const { exec } = require('child_process');

async function getGitHubProfile(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) throw new Error("User not found");
  return await response.json();
}

async function showGitHubProfile() {
  try {
    const username  = await findAccountOwner();
    const data = await getGitHubProfile(username);
    document.getElementById("github-profile").innerHTML = `
      <img src="${data.avatar_url}" class="avatar-user" />
    `;
  } catch (err) {
    document.getElementById(
      "github-profile"
    ).innerHTML = `<p>User not found.</p>`;
  }
}

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
// Run on load for your username
document.addEventListener("DOMContentLoaded", () => {
  showGitHubProfile("MathewsVinoy");
showGitHubProfile(); // Set your GitHub username here
});
//
