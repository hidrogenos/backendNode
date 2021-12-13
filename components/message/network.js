const express = require('express');
const response = require('./../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
  const filterUser = req.query.user || null;
  controller
    .getMessages(filterUser)
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

router.patch('/:id', (req, res) => {
  controller
    .updateMessage(req.params.id, req.body.text)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.error(req, res, 'Error interno', 400, error));
});

router.delete('/:id', (req, res) => {
  controller.deleteMessage(req.params.id)
  .then(() => response.success(req,res, 'Mesaje eliminado', 200))
  .catch((e) => response.error(req, res, 'Error interno', 500, e));
})

module.exports = router;
