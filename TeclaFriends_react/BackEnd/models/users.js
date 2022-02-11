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
module.exports.courseDo = async (data) => {
    let result = await sequelize.query(`SELECT * FROM cursos where mail='${data}'`)
    return result
}
module.exports.Ability = async (data) => {
    let result = await sequelize.query(`SELECT * FROM abilities where mail='${data}'`)
    return result
}



module.exports.busqueda = async (searchUser) => {
    let result = await sequelize.query(`SELECT ${process.env.ROWS} FROM register where name LIKE '%${searchUser}%'`)
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

//insertar nuevos cursos
module.exports.cours = async(course) => {
    
        await sequelize.query(`INSERT INTO cursos (nombre_curso, fecha_curso, lugar_curso, mail) VALUES ('${course.nombre_curso}', '${course.fecha_curso}', '${course.lugar_curso}','${course.mail}')`)
         return "courseAdded";   
}

//insertar nuevas habilidades
module.exports.Abilities = async(habilidades) => {
    
    await sequelize.query(`INSERT INTO abilities (mail,skill) VALUES ('${habilidades.mail}', '${habilidades.skill}')`)
     return "abiltityAdded";   
}


//formulario de ayuda
module.exports.help = async(help) => {
    await sequelize.query(`INSERT INTO ayuda (mail,titulo,consulta,problemas) VALUES ('${help.mail}', '${help.titulo}','${help.consulta}','${help.problemas}')`)
     return "Query sent";   
}


//obtener solicitudes de amistad
module.exports.solicitudAmistad = async (data) => {
    let result = await sequelize.query(`SELECT * FROM friends where status='pendiente' AND receptor='${data}'`)
    return result
}

//manda solicitudes de amistad
module.exports.requestt = async(friend) => {
    await sequelize.query(`INSERT INTO friends (receptor,emisor,status) VALUES ('${friend.receptor}', '${friend.emisor}','${friend.status}')`)
     return "friend request sent";   
}

//actualizar solicitud de amistad
module.exports.updatee= async(actualizar) => {
    if(actualizar.status=="rechazado")
    {
        await sequelize.query(`UPDATE friends SET status='${actualizar.status}' WHERE receptor='${actualizar.receptor}' AND emisor='${actualizar.emisor}'`)
        return 'Reject solicitud'
    }
    else if(actualizar.status=="amigo"){
        await sequelize.query(`UPDATE friends SET status='${actualizar.status}' WHERE receptor='${actualizar.receptor}' AND emisor='${actualizar.emisor}'`)  
        return `'${actualizar.name}' and you are already friends`; 
    }
    else if(actualizar.status=="cancel") {
        await sequelize.query(`DELETE FROM friends  WHERE receptor='${actualizar.receptor}' AND emisor='${actualizar.emisor}'`)  
        return `request cancel `; 
    }
    else{
        await sequelize.query(`UPDATE friends SET status='${actualizar.status}' WHERE receptor='${actualizar.receptor}' AND emisor='${actualizar.emisor}'`)  
        return `'${actualizar.name}' and you are no longer friends `; 
    }
     
}
//obtener solicitudes de amistad
module.exports.solicitudFriend = async (data) => {
    let result = await sequelize.query(`SELECT * FROM register LEFT JOIN friends ON mail=emisor  WHERE receptor='${data}' AND status='pendiente' `)
    return result
}

//obtener amigos
module.exports.friends= async (data) => {
    let result = await sequelize.query(`SELECT * FROM register LEFT JOIN friends ON mail=emisor  WHERE receptor='${data}' AND status='amigo' `)
    return result
}
//obtener noamigos para desc
module.exports.noFriends= async (data) => {
    let result = await sequelize.query(`SELECT * 
                                        FROM register R 
                                        LEFT JOIN friends F 
                                        ON R.mail=F.emisor 
                                        WHERE ((status IS NULL OR status='pendiente') AND NOT mail='${data}')
                                        OR        
                                        (NOT mail='${data}' AND status IS NULL) 
                                        AND NOT
                                        ((NOT status='pendiente' OR NOT status='amigo') AND ( receptor='${data}' OR emisor='${data}') )  
                                    `)
    return result
}

//formulario feeedback
module.exports.feedback = async(data) => {
    await sequelize.query(`INSERT INTO feedbackk (mail,author,name,feedback,commit) VALUES ('${data.mail}', '${data.author}','${data.name}','${data.feedback}','${data.commit}')`)
     return "Feedback sent";   
}



