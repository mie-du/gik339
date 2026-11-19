const output = document.getElementById('output');

function promiseFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('⏱️ Denna text levereras från promise efter tre sekunder.');
    }, 3000);
  });
}
