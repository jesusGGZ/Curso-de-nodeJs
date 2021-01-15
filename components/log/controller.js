const store = require('./store');

function addLog(fecha, departamento, servicio, tipo, log) {
    return new Promise((resolve, reject) => {
    if (!fecha || !departamento || !servicio || !tipo) {
        reject('Los datos son incorrectos');
        return false;
    }

    const log = {
        fecha: new Date(),
        departamento,
        servicio,
        tipo,
        log
    };

     store.add(log);

     //socket.io.emit('log', log);

     resolve(log);
    });
}

function getLogs() {
    return store.lists();
}

module.exports = {
    addLog,
    getLogs,
}