module.exports = (sequelize, Sequelize) => {
    const payments = sequelize.define("payments", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true
      },
      projectExtID: {
        type: Sequelize.STRING
      },
      stripeId: {
        type: Sequelize.STRING
      },
      submittedAt: {
        type: Sequelize.DATE
      },
      processedAt: {
        type: Sequelize.DATE
      },
      amount: {
        type: Sequelize.BIGINT
      },
      beforeBalance: {
        type: Sequelize.BIGINT
      },
      afterBalance: {
        type: Sequelize.BIGINT
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
  
    return payments;
  };