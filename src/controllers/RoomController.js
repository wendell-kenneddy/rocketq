const database = require('../db/config');
const Rooms = require('../model/Rooms');
const Questions = require('../model/Questions');

// Checks if the generated id already exists
const validateId = async id => {
  const db = await database();
  let existingIds = await db.all('SELECT id FROM rooms');
  let idAlreadyExists = existingIds.some(roomId => roomId === id);
  await db.close();
  return idAlreadyExists;
};

const generateId = () => {
  let roomId = Math.floor(Math.random() * 10).toString();

  for (let i = 0; i < 5; i++) {
    const randNum = Math.floor(Math.random() * 10).toString();

    roomId += randNum;
  }

  return roomId;
};

// Recursive function that calls itself again until an valid id is created
const tryCreateId = async () => {
  const id = generateId();
  const idAlreadyExists = await validateId(id);

  if (idAlreadyExists) {
    tryCreateId();
    return;
  }

  return id;
};

module.exports = {
  enter(req, res) {
    const roomId = req.body['room-id'];
    return res.redirect(`/room/${roomId}`);
  },

  async open(req, res) {
    const roomId = req.params.id;
    const questions = await Questions.get(roomId);
    const questionsRead = await Questions.get(roomId, true);
    let noQuestions = questionsRead.length == 0 && questions.length == 0
      ? true
      : false;

    return res.render('room', {
      roomId,
      questions,
      questionsRead,
      noQuestions
    });
  },

  async create(req, res) {
    const roomPass = req.body['room-pass'];
    const roomId = await tryCreateId();

    await Rooms.create(Number.parseInt(roomId), roomPass);

    return res.redirect(`/room/${roomId}`);
  }
}