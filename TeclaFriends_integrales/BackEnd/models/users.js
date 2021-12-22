const sequelize = require('../db/conexion')

module.exports.login = async (book)=> {
    let result = await sequelize.query(`SELECT name FROM register WHERE mail='${book.mail}' AND password=MD5('${book.password}') `);
    return result;
   
};

module.exports.add = async(register) => {
    await sequelize.query(`INSERT INTO register (mail, name, middle_name, last_name, city, country, birth_date, academic_level, lenguages, linkedIn, hobbies, password, profile_photo) VALUES ('${register.mail}', '${register.name}', '${register.middle_name}', '${register.last_name}', '${register.city}', '${register.country}', '${register.birth_date}', '${register.academic_level}', '${register.lenguages}', '${register.linkedIn}', '${register.hobbies}', MD5('${register.password}'), '${register.profile_photo}')`)
}