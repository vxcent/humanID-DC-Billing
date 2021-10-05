
const express = require('express');
const app = express();
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'humanIDDB2021!!',
    database: 'billing_db'
})
app.listen(3000, () => console.log('Listening on port 3000'));

app.get('/project/billingdetails/:projectExtId/limit/:limit/skip/:skip', (req, res) => {
    var projectId = req.params.projectExtId;
    //const limit = req.params.limit;
    //const skip = req.params.skip;
    res.send('Here is the billing detail');
    var sql = "SELECT * FROM Project_Details WHERE projectExtID = ?";
    connection.query(sql, projectId, (err, rows) => {
        if (err) throw err;
        console.log("Data received from DB:");
        console.log(rows);
    })
});
app.get('/project/transactions/:projectExtId/limit/:limit/skip/:skip', (req, res) => {
    var projectId = req.params.projectExtId;
    var limit = req.params.limit;
    var skip = req.params.skip;
    var sql = "SELECT * FROM Payments WHERE projectExtID = ?";
    connection.query(sql, projectId, (err, rows) => {
        if (err) throw err;
        console.log("Data received from DB:");
        console.log(rows);
    })
});

app.get('/project/bills/:projectExtId/limit/:limit/skip/:skip', (req, res) => {
    var projectId = req.params.projectExtId;
    var limit = req.params.limit;
    var skip = req.params.skip;
    var sql = "SELECT * FROM Bills WHERE projectExtID = ?";
    connection.query(sql, projectId, (err, rows) => {
        if (err) throw err;
        console.log("Data received from DB:");
        console.log(rows);
    })
});

app.get('/project/balanceLogs/:projectExtId/limit/:limit/skip/:skip', (req, res) => {
    var projectId = req.params.projectExtId;
    var limit = req.params.limit;
    var skip = req.params.skip;
    var sql = "SELECT * FROM Balance_Logs WHERE projectExtID = ?";
    connection.query(sql, projectId, (err, rows) => {
        if (err) throw err;
        console.log("Data received from DB:");
        console.log(rows);
    })
});

app.get('/project/balanceLogs/:projectExtId/limit/:limit/skip/:skip', (req, res) => {
    var projectId = req.params.projectExtId;
    var limit = req.params.limit;
    var skip = req.params.skip;
    var sql = "SELECT * FROM Balance_Logs WHERE projectExtID = ?";
    connection.query(sql, projectId, (err, rows) => {
        if (err) throw err;
        console.log("Data received from DB:");
        console.log(rows);
    })
});

app.post('/createProject/:projectExtId/', (req, res) => {
    var projectId = req.params.projectExtId;
    var sql = "INSERT INTO Project_Details VALUES projectExtID = ?";
    connection.query(sql, projectId, (err, rows) => {
        if (err) throw err;
    })
});

app.post('/project/addEmail/:projectExtId/:clientEmail/:clientName', (req, res) => {
    var projectId = req.params.projectExtId;
    var clientEmail = req.params.clientEmail;
    var clientName = req.params.clientName;
    // probably need to reiterate this query
    var sql = "INSERT INTO Project_Details VALUES projectExtID = ?";
    connection.query(sql, projectId, (err, rows) => {
        if (err) throw err;
    })
});

// Need a deeper dive into the schema to clean out project
app.delete('/createProject/:projectExtId/', (req, res) => {
    var projectId = req.params.projectExtId;
    var sql = "DELETE FROM Project_Details VALUES projectExtID = ?";
    connection.query(sql, projectId, (err, rows) => {
        if (err) throw err;
    })
});

// Big time money query, need more testing
// app.post('/project/addBalance/:projectExtId/', (req, res) => {
//     var projectId = req.params.projectExtId;
//     var sql = "UPDATE ";
//     connection.query(sql, projectId, (err, rows) => {
//         if (err) throw err;
//     })
// });

// app.post()
// app.put()
// app.delete()