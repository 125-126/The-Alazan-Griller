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


const cards = document.querySelectorAll('.menu-card');
const modal = document.getElementById('productModal');


cards.forEach(card => {
  card.addEventListener('click', () => {
    document.getElementById('modalImg').src = card.dataset.img;
    document.getElementById('modalTitle').innerText = card.dataset.title;
    document.getElementById('modalDesc').innerText = card.dataset.desc;
    modal.classList.add('active');
  });
});


modal.querySelector('.modal-overlay').addEventListener('click', () => {
  modal.classList.remove('active');
});


modal.querySelector('.modal-close').addEventListener('click', () => {
  modal.classList.remove('active');
});

