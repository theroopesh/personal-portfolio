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

// project gallery
const slider = document.querySelector('.projects-wrapper');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', (_) => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', (_) => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});
