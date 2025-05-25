async function repoView() {
  const mainContent = document.querySelector("main");

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
        <div class="repo-item">
          <div class="repo-header">
            <div class="repo-name-section">
              <div class="status-indicator status-active"></div>
              <a href="#" class="repo-name">awesome-project</a>
              <span class="repo-visibility">Public</span>
            </div>
            <div class="repo-actions">
              <button class="star-btn starred">⭐ 142</button>
            </div>
          </div>
          <div class="repo-description">
            A comprehensive web application showcasing modern development
            practices with React and TypeScript. Features include real-time
            updates, responsive design, and comprehensive testing.
          </div>
          <div class="repo-meta">
            <div class="meta-item">
              <div class="language-dot" style="background-color: #f1e05a"></div>
              JavaScript
            </div>
            <div class="meta-item">⭐ 142</div>
            <div class="meta-item">🍴 23</div>
            <div class="updated-time">Updated 2 hours ago</div>
          </div>
        </div>

        <div class="repo-item">
          <div class="repo-header">
            <div class="repo-name-section">
              <div class="status-indicator status-active"></div>
              <a href="#" class="repo-name">web-portfolio</a>
              <span class="repo-visibility">Public</span>
            </div>
            <div class="repo-actions">
              <button class="star-btn">⭐ 28</button>
            </div>
          </div>
          <div class="repo-description">
            Personal portfolio website built with modern web technologies.
            Showcases projects, skills, and professional experience with a
            clean, responsive design.
          </div>
          <div class="repo-meta">
            <div class="meta-item">
              <div class="language-dot" style="background-color: #3178c6"></div>
              TypeScript
            </div>
            <div class="meta-item">⭐ 28</div>
            <div class="meta-item">🍴 5</div>
            <div class="updated-time">Updated yesterday</div>
          </div>
        </div>

        <div class="repo-item">
          <div class="repo-header">
            <div class="repo-name-section">
              <div class="status-indicator status-active"></div>
              <a href="#" class="repo-name">data-analysis</a>
              <span class="repo-visibility">Public</span>
            </div>
            <div class="repo-actions">
              <button class="star-btn">⭐ 67</button>
            </div>
          </div>
          <div class="repo-description">
            Python scripts and Jupyter notebooks for data analysis and
            visualization. Includes examples of machine learning models and
            statistical analysis techniques.
          </div>
          <div class="repo-meta">
            <div class="meta-item">
              <div class="language-dot" style="background-color: #3776ab"></div>
              Python
            </div>
            <div class="meta-item">⭐ 67</div>
            <div class="meta-item">🍴 12</div>
            <div class="updated-time">Updated 3 days ago</div>
          </div>
        </div>

        <div class="repo-item">
          <div class="repo-header">
            <div class="repo-name-section">
              <div class="status-indicator status-inactive"></div>
              <a href="#" class="repo-name">mobile-app</a>
              <span class="repo-visibility private">Private</span>
            </div>
            <div class="repo-actions">
              <button class="star-btn">⭐ 8</button>
            </div>
          </div>
          <div class="repo-description">
            Cross-platform mobile application built with React Native. Features
            user authentication, real-time messaging, and offline data
            synchronization.
          </div>
          <div class="repo-meta">
            <div class="meta-item">
              <div class="language-dot" style="background-color: #f1e05a"></div>
              JavaScript
            </div>
            <div class="meta-item">⭐ 8</div>
            <div class="meta-item">🍴 2</div>
            <div class="updated-time">Updated 1 week ago</div>
          </div>
        </div>

        <div class="repo-item">
          <div class="repo-header">
            <div class="repo-name-section">
              <div class="status-indicator status-active"></div>
              <a href="#" class="repo-name">api-server</a>
              <span class="repo-visibility">Public</span>
            </div>
            <div class="repo-actions">
              <button class="star-btn">⭐ 91</button>
            </div>
          </div>
          <div class="repo-description">
            RESTful API server built with Node.js and Express. Includes user
            authentication, database integration, and comprehensive API
            documentation.
          </div>
          <div class="repo-meta">
            <div class="meta-item">
              <div class="language-dot" style="background-color: #f1e05a"></div>
              JavaScript
            </div>
            <div class="meta-item">⭐ 91</div>
            <div class="meta-item">🍴 18</div>
            <div class="updated-time">Updated 2 weeks ago</div>
          </div>
        </div>

        <div class="repo-item">
          <div class="repo-header">
            <div class="repo-name-section">
              <div class="status-indicator status-inactive"></div>
              <a href="#" class="repo-name">learning-resources</a>
              <span class="repo-visibility">Public</span>
            </div>
            <div class="repo-actions">
              <button class="star-btn starred">⭐ 234</button>
            </div>
          </div>
          <div class="repo-description">
            Curated collection of learning resources for web development,
            including tutorials, articles, and useful tools for developers at
            all levels.
          </div>
          <div class="repo-meta">
            <div class="meta-item">
              <div class="language-dot" style="background-color: #083fa1"></div>
              Markdown
            </div>
            <div class="meta-item">⭐ 234</div>
            <div class="meta-item">🍴 45</div>
            <div class="updated-time">Updated 1 month ago</div>
          </div>
        </div>
      </div>
    </div>
      `;

  // Update the main content
  mainContent.innerHTML = newContent;
}
