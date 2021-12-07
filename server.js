const express = require("express");
const bodyParser = require('body-parser');
const response = require('./network/response');

const router = require('./network/routes');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

router(app);



app.use('/app', express.static('public'));

app.listen(3000, () => {
  console.log("la aplicación esta escuchando en  http://localhost:3000");
});
