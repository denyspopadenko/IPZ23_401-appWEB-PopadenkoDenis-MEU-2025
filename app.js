// === 1. MOCK DATA (Імітація бази даних) ===
        
const appData = {
    categories: [
        { id: 'ramen', name: 'Локшина та Рамен', img: 'https://placehold.co/200x200/E53E3E/FFFFFF?text=Рамен&font=nunito' },
        { id: 'sauces', name: 'Соуси та Спеції', img: 'https://placehold.co/200x200/ED8936/FFFFFF?text=Соуси&font=nunito' },
        { id: 'sweets', name: 'Солодощі', img: 'https://placehold.co/200x200/EC4899/FFFFFF?text=Моті&font=nunito' },
        { id: 'drinks', name: 'Напої', img: 'https://placehold.co/200x200/3B82F6/FFFFFF?text=Напої&font=nunito' },
        { id: 'snacks', name: 'Снеки', img: 'https://placehold.co/200x200/10B981/FFFFFF?text=Снеки&font=nunito' },
        { id: 'sushi', name: 'Все для суші', img: 'https://placehold.co/200x200/6B7280/FFFFFF?text=Суші&font=nunito' }
    ],
    products: [
        // Ramen
        { id: 1, name: 'Samyang Buldak (Hot Chicken)', category: 'ramen', price: 150, rating: 5, isNew: true, isPopular: true, img: 'https://placehold.co/300x300/E53E3E/FFFFFF?text=Samyang+Buldak', 
          description: 'Легендарна супер-гостра локшина зі смаком курки. Справжній виклик для ваших рецепторів. Виробник: Samyang, Південна Корея.',
          specs: { weight: '140г', calories: '530 ккал', country: 'Південна Корея', spiciness: 'Дуже гострий' }
        },
        { id: 2, name: 'Nongshim Shin Ramyun', category: 'ramen', price: 120, rating: 4, isNew: false, isPopular: true, img: 'https://placehold.co/300x300/E53E3E/FFFFFF?text=Shin+Ramyun',
          description: 'Класичний корейський рамен з насиченим грибним та яловичим бульйоном. Помірно гострий.',
          specs: { weight: '120г', calories: '500 ккал', country: 'Південна Корея', spiciness: 'Гострий' }
        },
        { id: 10, name: 'Jin Ramen (Mild)', category: 'ramen', price: 110, rating: 4, isNew: false, isPopular: false, img: 'https://placehold.co/300x300/F59E0B/FFFFFF?text=Jin+Ramen+Mild',
          description: 'М\'який та ароматний рамен, ідеально підходить для тих, хто не любить занадто гостре.',
          specs: { weight: '120г', calories: '480 ккал', country: 'Південна Корея', spiciness: 'Легкий' }
        },
        
        // Sauces
        { id: 3, name: 'Соус Kikkoman (Класичний)', category: 'sauces', price: 250, rating: 5, isNew: false, isPopular: true, img: 'https://placehold.co/300x300/ED8936/FFFFFF?text=Kikkoman',
          description: 'Натурально зварений соєвий соус. Універсальний помічник на вашій кухні.',
          specs: { volume: '500мл', country: 'Японія', type: 'Соєвий соус' }
        },
        { id: 4, name: 'Соус Sriracha (Huy Fong)', category: 'sauces', price: 180, rating: 5, isNew: false, isPopular: true, img: 'https://placehold.co/300x300/ED8936/FFFFFF?text=Sriracha',
          description: 'Знаменитий гострий чилі-соус "Шрірача" з часником. Ідеально до м\'яса, локшини та рису.',
          specs: { volume: '480г', country: 'США (за тайським рецептом)', spiciness: 'Гострий' }
        },
        
        // Sweets
        { id: 5, name: 'Mochi (Daifuku) Асорті', category: 'sweets', price: 190, rating: 4, isNew: true, isPopular: false, img: 'https://placehold.co/300x300/EC4899/FFFFFF?text=Mochi+Assorti',
          description: 'Традиційні японські тістечка з рисового тіста з різноманітними начинками (анко, полуниця, зелений чай).',
          specs: { weight: '200г', country: 'Японія', type: 'Десерт' }
        },
        { id: 6, name: 'Печиво Pepero (Original)', category: 'sweets', price: 70, rating: 5, isNew: false, isPopular: true, img: 'https://placehold.co/300x300/EC4899/FFFFFF?text=Pepero',
          description: 'Хрусткі палички, вкриті молочним шоколадом. Улюблений смаколик у Кореї.',
          specs: { weight: '47г', country: 'Південна Корея', type: 'Печиво' }
        },

        // Drinks
        { id: 7, name: 'Напій Ramune (Класичний)', category: 'drinks', price: 90, rating: 4, isNew: true, isPopular: false, img: 'https://placehold.co/300x300/3B82F6/FFFFFF?text=Ramune',
          description: 'Японський лимонад з унікальною скляною кулькою всередині пляшки. Смак дитинства.',
          specs: { volume: '200мл', country: 'Японія', type: 'Газований напій' }
        },
        
        // Snacks
        { id: 8, name: 'Чіпси норі (TaoKaeNoi)', category: 'snacks', price: 60, rating: 5, isNew: false, isPopular: true, img: 'https://placehold.co/300x300/10B981/FFFFFF?text=Nori+Chips',
          description: 'Хрусткі смажені листи водоростей норі з сіллю. Корисний та смачний снек.',
          specs: { weight: '32г', country: 'Таїланд', type: 'Снек' }
        },
        
        // Sushi
        { id: 9, name: 'Набір для суші (Базовий)', category: 'sushi', price: 450, rating: 4, isNew: false, isPopular: false, img: 'https://placehold.co/300x300/6B7280/FFFFFF?text=Sushi+Kit',
          description: 'Все необхідне для приготування ролів вдома: рис, норі, оцет, васабі, імбир та килимок (макісу).',
          specs: { type: 'Набір', country: 'Збірний' }
        },
    ]
};

// === 2. STATE (Стан додатку) ===

const appState = {
    currentPage: 'home', // home, catalog, product, cart
    currentProduct: null, // id
    currentCategory: 'all', // id
    cart: [], // { productId: 1, quantity: 1 }
};

// === 3. UI ELEMENTS (Елементи DOM) ===

const ui = {
    pages: document.querySelectorAll('.page'),
    cartCounter: document.getElementById('cart-counter'),
    cartCounterMobile: document.getElementById('cart-counter-mobile'),
    
    // Home
    homeCategories: document.getElementById('home-categories'),
    popularProducts: document.getElementById('popular-products'),
    newProducts: document.getElementById('new-products'),
    
    // Catalog
    catalogTitle: document.getElementById('catalog-title'),
    catalogGrid: document.getElementById('catalog-grid'),
    filtersCategories: document.getElementById('filters-categories'),
    
    // Product
    productBreadcrumbs: document.getElementById('product-breadcrumbs'),
    productImage: document.getElementById('product-image'),
    productName: document.getElementById('product-name'),
    productRatingStars: document.getElementById('product-rating-stars'),
    productReviewsCount: document.getElementById('product-reviews-count'),
    productPrice: document.getElementById('product-price'),
    productShortDescription: document.getElementById('product-short-description'),
    productPageQuantity: document.getElementById('product-page-quantity'),
    productAddToCartBtn: document.getElementById('product-add-to-cart-btn'),
    productTabs: document.getElementById('product-tabs'),
    productTabContents: document.querySelectorAll('.product-tab-content'),
    tabDescription: document.getElementById('tab-description'),
    tabSpecs: document.getElementById('tab-specs'),
    
    // Cart
    cartEmpty: document.getElementById('cart-empty'),
    cartContent: document.getElementById('cart-content'),
    cartItemsList: document.getElementById('cart-items-list'),
    cartSubtotal: document.getElementById('cart-subtotal'),
    cartTotal: document.getElementById('cart-total'),

    // Mobile Menu
    mobileMenuButton: document.getElementById('mobile-menu-button'),
    mobileMenu: document.getElementById('mobile-menu'),
};

// === 4. RENDER FUNCTIONS (Функції відображення) ===

// Створення HTML для картки товару
function createProductCard(product) {
    const { id, name, price, rating, img, isNew } = product;
    
    // Генерація зірок
    let stars = '';
    for(let i = 0; i < 5; i++) {
        stars += `<svg class="h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>`;
    }

    return `
        <div class="slider-item w-64 md:w-72 flex-shrink-0 bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <a href="#" class="block" onclick="navigateTo('product', { productId: ${id} })">
                ${isNew ? '<span class="absolute top-2 left-2 bg-brand-pink text-white text-xs font-bold px-3 py-1 rounded-full z-10">New</span>' : ''}
                <img src="${img}" alt="${name}" class="w-full h-48 object-cover">
            </a>
            <div class="p-4">
                <h4 class="text-lg font-bold truncate">${name}</h4>
                <div class="flex items-center my-2">
                    ${stars}
                    <span class="text-gray-500 text-sm ml-1">(${rating}.0)</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-xl font-bold text-brand-red">${price} ₴</span>
                    <button class="bg-brand-red text-white rounded-full p-2 hover:bg-red-700 transition duration-300" onclick="addToCart(${id})">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Відображення Головної сторінки
function renderHomePage() {
    // Категорії
    ui.homeCategories.innerHTML = appData.categories.map(cat => `
        <a href="#" class="block bg-white p-4 rounded-2xl shadow-md text-center transform transition duration-300 hover:shadow-lg hover:scale-105" onclick="navigateTo('catalog', { categoryId: '${cat.id}' })">
            <img src="${cat.img}" alt="${cat.name}" class="w-24 h-24 mx-auto rounded-full mb-2">
            <h4 class="font-bold">${cat.name}</h4>
        </a>
    `).join('');
    
    // Популярні
    ui.popularProducts.innerHTML = appData.products
        .filter(p => p.isPopular)
        .map(createProductCard)
        .join('');
        
    // Новинки
    ui.newProducts.innerHTML = appData.products
        .filter(p => p.isNew)
        .map(createProductCard)
        .join('');
}

// Відображення сторінки Каталогу
function renderCatalogPage(categoryId) {
    appState.currentCategory = categoryId;
    const category = appData.categories.find(c => c.id === categoryId);
    
    // Заголовок
    ui.catalogTitle.textContent = categoryId === 'all' ? 'Весь Каталог' : category.name;
    
    // Фільтр категорій
    ui.filtersCategories.innerHTML = `
        <label class="flex items-center">
            <input type="radio" name="category-filter" class="form-radio text-brand-red mr-2" ${categoryId === 'all' ? 'checked' : ''} onclick="navigateTo('catalog', { categoryId: 'all' })">
            Всі категорії
        </label>
        ` + appData.categories.map(cat => `
        <label class="flex items-center">
            <input type="radio" name="category-filter" class="form-radio text-brand-red mr-2" ${categoryId === cat.id ? 'checked' : ''} onclick="navigateTo('catalog', { categoryId: '${cat.id}' })">
            ${cat.name}
        </label>
    `).join('');

    // Сітка товарів
    const productsToShow = categoryId === 'all' 
        ? appData.products 
        : appData.products.filter(p => p.category === categoryId);
        
    ui.catalogGrid.innerHTML = productsToShow.map(createProductCard).join('');
}

// Відображення сторінки Товару
function renderProductPage(productId) {
    const product = appData.products.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found!');
        navigateTo('home');
        return;
    }
    appState.currentProduct = product;
    
    const category = appData.categories.find(c => c.id === product.category);
    
    // Хлібні крихти
    ui.productBreadcrumbs.innerHTML = `
        <a href="#" class="hover:text-brand-red" onclick="navigateTo('home')">Головна</a> &gt; 
        <a href="#" class="hover:text-brand-red" onclick="navigateTo('catalog', { categoryId: '${category.id}' })">${category.name}</a> &gt; 
        <span class="text-gray-800">${product.name}</span>
    `;
    
    // Основна інфо
    ui.productImage.src = product.img;
    ui.productImage.alt = product.name;
    ui.productName.textContent = product.name;
    ui.productPrice.textContent = `${product.price} ₴`;
    ui.productShortDescription.textContent = product.description.split('.')[0] + '.';
    ui.productPageQuantity.textContent = '1';
    
    // Рейтинг
    let stars = '';
    for(let i = 0; i < 5; i++) {
        stars += `<svg class="h-6 w-6 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>`;
    }
    ui.productRatingStars.innerHTML = stars;
    ui.productReviewsCount.textContent = `(${product.rating}.0) 2 відгуки`; // Mock
    
    // Таби
    ui.tabDescription.innerHTML = `<p>${product.description}</p>`;
    ui.tabSpecs.innerHTML = Object.entries(product.specs).map(([key, value]) => `
        <div class="flex justify-between border-b border-gray-200 py-2">
            <span class="font-semibold text-gray-600">${key.charAt(0).toUpperCase() + key.slice(1)}:</span>
            <span class="font-bold">${value}</span>
        </div>
    `).join('');

    // Обробник кнопки "Додати в кошик"
    ui.productAddToCartBtn.onclick = () => {
        const quantity = parseInt(ui.productPageQuantity.textContent);
        addToCart(product.id, quantity);
    };
    
    // Скидання табів
    switchTab('description');
}

// Відображення Кошика
function renderCartPage() {
    if (appState.cart.length === 0) {
        ui.cartEmpty.style.display = 'block';
        ui.cartContent.style.display = 'none';
    } else {
        ui.cartEmpty.style.display = 'none';
        ui.cartContent.style.display = 'flex';
        
        ui.cartItemsList.innerHTML = appState.cart.map(cartItem => {
            const product = appData.products.find(p => p.id === cartItem.productId);
            return `
                <div class="flex items-center bg-white p-4 rounded-2xl shadow-md gap-4">
                    <img src="${product.img}" alt="${product.name}" class="w-24 h-24 rounded-lg object-cover">
                    <div class="flex-grow">
                        <h4 class="text-lg font-bold">${product.name}</h4>
                        <p class="text-sm text-gray-600">${product.specs.weight || product.specs.volume}</p>
                        <span class="text-lg font-bold text-brand-red mt-1 block">${product.price} ₴</span>
                    </div>
                    <div class="flex items-center border border-gray-300 rounded-full">
                        <button class="px-3 py-1 text-lg font-bold" onclick="updateCartQuantity(${product.id}, -1)">-</button>
                        <span class="px-3 py-1 text-lg font-bold">${cartItem.quantity}</span>
                        <button class="px-3 py-1 text-lg font-bold" onclick="updateCartQuantity(${product.id}, 1)">+</button>
                    </div>
                    <span class="text-xl font-bold w-24 text-right">
                        ${product.price * cartItem.quantity} ₴
                    </span>
                    <button class="text-gray-400 hover:text-red-500" onclick="removeFromCart(${product.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            `;
        }).join('');
    }
    updateCartSummary();
}

// === 5. LOGIC (Функції логіки) ===

// Навігація
function navigateTo(page, params = {}) {
    appState.currentPage = page;
    ui.pages.forEach(p => p.classList.remove('active'));
    
    document.getElementById(`page-${page}`).classList.add('active');
    
    // Запуск рендеру для конкретної сторінки
    switch(page) {
        case 'home':
            renderHomePage();
            break;
        case 'catalog':
            renderCatalogPage(params.categoryId || 'all');
            break;
        case 'product':
            renderProductPage(params.productId);
            break;
        case 'cart':
            renderCartPage();
            break;
    }
    
    // Сховати мобільне меню при навігації
    ui.mobileMenu.classList.add('hidden');
    window.scrollTo(0, 0); // Прокрутка вгору
}

// --- Логіка Кошика ---

function addToCart(productId, quantity = 1) {
    const existingItem = appState.cart.find(item => item.productId === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        appState.cart.push({ productId, quantity });
    }
    console.log('Cart:', appState.cart);
    updateCartCounter();
}

function updateCartQuantity(productId, change) {
    const item = appState.cart.find(item => item.productId === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            renderCartPage(); // Оновити сторінку кошика
        }
    }
    updateCartCounter();
}

function removeFromCart(productId) {
    appState.cart = appState.cart.filter(item => item.productId !== productId);
    renderCartPage(); // Оновити сторінку кошика
    updateCartCounter();
}

function updateCartCounter() {
    const totalItems = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
    ui.cartCounter.textContent = totalItems;
    ui.cartCounterMobile.textContent = totalItems;
}

function updateCartSummary() {
    const subtotal = appState.cart.reduce((sum, item) => {
        const product = appData.products.find(p => p.id === item.productId);
        return sum + (product.price * item.quantity);
    }, 0);
    
    ui.cartSubtotal.textContent = `${subtotal} ₴`;
    ui.cartTotal.textContent = `${subtotal} ₴`; // (поки без доставки)
}

// --- Логіка Сторінки Товару ---

function updateProductPageQuantity(change) {
    let currentQuantity = parseInt(ui.productPageQuantity.textContent);
    currentQuantity += change;
    if (currentQuantity < 1) {
        currentQuantity = 1;
    }
    ui.productPageQuantity.textContent = currentQuantity;
}

function switchTab(tabName) {
    // Сховати весь контент
    ui.productTabContents.forEach(content => content.classList.add('hidden'));
    // Деактивувати всі кнопки табів
    ui.productTabs.querySelectorAll('.product-tab-btn').forEach(btn => {
        btn.classList.remove('text-brand-red', 'border-brand-red');
        btn.classList.add('text-gray-500');
    });
    
    // Показати активний контент
    document.getElementById(`tab-${tabName}`).classList.remove('hidden');
    // Активувати кнопку табу
    const activeBtn = ui.productTabs.querySelector(`[data-tab="${tabName}"]`);
    activeBtn.classList.add('text-brand-red', 'border-brand-red');
    activeBtn.classList.remove('text-gray-500');
}

// --- Логіка Мобільного меню ---
function toggleMobileMenu() {
    ui.mobileMenu.classList.toggle('hidden');
}

// === 6. EVENT LISTENERS (Обробники подій) ===

// Таби на сторінці товару
ui.productTabs.addEventListener('click', (e) => {
    if (e.target.matches('.product-tab-btn')) {
        switchTab(e.target.dataset.tab);
    }
});

// Мобільне меню
ui.mobileMenuButton.addEventListener('click', toggleMobileMenu);

// === 7. INITIALIZATION (Запуск) ===

// Чекаємо, поки DOM буде повністю завантажений, перед запуском скриптів
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
});
