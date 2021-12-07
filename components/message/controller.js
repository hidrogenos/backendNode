const store = require("./store");

const getMessages = () => store.getMessages();

const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("[messageController] No hay usuario o mensaje");
      reject("Los datos son incorrectos");
      return false;
    }
    const fullMessage = {
      user,
      message,
      date: new Date(),
    };

    store.addMessage(fullMessage);
    resolve(fullMessage);
  });
};

module.exports = {
  getMessages,
  addMessage,
};
