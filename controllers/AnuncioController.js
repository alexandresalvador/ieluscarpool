const mongoose = require('../database');

const Anuncio = mongoose.model('Anuncio');


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
        console.log('O anúncio foi atualizado!');
        return res.json({
          message: `O anúncio ${anuncio.id} foi atualizado!`,});
    },

    async destroy(req, res) {
        const anuncio = await Anuncio.findByIdAndRemove(req.params.id);
        console.log('O anúncio foi removido!');
        return res.json({
          message: `O anúncio ${anuncio.id} foi removido!`,});
    },


    // caroneiro e motorista
    async CaronasOfertadas(req, res) {
        const anuncio = await Anuncio.find({
          type: 'motorista',
          status: 'active',
        }).populate('usuario');
        return res.json(anuncio);
      },

      async CaronasPedidas(req, res) {
        const anuncio = await Anuncio.find({
          type: 'caroneiro',
          status: 'active',
        }).populate('usuario');
        return res.json(anuncio);
      },

      async MinhasCaronasOfertadas(req, res) {
        const anuncio = await Anuncio.find({
          type: 'motorista',
          user: req.params.id,
        }).populate('usuario');
        return res.json(anuncio);
      },

      async MinhasCaronasPedidas(req, res) {
        const anuncio = await Anuncio.find({
          type: 'caroneiro',
          user: req.params.id,
        }).populate('usuario');
        return res.json(anuncio);
      },


};