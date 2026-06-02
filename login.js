const signupModal = document.querySelector(".signup-modal");

const showSignup = document.getElementById("show-signup");

const closeSignup = document.querySelector(".close-signup");

const signupBtn = document.getElementById("signup-btn");

const loginBtn = document.getElementById("login-btn");

/* OPEN SIGNUP */

showSignup.addEventListener("click", () => {

    signupModal.style.display = "flex";

});

/* CLOSE SIGNUP */

closeSignup.addEventListener("click", () => {

    signupModal.style.display = "none";

});

/* SIGNUP */

signupBtn.addEventListener("click", () => {

    const username = document.getElementById("signup-username").value;

    const password = document.getElementById("signup-password").value;

    if(username === "" || password === ""){

        alert("Please fill all fields");

        return;
    }

    localStorage.setItem("username", username);

    localStorage.setItem("password", password);

    alert("Account Created Successfully 🎉");

    signupModal.style.display = "none";

});

/* LOGIN */

loginBtn.addEventListener("click", () => {

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;

    const savedUsername = localStorage.getItem("username");

    const savedPassword = localStorage.getItem("password");

    if(username === savedUsername && password === savedPassword){

        alert("Login Successful 🎉");

        window.location.href = "index.html";

    } else {

        alert("Invalid Credentials ❌");

    }

});