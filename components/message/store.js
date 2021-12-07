const db = require('mongoose');
const Model = require('./model');

// mongodb://localhost:27017/admin/telegrom

db.connect('mongodb://localhost:27017/telegrom')
console.log('[db] db conectada con exito');

const addMessage = (message) => {
    const myMessage = new Model(message);
    myMessage.save();
}

const getMessages = () => Model.find();

module.exports = {
    addMessage,
    getMessages
};