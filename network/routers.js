// incorporacion de express
const express =require('express');
// incorporacion de network para recibir la peticiones
const message = require('../components/message/network');
const user = require('../components/user/network');
const chat = require('../components/chat/network');
const log = require('../components/log/network');

// grupo de rutas "message"
const routes = function (server) {
    server.use('/message', message);
    server.use('/user', user);
    server.use('/chat', chat);
    server.use('/log', log);
}

// Exportar modulo routes
module.exports = routes;