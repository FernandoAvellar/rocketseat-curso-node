const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Iniciando o App
const app = express();
app.use(express.json());

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
app.listen(8080);