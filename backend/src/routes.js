
const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');


const routes = express.Router();


routes.get('/ongs', OngController.index);
routes.get('/ongs/:id', OngController.show);
routes.post('/ongs', OngController.create);
routes.get('/incidents', IncidentController.index);
routes.get('/incidents/:id', IncidentController.show);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
routes.put('/incidents/:id', IncidentController.update);

module.exports = routes;
