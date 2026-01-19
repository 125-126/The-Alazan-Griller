// Seleccionamos todos los elementos a animar
const reveals = document.querySelectorAll(".reveal");

// Creamos el observer
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active"); // usamos "active" para que coincida con tu CSS
        observer.unobserve(entry.target); // solo animar 1 vez
      }
    });
  },
  {
    threshold: 0.15
  }
);

// Observamos cada elemento
reveals.forEach(el => observer.observe(el));

// ================= SCROLL SUAVE =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
