// selectors
const header = document.querySelector('.header');
const projectsSlideshow = document.querySelector('.projects-slideshow');
const mainNavbar = document.querySelector('.main-navbar');
const openMenuButton = document.querySelector('[data-menu-button]');
const closeMenuButton = document.querySelector('[data-close-menu-button]');
const mobileNavbar = document.querySelector('.mobile-navbar-container');

// Event listeners
header.addEventListener('click', (e) => {
  closeMainNavbar();
  closeMobileNavbar();
});

projectsSlideshow.addEventListener('click', (e) => {
  closeMainNavbar();
  closeMobileNavbar();
});

openMenuButton.addEventListener('click', () => {
  showMainNavbar();
  showMobileNavbar();
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
});

closeMenuButton.addEventListener('click', () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  closeMainNavbar();
  closeMobileNavbar();
});

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

//functions
function showMainNavbar() {
  mainNavbar.classList.remove('close');
  mainNavbar.classList.add('open');
}

function showMobileNavbar() {
  mobileNavbar.classList.add('close');
}

function closeMobileNavbar() {
  mobileNavbar.classList.remove('close');
}

function closeMainNavbar() {
  mainNavbar.classList.remove('open');
  mainNavbar.classList.add('close');
}
