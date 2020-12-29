const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
   // Se usa un array para relacionar a dos usuarios
   users: [{
       type: Schema.ObjectId,
       ref: 'User',
   }],
});

const model = mongoose.model('Chat', mySchema);
module.exports = model;
