
function validateEmail() {
  const email = document.getElementById("email").value.trim();
  const confirmEmail = document.getElementById("confirmEmail").value.trim();

  if (email !== confirmEmail) {
    alert("Email addresses do not match. Please check and try again.");
  } else {
    alert("Email addresses match. Your form is ready to submit!");
  }
}

