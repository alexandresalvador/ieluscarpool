const mongoose = require('../database');

const Anuncio = mongoose.model('anuncio');

module.exports = {

    async index(req,res) {
        const anuncio = await Anuncio.find().populate('usuario');
        return res.json(anuncio);
    },

    async show(req,res) {
        const anuncio = await Anuncio.findById(req.params.id).populate('usuario');
        return res.json(anuncio);
    }, 

    async save(req,res) {
        const anuncio = await Anuncio.create(req.body);
        console.log('O anúncio foi cadastrado!');
        return res.json(anuncio);
    },

    async update(req,res) {
        const anuncio = await Anuncio.findByIdAndUpdate(req.params.id, req.body, { new: true});
        return res.json(anuncio)
    },

    async destroy(req, res) {
        const anuncio = await Anuncio.findByIdAndRemove(req.params.id);
        return res.json({
          message: `O anúncio ${anuncio.title} foi removido!`,});
    },


    // caroneiro e motorista
    async CaronasFeitas(req, res) {
        const anuncio = await Anuncio.find({
          type: 'motorista',
          status: 'active',
        }).populate('usuario');
        return res.json(anuncio);
      },

      async CaronasRecebidas(req, res) {
        const anuncio = await Anuncio.find({
          type: 'caroneiro',
          status: 'active',
        }).populate('usuario');
        return res.json(anuncio);
      },

      async MinhasCaronasFeitas(req, res) {
        const anuncio = await Anuncio.find({
          type: 'motorista',
          user: req.params.id,
        }).populate('usuario');
        return res.json(anuncio);
      },

      async MinhasCaronasRecebidas(req, res) {
        const anuncio = await Anuncio.find({
          type: 'caroneiro',
          user: req.params.id,
        }).populate('usuario');
        return res.json(anuncio);
      },


};