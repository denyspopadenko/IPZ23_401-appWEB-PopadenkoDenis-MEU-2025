// Масив товарів (тимчасовий, можна розширювати або підвантажувати з бази)
const products = [
  {
    id: 1,
    name: "Рамен Buldak Original (120г)",
    description: "Гостра корейська локшина Buldak Original з насиченим смаком курки та перцю чилі.",
    price: 79,
    image: "../img/prod1.png"
  },
  {
    id: 2,
    name: "Рамен Buldak Carbonara (130г)",
    description: "Ніжний вершковий соус карбонара та фірмова гострота Samyang — ідеальне поєднання!",
    price: 85,
    image: "../img/prod2.png"
  },
  {
    id: 3,
    name: "Рамен Jin Ramen Mild (120г)",
    description: "Класична корейська локшина зі збалансованим м'яким смаком.",
    price: 69,
    image: "../img/prod3.png"
  },
  {
    id: 4,
    name: "Норі чипси з кунжутом (20г)",
    description: "Хрусткі водорості норі, обсмажені з кунжутною олією. Ідеальний перекус!",
    price: 55,
    image: "../img/prod4.png"
  },
  {
    id: 5,
    name: "Соус Kikkoman соєвий (150мл)",
    description: "Натурально зброджений соєвий соус з Японії — класика до будь-якої страви.",
    price: 99,
    image: "../img/prod5.png"
  },
  {
    id: 6,
    name: "Соус Spicy Mayo (250мл)",
    description: "Гострий майонез з нотками чилі — чудово підходить до суші, ролів та бургерів.",
    price: 110,
    image: "../img/prod6.png"
  },
  {
    id: 7,
    name: "Соус Теріякі (200мл)",
    description: "Солодко-солоний японський соус, ідеальний для курки, риби чи овочів.",
    price: 89,
    image: "../img/prod7.png"
  },
  {
    id: 8,
    name: "Рамен Shin Ramyun (120г)",
    description: "Легендарна гостра локшина з глибоким яловичим бульйоном.",
    price: 75,
    image: "../img/prod8.png"
  },
  {
    id: 9,
    name: "Норі Original (10 листів)",
    description: "Класичні сушені водорості для приготування ролів або як снеки.",
    price: 65,
    image: "../img/prod9.png"
  },
  {
    id: 10,
    name: "Соус Чилі солодкий (250мл)",
    description: "Легка гострота й солодкість — чудовий соус до курки або спрінгролів.",
    price: 75,
    image: "../img/prod10.png"
  },
  {
    id: 11,
    name: "Снек з морських водоростей Wasabi (15г)",
    description: "Гострий перекус з норі, що поєднує смак моря та васабі.",
    price: 49,
    image: "../img/prod11.png"
  },
  {
    id: 12,
    name: "Рамен Buldak Cheese (130г)",
    description: "Пікантна локшина з насиченим сирним смаком — ідеальний баланс гостроти.",
    price: 85,
    image: "../img/prod12.png"
  },
  {
    id: 13,
    name: "Соус Унагі (150мл)",
    description: "Традиційний японський соус для вугра та ролів з солодким післясмаком.",
    price: 95,
    image: "../img/prod13.png"
  },
  {
    id: 14,
    name: "Сушені снеки з кальмара (50г)",
    description: "Популярна азійська закуска — ніжний сушений кальмар, трохи солоний і ароматний.",
    price: 99,
    image: "../img/prod14.png"
  },
  {
    id: 15,
    name: "Рамен Samyang Hot Curry (120г)",
    description: "Пекельна локшина з каррі та курячим смаком. Тільки для справжніх фанатів гострого!",
    price: 82,
    image: "../img/prod15.png"
  }
];

// Отримуємо ID товару з URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

// Знаходимо товар
const product = products.find(p => p.id === productId);

// Відображення даних або повідомлення про помилку
if (product) {
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productDescription").textContent = product.description;
  document.getElementById("productPrice").textContent = `₴${product.price}`;
  document.getElementById("productImage").src = product.image;
} else {
  document.getElementById("productContainer").innerHTML = `
    <p class="text-center text-xl text-gray-600 w-full">Товар не знайдено 😢</p>
  `;
}

// Додавання в кошик
document.getElementById("addToCartBtn").addEventListener("click", () => {
  if (!product) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`✅ ${product.name} додано в кошик!`);
});
