/* ---- Minimum startkod (om du utgår från egen kod efter förra veckans övning) ---- */
const applicationTitle = 'Min todo-lista v.5';

/* Hjälpfunktion för att simulera fördröjning */
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
/* Hjälpfunktion för att simulera att hämta data från en server.  */
async function getData() {
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
  await delay(2000);
  return tasks;
}
/* Hjälpfunktion för att generera ett ID till nya uppgifter */
const generateId = () => {
  return Math.floor(Math.random() * (100 - 10 + 1)) + 10;
};

const applicationTitleElement = document.getElementsByTagName('title')[0];
applicationTitleElement.innerHTML = applicationTitle;

const headingElement = `<h1 class="p-10 text-4xl bg-purple-100 text-purple-900">${applicationTitle}</h1>`;
document.body.insertAdjacentHTML('afterbegin', headingElement);

const todoListContainerElement = document.createElement('div');
todoListContainerElement.classList.add('p-2', 'w-1/2', 'mx-auto');
const todoListElement = document.createElement('ul');

todoListElement.setAttribute('id', 'todoList');
todoListContainerElement.insertAdjacentElement('beforeend', todoListElement);
document.body.insertAdjacentElement('beforeend', todoListContainerElement);

function renderTasks(tasks) {
  //tillagt här för att den inte ska synas innan alla uppgifter är hämtade
  todoListElement.classList.add(
    'border',
    'border-purple-100',
    'rounded-lg',
    'shadow-md'
  );

  tasks.forEach((task) => {
    newTask(task);
  });
}
function newTask(task) {
  const li = document.createElement('li');
  li.classList.add(
    'p-5',
    'border-b',
    'border-purple-100',
    'flex',
    'place-content-between'
  );
  const htmLString = `<h3>${task.title}</h3>
    <p class="text-sm text-gray-500">Färdigt senast: ${task.dueDate}</p>`;
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
