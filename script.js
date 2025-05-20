

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const email = document.getElementById("email");
  const confirmEmail = document.getElementById("confirm-email");

  form.addEventListener("submit", function (event) {
    if (email.value !== confirmEmail.value) {
      event.preventDefault(); // prevent form submission
      alert("Email addresses do not match. Please check and try again.");
    }
  });
});
