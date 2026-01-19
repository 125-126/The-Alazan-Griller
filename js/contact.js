// Selección del formulario y sus inputs
const form = document.querySelector(".contact-form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

// Función para mostrar alertas internas
function mostrarMensaje(form, mensajeTexto, tipo) {
  let alerta = document.createElement("div");
  alerta.className = `form-alert ${tipo}`;
  alerta.textContent = mensajeTexto;
  form.prepend(alerta);

  // Desaparece después de 3 segundos
  setTimeout(() => alerta.remove(), 3000);
}

// Validación simple
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nombre.value.trim() === "") {
    mostrarMensaje(form, "Por favor ingresa tu nombre.", "error");
    return;
  }

  if (email.value.trim() === "" || !email.value.includes("@")) {
    mostrarMensaje(form, "Por favor ingresa un correo válido.", "error");
    return;
  }

  if (mensaje.value.trim() === "") {
    mostrarMensaje(form, "Escribe un mensaje o reserva.", "error");
    return;
  }

  // Si todo está correcto
  mostrarMensaje(form, "¡Mensaje enviado con éxito! Nos contactaremos pronto.", "success");

  // Limpiar formulario
  form.reset();
});