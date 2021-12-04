const db = require("../models");
const Payments = db.payments;
const Op = db.Sequelize.Op;

// Create and Save a new payments
exports.create = (req, res) => {
    if (!req.body.id) {
        res.status(400).send({
          message: "Balance Log can not be empty!"
        });
        return;
    };

    const payment = {
      id: req.body.id,
      projectExtID: req.body.projectExtId,
      stripeId: req.body.stripeId,
      submittedAt: req.body.submittedAt,
      processedAt: req.body.processedAt,
      amount: req.body.amount,
      // beforeBalance: req.body.beforeBalance,
      // afterBalance: req.body.afterBalance,
      paymentInfo: req.body.paymentInfo,
      autoPayment: req.body.autoPayment,
      client_email: req.body.client_email,
      client_name: req.body.client_name,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
      modifiedBy: req.body.modifiedBy,
      version: req.body.version
    };
    
      // Save payments in the database
    Payments.create(payment)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the payment."
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
exports.findAll = (req, res) => {
  const projectId = req.params.projectExtID;
  const limit = req.params.limit;
  Payments.finAll({where: {projectExtID : projectId}}, {limit: limit})
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