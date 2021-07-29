const Sequelize = require("sequelize");
const sequelize = require("./db");
//const Book = require("./book");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

User.associate = models => models.User.hasMany(models.Book);

module.exports = User;
