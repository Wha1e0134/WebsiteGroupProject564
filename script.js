

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
