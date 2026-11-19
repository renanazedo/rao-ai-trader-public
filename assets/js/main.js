const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
const currentYear = document.querySelector('#current-year');
const menuLabel = menuButton?.querySelector('.sr-only');

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuLabel.textContent = 'Abrir menu';
    navigation.classList.remove('is-open');
  };

  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    menuLabel.textContent = isExpanded ? 'Abrir menu' : 'Fechar menu';
    navigation.classList.toggle('is-open', !isExpanded);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target) && !menuButton.contains(event.target)) {
      closeMenu();
    }
  });
}
