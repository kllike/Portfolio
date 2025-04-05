// Project data
const projectData = [
  {
      id: "project1",
      title: "Lorem Project 1",
      languages: ["HTML", "CSS", "JavaScript"],
      description: "This is a short description of project 1. It explains what the project does and its main features.",
      url: "https://vso24annuk.ita.voco.ee/veebiarendus/cameras/homepage.html"
  },
  {
      id: "project2",
      title: "Lorem Project 2",
      languages: ["React", "Node.js", "MongoDB"],
      description: "This is a short description of project 2. It highlights the core functionality and technologies used.",
      url: "https://example.com/project2"
  },
  {
      id: "project3",
      title: "Lorem Project 3",
      languages: ["Python", "Django", "PostgreSQL"],
      description: "This is a short description of project 3. It explains the purpose and scope of this particular project.",
      url: "https://example.com/project3"
  },
  {
      id: "project4",
      title: "Lorem Project 4",
      languages: ["Vue.js", "Express", "Firebase"],
      description: "This is a short description of project 4. It covers the main functionality and implementation details.",
      url: "https://example.com/project4"
  },
  {
      id: "project5",
      title: "Lorem Project 5",
      languages: ["Angular", "TypeScript", "AWS"],
      description: "This is a short description of project 5. It outlines the key features and technical aspects.",
      url: "https://example.com/project5"
  },
  {
      id: "project6",
      title: "E-store 'Pagari Koda'",
      languages: ["Worbress"],
      description: "This is a short description of project 6. It describes the project's goals and implementation details.",
      url: "https://vso24annuk.ita.voco.ee/wordpress/"
  }
];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Create and append modal to body
  createModal();
  
  // Add event listeners to all project items
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach((item, index) => {
      // Assign project ID if not already assigned
      if (!item.dataset.project) {
          item.dataset.project = `project${index + 1}`;
      }
      
      item.addEventListener('click', function() {
          const projectId = this.dataset.project;
          openModal(projectId);
      });
  });
});

// Create modal HTML and append to body
function createModal() {
  const modalHTML = `
      <div class="project-modal" id="projectModal">
          <div class="modal-content">
              <span class="close-modal">&times;</span>
              <h2 class="modal-title"></h2>
              <div class="modal-languages"></div>
              <p class="modal-description"></p>
              <div class="modal-actions">
                  <a href="#" class="btn-custom modal-link" target="_blank">View Project</a>
              </div>
          </div>
      </div>
  `;
  
  // Create a div and set its innerHTML to modalHTML
  const modalContainer = document.createElement('div');
  modalContainer.innerHTML = modalHTML;
  
  // Append the modal to the body
  document.body.appendChild(modalContainer.firstElementChild);
  
  // Add event listener to close modal
  const closeBtn = document.querySelector('.close-modal');
  closeBtn.addEventListener('click', closeModal);
  
  // Close modal when clicking outside content
  const modal = document.getElementById('projectModal');
  modal.addEventListener('click', function(event) {
      if (event.target === modal) {
          closeModal();
      }
  });
  
  // Close modal on escape key
  document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
          closeModal();
      }
  });
}

// Open modal with project data
function openModal(projectId) {
  const project = projectData.find(p => p.id === projectId);
  
  if (!project) {
      console.error(`Project with id "${projectId}" not found`);
      return;
  }
  
  // Populate modal with project data
  const modal = document.getElementById('projectModal');
  modal.querySelector('.modal-title').textContent = project.title;
  
  // Set languages
  const languagesDiv = modal.querySelector('.modal-languages');
  languagesDiv.innerHTML = '';
  project.languages.forEach(lang => {
      const langSpan = document.createElement('span');
      langSpan.className = 'language-tag';
      langSpan.textContent = lang;
      languagesDiv.appendChild(langSpan);
  });
  
  // Set description and link
  modal.querySelector('.modal-description').textContent = project.description;
  modal.querySelector('.modal-link').href = project.url;
  
  // Display modal
  modal.classList.add('show-modal');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close modal
function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('show-modal');
  document.body.style.overflow = ''; // Restore scrolling
}