const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function (req, res) {
    controller.addLog(req.body.fecha,req.body.departamento, req.body.servicio, req.body.tipo, req.body.log)
    .then(data => {
        response.success(req, res, data, 201);
    })
    .catch(err => {
        response.error(req, res, 'Internal error', 500, err);
    });
});


router.get('/', function (req, res) {
    controller.getLogs().then(data =>{
        response.success(req, res, data, 200);
    })
    .catch(err => {
        response.error(req, res, 'Internal error', 500, err);
    });
});

module.exports = router;