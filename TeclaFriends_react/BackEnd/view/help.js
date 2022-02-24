const helpController = require('../controller/help')
const auth = require("../middlewares/authenticate");

module.exports = (app) => {

    //formulario de ayuda
    app.post('/help', auth.authenticate, async (req, res) => {
        let help = req.body
        let result = await helpController.addHelp(help)
        res.json(result)
    })

}