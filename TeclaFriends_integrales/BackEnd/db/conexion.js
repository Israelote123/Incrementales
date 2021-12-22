const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root' , null, {
  host: 'localhost',
  dialect: 'mysql'
});


module.exports = sequelize;