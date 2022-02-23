const feedbackController = require('../controller/feedback')
const auth = require("../middlewares/authenticate");

module.exports = (app) => {

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