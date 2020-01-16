const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require('cors');

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect(
    'mongodb+srv://fernando:fernando@cluster0-pweit.mongodb.net/nodeapi?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

requireDir("./models");

//Rotas: Tudo que vier começando com /api será redirecionado pro arquivo routes.js tratar
app.use('/api', require('./routes'));
app.listen(8080, () => {
    console.log('CORS-enabled web server listening on port 8080')
  });