document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const themeText = document.getElementById('theme-text');
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const logoutLink = document.getElementById('logout');

  form.addEventListener('submit', handleFormSubmit);
  form.addEventListener('animationend', resetAnimation);

  if (themeToggle) {
    themeToggle.addEventListener('change', () => applyTheme(themeToggle.checked));
    const savedTheme = localStorage.getItem('theme') === 'dark';
    applyTheme(savedTheme);
    themeToggle.checked = savedTheme;
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => menu.classList.toggle('active'));
  }

  if (logoutLink) {
    logoutLink.addEventListener('click', handleLogout);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    console.log([...formData]); // Log the form data for debugging

    form.classList.add('submitted');
    setTimeout(() => form.classList.remove('submitted'), 2000);
  }

  function resetAnimation() {
    form.style.animation = '';
  }

  function applyTheme(isDark) {
    if (isDark) {
      body.classList.add('dark');
      themeText.textContent = 'Tema Escuro';
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark');
      themeText.textContent = 'Tema Claro';
      localStorage.setItem('theme', 'light');
    }
  }

  function handleLogout(event) {
    event.preventDefault();
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = '../login/index-login.html';
  }
});
