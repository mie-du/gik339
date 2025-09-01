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

button.addEventListener('click', () => {});
button.onclick = handleClick;
function handleClick() {
  console.log('klick');
}
console.log(button);
