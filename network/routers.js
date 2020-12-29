// incorporacion de express
const express =require('express');
// incorporacion de network para recibir la peticiones
const message = require('../components/message/network');
const user = require('../components/user/network');
const chat = require('../components/chat/network');

// grupo de rutas "message"
const routes = function (server) {
    server.use('/message', message);
    server.use('/user', user);
    server.use('/chat', chat);
}

// Exportar modulo routes
module.exports = routes;