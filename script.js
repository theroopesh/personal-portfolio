// selectors

const mobileMenuContainer = document.querySelector('.mobile-menu-container');
const menuButton = document.querySelector('.menu-button-black');

// Event listeners
menuButton.addEventListener('click', (e) => {
  mobileMenuContainer.classList.toggle('open');
});
