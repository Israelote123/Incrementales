const sequelize = require('../db/conexion')

//insertar nuevos cursos
module.exports.cours = async(course) => {
    
        await sequelize.query(`INSERT INTO cursos (nombre_curso, fecha_curso, lugar_curso, mail) VALUES ('${course.nombre_curso}', '${course.fecha_curso}', '${course.lugar_curso}','${course.mail}')`)
         return "courseAdded";   
}

module.exports.courseDo = async (data) => {
    let result = await sequelize.query(`SELECT * FROM cursos where mail='${data}'`)
    return result
}