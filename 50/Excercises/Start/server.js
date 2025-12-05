console.log('Hej från node.js');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const server = express();

server.listen(3000, () => console.log('Servern körs'));

server.get('/tasks', (req, res) => {
  const serverResponse = `Du har gjort en ${req.method}-förfrågan till ${req.path};`;
  res.send(serverResponse);
});
