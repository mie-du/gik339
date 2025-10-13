const applicationTitle = 'Min todo-lista v.2';
const tasks = [
  { id: 1, title: 'Köpa julklappar', dueDate: '2025-12-01', completed: false },
  { id: 2, title: 'Skriva årsrapport', dueDate: '2025-12-15', completed: false },
  { id: 3, title: 'Boka vintersemester', dueDate: '2025-12-20', completed: false },
  { id: 4, title: 'Dekorera granen', dueDate: '2025-12-24', completed: false },
  { id: 5, title: 'Laga nyårsmiddag', dueDate: '2025-12-31', completed: false },
  { id: 6, title: 'Skicka tackkort', dueDate: '2026-01-05', completed: false },
  { id: 7, title: 'Planera födelsedagsfest', dueDate: '2026-01-10', completed: false },
  { id: 8, title: 'Rensa garderoben', dueDate: '2026-01-15', completed: false },
  { id: 9, title: 'Lära mig ett nytt recept', dueDate: '2026-01-20', completed: false },
  { id: 10, title: 'Gå på museum', dueDate: '2026-01-30', completed: false }
];

const applicationTitleElement = document.getElementsByTagName('title')[0];
applicationTitleElement.innerHTML = applicationTitle;
const countCompleted = tasks.filter((task) => task.completed === false).length;

const introHtml = `<h1 class="page__title">${applicationTitle}</h1>
<p>Antal ofärdiga uppgifter: ${countCompleted}</p>`;
const tasksLeftElement = ``;
document.body.insertAdjacentHTML('afterbegin', introHtml);

const todoListElement = document.createElement('ul');
todoListElement.setAttribute('id', 'todoList');
todoListElement.classList.add('todo-list');
document.body.insertAdjacentElement('beforeend', todoListElement);
function renderTasks() {
  todoListElement.innerHTML = '';
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.setAttribute('id', `task${task.id}`);

    if (task.completed) {
      li.classList.add('todo-list__item--completed');
    }
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      renderTasks();
    });
    li.appendChild(checkbox);

    const htmLString = `<h3>${task.title}</h3>
    <p>Färdigt senast: ${task.dueDate}</p>`;
    li.classList.add('todo-list__item');
    li.insertAdjacentHTML('beforeend', htmLString);
    todoListElement.insertAdjacentElement('beforeend', li);
  });
}

renderTasks();
