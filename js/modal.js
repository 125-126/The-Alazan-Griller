document.addEventListener("DOMContentLoaded", () => {


const imageModal = document.getElementById("imageModal");
const imageModalImg = document.getElementById("imageModalImg");
const imageClose = document.querySelector(".image-close");


if (!imageModal || !imageModalImg || !imageClose) return;


// Todas las imágenes de la galería
document.querySelectorAll(".modal-img").forEach(img => {
img.addEventListener("click", () => {
imageModal.style.display = "flex";
imageModalImg.src = img.dataset.img || img.src;
});
});


// Botón X
imageClose.addEventListener("click", () => {
imageModal.style.display = "none";
});


// Clic fuera de la imagen
imageModal.addEventListener("click", e => {
if (e.target === imageModal) {
imageModal.style.display = "none";
}
});


});
