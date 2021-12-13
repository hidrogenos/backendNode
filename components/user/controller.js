const store = require('./store');

const addUser = (name) => {
    if(!name){
        return Promise.reject('Parametro invalido');
    }

    const user = {name};
    return store.addUser(user);
}

module.exports = {
    addUser
}