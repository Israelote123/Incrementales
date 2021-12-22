const registerController = require('../controller/register')

module.exports = (app) => {
    app.post('/register', async (req, res) => {
        let register = req.body
        console.log(register)
        let result = await registerController.addRegister(register)
        res.json(result)
    })
}