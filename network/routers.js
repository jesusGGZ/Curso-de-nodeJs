// incorporacion de express
const express =require('express');
// incorporacion de network para recibir la peticiones
const router = require('../components/message/network');
const message = require('../components/message/network');

// grupo de rutas "message"
const routes = function (server) {
    server.use('/message', message);
}

// Exportar modulo routes
module.exports = routes;