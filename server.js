const express = require('express');
const app = express();
const server = require('http').Server(app);

const config = require('./config');

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const db =require('./db');
// const router = require('./components/message/network');
const router = require('./network/routers')

db(config.dbUrl);

app.use(cors());

// se indica si se utilizara json, xml, query, etc..
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(router);

socket.connect(server);
router(app);

// acceso a los archivos de public
app.use(config.publicRoute, express.static('public'));

server.listen(config.port, function () {
    console.log('La aplicacion esta escuchando en '+ config.host +':'+ config.port);
});

