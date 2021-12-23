const userModel = require('../models/users')

module.exports.accessLogin = async (login)=>{
    let result = await userModel.login(login)
    return result
}

module.exports.aleatoryTecler = async (tecler) => {
    let result = await userModel.aleatory(tecler)
    return result
}

module.exports.addRegister = async (register) => {
    await userModel.add(register)
    return "userAdded"
}