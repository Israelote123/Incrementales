const sequelize = require('../db/conexion')

//formulario feeedback
module.exports.feedback = async(data) => {
    await sequelize.query(`INSERT INTO feedbackk (mail,author,name,feedback,commit) VALUES ('${data.mail}', '${data.author}','${data.name}','${data.feedback}','${data.commit}')`)
     return "Feedback sent";   
}

//obtener los feedback
module.exports.feedbackGet= async (data) => {
    let result = await sequelize.query(`SELECT * FROM feedbackk WHERE mail='${data}' `)
    return result
}
