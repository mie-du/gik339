let task = 'Handla mjölk';
const applicationTitle = 'Min todo-lista';

task = 'Gå ut med hunden';

const checkUnique = (task) => {
  const oldTask = 'Handla potatis';
  return oldTask !== task;
};
function addTask(task) {
  return 'Uppgiften ' + task + ' lades till listan';
}

console.log(addTask(task));
