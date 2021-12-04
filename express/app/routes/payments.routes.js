module.exports = app => {
    const payments = require("../controllers/payments.controllers.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/createPayment", payments.create);
  
    // Retrieve all Tutorials
    router.get("/addProjectBalance", payments.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", payments.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/projectDetails", payments.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", payments.update);
  
    // Delete a Tutorial with id
    router.delete("/deleteProject", payments.delete);
  
  
    app.use('/console', router);
  };