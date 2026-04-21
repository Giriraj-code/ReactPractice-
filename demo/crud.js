const http = require('http');

let students = [
  { id: 1, name: 'Rahul', course: 'MCA' },
  { id: 2, name: 'Priya', course: 'BCA' }
];

const server = http.createServer(function(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/students' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify(students));

  } else if (req.url === '/students/add' && req.method === 'POST') {
    let body = '';
    req.on('data', function(chunk) {
      body += chunk;
    });
    req.on('end', function() {
      const s = JSON.parse(body);
      s.id = students.length + 1;
      students.push(s);
      res.writeHead(201);
      res.end(JSON.stringify({ message: 'Student Added', student: s }));
    });

  } else if (req.url.startsWith('/students/delete/') && req.method === 'DELETE') {
    const id = parseInt(req.url.split('/')[3]);
    students = students.filter(function(s) { return s.id !== id; });
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'Student Deleted' }));

  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

server.listen(3000, function() {
  console.log('Server running at http://localhost:3000');
  console.log('GET  /students');
  console.log('POST /students/add');
  console.log('DELETE /students/delete/:id');
});
