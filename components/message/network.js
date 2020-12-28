const express = require('express');

const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function (req, res) {
    // Incluir cabecera
    console.log(req.headers);
    // Mandar cabecera personalizada al cliente
    res.header({
        "custom-header": "Nuestro valor personalizado"
    })

    //res.send('Lista de mensajes');
    response.success(req, res, 'Lista de mensajes');
});

router.post('/', function (req, res) {
    
    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
        response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
        response.error(req, res, 'Informacion invalida', 400,
        'Error en el controlador');
    });
});

module.exports = router;