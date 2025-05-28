import { getUsername, findAccountOwner } from "./account.js";
const { exec } = require("child_process");

// Run dashboard on DOM ready
document.addEventListener("DOMContentLoaded", DashView);
window.DashView = DashView;
window.openCreateRepoPage = openCreateRepoPage;

async function DashView() {
  const mainContent = document.querySelector("main");
  if (!mainContent) {
    console.error("Main content container not found.");
    return;
  }

  try {
    const userData = await getUsername();

    const newContent = `
      <div class="welcome-section">
        <h1 class="welcome-title">Welcome to GitHub Desktop</h1>
        <p class="welcome-subtitle">Manage your repositories with ease</p>
        <div class="quick-actions">
          <a href="#" class="btn btn-secondary" onclick="openCreateRepoPage()">
            <i class="fas fa-plus-circle"></i>
            Create New Repository
          </a>
        </div>
      </div>

      <div class="dashboard-grid">
        <div class="card">
          <h3 class="card-title">
            <i class="fas fa-code-branch"></i>
            Recent Repositories
          </h3>
          <div class="card-content">
            <div class="repo-item">
              <div>
                <div class="repo-name">awesome-project</div>
                <div class="repo-meta">Updated 2 hours ago</div>
              </div>
              <div class="status-indicator"></div>
            </div>
            <div class="repo-item">
              <div>
                <div class="repo-name">web-portfolio</div>
                <div class="repo-meta">Updated yesterday</div>
              </div>
              <div class="status-indicator"></div>
            </div>
            <div class="repo-item">
              <div>
                <div class="repo-name">data-analysis</div>
                <div class="repo-meta">Updated 3 days ago</div>
              </div>
              <div class="status-indicator"></div>
            </div>
          </div>
        </div>

        <div class="card">
          <h3 class="card-title">
            <i class="fas fa-bell"></i>
            Recent Activity
          </h3>
          <div class="card-content">
            <div class="repo-item">
              <div>
                <div class="repo-name">Pushed to main branch</div>
                <div class="repo-meta">awesome-project • 2 hours ago</div>
              </div>
            </div>
            <div class="repo-item">
              <div>
                <div class="repo-name">Created pull request #42</div>
                <div class="repo-meta">web-portfolio • 1 day ago</div>
              </div>
            </div>
            <div class="repo-item">
              <div>
                <div class="repo-name">Merged feature branch</div>
                <div class="repo-meta">data-analysis • 3 days ago</div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <h3 class="card-title">
            <i class="fas fa-chart-line"></i>
            Statistics
          </h3>
          <div class="card-content">
            <div class="repo-item">
              <div>
                <div class="repo-name">Total Repositories</div>
                <div class="repo-meta">Personal and collaborations</div>
              </div>
              <div style="color: #58a6ff; font-weight: bold">${userData.public_repos}</div>
            </div>
            <div class="repo-item">
              <div>
                <div class="repo-name">Commits This Week</div>
                <div class="repo-meta">Across all repositories</div>
              </div>
              <div style="color: #238636; font-weight: bold">18</div>
            </div>
            <div class="repo-item">
              <div>
                <div class="repo-name">Open Pull Requests</div>
                <div class="repo-meta">Awaiting review</div>
              </div>
              <div style="color: #da3633; font-weight: bold">3</div>
            </div>
          </div>
        </div>
      </div>
    `;

    mainContent.innerHTML = newContent;
  } catch (err) {
    console.error("Failed to load dashboard:", err.message);
  }
}

async function getOrg() {
  return new Promise((resolve, reject) => {
    exec("gh org list", (error, stdout, stderr) => {
      if (error || stderr) {
        console.error(`Error: ${error?.message || stderr}`);
        reject(error || new Error(stderr));
        return;
      }
      resolve(stdout.trim());
    });
  });
}

async function openCreateRepoPage() {
  const mainContent = document.querySelector("main");
  const username = await findAccountOwner();
  const orgs = await getOrg().catch(() => "");

  const orgOptions = orgs
    .split("\n")
    .filter((org) => org.trim())
    .map((org) => `<option value="${org}">${org}</option>`) // dropdown for organizations
    .join("");

  const newContent = `<div class="container">
    <div class="page-header">
      <h1 class="page-title">Create a new repository</h1>
      <p class="page-description">A repository contains all project files, including the revision history.</p>
    </div>
    <form class="form-container" id="repoForm">
      <div class="form-group">
        <label class="form-label">Owner <span class="required">*</span></label>
        <div class="owner-section">
          <select class="owner-select" id="owner">
            <option value="${username}">${username}</option>
            ${orgOptions}
          </select>
          <span class="separator">/</span>
          <input type="text" class="form-input repo-name-input" id="repoName" placeholder="Repository name" required>
          <div class="availability-indicator" id="availabilityIndicator"></div>
        </div>
      </div>
      <div class="form-group">
        <label for="description" class="form-label">Description <span style="color: #8b949e;">(optional)</span></label>
        <input type="text" class="form-input" id="description" placeholder="A short description of your repository">
      </div>
      <div class="visibility-section">
        <div class="visibility-title">Repository visibility</div>
        <label><input type="radio" name="visibility" value="public" checked> Public</label>
        <label><input type="radio" name="visibility" value="private"> Private</label>
      </div>
      <div class="button-group">
        <button type="submit" class="btn-primary" id="createBtn">Create repository</button>
      </div>
    </form> 
  </div>`;

  mainContent.innerHTML = newContent;

  document.getElementById("repoForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const owner = document.getElementById("owner").value;
    const repoName = document.getElementById("repoName").value;
    const description = document.getElementById("description").value;
    const visibility = document.querySelector(
      "input[name='visibility']:checked"
    ).value;
    await createGitHubRepo(
      `${owner}/${repoName}`,
      description,
      visibility === "private"
    );
  });
}

async function createGitHubRepo(repoName, description, isPrivate) {
  const visibility = isPrivate ? "private" : "public";
  const command = `gh repo create ${repoName} --${visibility} --description "${description}" --confirm`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error creating repo: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`GitHub CLI error: ${stderr}`);
      return;
    }
    console.log(`Repo created successfully:\n${stdout}`);
  });
}
