const db = require("../models");
const smsRates = db.smsRates;
const Op = db.Sequelize.Op;

// Create and Save a new client
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
          message: "Balance Log can not be empty!"
        });
        return;
    };

    const smsRates = {
      id: req.body.id,
      projectExtID: req.body.projectExtId,
      logType: req.body.logType,
      date: req.body.date,
      balance: req.body.balance,
      numSms: req.body.numSms,
      reserveBalanceThreshold: req.body.reserveBalanceThreshold,
      balanceWarningThreshold: req.body.balanceWarningThreshold,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
      modiefiedBy: req.body.modiefiedBy,
      version: req.body.version
    };
    
      // Save client in the database
      smsRates.create(smsRates)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the client."
          });
        });
};

// Retrieve all clients from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  smsRates.findAll({ where: condition })
    .then(data => {
      console.log("test");
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving clients."
      });
    });
};

// Find a single client with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  smsRates.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find client with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving client with id=" + id
      });
    });
};

// Update a client by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  smsRates.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Client was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Client with id=${id}. Maybe Client was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Client with id=" + id
      });
    });
};

// Delete a client with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  smsRates.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Client was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Client with id=${id}. Maybe client was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Client with id=" + id
      });
    });
};

// Delete all clients from the database.
exports.deleteAll = (req, res) => {
  smsRates.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} clients were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all clients."
      });
    });
};

// Find all published clients
exports.findAllPublished = (req, res) => {
  smsRates.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving clients."
      });
    });
};