const profileUsername = document.getElementById("profile-username");

const cartItemsCount = document.getElementById("cart-items-count");

const favoritesCount = document.getElementById("favorites-count");

const logoutBtn = document.getElementById("logout-btn");

/* LOAD USER */

const username = localStorage.getItem("username");

profileUsername.innerText = username || "Guest";

/* LOAD CART */

const cart = JSON.parse(localStorage.getItem("cart")) || [];

cartItemsCount.innerText = cart.length;

/* LOAD FAVORITES */

const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

favoritesCount.innerText = favorites.length;

/* LOGOUT */

logoutBtn.addEventListener("click", () => {

    alert("Logged Out");

    window.location.href = "login.html";

});