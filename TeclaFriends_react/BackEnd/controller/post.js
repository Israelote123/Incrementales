const postModel = require('../models/post')

//subir publicaciones
module.exports.addPublications = async (data) => {
    let result=await postModel.publications(data)
    return result;
}

//obtener publicaciones de un usuario
module.exports.getUserPublications= async (data)=>{
    let result = await postModel.userPublications(data)
    return result
}

//obtener todas las publicaciones 
module.exports.getAllPublications= async ()=>{
    let result = await postModel.allPublications()
    return result
}
