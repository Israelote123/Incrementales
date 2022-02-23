const friendsModel = require('../models/friends')

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
