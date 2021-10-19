module.exports = (sequelize, Sequelize) => {
    const project = sequelize.define("project", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true
      },
      projectExtID: {
        type: Sequelize.STRING
      },
      balance: {
        type: Sequelize.FLOAT
      },
      marginUsdRate: {
        type: Sequelize.FLOAT
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
  
    return project;
  };