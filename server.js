const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const socket = require('./socket');
const db =require('./db');
// const router = require('./components/message/network');
const router = require('./network/routers')

db('mongodb+srv://jesus:jesus123@cluster0.hgjmo.mongodb.net/cursoNode?retryWrites=true&w=majority');

// se indica si se utilizara json, xml, query, etc..
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(router);

socket.connect(server);
router(app);

// acceso a los archivos de public
app.use('/app', express.static('public'));

server.listen(3000, function () {
    console.log('La aplicacion esta escuchando en http://localhost:3000');
});

