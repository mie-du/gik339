console.log('Hej från node.js');
const http = require('http');
//console.log(http);
function serverFunction(req, res) {
  const data = {
    message: 'Hej från Node.js server',
    method: req.method
  };

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}

const server = http.createServer(serverFunction);

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
