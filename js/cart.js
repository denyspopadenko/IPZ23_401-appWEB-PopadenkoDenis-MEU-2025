document.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const emptyCart = document.getElementById("emptyCart");
  const clearCartBtn = document.getElementById("clearCart");
  const cartCounter = document.getElementById("cart-counter");
  const checkoutBtn = document.getElementById("checkoutBtn");

  // Оновлення лічильника у шапці
  function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCounter) cartCounter.textContent = totalItems;
  }

  // Рендер рядків кошика
  function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.innerHTML = "";

    if (cart.length === 0) {
      emptyCart.classList.remove("hidden");
      cartTotal.textContent = "0 ₴";
      updateCartCounter();
      return;
    }

    emptyCart.classList.add("hidden");

    let total = 0;

    cart.forEach(item => {
      total += item.price * item.quantity;

      const row = document.createElement("div");
      row.className = "flex items-center justify-between border-b pb-3";

      row.innerHTML = `
        <div class="flex items-center space-x-4">
          <img src="${item.image}" alt="${item.name}" class="h-16 w-16 rounded-lg object-cover">
          <div>
            <h4 class="font-semibold">${item.name}</h4>
            <p class="text-gray-500">${item.price} ₴</p>
          </div>
        </div>

        <div class="flex items-center space-x-3">
          <button class="decrease px-3 py-1 rounded bg-gray-100" data-id="${item.id}">−</button>
          <span class="font-semibold">${item.quantity}</span>
          <button class="increase px-3 py-1 rounded bg-gray-100" data-id="${item.id}">+</button>
          <button class="remove text-red-500 ml-4" data-id="${item.id}" title="Видалити товар">✖</button>
        </div>
      `;

      cartItems.appendChild(row);
    });

    cartTotal.textContent = `${total} ₴`;
    updateCartCounter();
  }

  // Обробник кліків всередині cartItems (делегування)
  cartItems.addEventListener("click", (e) => {
    const idStr = e.target.dataset.id;
    if (!idStr) return;
    const id = parseInt(idStr, 10);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const idx = cart.findIndex(p => p.id === id);
    if (idx === -1) return;

    if (e.target.classList.contains("increase")) {
      cart[idx].quantity += 1;
    } else if (e.target.classList.contains("decrease")) {
      cart[idx].quantity -= 1;
      if (cart[idx].quantity <= 0) {
        cart.splice(idx, 1);
      }
    } else if (e.target.classList.contains("remove")) {
      cart.splice(idx, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  });

  // Очистити весь кошик
  clearCartBtn.addEventListener("click", () => {
    localStorage.removeItem("cart");
    renderCart();
  });

  // Оформлення замовлення — перенаправлення на checkout.html з простим перевірянням
  checkoutBtn.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      alert("Ваш кошик порожній — додайте товари перед оформленням.");
      return;
    }
    // можна зберегти підготовлений замовлення в localStorage перед переходом
    localStorage.setItem("orderDraft", JSON.stringify({ cart, createdAt: Date.now() }));
    window.location.href = "checkout.html";
  });

  // Ініціалізація
  renderCart();
});
