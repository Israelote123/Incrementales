const userController = require('../controller/users')

module.exports = (app) => {
    app.post('/login', async (req,res)=>{
        let login = req.body
        let result = await userController.accessLogin(login);
        //res.json("Bienvenido "+result[0][0].name)
        res.status(200).send(JSON.stringify(result))
    })

    app.post('/register', async (req, res) => {
        let register = req.body
        console.log(register)
        let result = await userController.addRegister(register)
        res.json(result)
    })
}