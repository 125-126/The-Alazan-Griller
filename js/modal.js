// Modal de imagen grande
const imageModal = document.getElementById("imageModal");
const imageModalImg = document.getElementById("imageModalImg");
const imageClose = document.querySelector(".image-close");


// Todas las imágenes que deben abrirse grandes
document.querySelectorAll(".modal-img").forEach(img => {
img.addEventListener("click", () => {
imageModal.style.display = "flex";
imageModalImg.src = img.dataset.img || img.src;
});
});


// Cerrar modal
imageClose.addEventListener("click", () => {
imageModal.style.display = "none";
});


imageModal.addEventListener("click", () => {
imageModal.style.display = "none";
});
