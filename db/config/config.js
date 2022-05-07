require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: null,
    database: "dln-construcciones",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "dlnconst_main",
    password: process.env.PASSWORD_DB,
    database: "dlnconst_main",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
