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

  const db = new sqlite3.Database('./greetings.db');
  db.run('CREATE TABLE IF NOT EXISTS greetings (message TEXT)');

  db.run('INSERT INTO greetings (message) VALUES (?)', ['Tja']);
  db.run('INSERT INTO greetings (message) VALUES (?)', ['Hej!']);
  db.run('INSERT INTO greetings (message) VALUES (?)', ['Tjenahopp!']);
});

server.get('/greetings', (req, res) => {
  const db = new sqlite3.Database('./greetings.db');

  db.all('SELECT message FROM greetings', (err, row) => {
    res.send(JSON.stringify(row));
  });
});

server.get('/', (req, res) => {
  const responseMessage = 'Ett enkelt svar i textformat';
  res.send(responseMessage);
});

server.post('/greetings', (req, res) => {
  const db = new sqlite3.Database('./greetings.db');
  const body = req.body;
  db.run('INSERT INTO greetings (message) VALUES (?)', [body.message]);
  db.close();
  res.send(body);
});
