function openModal(title, text){
  const modal = document.getElementById("infoModal");
  if(!modal) return;

  document.getElementById("infoTitle").textContent = title;
  document.getElementById("infoText").textContent = text;

  modal.style.display = "flex";
}

function closeModal(){
  const modal = document.getElementById("infoModal");
  if(modal) modal.style.display = "none";
}