const express = require("express");
const app = express();
const controller = require("./controller");
require("dotenv").config();
const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("Connected to database");
});

app.post("/auth/register", controller.register);
app.post("/auth/login", controller.login);

app.listen(SERVER_PORT, console.log(`server listening on port ${SERVER_PORT}`));
