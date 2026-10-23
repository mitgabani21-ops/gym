// js/main.js - Global JavaScript for MG Fitness

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // Active Navigation Highlighting based on filename
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      const pageName = href.split('/').pop();
      if (currentPath.endsWith(pageName) || (pageName === 'index.html' && (currentPath.endsWith('/') || currentPath.endsWith('index.html')))) {
        link.classList.add('active');
      }
    }
  });
});
