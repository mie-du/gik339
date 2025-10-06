console.log('Hej från node.js');
const http = require('http');
//console.log(http);
function serverFunction(req, res) {
  const data = {
    id: 1,
    firstName: 'Mikaela',
    lastName: 'Hedberg',
    message: 'Hej från Node.js server'
  };
  console.log(data);
  const JSONData = JSON.stringify(data);
  console.log(JSONData);

  console.log(req.method);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSONData);
}

const server = http.createServer(serverFunction);

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
