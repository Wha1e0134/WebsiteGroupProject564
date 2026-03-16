

// ===== CONTACT PAGE =====
var form = document.getElementById("contactForm");

if (form) {
    form.onsubmit = function(event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var message = document.getElementById("successMessage");

        message.innerHTML = "Thank you " + name + "! Your message has been sent successfully.";

        form.reset();
    };
}


// ===== SERVICES PAGE (Simple Cart) =====
var total = 0;
var items = [];

function addToCart(productName, price) {

    total = total + price;
    items.push(productName);

    document.getElementById("cartItems").innerHTML = items.join(", ");
    document.getElementById("totalPrice").innerHTML = total;
}

// === about category === //
function showCategory(value) {
    if (value !== "") {
        window.location.href = "services.html?category=" + encodeURIComponent(value);
    }
}

/*place order*/
if (form) {
    form.onsubmit = function(event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var message = document.getElementById("successMessage");

        message.innerHTML = "Thank you " + name + "! Your order has been placed successfully.";

        form.reset();
    };
}
function updateDateTime() {
  const now = new Date();
  document.getElementById("currentDateTime").textContent =
    now.toLocaleString();
}

setInterval(updateDateTime, 1000);
updateDateTime();





document.addEventListener("DOMContentLoaded", function () {

    // ===== MENU =====
    const menuBtn = document.getElementById("menuBtn");
    const actionMenu = document.getElementById("action-menu");

    if (menuBtn && actionMenu) {
        menuBtn.addEventListener("click", function () {
            actionMenu.classList.toggle("show");
        });
    }


// ===== THEME TOGGLE =====

const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

if (toggle && icon) {

    toggle.addEventListener("change", function () {

        document.body.classList.toggle("dark-mode");

        if (toggle.checked) {
            icon.textContent = "dark_mode";
        } else {
            icon.textContent = "light_mode";
        }

    });
}
});
// ===== REVIEW FORM =====
var selectedRating = 0;
var stars = document.querySelectorAll(".star");
var ratingInput = document.getElementById("ratingValue");
var reviewForm = document.getElementById("reviewForm");
var reviewsList = document.getElementById("reviewsList");
var reviewSuccess = document.getElementById("reviewSuccess");

if (stars.length > 0) {
    stars.forEach(function(star) {
        star.addEventListener("click", function() {
            selectedRating = this.getAttribute("data-value");
            ratingInput.value = selectedRating;

            stars.forEach(function(s) {
                s.classList.remove("active");
            });

            stars.forEach(function(s) {
                if (s.getAttribute("data-value") <= selectedRating) {
                    s.classList.add("active");
                }
            });
        });
    });
}

if (reviewForm) {
    reviewForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var title = document.getElementById("reviewTitle").value;
        var message = document.getElementById("reviewMessage").value;
        var name = document.getElementById("reviewName").value;

        if (selectedRating == 0) {
            reviewSuccess.style.color = "red";
            reviewSuccess.innerHTML = "Please select a star rating.";
            return;
        }

        var reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");

        var starsHtml = "";
        for (var i = 0; i < selectedRating; i++) {
            starsHtml += "★";
        }

        reviewCard.innerHTML = `
            <div class="review-stars">${starsHtml}</div>
            <h3>${title}</h3>
            <p>${message}</p>
            <strong>- ${name}</strong>
        `;

        reviewsList.prepend(reviewCard);

        reviewSuccess.style.color = "green";
        reviewSuccess.innerHTML = "Thank you! Your review has been submitted.";

        reviewForm.reset();
        ratingInput.value = 0;
        selectedRating = 0;

        stars.forEach(function(s) {
            s.classList.remove("active");
        });
    });
}
