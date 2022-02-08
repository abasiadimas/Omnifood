// Auto-Update the year
const yearUpdate = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearUpdate.textContent = currentYear;

// Hamburger button
const btnNav = document.querySelector(".btn-mobile-nav");
const headerNav = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  headerNav.classList.toggle("nav-open");
});
