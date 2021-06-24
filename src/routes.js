const express = require('express');
const routes = express.Router();
const HomeController = require('./controllers/HomeController');
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');

routes.get('/', HomeController.index);
routes.get('/create-pass', HomeController.createPass);
routes.get('/room/:id', RoomController.index);
routes.post('/create-room', RoomController.createRoom);
routes.post('/room/:roomId/:questionId/:action', QuestionController.post);

module.exports = routes;
