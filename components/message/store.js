
const Model = require('./model');

const addMessage = (message) => {
    const myMessage = new Model(message);
    myMessage.save();
}

const getMessages = async (filterUser) => {
    const filter = filterUser ? { user: filterUser} : {};
    const data = await Model.find(filter);
    return data;
};

const updateText = async (id, text) => {
    const message = await Model.findById(id);
    message.message = text;
    const newMessage = await message.save();
    return newMessage;
}

const removeMessage = (id) => {
    return Model.deleteOne({ _id: id});
}

module.exports = {
    addMessage,
    getMessages,
    updateText,
    removeMessage
};