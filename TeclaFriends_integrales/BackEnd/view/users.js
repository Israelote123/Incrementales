const userController = require('../controller/users')
const validate = require('../middlewares/midd.user')
module.exports = (app) => {
    //get para obtener informacion completa de todos los usuarios
    app.get('/information', async (req, res) => {
        //let data=req.params.mail;
        let result = await userController.getInformation()
        res.json(result)
    })

   

    //iniciar sesion
    app.post('/login', async (req, res) => {
        let login = req.body
        let result = await userController.accessLogin(login);
        //res.json("Bienvenido "+result[0][0].name)
        res.status(200).send(JSON.stringify(result))
    })


    //obtener datos con mail
    app.get('/:mail', async (req, res) => {
        let data = req.params.mail;
        let result = await userController.getDatos(data)
        res.json(result)
    })

    //funcion busqueda
    app.get('/busqueda/:entrada', async (req, res) => {
        let consulta = req.params.entrada;
        let result = await userController.getBusqueda(consulta)
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
}