const mobileMenuContainer = document.querySelector('.mobile-menu-container');
const menuButton = document.querySelector('.menu-button-black');
const profileImg = document.querySelector('.desktop-credential-profile-pic');
const navName = document.querySelector('.desktop-credential-text');
// Event listeners
menuButton.addEventListener('click', (e) => {
  mobileMenuContainer.classList.toggle('open');
});

profileImg.addEventListener('click', redirectToHome);
navName.addEventListener('click', redirectToHome);

function redirectToHome() {
  location.href = '/personal-portfolio';
}
