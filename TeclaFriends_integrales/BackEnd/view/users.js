const userController = require('../controller/users')
const validate = require("../middlewares/midd.user")
module.exports = (app) => {
    app.get('/login',validate.chkLogin, async (req,res)=>{
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