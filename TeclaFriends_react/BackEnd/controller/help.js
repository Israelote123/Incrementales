const helpModel = require('../models/help')

//insertar nuevas petciciones de ayuda
module.exports.addHelp = async (help) => {
    let result=await helpModel.help(help)
    return result;
}
