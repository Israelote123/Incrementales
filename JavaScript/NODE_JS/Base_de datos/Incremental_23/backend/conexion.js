//conexion
const Sequelize=require('sequelize');//importar sequelize
const userModel=require('./models/users');//importar moledo users
const path='mysql://root@localhost:3306/prueba_sequelize';//definir ruta
const sequelize = new Sequelize(path,{operatorsAliases: false});//instancear sequelize, con una configuracion expecifica

//module.exports=sequelize;//exportar modulo

const usuario=userModel(sequelize,Sequelize);
sequelize.sync({force:false})
.then(()=>{
    console.log("tablas sincronizadas");
})

module.exports={
    usuario
}