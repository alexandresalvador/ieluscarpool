const mongoose = require("../database");

const Carona = mongoose.model("carona");


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
        return res.json(carona);
    },

    async destroy(req, res) {
        const carona = await Carona.findByIdAndRemove(req.params.id);
        return res.json({ message: `A carona ${carona.announcement.title} foi removida`,});
    },

    
    
};