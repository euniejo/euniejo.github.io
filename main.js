// Projects Data
const projects = [
  {
    title: "Educational Chatbot Service",
    description: "A chatbot service leveraging RAG (Retrieval-Augmented Generation) for enhanced knowledge retrieval, with a Python backend and a React frontend.",
    tags: ["Python", "RAG", "React", "LLM", "AI"],
    github: "",
    demo: "https://ai.cvri.ca",
    category: "ai",
  },
  {
    title: "Order Management & Invoicing System",
    description: "A full-stack web application for efficient order management and invoicing, featuring customer data capture and invoice generation.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "AWS EC2"],
    github: "https://github.com/euniej/order-management",
    demo: "",
    category: "web",
  },
  {
    title: "Clinical Encounter Notes App",
    description: "A comprehensive application for managing clinical encounter notes with features for creating, editing, and storing patient records in Azure SQL.",
    tags: ["C#", "WinForms", "Azure SQL", "Regex"],
    github: "https://github.com/euniej/encounter-note",
    demo: "",
    category: "other",
  }
]

// Skills Data
const skills = {
  Frontend: [
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 85 },
    { name: "React", level: 80 },
    { name: "Vue.js", level: 75 },
  ],
  Backend: [
    { name: "Node.js", level: 85 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 80 },
    { name: "MongoDB", level: 70 },
  ],
  "Tools & Others": [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Linux", level: 80 },
  ],
}

// Theme Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  const themeProvider = document.querySelector(".theme-provider")
  const currentTheme = themeProvider.getAttribute("data-theme")
  const newTheme = currentTheme === "light" ? "dark" : "light"
  themeProvider.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
})

// Initialize theme from localStorage
const savedTheme = localStorage.getItem("theme") || "light"
document.querySelector(".theme-provider").setAttribute("data-theme", savedTheme)

// Project Filtering
function renderProjects(category = "all") {
  const projectsGrid = document.getElementById("projects-grid")
  const filteredProjects = category === "all" ? projects : projects.filter((project) => project.category === category)

  projectsGrid.innerHTML = filteredProjects
    .map(
      (project) => `
        <div class="card animate-fade-in">
            <div class="card-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="card-content">
                <h3 class="card-title">${project.title}</h3>
                <p class="card-description">${project.description}</p>
                <div class="tags">
                    ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                </div>
                <div class="hero-buttons">
                    ${
                      project.github
                        ? `
                        <a href="${project.github}" class="button button-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            Code
                        </a>
                    `
                        : ""
                    }
                    ${
                      project.demo
                        ? `
                        <a href="${project.demo}" class="button button-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            Demo
                        </a>
                    `
                        : ""
                    }
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Skills Rendering
function renderSkills() {
  const skillsGrid = document.getElementById("skills-grid")
  skillsGrid.innerHTML = Object.entries(skills)
    .map(
      ([category, items]) => `
        <div class="skill-card animate-fade-in">
            <h3 class="skill-title">${category}</h3>
            <div class="skill-list">
                ${items
                  .map(
                    (skill) => `
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>${skill.name}</span>
                            <span>${skill.level}%</span>
                        </div>
                        <div class="skill-bar" style="--progress: ${skill.level}%"></div>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `,
    )
    .join("")
}

// Tab Handling
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"))
    tab.classList.add("active")
    renderProjects(tab.dataset.category)
  })
})

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderProjects()
  renderSkills()
})

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

