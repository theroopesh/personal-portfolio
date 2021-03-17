// selectors
const mainNavbar = document.querySelector('.main-navbar');
const openMenuButton = document.querySelector('[data-menu-button]');
const closeMenuButton = document.querySelector('[data-close-menu-button]');
const mobileNavbar = document.querySelector('.mobile-navbar-container');

// Event listeners
openMenuButton.addEventListener('click', () => {
  showMainNavbar();
  mobileNavbar.classList.add('close');
});

closeMenuButton.addEventListener('click', () => {
  closeMainNavbar();
  mobileNavbar.classList.remove('close');
});

//functions
function showMainNavbar() {
  mainNavbar.classList.remove('close');
  mainNavbar.classList.add('open');
}

function closeMainNavbar() {
  mainNavbar.classList.remove('open');
  mainNavbar.classList.add('close');
}
