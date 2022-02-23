const express = require("express");
const cors = require("cors");
let app = express();
require("dotenv").config()
const userView = require('./view/users')
const postView = require('./view/post')
const helpView = require('./view/help')
const friendsView = require('./view/friends')
const feedbackView = require('./view/feedback')
const coursesView = require('./view/courses')
const abilitiesView = require('./view/abilities')
const sequelize = require('./db/conexion.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

async function serverStart() {
  try {
    await sequelize.authenticate();

    console.log("Correct SQL authentication");

    app.listen(process.env.PORT, () => {
      console.log(
        `System Start in: http://${process.env.HOST}:${process.env.PORT}`);
    });
  } catch (error) {
    console.error("SQL error connection: ", error);
  }
}

serverStart();
//Routes
userView(app);
postView(app);
helpView(app);
friendsView(app);
feedbackView(app);
coursesView(app);
abilitiesView(app);