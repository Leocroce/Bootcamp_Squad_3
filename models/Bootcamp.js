const { DataTypes } = require('sequelize');
const db = require('../db/conn');
const Teacher = require('./Teacher')

const Bootcamp = db.define('Bootcamp', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    workload: {
        type: DataTypes.STRING,
        allowNull: false
    },
    modality: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


Teacher.hasMany(Bootcamp)
Bootcamp.belongsTo(Teacher)

module.exports = Bootcamp
