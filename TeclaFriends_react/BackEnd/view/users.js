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
    
    //obtenr cursos con mail
    app.get('/cursos/:mail', auth.authenticate, async (req, res) => {
        let data = req.params.mail;
        let result = await userController.getCourse(data)
        res.json(result[0])
    })

    //obtenr habilidades con mail
    app.get('/habilidades/:mail', auth.authenticate, async (req, res) => {
        let result = await userController.getAbility(req.params.mail)
        res.json(result[0])
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

     //insertar informacion en tabla cursos
     app.post('/cursos', auth.authenticate, async (req, res) => {
        let course = req.body
        let result = await userController.addCourse(course)
        res.json(result)
    })

    //insertar nueva habilidad
    app.post('/habilidades', auth.authenticate, async (req, res) => {
        let habilidad = req.body
        let result = await userController.addAbility(habilidad)
        res.json(result)
    })

    //formulario de ayuda
    app.post('/help', auth.authenticate, async (req, res) => {
        let help = req.body
        let result = await userController.addHelp(help)
        res.json(result)
    })

    //mandar solicitud de amistad
    
    app.post('/request', auth.authenticate, async (req, res) => {
        let friend = req.body
        let result = await userController.sendRequest(friend)
        res.json(result)
    })

    
    //obtener todas las solicitudes de amistad
    
    app.get('/request/:receptor', auth.authenticate, async (req, res) => {
        let data = req.params.receptor;
        let result = await userController.getRequest(data)
        res.json(result[0])
    })

    //Actualizar stattus 
    app.post('/request/update', auth.authenticate, async (req, res) => {
        let actualizar = req.body
        let result = await userController.updateRequest(actualizar)
        res.json(result)
    })

    //obtener personas que mandaron solicitud de amistad   
    app.get('/amistad/:receptor', auth.authenticate, async (req, res) => {
        let data = req.params.receptor;
        let result = await userController.getAmistad(data)
        res.json(result[0])
    })

    //obtener amigos   
    app.get('/amigos/:receptor', auth.authenticate, async (req, res) => {
        let data = req.params.receptor;
        let result = await userController.getFriends(data)
        res.json(result[0])
    })
    
    //obtener no amigos para descubrir  
    app.get('/noamigos/:receptor', auth.authenticate, async (req, res) => {
        let data = req.params.receptor;
        let result = await userController.getNoFriends(data)
        res.json(result[0])
    })
    
    //formulario feedback
    app.post('/feedback', auth.authenticate, async (req, res) => {
        let data = req.body
        let result = await userController.addFeedback(data)
        res.json(result)
    })
    
    app.get('/feedbackget/:user', auth.authenticate, async (req, res) => {
        console.log("hollaaa")
        let data = req.params.user;
        let result = await userController.getFeedback(data)
        res.json(result[0])
    })
   

}