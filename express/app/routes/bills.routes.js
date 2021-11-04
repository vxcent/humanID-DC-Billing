module.exports = app => {
    const bills = require("../controllers/bills.controllers.js");
  
    var bills = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", bills.create);
  
    // Retrieve all Tutorials
    router.get("/", bills.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", bills.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", bills.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", bills.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", bills.delete);
  
    // Delete all Tutorials
    router.delete("/", bills.deleteAll);
  
    app.use('/api/addToProjectBalance', router);
  };