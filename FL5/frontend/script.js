console.log('frontend');
const url = 'http://localhost:3000';

fetch(url)
  .then((response) => {
    console.log(response);
    return response.text();
  })
  .then((data) => console.log(data));

async function fetchGreetings() {
  const response = await fetch(`${url}/greetings`);
  console.log(response);
  const greetings = await response.json();
  console.log(greetings);

  greetings.forEach((greeting) => {
    const html = `<p>${greeting.message}</p>`;
    document.body.insertAdjacentHTML('beforeend', html);
  });
}

fetchGreetings();

const greetingsFormElement = document.getElementById('greetingsForm');
console.log(greetingsFormElement);
greetingsFormElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const greetingsFormElement = e.target;
  console.log(greetingsFormElement);
  const messageInputElement = greetingsFormElement.messageInput;
  console.log(messageInputElement.value);
  const data = { message: messageInputElement.value };
  console.log(JSON.stringify(data));

  const request = new Request(`${url}/greetings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  console.log(request);
  fetch(request)
    .then((response) => response.json())
    .then((serverData) => console.log(serverData));
});
