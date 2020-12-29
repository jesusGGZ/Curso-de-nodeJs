// se agrega el store
const store = require('./store');

function addMessage(chat, user, message) {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            console.error('[messageController] No hay chat, usuario o mensaje');
            reject('Los datos son incorrectos');
            return false;
        }
        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
        };
        // se agrega el mensaje
        store.add(fullMessage);

        resolve(fullMessage);
    });
}
// Toma la lista completa de mensajes y los id de usuario
function getMessages(filterChat) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterChat));
    })
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) =>{
        if (!id || !message) {
            reject('Invalid data');
            return false;
        }
        const result = await store.updateText(id, message);
        resolve(result);
    });
}

function deleteMessage(id) {
    return new Promise((resolve, reject) =>{
        if (!id) {
            reject('Id invalido');
            return false;
        }
        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            });
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}