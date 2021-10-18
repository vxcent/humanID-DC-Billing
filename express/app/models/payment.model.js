module.exports = (sequelize, Sequelize) => {
    const project = sequelize.define("Project Details", {
      id: {
        id: Sequelize.INT
      },
      projectExtID: {
        projectExtID: Sequelize.STRING
      },
      balance: {
        balance: Sequelize.FLOAT
      },
      marginUsdRate: {
        marginUsdRate: Sequelize.FLOAT
      },
      reserveBalanceThreshold: {
        reserveBalanceThreshold: Sequelize.FLOAT
      },
      balanceWarningThreshold: {
        balanceWarningThreshold: Sequelize.FLOAT
      },
      createdAt: {
        createdAt: Sequelize.DATETIME
      },
      updatedAt: {
        updatedAt: Sequelize.DATETIME
      },
      modifiedBy: {
        modified: Sequelize.JSON
      },
      version: {
        version: Sequelize.INT
      }
    });
  
    return project;
  };