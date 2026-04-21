const http = require('http');

const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Welcome to MCA Department</h1>');
});

server.listen(3000, function() {
  console.log('Server running at http://localhost:3000');
});