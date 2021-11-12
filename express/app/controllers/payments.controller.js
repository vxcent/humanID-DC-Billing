const db = require("../models");
const Payments = db.payments;
const Op = db.Sequelize.Op;

// Create and Save a new payments
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
          message: "Balance Log can not be empty!"
        });
        return;
    };

    const payments = {
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
    
      // Save payments in the database
      Payments.create(payments)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the payments."
          });
        });
};

// Retrieve all paymentss from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Payments.findAll({ where: condition })
    .then(data => {
      console.log("test");
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving paymentss."
      });
    });
};

// Find a single payments with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Payments.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find payments with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving payments with id=" + id
      });
    });
};

// Update a payments by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Payments.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "payments was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update payments with id=${id}. Maybe payments was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating payments with id=" + id
      });
    });
};

// Delete a payments with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Payments.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "payments was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete payments with id=${id}. Maybe payments was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete payments with id=" + id
      });
    });
};

// Delete all paymentss from the database.
exports.deleteAll = (req, res) => {
  Payments.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} paymentss were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all paymentss."
      });
    });
};

// Find all published paymentss
exports.findAllPublished = (req, res) => {
  Payments.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving paymentss."
      });
    });
};