const menu = document.getElementById("nav-menu");
const overlay = document.getElementById("menu-overlay");
const toggleBtn = document.querySelector(".menu-toggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
    overlay.classList.toggle("active");
  });
}

if (overlay) {
  overlay.addEventListener("click", () => {
    menu.classList.remove("show");
    overlay.classList.remove("active");
  });
}

document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
    overlay.classList.remove("active");
  });
});

const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});