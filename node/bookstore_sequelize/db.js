const Sequelize = require("sequelize");

const sequelize = new Sequelize("vgovindarajalu", "vgovindarajalu", "test", {
  host: "localhost",
  port: 5434,
  dialect: "postgres"
});

module.exports = sequelize;
