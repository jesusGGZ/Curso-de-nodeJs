const db = require('mongoose');


db.Promise = global.Promise;
// Conexion a DB en mongo DB
async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
    });
    console.log('[db] Conectada con éxito');
}
    module.exports = connect;