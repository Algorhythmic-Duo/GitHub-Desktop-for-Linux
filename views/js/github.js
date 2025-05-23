async function getGitHubProfile(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) throw new Error("User not found");
  return await response.json();
}

async function showGitHubProfile(username) {
  try {
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

document.addEventListener("DOMContentLoaded", () => {
  showGitHubProfile("MathewsVinoy");
});
//
