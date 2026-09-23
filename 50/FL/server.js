const express = require('express');
const Database = require('better-sqlite3');

const server = express();
const db = new Database('./greetings.db');

db.prepare('DROP TABLE IF EXISTS greetings').run();
db.prepare('CREATE TABLE greetings (message TEXT)').run();

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

  const insertGreeting = db.prepare(
    'INSERT INTO greetings (message) VALUES (?)'
  );
  insertGreeting.run('Tja');
  insertGreeting.run('Hej!');
  insertGreeting.run('Tjenahopp!');
});

server.get('/greetings', (req, res) => {
  const rows = db.prepare('SELECT message FROM greetings').all();
  res.send(JSON.stringify(rows));
});

server.get('/', (req, res) => {
  const responseMessage = 'Ett enkelt svar i textformat';
  res.send(responseMessage);
});

server.post('/greetings', (req, res) => {
  const body = req.body;
  db.prepare('INSERT INTO greetings (message) VALUES (?)').run(body.message);
  res.send(body);
});
