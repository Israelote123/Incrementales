module.exports=(sequelize, type)=> {
    return  sequelize.define('users',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nombre: type.STRING,
        apellido1:type.STRING,
        apellido2:type.STRING,
        email:type.STRING,
        username:type.STRING,
        password:type.STRING(150),
        fecha: type.DATE
    })
}