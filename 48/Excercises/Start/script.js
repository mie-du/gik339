/* ---- Minimum startkod (om du utgår från egen kod efter förra veckans övning) ---- */
const applicationTitle = 'Min todo-lista v.3';
const tasks = [];
//Async helpers
function delay(ms) {
  return new Promise(function (r) {
    setTimeout(r, ms);
  });
}
//Generera id
function genId() {
  return ++task.length;
}
/* ---- Exempel på lösning, förra veckans kod nedan - ersätt med din egen om du har någon ---- */
const applicationTitleElement = document.getElementsByTagName('title')[0];
applicationTitleElement.innerHTML = applicationTitle;

const headingElement = `<h1>${applicationTitle}</h1>`;
document.body.insertAdjacentHTML('afterbegin', headingElement);

const todoListElement = document.createElement('ul');
todoListElement.setAttribute('id', 'todoList');
document.body.insertAdjacentElement('beforeend', todoListElement);
function renderTasks() {
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.setAttribute('id', `task${task.id}`);

    const htmLString = `<h3>${task.title}</h3>
    <p>Färdigt senast: ${task.dueDate}</p>`;
    li.insertAdjacentHTML('beforeend', htmLString);
    todoListElement.insertAdjacentElement('beforeend', li);
  });
}

renderTasks();
