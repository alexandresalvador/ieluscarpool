const mongoose = require('../database');

const Usuario = mongoose.model('usuario');

module.exports = {

        //login
    async login(req, res) {
        const login = await Usuario.findOne({ email: req.body.email }).clone();
        return res.json(login);
    },

    async index(req, res) {
        const user = await Usuario.find();
        return res.json(user);
    },

    async show(req, res) {
        const user = await Usuario.findById(req.params.id);
        return res.json(user);
    },

    async save(req, res) {
        const user = await Usuario.create(req.body);
        console.log('O Usuário foi cadastrado!');
        return res.json(user);
    },

    async destroy(req, res) {
        const user = await Usuario.findByIdAndRemove(req.params.id);
        return res.json({ message: `Usuário ${user.nome} removido!` });
    },

    async update(req, res) {
        const user = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        return res.json(user);
    },


    
};