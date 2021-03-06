export const postMessage = (data) => {
  fetch('/api/v1/messages', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    }
  }).then(res => res.json())
    .then(response => success(response))
    .catch(error => console.error('Error:', error));
};

const success = (response) => {
  const failedMessage = document.getElementById('fail');
  const successMessage = document.querySelector(".modal__message-container");
  if (response.status === 'success') {
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
    document.querySelector('.text-area').value = '';
    failedMessage.style.display = "none";
    successMessage.style.display = "flex";
  } else {
    failedMessage.style.display = "flex";
    successMessage.style.display = "none";
  }
}
