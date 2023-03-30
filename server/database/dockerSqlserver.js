const Sequelize = require('sequelize')

module.exports = new Sequelize(
    'cpbl', 'sa', 'gp2u03@tonyinfos', {
    host: 'localhost',
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
