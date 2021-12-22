const loginController = require('../controller/login')

module.exports = (app)=> {
   app.post('/login', async (req,res)=>{
        let book = req.body
        let result = await loginController.accessLogin(book);
        res.json("Bienvenido "+result[0][0].name)
        //res.json(result)
    })
}

