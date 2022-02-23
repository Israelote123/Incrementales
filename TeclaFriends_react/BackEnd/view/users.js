const userController = require('../controller/users')
const validate = require('../middlewares/midd.user')
const auth = require("../middlewares/authenticate");

module.exports = (app) => {

    //get para obtener informacion completa de todos los usuarios
    app.get('/information', auth.authenticate, async (req, res) => {
        //let data=req.params.mail;
        let result = await userController.getInformation()
        res.json(result[0])
    })

    //iniciar sesion
    app.post('/login', async (req, res) => {
        let result = await userController.accessLogin(req.body);
        //res.json("Bienvenido "+result[0][0].name)

        res.status(200).send(JSON.stringify(result))
    })

    //checar sesión
    app.post('/login/check', auth.authenticate, async (req, res) => {
        let result = {login: true};
        console.log(req.headers)
        res.status(200).send(JSON.stringify(result))
    })

    //funcion busqueda
    app.get('/busqueda/:entrada', auth.authenticate, async (req, res) => {
        let result = await userController.getBusqueda(req.params.entrada)
        res.json(result)
    })

    //registra nuevo ususario
    app.post('/register', validate.chkRegister, async (req, res) => {
        let register = req.body
        let result = await userController.addRegister(register)
        res.json(result)
    })

}