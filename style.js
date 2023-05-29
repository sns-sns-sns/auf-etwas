// Example projects data
const projects = [
  { name: 'Project 1', client: 'Client A' },
  { name: 'Project 2', client: 'Client B' },
  { name: 'Project 3', client: 'Client C' },
  // Add more projects here
];

// Function to create project list items
function createProjectListItem(project) {
  const listItem = document.createElement('li');
  listItem.textContent = project.name + ' - ' + project.client;
  listItem.addEventListener('mouseover', () => {
    // Replace 'image-url.jpg' with the actual URL of the image for the project
    document.querySelector('.left-column').style.backgroundImage = `url('image-url.jpg')`;
  });
  return listItem;
}

// Function to append projects to the project list
function appendProjects() {
  const projectList = document.getElementById('project-list');
  projects.forEach((project) => {
    const listItem = createProjectListItem(project);
    projectList.appendChild(listItem);
  });
}

// Check if the user has scrolled to the bottom of the project list
function checkScroll() {
  const projectList = document.getElementById('project-list');
  const lastListItem = projectList.lastElementChild;
  const lastListItemOffset = lastListItem.offsetTop + lastListItem.clientHeight;
  const pageOffset = window.pageYOffset + window.innerHeight;

  if (pageOffset > lastListItemOffset) {
    // Append more projects when scrolled to the bottom
    appendProjects();
  }
}

// Event listener for scroll
window.addEventListener('scroll', checkScroll);

// Initial projects display
appendProjects();
