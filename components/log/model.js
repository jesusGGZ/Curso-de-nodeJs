const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    fecha: Date,
    departamento: String,
    servicio: String,
    tipo: String,
    log: {
        fecha: String,
        data: String,
        respuesta: String
    }
});

const model = mongoose.model('Log', mySchema);
module.exports = model;