const express = require('express');
const response = require('./../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', (req, res) => {
    controller.addUser(req.body.name)
    .then((user) => response.success(req, res, user, 201))
    .catch((e) => response.error(req, res, 'Error al crear usuario', 500, e));
})

module.exports = router;