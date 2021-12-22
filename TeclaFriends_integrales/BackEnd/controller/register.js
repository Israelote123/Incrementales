const registerModel = require('../model/register')

module.exports.addRegister = async (register) => {
    await registerModel.add(register)
    return "userAdded"
}