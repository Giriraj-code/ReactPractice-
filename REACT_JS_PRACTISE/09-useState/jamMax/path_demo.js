const path = require('path');

console.log(path.basename('/user/docs/file.txt'));
console.log(path.dirname('/user/docs/file.txt'));
console.log(path.extname('/user/docs/file.txt'));
console.log(path.join('/user', 'docs', 'file.txt'));
console.log(path.resolve('file.txt'));
