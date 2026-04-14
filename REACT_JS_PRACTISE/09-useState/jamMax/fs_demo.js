const fs = require('fs');

fs.writeFileSync('demo.txt', 'Hello from fs module!');

const data = fs.readFileSync('demo.txt', 'utf8');
console.log(data);

fs.appendFileSync('demo.txt', '\nAppended line.');

fs.unlink('demo.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});
