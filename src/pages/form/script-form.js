const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Logic to send form data (e.g., using fetch)
  const formData = new FormData(form);
  console.log(formData);

  // Animations
  form.classList.add('submitted');
  setTimeout(() => {
    form.classList.remove('submitted');
  }, 2000);
});

// Animation reset on end
form.addEventListener('animationend', () => {
  form.style.animation = '';
});

form.classList.add('form-animation'); // Initial animation

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeText = document.getElementById('theme-text'); // Adicione esta linha

// Função para aplicar o tema e salvar no localStorage
function applyTheme(isDark) {
  if (isDark) {
    body.classList.add('dark');
    if (themeText) {
      themeText.textContent = 'Tema Escuro';
    }
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    if (themeText) {
      themeText.textContent = 'Tema Claro';
    }
    localStorage.setItem('theme', 'light');
  }
}

// Lê o tema do localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark';
  applyTheme(isDark);
  themeToggle.checked = isDark; // Sincroniza o estado do botão
});

// Alterna o tema ao clicar no botão
themeToggle.addEventListener('change', () => {
  applyTheme(themeToggle.checked);
});

// Menu toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Logout functionality
document.addEventListener('DOMContentLoaded', function() {
  const logoutLink = document.getElementById('logout');
  
  if (logoutLink) {
      logoutLink.addEventListener('click', function(e) {
          e.preventDefault(); // Previne o comportamento padrão do link
          
          // Aqui você pode adicionar qualquer lógica de logout necessária
          // Por exemplo, limpar dados do localStorage
          localStorage.clear();
          
          // Se você estiver usando sessionStorage, você pode limpá-lo também
          sessionStorage.clear();
          
          // Redireciona para a página de login
          window.location.href = '../login/index-login.html';
      });
  }
});
