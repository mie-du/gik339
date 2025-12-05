console.log('Hej från node.js');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const server = express();

server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });
server.listen(3000, () => console.log('Servern körs'));

server.get('/tasks', (req, res) => {
  const db = new sqlite3.Database('./tasks.db');
  db.all('SELECT * FROM tasks', (err, rows) => {
    if (err) console.error(err);
    else {
      res.json(rows);
    }
    db.close();
  });
});

server.post('/tasks', (req, res) => {
  const db = new sqlite3.Database('./tasks.db');
  const task = req.body;
  console.log(task);

  db.run(
    'INSERT INTO tasks (id, title, dueDate, completed) VALUES (?, ?, ?, ?)',
    [task.id, task.title, task.dueDate, 0]
  );
});
