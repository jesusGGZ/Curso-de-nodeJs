const db = require('mongoose');
const Model = require('./model');

const user = 'jesus';
const pass = 'jesus123';
const host = 'cluster0.hgjmo.mongodb.net';
const database = 'cursoNode';
const uri = 'mongodb+srv://jesus:jesus123@cluster0.hgjmo.mongodb.net/cursoNode?retryWrites=true&w=majority';

db.Promise = global.Promise;
// Conexion a DB en mongo DB
db.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true, dbName: database})
    .then(() =>{
        console.log('[db] Conectada con éxito');
    }).catch( error => {
        console.error('[db] Error de conexion', error.message);
    });
// Se agrega un mensaje a la lista
function addMessage(message) {
    // list.push(message);
    
    const myMessage = new db.Model(message);
    
    myMessage.save();
}

// Retorna la lista de mensajes
async function getMessages() {
    // return list;
    const messages = await Model.find();
    return messages;
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id
    });

    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

// Exporta las funciones como objeto
module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    // get
    // update
    // delete
}