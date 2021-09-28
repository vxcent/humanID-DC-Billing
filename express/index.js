
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

app.get('/', (req, res) => {
    res.send('Hello World');
    connection.query('SELECT * FROM Project_Details', (err, rows) => {
        if (err) throw err;
        console.log("Data received from DB:");
        console.log(rows);
    })
});
app.get('api/projects', (req, res) => {

})
// app.post()
// app.put()
// app.delete()