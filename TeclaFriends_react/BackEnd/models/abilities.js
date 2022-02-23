const sequelize = require('../db/conexion')

module.exports.Ability = async (data) => {
    let result = await sequelize.query(`SELECT * FROM abilities where mail='${data}'`)
    return result
}

//insertar nuevas habilidades
module.exports.Abilities = async(habilidades) => {
    
    await sequelize.query(`INSERT INTO abilities (mail,skill) VALUES ('${habilidades.mail}', '${habilidades.skill}')`)
     return "abiltityAdded";   
}
