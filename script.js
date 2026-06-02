const buttons = document.querySelectorAll(".food-card button");

const cartCount = document.getElementById("cart-count");

const cartSidebar = document.querySelector(".cart-sidebar");

const cartIcon = document.querySelector(".cart");

const closeCart = document.querySelector(".close-cart");

const cartItems = document.querySelector(".cart-items");

const totalPrice = document.getElementById("total-price");

const menuIcon = document.querySelector(".menu-icon");

const navLinks = document.querySelector(".nav-links");

/* LOAD SAVED DATA */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

/* UPDATE CART UI */

function updateCartUI(){

    cartItems.innerHTML = "";

    total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const cartItem = document.createElement("div");

        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `

            <h3>${item.name}</h3>

            <p>₹${item.price}</p>

            <button class="remove-btn" data-index="${index}">
                Remove
            </button>

        `;

        cartItems.appendChild(cartItem);

    });

    cartCount.innerText = cart.length;

    totalPrice.innerText = total;

    /* SAVE TO LOCAL STORAGE */

    localStorage.setItem("cart", JSON.stringify(cart));

    /* REMOVE BUTTONS */

    const removeButtons = document.querySelectorAll(".remove-btn");

    removeButtons.forEach(button => {

        button.addEventListener("click", () => {

            const index = button.dataset.index;

            cart.splice(index, 1);

            updateCartUI();

        });

    });

}

/* ADD TO CART */

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const foodCard = button.parentElement;

        const foodName = foodCard.querySelector("h3").innerText;

        const foodPriceText = foodCard.querySelector("p").innerText;

        const foodPrice = parseInt(foodPriceText.replace("₹",""));

        cart.push({

            name: foodName,

            price: foodPrice

        });

        updateCartUI();

        alert(foodName + " Added To Cart 🛒");

    });

});

/* OPEN CART */

cartIcon.addEventListener("click", () => {

    cartSidebar.classList.add("active");

});

/* CLOSE CART */

closeCart.addEventListener("click", () => {

    cartSidebar.classList.remove("active");

});

/* MOBILE MENU */

menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* INITIAL LOAD */

updateCartUI();
/* DARK LIGHT MODE */

const themeToggle = document.querySelector(".theme-toggle");

const body = document.body;

/* LOAD SAVED THEME */

if(localStorage.getItem("theme") === "light"){

    body.classList.add("light-mode");

    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';

}

themeToggle.addEventListener("click", () => {

    body.classList.toggle("light-mode");

    /* SAVE THEME */

    if(body.classList.contains("light-mode")){

        localStorage.setItem("theme", "light");

        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "dark");

        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});
/* CHECKOUT BUTTON */

const checkoutBtn = document.getElementById("checkout-btn");

checkoutBtn.addEventListener("click", () => {

    window.location.href = "checkout.html";

});
/* FAVORITES SYSTEM */

const favoriteIcons = document.querySelectorAll(".favorite-icon");

/* LOAD FAVORITES */

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

favoriteIcons.forEach((icon, index) => {

    /* LOAD ACTIVE FAVORITES */

    if(favorites.includes(index)){

        icon.classList.remove("fa-regular");

        icon.classList.add("fa-solid");

        icon.classList.add("active");

    }

    icon.addEventListener("click", () => {

        icon.classList.toggle("active");

        /* CHANGE ICON */

        if(icon.classList.contains("active")){

            icon.classList.remove("fa-regular");

            icon.classList.add("fa-solid");

            favorites.push(index);

        } else {

            icon.classList.remove("fa-solid");

            icon.classList.add("fa-regular");

            favorites = favorites.filter(item => item !== index);

        }

        /* SAVE */

        localStorage.setItem("favorites", JSON.stringify(favorites));

    });

});