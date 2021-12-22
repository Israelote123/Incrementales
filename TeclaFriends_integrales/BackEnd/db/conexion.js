const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', process.env.DBUSER , null, {
  host: 'localhost',
  dialect: 'mysql'
});


module.exports = sequelize;