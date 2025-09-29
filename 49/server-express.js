const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const server = express();

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

server.get('/', (req, res) => {
  const db = new sqlite3.Database(':memory:');

  db.serialize(() => {
    db.run('CREATE TABLE greetings (message TEXT)');
    db.run('INSERT INTO greetings (message) VALUES (?)', ['Hej, SQLite!']);
  });

  db.get('SELECT message FROM greetings', (err, row) => {
    res.send(row.message);
    db.close();
  });
});
