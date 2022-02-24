const abilitiesController = require('../controller/abilities')
const auth = require("../middlewares/authenticate");

module.exports = (app) => {

    //obtener habilidades con mail
    app.get('/habilidades/:mail', auth.authenticate, async (req, res) => {
        let result = await abilitiesController.getAbility(req.params.mail)
        res.json(result[0])
    })

    //insertar nueva habilidad
    app.post('/habilidades', auth.authenticate, async (req, res) => {
        let habilidad = req.body
        let result = await abilitiesController.addAbility(habilidad)
        res.json(result)
    })

}