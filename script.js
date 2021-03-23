// selectors
const header = document.querySelector('.header');
const projectsSlideshow = document.querySelector('.projects-slideshow');
const mainNavbar = document.querySelector('.main-navbar');
const openMenuButton = document.querySelector('[data-menu-button]');
const closeMenuButton = document.querySelector('[data-close-menu-button]');
const mobileNavbar = document.querySelector('.mobile-navbar-container');

init();

// Event listeners
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

function init() {
  mainNavbar.style.display = 'none';
}

function showMainNavbar() {
  mainNavbar.style.display = 'block';
  mainNavbar.classList.remove('close');
  mainNavbar.classList.add('open');
}

function closeMainNavbar() {
  mainNavbar.classList.remove('open');
  mainNavbar.classList.add('close');
  mainNavbar.style.display = 'none';
}

function showMobileNavbar() {
  mobileNavbar.classList.add('close');
}

function closeMobileNavbar() {
  mobileNavbar.classList.remove('close');
}

// const slide = document.querySelector('.slide');

// var i = 0; // Start Point
// var images = []; // Images Array
// var time = 5000; // Time Between Switch

// // Image List
// images[0] = 'img/ss-bankist-1.jpg';
// images[1] = 'img/ss-todo-list.jpg';

// // Change Image
// function changeImg() {
//   slide.src = images[i];

//   // Check If Index Is Under Max
//   if (i < images.length - 1) {
//     // Add 1 to Index
//     i++;
//   } else {
//     // Reset Back To O
//     i = 0;
//   }

//   // Run function every x seconds
//   setTimeout('changeImg()', time);
// }

// // Run function when page loads
// window.onload = changeImg();
