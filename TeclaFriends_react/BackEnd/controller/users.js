const userModel = require('../models/users')
const jwt = require('jsonwebtoken')

module.exports.getInformation = async ()=>{
    let result = await userModel.information()
    return result
}

module.exports.accessLogin = async (login)=>{
    let result = await userModel.login(login)
    if(result.login){
        return {token: await jwt.sign(result.data, "sePasaEnEts")}
    }
    return result.login
}

module.exports.getDatos = async (data)=>{
    let result = await userModel.datos(data)
    return result
}

module.exports.getBusqueda = async (searchUser)=>{
    let result = await userModel.busqueda(searchUser)
    if(result.search){
        console.log(result.data)
        return result.data
    }
    return {error : "Usuario no encontrado"}
}

module.exports.addRegister = async (register) => {
    let result=await userModel.add(register)
    return result;
}

module.exports.suma=  (a,b)=>{
    return result = a+b;
    
}

module.exports.getTodo= async ()=>{
    let result = await userModel.todo()
    return result
}
