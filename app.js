const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');
const ejs = require('ejs');
const db = require('./pkg/db/index');
const sportHandler = require('./handlers/sportHandler');



const app = express();
app.use(cookieParser);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.set("view engine", "ejs");

db.init();

app.get("/sportovi", sportHandler.getAll);
app.get("/sportovi/:id", sportHandler.getOne);

app.post("/sportovi", sportHandler.create);
app.patch("/sportovi/:id", sportHandler.update);
app.delete("/sportovi/:id", sportHandler.delete);

app.listen(process.env.PORT, (err) => {
    if (err) {
      return console.log("Could not start service");
    }
    console.log("service started successfully on port 10000");
  });