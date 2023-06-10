const express = require('express');
const routes = express.Router();

const UsuarioController = require('./controllers/UsuarioController');

const AnuncioController = require('./controllers/AnuncioController');

const CaronaController = require('./controllers/CaronaController');

// Rota de Login
routes.post('/login', UsuarioController.login);

// Rotas de usuario:
routes.get('/usuarios', UsuarioController.index);
routes.post('/usuario', UsuarioController.save);
routes.delete('/usuario/:id', UsuarioController.destroy);
routes.get('/usuario/:id', UsuarioController.show);
routes.put('/usuario/:id', UsuarioController.update);

// Rotas de anuncio:
routes.get('/anuncios', AnuncioController.index);
routes.post('/anuncio', AnuncioController.save);
routes.delete('/anuncio/:id', AnuncioController.destroy);
routes.get('/anuncio/:id', AnuncioController.show);
routes.put('/anuncio/:id', AnuncioController.update);

// Rotas de carona:
routes.get('/caronas', CaronaController.index);
routes.post('/carona', CaronaController.save);
routes.delete('/carona/:id', CaronaController.destroy);
routes.get('/carona/:id', CaronaController.show);
routes.put('/carona/:id', CaronaController.update);

// Rota de pedido de carona:
routes.get('/carona-pedido', AnuncioController.showPedidoCaronas);
routes.get('/meus-pedidos-carona/:id', AnuncioController.showMeusPedidos);

// Rota de oferta de carona:
routes.get('/carona-oferta', AnuncioController.showOfertaCaronas);
routes.get('/minhas-ofertas-carona/:id', AnuncioController.showMinhasOfertas);

module.exports = routes;