const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const message = new Schema({
    user: String,
    message: {
        type: String,
        required: true,
    },
    date: Date,
});

const model = mongoose.model('message', message);
module.exports = model;
