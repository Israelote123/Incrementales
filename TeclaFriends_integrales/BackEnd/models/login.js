const sequelize = require('../db/conexion')

module.exports.login = async (book)=> {
    let result = await sequelize.query(`SELECT name FROM register WHERE mail='${book.mail}' AND password='${book.password}' `);
    return result;
   
};

