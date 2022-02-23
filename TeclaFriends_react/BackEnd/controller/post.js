const postModel = require('../models/post')

//subir publicaciones
module.exports.addPublications = async (data) => {
    let result=await userModel.publications(data)
    return result;
}

//obtener publicaciones de un usuario
module.exports.getUserPublications= async (data)=>{
    let result = await userModel.userPublications(data)
    return result
}

//obtener todas las publicaciones 
module.exports.getAllPublications= async ()=>{
    let result = await userModel.allPublications()
    return result
}
