// dashboard.js

function DashView() {
  const mainContent = document.querySelector("main");

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
              <div style="color: #58a6ff; font-weight: bold">24</div>
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

  // Update the main content
  mainContent.innerHTML = newContent;
}

// Attach DashView to the global scope
window.DashView = DashView;

// Call the DashView function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Optionally call DashView here if you want it to load automatically
  // DashView();
});
