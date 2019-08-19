const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
var data = {
  'email': 'example@gmail.com',
  'text': 'this is a test',
  'name': 'Sevan Golnazarian'
  };
fetch('/api/v1/messages', {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-Token': token
  }
}).then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
