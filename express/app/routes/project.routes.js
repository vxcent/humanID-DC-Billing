module.exports = app => {
    const project = require("../controllers/project.controllers.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", project.create);
  
    // Retrieve all Tutorials
    router.get("/", project.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", project.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", project.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", project.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", project.delete);
  
    // Delete all Tutorials
    router.delete("/", project.deleteAll);
  
    app.use('/api/projects', router);
  };