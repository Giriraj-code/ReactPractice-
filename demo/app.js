const fs = require('fs');

fs.writeFileSync('data.txt', 'Name: Rahul\nCourse: MCA');
console.log('File Created');

const content = fs.readFileSync('data.txt', 'utf8');
console.log('File Content:');
console.log(content);
