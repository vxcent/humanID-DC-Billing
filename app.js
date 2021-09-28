const http = require('http');
const express = require('express');
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'humanIDDB2021!!',
    database: 'billing_db'
})
connection.connect((err) => {
    if (err) throw err;
    console.log('Connection Established')
})
connection.query('SELECT * FROM bills', (err, rows) => {
    if (err) throw err;
    console.log("Data received from DB:");
    console.log(rows);
})


// app.use((req, res, next) => {
//     console.log('In the middleware!');
//     next();
// });
// app.use((req, res, next) => {
//     console.log('In another middleware!');
// });
// const routes = require('./routes');
// const { SSL_OP_EPHEMERAL_RSA } = require('constants');

// const server = http.createServer(app);

//server.listen(3000);
