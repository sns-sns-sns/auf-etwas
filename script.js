// Project data
const projects = [
  {
    name: "Project 1",
    client: "Client 1",
    job: "Producer",
    image: "project1.png",
    link: "https://project1.com"
  },
  {
    name: "Project 2",
    client: "Client 2",
    job: "Producer",
    image: "project2.png",
    link: "https://project2.com"
  },
  // Add more projects...
];

// Create a project list item with the provided data
function createProjectListItem(project) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <a href="${project.link}">
      <span>${project.name}</span>
      <span>${project.client}</span>
      <span>${project.job}</span>
    </a>
  `;
  listItem.addEventListener('mouseover', () => {
    const projectImage = document.getElementById('project-image');
    projectImage.src = project.image;
    projectImage.style.opacity = 1;
  });
  listItem.addEventListener('mouseout', () => {
    const projectImage = document.getElementById('project-image');
    projectImage.style.opacity = 0;
  });

  return listItem;
}

// Append projects to the project list
function appendProjects() {
  const projectList = document.getElementById('project-list');
  projects.forEach((project) => {
    const listItem = createProjectListItem(project);
    projectList.appendChild(listItem);
  });
}

// Initial projects display
appendProjects();
