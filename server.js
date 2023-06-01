const express = require("express");
const app = express();
const cors = require("cors");


const port = process.env.port || 8080;


const requireDir = require("require-dir");
const mongoose = require("mongoose");


app.use( express.urlencoded(
    { extended: false }
    ));
app.use( express.json());
app.use( cors());

requireDir("./models");

const Usuario = mongoose.model("usuario");
const Anuncio = mongoose.model("anuncio");
const Carona = mongoose.model("carona");

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`API RODANDO NA PORTA:  http://localhost:${port}`);

});