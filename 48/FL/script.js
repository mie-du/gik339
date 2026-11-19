const output = document.getElementById('output');

output.insertAdjacentHTML(
  'beforeend',
  '<p>⏱ Jag gör något som tar tre sekunder...</p>'
);
setTimeout(handler, 3000);
otherFunction();

function handler() {
  output.insertAdjacentHTML(
    'beforeend',
    '<p>✔️ Jag hanterar vad som händer efter tre sekunder<p> '
  );
}

function otherFunction() {
  output.insertAdjacentHTML(
    'beforeend',
    '<p>⌛ Jag gör något annat så länge...</p>'
  );
}

const textField = document.getElementById('textField');

textField.onclick = handleClick;

textField.addEventListener('input', (e) => {
  output.insertAdjacentHTML('beforeend', '<p>' + e.target.value + '</p>');
});

function handleClick(e) {
  output.insertAdjacentHTML(
    'beforeend',
    '<p>Jag hanterar vad som händer vid klick. Avsändare: ' +
      e.target.id +
      '</p>'
  );
}

document.addEventListener('click', (e) =>
  output.insertAdjacentHTML(
    'beforeend',
    '<p>🫧 Alla event bubblar till slut till document.</p>'
  )
);

function promiseFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('⏱️ Denna text levereras från promise efter tre sekunder.');
    }, 3000);
  });
}

console.log(promiseFunction());

promiseFunction().then(promiseHandler);

function promiseHandler(data) {
  output.insertAdjacentHTML('beforeend', '<p>' + data + '</p>');
}

async function processData() {
  const data = await promiseFunction();
  return `Bearbetade data: ${data}`;
}

processData().then((processedData) =>
  output.insertAdjacentHTML('beforeend', '<p>' + processedData + '</p>')
);
