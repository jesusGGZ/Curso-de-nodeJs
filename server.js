const express = require('express');
const bodyParser = require('body-parser');
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

    res.send('Lista de mensajes');
});

router.post('/message', function (req, res) {
    console.log(req.body);
    console.log(req.query);
    // se manda información al cliente
    res.send('Mensaje ' + req.body.text +' añadido correctamente');
});

router.delete('/message', function (req, res) {
    console.log(req.body);
    console.log(req.query);
    res.status(201).send([{error:'', body: 'Creado correctamente'}]);
});

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');

