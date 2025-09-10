console.log('Jag gör något som tar tre sekunder...');
setTimeout(handler, 3000);
otherFunction();

function handler() {
  console.log('Jag hanterar vad som händer efter tre sekunder ');
}

function otherFunction() {
  console.log('Jag gör något annat så länge...');
}

const button = document.getElementById('button');
button.onclick = handleClick;
button.addEventListener('click', () => {});

function handleClick() {
  console.log('Jag hanterar vad som händer vid klick', e);
}

button.addEventListener('focus', (e) => console.log('Knappen har fått fokus', e));

function promiseFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Efter tre sekunder kan denna text levereras');
    }, 3000);
  });
}

console.log(promiseFunction());

promiseFunction().then(promiseHandler);

function promiseHandler(data) {
  console.log(data);
}

async function processData() {
  const data = await promiseFunction();
  return `Bearbetade data: ${data}`;
}

processData().then((processedData) => console.log(processedData));
