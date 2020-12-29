const express = require('express');
const multer = require('multer');

const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function (req, res) {
    // filtra los mensajes mediante id de usuario
    const filterMessages = req.query.chat || null;
    // toma la lista completa de mensajes
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        // Si hay algun error muesta un mensaje de error 500 
        .catch( e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        })
});

router.post('/', function (req, res) {
    
    controller.addMessage(req.body.chat, req.body.user, req.body.message)
    .then((fullMessage) => {
        response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
         console.log('[Error] ', e);
        response.error(req, res, 'Informacion invalida', 400,
        'Error en el controlador');
    });
});

router.patch('/:id', function (req, res) {

    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e =>{
            console.error(req, res, 'Error interno.', 500, e);
        });
});

router.delete('/:id', function (req, res) {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

module.exports = router;