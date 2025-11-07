document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) {
    window.location.href = "../html/login.html"; // якщо не залогінений
    return;
  }

  const profilePic = document.getElementById("profilePic");
  const username = document.getElementById("username");
  const ordersList = document.getElementById("ordersList");
  const couponsList = document.getElementById("couponsList");
  const logoutBtn = document.getElementById("logoutBtn");

  profilePic.src = currentUser.profilePic || "../img/defult-profile.png";
  username.textContent = currentUser.username;

  // Відображення замовлень
  if (currentUser.orders.length === 0) {
    ordersList.innerHTML = "<li>Замовлень немає</li>";
  } else {
    ordersList.innerHTML = currentUser.orders.map(order => `<li>${order.name} - ${order.price} ₴</li>`).join("");
  }

  // Відображення купонів
  if (currentUser.coupons.length === 0) {
    couponsList.innerHTML = "<li>Купонів немає</li>";
  } else {
    couponsList.innerHTML = currentUser.coupons.map(c => `<li>${c}</li>`).join("");
  }

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.href = "../html/login.html";
  });
});
