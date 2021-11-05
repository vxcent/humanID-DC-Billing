module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "humanIDDB2021!!",
    DB: "billing_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };