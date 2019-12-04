const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// iniciando o app
const app = express();
app.use(express.json()); // diz para a aplicação para permitir usar dados em formato de Json

// iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',{
     useNewUrlParser: true, useUnifiedTopology: true});

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'))


app.listen(3001)