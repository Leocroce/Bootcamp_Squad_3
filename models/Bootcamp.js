const { DataTypes } = require('sequelize');
const db = require('../db/conn');

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

module.exports = Bootcamp
