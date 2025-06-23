const modal = document.getElementById("popUpModal");
const button = document.getElementById("openModal");
const span = document.querySelector(".close-button");

button.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(openModal) {
  if (openModal.target == modal) {
    modal.style.display = "none";
  }
}