const express = require('express');
const routes = express.Router();
const HomeController = require('./controllers/HomeController');
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');

// Home
routes.get('/', HomeController.index);
routes.get('/create-pass', HomeController.createPass);

// Room
routes.get('/room/:id', RoomController.open);
routes.post('/enter-room', RoomController.enter);
routes.post('/create-room', RoomController.create);

// Questions
routes.post('/question/:roomId/:questionId/delete', QuestionController.delete);
routes.post('/question/:roomId/:questionId/check', QuestionController.markAsRead);
routes.post('/question/create/:roomId', QuestionController.create)

module.exports = routes;
