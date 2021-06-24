const Rooms = require('../model/Rooms');

module.exports = {
  index(req, res) {
    return res.render('room');
  },

  async createRoom(req, res) {
    const roomPass = req.body.pass;
    let roomId = Math.floor(Math.random() * 10).toString();

    for (let i = 0; i < 5; i++) {
      const randNum = Math.floor(Math.random() * 10).toString();

      roomId += randNum;
    }

    await Rooms.create(Number.parseInt(roomId), roomPass);

    return res.redirect('/room/' + roomId);
  }
}