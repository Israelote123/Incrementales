const sequelize = require('../db/conexion')

//subir publicaciones
module.exports.publications= async(data) => {
    await sequelize.query(`INSERT INTO publications(content,photos_post,likes,comments,heart,break_heart,mail) VALUES ('${data.content}', '${data.photos_post}','${data.likes}','${data.comments}','${data.heart}','${data.break_heart}','${data.mail}')`)
     return "Publish Post";   
}

//obtener publicaciones de un usuario
module.exports.userPublications= async (data) => {
    let result = await sequelize.query(`SELECT *
                                       FROM register R
                                       LEFT JOIN publications P
                                       ON R.mail=P.mail WHERE P.mail='${data}'
                                       ORDER BY id DESC
                                      `)
    return result
}

//obtener publicaciones de un usuario
module.exports.allPublications= async () => {
    console.log("alll")
    let result = await sequelize.query(`SELECT *
                                       FROM register R
                                       INNER JOIN publications P
                                       ON R.mail=P.mail 
                                       ORDER BY id DESC
                                      `)
    return result
}