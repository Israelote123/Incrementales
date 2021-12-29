const sequelize = require('../db/conexion')


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