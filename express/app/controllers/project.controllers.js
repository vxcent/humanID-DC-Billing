const db = require("../models");
const Project = db.project;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.id) {
        res.status(400).send({
          message: "Project can not be empty!"
        });
        return;
    };

    const project = {
      id: req.body.id,
      projectExtID: req.body.projectExtID,
      balance: req.body.balance,
      marginUsdRate: req.body.marginUsdRate,
      reserveBalanceThreshold: req.body.reserveBalanceThreshold,
      balanceWarningThreshold: req.body.balanceWarningThreshold,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
      modiefiedBy: req.body.modiefiedBy,
      version: req.body.version
    };
    
      // Save Tutorial in the database
    Project.create(project)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the project."
        });
      });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Project.findAll({ where: condition })
    .then(data => {
      console.log("test");
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const projectExtID = req.params.projectExtID;
  var condition = projectExtID ? { projectExtID: { [Op.like]: `%${projectExtID}%` } } : null;
  // const limit = req.params.limit;
  Project.findOne({where: condition})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find projectId=${projectExtID}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving "+ projectExtID
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Project.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const projectId = req.params.projectExtID;

  Project.destroy({
    where: { projectExtID: projectExtID }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Project.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Project.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};