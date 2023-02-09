

 // const form = document.querySelector("form");
 //const usernameInput = document.querySelector("#username");
 //const passwordInput = document.querySelector("#password");

 // Obtener las credenciales guardadas previamente (si existen)
// const savedUsername = localStorage.getItem("username");
 //const savedPassword = localStorage.getItem("password");

 // Si existen credenciales guardadas previamente, rellenar los campos de formulario
 //if (savedUsername && savedPassword) {
   //usernameInput.value = savedUsername;
   //passwordInput.value = savedPassword;
 //}

 // Escuchar el evento submit del formulario
 //form.addEventListener("submit", (event) => {
   // Prevenir la acción por defecto (enviar formulario)
   //event.preventDefault();

   // Obtener los valores de los campos de formulario
   //const username = usernameInput.value;
  // const password = passwordInput.value;

   // Guardar las credenciales en el almacenamiento local
 //  localStorage.setItem("username", username);
  // localStorage.setItem("password", password);

   // Mostrar un mensaje de éxito
   //alert("Credenciales guardadas con éxito!");
// });
 //
 function validarFormulario() {
  var usuario = document.getElementById("usuario").value;
  var contrasena = document.getElementById("contrasena").value;
  if (usuario == "" || contrasena == "") {
    alert("Necesitas ingresar un usuario y contarseña");
    return false;
  }
  return true;
}
 let form = document.querySelector("form");
let usernameField = document.querySelector("#username");
let passwordField = document.querySelector("#password");

// Retrieve previously saved credentials (if any)
let savedUsername = localStorage.getItem("username");
let savedPassword = localStorage.getItem("password");

// Fill form fields with saved credentials (if any)
if (savedUsername && savedPassword) {
  usernameField.value = savedUsername;
  passwordField.value = savedPassword;
}



// Listen for form submit event
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get values from form fields
  let username = usernameField.value;
  let password = passwordField.value;

  // Validate form fields
  if (!username || !password) {
    alert("Necesitas ingresar un usuario y contarseña. NO SEAS WEBA ");
    return;
  }

  // Encrypt password
  password = btoa(password);

  // Save credentials to local storage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  // Show success message
  alert("Has iniciado sesión");
  window.location.href = "https://www.tiktok.com/@weeper.avi?lang=es";
});