const userController = require('../controller/users')
const validate=require('../middlewares/midd.user')
module.exports = (app) => {
   
    //iniciar secion
    app.post('/login', async (req,res)=>{
        let login = req.body
        let result = await userController.accessLogin(login);
        //res.json("Bienvenido "+result[0][0].name)
        res.status(200).send(JSON.stringify(result))
    })

    app.get('/aleatorio', async (req, res) => {
        let tecler = req.body
        let result = await userController.aleatoryTecler(tecler);
        res.json(result)
    })
     //obtener datos
    app.get('/:mail', async (req, res)=>{
        let data=req.params.mail;
        let result = await userController.getDatos(data)
        res.json(result)
    })
    
    //registra nuevo ususario
    app.post('/register', validate.chkRegister,async (req, res) => {
        let register = req.body
        console.log(register)
        let result = await userController.addRegister(register)
        res.json(result)
    })
}