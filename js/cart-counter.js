// cart-counter.js
document.addEventListener("DOMContentLoaded", () => {
  const updateCartCounter = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const counter = document.getElementById("cart-counter");
    if (counter) counter.textContent = total;
  };

  updateCartCounter();

  // Якщо хочеш — можна підписатися на події додавання товарів і автоматично оновлювати
  window.addEventListener("storage", updateCartCounter);
});
