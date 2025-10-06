const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const server = express();

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

server.get('/', (req, res) => {
  const db = new sqlite3.Database(':memory:');

  db.run('CREATE TABLE IF NOT EXISTS greetings (message TEXT)');
  db.run('INSERT INTO greetings (message) VALUES (?)', ['Hej, SQLite!']);
  db.all('SELECT message FROM greetings', (err, row) => {
    res.send(JSON.stringify(row));
    db.close();
  });
});
