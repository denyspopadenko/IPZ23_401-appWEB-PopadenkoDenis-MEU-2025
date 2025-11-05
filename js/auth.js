const form = document.getElementById('loginForm');
const registerLink = document.getElementById('registerLink');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.email.value.trim();
  const password = form.password.value.trim();

  if (email === "test@gmail.com" && password === "123456") {
    localStorage.setItem('user', JSON.stringify({ email }));
    alert("Вхід успішний!");
    window.location.href = "index.html";
  } else {
    alert("Невірна пошта або пароль!");
  }
});

registerLink.addEventListener('click', () => {
  const newEmail = prompt("Введіть вашу пошту:");
  const newPassword = prompt("Створіть пароль:");
  if (newEmail && newPassword) {
    localStorage.setItem('user', JSON.stringify({ email: newEmail, password: newPassword }));
    alert("Реєстрація успішна! Тепер увійдіть.");
  }
});
