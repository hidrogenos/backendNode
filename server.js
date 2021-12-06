const express = require("express");
const bodyParser = require('body-parser');
const response = require('./network/response');
const router = express.Router();

const app = express();
app.use(bodyParser.json());
app.use(router);

router.get("/message", (req, res) => {
  console.log(req.headers);
  // res.send("Lista de mensajes");
  response.success(req, res, 'Lista de mensajes');
});

router.post("/message", (req, res) => {
  res.send("Mesaje añadido");
});

router.delete("/message", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.send("Mesaje eliminado");
});

app.use('/app', express.static('public'));

app.listen(3000, () => {
  console.log("la aplicación esta escuchando en  http://localhost:3000");
});
