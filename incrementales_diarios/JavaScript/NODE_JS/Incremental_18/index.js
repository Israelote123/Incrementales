const express=require('express');
const app=express(); 

require('dotenv').config();
const fecha = require('./fecha');
const rimagen = require('./imgRandom');

app.listen(process.env.PORT,()=>{
    console.log('servidor esta iniciando en el puerto 3000...');
})

app.get('/',(req,res)=>{
    res.status(200).json({
        timeUtc : utc,
        timeNow: fecha.now,
        randomImg: rimagen.imagen
    })
})
