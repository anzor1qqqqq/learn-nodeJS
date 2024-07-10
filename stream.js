const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname, 'exampleFiles', 'text.txt'), (err, data) => {
    if (err) return;

    console.log(data);
});

const readFile = fs.createReadStream(path.resolve(__dirname, 'exampleFiles', 'text.txt'));

readFile.on('data', chunk => {
    console.log(chunk);
});