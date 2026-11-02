// LOWSHELF WEBSITE JAVASCRIPT

document.addEventListener("DOMContentLoaded", function () {

// Welcome message
const welcomeMessage = document.getElementById("welcome-message");

if (welcomeMessage) {
welcomeMessage.textContent =
"Welcome to LowShelf!";
}

// Form validation
const forms = document.querySelectorAll("form");

forms.forEach(function (form) {

form.addEventListener("submit", function (event) {

if (!form.checkValidity()) {
event.preventDefault();
form.reportValidity();
return;
}

event.preventDefault();

let message = form.querySelector(".form-message");

if (!message) {
message = document.createElement("p");
message.className = "form-message";
form.appendChild(message);
}

message.textContent =
"Your information has passed validation. Thank you for contacting LowShelf.";

message.style.color = "green";

form.reset();

});

});
document.addEventListener("DOMContentLoaded", function () {

const searchInput = document.getElementById("productSearch");
const products = document.querySelectorAll(".product-item");
const searchMessage = document.getElementById("searchMessage");

if (searchInput) {

searchInput.addEventListener("input", function () {

const searchTerm = searchInput.value.toLowerCase();

let visibleProducts = 0;

products.forEach(function (product) {

const productText = product.textContent.toLowerCase();

if (productText.includes(searchTerm)) {
product.style.display = "";
visibleProducts++;
} else {
product.style.display = "none";
}

});

if (searchMessage) {
searchMessage.textContent =
visibleProducts + " product(s) found.";
}

});

}

});
});
// PRODUCT SEARCH AND FILTERING

function filterProducts() {

const searchInput = document.getElementById("productSearch");
const products = document.querySelectorAll(".product-item");
const searchMessage = document.getElementById("searchMessage");

if (!searchInput) return;

const searchTerm = searchInput.value.toLowerCase().trim();

let visibleProducts = 0;

products.forEach(function(product) {

const productText = product.textContent.toLowerCase();

if (productText.includes(searchTerm)) {

product.style.display = "";

visibleProducts++;

} else {

product.style.display = "none";

}

});

if (searchMessage) {

searchMessage.textContent =
visibleProducts + " product(s) found.";

}
}
// CLICKABLE SEARCH SUGGESTIONS

function searchProduct(term) {

const searchInput = document.getElementById("productSearch");

if (searchInput) {

searchInput.value = term;

filterProducts();

}

}
// MANUAL SEARCH

document.addEventListener("DOMContentLoaded", function() {
const searchInput = document.getElementById("productSearch");

if (searchInput) {
searchInput.addEventListener("input", filterProducts);
}
});
// QUOTE AND CONTACT FORM VALIDATION

document.addEventListener("DOMContentLoaded", function() {

const quoteForm = document.getElementById("quoteForm");
const contactForm = document.getElementById("contactForm");

function validateForm(form, feedbackId) {

if (!form) return;

form.addEventListener("submit", function(event) {

const feedback = document.getElementById(feedbackId);

if (!form.checkValidity()) {

}

if (feedback) {
feedback.textContent = "Your form is being submitted. Thank you for contacting LowShelf.";
feedback.style.color = "green";
}

});
}

validateForm(quoteForm, "quoteFeedback");
validateForm(contactForm, "contactFeedback");

});
