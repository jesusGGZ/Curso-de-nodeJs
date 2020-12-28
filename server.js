const express = require('express');
const bodyParser = require('body-parser');

const response = require('./network/response');

const router = express.Router();

var app = express();
// se indica si se utilizara json, xml, query, etc..
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', function (req, res) {
    // Incluir cabecera
    console.log(req.headers);
    // Mandar cabecera personalizada al cliente
    res.header({
        "custom-header": "Nuestro valor personalizado"
    })

    //res.send('Lista de mensajes');
    response.success(req, res, 'Lista de mensajes');
});

router.post('/message', function (req, res) {
    console.log(req.body);
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req, res, 'Error inesperado', 500,
        'Es solo una simulacion de los errores');
    }else{
        response.success(req, res, 'Creado correctamente', 201);
    }
});

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');

