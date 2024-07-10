const path = require('path');

console.log(path.join('add', 'flou'));
console.log(path.join(__dirname, '..', '..'));
console.log(path.join(__dirname, '/first'));
console.log(path.parse(path.join(__dirname, '/first')));