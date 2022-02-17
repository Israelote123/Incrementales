const Joi = require('joi')

module.exports = {
    modelLogin : Joi.object().keys({
        //user: Joi.string().alphanum().min(6).max(16).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{8,16}$/).required(),
        mail: Joi.string().email().required(),
    }).with('password','mail'),

    modelRegister : Joi.object().keys({
        mail: Joi.string().email().required(),
        password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/).required(),
        name:Joi.string().required(),
        middle_name: Joi.string().required(),
        last_name: Joi.string().required(),
        city:Joi.string().required(),
        country:Joi.string().required(),
        birth_date:Joi.string().required(),
        academic_level:Joi.string().allow("").optional(),
        lenguages:Joi.string().allow("").optional(),
        linkedIn:Joi.string().allow("").optional(),
        hobbies:Joi.string().allow("").optional(),
        profile_photo: Joi.string().allow("").optional(),
    }).with('mail','password'),//'name','middle_name','last_name','city','country','birth_date','academic_level','lenguages','linkedIn','hobbies','profile_photo'),   
}
