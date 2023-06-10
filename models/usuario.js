const mongoose = require("../database/index");
const UsuarioSchema = new mongoose.Schema({

  nome: {
    type: String,
    required: true,
    min: 5
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 10,
    max: 16,
  },
  curso:{
    type: String,
    required: true,
  },
  data_inicio:{
    type: Date,
    required: true,
  },
  data_termino:{
    type: Date,
    required: true,
  },
  dtnasc:{
    type: Date,
    required: true,
  },
  contato: {
    telefone: {
      type: String,
      required: true,
      min: 8,
      max: 9,
    },
  },
  endereco: {
    rua: {
      type: String,
      required: true,
      min: 3,
    },
    bairro: {
      type: String,
      required: true,
      min: 3,
    },
    cidade: {
      type: String,
      required: true,
      min: 3,
    },
    estado: {
      type: String,
      required: true,
      min: 2,
      max: 2,
    },
    cep: {
      type: String,
      required: true,
      min: 8,
      max: 8,
      },
    numero: {
      type: Number,
      required: false,
      min: 1,
    },
    complemento: {
      type: String,
      required: false,
      min: 3,
    },
  },
  dataCarona: {
    type: String,
    default: new Date().toLocaleString(),
  },
});

mongoose.model("Usuario", UsuarioSchema);