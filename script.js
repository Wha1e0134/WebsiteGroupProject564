function toggleMode() {
    document.body.classList.toggle("dark");
}
// Get form
var form = document.getElementById("contactForm");

form.onsubmit = function(event) {

    event.preventDefault(); // Stop page refresh

    var name = document.getElementById("name").value;

    var message = document.getElementById("successMessage");

    message.innerHTML = "Thank you " + name + "! Your message has been sent successfully.";

    form.reset(); // Clear form
};
