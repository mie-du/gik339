/* ---- Minimum startkod (om du utgår från egen kod efter förra veckans övning) ---- */
const applicationTitle = 'Min todo-lista v.3';

/* Hjälpfunktion för att simulera fördröjning */
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
/* Hjälpfunktion för att simulera att hämta data från en server.  */
function getData() {
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
  delay(3000);
  return new Promise((resolve, reject) => resolve(tasks));
}
/* Hjälpfunktion för att generera ett id till nya uppgifter */
const generateId = () => {
  return Math.floor(Math.random() * (100 - 10 + 1)) + 10;
};
/* ** Klistra in din egen kod från förra veckans övning nedan, eller kopiera från 47/Excercises/Finished script.js ** */
