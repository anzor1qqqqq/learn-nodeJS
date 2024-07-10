const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

let data;

const mysqlConnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'testing_mysql',
    password: '4649062'
});

mysqlConnect.connect((err) => {
    if (err) {
        console.log('ALARM!!! Mysql dont connected');
    } else {
        console.log('Mysql connection is successful');
    };
})

mysqlConnect.query('SELECT * FROM users', (err, res) => {
    if (err) {
        throw new Error('ALARM!! query mysql is not successful')
    };

    data = res;
});

const app = express();

app.use(cors());

app.listen(5000, () => console.log('Server is starting'));

app.get('/', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(data));
});