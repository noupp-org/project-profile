// script.js

// Fungsi untuk toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Fungsi untuk toggle menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

