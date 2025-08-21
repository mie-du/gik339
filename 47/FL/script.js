console.log(window);
console.log(window.console);
console.log(window.document);
console.log(document.body);

console.log(document.getElementById('menu'));
console.log(document.querySelector('#menu'));
console.log(document.querySelector('.menu_item'));

const listELements = document.querySelectorAll('#menu ul');
const list = listELements[0];
const menuItemNodes = document.querySelectorAll('.menu_item');
const menuItems = document.getElementsByClassName('menu_item');

const menuItem = menuItems[0];
menuItem.style.backgroundColor = 'yellow';
menuItem.classList.add('error');

const newElement = document.createElement('li'); // har inget innehåll
newElement.innerHTML = 'Item 4';
newElement.classList.add('menu_item');
newElement.style.backgroundColor = 'green';

const newElementString = `<li style="background-color: pink;"class="menu_item error">Item 5</li>`;

list.insertAdjacentElement('afterbegin', newElement);
list.insertAdjacentHTML('beforeend', newElementString);

for (let menuItem of menuItems) {
  menuItem.style.backgroundColor = 'white';
  menuItem.classList.add('error');
}

menuItemNodes.forEach((item) => {
  item.style.backgroundColor = 'cyan';
  item.classList.remove('error');
});
