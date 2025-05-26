// your-script.js
import getUsername from "./account.js";

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll(".profile-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".profile-tab")
        .forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });

  function timeAgo(timestamp) {
    const now = new Date();
    const pastDate = new Date(timestamp);

    if (isNaN(pastDate.getTime())) {
      return "Invalid date";
    }

    const seconds = Math.floor((now - pastDate) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
      return years === 1 ? "a year ago" : `${years} years ago`;
    } else if (months > 0) {
      return months === 1 ? "a month ago" : `${months} months ago`;
    } else if (weeks > 0) {
      return weeks === 1 ? "a week ago" : `${weeks} weeks ago`;
    } else if (days > 0) {
      return days === 1 ? "a day ago" : `${days} days ago`;
    } else if (hours > 0) {
      return hours === 1 ? "an hour ago" : `${hours} hours ago`;
    } else if (minutes > 0) {
      return minutes === 1 ? "a minute ago" : `${minutes} minutes ago`;
    } else {
      return seconds <= 10 ? "just now" : `${seconds} seconds ago`;
    }
  }

  async function updateMainContent() {
    try {
      const userData = await getUsername();
      console.log(userData);
      const mainContent = document.querySelector("main");

      const newContent = `
        <div class="profile-container">
            <div class="profile-sidebar">
                <div class="profile-avatar-wrapper">
                    <img src="${
                      userData.avatar_url
                    }" alt="User avatar" class="profile-avatar" id="user-avatar-main">
                </div>
                <div class="profile-info">
                    <h1 class="profile-name">${userData.name}</h1>
                    <div class="profile-username">${userData.login}</div>
                    <div class="profile-bio">${userData.bio}</div>
                </div>
                <div class="profile-details">
                    <div class="profile-detail-item">
                        <svg viewBox="0 0 16 16">
                            <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                        </svg>
                        ${userData.location || "Location"}
                    </div>
                    <div class="profile-detail-item">
                        <svg viewBox="0 0 16 16">
                            <path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                        </svg>
                        ${userData.company || "Company"}
                    </div>
                    <div class="profile-detail-item">
                        <svg viewBox="0 0 16 16">
                            <path d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path>
                        </svg>
                        ${userData.email || "Email"}
                    </div>
                </div>
                <div class="profile-stats">
                    <a href="#" class="profile-stat">
                        <span class="profile-stat-number">${
                          userData.followers
                        }</span> followers
                    </a>
                    <a href="#" class="profile-stat">
                        <span class="profile-stat-number">${
                          userData.following
                        }</span> following
                    </a>
                </div>
            </div>
            <div class="profile-content">
                <div class="profile-tabs">
                    <button class="profile-tab active">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                        </svg>
                        Overview
                    </button>
                    <button class="profile-tab">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8z"></path>
                        </svg>
                        Repositories
                        <span class="tab-counter">42</span>
                    </button>
                    <button class="profile-tab">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
                        </svg>
                        Projects
                        <span class="tab-counter">12</span>
                    </button>
                    <button class="profile-tab">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M1.5 1.75V13.5h13.75a.75.75 0 010 1.5H.75a.75.75 0 01-.75-.75V1.75a.75.75 0 011.5 0zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"></path>
                        </svg>
                        Packages
                    </button>
                    <button class="profile-tab">
                        Stars
                        <span class="tab-counter">284</span>
                    </button>
                </div>
                <div class="contribution-graph">
                    <div class="contribution-header">
                        <h2 class="contribution-title">849 contributions in the last year</h2>
                        <div class="contribution-count">2024</div>
                    </div>
                    <div class="contribution-grid" id="contributionGrid">
                        <!-- Grid will be generated by JavaScript -->
                    </div>
                </div>
                <div class="repositories-section">
                    <div class="section-header">
                        <h2 class="section-title">Popular repositories</h2>
                    </div>
                    <div class="repo-card">
                        <div class="repo-header">
                            <a href="#" class="repo-name">awesome-project</a>
                            <span class="repo-badge">Public</span>
                        </div>
                        <div class="repo-description">A collection of awesome tools and resources for developers. Built with modern web technologies and best practices.</div>
                        <div class="repo-meta">
                            <div class="repo-meta-item">
                                <div class="language-dot" style="background-color: #f1e05a;"></div>
                                JavaScript
                            </div>
                            <div class="repo-meta-item">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8 .5a.5.5 0 01.5.5v1.5a6.5 6.5 0 110 13v1.5a.5.5 0 01-1 0V14.5A6.5 6.5 0 117.5 1V.5a.5.5 0 01.5-.5z"></path>
                                </svg>
                                1,243
                            </div>
                            <div class="repo-meta-item">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878z"></path>
                                </svg>
                                324
                            </div>
                            <span>Updated 2 days ago</span>
                        </div>
                    </div>
                    <div class="repo-card">
                        <div class="repo-header">
                            <a href="#" class="repo-name">react-components</a>
                            <span class="repo-badge">Public</span>
                        </div>
                        <div class="repo-description">Reusable React components library with TypeScript support and comprehensive documentation.</div>
                        <div class="repo-meta">
                            <div class="repo-meta-item">
                                <div class="language-dot" style="background-color: #3178c6;"></div>
                                TypeScript
                            </div>
                            <div class="repo-meta-item">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8 .5a.5.5 0 01.5.5v1.5a6.5 6.5 0 110 13v1.5a.5.5 0 01-1 0V14.5A6.5 6.5 0 117.5 1V.5a.5.5 0 01.5-.5z"></path>
                                </svg>
                                892
                            </div>
                            <div class="repo-meta-item">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878z"></path>
                                </svg>
                                156
                            </div>
                            <span>Updated 1 week ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `;

      mainContent.innerHTML = newContent;
      await updateListContent();
    } catch (err) {
      console.error(`Error updating main content: ${err}`);
    }
  }

  async function updateListContent() {
    try {
      const response = await fetch(
        "https://api.github.com/users/aivinjinu/repos?sort=stars"
      );
      const repos = await response.json();
      console.log(repos);
      const listContent = document.querySelector("div.repositories-section");

      if (!Array.isArray(repos)) {
        listContent.innerHTML = `<p>Error fetching repositories.</p>`;
        return;
      }

      const repoItems = repos
        .map(
          (repo) => `
            <div class="repo-card">
                <div class="repo-header">
                    <a href="#" class="repo-name">${repo.name}</a>
                    <span class="repo-badge">Public</span>
                </div>
                <div class="repo-description">${
                  repo.description == null ? "No description" : repo.description
                }</div>
                <div class="repo-meta">
                    ${
                      repo.language !== null
                        ? `<div class="repo-meta-item"><div class="language-dot" style="background-color: #3178c6;"></div>${repo.language}</div>`
                        : ``
                    }
                    <div class="repo-meta-item">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 .5a.5.5 0 01.5.5v1.5a6.5 6.5 0 110 13v1.5a.5.5 0 01-1 0V14.5A6.5 6.5 0 117.5 1V.5a.5.5 0 01.5-.5z"></path>
                        </svg>
                        892
                    </div>
                    <div class="repo-meta-item">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878z"></path>
                        </svg>
                        156
                    </div>
                    <span>Updated ${timeAgo(repo.updated_at)}</span>
                </div>
            </div>
          `
        )
        .join("");

      const newContent = `
        <div class="repositories-section">
            <div class="section-header">
                <h2 class="section-title">Popular repositories</h2>
            </div>
            ${repoItems}
        </div>
      `;

      listContent.innerHTML = newContent;
    } catch (err) {
      console.error(`Error updating list content: ${err}`);
    }
  }

  // Call updateMainContent when needed
  updateMainContent();
});
