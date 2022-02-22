const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    process.env.DB, 
    process.env.USER, 
    process.env.PASSWORD, 
    {
        host: process.env.HOST,
        dialect: 'mysql'
    }
)

try {
    sequelize.authenticate()
    console.log('Banco de dados conectado')
} catch(err) {
    console.log('A ORM não se conectou: ', err)
}

module.exports = sequelize