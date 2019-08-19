const modal = document.getElementById("formModal");
const messageBtn = document.getElementById("message-btn");
const closeBtn = document.querySelector(".close");

messageBtn.onclick = function () {
  modal.style.display = "block";
}

closeBtn.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
