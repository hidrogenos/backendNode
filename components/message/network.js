const express = require('express');
const response = require('./../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
  controller
    .getMessages()
    .then((list) => response.success(req, res, list, 200))
    .catch((error) => response.error(req, res, 'Error', 400, error));
});

router.post('/', async (req, res) => {
  try {
    const fullMessage = await controller.addMessage(
      req.body.user,
      req.body.message
    );
    response.success(req, res, fullMessage, 200);
  } catch (error) {
    response.error(req, res, 'error al registrar mensaje', 400, error);
  }

  //   .then((fullMessage) => response.success(req, res, fullMessage, 200))
  //   .catch(error => response.error(req, res, 'error al registrar mensaje', 400, error));
});

router.delete('/', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.send('Mesaje eliminado');
});

module.exports = router;
