const totalPriceElement = document.getElementById("checkout-total-price");

const placeOrderBtn = document.getElementById("place-order-btn");

/* LOAD CART */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

/* CALCULATE TOTAL */

cart.forEach(item => {

    total += item.price;

});

totalPriceElement.innerText = total;

/* PLACE ORDER */

placeOrderBtn.addEventListener("click", () => {

    const name = document.getElementById("customer-name").value;

    const address = document.getElementById("customer-address").value;

    const phone = document.getElementById("customer-phone").value;

    if(name === "" || address === "" || phone === ""){

        alert("Please fill all details");

        return;
    }

    alert("🎉 Order Placed Successfully!");

    /* CLEAR CART */

    localStorage.removeItem("cart");

    window.location.href = "index.html";

});