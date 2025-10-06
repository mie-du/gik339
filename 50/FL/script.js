const url = 'http://localhost:3000';
fetch(`${url}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((item) => {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = item.message;
      document.body.insertAdjacentElement('beforeend', paragraph);
    });
  });

fetch(`${url}/greetings`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = data.message;
    document.body.insertAdjacentElement('beforeend', paragraph);
  });

const form = document.getElementById('exampleForm');
form.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const field = form.inputField;
  const serverObject = { message: field.value };
  console.log(serverObject);

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(serverObject),
    headers: {
      'Content-Type': 'Application/json'
    }
  });
}
