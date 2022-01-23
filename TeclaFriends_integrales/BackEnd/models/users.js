const sequelize = require('../db/conexion')
module.exports.information = async (busqueda) => {
    let result = await sequelize.query(`SELECT * FROM register`)
    return result
}

module.exports.login = async (login)=> {
    
    const result1= await sequelize.query(`SELECT mail FROM register WHERE mail='${login.mail}'`);
    if(result1[0]!=false)
     {
        const result2=await sequelize.query(`SELECT password FROM register WHERE password=MD5('${login.password}')`);
        if(result2[0]!=false)
        {
            
            return sequelize.query(`SELECT name FROM register WHERE mail='${login.mail}' AND password=MD5('${login.password}') `); 
        }
        else{
           
           return "Contraseña erronea";
        }       
     }
     else{
      
         return "Usuario no encontrado";

     }
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



module.exports.busqueda = async (busqueda) => {
    let result = await sequelize.query(`SELECT * FROM register where name LIKE '%${busqueda}%'`)
    return result
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
module.exports.cours = async(habilidades) => {
    
    await sequelize.query(`INSERT INTO abilities (mail,skill) VALUES ('${habilidades.mail}', '${habilidades.skill}')`)
     return "abiltityAdded";   
}


//insertar nuevas habilidades
module.exports.help = async(help) => {
    await sequelize.query(`INSERT INTO ayuda (mail,titulo,consulta,problemas) VALUES ('${help.mail}', '${help.titulo}','${help.consulta}','${help.problemas}')`)
     return "Query sent";   
}