const express = require("express");
const app = express();
const cors = require("cors");
const requireDir = require("require-dir");
const mongoose = require("mongoose");

const port = process.env.port || 8081;

app.use( express.urlencoded(
    { extended: false }
    ));
app.use( express.json());
app.use( cors());

requireDir("./models");

const Usuario = mongoose.model("Usuario");
const Anuncio = mongoose.model("Anuncio");
const Carona = mongoose.model("Carona");

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`API RODANDO NA PORTA:  http://localhost:${port}/api`);

});