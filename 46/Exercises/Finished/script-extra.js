let task = 'Handla mjölk';
const applicationTitle = 'Min todo-lista';

task = 'Gå ut med hunden';

const checkUnique = (task) => {
  const oldTask = 'Handla potatis';
  return oldTask !== task;
};

function addTask(task) {
  const tasks = [];
  if (checkUnique(task)) {
    console.log('Lägger till');
    tasks.push(task);
  } else {
    console.log('Finns redan');
  }
  return tasks;
}
let tasks = addTask('test');
tasks = addTask('test2');
console.log(tasks);
tasks = [...tasks, ...addTask('test2')];
tasks = Array.concat;

console.log(tasks);
