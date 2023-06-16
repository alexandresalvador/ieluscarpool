const mongoose = require('../database');

const Usuario = mongoose.model('Usuario');


module.exports = {

        //login
    async login(req, res) {
        const login = await Usuario.findOne({ email: req.body.email }).clone();
        return res.json(login);
    },

    async index(req, res) {
        const usuario = await Usuario.find();
        return res.json(usuario);
    },

    async show(req, res) {
        const usuario = await Usuario.findById(req.params.id);
        return res.json(usuario);
    },

    async save(req, res) {
        const usuario = await Usuario.create(req.body);
        console.log('O Usuário foi cadastrado!');
        return res.json(usuario);
    },

    async update(req, res) {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        console.log('O Usuário foi atualizado!');
        return res.json(usuario);
    },

    async destroy(req, res) {
        const usuario = await Usuario.findByIdAndRemove(req.params.id);
        console.log(`O Usuário ${usuario.nome} removido!`);
        return res.json({ message: `Usuário ${usuario.nome} removido!` });
    },


   
};