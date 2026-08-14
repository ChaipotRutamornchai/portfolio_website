// Shared mobile nav-menu toggle. Every page has the same
// #menu-toggle / #mobile-menu / #menu-icon structure, so this one
// script drives all of them.
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menuPanel = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  if (!menuToggle || !menuPanel) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = menuPanel.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (menuIcon) menuIcon.textContent = isOpen ? 'close' : 'menu';
  });

  menuPanel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuPanel.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      if (menuIcon) menuIcon.textContent = 'menu';
    });
  });
});
