const form = document.getElementById("contactForm");
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!email || !message) {
    alert("Please fill out all required fields");
    return;
  }

  // add additional email validation logic here

  alert("Form submitted successfully!");
});

