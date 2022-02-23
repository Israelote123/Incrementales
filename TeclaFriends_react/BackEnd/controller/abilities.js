const abilitiesModel = require('../models/abilities')

//obtener todos las habilidades
module.exports.getAbility = async (data)=>{
    let result = await userModel.Ability(data)
    return result
}

//insertar nuevas habilidades
module.exports.addAbility = async (habilidad) => {
    let result=await userModel.Abilities(habilidad)
    return result;
}
