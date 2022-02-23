const postModel = require('../models/post')

//insertar nuevas petciciones de ayuda
module.exports.addHelp = async (help) => {
    let result=await userModel.help(help)
    return result;
}
