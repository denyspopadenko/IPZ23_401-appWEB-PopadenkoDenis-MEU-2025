document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Локшина Buldak Carbonara", category: "ramen", price: 95, image: "../img/prod1.png" },
    { id: 2, name: "Локшина Shin Ramyun", category: "ramen", price: 90, image: "../img/prod2.png" },
    { id: 3, name: "Чіпси з норі Tao Kae Noi", category: "snack", price: 75, image: "../img/prod3.png" },
    { id: 4, name: "Кукурудзяні снеки Corn Hot & Spicy", category: "snack", price: 65, image: "../img/prod4.png" },
    { id: 5, name: "Соус Kikkoman Соєвий", category: "sauce", price: 120, image: "../img/prod5.png" },
    { id: 6, name: "Соус Sriracha Чилі", category: "sauce", price: 150, image: "../img/prod6.png" },
    { id: 7, name: "Напій Milkis Оригінал", category: "drink", price: 60, image: "../img/prod7.png" },
    { id: 8, name: "Напій Chupa Chups Кавун", category: "drink", price: 55, image: "../img/prod8.png" },
    { id: 9, name: "Печиво Pepero Almond", category: "sweet", price: 110, image: "../img/prod9.png" },
    { id: 10, name: "Шоколад Meiji Milk", category: "sweet", price: 130, image: "../img/prod10.png" },
    { id: 11, name: "Buldak Jjajang Black", category: "ramen", price: 100, image: "../img/prod11.png" },
    { id: 12, name: "Палички Pocky Strawberry", category: "sweet", price: 115, image: "../img/prod12.png" },
    { id: 13, name: "Соус Kewpie Майонез", category: "sauce", price: 140, image: "../img/prod13.png" },
    { id: 14, name: "Снеки з кальмара Oishi", category: "snack", price: 85, image: "../img/prod14.png" },
    { id: 15, name: "Buldak Cheese Ramen", category: "ramen", price: 105, image: "../img/prod15.png" },
  ];

  const productsContainer = document.getElementById("productsContainer");
  const categoryFilter = document.getElementById("categoryFilter");
  const priceFilter = document.getElementById("priceFilter");
  const sortFilter = document.getElementById("sortFilter");
  const searchInput = document.getElementById("searchInput");

  function renderProducts(filteredProducts) {
    productsContainer.innerHTML = "";
    filteredProducts.forEach(product => {
      const card = document.createElement("div");
      card.className = "bg-white shadow-md rounded-xl p-4 flex flex-col justify-between transition hover:shadow-lg";

      card.innerHTML = `
        <div class="relative h-40 overflow-hidden rounded-lg group">
          <img src="${product.image}" alt="${product.name}" class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110">
        </div>
        <h3 class="font-semibold text-lg mt-3">${product.name}</h3>
        <p class="text-brand-red font-bold text-xl mb-3">${product.price} ₴</p>
        <button 
          data-id="${product.id}" 
          class="add-to-cart bg-brand-pink text-white py-2 rounded-lg hover:bg-brand-pink-dark transition">
          🛒 Додати в кошик
        </button>
      `;

      productsContainer.appendChild(card);
    });
  }

  renderProducts(products);

  function applyFilters() {
    let filtered = [...products];
    const category = categoryFilter.value;
    const price = priceFilter.value;
    const sort = sortFilter.value;
    const search = searchInput.value.toLowerCase();

    if (category !== "all") filtered = filtered.filter(p => p.category === category);
    if (price !== "all") {
      filtered = filtered.filter(p => {
        if (price === "low") return p.price < 100;
        if (price === "medium") return p.price >= 100 && p.price <= 180;
        if (price === "high") return p.price > 180;
      });
    }
    if (search) filtered = filtered.filter(p => p.name.toLowerCase().includes(search));
    if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);

    renderProducts(filtered);
  }

  [categoryFilter, priceFilter, sortFilter, searchInput].forEach(el => el.addEventListener("input", applyFilters));

  const updateCartCounter = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const counter = document.getElementById("cart-counter");
    if (counter) counter.textContent = total;
  };

  updateCartCounter();

  productsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      const id = parseInt(e.target.dataset.id);
      const product = products.find(p => p.id === id);
      if (!product) return;

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existing = cart.find(p => p.id === product.id);

      if (existing) existing.quantity += 1;
      else cart.push({ ...product, quantity: 1 });

      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCounter();

      e.target.textContent = "✅ Додано!";
      e.target.disabled = true;
      setTimeout(() => {
        e.target.textContent = "🛒 Додати в кошик";
        e.target.disabled = false;
      }, 1000);
    }
  });
});
