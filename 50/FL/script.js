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
  const greetings = response.json();

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
  const field = form.messageInput;
  const serverObject = { message: field.value };
  console.log(serverObject);

  fetch(url + '/greetings', {
    method: 'POST',
    body: JSON.stringify(serverObject),
    headers: {
      'Content-Type': 'Application/json'
    }
  });
}
