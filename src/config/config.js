const { ServerConfig } = require("./index");

module.exports = {
  development: {
    username: ServerConfig.DB_USERNAME,
    password: ServerConfig.DB_PASSWORD,
    database: "database_development",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: ServerConfig.DB_USERNAME,
    password: ServerConfig.DB_PASSWORD,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: ServerConfig.DB_USERNAME,
    password: ServerConfig.DB_PASSWORD,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
