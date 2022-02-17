const Joi = require('joi')
const Model = require('../middlewares/models')

module.exports.chkLogin = async (req,res,next) => {
    try {
        await Joi.attempt(req.body, Model.modelLogin, "Los datos ingresados no son correctos para el login")
        return next()
    }catch (err) {
        console.log(err.message)
        res.status(500).json({error: err.message})
    }
}
module.exports.chkRegister = async (req,res,next) => {
    try {
        await Joi.attempt(req.body, Model.modelRegister, "Los datos ingresados no son correctos en el registro")
        return next()
    }catch (err) {
        console.log(err)
        res.status(500).json({error: err.message})
    }
}


