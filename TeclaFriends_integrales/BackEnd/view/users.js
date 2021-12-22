const userController = require('../controller/users')

module.exports = (app) => {
    app.get('/login', async (req,res)=>{
        let book = req.body
        let result = await userController.accessLogin(book);
        res.json("Bienvenido "+result[0][0].name)
        //res.json(result)
    })

    app.post('/register', async (req, res) => {
        let register = req.body
        console.log(register)
        let result = await userController.addRegister(register)
        res.json(result)
    })
}