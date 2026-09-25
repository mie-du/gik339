const url = 'http://localhost:3000';
fetch(url)
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = data;
    document.body.insertAdjacentElement('beforeend', paragraph);
  });

async function fetchGreetings() {
  const response = await fetch(`${url}/greetings`);
  const greetings = await response.json();

  greetings.forEach((greeting) => {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = greeting.message;
    document.body.insertAdjacentElement('beforeend', paragraph);
  });
}

fetchGreetings();

const form = document.getElementById('greetingsForm');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;

  /* const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(formData.get('messageInput')); */

  const field = form.messageInput;
  const greeting = { message: field.value };
  console.log(greeting);
  const request = new Request(url + '/greetings', {
    method: 'POST',
    body: JSON.stringify(greeting),
    headers: {
      'Content-Type': 'Application/json'
    }
  });
  fetch(request);
}
