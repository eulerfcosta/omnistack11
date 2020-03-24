
const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Euler Costa'
    });
});

routes.get('/users/:id', (request, response) => {
    const params = request.params;

    console.log(params);

    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Euler Costa'
    });
});

module.exports = routes;
