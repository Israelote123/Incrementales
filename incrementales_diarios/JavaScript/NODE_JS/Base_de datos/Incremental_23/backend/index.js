const express=require('express');//lo requiero
const bodyParser=require('body-parser');
const apiRouter=require('./routes/api');
const app=express();//exportar e instancear  express

require('./conexion');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',apiRouter);//todas las peticiones que vengan con /api, vana hacia apiRoutes
//levantar la aplicacion, lo pongo a escuchar, en el puerto 3000
app.listen(3000,()=>{
    console.log('Corriendo en puerto 3000');
});
