document.addEventListener("DOMContentLoaded", () => {


const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imageModalImg");
const closeBtn = document.querySelector(".image-close");
const nextBtn = document.querySelector(".image-nav.next");
const prevBtn = document.querySelector(".image-nav.prev");


const images = Array.from(document.querySelectorAll(".modal-img"));
let currentIndex = 0;


images.forEach((img, index) => {
img.addEventListener("click", () => {
currentIndex = index;
showImage();
modal.style.display = "flex";
});
});


function showImage(){
const img = images[currentIndex];
modalImg.src = img.dataset.img || img.src;
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
modal.style.display = "none";
});


modal.addEventListener("click", e => {
if(e.target === modal){
modal.style.display = "none";
}
});


});
