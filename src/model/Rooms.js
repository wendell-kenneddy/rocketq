const startDb = require('../db/config');

module.exports = {
  async create(roomId, roomPass) {
    const db = await startDb();

    await db.run(`INSERT INTO rooms (id, pass) VALUES (
      ${roomId},
      "${roomPass}"
    );`);

    await db.close();
  }
}
