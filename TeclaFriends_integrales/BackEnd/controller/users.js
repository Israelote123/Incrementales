const userModel = require('../models/users')

module.exports.accessLogin = async (book)=>{
    let result = await userModel.login(book)
    return result
}

module.exports.addRegister = async (register) => {
    await userModel.add(register)
    return "userAdded"
}