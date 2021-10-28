module.exports = (sequelize, Sequelize) => {
    const smsRates = sequelize.define("smsRates", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true
      },
      providerExtID: {
        type: Sequelize.STRING
      },
      countryCode: {
        type: Sequelize.STRING
      },
      usdRate: {
        type: Sequelize.FLOAT
      },
      localRate: {
        type: Sequelize.FLOAT
      },
      localCurrency: {
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
  
    return smsRates;
  };