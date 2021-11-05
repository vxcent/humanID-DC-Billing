module.exports = (sequelize, Sequelize) => {
    const client = sequelize.define("client", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true
      },
      projectExtID: {
        type: Sequelize.STRING
      },
      clientEmail: {
        type: Sequelize.STRING
      },
      clientName: {
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
  
    return client;
  };