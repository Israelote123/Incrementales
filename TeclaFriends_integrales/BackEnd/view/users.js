const userController = require('../controller/users')
const validate = require('../middlewares/midd.user')
module.exports = (app) => {
    //get para obtener informacion completa de todos los usuarios
    app.get('/information', async (req, res) => {
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
    
    //obtenr cursos con mail
    app.get('/cursos/:mail', async (req, res) => {
        let data = req.params.mail;
        let result = await userController.getCourse(data)
        res.json(result[0])
    })

    //obtenr habilidades con mail
    app.get('/habilidades/:mail', async (req, res) => {
        let result = await userController.getAbility(req.params.mail)
        res.json(result[0])
    })

    
    //funcion busqueda
    app.get('/busqueda/:entrada', async (req, res) => {
        let result = await userController.getBusqueda(req.params.entrada)
        res.json(result)
    })

    //registra nuevo ususario
    app.post('/register', validate.chkRegister, async (req, res) => {
        let register = req.body
        console.log(register)
        let result = await userController.addRegister(register)
        res.json(result)
    })

     //insertar informacion en tabla cursos
     app.post('/cursos', async (req, res) => {
        let course = req.body
        let result = await userController.addCourse(course)
        res.json(result)
    })

    //insertar nueva habilidad
    app.post('/habilidades', async (req, res) => {
        let habilidad = req.body
        let result = await userController.addAbility(habilidad)
        res.json(result)
    })

    //insertar nueva habilidad
    app.post('/help', async (req, res) => {
        let help = req.body
        let result = await userController.addHelp(help)
        res.json(result)
    })

}