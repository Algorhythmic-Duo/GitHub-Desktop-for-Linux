import { getUsername, findAccountOwner } from "./account.js";
import { Octokit } from "@octokit/rest";
import { createOAuthAppAuth } from "@octokit/auth-oauth-app";

// Replace with actual credentials
const CLIENT_ID = "your-client-id";
const CLIENT_SECRET = "your-client-secret";

async function createGitHubRepo(repoName, description, isPrivate) {
  const octokit = new Octokit({
    authStrategy: createOAuthAppAuth,
    auth: {
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
    },
  });

  try {
    const response = await octokit.repos.createForAuthenticatedUser({
      name: repoName,
      description: description,
      private: isPrivate,
    });
    console.log("Repository created successfully:", response.data.html_url);
  } catch (error) {
    console.error("Error creating repository:", error.message);
  }
}

async function DashView() {
  const userName = findAccountOwner(); // Optional: not used directly
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
          <a href="#" class="btn">
            <i class="fas fa-plus"></i>
            Clone Repository
          </a>
          <a href="#" class="btn btn-secondary">
            <i class="fas fa-folder-open"></i>
            Open Local Repository
          </a>
          <a href="#" class="btn btn-secondary">
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

// Ensure the function runs when DOM is ready
document.addEventListener("DOMContentLoaded", DashView);

// Optional: expose globally if needed
window.DashView = DashView;
