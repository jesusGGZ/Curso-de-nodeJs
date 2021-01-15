const Model = require('./model');

function addLog(log) {
    const myLog = new Model(log);
    return myLog.save();
}

async function getLogs() {
    const logs = await Model.find();
    return logs;
}

module.exports = {
    add: addLog,
    lists: getLogs,
}