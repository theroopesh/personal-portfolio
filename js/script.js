// selectors
//Mobile menu selectors
const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const menuButton = document.querySelector(".menu-button-black");
const sectionOne = document.querySelector(".intro-section");
const sectionFive = document.querySelector("#section-5");
const header = document.querySelector(".header");
const desktopNav = document.querySelector(".desktop-navbar");
const navHeight = desktopNav.getBoundingClientRect().height;
const banner = document.querySelector(".banner");
const bannerHeight = banner.getBoundingClientRect().height;
const navLinks = document.querySelector(".nav-links");
const navLinksMobile = document.querySelector(".nav-links-mobile");
const buttonPrimary = document.querySelector(".btn-primary");
const buttonSecondary = document.querySelector("#btn-secondary");
const buttonTertiary = document.querySelector(".btn-tertiary");
const buttonHire = document.querySelector(".btn-hire");

// Event listeners
menuButton.addEventListener("click", (e) => {
  mobileMenuContainer.classList.toggle("open");
});

// smooth scrolling desktop

buttonPrimary.addEventListener("click", (e) => {
  e.preventDefault();
  sectionFive.scrollIntoView({ behavior: "smooth" });
});

buttonSecondary.addEventListener("click", (e) => {
  e.preventDefault();
  sectionFive.scrollIntoView({ behavior: "smooth" });
});

buttonTertiary.addEventListener("click", (e) => {
  e.preventDefault();
  sectionFive.scrollIntoView({ behavior: "smooth" });
});

buttonHire.addEventListener("click", (e) => {
  e.preventDefault();
  sectionFive.scrollIntoView({ behavior: "smooth" });
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
      return;
    }
    document.querySelector(id).scrollIntoView(options);
  }
});

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
      return;
    }
    document.querySelector(id).scrollIntoView(options);
  }
});
