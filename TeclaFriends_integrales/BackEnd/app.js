const express = require("express")
let app = express();
require("dotenv").config()
const registerView = require('./view/register')
const loginViews = require('./view/login')

const sequelize = require('./db/conexion.js')

app.use(express.json());

async function serverStart(){

    try{
    await sequelize.authenticate();

    console.log('Correct SQL authentication')

    app.listen(process.env.PORT, ()=>{
        console.log(`System Start in: http://${process.env.HOST}:${process.env.PORT}`)
    })
} catch(error){
    console.error('SQL error connection: ', error)
}
}

serverStart()

//Routes
registerView(app)
loginViews(app);
