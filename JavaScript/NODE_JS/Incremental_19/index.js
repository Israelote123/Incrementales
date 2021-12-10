const express = require('express')
const app = express();
const arrayU = require('./usuarios.js')

app.listen(3000, ()=>{
    console.log('servidor esta iniciando en el puerto 3000...');
})