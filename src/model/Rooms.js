const startDb = require('../db/config');

module.exports = {
  async get(id) {
    const db = await startDb();
    const rooms = id
      ? await db.get(`SELECT * FROM rooms WHERE id = ${id}`)
      : await db.all('SELECT * FROM rooms');


    await db.close();
    return rooms;
  },

  async create(roomId, roomPass) {
    const db = await startDb();

    await db.run(`INSERT INTO rooms (id, pass) VALUES (
      ${roomId},
      "${roomPass}"
    );`);

    await db.close();
  }
}
