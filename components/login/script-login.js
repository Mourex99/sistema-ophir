const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validação dos campos
  if (!usernameInput.value) {
    usernameError.textContent = 'Por favor, preencha o campo de usuário.';
    usernameError.style.display = 'block';
  } else {
    usernameError.style.display = 'none';
  }

  if (!passwordInput.value || passwordInput.value.length < 6) {
    passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
    passwordError.style.display = 'block';
  } else {
    passwordError.style.display = 'none';
  }

  // Se os campos forem válidos, envie os dados para o backend
  if (usernameInput.value && passwordInput.value.length >= 6) {
    // Aqui você faria a requisição para o backend
    // Por enquanto, vamos simular um login bem-sucedido e redirecionar
    alert('Login bem-sucedido!');
    window.location.href = 'https://cadastrodeclienteophir.netlify.app/'; // Substitua por sua página de destino
  }
});