const Sequelize = require('sequelize')

module.exports = new Sequelize(
    'test', 'sa', 'gp2u03@cpbl', {
    host: '60.248.109.21',
    port: 1433,
    dialect: "mssql",
    pool: {
      max: 10,
      min: 2,
      idle: 10000
    },
    dialectOptions: {
      options: { encrypt: true }
    }
})
