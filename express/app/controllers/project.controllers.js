const db = require("../models");
const project = db.project;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
          message: "Project can not be empty!"
        });
        return;
    };

    const project = {
        id: req.body.id,
        projectExtID: req.body.projectExtId,
        balance: req.body.balance,
        marginUsdRate: req.body.marginUsdRate,
        reserveBalanceThreshold: req.body.reserveBalanceThreshold,
        balanceWarningThrewshold: req.body.balanceWarningThrewshold,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
        modiefiedBy: req.body.modiefiedBy,
        version: req.body.version
      };
    
      // Save Tutorial in the database
      Tutorial.create(tutorial)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};