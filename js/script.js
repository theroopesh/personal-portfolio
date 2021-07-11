// selectors
//Mobile menu selectors
const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const menuButton = document.querySelector(".menu-button-black");
const sectionOne = document.querySelector(".intro-section");
const sectionFive = document.querySelector("#section-5");
const header = document.querySelector(".header");
const desktopNav = document.querySelector(".desktop-navbar");
const navHeight = desktopNav.getBoundingClientRect().height;
// const banner = document.querySelector(".banner");
// const bannerHeight = banner.getBoundingClientRect().height;
const navLinks = document.querySelector(".nav-links");
const navLinksMobile = document.querySelector(".nav-links-mobile");
const nameInput = document.querySelector("#name");
// const tipContainer = document.querySelector(".tip-container");
// const tipCloseBtn = document.querySelector(".tip-cancel-button");

// setTimeout(() => {
//   tipContainer.classList.toggle("open");
// }, 3000);

// tipCloseBtn.addEventListener("click", (e) => {
//   tipContainer.classList.toggle("open");
// });

// Event listeners
menuButton.addEventListener("click", (e) => {
  mobileMenuContainer.classList.toggle("open");
});

// smooth scrolling desktop
// for multiple buttons to the section-5
document.querySelectorAll(".scroll-to-section-5").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    sectionFive.scrollIntoView({ behavior: "smooth" });
    focusNameInput();
  });
});

navLinks.addEventListener("click", (e) => {
  e.preventDefault();
  // Matching Strategy
  const options = {
    behavior: "smooth",
  };
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    if (!id) {
      location.href = "index.html";
    } else if (id === "#section-5") {
      document.querySelector(id).scrollIntoView(options);
      focusNameInput();
    } else {
      document.querySelector(id).scrollIntoView(options);
    }
  }
});

// helper functions
function focusNameInput() {
  setTimeout(() => {
    nameInput.focus();
  }, 1100);
}

function closeMenu() {
  mobileMenuContainer.classList.toggle("open");
}

// smooth scrolling mobile
navLinksMobile.addEventListener("click", (e) => {
  e.preventDefault();

  // Matching Strategy
  const options = {
    behavior: "smooth",
  };

  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    if (!id) {
      location.href = "index.html";
    } else if (id === "#section-5") {
      document.querySelector(id).scrollIntoView(options);
      focusNameInput();
      closeMenu();
    } else {
      document.querySelector(id).scrollIntoView(options);
      closeMenu();
    }
  }
});
