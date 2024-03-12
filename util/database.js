const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-course", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
