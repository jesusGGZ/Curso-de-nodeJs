const express = require('express');
// import express form 'express';

var app = express();

app.use('/', function (req, res) {
    res.send('Hola');
});

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');

// Otra forma de hacerlo
//app.use('/', (req1,res1) => res1.send('fff');