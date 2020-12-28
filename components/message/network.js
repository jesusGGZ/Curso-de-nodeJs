const express = require('express');

const response = require('../../network/response');

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
    console.log(req.body);
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req, res, 'Error inesperado', 500,
        'Es solo una simulacion de los errores');
    }else{
        response.success(req, res, 'Creado correctamente', 201);
    }
});

module.exports = router;