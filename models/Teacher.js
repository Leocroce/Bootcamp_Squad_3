const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Teacher = db.define("Teacher", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  disciplines: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Teacher;
