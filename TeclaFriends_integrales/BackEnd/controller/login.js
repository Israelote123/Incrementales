const loginModel = require('../models/login')

module.exports.accessLogin = async (book)=>{
    let result = await loginModel.login(book)
    return result
}


