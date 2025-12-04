/* ---- Minimum startkod (om du utgår från egen kod efter förra veckans övning) ---- */
const applicationTitle = 'Min todo-lista v.3';

/* Hjälpfunktion för att simulera fördröjning */
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
/* Hjälpfunktion för att simulera att hämta data från en server.  */
async function getData() {
  const tasks = await fetch('http://localhost:3000/tasks');
  console.log(tasks);
  return tasks;
}
/* Hjälpfunktion för att generera ett ID till nya uppgifter */
const generateId = () => {
  return Math.floor(Math.random() * (100 - 10 + 1)) + 10;
};

const applicationTitleElement = document.getElementsByTagName('title')[0];
applicationTitleElement.innerHTML = applicationTitle;

const headingElement = `<h1>${applicationTitle}</h1>`;
document.body.insertAdjacentHTML('afterbegin', headingElement);

const todoListElement = document.createElement('ul');
todoListElement.setAttribute('id', 'todoList');
document.body.insertAdjacentElement('beforeend', todoListElement);

function renderTasks(tasks) {
  tasks.forEach((task) => {
    newTask(task);
  });
}
function newTask(task) {
  const li = document.createElement('li');
  const htmLString = `<h3>${task.title}</h3>
    <p>Färdigt senast: ${task.dueDate}</p>`;
  li.insertAdjacentHTML('beforeend', htmLString);
  todoListElement.insertAdjacentElement('beforeend', li);
}
getData().then(renderTasks);

function handleClick(e) {
  const titleField = document.getElementById('titleField');
  const dueDateField = document.getElementById('dueDateField');
  const titleContent = titleField.value;
  const dateContent = dueDateField.value;
  console.log(titleContent, dateContent);
  const id = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
  newTask({ id, title: titleContent, dueDate: dateContent });
}

const button = document.getElementById('addTaskButton');
button.addEventListener('click', handleClick);
