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

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.add('dark');
    // Check if themeText exists before modifying it
    if (themeText) {
      themeText.textContent = 'Tema Escuro';
    }
  } else {
    body.classList.remove('dark');
    if (themeText) {
      themeText.textContent = 'Tema Claro';
    }
  }
});
