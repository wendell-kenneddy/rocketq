const Questions = require('../model/Questions');
const Rooms = require('../model/Rooms');

module.exports = {
  async markAsRead(req, res) {
    const roomId = req.params.roomId;
    const questionId = req.params.questionId;
    const password = req.body.password;
    const roomExists = await Rooms.get(roomId);

    if (roomExists.pass == password) {
      await Questions.update('is_checked', 1, questionId);
      return res.redirect(`/room/${roomId}`);
    }

    return res.render('error', {
      error: 'Senha incorreta',
      roomId
    });
  },

  async delete(req, res) {
    const roomId = req.params.roomId;
    const questionId = req.params.questionId;
    const password = req.body.password;
    const roomExists = await Rooms.get(roomId);

    if (roomExists.pass == password) {
      await Questions.delete(questionId);
      return res.redirect(`/room/${roomId}`);
    }

    return res.render('error', {
      error: 'Senha incorreta',
      roomId
    });
  },

  async create(req, res) {
    const question = req.body.question;
    const roomId = req.params.roomId;

    await Questions.create(question, roomId);
    return res.redirect(`/room/${roomId}`)
  }
}