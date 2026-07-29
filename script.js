// ==============================
// NETFLIX CLONE - SCRIPT.JS
// ==============================

// Navbar background on scroll

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#000";
    } else {
        navbar.style.background = "rgba(0,0,0,0.75)";
    }

});


// ==============================
// Get Started Button
// ==============================

const getStartedBtn = document.querySelector(".btn-danger");

if (getStartedBtn) {

    getStartedBtn.addEventListener("click", function () {

        const email = document.querySelector('input[type="email"]').value.trim();

        if (email === "") {

            alert("Please enter your email address.");

            return;

        }

        alert("Welcome to Netflix! (Demo Website)");

    });

}


// ==============================
// Smooth Scrolling
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});