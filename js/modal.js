document.addEventListener("DOMContentLoaded", () => {


const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imageModalImg");
const closeBtn = document.querySelector(".image-close");
const nextBtn = document.querySelector(".image-nav.next");
const prevBtn = document.querySelector(".image-nav.prev");


const images = Array.from(document.querySelectorAll(".modal-img"));
let currentIndex = 0;
let modalOpen = false;


images.forEach((img, index) => {
img.addEventListener("click", () => {
currentIndex = index;
showImage();
openModal();
});
});


function showImage(){
const img = images[currentIndex];
modalImg.src = img.dataset.img || img.src;
}


function openModal(){
modal.style.display = "flex";
modalOpen = true;


// 🔥 Agregamos estado al historial
history.pushState({ modal: true }, "");
}


function closeModal(){
modal.style.display = "none";
modalOpen = false;
}


nextBtn.addEventListener("click", (e) => {
e.stopPropagation();
currentIndex = (currentIndex + 1) % images.length;
showImage();
});


prevBtn.addEventListener("click", (e) => {
e.stopPropagation();
currentIndex = (currentIndex - 1 + images.length) % images.length;
showImage();
});


closeBtn.addEventListener("click", () => {
closeModal();
history.back(); // sincroniza historial
});


modal.addEventListener("click", e => {
if(e.target === modal){
closeModal();
history.back();
}
});


// 🔥 Captura el botón "Atrás" del celular
window.addEventListener("popstate", () => {
if(modalOpen){
closeModal();
}
});


});
