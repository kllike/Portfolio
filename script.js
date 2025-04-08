// Project data
const projectData = [
    {
      id: "Camera info website",
      title: "Camera info website",
      languages: ["HTML", "CSS", "JavaScript"],
      description: "This is a short description of project 1. It explains what the project does and its main features.",
      url: "https://vso24annuk.ita.voco.ee/veebiarendus/cameras/homepage.html"
    },
    {
      id: "Portfolio",
      title: "Portfolio",
      languages: ["HTML", "CSS", "JavaScript"],
      description: "This is a short description of project 2. It highlights the core functionality and technologies used.",
      url: "https://example.com/project2"
    },
    {
      id: "Cyber Omlet",
      title: "Cyber Omlet",
      languages: ["HTML", "CSS", "JavaScript"],
      description: "This is a short description of project 3. It explains the purpose and scope of this particular project.",
      url: "https://nullistyheni.ita.voco.ee/e-valve_consulting/"
    },
    {
      id: "Bakery E-commerce shop",
      title: "Bakery E-commerce shop",
      languages: ["WordPress"],
      description: "This is a short description of project 6. It describes the project's goals and implementation details.",
      url: "https://vso24annuk.ita.voco.ee/wordpress/"
    }
  ];
  
  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize both modals
    initializeProjectModals();
    initializeCVModal();
  });
  
  // Initialize project modals
  function initializeProjectModals() {
    // Create and append modal to body
    createProjectModal();
    
    // Add event listeners to all project items
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((item, index) => {
      // Assign project ID if not already assigned
      if (!item.dataset.project) {
        item.dataset.project = `project${index + 1}`;
      }
      
      item.addEventListener('click', function() {
        const projectId = this.dataset.project;
        openProjectModal(projectId);
      });
    });
  }
  
  // Create project modal HTML and append to body
  function createProjectModal() {
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
    
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer.firstElementChild);
    
    // Add event listeners for closing modal
    const closeBtn = document.querySelector('.close-modal');
    closeBtn.addEventListener('click', closeProjectModal);
    
    const modal = document.getElementById('projectModal');
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        closeProjectModal();
      }
    });
    
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeProjectModal();
      }
    });
  }
  
  // Open project modal with project data
  function openProjectModal(projectId) {
    const project = projectData.find(p => p.id === projectId);
    
    if (!project) {
      console.error(`Project with id "${projectId}" not found`);
      return;
    }
    
    const modal = document.getElementById('projectModal');
    
    // Update modal content
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
    
    modal.querySelector('.modal-description').textContent = project.description;
    modal.querySelector('.modal-link').href = project.url;
    
    // Display modal
    modal.classList.add('show-modal');
    document.body.style.overflow = 'hidden';
  }
  
  // Close project modal
  function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('show-modal');
    document.body.style.overflow = '';
  }
  
  // Initialize CV modal functionality
  function initializeCVModal() {
    const cvButton = document.getElementById('cvButton');
    const cvModal = document.getElementById('cvModal');
    const cvClose = document.getElementById('cvClose');
    
    if (!cvButton || !cvModal || !cvClose) return;
    
    // Open CV modal
    cvButton.addEventListener('click', function() {
      cvModal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
    
    // Close CV modal
    cvClose.addEventListener('click', function() {
      cvModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
    
    // Close CV modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === cvModal) {
        cvModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }