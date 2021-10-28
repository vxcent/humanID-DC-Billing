module.exports = (sequelize, Sequelize) => {
    const bills = sequelize.define("bills", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true
      },
      projectExtID: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      numSmsSent: {
        numSmsSent: Sequelize.BIGINT
      },
      totalSmsCost: {
        type: Sequelize.FLOAT
      },
      marginCost: {
        type: Sequelize.FLOAT
      },
      totalCost: {
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
  
    return bills;
  };