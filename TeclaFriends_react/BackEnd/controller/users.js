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
    return result
}

module.exports.getDatos = async (data)=>{
    let result = await userModel.datos(data)
    return result
}


//obtener todos los cursos
module.exports.getCourse = async (data)=>{
    let result = await userModel.courseDo(data)
    return result
}


//obtener todos los cursos
module.exports.getAbility = async (data)=>{
    let result = await userModel.Ability(data)
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

//insertar nuevos cursos
module.exports.addCourse = async (course) => {
    let result=await userModel.cours(course)
    return result;
}

//insertar nuevas habilidades
module.exports.addAbility = async (habilidad) => {
    let result=await userModel.Abilities(habilidad)
    return result;
}

//insertar nuevas petciciones de ayuda
module.exports.addHelp = async (help) => {
    let result=await userModel.help(help)
    return result;
}

//envia solicitudes de amistad
module.exports.sendRequest= async (friend) => {
    let result=await userModel.requestt(friend)
    return result;
}

//obtener solicitudes de amistad
module.exports.getRequest = async (data)=>{
    let result = await userModel.solicitudAmistad(data)
    return result
}
//Acrualizar status solicitud de amistad
module.exports.updateRequest= async (actualizar) => {
    let result=await userModel.updatee(actualizar)
    return result;
}

//obtener personas que mandaron solicitud de amistad
module.exports.getAmistad = async (data)=>{
    let result = await userModel.solicitudFriend(data)
    return result
}
//obtener amigos
module.exports.getFriends= async (data)=>{
    let result = await userModel.friends(data)
    return result
}

//obtener noamigos
module.exports.getNoFriends= async (data)=>{
    let result = await userModel.noFriends(data)
    return result
}

//formulario feedback
module.exports.addFeedback = async (data) => {
    let result=await userModel.feedback(data)
    return result;
}




