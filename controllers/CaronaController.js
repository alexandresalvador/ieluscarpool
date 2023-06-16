const mongoose = require('../database');

const Carona = mongoose.model("Carona");


module.exports = {

    async index(req, res) {
        const carona = await Carona.find().populate("anuncio").populate("motorista").populate("caroneiro");
        return res.json(carona);
    },

    async show(req, res) {
        const carona = await Carona.findById(req.params.id).populate("anuncio").populate("motorista").populate("caroneiro");
        return res.json(carona);
    },

    async save(req, res) {
        const carona = await Carona.create(req.body);
        console.log("A carona foi realizada!");
        return res.json(carona);
    },

    async update(req, res) {
        const carona = await Carona.findByIdAndUpdate( req.params.id, req.body, { new: true});
        console.log('A carona foi atualizada!');
        return res.json(carona);
    },

    async destroy(req, res) {
        const carona = await Carona.findByIdAndRemove(req.params.id);
        console.log(`A carona ${carona.announcement.title} foi removida`);
        return res.json({ message: `A carona ${carona.announcement.title} foi removida`,});
    },

    
    
};