function onLogin() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const result = document.getElementById("result");

  result.appendChild(
    document.createTextNode(`Email: ${emailInput.value}, Password: ${passwordInput.value}`)
  );
  localStorage.setItem("data" ,`Email: ${emailInput.value}, Password: ${passwordInput.value}`);
  localStorage.removeItem("data");
  return false;
}

function showPassword() {
  const passwordInput = document.getElementById("password");
  const showPassword = document.getElementById("showPassword");
  const hidePassword = document.getElementById("hidePassword");

  passwordInput.type = "text";
  showPassword.classList.remove("active");
  hidePassword.classList.add("active");
}

function hidePassword() {
  const passwordInput = document.getElementById("password");
  const showPassword = document.getElementById("showPassword");
  const hidePassword = document.getElementById("hidePassword");

  passwordInput.type = "password";
  showPassword.classList.add("active");
  hidePassword.classList.remove("active");
}