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

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  const db = new sqlite3.Database('./test.db');
  db.run('CREATE TABLE IF NOT EXISTS greetings (message TEXT)');
});

server.get('/', (req, res) => {
  const db = new sqlite3.Database('./test.db');

  db.all('SELECT message FROM greetings', (err, row) => {
    res.send(JSON.stringify(row));
  });
});

server.get('/greetings', (req, res) => {
  const response = { message: `Förfrågan till ${req.url}` };
  res.send(JSON.stringify(response));
});

server.post('/', (req, res) => {
  const db = new sqlite3.Database('./test.db');
  const body = req.body;
  db.run('INSERT INTO greetings (message) VALUES (?)', [body.message]);
});
