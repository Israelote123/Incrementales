var express = require('express');
var app = express();
require('dotenv').config()
const sequelize = require('./db/conexion');
const loginViews = require('./view/login')

app.use(express.json())

async function serverStart() {
    try {
        await sequelize.authenticate();

        console.log('Correct SQL conexion');

        app.listen(process.env.PORT, function () {
            console.log(`Sistem start http://${process.env.HOST}:${process.env.PORT}`);
        });

      } catch (error) {
        console.error('SQL conexion error:', error);
      }
}

serverStart();

//Routes
loginViews(app);
