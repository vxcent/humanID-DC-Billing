module.exports = (sequelize, Sequelize) => {
    const sms = sequelize.define("sms", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true
      },
      projectExtID: {
        type: Sequelize.STRING
      },
      usdCost: {
        type: Sequelize.FLOAT
      },
      sentAt: {
        type: Sequelize.DATE
      },
      providerExtId: {
        type: Sequelize.STRING
      },
      country: {
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
  
    return sms;
  };