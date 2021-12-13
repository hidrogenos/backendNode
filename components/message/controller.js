const store = require("./store");

const getMessages = (filterUser) => store.getMessages(filterUser);

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

const updateMessage =  (id, text) => {
  return new Promise(async (resolve, reject) => {
    if(!id || ! text){
      reject('Invalid data');
      return false;
    }
      const result = await store.updateText(id,text);
      resolve(result);
  });
}

const deleteMessage = (id) => {
  return new Promise((resolve, reject) => {
    if(!id){
      reject('Error en parametros');
      return false;
    }
    store.removeMessage(id)
    .then(() => resolve())
    .catch((e) => reject(e));
  })
}

module.exports = {
  getMessages,
  addMessage,
  updateMessage,
  deleteMessage
};
