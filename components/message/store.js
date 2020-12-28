const db = require('mongoose');
const model = require('./model');

db.Promise = global.Promise;
// Conexion a DB en mongo DB
db.connect('mongodb+srv://jesus:jesus123@cluster0.hgjmo.mongodb.net/cursoNode?retryWrites=true&w=majority',{
    useNewUrlParser: true,
});
console.log('[db] Conectada con éxito');

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

// Exporta las funciones como objeto
module.exports = {
    add: addMessage,
    list: getMessages,
    // get
    // update
    // delete
}