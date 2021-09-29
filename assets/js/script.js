const aboutMeNavigationEl = document.querySelector("#about-me-nav");
const projectsNavigationEl = document.querySelector("#projects-nav");
const contactNavigationEl = document.querySelector("#contact-nav");

const aboutMeEl = document.querySelector("#about-me");
const projectsEl = document.querySelector("#projects");

function init() {
  aboutMeNavigationEl.addEventListener("click", handleAboutMeClick);
  projectsNavigationEl.addEventListener("click", handleProjectsClick);
}

function handleAboutMeClick() {
  aboutMeEl.style.display = "block";
  projectsEl.style.display = "none";
}

function handleProjectsClick() {
  aboutMeEl.style.display = "none";
  projectsEl.style.display = "block";
}

init();
