console.log(window);
console.log(window.console);
console.log(window.document);
console.log(document.body);

console.log(document.getElementById('menu'));
console.log(document.querySelector('#menu'));
console.log(document.querySelector('.menu_item'));

const listELements = document.querySelectorAll('#menu ul');
const menuItems = document.querySelectorAll('.menu_item');

const list = listELements[0];
console.log(list);
const menuItem = menuItems[0];

menuItem.style.backgroundColor = 'yellow';
menuItem.classList.add('error');

const newElement = document.createElement('li');
newElement.style.backgroundColor = 'green';
list.append(newElement);
list.insertAdjacentElement('beforebegin', newElement);
list.insertAdjacentElement('beforeend', newElement);
