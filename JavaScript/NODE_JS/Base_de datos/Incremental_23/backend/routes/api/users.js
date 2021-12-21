//const validate = require("../middlewares/midd.users")


   

const router=require('express').Router();
const{usuario}=require('../../conexion');


//obtiene informacion
router.get('/',async(req,res)=>{
    const usuarios=await usuario.findAll();
    res.json(usuarios);
});

//logear un usuario existente
router.post('/login', (req,res)=>{
    let user = req.body
    res.send(user)
});



//crea un nuevo usuario, registro
router.post('/registro',async(req,res)=>{
    const usuarios= await usuario.create(req.body);
    res.json(usuarios);
});

//actualiza algun atributo de usuario
router.put('/:email',async(req,res)=>{
    await usuario.update(req.body  ,{
        where:{email: req.params.email}//condicion para modificar
    });
    res.json({sucess: "Se actualizo tu status"})
})

// borra algun usuario
router.delete('/:id',async(req,res)=>{
     await usuario.destroy({
         where: {id:req.params.id}
     });
     res.json({sucess: "Se ha borrado"})
})


module.exports=router;