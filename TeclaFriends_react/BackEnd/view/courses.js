const coursesController = require('../controller/courses')
const auth = require("../middlewares/authenticate");

module.exports = (app) => {

    //obtener cursos con mail
    app.get('/cursos/:mail', auth.authenticate, async (req, res) => {
        let data = req.params.mail;
        let result = await userController.getCourse(data)
        res.json(result[0])
    })

     //insertar informacion en tabla cursos
     app.post('/cursos', auth.authenticate, async (req, res) => {
        let course = req.body
        let result = await userController.addCourse(course)
        res.json(result)
    })

}