const sequelize = require('../db/conexion')

module.exports.information = async (busqueda) => {
    let result = await sequelize.query(`SELECT * FROM register`)
    return result
}

module.exports.login = async (login)=> {
    let response = await sequelize.query(`SELECT ${process.env.ROWS} FROM register WHERE mail LIKE '${login.mail}' AND password = MD5('${login.password}')`);
 
    let loginResult = await response[0][0] ? true : false;

    let loginRes = {
        login: loginResult,
        data: response[0][0] ? response[0][0] : false
    }
    return loginRes
};

module.exports.datos = async (data) => {
    let result = await sequelize.query(`SELECT * FROM register where mail='${data}'`)
    return result
}

module.exports.busqueda = async (searchUser) => {
    let result = await sequelize.query(`SELECT ${process.env.ROWS} FROM register where (name LIKE '%${searchUser}%' OR middle_name LIKE '%${searchUser}%' OR last_name LIKE '%${searchUser}%' OR mail LIKE '%${searchUser}%')`)
    let searchResult = await result[0] ? true : false;
    console.log(result[0])
    let searchRes = {
        search: searchResult,
        data: result[0] ? result[0] : false
    }
    return searchRes
}

module.exports.add = async(register) => {
    const comparacion= await sequelize.query(`SELECT mail FROM register WHERE mail='${register.mail}'`);       
    if(comparacion[0]==false)
    {
        await sequelize.query(`INSERT INTO register (mail, name, middle_name, last_name, city, country, birth_date, academic_level, lenguages, linkedIn, hobbies, password, profile_photo) VALUES ('${register.mail}', '${register.name}', '${register.middle_name}', '${register.last_name}', '${register.city}', '${register.country}', '${register.birth_date}', '${register.academic_level}', '${register.lenguages}', '${register.linkedIn}', '${register.hobbies}', MD5('${register.password}'), '${register.profile_photo}')`)
         return "userAdded";
    }
    else{
        return {"error": "El email ya esta registrado"} ;
    }
   
}

module.exports.todo= async () => {
    let result = await sequelize.query(`SELECT * FROM feedbackk`)
    return result
}

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
