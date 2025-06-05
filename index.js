const menu = document.getElementById('menu');
const menuContent = document.getElementById('menu-content');

menu.addEventListener('click', () => {
  menu.classList.toggle('show');
  menuContent.classList.toggle('show');
});