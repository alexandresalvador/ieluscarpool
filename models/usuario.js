// const mongoose = require("../database/index");
// const UsuarioSchema = new mongoose.Schema({

//   nomeUsuario: {
//     type: String,
//     required: true,
//     min: 3
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   senha: {
//     type: String,
//     required: true,
//     min: 8,
//     max: 16,
//   },
//   endereco: {
//     cep: {
//       type: String,
//       required: false,
//       min: 8,
//       max: 8,
//     },
//     cidade: {
//       type: String,
//       required: false,
//       min: 3,
//     },
//     estado: {
//       type: String,
//       required: false,
//       min: 2,
//       max: 2,
//     },
//     rua: {
//       type: String,
//       required: false,
//       min: 3,
//     },
//     numero: {
//       type: Number,
//       required: false,
//       min: 1,
//     },
//   },
//   contato: {
//     telephone: {
//       type: String,
//       required: false,
//       min: 8,
//       max: 9,
//     },
//   },
//   dataCarona: {
//     type: String,
//     default: new Date().toLocaleString(),
//   },
// });

// mongoose.model("Usuario", UsuarioSchema);