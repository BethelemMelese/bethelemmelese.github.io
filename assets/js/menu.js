const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const main=document.querySelectorAll(".main-container");
const navLink = document.querySelectorAll(".nav-link");


hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  // this function will add active class for both hamburger and nav-menu classes, which makes our mobile menu open
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
