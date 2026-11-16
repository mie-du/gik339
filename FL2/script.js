console.log(window);
console.log(window.document);
function _x() {}
console.log(window.console);
console.log(document.body);

console.log(document.getElementById('menu'));
console.log(document.getElementsByClassName('menu_item'));
console.log(document.querySelector('#menu'));
console.log(document.querySelectorAll('.menu_item'));

const listElements = document.querySelectorAll('#menu ul');
console.log(listElements);
const list = listElements[0];
console.log(list);
const menuItem = list.children[0];
console.log(menuItem);
menuItem.style.backgroundColor = 'yellow';
console.log(menuItem.style);
list.children[1].classList.add('error');

const newElement = document.createElement('li');
newElement.innerHTML = 'Item 4';
newElement.classList.add('menu_item');
newElement.style.fontSize = '3rem';

console.log(newElement);

const newElementString = `
<li style="background-color: pink;" class="menu_item error">
   Item 5
</li>
`;

//newElementString.style.fontSize = '2rem';
console.log(newElementString);

list.insertAdjacentHTML('afterbegin', newElementString);
list.insertAdjacentElement('beforeend', newElement);

const listItems = document.getElementsByTagName('li');
console.log(listItems);

const headings = document.querySelectorAll('h1, h2');
console.log(headings);

for (let listItem of listItems) {
  listItem.style.background = 'peachpuff';
}

headings.forEach((listItem) => (listItem.style.background = 'pink'));
document
  .getElementById('menu')
  .insertAdjacentHTML('beforeend', '<h2>hej!</h2>');
