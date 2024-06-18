const express = require('express');
const bodyParser = require('body-parser');
const livrosRoutes = require('./routes/livrosRoutes');

const app = express();

// Middleware para parsear JSON
app.use(bodyParser.json());

// Rotas
app.use('/api', livrosRoutes);

module.exports = app;
