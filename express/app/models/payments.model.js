module.exports = (sequelize, Sequelize) => {
    const payment = sequelize.define("payment", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true
      },
      projectExtID: {
        type: Sequelize.STRING
      },
      StripeId: {
        type: Sequelize.STRING
      },
      submittedAt: {
        type: Sequelize.DATE
      },
      processedAt: {
        type: Sequelize.DATE
      },
      amount: {
        type: Sequelize.FLOAT
      },
      beforeBalance: {
        type: Sequelize.FLOAT
      },
      afterBalance: {
        type: Sequelize.FLOAT
      },
      paymentInfo: {
        type: Sequelize.STRING
      },
      autoPayment: {
        type: Sequelize.BOOL
      },
      client_email: {
        type: Sequelize.STRING
      },
      client_name: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      modifiedBy: {
        type: Sequelize.JSON
      },
      version: {
        type: Sequelize.BIGINT
      }
    });
  
    return payment;
  };