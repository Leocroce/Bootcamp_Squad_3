const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const Bootcamp = require('./Bootcamp')

const Student = db.define('Student', {
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false
    },
    grade:{
        type: DataTypes.NUMBER,
        allowNull: false
    }
})

Bootcamp.hasMany(Student)
Student.belongsTo(Bootcamp)

module.exports = Student;
