const db = require("../models");
const Bills = db.bills;
const Op = db.Sequelize.Op;

// Create and Save a new bills
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
          message: "Bills can not be empty!"
        });
        return;
    };

    const bills = {
      id: req.body.id,
      projectExtID: req.body.projectExtId,
      date: req.body.date,
      numSmsSent: req.body.numSmsSent,
      totalSmsCost: req.body.totalSmsCost,
      marginCost: req.body.marginCost,
      totalCost: req.body.totalCost,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
      modiefiedBy: req.body.modiefiedBy,
      version: req.body.version
    };
    
      // Save bills in the database
      Bills.create(bills)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the bills."
          });
        });
};

// Retrieve all billss from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Bills.findAll({ where: condition })
    .then(data => {
      console.log("test");
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bills."
      });
    });
};

// Find a single bills with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Bills.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find bills with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving bills with id=" + id
      });
    });
};

// Update a bills by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Bills.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "bills was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update bills with id=${id}. Maybe bills was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating bills with id=" + id
      });
    });
};

// Delete a bills with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Bills.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "bills was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete bills with id=${id}. Maybe bills was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete bills with id=" + id
      });
    });
};

// Delete all billss from the database.
exports.deleteAll = (req, res) => {
  Bills.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} billss were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all bills."
      });
    });
};

// Find all published bills
exports.findAllPublished = (req, res) => {
  Bills.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bills."
      });
    });
};