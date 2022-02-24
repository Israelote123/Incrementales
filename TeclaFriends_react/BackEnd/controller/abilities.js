const abilitiesModel = require('../models/abilities')

//obtener todos las habilidades
module.exports.getAbility = async (data)=>{
    let result = await abilitiesModel.Ability(data)
    return result
}

//insertar nuevas habilidades
module.exports.addAbility = async (habilidad) => {
    let result=await abilitiesModel.Abilities(habilidad)
    return result;
}
