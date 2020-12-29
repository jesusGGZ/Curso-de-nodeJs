const Model = require('./model');

// Se agrega un mensaje a la lista
function addMessage(message) {
    // list.push(message);
    
    const myMessage = new Model(message);
    
    myMessage.save();
}

// Retorna la lista de los mensajes de los usuarios sion especificar 
// o especificando de que usuario o usuarios.
async function getMessages(filterUser) {
    let filter = {}
    if (filterUser !== null) {
        filter = { user: filterUser};
    }
    const messages = await Model.find(filter);
    return messages;
}

function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    });
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
    remove: removeMessage,
}