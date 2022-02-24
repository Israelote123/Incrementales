const postController = require('../controller/post')
const auth = require("../middlewares/authenticate");

module.exports = (app) => {

    //subir publicaciones
    app.post('/publications', auth.authenticate, async (req, res) => {
        let data = req.body
        let result = await postController.addPublications(data)
        console.log(result)
        res.json(result)
    })

    //obtener publicaciones de un de usuario
    app.get('/publications/:user', async (req, res) => {
        let data = req.params.user;
        let result = await postController.getUserPublications(data)
        res.json(result[0])
    })

    //obtener todas las publicaciones
    app.get('/publicationsall', async (req, res) => {
        let result = await postController.getAllPublications()
        res.json(result[0])
    })

}