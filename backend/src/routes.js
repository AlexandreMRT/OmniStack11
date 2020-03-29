const express = require('express');

const routes = express.Router();


routes.get('/', (request, response) => {
  return response.json({
    evento: 'Semana Omnistack',
    aluno: 'Alexandre Teixeira'
  });
});

module.exports = routes;