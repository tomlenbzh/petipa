const topSection = document.getElementById('top');
const projectSection = document.getElementById('project');
const aboutMeSection = document.getElementById('aboutMe');
const ourFeesSection = document.getElementById('ourFees');
const sourcesSection = document.getElementById('sources');
const pendingSection = document.getElementById('pending');
const testimoniesSection = document.getElementById('testimonies');
const contactMeSection = document.getElementById('contactMe');
const dropdownContainer = document.getElementById('dropdown-container');
const headerOffset = 150;

dropdownContainer.style.display = 'none';

function navigateToTop() {
  zenscroll.setup(500, 0);
  zenscroll.to(topSection);
}

function navigateToProject(closeMenu) {
  zenscroll.setup(500, 150);
  zenscroll.to(projectSection);
  if (closeMenu === true) {
    toggleMenu();
  }
}

function navigateToAboutMe(closeMenu) {
  zenscroll.setup(500, 150);
  zenscroll.to(aboutMeSection);
  if (closeMenu) {
    toggleMenu();
  }
}

function navigateToOurFees(closeMenu) {
  zenscroll.setup(500, 150);
  zenscroll.to(ourFeesSection);
  if (closeMenu) {
    toggleMenu();
  }
}

function navigateToSources(closeMenu) {
  zenscroll.setup(500, 150);
  zenscroll.to(sourcesSection);
  if (closeMenu) {
    toggleMenu();
  }
}

function navigateToPending(closeMenu) {
  zenscroll.setup(500, 150);
  zenscroll.to(pendingSection);
  if (closeMenu) {
    toggleMenu();
  }
}

function navigateToTestimonies(closeMenu) {
  zenscroll.setup(500, 150);
  zenscroll.to(testimoniesSection);
  if (closeMenu) {
    toggleMenu();
  }
}

function navigateToContactMe(closeMenu) {
  zenscroll.setup(500, 150);
  zenscroll.to(contactMeSection);
  if (closeMenu) {
    toggleMenu();
  }
}

function toggleMenu() {
  dropdownContainer.style.display = dropdownContainer.style.display === 'block' ? 'none' : 'block';
}