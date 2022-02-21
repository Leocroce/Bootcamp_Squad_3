const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
   
    process.env.MYSQL_DB,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
    }
)

try{
    sequelize.authenticate()
    console.log('Conectados ao Banco via ORM')
}catch(error){
    console.log(`Não foi possivel conectar ao banco: ${error}`)
}

module.exports = sequelize;

