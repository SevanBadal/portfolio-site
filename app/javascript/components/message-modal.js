import { postMessage } from '../reqs/post';

const modal = document.getElementById("formModal");
const messageBtn = document.getElementById("message-btn");
const closeBtn = document.querySelector(".close");
const modalMessage = document.querySelector(".modal__message-container");
const failedMessage = document.getElementById('fail');
messageBtn.onclick = function () {
  modal.style.display = "block";
}

closeBtn.onclick = function () {
  modal.style.display = "none";
  modalMessage.style.display = "none";
  failedMessage.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalMessage.style.display = "none";
    failedMessage.style.display = "none";
  }
}

document.getElementById('message-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const text = document.querySelector('.text-area').value;
  postMessage({
    email,
    name,
    text
  });
});
