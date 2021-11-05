module.exports = (sequelize, Sequelize) => {
    const balanceLog = sequelize.define("balanceLog", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true
      },
      projectExtID: {
        type: Sequelize.STRING
      },
      logType: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE(6)
      },
      balance: {
        type: Sequelize.FLOAT
      },
      numSms: {
        type: Sequelize.BIGINT
      },
      reserveBalanceThreshold: {
        type: Sequelize.FLOAT
      },
      balanceWarningThreshold: {
        type: Sequelize.FLOAT
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
  
    return balanceLog;
  };