console.log('Hej från node.js');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const server = express();

server.use(express.json()).use(express.urlencoded({ extended: false }));

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
  const task = req.body;
  console.log(task);
  res.json(task);
});
