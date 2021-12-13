const db = require('mongoose');

// 'mongodb://localhost:27017/telegrom'

const connect = async (url) => {
  await db.connect(url);
  console.log('[db] db conectada con exito');
};

module.exports = connect;
