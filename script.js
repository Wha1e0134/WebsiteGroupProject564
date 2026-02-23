function toggleMode() {
    document.body.classList.toggle("dark");
}

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
