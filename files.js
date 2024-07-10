const file = require('fs');
const path = require('path');

const fsPromise = require('fs/promises');

fsPromise.writeFile(path.resolve(__dirname, 'firstFile.js'), 'const data = 2')
    .then(() => fsPromise.readFile(path.resolve(__dirname, 'firstFile.js'), {
        encoding: 'utf-8'
    }))
    .then(str => fsPromise.writeFile(path.resolve(__dirname, 'secondFile.js'), String(str.length)))