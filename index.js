const body = document.body;
const burgerBtn = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const sideMenu = document.querySelector('.side-menu');
const closeBtn = sideMenu.querySelector('.side-menu__close-btn');
const menuItems = sideMenu.querySelectorAll('li');

function toggleMenu() {
  overlay.classList.toggle('overlay_active');
  sideMenu.classList.toggle('side-menu_open');
  body.classList.toggle('no-scroll');
}

burgerBtn.addEventListener('click', () => {
  toggleMenu();
});

overlay.addEventListener('click', () => {
  toggleMenu();
});

closeBtn.addEventListener('click', () => {
  toggleMenu();
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    toggleMenu();
  });
});
