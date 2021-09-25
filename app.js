const http = require('http');
const express = require('express');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: 'billingDB Admin',
    password: 'humanID2021!!',
    database: 'Billing DB'
})
connection.connect((err) => {
    if (err) throw err;
    console.log('Connection Established')
})
const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next();
});
app.use((req, res, next) => {
    console.log('In another middleware!');
});
const routes = require('./routes');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');

const server = http.createServer(app);

server.listen(3000);
