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
  const tasksString = localStorage.getItem('tasks');
  const tasks = tasksString && JSON.parse(tasksString);
  await delay(2000);
  return tasks;
}
/* Hjälpfunktion för att generera ett ID till nya uppgifter */
const generateId = () => {
  return Math.floor(Math.random() * (100 - 10 + 1)) + 10;
};

function initLocalStorage() {
  const tasks = [
    {
      id: 1,
      title: 'Köpa julklappar',
      dueDate: '2025-12-01',
      completed: false
    },
    {
      id: 2,
      title: 'Skriva årsrapport',
      dueDate: '2025-12-15',
      completed: false
    },
    {
      id: 3,
      title: 'Boka vintersemester',
      dueDate: '2025-12-20',
      completed: false
    },
    {
      id: 4,
      title: 'Dekorera granen',
      dueDate: '2025-12-24',
      completed: false
    },
    {
      id: 5,
      title: 'Laga nyårsmiddag',
      dueDate: '2025-12-31',
      completed: false
    },
    {
      id: 6,
      title: 'Skicka tackkort',
      dueDate: '2026-01-05',
      completed: false
    },
    {
      id: 7,
      title: 'Planera födelsedagsfest',
      dueDate: '2026-01-10',
      completed: false
    },
    {
      id: 8,
      title: 'Rensa garderoben',
      dueDate: '2026-01-15',
      completed: false
    },
    {
      id: 9,
      title: 'Lära mig ett nytt recept',
      dueDate: '2026-01-20',
      completed: false
    },
    { id: 10, title: 'Gå på museum', dueDate: '2026-01-30', completed: false }
  ];
  // Store initial tasks in localStorage if it doesn't exist
  if (!localStorage.getItem('tasks')) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
initLocalStorage();

const applicationTitleElement = document.getElementsByTagName('title')[0];
applicationTitleElement.innerHTML = applicationTitle;

const headingElement = `<h1>${applicationTitle}</h1>`;
document.body.insertAdjacentHTML('afterbegin', headingElement);

const todoListElement =
  document.getElementById('todoList') || document.createElement('ul');
todoListElement.setAttribute('id', 'todoList');

function renderTasks(tasks) {
  todoListElement.innerHTML = '';
  tasks.forEach((task) => {
    newTask(task);
  });
  document.body.insertAdjacentElement('beforeend', todoListElement);
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
  const existingTasksString = localStorage.getItem('tasks');
  const tasks = existingTasksString && JSON.parse(existingTasksString);

  tasks.push({ id: generateId(), title: titleContent, dueDate: dateContent });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getData().then(renderTasks);
}

const button = document.getElementById('addTaskButton');
button.addEventListener('click', handleClick);
