// selectors
const header = document.querySelector('.header');
const projectsSlideshow = document.querySelector('.projects-slideshow');
const mainNavbar = document.querySelector('.main-navbar');
const openMenuButton = document.querySelector('[data-menu-button]');
const closeMenuButton = document.querySelector('[data-close-menu-button]');
const mobileNavbar = document.querySelector('.mobile-navbar-container');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');
const menuButton = document.querySelector('.menu-button-black');

// Event listeners
menuButton.addEventListener('click', (e) => {
  mobileMenuContainer.classList.toggle('open');
});
