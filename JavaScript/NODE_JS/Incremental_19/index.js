const express = require('express')
const app = express();
const arrayU = require('./usuarios.js')
let usuarioN;

app.listen(3000, ()=>{
    console.log('servidor esta iniciando en el puerto 3000...');
})

function validarDatosId(req,res, next)
{
     let validarId=req.params.id;
     if(validarId<=0||validarId>3){
        res.status(400).send("Datos invalidos, ingresaste un id que no existe");
     }
     else {
        next();
     }
}

function validarDatosNombre(req,res, next){
     let validarNombre=req.params.nombre;
     let vN;
     for(let x = 0; x < arrayU.arrayUsuarios.length; x++){
         if(validarNombre==arrayU.arrayUsuarios[x].nombre){
            vN = true;
            usuarioN = arrayU.arrayUsuarios[x];
         }
        };
     if(vN){
        next(); 
     }
     else {
        res.status(400).send("Datos invalidos, ingresaste un nombre que no existe");
     }
}

app.get('/busquedaID/:id', validarDatosId, (req, res)=>{
    res.send(`<h1>Id: ${arrayU.arrayUsuarios[req.params.id-1].id} Nombre: ${arrayU.arrayUsuarios[req.params.id-1].nombre} Correo: ${arrayU.arrayUsuarios[req.params.id-1].email}</h1>`)
})

app.get('/busquedaNombre/:nombre', validarDatosNombre, (req, res)=>{
    res.send(`<h1>Id:${usuarioN.id} Nombre: ${usuarioN.nombre} Correo: ${usuarioN.email}</h1>`)
})
