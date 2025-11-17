const form = document.getElementById("regForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  // Helper function
  function setError(input, message) {
    const group = input.parentElement;
    const error = group.querySelector("small");
    error.innerText = message;
    valid = false;
  }

  function clearError(input) {
    const group = input.parentElement;
    const error = group.querySelector("small");
    error.innerText = "";
  }

  // Name Validation
  if (name.value.trim() === "") {
    setError(name, "Name is required");
  } else {
    clearError(name);
  }

  // Email Validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    setError(email, "Enter a valid email");
  } else {
    clearError(email);
  }

  // Phone Validation
  const phonePattern = /^[0-9]{10}$/;
  if (!phone.value.match(phonePattern)) {
    setError(phone, "Enter a 10-digit phone number");
  } else {
    clearError(phone);
  }

  // Password Validation
  if (password.value.length < 6) {
    setError(password, "Password must be at least 6 characters");
  } else {
    clearError(password);
  }

  // Confirm Password
  if (password.value !== confirmPassword.value) {
    setError(confirmPassword, "Passwords do not match");
  } else {
    clearError(confirmPassword);
  }

  if (valid) {
    alert("Registration Successful!");
    form.reset();
  }
});
