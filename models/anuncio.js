const mongoose = require("../database/index");
const AnuncioSchema = new mongoose.Schema({

  pedido: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  statusAnuncio: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  dataAnuncio: {
    type: String,
    default: new Date().toLocaleString(),
  },
  tipo: {
    type: String,
    required: true,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

mongoose.model("Anuncio", AnuncioSchema);