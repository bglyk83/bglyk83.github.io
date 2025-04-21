const categories = document.querySelector(".categories");
const projectsContainer = document.querySelector(".projects");
const projects = document.querySelectorAll(".project");

categories.addEventListener("click", (e) => {
  const filter = e.target.dataset.category;
  //   console.log(filter);
  //   console.log(e.target);
  if (filter == null) {
    return;
  }
  activeSelection(e.target);
  filterProjects(filter);
});

function activeSelection(target) {
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  target.classList.add("category--selected");
}

function filterProjects(filter) {
  projects.forEach((projects) => {
    if (filter == "all" || filter == projects.dataset.type) {
      projects.style.display = "block";
    } else {
      projects.style.display = "none";
    }
  });

  projectsContainer.classList.add("anim-out");
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 500);
}
