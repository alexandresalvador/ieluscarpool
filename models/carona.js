const mongoose = require("../database/index");
const CaronaSchema = new mongoose.Schema({
    
  anuncio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Anúncio",
    required: true,
  },
  motorista: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UsuMotorista",
    required: true,
  },
  caroneiro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UsuCaroneiro",
    required: true,
  },
  dataCarona: {
    type: String,
    default: new Date().toLocaleString(),
  },
});

mongoose.model("Carona", CaronaSchema);