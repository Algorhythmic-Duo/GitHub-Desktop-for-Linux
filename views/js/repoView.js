// repoView.js
import getUsername from "./account.js";

async function repoView() {
  const mainContent = document.querySelector("main");
  if (!mainContent) {
    console.error("Main content element not found.");
    return;
  }

  const repos = await getUsername();

  if (!Array.isArray(repos)) {
    mainContent.innerHTML = `<p>Error fetching repositories.</p>`;
    return;
  }

  // Generate HTML for all repos
  const repoItems = repos
    .map(
      (repo) => `
    <div class="repo-item">
      <div class="repo-header">
        <div class="repo-name-section">
          <div class="status-indicator status-active"></div>
          <a href="${repo.html_url}" target="_blank" class="repo-name">${
        repo.name
      }</a>
          <span class="repo-visibility">${
            repo.private ? "Private" : "Public"
          }</span>
        </div>
        <div class="repo-actions">
          <button class="star-btn">⭐ ${repo.stargazers_count}</button>
        </div>
      </div>
      <div class="repo-description">
        ${repo.description || "No description provided."}
      </div>
      <div class="repo-meta">
        <div class="meta-item">
          <div class="language-dot" style="background-color: #f1e05a"></div>
          ${repo.language || "Unknown"}
        </div>
        <div class="meta-item">⭐ ${repo.stargazers_count}</div>
        <div class="meta-item">🍴 ${repo.forks_count}</div>
        <div class="updated-time">Updated ${new Date(
          repo.updated_at
        ).toLocaleString()}</div>
      </div>
    </div>
  `
    )
    .join("");

  // Final content with filter UI + repo list
  const newContent = `
    <div class="overlay" id="overlay"></div>

    <div class="main-content">
      <div class="filters">
        <button class="filter-btn active">All</button>
        <button class="filter-btn">Public</button>
        <button class="filter-btn">Private</button>
        <button class="filter-btn">Sources</button>
        <button class="filter-btn">Forks</button>
        <button class="filter-btn">Archived</button>
        <select class="sort-dropdown">
          <option>Recently updated</option>
          <option>Name</option>
          <option>Stars</option>
          <option>Recently created</option>
        </select>
      </div>

      <div class="repo-list">
        ${repoItems}
      </div>
    </div>
  `;

  mainContent.innerHTML = newContent;
}

// Attach repoView to the global scope
window.repoView = repoView;

// Call the repoView function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Optionally call repoView here if you want it to load automatically
  // repoView();
});
