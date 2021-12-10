const express = require('express')
const app = express();
const arrayU = require('./usuarios.js')

app.listen(3000, ()=>{
    console.log('servidor esta iniciando en el puerto 3000...');
})



//cambiar
function nombre(id)
{
    let array=[ {id:1, nombre: "Danilo", email: "danilo@tecla.academy" },
        {id:2, nombre: "Hugo", email: "hugo@tecla.academy"} ,
        {id:3, nombre: "Juan", email: "juan@tecla.academy"}

]

  return (`Nombre: ${array[id].nombre} <br> Email: ${array[id].email} `)
}

function validarDatos(req,res, next)
{
     let validar=req.params.id;
     if(validar<=0||validar>3){
         res.json("Datos invalidos, ingresaste un id que no existe");
     }
     else {
         next();
     }
}

app.get('/:id',validarDatos,(req,res)=>{
    let id=req.params.id;
    id=id-1;
    res.send(nombre(id));
    
});

