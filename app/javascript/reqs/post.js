export const postMessage = (data) => {
  fetch('/api/v1/messages', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    }
  }).then(res => res.json())
    .then(response => console.log('Success:', success()))
    .catch(error => console.error('Error:', error));
};

const success = () => {
  document.getElementById('email').value = '';
  document.getElementById('name').value = '';
  document.querySelector('.text-area').value = '';
  document.querySelector(".modal__message-container").style.display = "flex";
}
