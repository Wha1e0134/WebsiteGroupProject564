function toggleMode() {
    document.body.classList.toggle("dark");
}
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

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
