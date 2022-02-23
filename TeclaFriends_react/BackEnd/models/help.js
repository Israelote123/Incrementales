const sequelize = require('../db/conexion')

//formulario de ayuda
module.exports.help = async(help) => {
    await sequelize.query(`INSERT INTO ayuda (mail,titulo,consulta,problemas) VALUES ('${help.mail}', '${help.titulo}','${help.consulta}','${help.problemas}')`)
     return "Query sent";   
}
