// Crea una lista
const list = [];
// Se agrega un mensaje a la lista
function addMessage(message) {
    list.push(message);
}

// Retorna la lista de mensajes
function getMessages() {
    return list;
}

// Exporta las funciones como objeto
module.exports = {
    add: addMessage,
    list: getMessages,
    // get
    // update
    // delete
}