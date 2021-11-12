
const express = require('express');
const cors = require("cors");

const app = express();


var corsOptions = {
    origin: "http://127.0.0.1:3306"
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

// set port, listen for requests
const PORT = process.env.PORT || 3307;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
