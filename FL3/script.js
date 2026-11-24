const output = document.getElementById('output');

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
setTimeout(handler, 3000);
otherFunction();

const textFieldElement = document.getElementById('textField');

textFieldElement.onclick = handleClick;
textFieldElement.addEventListener('input', (e) => {
  console.log(e);
  output.insertAdjacentHTML('beforeend', '<p>' + e.target.value + '</p>');
});

function handleClick(e) {
  console.log(e);
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
    '<p>🫧 Nästan alla event bubblar till slut till document.' +
      e.target.id +
      '</p>'
  )
);

//la til exempel på rejected promise efter diskussion på lektionen.
function promiseFunction(ok = true) {
  if (ok) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('⏱️ Denna text levereras från promise efter tre sekunder.');
      }, 3000);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('🚫 Detta promise blev avvisat efter fyra sekunder.');
      }, 4000);
    });
  }
}

console.log(promiseFunction());

promiseFunction().then(promiseHandler);
//simulera promise som blev rejected genom att skicka in argumentet false.
promiseFunction(false).catch(promiseHandler);
function promiseHandler(data) {
  output.insertAdjacentHTML('beforeend', '<p>' + data + '</p>');
}

async function processData() {
  try {
    const data = await promiseFunction();
    const data2 = await promiseFunction();
    return `Bearbetade data ${data}`;
  } catch (e) {
    console.log('fel');
  }
}

console.log(processData());
