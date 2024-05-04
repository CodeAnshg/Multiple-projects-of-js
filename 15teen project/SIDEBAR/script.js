const hamburger = document.querySelector('.burger');
const sidePanel = document.querySelector('.sidebar');
const navbarItems = document.querySelectorAll('.nav-links li');
const sidebarItems = document.querySelectorAll('.sidebar-links li');

hamburger.addEventListener('click', () => {
  sidePanel.classList.toggle('open');
  navItems.forEach(item => {
    item.classList.toggle('hidden');
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    navbarItems.forEach(item => {
      item.classList.add('hidden');
    });
  } else {
    navbarItems.forEach(item => {
      item.classList.remove('hidden');
    });
  }
});

window.addEventListener('load', () => {
  if (window.innerWidth <= 768) {
    navbarItems.forEach(item => {
      item.classList.add('hidden');
    });
  }
});

sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
    sidePanel.classList.remove('open');
    navbarItems.forEach(item => {
      item.classList.remove('hidden');
    });
  });
});