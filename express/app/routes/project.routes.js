module.exports = app => {
    const project = require("../controllers/project.controllers.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/createProject", project.create);
  
    // Retrieve all Tutorials
    router.get("/allProject", project.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", project.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/projectDetails", project.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", project.update);
  
    // Delete a Tutorial with id
    router.delete("/deleteProject", project.delete);
  
  
    app.use('/console', router);
  };