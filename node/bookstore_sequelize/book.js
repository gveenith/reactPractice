const Sequelize = require("sequelize");
const sequelize = require("./db");
//const User = require("./user");

const Book = sequelize.define("bookstore", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

//Book.belongsTo(User);
Book.associate = models => models.Book.belongsTo(models.User);

module.exports = Book;
