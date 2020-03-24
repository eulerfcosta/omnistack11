
const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');


const routes = express.Router();


routes.get('/ongs', OngController.index);
routes.get('/ongs/:id', OngController.show);
routes.post('/ongs', OngController.create);
routes.get('/incidents', IncidentController.index);
routes.get('/incidents/:id', IncidentController.show);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
routes.put('/incidents/:id', IncidentController.update);
routes.get('/profile', ProfileController.index);

module.exports = routes;
