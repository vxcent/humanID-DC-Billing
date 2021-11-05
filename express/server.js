
const express = require('express');
const cors = require("cors");

const app = express();


var corsOptions = {
    origin: "http://localhost:8081"
};
  
app.use(cors(corsOptions));
  
// parse requests of content-type - application/json
app.use(express.json());
  
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Billing DB API." });
});
  
require("./app/routes/project.routes")(app);
require("./app/routes/balanceLog.routes")(app);
require("./app/routes/bills.routes")(app);
require("./app/routes/client.routes")(app);
require("./app/routes/payments.routes")(app);
require("./app/routes/sms.routes")(app);
require("./app/routes/smsRates.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});





// app.get('/console/project/?limit=&skip&billingdetails/:projectExtId/limit/:limit/skip/:skip', (req, res) => {
//     var projectId = req.params.projectExtId;
//     //const limit = req.params.limit;
//     //const skip = req.params.skip;
//     res.send('Here is the billing detail');
//     var sql = "SELECT * FROM Project_Details WHERE projectExtID = ?";
//     connection.query(sql, projectId, (err, rows) => {
//         if (err) throw err;
//         console.log("Data received from DB:");
//         console.log(rows);
//     })
// });
// app.get('/project/transactions/:projectExtId/limit/:limit/skip/:skip', (req, res) => {
//     var projectId = req.params.projectExtId;
//     var limit = req.params.limit;
//     var skip = req.params.skip;
//     var sql = "SELECT * FROM Payments WHERE projectExtID = ?";
//     connection.query(sql, projectId, (err, rows) => {
//         if (err) throw err;
//         console.log("Data received from DB:");
//         console.log(rows);
//     })
// });

// app.get('/project/bills/:projectExtId/limit/:limit/skip/:skip', (req, res) => {
//     var projectId = req.params.projectExtId;
//     var limit = req.params.limit;
//     var skip = req.params.skip;
//     var sql = "SELECT * FROM Bills WHERE projectExtID = ?";
//     connection.query(sql, projectId, (err, rows) => {
//         if (err) throw err;
//         console.log("Data received from DB:");
//         console.log(rows);
//     })
// });

// app.get('/project/balanceLogs/:projectExtId/limit/:limit/skip/:skip', (req, res) => {
//     var projectId = req.params.projectExtId;
//     var limit = req.params.limit;
//     var skip = req.params.skip;
//     var sql = "SELECT * FROM Balance_Logs WHERE projectExtID = ?";
//     connection.query(sql, projectId, (err, rows) => {
//         if (err) throw err;
//         console.log("Data received from DB:");
//         console.log(rows);
//     })
// });

// app.get('/project/balanceLogs/:projectExtId/limit/:limit/skip/:skip', (req, res) => {
//     var projectId = req.params.projectExtId;
//     var limit = req.params.limit;
//     var skip = req.params.skip;
//     var sql = "SELECT * FROM Balance_Logs WHERE projectExtID = ?";
//     connection.query(sql, projectId, (err, rows) => {
//         if (err) throw err;
//         console.log("Data received from DB:");
//         console.log(rows);
//     })
// });

// app.post('/createProject/:projectExtId/', (req, res) => {
//     var projectId = req.params.projectExtId;
//     var sql = "INSERT INTO Project_Details VALUES projectExtID = ?";
//     connection.query(sql, projectId, (err, rows) => {
//         if (err) throw err;
//     })
// });

// app.post('/project/addEmail/:projectExtId/:clientEmail/:clientName', (req, res) => {
//     var projectId = req.params.projectExtId;
//     var clientEmail = req.params.clientEmail;
//     var clientName = req.params.clientName;
//     // probably need to reiterate this query
//     var sql = "INSERT INTO Project_Details VALUES projectExtID = ?";
//     connection.query(sql, projectId, (err, rows) => {
//         if (err) throw err;
//     })
// });

// // Need a deeper dive into the schema to clean out project
// app.delete('/createProject/:projectExtId/', (req, res) => {
//     var projectId = req.params.projectExtId;
//     var sql = "DELETE FROM Project_Details VALUES projectExtID = ?";
//     connection.query(sql, projectId, (err, rows) => {
//         if (err) throw err;
//     })
// });

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