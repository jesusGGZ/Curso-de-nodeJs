const express = require('express');
const bodyParser = require('body-parser');

const db =require('./db');
db('mongodb+srv://jesus:jesus123@cluster0.hgjmo.mongodb.net/cursoNode?retryWrites=true&w=majority');

// const router = require('./components/message/network');
const router = require('./network/routers')

var app = express();
// se indica si se utilizara json, xml, query, etc..
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(router);

router(app);

// acceso a los archivos de public
app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');

