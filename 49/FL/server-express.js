const express = require('express');
const server = express();

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

const Database = require('better-sqlite3');

server.get('/', (req, res) => {
  const db = new Database(':memory:');

  db.exec('CREATE TABLE IF NOT EXISTS greetings (message TEXT)');
  db.prepare('INSERT INTO greetings (message) VALUES (?)').run('Hej, SQLite!');

  const row = db.prepare('SELECT message FROM greetings').get();
  res.send(row);
  db.close();
});
